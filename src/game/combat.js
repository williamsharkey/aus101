/**
 * Melee + eye-laser physics.
 *
 * The point of this module: pressing a key is NOT a crime. `punch()` starts a
 * swing that only lands if the arc actually catches somebody; `laser()` fires a
 * real ray that only harms whoever it actually intersects. `onHarm` is called
 * once per victim genuinely struck — nothing else in the game may treat a key
 * press as violence.
 *
 * Victims are hidden and replaced by six Verlet boxes (same shape of code as
 * `src/phys/fights.js` — gravity, distance constraints, ground bounce) and they
 * stay down. Anyone still standing in `cast` is a valid target.
 *
 * All geometry/materials are module-shared. `tick(dt)` is allocation-free.
 */
import * as THREE from "three";

/* ── swing timing ─────────────────────────────────────────────────────────── */
const PUNCH_DUR = 0.62; // whole animation, seconds
const PUNCH_STRIKE = 0.32; // punchT 0.516 — where t101.js `punchCurve` peaks the extension
const PUNCH_REACH = 1.55; // metres, fist reach including the step-in
const PUNCH_SOLID_REACH = 1.15; // inside this and lined up = solid (lethal) hit
const PUNCH_COS = Math.cos(0.95); // ~54° half-angle arc in front of the player
const PUNCH_SOLID_COS = Math.cos(0.38); // ~22° — squarely in front
const PUNCH_HEIGHT = 1.35; // vertical tolerance between fist and victim chest

/* ── laser timing ─────────────────────────────────────────────────────────── */
const LASER_DUR = 0.72;
const LASER_FIRE = 0.47; // laserT 0.653 — where t101.js peaks the eye charge
const LASER_RANGE = 60;
const BEAM_LIFE = 0.24;
const FLASH_LIFE = 0.3;
const EYE_Y = 1.62; // eye height above the player's feet
const MUZZLE = 0.22; // push the beam origin clear of the player's own skull

/* ── ragdoll (mirrors src/phys/fights.js) ─────────────────────────────────── */
const G = 16;
const BOUNCE = 0.15;
const STEP = 1 / 60;
const DAMP = 0.984;
const CONSTRAINT_ITERS = 7; // a hard blow needs more passes than fights.js to hold together
const SLEEP_EPS = 0.00035; // per-step squared travel under which a doll settles
const SLEEP_HOLD = 0.7;

const DOLL_GEO = {
  torso: new THREE.BoxGeometry(0.34, 0.5, 0.18),
  head: new THREE.BoxGeometry(0.22, 0.22, 0.22),
  arm: new THREE.BoxGeometry(0.09, 0.5, 0.09),
  leg: new THREE.BoxGeometry(0.11, 0.7, 0.11),
};

/** Local rest centres. Biped origin is at the soles. */
const REST = [
  { id: "torso", geo: "torso", ox: 0, oy: 1.16, oz: 0, half: 0.25, inv: 0.35, mat: "skin" },
  { id: "head", geo: "head", ox: 0, oy: 1.62, oz: 0, half: 0.11, inv: 0.85, mat: "skin" },
  { id: "armL", geo: "arm", ox: -0.28, oy: 1.2, oz: 0, half: 0.25, inv: 1, mat: "skin" },
  { id: "armR", geo: "arm", ox: 0.28, oy: 1.2, oz: 0, half: 0.25, inv: 1, mat: "skin" },
  { id: "legL", geo: "leg", ox: -0.09, oy: 0.36, oz: 0, half: 0.35, inv: 1, mat: "cover" },
  { id: "legR", geo: "leg", ox: 0.09, oy: 0.36, oz: 0, half: 0.35, inv: 1, mat: "cover" },
];

const LINKS = REST.slice(1).map((p) => ({
  a: 0,
  b: REST.indexOf(p),
  rest: Math.hypot(p.ox - REST[0].ox, p.oy - REST[0].oy, p.oz - REST[0].oz),
}));

/* ── shared fx assets ─────────────────────────────────────────────────────── */
const FX_GEO = {
  beam: new THREE.CylinderGeometry(1, 1, 1, 6, 1, true),
  flash: new THREE.SphereGeometry(1, 8, 6),
  scorch: new THREE.CircleGeometry(1, 14),
  burn: new THREE.SphereGeometry(1, 6, 5),
};

const FX_MAT = {
  beamCore: new THREE.MeshBasicMaterial({
    color: 0xfff0e6,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  }),
  beamGlow: new THREE.MeshBasicMaterial({
    color: 0xff2a12,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  }),
  flash: new THREE.MeshBasicMaterial({
    color: 0xffd2a0,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  }),
  charge: new THREE.MeshBasicMaterial({
    color: 0xff3418,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  }),
  scorch: new THREE.MeshBasicMaterial({
    color: 0x120a06,
    transparent: true,
    opacity: 0.82,
    depthWrite: false,
    toneMapped: false,
  }),
  burn: new THREE.MeshBasicMaterial({ color: 0x160c08, toneMapped: false }),
};

const Y_UP = new THREE.Vector3(0, 1, 0);
const SCORCH_POOL = 8;
const _nrm = new THREE.Matrix3();

/** Per-victim doll materials are cached by colour so repeat kills reuse them. */
const matCache = new Map();
function skinMat(hex) {
  let m = matCache.get(hex);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.72, metalness: 0.04 });
    matCache.set(hex, m);
  }
  return m;
}

function noRaycast() {}

/** World-space normal of a hit face — `face.normal` is object-local. */
function surfaceNormal(hit, out) {
  const n = hit.face?.normal;
  if (!n) return out.copy(Y_UP);
  _nrm.getNormalMatrix(hit.object.matrixWorld);
  out.copy(n).applyMatrix3(_nrm);
  return out.lengthSq() < 1e-8 ? out.copy(Y_UP) : out.normalize();
}

function rand(a, b) {
  return a + Math.random() * (b - a);
}

function rotY(x, z, yaw) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: x * c - z * s, z: x * s + z * c };
}

/** Pull skin / lower-body colours off a CHAR0 biped so the doll matches. */
function looksOf(mesh) {
  const body = mesh?.userData?.body;
  let skin = 0xd4a06a;
  let cover = 0x1f6f78;
  const sm = body?.skinM?.color;
  if (sm) skin = sm.getHex();
  const thigh = body?.legL?.children?.[1]?.material?.color;
  if (thigh) cover = thigh.getHex();
  else cover = skin;
  return { skin, cover };
}

function worldPos(mesh, out) {
  if (mesh && typeof mesh.getWorldPosition === "function") return mesh.getWorldPosition(out);
  const p = mesh?.position;
  return out.set(p?.x || 0, p?.y || 0, p?.z || 0);
}

function worldYaw(mesh) {
  const e = mesh?.matrixWorld?.elements;
  if (e) return Math.atan2(e[8], e[10]);
  return mesh?.rotation?.y || 0;
}

/** Anyone still standing with a mesh. Downed bodies stay down. */
function targetable(npc) {
  if (!npc) return false;
  const m = npc.mesh;
  if (!m || !m.isObject3D) return false;
  if (m.userData?.combatDown) return false;
  if (m.visible === false) return false;
  return true;
}

/* ── Verlet ───────────────────────────────────────────────────────────────── */
function integrate(parts, dt) {
  const g = -G * dt * dt;
  for (const p of parts) {
    const vx = (p.x - p.px) * DAMP;
    const vy = (p.y - p.py) * DAMP;
    const vz = (p.z - p.pz) * DAMP;
    p.px = p.x;
    p.py = p.y;
    p.pz = p.z;
    p.x += vx;
    p.y += vy + g;
    p.z += vz;
    p.rx += vz * 7;
    p.rz -= vx * 7;
  }
}

function constrain(parts, s) {
  for (const link of LINKS) {
    const a = parts[link.a];
    const b = parts[link.b];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    const d = Math.hypot(dx, dy, dz) || 1e-6;
    const w = a.inv + b.inv;
    const corr = ((d - link.rest * s) / d) * (1 / w);
    a.x += dx * corr * a.inv;
    a.y += dy * corr * a.inv;
    a.z += dz * corr * a.inv;
    b.x -= dx * corr * b.inv;
    b.y -= dy * corr * b.inv;
    b.z -= dz * corr * b.inv;
  }
}

function ground(parts, groundY) {
  for (const p of parts) {
    const floor = groundY + p.half;
    if (p.y >= floor) continue;
    const vx = p.x - p.px;
    const vy = p.y - p.py;
    const vz = p.z - p.pz;
    p.y = floor;
    p.py = vy < 0 ? p.y + vy * BOUNCE : p.y;
    p.px = p.x - vx * 0.7;
    p.pz = p.z - vz * 0.7;
  }
}

function motion(parts) {
  let m = 0;
  for (const p of parts) {
    const dx = p.x - p.px;
    const dy = p.y - p.py;
    const dz = p.z - p.pz;
    m += dx * dx + dy * dy + dz * dz;
  }
  return m;
}

/**
 * Punching, eye-lasers, and the bodies they leave.
 *
 * @param {{
 *   scene: THREE.Scene,
 *   cast: { mesh: THREE.Object3D, kind: string, ageBand: string }[],
 *   onHarm: (info: { kind: 'punch'|'laser', victim: object, lethal: boolean, point: THREE.Vector3 }) => void,
 *   play?: (id: string) => unknown,
 * }} opts
 */
export function createCombat({ scene, cast, onHarm, play } = {}) {
  let hasLaser = false;
  const fx = new THREE.Group();
  fx.name = "combat-fx";
  scene?.add(fx);

  /* Beam: a thin white core inside a fat additive glow so it reads far away. */
  const beamCore = new THREE.Mesh(FX_GEO.beam, FX_MAT.beamCore.clone());
  const beamGlow = new THREE.Mesh(FX_GEO.beam, FX_MAT.beamGlow.clone());
  const flash = new THREE.Mesh(FX_GEO.flash, FX_MAT.flash.clone());
  const charge = new THREE.Mesh(FX_GEO.flash, FX_MAT.charge.clone());
  for (const m of [beamCore, beamGlow, flash, charge]) {
    m.visible = false;
    m.raycast = noRaycast;
    m.renderOrder = 3;
    fx.add(m);
  }

  /** Ring buffer of ground scorches — never grows. */
  const scorches = [];
  for (let i = 0; i < SCORCH_POOL; i++) {
    const s = new THREE.Mesh(FX_GEO.scorch, FX_MAT.scorch.clone());
    s.visible = false;
    s.raycast = noRaycast;
    s.renderOrder = 1;
    fx.add(s);
    scorches.push(s);
  }
  let scorchI = 0;

  /** @type {{ parts: any[], root: THREE.Group, groundY: number, s: number, yaw: number, acc: number, still: number, asleep: boolean }[]} */
  const dolls = [];

  const ray = new THREE.Raycaster();
  ray.far = LASER_RANGE;
  /** @type {THREE.Object3D[]} */
  const castMeshes = [];
  /** @type {THREE.Intersection[]} */
  const hits = [];
  /** @type {THREE.Mesh[]} */
  const world = [];
  const meshToNpc = new Map();
  const pushMesh = (o) => {
    if (o.isMesh && o.visible) world.push(o);
  };

  const _origin = new THREE.Vector3();
  const _dir = new THREE.Vector3();
  const _pt = new THREE.Vector3();
  const _n = new THREE.Vector3();
  const _tmp = new THREE.Vector3();
  const _wp = new THREE.Vector3();
  const _player = new THREE.Vector3();

  let punchT = 0; // 0..1 across the whole swing, 0 when idle
  let laserT = 0; // 0..1 across the whole eye-laser action, 0 when idle
  let punchTime = -1; // seconds into the swing, <0 = idle
  let laserTime = -1;
  let punchResolved = true;
  let laserResolved = true;
  let punchYaw = 0;
  let laserYaw = 0;
  let laserPitch = 0;
  let beamT = 0;
  let flashT = 0;
  let beamLen = 0;

  function say(id) {
    if (typeof play !== "function" || !id) return;
    try {
      play(id);
    } catch {
      /* VO is optional */
    }
  }

  /** Aim vector from the look angles. Matches `applyCamera` in input/player.js. */
  function aim(yaw, pitch, out) {
    const cp = Math.cos(pitch);
    return out.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
  }

  /* ── ragdoll construction ───────────────────────────────────────────────── */
  function makeDoll(look, s) {
    const root = new THREE.Group();
    root.name = "combat-ragdoll";
    const skinM = skinMat(look.skin);
    const coverM = skinMat(look.cover);
    const parts = REST.map((spec) => {
      const mesh = new THREE.Mesh(DOLL_GEO[spec.geo], spec.mat === "cover" ? coverM : skinM);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.scale.setScalar(s);
      mesh.raycast = noRaycast;
      root.add(mesh);
      return {
        mesh,
        x: 0,
        y: spec.oy * s,
        z: 0,
        px: 0,
        py: spec.oy * s,
        pz: 0,
        half: spec.half * s,
        inv: spec.inv,
        rx: 0,
        rz: 0,
        ox: spec.ox * s,
        oy: spec.oy * s,
        oz: spec.oz * s,
      };
    });
    scene.add(root);
    return { root, parts };
  }

  /**
   * Hide the victim, spawn a doll in its pose, launch it along the blow.
   * @returns {object} doll record
   */
  function dropVictim(npc, nx, nz, power) {
    const mesh = npc.mesh;
    const s = (mesh.userData?.body?.scale ?? 1) || 1;
    worldPos(mesh, _wp);
    const yaw = worldYaw(mesh);
    const groundY = _wp.y;
    const built = makeDoll(looksOf(mesh), s);
    // Enough to take them off their feet and a metre back — not launch them.
    const launch = 1.7 + power * 2.1;
    const lift = 1.7 + power * 1.3;
    for (const p of built.parts) {
      const w = rotY(p.ox, p.oz, yaw);
      p.x = _wp.x + w.x;
      p.y = groundY + p.oy;
      p.z = _wp.z + w.z;
      const jx = nx * launch + rand(-0.5, 0.5);
      const jy = lift + rand(0.1, 0.8);
      const jz = nz * launch + rand(-0.5, 0.5);
      p.px = p.x - jx * STEP;
      p.py = p.y - jy * STEP;
      p.pz = p.z - jz * STEP;
      p.rx = 0;
      p.rz = 0;
      p.mesh.position.set(p.x, p.y, p.z);
      p.mesh.rotation.set(0, yaw, 0);
    }
    mesh.visible = false;
    mesh.userData.combatDown = true;
    mesh.userData.paintTarget = false;
    mesh.userData.flee = null;
    npc.down = true;
    const rec = {
      parts: built.parts,
      root: built.root,
      groundY,
      s,
      yaw,
      acc: 0,
      still: 0,
      asleep: false,
    };
    dolls.push(rec);
    return rec;
  }

  /** A charred pit welded onto the doll's torso where the beam went in. */
  function burnDoll(rec, point) {
    const torso = rec.parts[0];
    const mark = new THREE.Mesh(FX_GEO.burn, FX_MAT.burn);
    mark.raycast = noRaycast;
    const r = 0.075 * rec.s;
    mark.scale.set(r, r * 0.65, r);
    _tmp.set(point.x - torso.x, point.y - torso.y, point.z - torso.z);
    const d = _tmp.length();
    if (d > 1e-4) _tmp.multiplyScalar(Math.min(d, 0.2 * rec.s) / d);
    // Torso mesh is uniformly scaled by `rec.s`, so undo it for the local offset.
    mark.position.copy(_tmp).multiplyScalar(1 / rec.s);
    mark.position.y = Math.max(-0.24, Math.min(0.24, mark.position.y));
    torso.mesh.add(mark);
  }

  function putScorch(point, normal) {
    const s = scorches[scorchI];
    scorchI = (scorchI + 1) % SCORCH_POOL;
    const r = 0.16 + Math.random() * 0.1;
    s.scale.set(r, r, 1);
    s.position.copy(point).addScaledVector(normal, 0.012);
    _tmp.copy(point).add(normal);
    s.lookAt(_tmp);
    s.material.opacity = 0.82;
    s.visible = true;
  }

  function popFlash(point, size) {
    flash.position.copy(point);
    flash.scale.setScalar(size);
    flash.material.opacity = 1;
    flash.visible = true;
    flashT = FLASH_LIFE;
  }

  /* ── punch ──────────────────────────────────────────────────────────────── */

  /**
   * Resolve the strike frame. Sweeps a short arc in front of the player and
   * takes the nearest standing body inside it. No one in the arc = just a swing.
   */
  function resolvePunch() {
    aim(punchYaw, 0, _dir);
    const eyeY = _player.y + EYE_Y;
    let best = null;
    let bestD = Infinity;
    let bestNx = 0;
    let bestNz = 0;
    let bestDot = 0;
    for (const npc of cast) {
      if (!targetable(npc)) continue;
      worldPos(npc.mesh, _tmp);
      const dx = _tmp.x - _player.x;
      const dz = _tmp.z - _player.z;
      const d = Math.hypot(dx, dz);
      if (d > PUNCH_REACH || d < 1e-4) continue;
      const chestY = _tmp.y + 1.15 * ((npc.mesh.userData?.body?.scale ?? 1) || 1);
      if (Math.abs(chestY - eyeY) > PUNCH_HEIGHT) continue;
      const nx = dx / d;
      const nz = dz / d;
      const dot = nx * _dir.x + nz * _dir.z;
      if (dot < PUNCH_COS) continue;
      if (d < bestD) {
        best = npc;
        bestD = d;
        bestNx = nx;
        bestNz = nz;
        bestDot = dot;
      }
    }
    if (!best) return false; // a swing at thin air — nothing happened, nobody saw

    const lethal = bestD <= PUNCH_SOLID_REACH && bestDot >= PUNCH_SOLID_COS;
    const scale = (best.mesh.userData?.body?.scale ?? 1) || 1;
    worldPos(best.mesh, _tmp);
    _pt.set(_tmp.x - bestNx * 0.18, _tmp.y + 1.2 * scale, _tmp.z - bestNz * 0.18);
    dropVictim(best, bestNx, bestNz, lethal ? 1 : 0.5);
    popFlash(_pt, lethal ? 0.11 : 0.075);
    say(lethal ? "panic_02" : "interject_oi_01");
    onHarm?.({ kind: "punch", victim: best, lethal, point: _pt.clone() });
    return true;
  }

  /**
   * Start a swing. The strike is resolved mid-animation by `tick`, never here.
   * @param {{x:number,y?:number,z:number}} playerPos
   * @param {number} yaw
   * @param {number} [pitch] accepted for call-site symmetry; a punch is resolved
   *   on the horizontal plane, so look pitch does not change the arc
   * @returns {boolean} true if a swing started (not that it hit anything)
   */
  // eslint-disable-next-line no-unused-vars
  function punch(playerPos, yaw = 0, pitch = 0) {
    if (punchTime >= 0 || laserTime >= 0) return false;
    if (playerPos) _player.set(playerPos.x, playerPos.y || 0, playerPos.z);
    punchYaw = yaw;
    punchTime = 0;
    punchT = 0;
    punchResolved = false;
    return true;
  }

  /* ── laser ──────────────────────────────────────────────────────────────── */

  function beamShow(from, dir, len) {
    const r = 0.016 + len * 0.0009;
    beamLen = len;
    for (const [m, k] of [
      [beamCore, 1],
      [beamGlow, 4.2],
    ]) {
      m.scale.set(r * k, len, r * k);
      m.position.copy(from).addScaledVector(dir, len * 0.5);
      m.quaternion.setFromUnitVectors(Y_UP, dir);
      m.material.opacity = k === 1 ? 1 : 0.4;
      m.visible = true;
    }
    beamT = BEAM_LIFE;
  }

  /**
   * Nearest world surface along the beam. Collects plain meshes only — sprites
   * and points need a camera on the raycaster and would throw — and drops the
   * player's own rig and our fx group.
   */
  function collectWorld() {
    world.length = 0;
    for (const child of scene.children) {
      if (child === fx || !child.visible) continue;
      if (child.isLight || child.isCamera) continue;
      // The player rig sits exactly on playerPos — never shoot yourself.
      if (child.position && child.position.distanceToSquared(_player) < 0.25) continue;
      child.traverse(pushMesh);
    }
  }

  function worldHit(from, dir) {
    if (!scene) return null;
    collectWorld();
    ray.set(from, dir);
    ray.far = LASER_RANGE;
    hits.length = 0;
    ray.intersectObjects(world, false, hits);
    for (const h of hits) {
      if (h.distance < 0.9) continue; // inside the player's own rig
      return h;
    }
    return null;
  }

  /** Discharge. Raycasts the cast first, then the world for the beam's end. */
  function resolveLaser() {
    aim(laserYaw, laserPitch, _dir).normalize();
    _origin.set(_player.x, _player.y + EYE_Y, _player.z).addScaledVector(_dir, MUZZLE);

    castMeshes.length = 0;
    meshToNpc.clear();
    for (const npc of cast) {
      if (!targetable(npc)) continue;
      // World matrices must be current: piano/DJ/synth sit under a moving parent,
      // and party.tick poses joints after last render.
      if (typeof npc.mesh.updateWorldMatrix === "function") npc.mesh.updateWorldMatrix(true, true);
      // Collect the body's meshes explicitly rather than recursing at raycast
      // time: THREE.Sprite.raycast dereferences `raycaster.camera`, which this
      // ray does not carry, so a single sprite parented anywhere under a cast
      // member would throw mid-frame. Meshes only, mapped straight to the npc.
      npc.mesh.traverse((o) => {
        if (!o.isMesh || !o.visible) return;
        castMeshes.push(o);
        meshToNpc.set(o, npc);
      });
    }
    ray.set(_origin, _dir);
    ray.far = LASER_RANGE;
    hits.length = 0;
    if (castMeshes.length) ray.intersectObjects(castMeshes, false, hits);

    let victim = null;
    let vDist = Infinity;
    for (const h of hits) {
      if (h.distance < 0.5) continue;
      let root = h.object;
      while (root && !meshToNpc.has(root)) root = root.parent;
      if (!root) continue;
      victim = meshToNpc.get(root);
      vDist = h.distance;
      _pt.copy(h.point);
      break;
    }

    const w = worldHit(_origin, _dir);
    if (!victim) {
      // A miss. Beam still draws and scorches whatever it lands on — no harm.
      const len = w ? w.distance : LASER_RANGE;
      beamShow(_origin, _dir, len);
      if (w) {
        _pt.copy(w.point);
        surfaceNormal(w, _n);
        putScorch(_pt, _n);
        popFlash(_pt, 0.11);
      }
      return false;
    }

    // World geometry in front of the victim eats the shot.
    if (w && w.distance < vDist - 0.05) {
      beamShow(_origin, _dir, w.distance);
      _pt.copy(w.point);
      surfaceNormal(w, _n);
      putScorch(_pt, _n);
      popFlash(_pt, 0.11);
      return false;
    }

    beamShow(_origin, _dir, vDist);
    popFlash(_pt, 0.16);
    const d = Math.hypot(_dir.x, _dir.z) || 1;
    const rec = dropVictim(victim, _dir.x / d, _dir.z / d, 0.85);
    burnDoll(rec, _pt);
    say("panic_03");
    onHarm?.({ kind: "laser", victim, lethal: true, point: _pt.clone() });
    return true;
  }

  /**
   * Charge the eyes. The bolt leaves mid-animation, from `tick`.
   * @param {{x:number,y?:number,z:number}} playerPos
   * @param {number} yaw
   * @param {number} pitch
   * @returns {boolean} true if the charge started
   */
  function laser(playerPos, yaw = 0, pitch = 0) {
    if (!hasLaser) return false;
    if (punchTime >= 0 || laserTime >= 0) return false;
    if (playerPos) _player.set(playerPos.x, playerPos.y || 0, playerPos.z);
    laserYaw = yaw;
    laserPitch = pitch;
    laserTime = 0;
    laserT = 0;
    laserResolved = false;
    return true;
  }

  /* ── frame ──────────────────────────────────────────────────────────────── */

  /**
   * @param {number} dt seconds
   * @param {{x:number,y?:number,z:number}} [playerPos]
   */
  function tick(dt, playerPos) {
    if (playerPos) _player.set(playerPos.x, playerPos.y || 0, playerPos.z);
    if (!(dt > 0)) return;
    const h = Math.min(dt, 0.05);

    if (punchTime >= 0) {
      punchTime += h;
      punchT = Math.min(1, punchTime / PUNCH_DUR);
      if (!punchResolved && punchTime >= PUNCH_STRIKE) {
        punchResolved = true;
        resolvePunch();
      }
      if (punchTime >= PUNCH_DUR) {
        punchTime = -1;
        punchT = 0;
      }
    }

    if (laserTime >= 0) {
      laserTime += h;
      laserT = Math.min(1, laserTime / LASER_DUR);
      const k = Math.min(1, laserTime / LASER_FIRE);
      if (!laserResolved) {
        charge.position.set(_player.x, _player.y + EYE_Y, _player.z);
        aim(laserYaw, laserPitch, _tmp);
        charge.position.addScaledVector(_tmp, 0.2);
        charge.scale.setScalar(0.03 + k * 0.075);
        charge.material.opacity = 0.35 + k * 0.6;
        charge.visible = true;
      }
      if (!laserResolved && laserTime >= LASER_FIRE) {
        laserResolved = true;
        charge.visible = false;
        resolveLaser();
      }
      if (laserTime >= LASER_DUR) {
        laserTime = -1;
        laserT = 0;
        charge.visible = false;
      }
    }

    if (beamT > 0) {
      beamT -= h;
      const k = Math.max(0, beamT / BEAM_LIFE);
      if (beamT <= 0) {
        beamCore.visible = false;
        beamGlow.visible = false;
      } else {
        beamCore.material.opacity = k;
        beamGlow.material.opacity = 0.4 * k * k;
        const w = 1 + (1 - k) * 0.9;
        const r = 0.016 + beamLen * 0.0009;
        beamGlow.scale.set(r * 4.2 * w, beamLen, r * 4.2 * w);
      }
    }

    if (flashT > 0) {
      flashT -= h;
      const k = Math.max(0, flashT / FLASH_LIFE);
      if (flashT <= 0) flash.visible = false;
      else {
        flash.material.opacity = k;
        flash.scale.multiplyScalar(1 + 2.0 * h);
      }
    }

    for (let i = 0; i < dolls.length; i++) {
      const d = dolls[i];
      if (d.asleep) continue;
      d.acc += h;
      let steps = 0;
      while (d.acc >= STEP && steps < 4) {
        d.acc -= STEP;
        steps++;
        integrate(d.parts, STEP);
        for (let k = 0; k < CONSTRAINT_ITERS; k++) constrain(d.parts, d.s);
        ground(d.parts, d.groundY);
      }
      if (!steps) continue;
      for (const p of d.parts) {
        p.mesh.position.set(p.x, p.y, p.z);
        p.mesh.rotation.set(p.rx, d.yaw, p.rz);
      }
      // They stay down. Once settled, stop simulating entirely.
      if (motion(d.parts) < SLEEP_EPS) {
        d.still += h;
        if (d.still >= SLEEP_HOLD) d.asleep = true;
      } else {
        d.still = 0;
      }
    }
  }

  /** Drop everything this module put in the scene. */
  function dispose() {
    for (const d of dolls) scene?.remove(d.root);
    dolls.length = 0;
    scene?.remove(fx);
  }

  return {
    punch,
    laser,
    tick,
    dispose,
    /** True while a swing or a charge is playing — gate input on this. */
    get swinging() {
      return punchTime >= 0 || laserTime >= 0;
    },
    /** 0..1 punch phase for `poseAus101(rig, { punchT })`. Fist lands at 0.52. */
    get punchT() {
      return punchT;
    },
    /** 0..1 eye-laser phase for `poseAus101(rig, { laserT })`. Bolt at 0.65. */
    get laserT() {
      return laserT;
    },
    /** Number of bodies currently on the sand. */
    get downed() {
      return dolls.length;
    },
    get hasLaser() {
      return hasLaser;
    },
    set hasLaser(v) {
      hasLaser = !!v;
    },
  };
}
