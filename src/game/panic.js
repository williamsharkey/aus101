/**
 * Public reaction to violence: civilians scream and sprint away, beach cops
 * converge on the incident.
 *
 * Driven by `combat`'s harm callback, not by a keypress — `onHarm()` escalates
 * (witness panic → cop response) and `trigger()` stays as the blunt entry point.
 *
 * Cops are articulated bipeds with a real gait (shared GEO/MAT tables, so a
 * squad costs one material set, not one per body).
 */
import * as THREE from "three";
import { spawnPatrolHouse, PATROL_HOME } from "../world/patrolHouse.js";

const FLEE = 6.2;
const COP_SPEED = 7.4;
const COP_WALK = 2.1;
const COP_MAX = 6;
const COP_RING = 17;
const HOLD_R = 2.6; // cops close to here, then menace instead of overlapping you
const FLEE_MAX = 46; // civilians stop and cower once this far from the incident

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
  if (look.scale !== 1) g.scale.setScalar(look.scale);
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

/**
 * @param {{
 *   scene: THREE.Scene,
 *   cast?: any[],
 *   play?: (id: string) => unknown,
 *   colliders?: { addCollider?: Function, add?: Function, COL?: any[] },
 * }} opts
 */
export function createPanic({ scene, cast = [], play, colliders } = {}) {
  let on = false;
  let hunt = false;
  let level = 0; // 0 calm, 1 witnessed, 2 cops responding
  const _d = new THREE.Vector3();
  const _from = new THREE.Vector3();
  /** @type {{ root: THREE.Group, x: number, z: number, phase: number, speed: number, reach: number, duty: string, tx: number, tz: number, offX: number, offZ: number, onArrive?: Function }[]} */
  const cops = [];
  const fleeing = [];
  let screamed = false;
  const house = scene ? spawnPatrolHouse(scene, colliders) : null;
  const HOME = house?.home || PATROL_HOME;

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
      if (!m || npc.kind === "gull" || !m.position) continue;
      if (m.userData.combatDown || m.visible === false) continue;
      const dist = Math.hypot(m.position.x - from.x, m.position.z - from.z);
      if (dist > 34) continue;
      away(from, m.position, _d);
      m.userData.flee = { x: _d.x, z: _d.z, spd: FLEE * (0.85 + Math.random() * 0.35) };
      m.userData.fleePhase = Math.random() * Math.PI * 2;
      if (!fleeing.includes(m)) fleeing.push(m);
    }
  }

  function addCops(n, from) {
    const room = Math.min(n, COP_MAX - cops.length);
    for (let i = 0; i < room; i++) {
      const lookName = pickCopLook(cops);
      const root = makeCop(lookName);
      const a = ((cops.length + i) / COP_MAX) * Math.PI * 2 + 0.4 + Math.random() * 0.3;
      const rad = COP_RING + Math.random() * 5;
      const x = from.x + Math.cos(a) * rad;
      const z = from.z + Math.sin(a) * rad;
      root.position.set(x, 0, z);
      scene.add(root);
      cops.push({
        root,
        x,
        z,
        phase: Math.random() * Math.PI * 2,
        speed: COP_SPEED * (0.88 + Math.random() * 0.2),
        reach: 0,
        slapT: 0,
        voiceSet: root.userData.voiceSet,
        duty: hunt ? "chase" : "home",
        tx: HOME.x,
        tz: HOME.z,
        offX: 0,
        offZ: 0,
        onArrive: null,
      });
    }
  }

  /**
   * Blunt entry point — everyone panics and the squad rolls out at once.
   * @param {{x:number,z:number}} from
   */
  function trigger(from) {
    if (on && hunt) return;
    on = true;
    hunt = true;
    level = 2;
    for (const c of cops) {
      if (c.duty === "stash") {
        c.onArrive?.();
      }
      c.duty = "chase";
      c.onArrive = null;
    }
    _from.set(from?.x || 0, 0, from?.z || 0);
    scream();
    try {
      play?.("chase_01");
    } catch {
      /* vo optional */
    }
    scatter(_from);
    addCops(4, _from);
  }

  /**
   * Graduated response to a real hit reported by `combat`.
   * First strike: bystanders scatter and two cops start running in.
   * Lethal / repeated: the rest of the squad and the chase VO.
   * @param {{ kind?: string, victim?: any, lethal?: boolean, point?: {x:number,y?:number,z:number} }} ev
   * @returns {number} the panic level after this event (0..2)
   */
  function onHarm(ev = {}) {

    const p = ev.point || ev.victim?.mesh?.position || _from;
    _from.set(p.x || 0, 0, p.z || 0);
    const first = level < 1;
    on = true;
    hunt = true;
    for (const c of cops) {
      if (c.duty === "stash") c.onArrive?.();
      c.duty = "chase";
      c.onArrive = null;
    }
    scream();
    scatter(_from);
    if (first) {
      level = 1;
      addCops(2, _from);
    }
    // A killing blow, or a second strike after the first, brings the squad.
    if (ev.lethal || !first) {
      if (level < 2) {
        level = 2;
        try {
          play?.("chase_01");
        } catch {
          /* vo optional */
        }
      }
      addCops(ev.lethal ? 4 : 2, _from);
    }
    return level;
  }

  /**
   * Stop the chase. Cops walk to the patrol house unless they are already on a
   * stash walk. `tick` keeps driving those duties — it does not sprint at the player.
   * @param {{ clearFlee?: boolean }} [opts]
   */
  function standDown({ clearFlee = true } = {}) {
    hunt = false;
    screamed = false;
    level = 0;
    for (let i = 0; i < cops.length; i++) {
      const c = cops[i];
      if (c.duty === "stash") continue;
      c.duty = "home";
      c.tx = HOME.x + ((i % 3) - 1) * 0.65;
      c.tz = HOME.z + ((i / 3) | 0) * 0.55;
      c.reach = 0;
      c.onArrive = null;
    }
    if (clearFlee) {
      for (const m of fleeing) delete m.userData.flee;
      fleeing.length = 0;
      on = false;
    }
  }

  function driveCop(c, playerPos, h) {
    const duty = c.duty || (hunt ? "chase" : "home");
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
    } else if (duty === "chase" && hunt && playerPos) {
      const dx = playerPos.x - c.x;
      const dz = playerPos.z - c.z;
      const d = Math.hypot(dx, dz) || 1;
      want = d > HOLD_R + 1.4 ? c.speed : d > HOLD_R ? COP_WALK : 0;
      faceX = dx;
      faceZ = dz;
      reachTo = d < HOLD_R + 0.8 ? 1 : 0;
      if (want > 0) {
        tx = playerPos.x;
        tz = playerPos.z;
      }
    }

    const dx = tx - c.x;
    const dz = tz - c.z;
    const d = Math.hypot(dx, dz) || 1;
    if (want > 0 && d > 0.08) {
      const step = Math.min(d, want * h);
      c.x += (dx / d) * step;
      c.z += (dz / d) * step;
    }
    c.reach += (reachTo - c.reach) * Math.min(1, h * 4);
    c.phase += h * (2.2 + want * 1.15);
    c.root.position.set(c.x, 0, c.z);
    if (Math.hypot(faceX, faceZ) > 0.05) c.root.rotation.y = Math.atan2(faceX, faceZ);
    poseCop(c.root, { walkPhase: c.phase, speed: want, reach: c.reach, slapT: c.slapT || 0 });
  }

  function tick(dt, playerPos) {
    if (!(dt > 0)) return;
    if (!on && cops.length === 0) return;
    const h = Math.min(dt, 0.05);

    if (on) {
      for (const m of fleeing) {
        const f = m.userData.flee;
        if (!f) continue;
        const gone = Math.hypot(m.position.x - _from.x, m.position.z - _from.z);
        const slow = gone > FLEE_MAX ? 0 : 1;
        if (slow) {
          m.position.x += f.x * f.spd * h;
          m.position.z += f.z * f.spd * h;
          m.rotation.y = Math.atan2(f.x, f.z); // npc bodies face +Z — face the way they bolt
          m.userData.fleePhase += h * (5.2 + f.spd * 0.9);
          m.position.y = Math.abs(Math.sin(m.userData.fleePhase)) * 0.055;
        } else {
          m.userData.fleePhase += h * 1.4;
          m.position.y = 0;
        }
        poseCivilian(m, m.userData.fleePhase, slow ? 1 : 0.12);
      }
    }

    for (const c of cops) driveCop(c, playerPos, h);
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
  }

  return {
    trigger,
    onHarm,
    tick,
    standDown,
    dispose,
    cops,
    house,
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
