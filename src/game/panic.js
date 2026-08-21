/**
 * Public reaction to violence: civilians scream and sprint away; beach cops
 * and T-101s shove the player toward the surf-club re-ed chair (JACK).
 *
 * First genuine hit: hunt + spawnWave(8) on the sand. Living units within 2.4 m
 * add shove velocity toward JACK. Wipe the wave and dropships bring the next
 * (16, 24, 32…). Three living shoves at JACK fire onDelivered.
 *
 * Cops are articulated bipeds with a real gait (shared GEO/MAT tables, so a
 * squad costs one material set, not one per body).
 */
import * as THREE from "three";
import { spawnPatrolHouse, PATROL_HOME } from "../world/patrolHouse.js";
import { BOUNDS } from "../world/goldCoast.js";
import { buildT101, poseT101 } from "../chars/t101.js";
import { seagull } from "../chars/npcs.js";
import { JACK } from "./arrest.js";
import { blocked } from "../input/player.js";
import { FACTORY_DOOR, FACTORY_DOCK, FACTORY_YARD } from "../world/aureliaFactory.js";

const FLEE = 6.2;
const COP_SPEED = 7.4;
const COP_WALK = 2.1;
const LIVE_CAP = 100;
const LIVE_CAP_PHONE = 100;
const WAVE_BASE = 8;
const SHOVE_R = 2.8;
const SHOVE_PER = 2.8;
const SHOVE_MAX = 28;
const SHOVE_PULSE = 8.5;
const SHOVE_PULSE_R = 1.7;
const JACK_R = 1.35;
const DELIVER_N = 3;
const CLUB = { x0: -22.3, x1: -13.7, z0: 11.2, z1: 16.7 };
const DOOR = { x: -15.9, z: 17.65 };
const FAN_RAD = (25 * Math.PI) / 180;
const SNIPER_MIN = 1.22;
const SNIPER_MAX = 9.14;
const SNIPER_HOLD = 5.6;
const SNIPER_FRAC = 0.4;
const COP_BEAM_R = 0.95;
const ZAP_SHOVE = 4.4;
const ZAP_RANGE = 14;
const SPAWN_R0 = 5.4;
const SPAWN_GAP = 1.4;
const HOLD_R = 2.6;
const FLEE_MAX = 46; // civilians stop and cower once this far from the incident
const CELL = 1.4;
const PATH_MAX = 220;
const PATH_TTL = 0.45;
const PATH_TTL_HOME = 2.8;
/** How many living units may crowd the re-ed room. The rest walk off. */
const JACK_INSIDE = 10;
const BEACH_SPOTS = [
  { x: -11.5, z: -4.2 },
  { x: 3.4, z: -6.1 },
  { x: 14.2, z: -2.8 },
  { x: -22.4, z: 1.6 },
  { x: 21.8, z: 5.4 },
  { x: -6.8, z: 8.2 },
  { x: 9.5, z: 9.6 },
  { x: -16.2, z: -7.4 },
];

// ---------------------------------------------------------------------------
// Shared geometry / materials. Unit primitives scaled per mesh — iPhone-safe.
// ---------------------------------------------------------------------------
const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.05, ...extra });
}

const MAT = {
  navy: std(0x1e3a6e),
  navyDark: std(0x152a52),
  vest: std(0x14161a, { roughness: 0.6 }),
  skin: std(0xc9a07a, { roughness: 0.66 }),
  boot: std(0x101014, { roughness: 0.55 }),
  visor: std(0x0a0c10, { roughness: 0.25, metalness: 0.35 }),
  belt: std(0x24262c, { roughness: 0.5 }),
  badge: std(0xd8b23a, { roughness: 0.35, metalness: 0.7 }),
};

/** Invisible combat volume so lasers still tag the see-through T-101 cage. */
const HULL_GEO = new THREE.CapsuleGeometry(0.34, 1.22, 2, 6);
const HULL_MAT = new THREE.MeshBasicMaterial({ visible: false });

function addHitHull(root) {
  const hull = new THREE.Mesh(HULL_GEO, HULL_MAT);
  hull.name = "hit-hull";
  hull.position.y = 1.0;
  hull.userData.hitHull = true;
  hull.castShadow = false;
  hull.receiveShadow = false;
  root.add(hull);
  return hull;
}

/** Squad looks. First two seats are always brotha + sensei when 2+ cops spawn. */
const COP_LOOKS = {
  tan: { skin: 0xc9a07a, hair: 0x3a2818, scale: 1, voiceSet: "default", hairH: 0.04 },
  brotha: { skin: 0x4a2c1c, hair: 0x140c08, scale: 1, voiceSet: "brotha", hairH: 0.075 },
  sensei: { skin: 0xf0d5b8, hair: 0x1a1210, scale: 0.88, voiceSet: "sensei", hairH: 0.032 },
};

function pickCopLook(existing) {
  let hasBrotha = false;
  let hasSensei = false;
  for (const c of existing) {
    const v = c.voiceSet || c.root?.userData?.voiceSet;
    if (v === "brotha") hasBrotha = true;
    else if (v === "sensei") hasSensei = true;
  }
  if (!hasBrotha) return "brotha";
  if (!hasSensei) return "sensei";
  return "tan";
}

function part(mat, sx, sy, sz, geo = GEO.box) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.scale.set(sx, sy, sz);
  return m;
}

/** Next steer point so cops walk around the club to the north door, then JACK. */
function steerPoint(px, pz) {
  if (Math.hypot(px - JACK.x, pz - JACK.z) < 1.7) return JACK;
  const { x0, x1, z0, z1 } = CLUB;
  const inX = px > x0 - 0.85 && px < x1 + 0.85;
  const south = pz < z0 + 0.5;
  const east = px >= x1 - 0.2;
  const west = px <= x0 + 0.2;
  if (south && inX && !east && !west) {
    const goEast = Math.abs(px - (x1 + 1.1)) <= Math.abs(px - (x0 - 1.1));
    return goEast ? { x: x1 + 1.2, z: Math.min(pz, z0) } : { x: x0 - 1.2, z: Math.min(pz, z0) };
  }
  if ((east || px > x1) && pz < DOOR.z - 0.4) return { x: Math.max(px, x1 + 1.1), z: DOOR.z };
  if ((west || px < x0) && pz < DOOR.z - 0.4) return { x: Math.min(px, x0 - 1.1), z: DOOR.z };
  if (pz > z1 - 0.1) {
    if (Math.abs(px - DOOR.x) > 0.5) return { x: DOOR.x, z: Math.max(pz, DOOR.z) };
    if (pz > 15.8) return { x: DOOR.x, z: 15.3 };
  }
  return JACK;
}

function pathDir(px, pz) {
  const w = steerPoint(px, pz);
  const dx = w.x - px;
  const dz = w.z - pz;
  const L = Math.hypot(dx, dz) || 1;
  return { x: dx / L, z: dz / L, w };
}

function fanDir(base, slot) {
  const a = ((slot % 7) - 3) * (FAN_RAD / 3);
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: base.x * c - base.z * s, z: base.x * s + base.z * c, a };
}

function segDist(ax, az, bx, bz, px, pz) {
  const abx = bx - ax;
  const abz = bz - az;
  const len2 = abx * abx + abz * abz || 1e-6;
  let t = ((px - ax) * abx + (pz - az) * abz) / len2;
  t = Math.max(0, Math.min(1, t));
  const qx = ax + abx * t;
  const qz = az + abz * t;
  return Math.hypot(px - qx, pz - qz);
}

function reflectXZ(ix, iz, nx, nz) {
  const d = ix * nx + iz * nz;
  return { x: ix - 2 * d * nx, z: iz - 2 * d * nz };
}

function cellKey(i, j) {
  return i + "," + j;
}

function toCell(x, z) {
  return [Math.round(x / CELL), Math.round(z / CELL)];
}

function fromCell(i, j) {
  return { x: i * CELL, z: j * CELL };
}

function away(from, pos, out) {
  out.set(pos.x - from.x, 0, pos.z - from.z);
  if (out.lengthSq() < 0.01) out.set(Math.random() - 0.5, 0, Math.random() - 0.5);
  out.normalize();
  return out;
}

/**
 * Beach-patrol cop. Origin at the soles, faces +Z, ~1.8 m.
 * `userData.rig` holds the joints `poseCop` drives.
 * @param {keyof typeof COP_LOOKS} [lookName]
 * @returns {THREE.Group}
 */
function makeCop(lookName = "tan") {
  const look = COP_LOOKS[lookName] || COP_LOOKS.tan;
  const skinM = lookName === "tan" ? MAT.skin : std(look.skin, { roughness: 0.66 });
  const hairM = std(look.hair, { roughness: 0.88 });

  const g = new THREE.Group();
  g.name = "panic-cop";

  const hipY = 0.92;
  const thighH = 0.46;
  const shinH = 0.4;
  const upperH = 0.29;
  const foreH = 0.26;

  const hips = new THREE.Group();
  hips.position.y = hipY;
  g.add(hips);

  const pelvis = part(MAT.navyDark, 0.28, 0.16, 0.19);
  hips.add(pelvis);

  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.095, 0, 0);

    const thigh = part(MAT.navy, 0.115, thighH, 0.115, GEO.cyl);
    thigh.position.y = -thighH * 0.5;
    leg.add(thigh);

    const shinGrp = new THREE.Group();
    shinGrp.position.y = -thighH;
    const knee = part(MAT.navy, 0.06, 0.06, 0.06, GEO.sphere);
    shinGrp.add(knee);
    const shin = part(MAT.navy, 0.095, shinH, 0.095, GEO.cyl);
    shin.position.y = -shinH * 0.5;
    shinGrp.add(shin);

    const footGrp = new THREE.Group();
    footGrp.position.y = -shinH;
    const boot = part(MAT.boot, 0.115, 0.1, 0.24);
    boot.position.set(0, -0.05, 0.045);
    const cuff = part(MAT.boot, 0.12, 0.11, 0.13);
    cuff.position.set(0, 0.03, -0.01);
    footGrp.add(boot, cuff);

    shinGrp.add(footGrp);
    leg.add(shinGrp);
    hips.add(leg);
    legs.push({ leg, shin: shinGrp, foot: footGrp });
  }

  const torso = new THREE.Group();
  hips.add(torso);
  const chest = part(MAT.navy, 0.36, 0.46, 0.21);
  chest.position.y = 0.25;
  torso.add(chest);
  const vest = part(MAT.vest, 0.38, 0.34, 0.24);
  vest.position.y = 0.3;
  torso.add(vest);
  const badge = part(MAT.badge, 0.05, 0.06, 0.02);
  badge.position.set(0.11, 0.4, 0.125);
  torso.add(badge);
  const belt = part(MAT.belt, 0.31, 0.07, 0.22);
  belt.position.y = 0.04;
  torso.add(belt);
  const holster = part(MAT.belt, 0.07, 0.14, 0.09);
  holster.position.set(0.17, -0.02, 0.02);
  torso.add(holster);
  const shoulders = part(MAT.navy, 0.46, 0.11, 0.2);
  shoulders.position.y = 0.5;
  torso.add(shoulders);

  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.235, 0.48, 0);
    arm.rotation.z = side * 0.08;

    const cap = part(MAT.navy, 0.07, 0.07, 0.07, GEO.sphere);
    arm.add(cap);
    const upper = part(MAT.navy, 0.085, upperH, 0.085, GEO.cyl);
    upper.position.y = -upperH * 0.5;
    arm.add(upper);

    const foreGrp = new THREE.Group();
    foreGrp.position.y = -upperH;
    const elbow = part(MAT.navy, 0.052, 0.052, 0.052, GEO.sphere);
    foreGrp.add(elbow);
    const fore = part(skinM, 0.07, foreH, 0.07, GEO.cyl);
    fore.position.y = -foreH * 0.5;
    foreGrp.add(fore);
    const hand = part(skinM, 0.075, 0.1, 0.06);
    hand.position.y = -foreH - 0.05;
    foreGrp.add(hand);

    arm.add(foreGrp);
    torso.add(arm);
    arms.push({ arm, fore: foreGrp });
  }

  const neck = part(skinM, 0.05, 0.09, 0.05, GEO.cyl);
  neck.position.y = 0.58;
  torso.add(neck);

  const head = new THREE.Group();
  head.position.y = 0.72;
  const skull = part(skinM, 0.115, 0.13, 0.12, GEO.sphere);
  head.add(skull);
  const jaw = part(skinM, 0.1, 0.06, 0.11);
  jaw.position.set(0, -0.07, 0.02);
  head.add(jaw);
  const hair = part(hairM, 0.128, look.hairH, 0.132, GEO.sphere);
  hair.position.y = 0.06;
  head.add(hair);
  const cap = part(MAT.navyDark, 0.135, 0.055, 0.135, GEO.cyl);
  cap.position.y = 0.09;
  head.add(cap);
  const brim = part(MAT.navyDark, 0.17, 0.022, 0.1);
  brim.position.set(0, 0.06, 0.11);
  head.add(brim);
  const shades = part(MAT.visor, 0.17, 0.035, 0.05);
  shades.position.set(0, 0.015, 0.105);
  head.add(shades);
  torso.add(head);

  g.userData.rig = {
    hips,
    torso,
    head,
    armL: arms[0].arm,
    armR: arms[1].arm,
    foreL: arms[0].fore,
    foreR: arms[1].fore,
    legL: legs[0].leg,
    legR: legs[1].leg,
    shinL: legs[0].shin,
    shinR: legs[1].shin,
    footL: legs[0].foot,
    footR: legs[1].foot,
    hipY,
  };
  g.userData.kind = "cop";
  g.userData.voiceSet = look.voiceSet;
  g.userData.look = lookName;
  g.userData.body = { scale: look.scale || 1, skinM };
  g.userData.paintTarget = true;
  g.userData.ageBand = "adult";
  if (look.scale !== 1) g.scale.setScalar(look.scale);
  addHitHull(g);
  poseCop(g, { walkPhase: 0, speed: 0 });
  return g;
}

/**
 * Contra-lateral gait. `speed` 0 idles, ≥6 reads as a run.
 * Limbs hang down −Y and the body faces +Z, so forward swing is −rotation.x.
 * `slapT` 0..1: right-hand wind-up then palm to the face (~contact 0.5).
 * @param {THREE.Group} rig
 * @param {{ walkPhase?: number, speed?: number, reach?: number, slapT?: number }} state
 */
function poseCop(rig, { walkPhase = 0, speed = 0, reach = 0, slapT = 0 } = {}) {
  const r = rig?.userData?.rig;
  if (!r) return;
  const amp = Math.min(1, Math.max(0, speed) / 5.2);
  const run = Math.min(1, Math.max(0, speed) / 7.4);
  const swing = Math.sin(walkPhase);
  const lift = Math.abs(Math.sin(walkPhase));

  r.hips.position.y = r.hipY + lift * 0.05 * amp - reach * 0.04;
  r.hips.rotation.y = swing * 0.1 * amp;
  r.torso.rotation.x = 0.04 + run * 0.2;
  r.torso.rotation.y = -swing * 0.08 * amp;

  r.legL.rotation.x = -swing * (0.55 + run * 0.25) * amp;
  r.legR.rotation.x = swing * (0.55 + run * 0.25) * amp;
  r.shinL.rotation.x = Math.max(0, swing) * (0.85 + run * 0.5) * amp;
  r.shinR.rotation.x = Math.max(0, -swing) * (0.85 + run * 0.5) * amp;
  r.footL.rotation.x = -Math.max(0, swing) * 0.3 * amp;
  r.footR.rotation.x = -Math.max(0, -swing) * 0.3 * amp;

  const armSwing = (0.55 + run * 0.35) * amp;
  // `reach` folds the swing into a two-handed grab: arms out, elbows still bent.
  r.armL.rotation.x = swing * armSwing * (1 - reach) + 0.05 - reach * 0.95;
  r.armR.rotation.x = -swing * armSwing * (1 - reach) + 0.05 - reach * 0.95;
  r.armL.rotation.y = 0;
  r.armR.rotation.y = 0;
  r.armL.rotation.z = -0.08 - reach * 0.26;
  r.armR.rotation.z = 0.08 + reach * 0.26;
  r.foreL.rotation.x = -0.5 - run * 0.55 - Math.max(0, swing) * 0.3 * (1 - reach) + reach * 0.12;
  r.foreR.rotation.x = -0.5 - run * 0.55 - Math.max(0, -swing) * 0.3 * (1 - reach) + reach * 0.12;
  r.head.rotation.x = -run * 0.1;

  const slap = Math.min(1, Math.max(0, slapT));
  if (slap <= 0) return;
  let wind = 0;
  let hit = 0;
  if (slap < 0.42) {
    wind = slap / 0.42;
  } else if (slap < 0.58) {
    const u = (slap - 0.42) / 0.16;
    wind = 1 - u;
    hit = u;
  } else {
    hit = Math.max(0, 1 - (slap - 0.58) / 0.42);
  }
  const w = wind * wind * (3 - 2 * wind);
  const h = hit * hit * (3 - 2 * hit);
  r.armR.rotation.x = 0.55 * w - 1.55 * h;
  r.armR.rotation.y = -0.18 * w - 0.55 * h;
  r.armR.rotation.z = 0.12 + 0.28 * h;
  r.foreR.rotation.x = -1.05 * w - 0.12 * h;
  r.torso.rotation.y = r.torso.rotation.y - 0.22 * h + 0.08 * w;
  r.head.rotation.x = -0.06 * h;
}

/** Swing a fleeing civilian's limbs — npcs.js exposes armL/armR/legL/legR groups. */
function poseCivilian(mesh, phase, amp) {
  const b = mesh?.userData?.body;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  b.legL.rotation.x = -swing * 0.72 * amp;
  b.legR.rotation.x = swing * 0.72 * amp;
  if (b.armL) b.armL.rotation.x = swing * 0.85 * amp;
  if (b.armR) b.armR.rotation.x = -swing * 0.85 * amp;
}

function liveCap() {
  try {
    if (typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent || "")) {
      return LIVE_CAP_PHONE;
    }
  } catch {
    /* no ua */
  }
  return LIVE_CAP;
}

function makeT101Unit(scale = 0.95) {
  const s = Math.max(0.85, Math.min(2.05, scale));
  const copper = s > 1.35 ? 0x7a3a18 : s > 1.15 ? 0x9a5424 : 0xb87333;
  const root = buildT101({ scale: s, copper });
  root.name = "panic-t101";
  root.userData.kind = "t101";
  root.userData.ageBand = "adult";
  root.userData.paintTarget = true;
  root.userData.body = { scale: s };
  addHitHull(root);
  poseT101(root, { walkPhase: Math.random() * Math.PI * 2, speed: 0 });
  return root;
}

/**
 * @param {{
 *   scene: THREE.Scene,
 *   cast?: any[],
 *   play?: (id: string) => unknown,
 *   colliders?: { addCollider?: Function, add?: Function, COL?: any[] },
 *   onSpawn?: (mesh: THREE.Object3D, kind: string) => void,
 *   onNeedDropships?: (info: object) => void,
 *   onDelivered?: () => void,
 *   onWipe?: (info: object) => void,
 *   sfx?: { copDie?: Function },
 * }} opts
 */
export function createPanic({
  scene,
  cast = [],
  play,
  colliders,
  sfx: sfxRef,
  onSpawn: onSpawnOpt,
  onNeedDropships: onNeedOpt,
  onDelivered: onDeliveredOpt,
  onWipe: onWipeOpt,
} = {}) {
  let on = false;
  let hunt = false;
  let level = 0; // 0 calm, 1 witnessed, 2 cops responding
  const _d = new THREE.Vector3();
  const _from = new THREE.Vector3();
  const lastPlayer = { x: 0, z: 0 };
  /** @type {{ root: THREE.Group, x: number, z: number, phase: number, speed: number, reach: number, duty: string, tx: number, tz: number, offX: number, offZ: number, onArrive?: Function, kind: string, wave: number, slot: number }[]} */
  const cops = [];
  const fleeing = [];
  let screamed = false;
  const house = scene ? spawnPatrolHouse(scene, colliders) : null;
  const bolts = [];
  if (scene) {
    const mat = new THREE.LineBasicMaterial({
      color: 0xff3a2a,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    for (let i = 0; i < 8; i++) {
      const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 1.4, 1)]);
      const line = new THREE.Line(g, mat.clone());
      line.visible = false;
      line.frustumCulled = false;
      scene.add(line);
      bolts.push({ line, g, until: 0 });
    }
  }
  let boltI = 0;
  const HOME = house?.home || PATROL_HOME;
  let onDelivered = typeof onDeliveredOpt === "function" ? onDeliveredOpt : null;
  let onNeedDropships = typeof onNeedOpt === "function" ? onNeedOpt : null;
  let onWipe = typeof onWipeOpt === "function" ? onWipeOpt : null;
  let onSpawn = typeof onSpawnOpt === "function" ? onSpawnOpt : null;
  let delivered = false;
  let waveIndex = 0;
  let killCount = 0;
  let waveSpawned = 0;
  let waveWanted = 0;
  let awaitingDrop = false;
  let lastSx = 0;
  let shoveFoleyAt = 0;
  let pileT = 0;
  let dragLock = false;
  let zapSx = 0;
  let zapSz = 0;
  let lastSz = 0;
  let slotSeq = 0;
  let sawPlayer = false;

  function scream() {
    if (screamed) return;
    screamed = true;
    try {
      play?.("panic_01");
      setTimeout(() => play?.("panic_02"), 400);
    } catch {
      /* vo optional */
    }
  }

  function scatter(from) {
    for (const npc of cast) {
      const m = npc?.mesh;
      if (!m || !m.position) continue;
      const kind = npc.kind || m.userData?.kind;
      if (kind === "gull" || kind === "cop" || kind === "t101") continue;
      if (m.userData.combatDown || m.visible === false) continue;
      const dist = Math.hypot(m.position.x - from.x, m.position.z - from.z);
      if (dist > 34) continue;
      away(from, m.position, _d);
      if (!m.userData.home) {
        m.userData.home = { x: m.position.x, y: m.position.y, z: m.position.z, yaw: m.rotation.y };
      }
      m.userData.flee = { x: _d.x, z: _d.z, spd: FLEE * (0.85 + Math.random() * 0.35) };
      m.userData.fleePhase = Math.random() * Math.PI * 2;
      if (!fleeing.includes(m)) fleeing.push(m);
    }
  }

  function isLiving(c) {
    if (!c || c.duty === "down") return false;
    if (c.root?.userData?.combatDown) return false;
    return true;
  }

  function living() {
    const out = [];
    for (const c of cops) if (isLiving(c)) out.push(c);
    return out;
  }

  function rememberPlayer(pos) {
    if (!pos) return;
    const x = pos.x ?? pos.pos?.x;
    const z = pos.z ?? pos.pos?.z;
    if (Number.isFinite(x)) lastPlayer.x = x;
    if (Number.isFinite(z)) lastPlayer.z = z;
    if (Number.isFinite(x) || Number.isFinite(z)) sawPlayer = true;
  }

  function unitForMesh(mesh) {
    let o = mesh;
    while (o) {
      for (let i = 0; i < cops.length; i++) {
        if (cops[i].root === o) return cops[i];
      }
      o = o.parent;
    }
    return null;
  }

  function pickKind() {
    return "cop";
  }

  function makeUnit(kind, scale) {
    if (kind === "t101") {
      try {
        return makeT101Unit(scale);
      } catch {
        /* fall through to cop */
      }
    }
    return makeCop(pickCopLook(cops));
  }

  function placeClear(origin, i, n, existing) {
    const col = colliders?.COL;
    const base = (i / Math.max(1, n)) * Math.PI * 2 + 0.31;
    for (let t = 0; t < 10; t++) {
      const a = base + t * 0.37;
      const rad = SPAWN_R0 + (i % 4) * 1.15 + t * 0.65;
      let x = origin.x + Math.cos(a) * rad;
      let z = origin.z + Math.sin(a) * rad;
      x = Math.max(BOUNDS.minX + 0.5, Math.min(BOUNDS.maxX - 0.5, x));
      z = Math.max(BOUNDS.minZ + 0.5, Math.min(BOUNDS.maxZ - 0.5, z));
      if (Math.hypot(x - origin.x, z - origin.z) < 3.2) continue;
      if (col && blocked(col, x, z, 0.4)) continue;
      let hit = false;
      for (const o of existing) {
        if (Math.hypot(x - o.x, z - o.z) < SPAWN_GAP) {
          hit = true;
          break;
        }
      }
      if (hit) continue;
      return { x, z };
    }
    const a = base;
    const rad = SPAWN_R0 + 8;
    return { x: origin.x + Math.cos(a) * rad, z: origin.z + Math.sin(a) * rad };
  }

  function poseUnit(c, want) {
    if (c.kind === "t101") {
      poseT101(c.root, { walkPhase: c.phase, speed: want, laserT: c.laserT || 0 });
      return;
    }
    poseCop(c.root, { walkPhase: c.phase, speed: want, reach: c.reach, slapT: c.slapT || 0 });
  }

  function mapKind(k) {
    if (k === "t101" || k === "officer") return "t101";
    if (k === "cop") return "cop";
    return null;
  }

  function noteSpawn() {
    const cap = liveCap();
    if (waveWanted <= 0) waveWanted = WAVE_BASE * (waveIndex + 1);
    if (waveSpawned >= waveWanted || living().length >= cap) awaitingDrop = false;
  }

  function pruneDowned() {
    /* Cop corpses stay for the gulls. T-101 hulks wait for the smelter. */
  }

  function addUnit(kind, x, z, wave, extra = {}) {
    pruneDowned();
    const cap = liveCap();
    if (!scene || living().length >= cap || cops.length >= LIVE_CAP) {
      noteSpawn();
      return null;
    }
    const k = extra.kind || kind || pickKind(cops.length);
    const root = makeUnit(k, extra.scale);
    const px = Math.max(BOUNDS.minX + 0.5, Math.min(BOUNDS.maxX - 0.5, x));
    const pz = Math.max(BOUNDS.minZ + 0.5, Math.min(BOUNDS.maxZ - 0.5, z));
    root.position.set(px, 0, pz);
    root.userData.kind = k;
    root.userData.ageBand = "adult";
    root.userData.paintTarget = true;
    scene.add(root);
    const rec = {
      root,
      x: px,
      z: pz,
      phase: Math.random() * Math.PI * 2,
      speed: COP_SPEED * (0.88 + Math.random() * 0.2),
      reach: 0,
      slapT: 0,
      voiceSet: root.userData.voiceSet || "default",
      duty: hunt ? "shove" : "home",
      tx: HOME.x,
      tz: HOME.z,
      offX: 0,
      offZ: 0,
      onArrive: null,
      kind: k,
      wave: Number.isFinite(wave) ? wave : waveIndex,
      slot: slotSeq++,
      scale: extra.scale || (k === "t101" ? 0.95 : 1),
      ranged: k === "t101" && (extra.ranged ?? Math.random() < SNIPER_FRAC),
      laserT: 0,
      nextShot: 0,
      elite: !!extra.elite,
      vx: 0,
      vz: 0,
      yaw: 0,
      path: null,
      pathI: 0,
      pathAt: 0,
    };
    if (rec.ranged && hunt) rec.duty = "snipe";
    cops.push(rec);
    waveSpawned += 1;
    try {
      onSpawn?.(root, k);
    } catch {
      /* enroll optional */
    }
    noteSpawn();
    return rec;
  }

  /**
   * One unit at a drop point. Dropships call this (or spawnWave with points).
   * @param {{ x:number, z:number, kind?: string, wave?: number }} p
   */
  function spawnUnit(p = {}) {
    return addUnit(mapKind(p.kind), p.x || 0, p.z || 0, p.wave);
  }

  function spawnRing(n, from) {
    const origin = from && Number.isFinite(from.x) ? from : lastPlayer;
    const cap = liveCap();
    const want = Math.max(0, Math.min(n | 0, cap - living().length));
    const spawned = [];
    if (want <= 0) {
      noteSpawn();
      return spawned;
    }
    const existing = living();
    for (let i = 0; i < want; i++) {
      const pos = placeClear(origin, i, want, existing);
      const rec = addUnit(pickKind(i), pos.x, pos.z, waveIndex);
      if (!rec) break;
      existing.push(rec);
      spawned.push(rec);
    }
    return spawned;
  }

  /**
   * Place mixed cop/t101 units. `spawnWave(n, from)` rings around a point.
   * Dropships may pass `{ count, points, around, wave }`.
   * Live cap 40 (32 on iPhone). Returns the new records.
   */
  function spawnWave(n, from) {
    if (n && typeof n === "object") {
      const spec = n;
      const points = spec.points;
      if (Array.isArray(points) && points.length) {
        const out = [];
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const rec = addUnit(mapKind(p.kind) || pickKind(i), p.x, p.z, p.wave ?? spec.wave);
          if (rec) out.push(rec);
        }
        return out;
      }
      const count = spec.count | 0 || WAVE_BASE;
      return spawnRing(count, spec.around || spec.from || from);
    }
    return spawnRing(n, from);
  }

  function requestWave(n, from) {
    if (n && typeof n === "object") return spawnWave(n);
    const count = Number.isFinite(n) ? n : WAVE_BASE * (waveIndex + 1);
    return spawnWave(count, from);
  }

  function fireDropships() {
    const ships = waveIndex + 1;
    const count = WAVE_BASE * (waveIndex + 1);
    const angles = [];
    for (let i = 0; i < ships; i++) angles.push((i / ships) * Math.PI * 2 + 0.18);
    const around = { x: lastPlayer.x, z: lastPlayer.z };
    const info = { count, ships, angles, from: around, around, wave: waveIndex };
    try {
      onWipe?.(info);
    } catch {
      /* optional */
    }
    try {
      onNeedDropships?.(info);
    } catch {
      /* optional */
    }
  }

  function maybeReplace() {}

  const BONE = new THREE.MeshStandardMaterial({ color: 0xe4d4bc, roughness: 0.92 });
  function toSkeleton(mesh) {
    mesh.traverse((o) => {
      if (!o.isMesh) return;
      o.material = BONE;
      o.scale.multiplyScalar(0.86);
    });
  }

  const scavGulls = [];
  if (scene) {
    for (let i = 0; i < 3; i++) {
      const g = seagull();
      g.name = "scav-gull";
      g.position.set(-8 + i * 4, 3.2, 2);
      scene.add(g);
      scavGulls.push({ mesh: g, tx: 0, tz: 0, phase: i });
    }
  }

  const smelter = (() => {
    if (!scene) return null;
    const g = new THREE.Group();
    g.name = "t101-smelter";
    const hull = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.55, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x9aa8b4, metalness: 0.55, roughness: 0.4 })
    );
    hull.position.y = 0.42;
    const vat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.38, 10),
      new THREE.MeshStandardMaterial({
        color: 0x88c8e8,
        transparent: true,
        opacity: 0.35,
        metalness: 0.3,
        roughness: 0.15,
      })
    );
    vat.position.set(0.35, 0.72, 0);
    const melt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.14, 0.08, 8),
      new THREE.MeshStandardMaterial({ color: 0xff5010, emissive: 0xff3000, emissiveIntensity: 0.8 })
    );
    melt.position.set(0.35, 0.55, 0);
    melt.visible = false;
    g.add(hull, vat, melt);
    scene.add(g);
    return { g, vat, melt, x: FACTORY_DOCK.x, z: FACTORY_DOCK.z, duty: "idle", target: null, hold: 0 };
  })();

  let pourAcc = 0;

  function walkable(i, j, r) {
    const p = fromCell(i, j);
    if (p.x < BOUNDS.minX + 0.4 || p.x > BOUNDS.maxX - 0.4 || p.z < BOUNDS.minZ + 0.4 || p.z > BOUNDS.maxZ - 0.4) return false;
    return !blocked(colliders?.COL, p.x, p.z, r);
  }

  function nearestWalkable(x, z, r) {
    if (!blocked(colliders?.COL, x, z, r)) return { x, z };
    const [ci, cj] = toCell(x, z);
    for (let rad = 1; rad <= 6; rad++) {
      for (let di = -rad; di <= rad; di++) {
        for (let dj = -rad; dj <= rad; dj++) {
          if (Math.abs(di) !== rad && Math.abs(dj) !== rad) continue;
          if (!walkable(ci + di, cj + dj, r)) continue;
          return fromCell(ci + di, cj + dj);
        }
      }
    }
    return { x, z };
  }

  function astar(sx, sz, gx, gz, rad) {
    const r = rad || 0.38;
    const start = nearestWalkable(sx, sz, r);
    const goal = nearestWalkable(gx, gz, r);
    const [si, sj] = toCell(start.x, start.z);
    const [gi, gj] = toCell(goal.x, goal.z);
    if (si === gi && sj === gj) return [{ x: goal.x, z: goal.z }];
    const startK = cellKey(si, sj);
    const open = [[Math.hypot(si - gi, sj - gj), si, sj]];
    const came = new Map();
    const gScore = new Map([[startK, 0]]);
    let n = 0;
    let bestI = si;
    let bestJ = sj;
    let bestH = Math.hypot(si - gi, sj - gj);
    const nbr = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
    while (open.length && n++ < PATH_MAX) {
      let best = 0;
      for (let k = 1; k < open.length; k++) if (open[k][0] < open[best][0]) best = k;
      const cur = open[best];
      open[best] = open[open.length - 1];
      open.pop();
      const i = cur[1];
      const j = cur[2];
      if (i === gi && j === gj) {
        const path = [];
        let ci = i;
        let cj = j;
        while (true) {
          path.push(fromCell(ci, cj));
          const prev = came.get(cellKey(ci, cj));
          if (!prev) break;
          ci = prev[0];
          cj = prev[1];
        }
        path.reverse();
        path.push({ x: goal.x, z: goal.z });
        return path;
      }
      const hHere = Math.hypot(i - gi, j - gj);
      if (hHere < bestH) {
        bestH = hHere;
        bestI = i;
        bestJ = j;
      }
      const g0 = gScore.get(cellKey(i, j)) || 0;
      for (let k = 0; k < nbr.length; k++) {
        const ni = i + nbr[k][0];
        const nj = j + nbr[k][1];
        if (!walkable(ni, nj, r)) continue;
        const step = nbr[k][0] && nbr[k][1] ? 1.41 : 1;
        const nk = cellKey(ni, nj);
        const tg = g0 + step;
        if (tg >= (gScore.get(nk) ?? 1e9)) continue;
        came.set(nk, [i, j]);
        gScore.set(nk, tg);
        open.push([tg + Math.hypot(ni - gi, nj - gj), ni, nj]);
      }
    }
    const path = [];
    let ci = bestI;
    let cj = bestJ;
    while (true) {
      path.push(fromCell(ci, cj));
      const prev = came.get(cellKey(ci, cj));
      if (!prev) break;
      ci = prev[0];
      cj = prev[1];
    }
    path.reverse();
    if (!path.length) path.push({ x: start.x, z: start.z });
    return path;
  }

  function nextStep(c, gx, gz, t) {
    if ((c.duty === "home" || c.duty === "stash") && losClear(c.x, c.z, gx, gz)) {
      return { x: gx, z: gz };
    }
    const r = 0.36 * (c.scale || 1);
    const ttl = c.duty === "home" || c.duty === "stash" ? PATH_TTL_HOME : PATH_TTL;
    const stale =
      !c.path ||
      t - (c.pathAt || 0) > ttl ||
      Math.hypot((c.gx || 0) - gx, (c.gz || 0) - gz) > 2.4;
    if (stale) {
      c.path = astar(c.x, c.z, gx, gz, r);
      c.pathI = 0;
      c.pathAt = t + ((c.slot || 0) % 9) * 0.04;
      c.gx = gx;
      c.gz = gz;
    }
    const path = c.path || [{ x: gx, z: gz }];
    while (c.pathI < path.length - 1) {
      const p = path[c.pathI];
      if (Math.hypot(c.x - p.x, c.z - p.z) < CELL * 0.5) c.pathI += 1;
      else break;
    }
    return path[Math.min(c.pathI, path.length - 1)] || { x: gx, z: gz };
  }

  function separate(h) {
    const live = living();
    const n = live.length;
    if (n < 2) return;
    for (let i = 0; i < n; i++) {
      const a = live[i];
      if (a.duty === "hold") continue;
      const ra = (a.scale || 1) * 0.48;
      let ox = 0;
      let oz = 0;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const b = live[j];
        const dx = a.x - b.x;
        const dz = a.z - b.z;
        const d = Math.hypot(dx, dz) || 0.001;
        const min = ra + (b.scale || 1) * 0.48;
        if (d >= min * 0.92) continue;
        const p = (min - d) / min;
        ox += (dx / d) * p;
        oz += (dz / d) * p;
      }
      if (ox === 0 && oz === 0) continue;
      const L = Math.hypot(ox, oz) || 1;
      const step = Math.min(0.035, L * h * 2.2);
      a.vx = (a.vx || 0) + (ox / L) * step * 18;
      a.vz = (a.vz || 0) + (oz / L) * step * 18;
    }
  }

  function maybeWipe() {
    if (!hunt || awaitingDrop) return;
    if (waveSpawned <= 0) return;
    if (waveSpawned < waveWanted && living().length < liveCap()) return;
    for (const c of cops) {
      if (c.wave === waveIndex && isLiving(c)) return;
    }
    waveIndex += 1;
    waveSpawned = 0;
    waveWanted = WAVE_BASE * (waveIndex + 1);
    awaitingDrop = true;
    fireDropships();
  }

  function dropUnit(c) {
    if (!c || c.duty === "down") return false;
    c.duty = "down";
    c.reach = 0;
    c.slapT = 0;
    const m = c.root;
    if (m) {
      m.userData.combatDown = true;
      m.userData.paintTarget = false;
      m.userData.flee = null;
      if (m.visible !== false) {
        m.rotation.x = 1.2;
        m.rotation.y = 0.1;
      }
    }
    try {
      const vs = c.voiceSet || c.root?.userData?.voiceSet;
      const k = c.kind;
      if (k === "t101") play?.("cop_t101_0" + (((c.slot || 0) % 3) + 1));
      else if (vs === "brotha") play?.("cop_brotha_01");
      else if (vs === "sensei") play?.("cop_sensei_01");
      else play?.("cop_tan_01");
    } catch {
      /* vo optional */
    }
    try {
      sfxRef?.copDie?.();
    } catch {
      /* sfx optional */
    }
    killCount += 1;
    if (c.kind === "cop") {
      c.eat = 0;
      c.skeleton = false;
    } else {
      c.smelt = 0;
    }
    maybeWipe();
    return true;
  }

  function startHunt(from) {
    hunt = true;
    on = true;
    delivered = false;
    level = 2;
    waveIndex = 0;
    killCount = 0;
    waveSpawned = 0;
    waveWanted = WAVE_BASE;
    awaitingDrop = false;
    pileT = 0;
    dragLock = false;
    _from.set(from?.x || 0, 0, from?.z || 0);
    scream();
    try {
      play?.("chase_01");
    } catch {
      /* vo optional */
    }
    scatter(_from);
    for (const c of cops) {
      if (c.duty === "down" || c.root?.userData?.combatDown) continue;
      if (c.duty === "stash") c.onArrive?.();
      c.duty = c.ranged ? "snipe" : "shove";
      c.onArrive = null;
      c.path = null;
    }
  }

  /**
   * Blunt entry point — everyone panics and the first patrol rolls out.
   * @param {{x:number,z:number}} from
   */
  function trigger(from) {
    if (hunt) return;
    startHunt(from || lastPlayer);
  }

  /**
   * Harm from combat. First strike: hunt + spawnWave(8). A cop/t101 victim
   * flops and drops out of shove; wiping the wave requests dropships.
   * @param {{ kind?: string, victim?: any, lethal?: boolean, point?: {x:number,y?:number,z:number} }} ev
   * @returns {number} the panic level after this event (0..2)
   */
  function onHarm(ev = {}) {
    const mesh = ev.victim?.mesh || ev.victim?.root || (ev.victim?.isObject3D ? ev.victim : null);
    const unit = unitForMesh(mesh);
    if (unit) dropUnit(unit);

    const p = ev.point || mesh?.position || lastPlayer;
    _from.set(p.x || 0, 0, p.z || 0);
    const origin = sawPlayer ? lastPlayer : { x: _from.x, z: _from.z };
    if (!hunt) startHunt(origin);
    else {
      scream();
      scatter(_from);
    }
    return level;
  }

  /**
   * Stop the chase. Living units walk to the patrol house unless they are already
   * on a stash walk. Downed stay down.
   * @param {{ clearFlee?: boolean }} [opts]
   */
  /**
   * Player is in the chair. At most `maxInside` living units hold the room;
   * T-101 extras walk to the factory, human cops to the beach. Hunt stops so
   * the factory does not keep pouring into the doorway.
   */
  function apprehend(maxInside = JACK_INSIDE) {
    hunt = false;
    awaitingDrop = false;
    delivered = true;
    level = 0;
    const cap = Math.max(1, maxInside | 0);
    const live = living().filter((c) => c.duty !== "stash");
    live.sort((a, b) => {
      const da = (a.x - JACK.x) * (a.x - JACK.x) + (a.z - JACK.z) * (a.z - JACK.z);
      const db = (b.x - JACK.x) * (b.x - JACK.x) + (b.z - JACK.z) * (b.z - JACK.z);
      return da - db;
    });
    let extra = 0;
    for (let i = 0; i < live.length; i++) {
      const c = live[i];
      c.path = null;
      c.pathI = 0;
      c.onArrive = null;
      c.vx = 0;
      c.vz = 0;
      if (i < cap) {
        c.duty = "hold";
        const ang = (i / Math.max(1, cap)) * Math.PI * 2 + 0.4;
        c.offX = Math.cos(ang) * 1.4;
        c.offZ = Math.sin(ang) * 1.4;
        c.tx = JACK.x + c.offX;
        c.tz = JACK.z + c.offZ;
        continue;
      }
      c.duty = "home";
      if (c.kind === "t101") {
        const k = extra++;
        c.tx = FACTORY_YARD.x - (k % 3) * 0.85;
        c.tz = FACTORY_YARD.z + (((k / 3) | 0) - 1) * 1.05;
      } else {
        const spot = BEACH_SPOTS[extra % BEACH_SPOTS.length];
        extra += 1;
        c.tx = spot.x + (i % 3) * 0.55;
        c.tz = spot.z + ((i % 5) - 2) * 0.4;
      }
    }
  }

  function standDown({ clearFlee = false } = {}) {
    hunt = false;
    screamed = false;
    delivered = false;
    level = 0;
    waveIndex = 0;
    waveSpawned = 0;
    waveWanted = 0;
    awaitingDrop = false;
    lastSx = 0;
    lastSz = 0;
    pileT = 0;
    dragLock = false;
    for (let i = 0; i < cops.length; i++) {
      const c = cops[i];
      if (c.duty === "stash" || c.duty === "down" || c.root?.userData?.combatDown) continue;
      c.duty = "home";
      c.tx = HOME.x + ((i % 3) - 1) * 0.65;
      c.tz = HOME.z + ((i / 3) | 0) * 0.55;
      c.reach = 0;
      c.onArrive = null;
      c.path = null;
    }
    if (clearFlee) {
      for (const m of fleeing) delete m.userData.flee;
      fleeing.length = 0;
      on = false;
      return;
    }
    for (const m of fleeing) {
      if (!m.userData.home) continue;
      m.userData.returnHome = true;
      m.userData.homePath = null;
    }
    if (!fleeing.length) on = false;
  }

  function showBolt(ax, ay, az, bx, by, bz, life = 0.12, color = 0xff3a2a) {
    const b = bolts[boltI++ % bolts.length];
    if (!b) return;
    const pos = b.g.attributes.position;
    pos.setXYZ(0, ax, ay, az);
    pos.setXYZ(1, bx, by, bz);
    pos.needsUpdate = true;
    b.line.material.color.setHex(color);
    b.line.material.opacity = 0.95;
    b.line.visible = true;
    b.until = performance.now() + life * 1000;
  }

  function losClear(ax, az, bx, bz) {
    const col = colliders?.COL;
    if (!col) return true;
    const n = 7;
    for (let i = 1; i < n; i++) {
      const u = i / n;
      const x = ax + (bx - ax) * u;
      const z = az + (bz - az) * u;
      if (blocked(col, x, z, 0.18)) return false;
    }
    return true;
  }

  function officerInLane(ax, az, bx, bz, skip) {
    for (const o of cops) {
      if (o === skip || !isLiving(o)) continue;
      if (o.kind === "t101") continue;
      const d = segDist(ax, az, bx, bz, o.x, o.z);
      if (d < COP_BEAM_R) return true;
    }
    return false;
  }

  function bounceHitsCop(ax, az, rx, rz, skip) {
    const bx = ax + rx * ZAP_RANGE;
    const bz = az + rz * ZAP_RANGE;
    for (const o of cops) {
      if (o === skip || !isLiving(o)) continue;
      if (o.kind === "t101") continue;
      if (segDist(ax, az, bx, bz, o.x, o.z) < 0.7) return o;
    }
    return null;
  }

  function trySnipe(c, playerPos) {
    if (!playerPos) return;
    const now = performance.now();
    if (now < (c.nextShot || 0)) return;
    const dx = playerPos.x - c.x;
    const dz = playerPos.z - c.z;
    const d = Math.hypot(dx, dz);
    if (d < SNIPER_MIN || d > SNIPER_MAX) return;
    if (!losClear(c.x, c.z, playerPos.x, playerPos.z)) return;
    if (officerInLane(c.x, c.z, playerPos.x, playerPos.z, c)) return;
    c.nextShot = now + 1050 + Math.random() * 1500;
    c.laserT = 1;
    const ix = dx / d;
    const iz = dz / d;
    const y0 = 1.58;
    const y1 = 1.35;
    showBolt(c.x, y0, c.z, playerPos.x, y1, playerPos.z, 0.11, 0xff2a22);
    try {
      sfxRef?.copZap?.();
    } catch {
      /* */
    }
    const kick = ZAP_SHOVE * (c.scale || 1);
    zapSx += ix * kick;
    zapSz += iz * kick;
    let nx = -ix;
    let nz = -iz;
    const tilt = (Math.random() - 0.5) * 0.42;
    const cs = Math.cos(tilt);
    const sn = Math.sin(tilt);
    const n2x = nx * cs - nz * sn;
    const n2z = nx * sn + nz * cs;
    const nL = Math.hypot(n2x, n2z) || 1;
    nx = n2x / nL;
    nz = n2z / nL;
    const r = reflectXZ(ix, iz, nx, nz);
    const rL = Math.hypot(r.x, r.z) || 1;
    r.x /= rL;
    r.z /= rL;
    const hx = playerPos.x + nx * 0.34;
    const hz = playerPos.z + nz * 0.34;
    const ex = hx + r.x * ZAP_RANGE;
    const ez = hz + r.z * ZAP_RANGE;
    showBolt(hx, y1, hz, ex, y1 + 0.2, ez, 0.14, 0xffd36a);
    try {
      sfxRef?.copPing?.();
    } catch {
      /* */
    }
    const hit = bounceHitsCop(hx, hz, r.x, r.z, c);
    if (hit) dropUnit(hit);
  }

  function driveCop(c, playerPos, h) {
    if (c.duty === "down" || c.root?.userData?.combatDown) {
      c.duty = "down";
      return;
    }
    const duty = c.duty || (hunt ? "shove" : "home");
    let tx = c.x;
    let tz = c.z;
    let want = 0;
    let faceX = 0;
    let faceZ = 1;
    let reachTo = 0;

    if (duty === "stash" || duty === "home" || duty === "hold") {
      tx = Number.isFinite(c.tx) ? c.tx : HOME.x;
      tz = Number.isFinite(c.tz) ? c.tz : HOME.z;
      const dx = tx - c.x;
      const dz = tz - c.z;
      const d = Math.hypot(dx, dz) || 1;
      want = d > (duty === "hold" ? 0.16 : 0.4) ? (duty === "stash" ? COP_WALK * 1.45 : COP_WALK) : 0;
      faceX = dx;
      faceZ = dz;
      if (duty === "hold" && playerPos && d < 0.85) {
        faceX = playerPos.x - c.x;
        faceZ = playerPos.z - c.z;
      }
      if (d < 0.45) {
        const fn = c.onArrive;
        if (fn) {
          c.onArrive = null;
          fn();
        }
      }
    } else if (duty === "escort" && playerPos) {
      tx = playerPos.x + (c.offX || 0);
      tz = playerPos.z + (c.offZ || 0);
      const dx = tx - c.x;
      const dz = tz - c.z;
      const d = Math.hypot(dx, dz) || 1;
      want = d > 0.28 ? c.speed : 0;
      faceX = playerPos.x - c.x;
      faceZ = playerPos.z - c.z;
      reachTo = d < 1.4 ? 1 : 0;
    } else if ((duty === "shove" || duty === "chase") && hunt && playerPos) {
      const pd = pathDir(playerPos.x, playerPos.z);
      const fan = fanDir(pd, c.slot || 0);
      tx = playerPos.x - fan.x * 1.12;
      tz = playerPos.z - fan.z * 1.12;
      const dAim = Math.hypot(tx - c.x, tz - c.z);
      want = dAim > 0.22 ? c.speed : 0;
      faceX = playerPos.x - c.x;
      faceZ = playerPos.z - c.z;
      const dPlayer = Math.hypot(c.x - playerPos.x, c.z - playerPos.z);
      reachTo = dPlayer < 1.7 ? 1 : 0;
      if (dPlayer > HOLD_R + 1.4) want = c.speed;
    } else if (duty === "snipe" && hunt && playerPos) {
      const dxp = playerPos.x - c.x;
      const dzp = playerPos.z - c.z;
      const dPlayer = Math.hypot(dxp, dzp) || 1;
      const ux = dxp / dPlayer;
      const uz = dzp / dPlayer;
      let hold = SNIPER_HOLD;
      if (dPlayer < SNIPER_MIN + 0.4) hold = SNIPER_MIN + 0.8;
      if (dPlayer > SNIPER_MAX - 0.6) hold = SNIPER_MAX - 1.2;
      tx = playerPos.x - ux * hold;
      tz = playerPos.z - uz * hold;
      const dAim = Math.hypot(tx - c.x, tz - c.z);
      want = dAim > 0.35 ? COP_WALK * 1.3 : 0;
      faceX = dxp;
      faceZ = dzp;
      reachTo = 0;
      c.laserT = Math.max(0, (c.laserT || 0) - h * 2.4);
      trySnipe(c, playerPos);
    }

    const stepTo = nextStep(c, tx, tz, performance.now() / 1000);
    const dx = stepTo.x - c.x;
    const dz = stepTo.z - c.z;
    const d = Math.hypot(dx, dz) || 1;
    const spd = want > 0 && d > 0.14 ? Math.min(want, d * 3.2) : 0;
    c.vx = (c.vx || 0) * 0.8 + (dx / d) * spd * 0.2;
    c.vz = (c.vz || 0) * 0.8 + (dz / d) * spd * 0.2;
    const nx = c.x + c.vx * h;
    const nz = c.z + c.vz * h;
    const rad = 0.36 * (c.scale || 1);
    if (!blocked(colliders?.COL, nx, c.z, rad)) c.x = nx;
    else c.vx *= 0.15;
    if (!blocked(colliders?.COL, c.x, nz, rad)) c.z = nz;
    else c.vz *= 0.15;
    if (Math.abs(c.vx) < 0.04 && Math.abs(c.vz) < 0.04 && d > 0.8) {
      c.path = null;
      c.pathAt = 0;
    }
    c.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, c.x));
    c.z = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, c.z));
    c.reach += (reachTo - c.reach) * Math.min(1, h * 4);
    const gait = Math.hypot(c.vx, c.vz);
    c.phase += h * (1.6 + gait * 1.05);
    c.root.position.set(c.x, 0, c.z);
    if (Math.hypot(faceX, faceZ) > 0.08) {
      const tyaw = Math.atan2(faceX, faceZ);
      let dyaw = tyaw - (c.yaw || 0);
      while (dyaw > Math.PI) dyaw -= Math.PI * 2;
      while (dyaw < -Math.PI) dyaw += Math.PI * 2;
      c.yaw = (c.yaw || 0) + dyaw * Math.min(1, h * 7);
      c.root.rotation.y = c.yaw;
    }
    poseUnit(c, gait);
  }

  function tick(dt, playerPos) {
    if (!(dt > 0)) return;
    rememberPlayer(playerPos);
    const h = Math.min(dt, 0.05);
    const anyDown = cops.some((c) => c.duty === "down");
    if (!on && cops.length === 0) return;

    pourAcc += h;
    const t101Live = living().filter((c) => c.kind === "t101").length;
    const wantPour = hunt ? t101Live < 40 : t101Live < 6;
    if (pourAcc > 7.4 && living().length < LIVE_CAP && wantPour) {
      pourAcc = 0;
      const t = Math.min(1, killCount / 40);
      const rec = addUnit("t101", FACTORY_DOOR.x - 0.95, FACTORY_DOOR.z + (Math.random() - 0.5) * 1.1, waveIndex, {
        scale: 1.2 + 0.8 * t,
        elite: true,
        ranged: Math.random() < 0.4,
      });
      if (rec) rec.duty = hunt ? "shove" : "home";
    }

    for (const c of cops) {
      if (c.duty !== "down" || c.kind !== "cop" || c.skeleton) continue;
      c.eat = (c.eat || 0) + h * 0.045;
      if (c.eat >= 1) {
        c.skeleton = true;
        if (c.root) toSkeleton(c.root);
      }
    }

    const corpses = cops.filter((c) => c.duty === "down" && c.kind === "cop" && !c.skeleton);
    for (let i = 0; i < scavGulls.length; i++) {
      const g = scavGulls[i];
      const prey = corpses[i % Math.max(1, corpses.length)];
      if (prey && prey.root) {
        const tx = prey.x;
        const tz = prey.z;
        const dx = tx - g.mesh.position.x;
        const dz = tz - g.mesh.position.z;
        const d = Math.hypot(dx, dz) || 1;
        if (d > 0.5) {
          g.mesh.position.x += (dx / d) * 4.2 * h;
          g.mesh.position.z += (dz / d) * 4.2 * h;
          g.mesh.position.y = 0.4 + Math.abs(Math.sin(performance.now() * 0.008 + i)) * 0.35;
          g.mesh.rotation.y = Math.atan2(dx, dz);
        } else {
          g.mesh.position.y = 0.35 + Math.abs(Math.sin(performance.now() * 0.02)) * 0.12;
        }
      } else {
        g.mesh.position.y = 2.4 + Math.sin(performance.now() * 0.001 + i) * 0.4;
      }
    }

    if (smelter) {
      const hulks = cops.filter((c) => c.duty === "down" && c.kind === "t101" && !c.smelted);
      if (smelter.duty === "idle" && hulks.length) {
        smelter.target = hulks[0];
        smelter.duty = "go";
      }
      const dest =
        smelter.duty === "dock"
          ? FACTORY_DOCK
          : smelter.target
            ? { x: smelter.target.x, z: smelter.target.z }
            : FACTORY_DOCK;
      const dx = dest.x - smelter.x;
      const dz = dest.z - smelter.z;
      const d = Math.hypot(dx, dz) || 1;
      if (d > 0.6 && smelter.duty !== "melt") {
        smelter.x += (dx / d) * 4.8 * h;
        smelter.z += (dz / d) * 4.8 * h;
      } else if (smelter.duty === "go" && smelter.target) {
        smelter.duty = "melt";
        smelter.hold = 2.4;
        smelter.melt.visible = true;
      } else if (smelter.duty === "melt") {
        smelter.hold -= h;
        const t = smelter.target;
        if (t?.root) {
          t.root.scale.multiplyScalar(0.985);
          t.root.traverse((o) => {
            if (o.material?.emissive) o.material.emissive.setHex(0xff3300);
          });
        }
        if (smelter.hold <= 0) {
          if (t?.root) scene.remove(t.root);
          t.smelted = true;
          t.root = null;
          smelter.duty = "dock";
          smelter.target = null;
          smelter.melt.visible = false;
        }
      } else if (smelter.duty === "dock" && d < 0.7) {
        smelter.duty = "idle";
      }
      smelter.g.position.set(smelter.x, 0, smelter.z);
      smelter.g.rotation.y = Math.atan2(dx, dz);
    }

    if (on) {
      for (let fi = fleeing.length - 1; fi >= 0; fi--) {
        const m = fleeing[fi];
        const f = m.userData.flee;
        const home = m.userData.home;
        const body = m.userData.fleeRoot || m;
        const goHome = !hunt && home && (m.userData.returnHome || m.name === "piano-ken");
        if (goHome) {
          let hp = m.userData.homePath;
          if (!hp) {
            hp = { x: body.position.x, z: body.position.z, path: null, pathI: 0, pathAt: 0, gx: 0, gz: 0, slot: fi };
            m.userData.homePath = hp;
          }
          hp.x = body.position.x;
          hp.z = body.position.z;
          const stepTo = nextStep(hp, home.x, home.z, performance.now() / 1000);
          const hx = stepTo.x - body.position.x;
          const hz = stepTo.z - body.position.z;
          const hd = Math.hypot(hx, hz);
          const homeD = Math.hypot(home.x - body.position.x, home.z - body.position.z);
          if (homeD < 0.45) {
            body.position.set(home.x, home.y || 0, home.z);
            body.rotation.y = home.yaw || 0;
            m.userData.flee = null;
            m.userData.returnHome = false;
            m.userData.homePath = null;
            fleeing.splice(fi, 1);
            poseCivilian(m, 0, 0);
            continue;
          }
          if (hd > 1e-4) {
            const sp = 2.45;
            body.position.x += (hx / hd) * sp * h;
            body.position.z += (hz / hd) * sp * h;
            body.rotation.y = Math.atan2(hx, hz);
          }
          m.userData.fleePhase += h * 5;
          body.position.y = (home.y || 0) + Math.abs(Math.sin(m.userData.fleePhase)) * 0.04;
          poseCivilian(m, m.userData.fleePhase, 1);
          continue;
        }
        if (!f) continue;
        const gone = Math.hypot(m.position.x - _from.x, m.position.z - _from.z);
        const slow = gone > FLEE_MAX ? 0 : 1;
        if (slow) {
          body.position.x += f.x * f.spd * h;
          body.position.z += f.z * f.spd * h;
          body.position.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, body.position.x));
          body.position.z = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, body.position.z));
          body.rotation.y = Math.atan2(f.x, f.z);
          m.userData.fleePhase += h * (5.2 + f.spd * 0.9);
          body.position.y = (m.userData.home?.y || 0) + Math.abs(Math.sin(m.userData.fleePhase)) * 0.055;
        } else {
          m.userData.fleePhase += h * 1.4;
          body.position.y = m.userData.home?.y || 0;
        }
        poseCivilian(m, m.userData.fleePhase, slow ? 1 : 0.12);
      }
      if (!hunt && fleeing.length === 0) on = false;
    }

    for (const c of cops) driveCop(c, playerPos, h);
    separate(h);
    const now = performance.now();
    for (const b of bolts) {
      if (b.line.visible && now > b.until) {
        b.line.material.opacity *= 0.6;
        if (b.line.material.opacity < 0.08) b.line.visible = false;
      }
    }
  }

  function fireDelivered() {
    if (delivered) return;
    delivered = true;
    try {
      onDelivered?.();
    } catch {
      /* optional */
    }
  }

  /**
   * Extra velocity toward JACK from each living unit within 2.4 m.
   * WASD vel from fixedUpdate stays; this adds on top, then applies the extra
   * displacement this tick. Call after fixedUpdate.
   * @param {{ pos: THREE.Vector3, vel: THREE.Vector3, radius?: number }} player
   * @param {number} dt
   * @returns {number} living shoves this tick
   */
  function shove(player, dt) {
    if (player?.vel) {
      player.vel.x -= lastSx;
      player.vel.z -= lastSz;
    }
    lastSx = 0;
    lastSz = 0;
    if (!hunt || !player?.pos || delivered || !(dt > 0)) return 0;
    rememberPlayer(player.pos);
    if (zapSx || zapSz) {
      const h0 = Math.min(dt, 0.05);
      player.vel.x += zapSx;
      player.vel.z += zapSz;
      player.pos.x += zapSx * h0;
      player.pos.z += zapSz * h0;
      zapSx *= 0.35;
      zapSz *= 0.35;
      if (Math.hypot(zapSx, zapSz) < 0.15) {
        zapSx = 0;
        zapSz = 0;
      }
    }
    const h = Math.min(dt, 0.05);
    const px = player.pos.x;
    const pz = player.pos.z;
    let n = 0;
    for (const c of cops) {
      if (!isLiving(c)) continue;
      if (Math.hypot(c.x - px, c.z - pz) <= SHOVE_R) n += 1;
    }
    if (n <= 0) {
      pileT = 0;
      return 0;
    }

    if (n >= 12) pileT += h;
    else if (!dragLock) pileT = Math.max(0, pileT - h * 0.6);
    if (pileT >= 30) dragLock = true;
    if (dragLock) {
      player.vel.x = 0;
      player.vel.z = 0;
      const pd0 = pathDir(px, pz);
      let nx0 = player.pos.x + pd0.x * 2.6 * h;
      let nz0 = player.pos.z + pd0.z * 2.6 * h;
      const col0 = colliders?.COL;
      const r0 = player.radius || 0.34;
      if (col0 && blocked(col0, nx0, player.pos.z, r0)) nx0 = player.pos.x + (pd0.x >= 0 ? 1 : -1) * 2.4 * h;
      if (col0 && blocked(col0, nx0, nz0, r0)) nz0 = player.pos.z + (pd0.z >= 0 ? 1 : -1) * 2.4 * h;
      if (col0 && blocked(col0, nx0, nz0, r0)) {
        nx0 = player.pos.x + pd0.z * 2.4 * h;
        nz0 = player.pos.z - pd0.x * 2.4 * h;
      }
      player.pos.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, nx0));
      player.pos.z = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, nz0));
      const escort = cops.find((c) => isLiving(c) && c.kind === "cop") || cops.find((c) => isLiving(c));
      if (escort) {
        escort.duty = "escort";
        escort.offX = -0.4;
        escort.offZ = -0.5;
      }
      if (Math.hypot(player.pos.x - JACK.x, player.pos.z - JACK.z) <= JACK_R) {
        dragLock = false;
        pileT = 0;
        fireDelivered();
      }
      return n;
    }

    const distJack = Math.hypot(px - JACK.x, pz - JACK.z);
    if (distJack <= JACK_R && n >= DELIVER_N) {
      fireDelivered();
      return n;
    }

    const pd = pathDir(px, pz);
    let sx = 0;
    let sz = 0;
    let pulse = 0;
    for (const c of cops) {
      if (!isLiving(c)) continue;
      const d = Math.hypot(c.x - px, c.z - pz);
      if (d > SHOVE_R) continue;
      const fan = fanDir(pd, c.slot || 0);
      let k = SHOVE_PER * (c.scale || 1);
      if (d <= SHOVE_PULSE_R * (c.scale || 1)) {
        k += SHOVE_PULSE * (c.scale || 1);
        pulse += 1;
      }
      sx += fan.x * k;
      sz += fan.z * k;
    }
    const mag = Math.hypot(sx, sz);
    if (mag > SHOVE_MAX) {
      sx *= SHOVE_MAX / mag;
      sz *= SHOVE_MAX / mag;
    }
    lastSx = sx;
    lastSz = sz;
    player.vel.x += sx;
    player.vel.z += sz;

    const r = player.radius || 0.34;
    const col = colliders?.COL;
    let nx = player.pos.x + sx * h;
    let nz = player.pos.z + sz * h;
    if (col) {
      const hitX = blocked(col, nx, player.pos.z, r);
      const hitZ = blocked(col, player.pos.x, nz, r);
      if (hitX) {
        nx = player.pos.x;
        player.vel.x -= sx;
        lastSx = 0;
        const slide = pd.z >= 0 ? 1 : -1;
        const tryZ = player.pos.z + slide * Math.abs(sz) * h * 1.4;
        if (!blocked(col, nx, tryZ, r)) nz = tryZ;
      }
      if (blocked(col, nx, nz, r)) {
        nz = player.pos.z;
        player.vel.z -= sz;
        lastSz = 0;
        const slide = pd.x >= 0 ? 1 : -1;
        const tryX = player.pos.x + slide * Math.abs(sx) * h * 1.4;
        if (!blocked(col, tryX, nz, r)) nx = tryX;
      }
    }
    if (pulse > 0 && sfxRef?.copShove) {
      const tnow = performance.now();
      if (tnow - (shoveFoleyAt || 0) > 160 + Math.random() * 220) {
        shoveFoleyAt = tnow;
        try {
          sfxRef.copShove();
        } catch {
          /* */
        }
      }
    }
    player.pos.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, nx));
    player.pos.z = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, nz));

    const now = Math.hypot(player.pos.x - JACK.x, player.pos.z - JACK.z);
    if (now <= JACK_R && n >= DELIVER_N) fireDelivered();
    return n;
  }

  /**
   * Remove every cop from the scene and stand the sim down. Civilians keep the
   * pose they died on. The patrol house stays. Safe to call twice.
   */
  function dispose() {
    for (const c of cops) scene?.remove(c.root);
    cops.length = 0;
    for (const m of fleeing) delete m.userData.flee;
    fleeing.length = 0;
    on = false;
    hunt = false;
    level = 0;
    screamed = false;
    delivered = false;
    waveIndex = 0;
    waveSpawned = 0;
    waveWanted = 0;
    awaitingDrop = false;
    lastSx = 0;
    lastSz = 0;
  }

  if (house?.robots) {
    for (const bot of house.robots) {
      if (!bot || cops.some((c) => c.root === bot)) continue;
      bot.updateWorldMatrix(true, false);
      const e = bot.matrixWorld.elements;
      const wx = e[12];
      const wz = e[14];
      const wyaw = Math.atan2(e[8], e[10]);
      house.group.remove(bot);
      scene.add(bot);
      bot.position.set(wx, 0, wz);
      bot.rotation.y = wyaw;
      addHitHull(bot);
      const rec = {
        root: bot,
        x: wx,
        z: wz,
        phase: Math.random() * Math.PI * 2,
        speed: COP_SPEED * 0.92,
        reach: 0,
        slapT: 0,
        voiceSet: bot.userData.voiceSet || "default",
        duty: "home",
        tx: HOME.x,
        tz: HOME.z,
        offX: 0,
        offZ: 0,
        onArrive: null,
        kind: "t101",
        wave: 0,
        slot: slotSeq++,
        scale: 0.92,
        ranged: Math.random() < SNIPER_FRAC,
        laserT: 0,
        nextShot: 0,
        elite: false,
        vx: 0,
        vz: 0,
        yaw: wyaw,
        path: null,
        pathI: 0,
        pathAt: 0,
      };
      cops.push(rec);
      try {
        onSpawn?.(bot, "t101");
      } catch {
        /* enroll optional */
      }
    }
  }
  addUnit("cop", HOME.x + 0.85, HOME.z + 0.55, 0);
  addUnit("cop", DOOR.x + 1.35, DOOR.z + 1.7, 0);

  const fn = (v) => (typeof v === "function" ? v : null);

  return {
    trigger,
    onHarm,
    tick,
    shove,
    spawnWave,
    spawnUnit,
    requestWave,
    living,
    standDown,
    apprehend,
    dispose,
    cops,
    house,
    get wave() {
      return waveIndex;
    },
    get onDelivered() {
      return onDelivered;
    },
    set onDelivered(v) {
      onDelivered = fn(v);
    },
    get onNeedDropships() {
      return onNeedDropships;
    },
    set onNeedDropships(v) {
      onNeedDropships = fn(v);
    },
    get onWipe() {
      return onWipe;
    },
    set onWipe(v) {
      onWipe = fn(v);
    },
    get onSpawn() {
      return onSpawn;
    },
    set onSpawn(v) {
      onSpawn = fn(v);
    },
    get active() {
      return on || hunt;
    },
    get level() {
      return level;
    },
    get copCount() {
      return cops.length;
    },
  };
}
