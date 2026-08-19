/**
 * Dynamic props — kickable beach balls, tumbling boxes, floating debris.
 *
 * A tiny impulse-based rigid-body sim sized for a beach: every body is a sphere
 * or a box with one contact point, integrated at a fixed 60 Hz step decoupled
 * from the frame rate (same accumulator shape as `input/player.js`). Contact
 * friction at the support point is what turns a kicked ball's slide into a roll,
 * so balls rotate the way they travel instead of skating. Resting bodies sleep
 * and cost a distance check per frame.
 *
 * Not a general engine: no rotating colliders, no stacking, no continuous
 * collision. It is tuned for "walk into a beach ball and it takes off".
 *
 *   const props = createPropPhysics({ scene, bounds: BOUNDS, colliders, isWood: level.isWood });
 *   for (const b of level.balls) props.add(b);
 *   props.tick(dt, player.pos, player.vel);
 *
 * Other systems shove props with `props.impulse(mesh, dir, strength)` or
 * `props.explode(pos, radius, strength)` (punches, lasers, falling ragdolls).
 */
import * as THREE from "three";

/** Sim step. Matches `TICK` in input/player.js. */
export const PROP_STEP = 1 / 60;

/** Gravity — heavier than real so arcs read at game scale. */
const G = 14;
/** Max sim steps per frame: a stalled tab must not run a 3 s catch-up. */
const MAX_SUB = 4;
/** Below this, contacts stop bouncing (kills the buzz at the end of a bounce). */
const BOUNCE_MIN = 0.9;
const SLEEP_V = 0.16;
const SLEEP_W = 0.55;
const SLEEP_TIME = 0.45;
const WAKE_V = 0.34;
const MAX_SPEED = 30;
const MAX_SPIN = 26;
const SKIN = 0.004;

/**
 * World defaults, mirroring `GC` in world/goldCoast.js. Passed in `opts` when
 * the level moves. Kept as literals so this module only depends on three.
 */
const DEF = {
  /** Boardwalk deck: box(_, 0.2, 9.2) centred y=0.12 at z=16, |x| < 35. */
  boardwalkY: 0.22,
  /** Ocean plane's shoreward edge (GC.oceanZ - 10 + 18). */
  waterEdgeZ: -14,
  /** Wet-sand strip: damps more than dry sand, still solid. */
  wetEdgeZ: -3,
  /** Still-water level (ocean mesh y). */
  waterY: 0.02,
  /** Centre of the ocean plane in z — the swell's phase origin. */
  swellZ0: -32,
  /** Seabed fall-off past the shoreline, m per m, and its floor. */
  bedSlope: 0.13,
  bedDepth: 2.2,
};

/** mu = contact friction, bounce = restitution scale, roll = rolling resistance /s. */
const SAND = { mu: 0.85, bounce: 0.5, roll: 0.9, creep: 0.45 };
const WOOD = { mu: 0.5, bounce: 0.92, roll: 0.3, creep: 0.2 };
const WET = { mu: 0.95, bounce: 0.34, roll: 1.5, creep: 0.7 };

/** Per-type defaults; `add(mesh, opts)` overrides any of them. */
const TYPES = {
  /** Beach balls, coconuts: light, bouncy, rolls forever. */
  sphere: { density: 45, e: 0.62, mu: 1, drag: 0.06, buoy: 5, kick: 1, lift: 0.5 },
  /** Surfboards, chairs, cups, drums, the boombox: tumbles, settles flat. */
  box: { density: 170, e: 0.3, mu: 1, drag: 0.12, buoy: 2.6, kick: 0.8, lift: 0.28 },
  /** Cups, litter, small stuff: light, skitters, stops fast. */
  debris: { density: 40, e: 0.36, mu: 1, drag: 0.9, buoy: 4, kick: 1.15, lift: 0.55 },
};

// --- scratch: nothing in the hot path allocates ------------------------------
const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _box = new THREE.Box3();
const _size = new THREE.Vector3();
const _ctr = new THREE.Vector3();
const _ground = { y: 0, surf: SAND, water: false };
const _rc = { x: 0, y: 0, z: 0 };
const _col = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

/** q += 0.5 * (0,w) ⊗ q * dt, renormalised. World-space angular velocity. */
function integrateQ(q, wx, wy, wz, dt) {
  const hx = wx * dt * 0.5;
  const hy = wy * dt * 0.5;
  const hz = wz * dt * 0.5;
  const { x, y, z, w } = q;
  const dw = -(hx * x + hy * y + hz * z);
  const dx = hx * w + hy * z - hz * y;
  const dy = hy * w + hz * x - hx * z;
  const dz = hz * w + hx * y - hy * x;
  let nx = x + dx;
  let ny = y + dy;
  let nz = z + dz;
  let nw = w + dw;
  const len = Math.hypot(nx, ny, nz, nw) || 1;
  q.set(nx / len, ny / len, nz / len, nw / len);
}

/**
 * Nearest axis-aligned orientation. A knocked-over chair keeps whichever face
 * it landed on but stops balancing on a corner.
 */
function snapQuat(q, out) {
  _m.makeRotationFromQuaternion(q);
  const e = _m.elements;
  _col[0][0] = e[0];
  _col[0][1] = e[1];
  _col[0][2] = e[2];
  _col[1][0] = e[4];
  _col[1][1] = e[5];
  _col[1][2] = e[6];
  _col[2][0] = e[8];
  _col[2][1] = e[9];
  _col[2][2] = e[10];
  let up = 0;
  for (let i = 1; i < 3; i++) if (Math.abs(_col[i][1]) > Math.abs(_col[up][1])) up = i;
  const other = (up + 1) % 3;
  const third = (up + 2) % 3;
  const sign = _col[up][1] >= 0 ? 1 : -1;
  const ang = Math.round(Math.atan2(_col[other][0], _col[other][2]) / (Math.PI / 2)) * (Math.PI / 2);
  _col[up][0] = 0;
  _col[up][1] = sign;
  _col[up][2] = 0;
  _col[other][0] = Math.sin(ang);
  _col[other][1] = 0;
  _col[other][2] = Math.cos(ang);
  const a = _col[up];
  const b = _col[other];
  _col[third][0] = a[1] * b[2] - a[2] * b[1];
  _col[third][1] = a[2] * b[0] - a[0] * b[2];
  _col[third][2] = a[0] * b[1] - a[1] * b[0];
  const c0 = _col[0];
  const c1 = _col[1];
  const c2 = _col[2];
  _m.set(c0[0], c1[0], c2[0], 0, c0[1], c1[1], c2[1], 0, c0[2], c1[2], c2[2], 0, 0, 0, 0, 1);
  out.setFromRotationMatrix(_m);
}

/**
 * Support point of a box, as a world offset from its centre. On a corner or
 * edge that is the lowest vertex — the torque there is what tips a box over.
 * Once a face is flat on the ground the point slides under the centre, or the
 * single contact would rock the box forever instead of letting it sleep.
 */
function boxSupport(b, out) {
  _m.makeRotationFromQuaternion(b.q);
  const e = _m.elements;
  const sx = e[1] >= 0 ? -1 : 1;
  const sy = e[5] >= 0 ? -1 : 1;
  const sz = e[9] >= 0 ? -1 : 1;
  const ax = sx * b.hx;
  const ay = sy * b.hy;
  const az = sz * b.hz;
  out.x = e[0] * ax + e[4] * ay + e[8] * az;
  out.y = e[1] * ax + e[5] * ay + e[9] * az;
  out.z = e[2] * ax + e[6] * ay + e[10] * az;
  const flat = Math.max(Math.abs(e[1]), Math.abs(e[5]), Math.abs(e[9]));
  if (flat > 0.9) {
    const k = 1 - clamp((flat - 0.9) / 0.085, 0, 1);
    out.x *= k;
    out.z *= k;
  }
}

/**
 * A slab settling on a thin edge (a surfboard on its rail) is stable to a
 * one-point contact but silly to look at. Nudge it over onto a real face.
 */
function topple(b, dt) {
  _m.makeRotationFromQuaternion(b.q);
  const e = _m.elements;
  const a1 = Math.abs(e[1]);
  const a5 = Math.abs(e[5]);
  const a9 = Math.abs(e[9]);
  const up = a1 > a5 ? (a1 > a9 ? 0 : 2) : a5 > a9 ? 1 : 2;
  if (up === b.thin) return false;
  const axis = 3 - up - b.thin; // the remaining local axis: it falls about that
  const c = axis * 4;
  let ax = e[c];
  let az = e[c + 2];
  const L = Math.hypot(ax, az);
  if (L < 0.2) return false;
  ax /= L;
  az /= L;
  b.w.x += ax * b.spin0 * 7 * dt;
  b.w.z += az * b.spin0 * 7 * dt;
  return true;
}

/**
 * One contact: normal impulse with restitution, then a Coulomb friction impulse
 * at the same point. For a sphere the friction impulse is what spins it up, so
 * a kicked ball skids briefly and then rolls.
 */
function resolveContact(b, rx, ry, rz, nx, ny, nz, e, mu, load) {
  let vx = b.v.x + (b.w.y * rz - b.w.z * ry);
  let vy = b.v.y + (b.w.z * rx - b.w.x * rz);
  let vz = b.v.z + (b.w.x * ry - b.w.y * rx);
  const vn = vx * nx + vy * ny + vz * nz;
  const cnx = ry * nz - rz * ny;
  const cny = rz * nx - rx * nz;
  const cnz = rx * ny - ry * nx;
  const kn = b.invM + b.invI * (cnx * cnx + cny * cny + cnz * cnz);
  let jn = 0;
  if (vn < 0) {
    const rest = -vn > BOUNCE_MIN ? e : 0;
    jn = (-(1 + rest) * vn) / kn;
    b.v.x += nx * jn * b.invM;
    b.v.y += ny * jn * b.invM;
    b.v.z += nz * jn * b.invM;
    b.w.x += cnx * jn * b.invI;
    b.w.y += cny * jn * b.invI;
    b.w.z += cnz * jn * b.invI;
    vx = b.v.x + (b.w.y * rz - b.w.z * ry);
    vy = b.v.y + (b.w.z * rx - b.w.x * rz);
    vz = b.v.z + (b.w.x * ry - b.w.y * rx);
  }
  const vn2 = vx * nx + vy * ny + vz * nz;
  let tx = vx - nx * vn2;
  let ty = vy - ny * vn2;
  let tz = vz - nz * vn2;
  const tl = Math.hypot(tx, ty, tz);
  if (tl < 1e-4) return;
  tx /= tl;
  ty /= tl;
  tz /= tl;
  const ctx = ry * tz - rz * ty;
  const cty = rz * tx - rx * tz;
  const ctz = rx * ty - ry * tx;
  const kt = b.invM + b.invI * (ctx * ctx + cty * cty + ctz * ctz);
  const jt = Math.min(tl / kt, mu * Math.max(jn, load));
  b.v.x -= tx * jt * b.invM;
  b.v.y -= ty * jt * b.invM;
  b.v.z -= tz * jt * b.invM;
  b.w.x -= ctx * jt * b.invI;
  b.w.y -= cty * jt * b.invI;
  b.w.z -= ctz * jt * b.invI;
}

/**
 * @param {object} opts
 * @param {THREE.Scene} [opts.scene] Only used by `remove(mesh, true)`.
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} opts.bounds Play area.
 * @param {{COL:any[]}|any[]} [opts.colliders] `createColliders()` or its COL array; read live.
 * @param {(x:number,z:number)=>boolean} [opts.isWood] Boardwalk test (`level.isWood`).
 * @param {object} [opts.world] Overrides for DEF (boardwalkY, waterEdgeZ, waterY, …).
 * @param {(x:number,z:number,t:number)=>number} [opts.waterHeight] Swell height sampler.
 * @param {number} [opts.playerRadius=0.42] Kick reach around the player capsule.
 * @param {number} [opts.playerHeight=1.9]
 * @param {number} [opts.colliderTop=2.4] Above this a prop sails over world AABBs.
 * @param {number} [opts.kickGain=1.55] Momentum transfer: 1 = shove, 2 = cannon.
 */
export function createPropPhysics(opts = {}) {
  const scene = opts.scene || null;
  const bounds = opts.bounds || { minX: -44, maxX: 44, minZ: -34, maxZ: 34 };
  const colRef = opts.colliders || null;
  const isWood = opts.isWood || null;
  const W = Object.assign({}, DEF, opts.world || {});
  const playerRadius = opts.playerRadius ?? 0.42;
  const playerHeight = opts.playerHeight ?? 1.9;
  const colliderTop = opts.colliderTop ?? 2.4;
  const kickGain = opts.kickGain ?? 1.55;
  const gravity = opts.gravity ?? G;

  /**
   * Ocean swell, the same shape goldCoast.js drives its ocean mesh with, at half
   * amplitude: a prop that follows the full crest-to-trough dips under the sand
   * plane (y = 0) in the shallows and vanishes. Override for a bigger sea.
   */
  const waterHeight =
    opts.waterHeight ||
    ((x, z, t) =>
      W.waterY +
      (Math.sin(x * 0.12 + t * 1.35) * 0.16 + Math.sin((z - W.swellZ0) * 0.2 + t * 0.95) * 0.1) * 0.5);

  /** @type {any[]} */
  const bodies = [];
  const byMesh = new Map();
  let acc = 0;
  let time = 0;
  let enabled = true;
  let awakeCount = 0;

  const cols = () => (Array.isArray(colRef) ? colRef : colRef?.COL || null);

  /** Ground under (x,z): height, surface constants, and whether it is seabed. */
  function groundAt(x, z) {
    if (isWood && isWood(x, z)) {
      _ground.y = W.boardwalkY;
      _ground.surf = WOOD;
      _ground.water = false;
      return _ground;
    }
    if (z < W.waterEdgeZ) {
      _ground.y = -Math.min(W.bedDepth, (W.waterEdgeZ - z) * W.bedSlope);
      _ground.surf = WET;
      _ground.water = true;
      return _ground;
    }
    _ground.y = 0;
    _ground.surf = z < W.wetEdgeZ ? WET : SAND;
    _ground.water = false;
    return _ground;
  }

  function wake(b) {
    if (!b.awake) {
      b.awake = true;
      awakeCount++;
    }
    b.sleepT = 0;
  }

  function sleep(b) {
    if (b.awake) {
      b.awake = false;
      awakeCount--;
    }
    b.v.set(0, 0, 0);
    b.w.set(0, 0, 0);
    b.sleepT = 0;
  }

  function sync(b) {
    b.mesh.quaternion.copy(b.q);
    _v.copy(b.off).applyQuaternion(b.q);
    b.mesh.position.set(b.p.x - _v.x, b.p.y - _v.y, b.p.z - _v.z);
  }

  /**
   * Register a mesh as a dynamic prop. Defaults come from its bounding box
   * measured with its own rotation zeroed, so a prop whose origin sits at its
   * feet (chairs, cups) still spins about its centre of mass.
   *
   * @param {THREE.Object3D} mesh
   * @param {object} [o]
   * @param {"sphere"|"box"|"debris"} [o.type] Default: sphere if the mesh looks round.
   * @param {number} [o.mass] kg. Default: type density × volume.
   * @param {number} [o.radius] Sphere radius / horizontal collision radius.
   * @param {number} [o.hx] [o.hy] [o.hz] Box half-extents.
   * @param {number} [o.restitution] [o.friction] [o.drag] [o.buoyancy]
   * @param {number} [o.kick=1] Momentum multiplier when the player walks into it.
   * @param {boolean} [o.fixed] Registered but never simulated (until `wake`).
   * @returns {object} body
   */
  function add(mesh, o = {}) {
    if (!mesh) return null;
    const prev = byMesh.get(mesh);
    if (prev) return prev;

    const p0 = mesh.position.clone();
    const q0 = mesh.quaternion.clone();
    mesh.position.set(0, 0, 0);
    mesh.quaternion.identity();
    _box.setFromObject(mesh);
    mesh.position.copy(p0);
    mesh.quaternion.copy(q0);
    mesh.updateMatrixWorld(true);
    if (_box.isEmpty()) _box.set(new THREE.Vector3(-0.2, -0.2, -0.2), new THREE.Vector3(0.2, 0.2, 0.2));
    _box.getSize(_size);
    _box.getCenter(_ctr);

    const hx = o.hx ?? Math.max(0.02, _size.x / 2);
    const hy = o.hy ?? Math.max(0.02, _size.y / 2);
    const hz = o.hz ?? Math.max(0.02, _size.z / 2);
    const round = mesh.userData?.radius != null || mesh.geometry?.type === "SphereGeometry";
    const type = o.type || (round ? "sphere" : "box");
    const D = TYPES[type] || TYPES.box;

    const r =
      o.radius ??
      (type === "sphere" ? mesh.userData?.radius ?? (hx + hy + hz) / 3 : Math.hypot(hx, hz));
    const vol = type === "sphere" ? (4 / 3) * Math.PI * r * r * r : 8 * hx * hy * hz;
    const mass = Math.max(0.05, o.mass ?? D.density * vol);
    const inertia =
      type === "sphere" ? 0.4 * mass * r * r : (mass * (hx * hx + hy * hy + hz * hz)) / 3;

    const b = {
      mesh,
      type,
      sphere: type === "sphere",
      mass,
      invM: 1 / mass,
      invI: 1 / Math.max(1e-4, inertia),
      r,
      hx,
      hy,
      hz,
      off: _ctr.clone(),
      e: o.restitution ?? D.e,
      mu: o.friction ?? D.mu,
      drag: o.drag ?? D.drag,
      buoy: o.buoyancy ?? D.buoy,
      kick: o.kick ?? D.kick,
      lift: o.lift ?? D.lift,
      p: new THREE.Vector3(),
      v: new THREE.Vector3(),
      w: new THREE.Vector3(),
      q: q0.clone(),
      home: { p: new THREE.Vector3(), q: q0.clone() },
      awake: false,
      sleepT: 0,
      grounded: false,
      sub: 0,
      fixed: !!o.fixed,
      /** Index of the flattest local axis, and whether this shape is a slab. */
      thin: hx < hy ? (hx < hz ? 0 : 2) : hy < hz ? 1 : 2,
      slab: o.topple ?? Math.min(hx, hy, hz) < 0.4 * Math.max(hx, hy, hz),
      spin0: ((Math.round(Math.abs(p0.x) * 3 + Math.abs(p0.z) * 5) & 1) ? 1 : -1),
    };
    _v.copy(b.off).applyQuaternion(b.q);
    b.p.set(p0.x + _v.x, p0.y + _v.y, p0.z + _v.z);
    b.home.p.copy(b.p);
    bodies.push(b);
    byMesh.set(mesh, b);
    if (o.awake) wake(b);
    return b;
  }

  /** @param {Iterable<THREE.Object3D>} meshes */
  function addAll(meshes, o) {
    const out = [];
    if (!meshes) return out;
    for (const m of meshes) {
      const b = add(m, o);
      if (b) out.push(b);
    }
    return out;
  }

  function get(target) {
    return target && target.mesh ? target : byMesh.get(target) || null;
  }

  function remove(target, fromScene = false) {
    const b = get(target);
    if (!b) return false;
    const i = bodies.indexOf(b);
    if (i >= 0) bodies.splice(i, 1);
    byMesh.delete(b.mesh);
    if (b.awake) awakeCount--;
    if (fromScene && scene) scene.remove(b.mesh);
    return true;
  }

  /**
   * Shove a prop — punches, lasers, a body falling on it, a gull strike.
   * @param {THREE.Object3D|object} target mesh or body
   * @param {{x:number,y:number,z:number}} dir need not be normalised
   * @param {number} strength impulse in kg·m/s (or m/s with `velocity: true`)
   * @param {{velocity?:boolean, spin?:number, lift?:number}} [o]
   */
  function impulse(target, dir, strength = 1, o = {}) {
    const b = get(target);
    if (!b || !dir) return false;
    const L = Math.hypot(dir.x, dir.y || 0, dir.z) || 1;
    const dv = (o.velocity ? strength : strength * b.invM);
    const nx = dir.x / L;
    const ny = (dir.y || 0) / L;
    const nz = dir.z / L;
    b.v.x += nx * dv;
    b.v.y += ny * dv + (o.lift ?? b.lift) * dv * 0.35;
    b.v.z += nz * dv;
    const spin = o.spin ?? 0.7;
    if (spin) {
      // Torque about the horizontal axis across the push: rolls it away from you.
      b.w.x += -nz * dv * spin * (b.sphere ? 1 / b.r : 0.9);
      b.w.z += nx * dv * spin * (b.sphere ? 1 / b.r : 0.9);
    }
    b.fixed = false;
    wake(b);
    return true;
  }

  /** Radial shove — explosions, laser hits, a panic stampede. Returns hits. */
  function explode(center, radius = 3, strength = 8, o = {}) {
    let n = 0;
    for (const b of bodies) {
      const dx = b.p.x - center.x;
      const dy = b.p.y - (center.y ?? b.p.y);
      const dz = b.p.z - center.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > radius) continue;
      const f = 1 - d / radius;
      _v.set(dx, Math.max(0.35, dy), dz);
      impulse(b, _v, strength * f * f, o);
      n++;
    }
    return n;
  }

  // --- the step ---------------------------------------------------------------

  function playerPass(playerPos, playerVel) {
    if (!playerPos) return;
    const pvx = playerVel?.x || 0;
    const pvz = playerVel?.z || 0;
    const moving = Math.hypot(pvx, pvz) > 0.05;
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (b.fixed) continue;
      const dx = b.p.x - playerPos.x;
      const dz = b.p.z - playerPos.z;
      const reach = playerRadius + b.r;
      const d2 = dx * dx + dz * dz;
      if (d2 > reach * reach) continue;
      const low = b.p.y - b.r;
      const high = b.p.y + b.r;
      if (low > playerPos.y + playerHeight || high < playerPos.y - 0.35) continue;
      const d = Math.sqrt(d2) || 1e-4;
      const nx = dx / d;
      const nz = dz / d;
      const push = reach - d;
      b.p.x += nx * push;
      b.p.z += nz * push;
      const rel = pvx * nx + pvz * nz - (b.v.x * nx + b.v.z * nz);
      if (rel > 0.05) {
        const add = rel * kickGain * b.kick;
        b.v.x += nx * add;
        b.v.z += nz * add;
        // Pop it up a little — capped, or repeat contacts in one stride stack.
        if (b.p.y - b.r < groundAt(b.p.x, b.p.z).y + 0.12) {
          b.v.y = Math.min(3.6, b.v.y + rel * b.lift);
        }
        // Topspin, so it leaves the foot already turning the way it travels.
        if (b.sphere) {
          const spin = (add / b.r) * 0.4;
          b.w.x += nz * spin;
          b.w.z += -nx * spin;
        }
        wake(b);
      } else if (moving || push > 0.002) {
        b.v.x += nx * 0.9 * b.kick;
        b.v.z += nz * 0.9 * b.kick;
        wake(b);
      }
    }
  }

  function bodyStep(b, dt) {
    // --- water: buoyancy, swell, drag -----------------------------------------
    let sub = 0;
    if (b.p.z < W.waterEdgeZ + 0.6) {
      const s = waterHeight(b.p.x, b.p.z, time);
      const span = Math.max(0.08, (b.sphere ? b.r : b.hy) * 2);
      sub = clamp((s - (b.p.y - (b.sphere ? b.r : b.hy))) / span, 0, 1);
      // Shore fade so a ball entering the shallows eases into floating.
      sub *= clamp((W.waterEdgeZ + 0.6 - b.p.z) / 1.2, 0, 1);
      if (sub > 0.02) {
        b.v.y += gravity * b.buoy * sub * dt;
        b.v.y -= b.v.y * Math.min(1, 3.4 * sub * dt);
        const k = Math.min(1, 1.5 * sub * dt);
        b.v.x -= b.v.x * k;
        b.v.z -= (b.v.z - 0.45) * k; // gentle shoreward set of the swell
        // Ride the face of the wave: downhill push along the surface gradient.
        b.v.x -= Math.cos(b.p.x * 0.12 + time * 1.35) * 0.0192 * gravity * sub * dt;
        b.v.z -= Math.cos((b.p.z - W.swellZ0) * 0.2 + time * 0.95) * 0.02 * gravity * sub * dt;
        b.w.x -= b.w.x * Math.min(1, 2.2 * sub * dt);
        b.w.y -= b.w.y * Math.min(1, 1.4 * sub * dt);
        b.w.z -= b.w.z * Math.min(1, 2.2 * sub * dt);
      }
    }
    b.sub = sub;

    b.v.y -= gravity * dt * (1 - Math.min(1, sub));
    const dragK = Math.min(1, (b.drag + sub * 1.2) * dt);
    b.v.x -= b.v.x * dragK;
    b.v.y -= b.v.y * dragK * 0.4;
    b.v.z -= b.v.z * dragK;

    b.p.x += b.v.x * dt;
    b.p.y += b.v.y * dt;
    b.p.z += b.v.z * dt;

    // --- ground contact --------------------------------------------------------
    const g2 = groundAt(b.p.x, b.p.z);
    if (b.sphere) {
      _rc.x = 0;
      _rc.y = -b.r;
      _rc.z = 0;
    } else {
      boxSupport(b, _rc);
    }
    const pen = g2.y - (b.p.y + _rc.y);
    b.grounded = false;
    if (pen > -SKIN) {
      if (pen > 0) b.p.y += pen;
      b.grounded = true;
      const load = b.mass * gravity * dt;
      resolveContact(b, _rc.x, _rc.y, _rc.z, 0, 1, 0, b.e * g2.surf.bounce, b.mu * g2.surf.mu, load);
      // Rolling resistance: bleeds linear and angular together so the ball keeps
      // rolling (not sliding) as it slows, then a small creep term stops it dead.
      const rk = Math.min(1, g2.surf.roll * (1 - sub * 0.4) * dt);
      b.v.x -= b.v.x * rk;
      b.v.z -= b.v.z * rk;
      b.w.x -= b.w.x * rk;
      b.w.y -= b.w.y * rk * 1.6;
      b.w.z -= b.w.z * rk;
      const hs = Math.hypot(b.v.x, b.v.z);
      const creep = g2.surf.creep * dt;
      if (hs > 1e-5) {
        const f = Math.max(0, hs - creep) / hs;
        b.v.x *= f;
        b.v.z *= f;
      }
      if (!b.sphere) {
        const spin = b.w.length();
        if (hs < 0.6 && spin < 2.2 && !(b.slab && topple(b, dt))) {
          snapQuat(b.q, _q);
          b.q.slerp(_q, Math.min(1, 5 * dt));
          b.w.multiplyScalar(Math.max(0, 1 - 6 * dt));
        }
      }
    }
    if (b.p.y < -6) {
      b.p.y = g2.y + b.r;
      b.v.set(0, 0, 0);
    }
  }

  function worldPass(b) {
    const e = b.e * 0.7;
    const C = cols();
    if (C && b.p.y - b.r < colliderTop) {
      for (let i = 0; i < C.length; i++) {
        const c = C[i];
        if (
          b.p.x < c.minX - b.r ||
          b.p.x > c.maxX + b.r ||
          b.p.z < c.minZ - b.r ||
          b.p.z > c.maxZ + b.r
        )
          continue;
        const cx = clamp(b.p.x, c.minX, c.maxX);
        const cz = clamp(b.p.z, c.minZ, c.maxZ);
        let nx = b.p.x - cx;
        let nz = b.p.z - cz;
        let d = Math.hypot(nx, nz);
        if (d < 1e-5) {
          // Centre inside the box: eject along the shallowest face.
          const dxl = b.p.x - c.minX;
          const dxr = c.maxX - b.p.x;
          const dzl = b.p.z - c.minZ;
          const dzr = c.maxZ - b.p.z;
          const mn = Math.min(dxl, dxr, dzl, dzr);
          nx = mn === dxl ? -1 : mn === dxr ? 1 : 0;
          nz = nx !== 0 ? 0 : mn === dzl ? -1 : 1;
          d = 0;
          b.p.x += nx * (mn + b.r);
          b.p.z += nz * (mn + b.r);
        } else {
          nx /= d;
          nz /= d;
          const push = b.r - d;
          b.p.x += nx * push;
          b.p.z += nz * push;
        }
        const vn = b.v.x * nx + b.v.z * nz;
        if (vn < 0) {
          b.v.x -= (1 + e) * vn * nx;
          b.v.z -= (1 + e) * vn * nz;
          b.w.x *= 0.7;
          b.w.z *= 0.7;
        }
      }
    }
    if (b.p.x < bounds.minX + b.r) {
      b.p.x = bounds.minX + b.r;
      if (b.v.x < 0) b.v.x *= -e;
    } else if (b.p.x > bounds.maxX - b.r) {
      b.p.x = bounds.maxX - b.r;
      if (b.v.x > 0) b.v.x *= -e;
    }
    if (b.p.z < bounds.minZ + b.r) {
      b.p.z = bounds.minZ + b.r;
      if (b.v.z < 0) b.v.z *= -e;
    } else if (b.p.z > bounds.maxZ - b.r) {
      b.p.z = bounds.maxZ - b.r;
      if (b.v.z > 0) b.v.z *= -e;
    }
    if (b.v.lengthSq() > MAX_SPEED * MAX_SPEED) b.v.setLength(MAX_SPEED);
    if (b.w.lengthSq() > MAX_SPIN * MAX_SPIN) b.w.setLength(MAX_SPIN);
  }

  /** Prop-vs-prop, bounding spheres. Only pairs with at least one awake body. */
  function pairPass() {
    for (let i = 0; i < bodies.length; i++) {
      const a = bodies[i];
      if (a.fixed) continue;
      for (let j = i + 1; j < bodies.length; j++) {
        const b = bodies[j];
        if (b.fixed || (!a.awake && !b.awake)) continue;
        const dx = b.p.x - a.p.x;
        const dy = b.p.y - a.p.y;
        const dz = b.p.z - a.p.z;
        const rr = a.r + b.r;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 > rr * rr || d2 < 1e-8) continue;
        const d = Math.sqrt(d2);
        const nx = dx / d;
        const ny = dy / d;
        const nz = dz / d;
        const inv = a.invM + b.invM;
        const push = (rr - d) / inv;
        a.p.x -= nx * push * a.invM;
        a.p.y -= ny * push * a.invM;
        a.p.z -= nz * push * a.invM;
        b.p.x += nx * push * b.invM;
        b.p.y += ny * push * b.invM;
        b.p.z += nz * push * b.invM;
        const rvn = (b.v.x - a.v.x) * nx + (b.v.y - a.v.y) * ny + (b.v.z - a.v.z) * nz;
        if (rvn < 0) {
          const e = Math.min(a.e, b.e) * 0.8;
          const jn = (-(1 + e) * rvn) / inv;
          a.v.x -= nx * jn * a.invM;
          a.v.y -= ny * jn * a.invM;
          a.v.z -= nz * jn * a.invM;
          b.v.x += nx * jn * b.invM;
          b.v.y += ny * jn * b.invM;
          b.v.z += nz * jn * b.invM;
          if (Math.abs(rvn) > 0.3) {
            wake(a);
            wake(b);
          }
        }
      }
    }
  }

  function step(dt, playerPos, playerVel) {
    time += dt;
    playerPass(playerPos, playerVel);
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (!b.awake || b.fixed) continue;
      bodyStep(b, dt);
      worldPass(b);
      integrateQ(b.q, b.w.x, b.w.y, b.w.z, dt);
    }
    pairPass();
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (!b.awake || b.fixed) continue;
      const speed = Math.hypot(b.v.x, b.v.z);
      const spin = b.w.length();
      // One step of gravity is always sitting in v.y on a resting body.
      const settled = Math.abs(b.v.y) < gravity * PROP_STEP * 1.6;
      if (speed < SLEEP_V && settled && spin < SLEEP_W && b.grounded && b.sub < 0.05) {
        b.sleepT += dt;
        if (b.sleepT >= SLEEP_TIME) {
          sleep(b);
          const g = groundAt(b.p.x, b.p.z);
          if (b.sphere) b.p.y = g.y + b.r;
          sync(b);
        }
      } else {
        b.sleepT = 0;
      }
    }
  }

  /**
   * Advance the sim and write meshes. Safe to call with any dt.
   * @param {number} dt seconds since last frame
   * @param {{x:number,y:number,z:number}} [playerPos]
   * @param {{x:number,y?:number,z:number}} [playerVel] `player.vel`
   */
  function tick(dt, playerPos, playerVel) {
    if (!enabled || !(dt > 0)) return;
    acc += Math.min(dt, 0.1);
    let n = 0;
    while (acc >= PROP_STEP && n < MAX_SUB) {
      step(PROP_STEP, playerPos, playerVel);
      acc -= PROP_STEP;
      n++;
    }
    if (n === MAX_SUB) acc = 0;
    if (!n) return;
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      if (b.awake && !b.fixed) sync(b);
    }
  }

  /** Put every prop back where it spawned, asleep. */
  function reset() {
    for (const b of bodies) {
      b.p.copy(b.home.p);
      b.q.copy(b.home.q);
      b.v.set(0, 0, 0);
      b.w.set(0, 0, 0);
      b.sleepT = 0;
      b.sub = 0;
      if (b.awake) awakeCount--;
      b.awake = false;
      sync(b);
    }
    acc = 0;
  }

  return {
    add,
    addAll,
    get,
    remove,
    impulse,
    explode,
    wake: (t) => {
      const b = get(t);
      if (b) {
        b.fixed = false;
        wake(b);
      }
      return !!b;
    },
    tick,
    reset,
    bodies,
    /** Live counters for perf HUDs. */
    get awake() {
      return awakeCount;
    },
    get count() {
      return bodies.length;
    },
    get time() {
      return time;
    },
    setEnabled(v) {
      enabled = !!v;
    },
    /** Exposed for tools/tests: ground height + surface under a point. */
    groundAt,
    waterHeight: (x, z, t) => waterHeight(x, z, t ?? time),
  };
}
