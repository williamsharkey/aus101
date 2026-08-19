/**
 * Factory recall setpiece.
 *
 * Trigger is *harm*, not a button: `combat` reports a genuine hit through
 * `onHarm({ kind, victim, lethal, point })` and the response escalates:
 *
 *   level 0  calm
 *   level 1  ALERT   — one spotter ship comes in high and circles the incident
 *   level 2  RECALL  — the rest of the flight arrives, fast-ropes T-101s onto
 *                      the sand, and they run you down
 *
 * Nothing teleports. Helicopters fly in from off-map, hold station over their
 * drop zone, and put units on ropes; the units land hard, straighten up, and
 * close on foot. The run ends when a unit actually *seizes* you (with a
 * generous outer limit so it always resolves), not on a fixed timer.
 *
 * iPhone budget: geometry and materials live in the shared GEO/MAT tables —
 * the only per-unit material is the one-mesh landing dust (max 8).
 */
import * as THREE from "three";
import { buildT101, poseT101 } from "../chars/t101.js";

const COPPER = 0xb87333;
const GOLD = 0xd4a017;
const EYE = 0xff1010;

// Escalation
const ALERT_HEAT = 1; // any witnessed hit
const RECALL_HEAT = 3; // repeated harm; a lethal hit jumps straight here
const HEAT_LETHAL = 3;
const HEAT_HIT = 1;

// Flight
const APPROACH_R = 62; // helicopters enter from here, off the map edge
const CRUISE = 46; // top inbound speed, m/s
const SEEK = 2.2; // approach deceleration rate
const OBS_Y = 15; // spotter/observation altitude
const HELI_Y = 9.6; // drop altitude
const RING = 13; // drop-zone radius around the incident
const ROPE_V = 5.2; // fast-rope descent, m/s
const RELEASE_Y = 2.6; // rope let-go height
const DROP_G = 30;
const DROP_STAGGER = 0.45; // seconds between units leaving the door

// Ground units
const HULL_MIN = 6;
const HULL_MAX = 8;
const LAND_S = 0.55; // impact crouch + rise
const FORM_S = 1.6; // hold on the drop line while the rest of the squad lands
const STALK_S = 1.2; // menacing walk before the run
const STALK_V = 1.7;
const SPRINT = 7.4;
const ACCEL = 7.0;
const CAPTURE_R = 1.45;
const SEIZE_S = 0.75; // grab-and-hold beat before the cut to black
const FAIL_S = 30; // outer limit — the sequence always resolves
const LEG_LEN = 0.84; // hip-to-sole, for the landing squat's pelvis drop
const PUNCH_PEAK = 0.52; // t101.js punchCurve maxes here — hold the grab there

// ---------------------------------------------------------------------------
// Shared — iPhone-safe. Do not allocate geo/mat per unit.
// ---------------------------------------------------------------------------
const GEO = {
  hull: new THREE.CapsuleGeometry(0.2, 1.16, 3, 6),
  eye: new THREE.SphereGeometry(0.042, 6, 6),
  brow: new THREE.BoxGeometry(0.22, 0.034, 0.07),
  heliBody: new THREE.BoxGeometry(2.35, 0.7, 1.18),
  heliNose: new THREE.BoxGeometry(0.72, 0.48, 0.86),
  heliCabin: new THREE.BoxGeometry(1.05, 0.42, 1.05),
  heliTail: new THREE.BoxGeometry(2.05, 0.14, 0.14),
  heliFin: new THREE.BoxGeometry(0.1, 0.52, 0.32),
  blade: new THREE.BoxGeometry(6.2, 0.035, 0.16),
  tailBlade: new THREE.BoxGeometry(0.04, 0.9, 0.1),
  mast: new THREE.CylinderGeometry(0.05, 0.05, 0.28, 6),
  skid: new THREE.BoxGeometry(2.15, 0.055, 0.055),
  skidLeg: new THREE.BoxGeometry(0.055, 0.26, 0.055),
  beam: new THREE.CylinderGeometry(0.028, 0.01, 1, 5),
  rope: new THREE.CylinderGeometry(0.018, 0.018, 1, 4),
  dust: new THREE.RingGeometry(0.28, 0.62, 14),
};

const MAT = {
  copper: new THREE.MeshStandardMaterial({ color: COPPER, metalness: 0.85, roughness: 0.35 }),
  gold: new THREE.MeshStandardMaterial({ color: GOLD, metalness: 0.82, roughness: 0.32 }),
  eye: new THREE.MeshBasicMaterial({ color: EYE }),
  heli: new THREE.MeshStandardMaterial({ color: 0x1a1612, metalness: 0.45, roughness: 0.55 }),
  heliAccent: new THREE.MeshStandardMaterial({ color: COPPER, metalness: 0.7, roughness: 0.4 }),
  rotor: new THREE.MeshStandardMaterial({ color: 0x2a2420, metalness: 0.35, roughness: 0.62 }),
  beam: new THREE.MeshBasicMaterial({ color: EYE }),
  rope: new THREE.MeshStandardMaterial({ color: 0x141210, roughness: 0.9 }),
  dust: new THREE.MeshBasicMaterial({
    color: 0xefe3c6,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
    depthWrite: false,
  }),
};

const Y_UP = new THREE.Vector3(0, 1, 0);
const _dir = new THREE.Vector3();
const _mid = new THREE.Vector3();

/** poseT101 is authored by another module; if its shape drifts, stop calling it. */
let poseOk = true;

function shadow(mesh, cast = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

/** Emergency stand-in if buildT101 throws — never ship a frame with no unit. */
function makeStandIn() {
  const root = new THREE.Group();
  root.name = "recall-unit";
  const body = shadow(new THREE.Mesh(GEO.hull, MAT.copper));
  body.position.y = 0.78;
  root.add(body);
  const brow = shadow(new THREE.Mesh(GEO.brow, MAT.gold), false);
  brow.position.set(0, 1.58, 0.14);
  root.add(brow);
  for (const x of [-0.055, 0.055]) {
    const eye = new THREE.Mesh(GEO.eye, MAT.eye);
    eye.position.set(x, 1.52, 0.16);
    root.add(eye);
  }
  return root;
}

/** Factory enforcer trim: blacked-out gunmetal, so it never reads as the player. */
const UNIT_OPTS = { scale: 1.05, dark: true, eye: EYE, copper: 0x6b7178, gold: 0x9c8a52 };

/**
 * Materials from the first unit ever built, reused by every later one.
 * `buildT101` allocates a fresh set per call; a squad of eight would be eight
 * material sets, so the first build becomes the shared table.
 * @type {THREE.Material[] | null}
 */
let unitMats = null;

function shareUnitMaterials(root) {
  if (!unitMats) {
    unitMats = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      // The beach has no environment map, so a near-mirror metal renders as a
      // black cut-out. Knock the units back to a gunmetal that catches the key
      // light and lets the ribs and skull read at range.
      const m = o.material;
      if (m?.isMeshStandardMaterial && !m.emissive?.getHex()) {
        m.metalness = Math.min(m.metalness, 0.5);
        m.roughness = Math.max(m.roughness, 0.44);
      }
      unitMats.push(m);
    });
    return;
  }
  let i = 0;
  const dead = new Set();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const shared = unitMats[i++];
    if (shared && o.material !== shared) {
      dead.add(o.material);
      o.material = shared;
    }
  });
  for (const m of dead) m.dispose?.();
}

/** Factory enforcer: a blacked-out T-101, so it never reads as the player. */
function makeUnit() {
  let root = null;
  try {
    root = buildT101(UNIT_OPTS);
  } catch {
    root = null;
  }
  if (!root || !root.isObject3D) return makeStandIn();
  shareUnitMaterials(root);
  root.name = "recall-unit";
  return root;
}

function makeHeli() {
  const root = new THREE.Group();
  root.name = "recall-heli";
  const body = shadow(new THREE.Mesh(GEO.heliBody, MAT.heli));
  body.position.y = 0.55;
  const nose = shadow(new THREE.Mesh(GEO.heliNose, MAT.heli));
  nose.position.set(0, 0.42, 0.92);
  const cabin = shadow(new THREE.Mesh(GEO.heliCabin, MAT.heliAccent), false);
  cabin.position.set(0, 0.92, 0.12);
  const tail = shadow(new THREE.Mesh(GEO.heliTail, MAT.heli));
  tail.position.set(0, 0.62, -1.85);
  const fin = shadow(new THREE.Mesh(GEO.heliFin, MAT.heli));
  fin.position.set(0, 0.95, -2.78);
  const mast = shadow(new THREE.Mesh(GEO.mast, MAT.rotor), false);
  mast.position.set(0, 1.22, 0);
  root.add(body, nose, cabin, tail, fin, mast);

  for (const x of [-0.42, 0.42]) {
    const skid = shadow(new THREE.Mesh(GEO.skid, MAT.rotor), false);
    skid.position.set(x, 0.05, 0.08);
    const a = shadow(new THREE.Mesh(GEO.skidLeg, MAT.rotor), false);
    a.position.set(x, 0.2, 0.55);
    const b = shadow(new THREE.Mesh(GEO.skidLeg, MAT.rotor), false);
    b.position.set(x, 0.2, -0.45);
    root.add(skid, a, b);
  }

  const rotor = new THREE.Group();
  rotor.position.set(0, 1.38, 0);
  const bladeA = shadow(new THREE.Mesh(GEO.blade, MAT.rotor), false);
  const bladeB = shadow(new THREE.Mesh(GEO.blade, MAT.rotor), false);
  bladeB.rotation.y = Math.PI / 2;
  rotor.add(bladeA, bladeB);
  root.add(rotor);

  const tailRotor = new THREE.Group();
  tailRotor.position.set(0.12, 0.95, -2.82);
  const tb = shadow(new THREE.Mesh(GEO.tailBlade, MAT.rotor), false);
  tailRotor.add(tb);
  root.add(tailRotor);

  root.userData.rotor = rotor;
  root.userData.tailRotor = tailRotor;
  return root;
}

function disposeTree(root) {
  root?.traverse?.((o) => {
    if (!o.isMesh) return;
    // Geometry and materials are shared tables; only per-instance clones die here.
    if (o.userData.ownMaterial && o.material?.dispose) o.material.dispose();
  });
}

/**
 * @param {{
 *   scene: THREE.Scene,
 *   onGameOver?: () => void,
 *   play?: (id: string) => unknown,
 *   onLevel?: (level: number, ev: object) => void,
 *   rng?: () => number,
 * }} opts
 */
export function createRecall({ scene, onGameOver, play, onLevel, rng } = {}) {
  /** Seedable so the screenshot harness stages the same flight every run. */
  const rand = typeof rng === "function" ? rng : Math.random;
  let level = 0; // 0 calm · 1 alert · 2 recall
  let heat = 0;
  let ended = false;
  let captured = false;
  let elapsed = 0; // since the first escalation
  let recallT = 0; // since level 2
  let seizeT = 0;
  let beamT = 0;
  let squadDown = false;
  const lastPos = new THREE.Vector3();
  const incident = new THREE.Vector3();

  /** @type {any[]} */
  const units = [];
  /** @type {any[]} */
  const helis = [];
  /** @type {THREE.Mesh | null} */
  let beam = null;

  function say(id) {
    if (typeof play !== "function") return;
    try {
      play(id);
    } catch {
      /* voice optional */
    }
  }

  // -------------------------------------------------------------------------
  // Flight
  // -------------------------------------------------------------------------
  function launchHeli(stationAngle, alt, mode) {
    const root = makeHeli();
    const entry = stationAngle + (rand() - 0.5) * 0.5;
    const x = incident.x + Math.cos(entry) * APPROACH_R;
    const z = incident.z + Math.sin(entry) * APPROACH_R;
    const y = alt + 8 + rand() * 5;
    root.position.set(x, y, z);
    root.lookAt(incident.x, alt, incident.z);
    scene.add(root);
    const h = {
      root,
      mode, // 'inbound' | 'station' | 'drop' | 'climb'
      pos: new THREE.Vector3(x, y, z),
      vel: new THREE.Vector3(),
      angle: stationAngle,
      radius: RING,
      alt,
      spin: 22 + rand() * 6,
      orbit: 0.34 + rand() * 0.1,
      pods: [],
      podsAloft: 0,
      deployed: false,
      arrived: 0,
    };
    helis.push(h);
    return h;
  }

  function stationPoint(h, out) {
    return out.set(
      incident.x + Math.cos(h.angle) * h.radius,
      h.alt,
      incident.z + Math.sin(h.angle) * h.radius
    );
  }

  function flyHeli(h, dt) {
    const want = _mid.copy(stationPoint(h, _mid));
    _dir.copy(want).sub(h.pos);
    const dist = _dir.length();

    if (h.mode === "inbound") {
      const v = Math.min(CRUISE, Math.max(7, dist * SEEK));
      if (dist > 0.001) _dir.multiplyScalar(1 / dist);
      h.vel.lerp(_dir.multiplyScalar(v), Math.min(1, dt * 3.2));
      h.pos.addScaledVector(h.vel, dt);
      if (dist < 2.2) {
        h.mode = "station";
        h.arrived = elapsed;
      }
    } else {
      // On station: orbit the incident, easing altitude toward the current job.
      h.angle += h.orbit * dt;
      const want2 = stationPoint(h, _mid);
      const k = Math.min(1, dt * 2.4);
      h.pos.x += (want2.x - h.pos.x) * k;
      h.pos.z += (want2.z - h.pos.z) * k;
      h.pos.y += (h.alt + Math.sin(elapsed * 2.1 + h.angle) * 0.22 - h.pos.y) * Math.min(1, dt * 1.4);
      h.vel.set(-Math.sin(h.angle), 0, Math.cos(h.angle)).multiplyScalar(h.radius * h.orbit);
    }

    h.root.position.copy(h.pos);
    const speed = h.vel.length();
    if (speed > 0.2) {
      _dir.copy(h.pos).addScaledVector(h.vel, 1 / speed);
      h.root.lookAt(_dir);
    }
    h.root.rotateX(Math.min(0.3, speed * 0.012)); // nose down under power
    h.root.rotateZ(h.mode === "inbound" ? 0 : 0.16); // banked into the turn
    h.root.userData.rotor.rotation.y += h.spin * dt;
    h.root.userData.tailRotor.rotation.x += h.spin * 1.7 * dt;
  }

  // -------------------------------------------------------------------------
  // Ground units
  // -------------------------------------------------------------------------
  function makeDust() {
    const m = new THREE.Mesh(GEO.dust, MAT.dust.clone());
    m.userData.ownMaterial = true;
    m.rotation.x = -Math.PI / 2;
    m.position.y = 0.03;
    m.visible = false;
    return m;
  }

  function boardUnits(h, count, indexBase) {
    h.deployed = true;
    for (let i = 0; i < count; i++) {
      const root = makeUnit();
      const side = (i % 2 === 0 ? -1 : 1) * (0.34 + ((i / 2) | 0) * 0.24);
      const x = h.pos.x + Math.cos(h.angle + Math.PI * 0.5) * side;
      const z = h.pos.z + Math.sin(h.angle + Math.PI * 0.5) * side;
      root.position.set(x, h.pos.y - 1.1, z);
      root.visible = false;
      scene.add(root);

      const rope = new THREE.Mesh(GEO.rope, MAT.rope);
      rope.visible = false;
      scene.add(rope);

      const dust = makeDust();
      scene.add(dust);

      units.push({
        root,
        rope,
        dust,
        dustT: 0,
        heli: h,
        side,
        mode: "aboard", // aboard → rope → fall → land → stalk → run → seize
        wait: (indexBase + i) * DROP_STAGGER + rand() * 0.12,
        x,
        y: h.pos.y - 1.1,
        z,
        vy: 0,
        speed: 0,
        top: SPRINT * (0.9 + rand() * 0.2),
        phase: rand() * Math.PI * 2,
        modeT: 0,
        crouch: 0,
        yaw: h.angle + Math.PI,
        slot: 0,
      });
    }
  }

  /**
   * Base gait from `poseT101`, plus the two beats it has no channel for:
   * the landing squat and the forward drive of a full run.
   */
  function unitPose(u, speed) {
    const rig = u.root.userData?.rig;
    if (!poseOk || !rig) return;
    // Grab reads best held at full extension, so park punchT on the peak.
    const grab = u.mode === "seize" ? Math.min(1, u.modeT / 0.3) * PUNCH_PEAK : 0;
    try {
      poseT101(u.root, {
        walkPhase: u.phase,
        speed,
        punchT: grab,
        laserT: 0,
        aimYaw: 0,
        aimPitch: 0,
      });
    } catch {
      poseOk = false;
      return;
    }

    if (u.crouch > 0.001) {
      // Two-link squat: thigh forward by a, shin back by 2a, ankle flat again —
      // the soles stay planted, so the pelvis just drops by the leg's shortening.
      const a = 0.66 * u.crouch;
      const drop = LEG_LEN * (1 - Math.cos(a));
      rig.hipL.rotation.x -= a;
      rig.hipR.rotation.x -= a;
      rig.kneeL.rotation.x += 2 * a;
      rig.kneeR.rotation.x += 2 * a;
      rig.footL.rotation.x -= a;
      rig.footR.rotation.x -= a;
      rig.hips.position.y -= drop;
      rig.spine.rotation.x -= 0.55 * a;
      rig.shoulderL.rotation.x -= 1.1 * a;
      rig.shoulderR.rotation.x -= 1.1 * a;
      rig.elbowL.rotation.x += 0.6 * a;
      rig.elbowR.rotation.x += 0.6 * a;
    } else if (speed > STALK_V + 0.4) {
      // Drive: heavier arm pump and a forward pitch once it is really running.
      const k = Math.min(1, (speed - STALK_V - 0.4) / (SPRINT - STALK_V));
      rig.shoulderL.rotation.x *= 1 + 0.55 * k;
      rig.shoulderR.rotation.x *= 1 + 0.55 * k;
      rig.spine.rotation.x -= 0.19 * k;
      rig.chest.rotation.x -= 0.06 * k;
      rig.head.rotation.x += 0.14 * k;
    }
  }

  function tickUnit(u, dt) {
    const h = u.heli;
    const dx = lastPos.x - u.x;
    const dz = lastPos.z - u.z;
    const dist = Math.hypot(dx, dz);
    u.modeT += dt;

    switch (u.mode) {
      case "aboard": {
        // Ride the door until the ship is on station and the queue clears.
        u.x = h.pos.x + Math.cos(h.angle + Math.PI * 0.5) * u.side;
        u.z = h.pos.z + Math.sin(h.angle + Math.PI * 0.5) * u.side;
        u.y = h.pos.y - 1.1;
        u.yaw = h.angle + Math.PI;
        if (h.mode === "station" && h.pos.y < HELI_Y + 1.2) {
          u.wait -= dt;
          if (u.wait <= 0) {
            u.mode = "rope";
            u.modeT = 0;
            u.root.visible = true;
            u.rope.visible = true;
          }
        }
        break;
      }
      case "rope": {
        u.y -= ROPE_V * dt;
        u.vy = -ROPE_V;
        if (u.y <= RELEASE_Y) {
          u.mode = "fall";
          u.modeT = 0;
          u.rope.visible = false;
        }
        break;
      }
      case "fall": {
        u.vy -= DROP_G * dt;
        u.y += u.vy * dt;
        if (u.y <= 0) {
          u.y = 0;
          u.vy = 0;
          u.mode = "land";
          u.modeT = 0;
          u.dustT = 0.7;
          u.dust.visible = true;
          u.dust.position.set(u.x, 0.03, u.z);
          if (units.indexOf(u) === 0) say("recall_land_01");
        }
        break;
      }
      case "land": {
        // Impact: knees fold, then the frame straightens up and looks at you.
        if (u.modeT >= LAND_S) {
          u.mode = "form";
          u.modeT = 0;
        }
        break;
      }
      case "form": {
        // Hold the drop line until the rest of the stick is on the sand — the
        // squad advances as one, which is what makes it feel inevitable.
        if (squadDown || u.modeT >= FORM_S) {
          u.mode = "stalk";
          u.modeT = 0;
        }
        break;
      }
      case "stalk":
      case "run": {
        if (u.mode === "stalk" && u.modeT >= STALK_S) {
          u.mode = "run";
          u.modeT = 0;
        }
        const want = u.mode === "stalk" ? STALK_V : u.top;
        u.speed += Math.min(want - u.speed, ACCEL * dt);
        if (u.speed < 0) u.speed = 0;
        // Converge on a slot around the player instead of stacking on one point.
        const ang = Math.atan2(dz, dx) + Math.PI + u.slot;
        const tx = lastPos.x + Math.cos(ang) * 0.85;
        const tz = lastPos.z + Math.sin(ang) * 0.85;
        const ddx = tx - u.x;
        const ddz = tz - u.z;
        const dd = Math.hypot(ddx, ddz);
        if (dd > 0.05) {
          const step = Math.min(dd, u.speed * dt);
          u.x += (ddx / dd) * step;
          u.z += (ddz / dd) * step;
        }
        u.phase += dt * (2.4 + u.speed * 1.45);
        if (dist <= CAPTURE_R) {
          u.mode = "seize";
          u.modeT = 0;
          u.speed = 0;
          if (!captured) {
            captured = true;
            seizeT = 0;
            say("factory_recall_02");
          }
        }
        break;
      }
      case "seize": {
        u.phase += dt * 1.4;
        break;
      }
    }

    if (u.mode !== "aboard") u.yaw = Math.atan2(dx, dz);
    u.root.rotation.y = u.yaw;

    // Impact: the landing folds the knees, then the frame straightens up.
    u.crouch =
      u.mode === "land" ? Math.sin(Math.PI * Math.min(1, u.modeT / LAND_S)) ** 0.7 : 0;
    u.root.position.set(u.x, u.y, u.z);
    u.root.visible = u.mode !== "aboard";

    if (u.rope.visible) {
      const top = u.heli.pos;
      const len = Math.max(0.2, top.y - 0.9 - u.y);
      u.rope.scale.set(1, len, 1);
      u.rope.position.set((top.x + u.x) * 0.5, u.y + len * 0.5, (top.z + u.z) * 0.5);
      _dir.set(top.x - u.x, len, top.z - u.z).normalize();
      u.rope.quaternion.setFromUnitVectors(Y_UP, _dir);
    }

    if (u.dustT > 0) {
      u.dustT -= dt;
      const k = 1 - Math.max(0, u.dustT) / 0.7;
      u.dust.scale.setScalar(0.5 + k * 3.2);
      u.dust.material.opacity = 0.75 * (1 - k) * (1 - k);
      if (u.dustT <= 0) u.dust.visible = false;
    }

    const gait = u.mode === "stalk" || u.mode === "run" ? u.speed : 0;
    unitPose(u, gait);
  }

  // -------------------------------------------------------------------------
  // Escalation
  // -------------------------------------------------------------------------
  function toAlert() {
    level = 1;
    elapsed = 0;
    say("recall_alert_01");
    launchHeli(rand() * Math.PI * 2, OBS_Y, "inbound");
    onLevel?.(1, { point: incident.clone() });
  }

  function toRecall() {
    level = 2;
    recallT = 0;
    say("factory_recall_01");

    const n = HULL_MIN + ((rand() * (HULL_MAX - HULL_MIN + 1)) | 0);
    const yaw0 = rand() * Math.PI * 2;
    const dropHelis = n > 6 ? 3 : 2;

    // The spotter already overhead drops too — it just has to come down first.
    for (const h of helis) h.alt = HELI_Y;
    for (let i = helis.length; i < dropHelis; i++) {
      launchHeli(yaw0 + (i / dropHelis) * Math.PI * 2, HELI_Y, "inbound");
    }
    for (let i = 0; i < helis.length; i++) helis[i].angle = yaw0 + (i / helis.length) * Math.PI * 2;

    let made = 0;
    for (let i = 0; i < helis.length && made < n; i++) {
      const share = Math.min(n - made, Math.ceil(n / helis.length));
      boardUnits(helis[i], share, made);
      made += share;
    }
    for (let i = 0; i < units.length; i++) {
      units[i].slot = (i / units.length) * Math.PI * 2 * 0.55 - 0.55;
    }
    onLevel?.(2, { point: incident.clone() });
  }

  function fireBeam(from, to) {
    if (beam) scene.remove(beam);
    const a = _mid.set(from.x, (from.y || 0) + 1.55, from.z);
    _dir.copy(to).sub(a);
    const len = Math.max(1.2, _dir.length());
    _dir.normalize();
    beam = new THREE.Mesh(GEO.beam, MAT.beam);
    beam.scale.set(1, len, 1);
    beam.position.copy(a).addScaledVector(_dir, len * 0.5);
    beam.quaternion.setFromUnitVectors(Y_UP, _dir);
    scene.add(beam);
    beamT = 0.22;
  }

  /**
   * Someone actually got hit. Called by `combat`, never by a bare keypress.
   * @param {{ kind?: 'punch'|'laser', victim?: any, lethal?: boolean, point?: THREE.Vector3 }} ev
   * @returns {{ level: number, escalated: boolean, heat: number }}
   */
  function onHarm(ev = {}) {
    const before = level;
    if (ended || !scene) return { level, escalated: false, heat };

    const p = ev.point || ev.victim?.mesh?.position || lastPos;
    incident.set(p.x || 0, p.y || 0, p.z || 0);
    heat += ev.lethal ? HEAT_LETHAL : HEAT_HIT;

    if (ev.kind === "laser") fireBeam(lastPos, incident);

    if (level < 1 && heat >= ALERT_HEAT) toAlert();
    if (level < 2 && (ev.lethal || heat >= RECALL_HEAT)) toRecall();

    return { level, escalated: level > before, heat };
  }

  /**
   * Back-compat shim for the old keypress path. Treat a bare `kind` as one
   * non-lethal hit at the player's feet — wire `onHarm` from combat instead.
   * @param {'laser'|'punch'} kind
   * @returns {boolean} true if this raised the alert level
   */
  function tryFire(kind) {
    if (kind !== "laser" && kind !== "punch") return false;
    return onHarm({ kind, lethal: false, point: lastPos.clone() }).escalated;
  }

  /**
   * @param {number} dt
   * @param {{ x: number, y?: number, z: number } | THREE.Vector3} playerPos
   */
  function tick(dt, playerPos) {
    if (playerPos) lastPos.set(playerPos.x, playerPos.y || 0, playerPos.z);
    if (level === 0 || !(dt > 0) || ended) return;
    const h = Math.min(dt, 0.05);
    elapsed += h;
    if (level >= 2) recallT += h;

    if (beam) {
      beamT -= h;
      if (beamT <= 0) {
        scene.remove(beam);
        beam = null;
      }
    }

    // One pass to see who is still in the air: the squad advances together and
    // an empty ship climbs back to its observation orbit.
    squadDown = units.length > 0;
    for (const heli of helis) heli.podsAloft = 0;
    for (const u of units) {
      if (u.mode === "aboard" || u.mode === "rope") {
        u.heli.podsAloft++;
        squadDown = false;
      } else if (u.mode === "fall") {
        squadDown = false;
      }
    }
    for (const heli of helis) {
      if (heli.deployed && heli.podsAloft === 0) heli.alt = OBS_Y;
      flyHeli(heli, h);
    }
    for (const u of units) tickUnit(u, h);

    if (captured) {
      seizeT += h;
      if (seizeT >= SEIZE_S) finish();
    } else if (level >= 2 && recallT >= FAIL_S) {
      finish();
    }
  }

  function finish() {
    if (ended) return;
    ended = true;
    dispose();
    onGameOver?.();
  }

  /**
   * Tear the whole setpiece down and re-arm. Safe to call at any time — main
   * calls it on restart; `tick` calls it when the sequence resolves.
   */
  function dispose() {
    for (const u of units) {
      scene?.remove(u.root);
      scene?.remove(u.rope);
      scene?.remove(u.dust);
      disposeTree(u.dust);
      disposeTree(u.root);
    }
    units.length = 0;
    for (const heli of helis) scene?.remove(heli.root);
    helis.length = 0;
    if (beam) scene?.remove(beam);
    beam = null;
    beamT = 0;
    level = 0;
    heat = 0;
    seizeT = 0;
    elapsed = 0;
    recallT = 0;
  }

  /** Full reset, including the game-over latch, for a new run. */
  function reset() {
    dispose();
    captured = false;
    ended = false;
  }

  return {
    onHarm,
    tryFire,
    tick,
    dispose,
    reset,
    get wanted() {
      return level >= 2;
    },
    get alerted() {
      return level >= 1;
    },
    get level() {
      return level;
    },
    get heat() {
      return heat;
    },
    get captured() {
      return captured;
    },
    get unitCount() {
      return units.length;
    },
  };
}
