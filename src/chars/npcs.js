/**
 * CHAR0 beach cast — Ken, Babe, SIGMA_07, Goth, extras, child, gull.
 * Hierarchical full bodies, origin at the soles. Shared unit geos (iPhone).
 * Adults ~1.7 m, kid ~1.15 m.
 */
import * as THREE from "three";
import { GC as WORLD } from "../world/goldCoast.js";

const TAU = Math.PI * 2;

const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  sphereHi: new THREE.SphereGeometry(1, 12, 10),
  // Heads are read at arm's length in dialogue shots — the extra rings pay for themselves.
  skull: new THREE.SphereGeometry(1, 16, 12),
  // Hair shells: open-bottomed sphere segments so they sit ON the skull instead of
  // hovering over it. `hairCrown` caps the whole crown down to the hairline;
  // `hairBack` is the rear half only, carried down over the occiput to the nape.
  hairCrown: new THREE.SphereGeometry(1, 16, 10, 0, TAU, 0, 1.44),
  hairBack: new THREE.SphereGeometry(1, 12, 8, Math.PI, Math.PI, 0.42, 1.6),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl12: new THREE.CylinderGeometry(1, 1, 1, 12),
  // Limb segment: proximal end (+Y) fat, distal end lean. Reused for arms and legs.
  limb: new THREE.CylinderGeometry(1, 0.78, 1, 10),
  cone: new THREE.ConeGeometry(1, 1, 6),
  cone4: new THREE.ConeGeometry(1, 1, 4),
  cone10: new THREE.ConeGeometry(1, 1, 10),
  torus: new THREE.TorusGeometry(1, 0.12, 6, 16),
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

const MAT = {
  eye: std(0x1a1410, { roughness: 0.45 }),
  tooth: std(0xf4f0e6, { roughness: 0.4 }),
  cord: std(0x1a1a1a, { roughness: 0.55 }),
  beak: std(0xf0c040, { roughness: 0.5 }),
  beakSpot: std(0xd23c22, { roughness: 0.5 }),
  gullWhite: std(0xf4f4f0, { roughness: 0.7 }),
  gullGrey: std(0x9aa0a6, { roughness: 0.75 }),
  gullTip: std(0x2c2f34, { roughness: 0.7 }),
  gullLeg: std(0xe07a32, { roughness: 0.6 }),
};

function part(geo, mat, sx, sy = sx, sz = sx) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.scale.set(sx, sy, sz);
  return m;
}

/**
 * Skull-hugging hair. Crown shell + rear shell, both concentric with the skull
 * and a hair's breadth larger, so the top of the head is never bare. `tilt`
 * rakes the hairline: negative lifts the brow and drops the nape.
 */
function addHair(head, hairM, headR, { crown = 1.06, back = 1.09, tilt = -0.1, nape = 1 } = {}) {
  const cap = part(GEO.hairCrown, hairM, headR * 0.99 * crown, headR * 1.05 * crown, headR * 1.02 * crown);
  cap.rotation.x = tilt;
  head.add(cap);
  const rear = part(GEO.hairBack, hairM, headR * 1.0 * back, headR * 1.06 * back * nape, headR * 1.03 * back);
  rear.rotation.x = tilt * 0.5;
  head.add(rear);
  return cap;
}

/**
 * Shared biped. `shirt` null = shirtless. `sleeves` paints upper+forearm with shirt.
 * `cover`: bikini (pelvis only), shorts (thighs), pants (full leg).
 * `footwear`: bare | shoe | boot.
 */
function buildBiped({
  height = 1.7,
  skin = 0xc68642,
  hair = 0x2a1a12,
  shirt = null,
  sleeves = false,
  bottoms = 0x2a4a6a,
  cover = "shorts",
  footwear = "bare",
  shoe = 0x2a2420,
  shoulderW = 0.38,
  chestD = 0.18,
  chestW = 0.3,
  hipW = 0.24,
  armR = 0.042,
  legR = 0.055,
}) {
  const g = new THREE.Group();
  const s = height / 1.7;
  const skinM = std(skin);
  const hairM = std(hair, { roughness: 0.85 });
  const shirtM = shirt == null ? null : std(shirt);
  const pantM = std(bottoms);
  const shoeM = std(shoe, { roughness: 0.62 });
  const torsoMat = shirtM || skinM;
  const sleeveM = shirtM && sleeves ? shirtM : skinM;

  const headR = 0.12 * s;
  const neckH = 0.12 * s;
  const footH = footwear === "boot" ? 0.11 * s : 0.058 * s;
  const headY = height - headR - 0.01 * s;
  // Acromion at ~0.82 of stature, which leaves a hand's width of neck showing.
  const shoulderY = headY - headR * 1.02 - neckH * 0.5;
  const hipY = 0.52 * height;
  const torsoH = Math.max(0.28 * s, shoulderY - hipY);
  const legLen = hipY;
  const shinH = (legLen - footH) * 0.47;
  const thighH = (legLen - footH) * 0.53;
  const upperLen = 0.28 * s;
  const foreLen = 0.26 * s;
  const aR = armR * s;
  const lR = legR * s;

  const pelvis = part(GEO.box, pantM, hipW, 0.2 * s, chestD * 0.98);
  pelvis.position.y = hipY - 0.03 * s;
  g.add(pelvis);

  const torso = part(GEO.box, torsoMat, chestW, torsoH, chestD);
  torso.position.y = hipY + torsoH * 0.5 - 0.02 * s;
  g.add(torso);

  // Two-step taper from ribcage out to the shoulder yoke — the arms hang off the
  // ends of the yoke, not off thin air beside the chest.
  const lats = part(GEO.box, torsoMat, (chestW + shoulderW) * 0.5, 0.14 * s, chestD * 0.94);
  lats.position.y = shoulderY - 0.13 * s;
  g.add(lats);

  const clav = part(GEO.box, torsoMat, shoulderW * 0.94, 0.13 * s, chestD * 0.92);
  clav.position.y = shoulderY - 0.04 * s;
  g.add(clav);

  // Neck runs from inside the clavicle up into the skull, so nothing floats.
  const neckTop = headY - headR * 0.6;
  const neckBot = shoulderY - 0.06 * s;
  const neck = part(GEO.cyl12, skinM, 0.052 * s, neckTop - neckBot, 0.05 * s);
  neck.position.y = (neckTop + neckBot) * 0.5;
  g.add(neck);
  const trap = part(GEO.sphere, torsoMat, 0.1 * s, 0.055 * s, 0.075 * s);
  trap.position.y = shoulderY + 0.005 * s;
  g.add(trap);

  const head = new THREE.Group();
  head.position.y = headY;
  const skull = part(GEO.skull, skinM, headR * 0.94, headR * 1.03, headR);
  head.add(skull);
  const jaw = part(GEO.sphere, skinM, headR * 0.7, headR * 0.5, headR * 0.78);
  jaw.position.set(0, -headR * 0.5, headR * 0.14);
  head.add(jaw);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, MAT.eye, 0.016 * s);
    eye.position.set(side * 0.038 * s, 0.012 * s, headR * 0.8);
    head.add(eye);
    const ear = part(GEO.sphere, skinM, 0.014 * s, 0.03 * s, 0.018 * s);
    ear.position.set(side * headR * 0.92, -0.004 * s, -0.01 * s);
    head.add(ear);
  }
  const nose = part(GEO.sphere, skinM, 0.016 * s, 0.022 * s, 0.022 * s);
  nose.position.set(0, -0.012 * s, headR * 0.9);
  head.add(nose);
  g.add(head);

  const hairCap = addHair(head, hairM, headR);

  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.name = side < 0 ? "armL" : "armR";
    // Pivot pulled inboard so the deltoid sits INSIDE the yoke instead of beside it.
    arm.position.set(side * (shoulderW * 0.5 - aR * 0.5), shoulderY - 0.015 * s, 0);
    arm.rotation.z = side * 0.07;

    const delt = part(GEO.sphere, sleeveM, aR * 1.5, aR * 1.85, aR * 1.45);
    delt.position.y = -aR * 0.45;
    arm.add(delt);

    const upper = part(GEO.limb, sleeveM, aR * 1.1, upperLen, aR * 1.1);
    upper.position.y = -upperLen * 0.5;
    arm.add(upper);

    const elbow = part(GEO.sphere, sleeveM, aR * 0.94);
    elbow.position.y = -upperLen;
    arm.add(elbow);

    const forearm = part(GEO.limb, sleeveM, aR * 0.94, foreLen, aR * 0.94);
    forearm.position.y = -upperLen - foreLen * 0.5;
    arm.add(forearm);

    const hand = new THREE.Group();
    hand.name = "hand";
    hand.position.y = -upperLen - foreLen;
    const palm = part(GEO.box, skinM, 0.058 * s, 0.088 * s, 0.032 * s);
    palm.position.y = -0.044 * s;
    const fingers = part(GEO.box, skinM, 0.052 * s, 0.05 * s, 0.026 * s);
    fingers.position.y = -0.105 * s;
    const thumb = part(GEO.box, skinM, 0.018 * s, 0.04 * s, 0.018 * s);
    thumb.position.set(side * 0.038 * s, -0.052 * s, 0.012 * s);
    thumb.rotation.z = side * 0.65;
    hand.add(palm, fingers, thumb);
    arm.add(hand);

    g.add(arm);
    arms.push(arm);
  }

  const thighCover = cover === "bikini" ? skinM : pantM;
  const shinCover = cover === "pants" ? pantM : skinM;
  const footCover = footwear === "bare" ? skinM : shoeM;
  const legs = [];
  const feet = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.name = side < 0 ? "legL" : "legR";
    leg.position.set(side * hipW * 0.3, hipY, 0);

    // Hip ball buried in the pelvis box; the thigh grows straight out of it.
    const hipJoint = part(GEO.sphere, thighCover, lR * 1.3, lR * 1.35, lR * 1.25);
    hipJoint.position.y = -0.035 * s;
    leg.add(hipJoint);

    const thigh = part(GEO.limb, thighCover, lR * 1.12, thighH, lR * 1.1);
    thigh.position.y = -thighH * 0.5;
    leg.add(thigh);

    const knee = part(GEO.sphere, shinCover, lR * 0.92);
    knee.position.y = -thighH;
    leg.add(knee);

    const shin = part(GEO.limb, shinCover, lR * 0.86, shinH, lR * 0.86);
    shin.position.y = -thighH - shinH * 0.5;
    leg.add(shin);

    const ankle = part(GEO.sphere, footCover, lR * 0.62);
    ankle.position.y = -thighH - shinH;
    leg.add(ankle);

    const foot = new THREE.Group();
    foot.name = "foot";
    foot.position.y = -thighH - shinH;
    // Real feet are ~0.15 of stature long — a planted biped needs the footprint.
    const soleH = footwear === "boot" ? 0.07 * s : 0.036 * s;
    const soleL = footwear === "boot" ? 0.26 * s : 0.25 * s;
    const soleW = footwear === "bare" ? 0.094 * s : 0.104 * s;
    const sole = part(GEO.box, footCover, soleW, soleH, soleL);
    sole.position.set(0, -footH + soleH * 0.5, 0.062 * s);
    foot.add(sole);
    const instep = part(GEO.sphere, footCover, soleW * 0.5, footH * 0.78, 0.085 * s);
    instep.position.set(0, -footH * 0.34, 0.028 * s);
    foot.add(instep);
    const heel = part(GEO.sphere, footCover, soleW * 0.48, footH * 0.62, 0.038 * s);
    heel.position.set(0, -footH * 0.42, -0.052 * s);
    foot.add(heel);
    if (footwear === "shoe") {
      const vamp = part(GEO.box, shoeM, soleW * 0.96, 0.05 * s, 0.13 * s);
      vamp.position.set(0, -footH + soleH + 0.02 * s, 0.075 * s);
      foot.add(vamp);
    }
    if (footwear === "boot") {
      const shaft = part(GEO.cyl, shoeM, lR * 0.9, 0.14 * s, lR * 0.9);
      shaft.position.y = 0.045 * s;
      foot.add(shaft);
    }
    leg.add(foot);

    g.add(leg);
    legs.push(leg);
    feet.push(foot);
  }

  g.userData.body = {
    head,
    skull,
    hairCap,
    headY,
    headR,
    shoulderY,
    hipY,
    thighH,
    shinH,
    footH,
    scale: s,
    skinM,
    hairM,
    chestD,
    chestW,
    armL: arms[0],
    armR: arms[1],
    legL: legs[0],
    legR: legs[1],
    footL: feet[0],
    footR: feet[1],
  };
  g.userData.skinMats = [skinM];
  g.userData.bareColor = skinM.color.clone();
  g.userData.coverage = 0;
  g.userData.paintTarget = shirt == null;
  return g;
}

/** Reparent everything below the knee onto a hinge so the shin can swing. Cached. */
function kneeHinge(leg, cutY) {
  if (leg.userData.kneeHinge) return leg.userData.kneeHinge;
  const pivot = new THREE.Group();
  pivot.name = "knee";
  pivot.position.y = cutY;
  leg.add(pivot);
  for (const c of [...leg.children]) {
    if (c === pivot || c.position.y > cutY - 1e-3) continue;
    c.position.y -= cutY;
    pivot.add(c);
  }
  leg.userData.kneeHinge = pivot;
  return pivot;
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

/**
 * Fold a planted biped onto a seat (bench, piano stool, deck chair).
 *
 * The rig stands with its origin at the soles, so sitting drops the whole group
 * until the hips land on `seatY`. Thighs swing forward to horizontal, the knee
 * hinge brings the shins back to vertical — bending backwards, the way a knee
 * actually bends — and the feet are counter-rotated flat. Idempotent: calling it
 * again just re-poses the same hinges.
 *
 * @param {THREE.Group} npc   biped from ken()/babe()/sigma07()/goth()/kid()
 * @param {number} seatY      world Y of the seat surface, metres
 * @param {object} [opts]
 * @param {number} [opts.thigh=Math.PI/2]  thigh pitch from vertical; PI/2 = level, less = knees low
 * @param {number} [opts.spread=0.06]      knees apart, radians per leg
 * @param {number} [opts.floorY=0]         soles reach for this Y; pass null to let the shins hang
 * @param {number} [opts.lift=0]           extra Y on top of the seat (cushion squash, shorts)
 * @returns {{hipY:number, kneeY:number, kneeZ:number, footY:number}} where the pose landed
 */
export function poseSit(npc, seatY, opts = {}) {
  const b = npc?.userData?.body;
  if (!b) return null;
  const { thigh = Math.PI / 2, spread = 0.06, floorY = 0, lift = 0 } = opts;
  const hipWorld = seatY + lift;
  const kneeY = hipWorld - b.thighH * Math.cos(thigh);
  // Shin angle from vertical: 0 = straight down. Negative swings the foot forward,
  // which is what a low seat does to you; it can never reach further than shinH.
  let a = 0;
  if (floorY != null) {
    const k = (kneeY - floorY - b.footH) / b.shinH;
    a = k >= 1 ? 0 : -Math.acos(clamp(k, -1, 1));
  }
  for (const [leg, side] of [
    [b.legL, -1],
    [b.legR, 1],
  ]) {
    if (!leg) continue;
    const hinge = kneeHinge(leg, -b.thighH);
    leg.rotation.set(-thigh, 0, side * spread);
    hinge.rotation.x = thigh + a;
    const foot = leg.getObjectByName("foot");
    if (foot) foot.rotation.x = -a;
  }
  npc.position.y = hipWorld - b.hipY;
  return {
    hipY: hipWorld,
    kneeY,
    kneeZ: b.thighH * Math.sin(thigh),
    footY: kneeY - b.shinH * Math.cos(a) - b.footH,
  };
}

function addSharkTooth(g, y) {
  const s = g.userData.body.scale;
  const cord = part(GEO.torus, MAT.cord, 0.058 * s);
  cord.position.y = y;
  cord.rotation.x = Math.PI / 2;
  g.add(cord);
  const tooth = part(GEO.cone4, MAT.tooth, 0.018 * s, 0.05 * s, 0.018 * s);
  tooth.position.set(0, y - 0.055 * s, 0.045 * s);
  tooth.rotation.x = 0.4;
  g.add(tooth);
}

function ken({ hair = 0xf4c431, shorts = 0x1f6f78, skin = 0xd4a06a } = {}) {
  const g = buildBiped({
    height: 1.78,
    skin,
    hair,
    shirt: null,
    sleeves: false,
    bottoms: shorts,
    cover: "shorts",
    footwear: "bare",
    shoulderW: 0.5,
    chestW: 0.36,
    chestD: 0.22,
    hipW: 0.26,
    armR: 0.05,
    legR: 0.062,
  });
  const { head, headR, shoulderY, hipY, scale: s, chestD, hairM, skinM } = g.userData.body;
  // Quiff rides on top of the crown shell rather than replacing it.
  const quiff = part(GEO.sphereHi, hairM, headR * 0.66, headR * 0.44, headR * 0.62);
  quiff.position.set(0, headR * 0.82, headR * 0.3);
  quiff.rotation.x = -0.42;
  head.add(quiff);
  const sweep = part(GEO.sphere, hairM, headR * 0.5, headR * 0.3, headR * 0.4);
  sweep.position.set(0, headR * 0.95, headR * 0.62);
  sweep.rotation.x = -0.9;
  head.add(sweep);
  addSharkTooth(g, shoulderY + 0.05 * s);

  // Pecs and abs are sunk into the chest box — only the crown of each shape shows.
  const pecM = std(skin, { roughness: 0.5, metalness: 0.06 });
  for (const side of [-1, 1]) {
    const pec = part(GEO.sphereHi, pecM, 0.098 * s, 0.062 * s, 0.055 * s);
    pec.position.set(side * 0.082 * s, shoulderY - 0.14 * s, chestD * 0.5 - 0.042 * s);
    g.add(pec);
  }
  const absM = std(skin, { roughness: 0.48, metalness: 0.08 });
  for (let row = 0; row < 3; row++) {
    for (const side of [-1, 1]) {
      const cell = part(GEO.box, absM, 0.078 * s, 0.05 * s, 0.036 * s);
      cell.position.set(side * 0.048 * s, hipY + 0.28 * s - row * 0.068 * s, chestD * 0.5 - 0.03 * s);
      g.add(cell);
    }
  }
  g.userData.skinMats = [...g.userData.skinMats, pecM, absM];
  g.userData.kind = "ken";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
  g.name = "ken";
  return g;
}

function babe({ hair = 0xc9a227, bikini = 0xe23d7a, skin = 0xe0b08a } = {}) {
  const g = buildBiped({
    height: 1.68,
    skin,
    hair,
    shirt: null,
    sleeves: false,
    bottoms: bikini,
    cover: "bikini",
    footwear: "bare",
    shoulderW: 0.36,
    chestW: 0.26,
    chestD: 0.16,
    hipW: 0.26,
    armR: 0.036,
    legR: 0.05,
  });
  const { head, headY, headR, hipY, shoulderY, scale: s, chestD, hairM } = g.userData.body;
  const bikiniM = std(bikini, { roughness: 0.62 });
  // Tresses hang off the back of the crown shell; face-framing locks in front of the ears.
  const tress = part(GEO.sphereHi, hairM, headR * 1.02, headR * 1.5, headR * 0.8);
  tress.position.set(0, headY - headR * 1.05, -headR * 0.42);
  g.add(tress);
  for (const side of [-1, 1]) {
    const lock = part(GEO.sphere, hairM, headR * 0.26, headR * 0.9, headR * 0.34);
    lock.position.set(side * headR * 0.86, headY - headR * 0.55, headR * 0.12);
    g.add(lock);
  }
  const fringe = part(GEO.sphere, hairM, headR * 0.8, headR * 0.34, headR * 0.42);
  fringe.position.set(0, headR * 0.55, headR * 0.66);
  fringe.rotation.x = -0.35;
  head.add(fringe);
  for (const side of [-1, 1]) {
    const cup = part(GEO.sphereHi, bikiniM, 0.062 * s, 0.055 * s, 0.05 * s);
    cup.position.set(side * 0.056 * s, shoulderY - 0.13 * s, chestD * 0.5 - 0.028 * s);
    g.add(cup);
  }
  const strap = part(GEO.box, bikiniM, 0.16 * s, 0.014 * s, chestD * 0.98);
  strap.position.set(0, shoulderY - 0.055 * s, 0);
  g.add(strap);
  const bottoms = part(GEO.box, bikiniM, 0.23 * s, 0.1 * s, chestD * 1.02);
  bottoms.position.set(0, hipY - 0.03 * s, 0.005 * s);
  g.add(bottoms);
  g.userData.kind = "babe";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
  g.name = "babe";
  return g;
}

function sigma07() {
  const g = buildBiped({
    height: 1.72,
    skin: 0xc4a882,
    hair: 0x1a1612,
    shirt: 0x141414,
    sleeves: true,
    bottoms: 0x4a4638,
    cover: "pants",
    footwear: "shoe",
    shoe: 0x2a241c,
    shoulderW: 0.34,
    chestW: 0.28,
    chestD: 0.17,
    hipW: 0.24,
    armR: 0.038,
    legR: 0.052,
  });
  const { shoulderY, hipY, scale: s, chestD } = g.userData.body;
  const graphic = part(GEO.box, std(0x5a1010), 0.13 * s, 0.13 * s, 0.02 * s);
  graphic.position.set(0, shoulderY - 0.2 * s, chestD * 0.5 - 0.004 * s);
  g.add(graphic);
  const pocketM = std(0x3a382c, { roughness: 0.78 });
  for (const side of [-1, 1]) {
    const pocket = part(GEO.box, pocketM, 0.08 * s, 0.09 * s, 0.045 * s);
    pocket.position.set(side * 0.1 * s, hipY - 0.16 * s, chestD * 0.5 - 0.026 * s);
    g.add(pocket);
  }
  g.userData.kind = "sigma_07";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = false;
  g.name = "SIGMA_07";
  return g;
}

function goth() {
  const g = buildBiped({
    height: 1.7,
    skin: 0xc9c4be,
    hair: 0x0d0d10,
    shirt: 0x1c1c1e,
    sleeves: true,
    bottoms: 0x161618,
    cover: "pants",
    footwear: "boot",
    shoe: 0x111113,
    shoulderW: 0.36,
    chestW: 0.3,
    chestD: 0.18,
    hipW: 0.26,
    armR: 0.04,
    legR: 0.054,
  });
  const { head, headY, headR, hipY, scale: s, hairM } = g.userData.body;
  const linen = std(0x1c1c1e, { roughness: 0.88 });
  const hang = part(GEO.sphereHi, hairM, headR * 1.06, headR * 1.85, headR * 0.86);
  hang.position.set(0, headY - headR * 1.35, -headR * 0.32);
  g.add(hang);
  for (const side of [-1, 1]) {
    const curtain = part(GEO.sphere, hairM, headR * 0.34, headR * 1.15, headR * 0.42);
    curtain.position.set(side * headR * 0.82, headY - headR * 0.75, headR * 0.18);
    g.add(curtain);
  }
  // Fringe raked over the right eye.
  const fringe = part(GEO.sphere, hairM, headR * 0.9, headR * 0.44, headR * 0.46);
  fringe.position.set(headR * 0.16, headR * 0.42, headR * 0.62);
  fringe.rotation.set(-0.3, 0, 0.24);
  head.add(fringe);
  const coat = part(GEO.box, linen, 0.4 * s, 0.72 * s, 0.22 * s);
  coat.position.set(0, hipY + 0.22 * s, -0.02 * s);
  g.add(coat);
  const cig = part(GEO.cyl, std(0xd8d0c4, { roughness: 0.5 }), 0.006 * s, 0.07 * s, 0.006 * s);
  cig.rotation.z = Math.PI / 2;
  cig.rotation.y = 0.4;
  cig.position.set(0.09 * s, headY - 0.05 * s, headR * 0.85);
  g.add(cig);
  const ember = part(GEO.sphere, std(0xc04020, { roughness: 0.4, metalness: 0.1, emissive: 0x401008 }), 0.007 * s);
  ember.position.set(0.125 * s, headY - 0.048 * s, headR * 0.9);
  g.add(ember);
  g.userData.kind = "goth";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = false;
  g.name = "goth";
  return g;
}

function kid() {
  const g = buildBiped({
    height: 1.15,
    skin: 0xf0c9a0,
    hair: 0x6b3e1f,
    shirt: 0x3db8c8,
    sleeves: true,
    bottoms: 0x2d5a8c,
    cover: "shorts",
    footwear: "shoe",
    shoe: 0xe8d24a,
    shoulderW: 0.28,
    chestW: 0.22,
    chestD: 0.14,
    hipW: 0.2,
    armR: 0.034,
    legR: 0.046,
  });
  const { head, headY, headR, scale: s, hairM } = g.userData.body;
  // Mop under the brim: a low tuft so the hat never sits on bare scalp.
  const tuft = part(GEO.sphere, hairM, headR * 0.9, headR * 0.3, headR * 0.72);
  tuft.position.y = headR * 0.5;
  head.add(tuft);
  const hat = std(0xf5e6a3, { roughness: 0.86 });
  const brim = part(GEO.cyl12, hat, 0.18 * s, 0.02 * s, 0.18 * s);
  brim.position.y = headY + headR * 0.5;
  const crown = part(GEO.cyl12, hat, 0.105 * s, 0.1 * s, 0.105 * s);
  crown.position.y = headY + headR * 0.78;
  const dome = part(GEO.sphere, hat, 0.105 * s, 0.05 * s, 0.105 * s);
  dome.position.y = headY + headR * 0.78 + 0.05 * s;
  g.add(brim, crown, dome);
  g.userData.kind = "kid";
  g.userData.ageBand = "child";
  g.userData.paintTarget = false;
  g.name = "kid";
  return g;
}

/**
 * Standing gull: egg-shaped body with a grey mantle over it, folded wings that
 * taper to crossed black primaries, and a short thick neck running into the head.
 */
function seagull() {
  const g = new THREE.Group();
  const white = MAT.gullWhite;
  const grey = MAT.gullGrey;
  const orange = MAT.gullLeg;

  // Body: breast low and forward, tail high and aft.
  const belly = part(GEO.sphereHi, white, 0.078, 0.088, 0.155);
  belly.position.set(0, 0.165, 0.01);
  belly.rotation.x = 0.16;
  g.add(belly);
  const breast = part(GEO.sphere, white, 0.068, 0.072, 0.07);
  breast.position.set(0, 0.185, 0.085);
  g.add(breast);
  // Mantle sits proud of the white body so the grey/white break reads.
  const mantle = part(GEO.sphereHi, grey, 0.072, 0.058, 0.14);
  mantle.position.set(0, 0.208, -0.01);
  mantle.rotation.x = 0.16;
  g.add(mantle);

  const rump = part(GEO.cone, white, 0.055, 0.14, 0.05);
  rump.rotation.x = -Math.PI / 2 + 0.5;
  rump.position.set(0, 0.2, -0.13);
  g.add(rump);
  const tail = part(GEO.box, white, 0.075, 0.014, 0.1);
  tail.rotation.x = 0.32;
  tail.position.set(0, 0.235, -0.215);
  g.add(tail);

  const neck = part(GEO.limb, white, 0.036, 0.085, 0.038);
  neck.position.set(0, 0.245, 0.09);
  neck.rotation.x = 0.62;
  g.add(neck);
  const head = part(GEO.sphereHi, white, 0.044, 0.043, 0.05);
  head.position.set(0, 0.288, 0.115);
  g.add(head);

  const beak = part(GEO.cone10, MAT.beak, 0.014, 0.078, 0.016);
  beak.rotation.x = Math.PI / 2 + 0.08;
  beak.position.set(0, 0.284, 0.178);
  g.add(beak);
  const gonys = part(GEO.sphere, MAT.beakSpot, 0.008, 0.007, 0.008);
  gonys.position.set(0, 0.272, 0.198);
  g.add(gonys);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, MAT.eye, 0.008);
    eye.position.set(side * 0.026, 0.296, 0.14);
    g.add(eye);
  }

  for (const side of [-1, 1]) {
    // Folded wing: coverts wrap the flank, primaries taper back over the tail.
    const coverts = part(GEO.sphereHi, grey, 0.032, 0.062, 0.135);
    coverts.position.set(side * 0.06, 0.19, -0.005);
    coverts.rotation.set(0.16, 0, side * -0.14);
    g.add(coverts);
    const primary = part(GEO.cone, grey, 0.022, 0.16, 0.034);
    primary.rotation.set(-Math.PI / 2 - 0.16, side * 0.1, 0);
    primary.position.set(side * 0.042, 0.205, -0.095);
    g.add(primary);
    const tip = part(GEO.cone, MAT.gullTip, 0.014, 0.055, 0.021);
    tip.rotation.copy(primary.rotation);
    tip.position.set(side * 0.03, 0.222, -0.192);
    g.add(tip);
  }

  for (const side of [-1, 1]) {
    const leg = part(GEO.cyl, orange, 0.009, 0.075, 0.009);
    leg.position.set(side * 0.03, 0.055, 0.035);
    g.add(leg);
    const web = part(GEO.cone4, orange, 0.05, 0.055, 0.012);
    web.rotation.x = Math.PI / 2;
    web.position.set(side * 0.03, 0.012, 0.055);
    g.add(web);
    const heel = part(GEO.sphere, orange, 0.014, 0.011, 0.014);
    heel.position.set(side * 0.03, 0.013, 0.026);
    g.add(heel);
  }

  g.userData.kind = "gull";
  g.userData.ageBand = "gull";
  g.userData.paintTarget = false;
  g.name = "gull";
  return g;
}

function place(mesh, x, y, z, yaw = 0) {
  mesh.position.set(x, y, z);
  mesh.rotation.y = yaw;
  return mesh;
}

/**
 * Scatter the beach/patio cast. Adults on sand or deck; gull on the boardwalk rail.
 * @param {THREE.Scene} scene
 * @returns {{ mesh: THREE.Group, kind: string, ageBand: string }[]}
 */
export { ken, babe, sigma07, goth, kid, seagull };
// full-body planted bipeds — keep this marker in the bundle

export function spawnBeachCast(scene) {
  const railZ = WORLD.boardwalkZ + 3.6;
  const deckY = 0.18;

  const cast = [
    { mesh: place(ken(), -8.2, 0, 4.0, 0.4), kind: "ken", ageBand: "adult" },
    { mesh: place(babe(), 6.2, 0, 2.2, -0.6), kind: "babe", ageBand: "adult" },
    { mesh: place(sigma07(), 2.0, deckY, 16.5, Math.PI), kind: "sigma_07", ageBand: "adult" },
    { mesh: place(goth(), 11.5, 0, 14.0, -2.4), kind: "goth", ageBand: "adult" },
    {
      mesh: place(ken({ hair: 0xff6b9a, shorts: 0x1a4d8c, skin: 0xcc8f5a }), 9.8, 0, 6.2, -1.1),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0x3a2218, bikini: 0x39c6d4, skin: 0xd9a078 }), -4.2, 0, -1.8, 0.2),
      kind: "babe",
      ageBand: "adult",
    },
    { mesh: place(kid(), -3.5, deckY, 15.5, 0.8), kind: "kid", ageBand: "child" },
    { mesh: place(seagull(), 8.0, 1.2, railZ, -0.3), kind: "gull", ageBand: "gull" },
    {
      mesh: place(ken({ hair: 0xf4e27a, shorts: 0xe23b3b, skin: 0xe0a060 }), -7.2, 0.38, WORLD.boardwalkZ + 6.2, 1.4),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0xf2c12e, bikini: 0xff6b9a, skin: 0xe8b898 }), 25.2, 0, 7.4, -2.2),
      kind: "babe",
      ageBand: "adult",
    },
    {
      mesh: place(ken({ hair: 0x5ec8ff, shorts: 0xf2c12e, skin: 0xd4924a }), -14.0, 0, 3.2, 0.9),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0x8b3a2a, bikini: 0xffffff, skin: 0xc98a62 }), 1.4, 0, -4.6, 2.8),
      kind: "babe",
      ageBand: "adult",
    },
    { mesh: place(goth(), -22.0, 0, 9.5, 0.3), kind: "goth", ageBand: "adult" },
    { mesh: place(sigma07(), 15.5, 0, 9.0, -1.8), kind: "sigma_07", ageBand: "adult" },
    { mesh: place(seagull(), -10.0, 1.2, railZ, 0.8), kind: "gull", ageBand: "gull" },
    { mesh: place(kid(), 10.2, 0, 4.8, -0.4), kind: "kid", ageBand: "child" },
  ];

  for (const npc of cast) {
    npc.mesh.userData.kind = npc.kind;
    npc.mesh.userData.ageBand = npc.ageBand;
    if (npc.ageBand !== "adult") npc.mesh.userData.paintTarget = false;
    scene.add(npc.mesh);
  }
  return cast;
}
