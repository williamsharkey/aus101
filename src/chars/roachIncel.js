/**
 * Beach cockroach-mascot incel: black emo under a cheap foam roach suit.
 * Patrols a sand loop, barks protein propaganda, mutters, then corrects.
 */
import * as THREE from "three";

const TAU = Math.PI * 2;
const KIND = "roach_incel";
const NAME = "roach-incel";

/** Open sand, seaward of the boardwalk (z=16), landward of wet (z=-10), off buildings. */
export const ROACH_LOOP = [
  [4.0, 0.2],
  [12.4, 4.0],
  [8.0, 11.2],
  [-1.5, 10.5],
  [-8.8, 7.2],
  [-12.2, 0.2],
  [-7.8, -5.5],
  [3.2, -7.2],
];
export const ROACH_SPAWN = { x: ROACH_LOOP[0][0], y: 0, z: ROACH_LOOP[0][1] };

const WALK = 0.48;
const REACH = 0.42;
const SPEAK_MIN = 3800;
const SPEAK_MAX = 7200;
const PROP_GAIN = 1.18;
const ASIDE_GAIN = 0.34;
const ASIDE_CHANCE = 0.2;

export const ROACH_PROP = [
  "roach_prop_01",
  "roach_prop_02",
  "roach_prop_03",
  "roach_prop_04",
  "roach_prop_05",
  "roach_prop_06",
  "roach_prop_07",
  "roach_prop_08",
  "roach_prop_09",
  "roach_prop_10",
  "roach_prop_11",
  "roach_prop_12",
  "roach_prop_13",
  "roach_prop_14",
];
export const ROACH_ASIDE = ["roach_aside_01", "roach_aside_02", "roach_aside_03"];
export const ROACH_SLOGAN = ["roach_prop_15", "roach_prop_16", "roach_prop_17"];

const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphereLo: new THREE.SphereGeometry(1, 8, 6),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  sphereHi: new THREE.SphereGeometry(1, 12, 10),
  skull: new THREE.SphereGeometry(1, 16, 12),
  hairCrown: new THREE.SphereGeometry(1, 16, 10, 0, TAU, 0, 1.44),
  hairBack: new THREE.SphereGeometry(1, 12, 8, Math.PI, Math.PI, 0.42, 1.6),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl12: new THREE.CylinderGeometry(1, 1, 1, 8),
  limb: new THREE.CylinderGeometry(1, 0.78, 1, 8),
  cone: new THREE.ConeGeometry(1, 1, 6),
  cone4: new THREE.ConeGeometry(1, 1, 4),
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function part(geo, mat, sx, sy = sx, sz = sx) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.scale.set(sx, sy, sz);
  return m;
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

function yawTo(fromX, fromZ, toX, toZ) {
  return Math.atan2(toX - fromX, toZ - fromZ);
}

function wrapPi(a) {
  let x = a;
  while (x > Math.PI) x -= TAU;
  while (x < -Math.PI) x += TAU;
  return x;
}

function buildEmo() {
  const height = 1.7;
  const s = 1;
  const skin = 0xc9c4be;
  const hair = 0x0d0d10;
  const shirt = 0x141414;
  const bottoms = 0x161618;
  const shoe = 0x111113;
  const shoulderW = 0.34;
  const chestW = 0.27;
  const chestD = 0.17;
  const hipW = 0.23;
  const armR = 0.037;
  const legR = 0.05;

  const g = new THREE.Group();
  const skinM = std(skin);
  const hairM = std(hair, { roughness: 0.85 });
  const shirtM = std(shirt);
  const pantM = std(bottoms);
  const shoeM = std(shoe, { roughness: 0.62 });

  const headR = 0.12 * s;
  const neckH = 0.12 * s;
  const footH = 0.058 * s;
  const headY = height - headR - 0.01 * s;
  const shoulderY = headY - headR * 1.02 - neckH * 0.5;
  const hipY = 0.52 * height;
  const torsoH = Math.max(0.28 * s, shoulderY - hipY);
  const shinH = (hipY - footH) * 0.47;
  const thighH = (hipY - footH) * 0.53;
  const upperLen = 0.28 * s;
  const foreLen = 0.26 * s;
  const aR = armR * s;
  const lR = legR * s;

  const pelvis = part(GEO.box, pantM, hipW, 0.2 * s, chestD * 0.98);
  pelvis.position.y = hipY - 0.03 * s;
  g.add(pelvis);
  const torso = part(GEO.box, shirtM, chestW, torsoH, chestD);
  torso.position.y = hipY + torsoH * 0.5 - 0.02 * s;
  g.add(torso);
  const lats = part(GEO.box, shirtM, (chestW + shoulderW) * 0.5, 0.14 * s, chestD * 0.94);
  lats.position.y = shoulderY - 0.13 * s;
  g.add(lats);
  const clav = part(GEO.box, shirtM, shoulderW * 0.94, 0.13 * s, chestD * 0.92);
  clav.position.y = shoulderY - 0.04 * s;
  g.add(clav);
  const neckTop = headY - headR * 0.6;
  const neckBot = shoulderY - 0.06 * s;
  const neck = part(GEO.cyl12, skinM, 0.052 * s, neckTop - neckBot, 0.05 * s);
  neck.position.y = (neckTop + neckBot) * 0.5;
  g.add(neck);

  const head = new THREE.Group();
  head.position.y = headY;
  const skull = part(GEO.skull, skinM, headR * 0.94, headR * 1.03, headR);
  head.add(skull);
  const jaw = part(GEO.sphere, skinM, headR * 0.58, headR * 0.4, headR * 0.62);
  jaw.position.set(0, -headR * 0.58, headR * 0.3);
  head.add(jaw);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, std(0x1a1410, { roughness: 0.45 }), 0.016 * s);
    eye.position.set(side * 0.038 * s, 0.012 * s, headR * 0.8);
    head.add(eye);
    const ear = part(GEO.sphereLo, skinM, 0.014 * s, 0.03 * s, 0.018 * s);
    ear.position.set(side * headR * 0.92, -0.004 * s, -0.01 * s);
    head.add(ear);
  }
  const nose = part(GEO.cone4, skinM, 0.014 * s, 0.03 * s, 0.03 * s);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.006 * s, headR * 0.84);
  head.add(nose);
  const cap = part(GEO.hairCrown, hairM, headR * 1.05, headR * 1.1, headR * 1.07);
  cap.rotation.x = -0.12;
  head.add(cap);
  const rear = part(GEO.hairBack, hairM, headR * 1.08, headR * 1.14, headR * 1.1);
  rear.rotation.x = -0.06;
  head.add(rear);
  const fringe = part(GEO.sphere, hairM, headR * 0.86, headR * 0.38, headR * 0.42);
  fringe.position.set(headR * 0.12, headR * 0.38, headR * 0.58);
  fringe.rotation.set(-0.28, 0, 0.2);
  head.add(fringe);
  g.add(head);

  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.name = side < 0 ? "armL" : "armR";
    arm.position.set(side * (shoulderW * 0.5 - aR * 0.5), shoulderY - 0.015 * s, 0);
    arm.rotation.z = side * 0.07;
    const delt = part(GEO.sphere, shirtM, aR * 1.5, aR * 1.85, aR * 1.45);
    delt.position.y = -aR * 0.45;
    arm.add(delt);
    const upper = part(GEO.limb, shirtM, aR * 1.1, upperLen, aR * 1.1);
    upper.position.y = -upperLen * 0.5;
    arm.add(upper);
    const elbow = part(GEO.sphereLo, shirtM, aR * 0.94);
    elbow.position.y = -upperLen;
    arm.add(elbow);
    const forearm = part(GEO.limb, shirtM, aR * 0.94, foreLen, aR * 0.94);
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

  const legs = [];
  const feet = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.name = side < 0 ? "legL" : "legR";
    leg.position.set(side * hipW * 0.3, hipY, 0);
    const hipJoint = part(GEO.sphere, pantM, lR * 1.3, lR * 1.35, lR * 1.25);
    hipJoint.position.y = -0.035 * s;
    leg.add(hipJoint);
    const thigh = part(GEO.limb, pantM, lR * 1.12, thighH, lR * 1.1);
    thigh.position.y = -thighH * 0.5;
    leg.add(thigh);
    const knee = part(GEO.sphereLo, pantM, lR * 0.92);
    knee.position.y = -thighH;
    leg.add(knee);
    const shin = part(GEO.limb, pantM, lR * 0.86, shinH, lR * 0.86);
    shin.position.y = -thighH - shinH * 0.5;
    leg.add(shin);
    const ankle = part(GEO.sphereLo, shoeM, lR * 0.62);
    ankle.position.y = -thighH - shinH;
    leg.add(ankle);
    const foot = new THREE.Group();
    foot.name = "foot";
    foot.position.y = -thighH - shinH;
    const soleH = 0.036 * s;
    const sole = part(GEO.box, shoeM, 0.1 * s, soleH, 0.25 * s);
    sole.position.set(0, -footH + soleH * 0.5, 0.062 * s);
    foot.add(sole);
    const vamp = part(GEO.box, shoeM, 0.096 * s, 0.05 * s, 0.13 * s);
    vamp.position.set(0, -footH + soleH + 0.02 * s, 0.075 * s);
    foot.add(vamp);
    leg.add(foot);
    g.add(leg);
    legs.push(leg);
    feet.push(foot);
  }

  g.userData.body = {
    head,
    skull,
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
  return g;
}

function stickLeg(shell, dark, side, i, floppy) {
  const g = new THREE.Group();
  const x = side * (0.2 + i * 0.012);
  const y = 0.02 - i * 0.04;
  const z = 0.06 - i * 0.1;
  g.position.set(x, y, z);
  g.rotation.z = side * (1.05 + i * 0.12);
  g.rotation.x = 0.15 + i * 0.22 + (floppy ? 0.55 : 0.08);
  g.rotation.y = side * -0.12;

  const hip = part(GEO.sphereLo, dark, 0.028);
  g.add(hip);
  const femur = part(GEO.cyl, shell, 0.016, 0.22, 0.014);
  femur.position.y = -0.12;
  g.add(femur);
  const knee = part(GEO.sphereLo, dark, 0.02);
  knee.position.y = -0.22;
  g.add(knee);
  const shinG = new THREE.Group();
  shinG.position.y = -0.22;
  shinG.rotation.x = floppy ? 0.7 : 0.28;
  const tibia = part(GEO.cyl, shell, 0.012, 0.2, 0.01);
  tibia.position.y = -0.1;
  shinG.add(tibia);
  const claw = part(GEO.cone, dark, 0.018, 0.06, 0.012);
  claw.position.y = -0.22;
  claw.rotation.x = 0.4;
  shinG.add(claw);
  g.add(shinG);
  return { root: g, shin: shinG, floppy, side, i };
}

function dressRoach(g) {
  const b = g.userData.body;
  const s = b.scale;
  const shell = std(0x7a3c20, { roughness: 0.94 });
  const shellDark = std(0x4a2412, { roughness: 0.92 });
  const shellLite = std(0x9a5430, { roughness: 0.9 });
  const foam = std(0x6a341c, { roughness: 0.97 });
  const seam = std(0x3a2014, { roughness: 0.88 });
  const zipM = std(0x1c1814, { roughness: 0.38, metalness: 0.28 });
  const eyeW = std(0xf4f0e4, { roughness: 0.32 });
  const eyeB = std(0x16120e, { roughness: 0.28 });
  const gloss = std(0xe8a878, { roughness: 0.55, metalness: 0.08 });

  const abdomen = part(GEO.sphereHi, shell, 0.3 * s, 0.24 * s, 0.46 * s);
  abdomen.position.set(0.01 * s, b.hipY + 0.1 * s, -0.2 * s);
  abdomen.rotation.x = 0.32;
  g.add(abdomen);
  for (let i = 0; i < 5; i++) {
    const ridge = part(GEO.box, shellDark, 0.46 * s - i * 0.03 * s, 0.018 * s, 0.04 * s);
    ridge.position.set(0, b.hipY + 0.22 * s - i * 0.055 * s, -0.34 * s - i * 0.012 * s);
    ridge.rotation.x = 0.4;
    g.add(ridge);
  }
  const cerci = part(GEO.cone, shellDark, 0.05 * s, 0.12 * s, 0.04 * s);
  cerci.rotation.x = Math.PI / 2 + 0.5;
  cerci.position.set(0, b.hipY - 0.02 * s, -0.42 * s);
  g.add(cerci);

  const thorax = new THREE.Group();
  thorax.position.set(0, b.hipY + 0.42 * s, 0.02 * s);
  const thoraxShell = part(GEO.box, shellLite, 0.36 * s, 0.36 * s, 0.32 * s);
  thorax.add(thoraxShell);
  const plate = part(GEO.box, foam, 0.34 * s, 0.22 * s, 0.08 * s);
  plate.position.set(0, 0.04 * s, 0.13 * s);
  thorax.add(plate);
  g.add(thorax);

  for (const side of [-1, 1]) {
    const wing = part(GEO.box, shell, 0.2 * s, 0.08 * s, 0.42 * s);
    wing.position.set(side * 0.12 * s, b.hipY + 0.28 * s, -0.16 * s);
    wing.rotation.set(0.22, side * 0.18, side * 0.12);
    g.add(wing);
  }

  const zipper = part(GEO.box, zipM, 0.028 * s, 0.62 * s, 0.02 * s);
  zipper.position.set(0.012 * s, b.hipY + 0.28 * s, -0.28 * s);
  g.add(zipper);
  for (let i = 0; i < 6; i++) {
    const tooth = part(GEO.box, gloss, 0.036 * s, 0.016 * s, 0.012 * s);
    tooth.position.set(0.012 * s, b.hipY + 0.52 * s - i * 0.09 * s, -0.292 * s);
    g.add(tooth);
  }
  const seamL = part(GEO.box, seam, 0.012 * s, 0.5 * s, 0.012 * s);
  seamL.position.set(-0.2 * s, b.hipY + 0.34 * s, -0.08 * s);
  const seamR = part(GEO.box, seam, 0.012 * s, 0.5 * s, 0.012 * s);
  seamR.position.set(0.22 * s, b.hipY + 0.34 * s, -0.08 * s);
  g.add(seamL, seamR);
  const collar = part(GEO.cyl12, foam, 0.09 * s, 0.08 * s, 0.09 * s);
  collar.position.set(0, b.shoulderY + 0.02 * s, 0);
  g.add(collar);

  const bugHead = new THREE.Group();
  bugHead.name = "roachHead";
  const cap = part(GEO.sphereHi, foam, 0.17 * s, 0.14 * s, 0.19 * s);
  cap.position.set(0, 0.02 * s, 0.02 * s);
  bugHead.add(cap);
  const snout = part(GEO.sphere, shellDark, 0.08 * s, 0.06 * s, 0.09 * s);
  snout.position.set(0, -0.04 * s, 0.12 * s);
  bugHead.add(snout);
  const hole = part(GEO.sphere, std(0x1a100c, { roughness: 0.9 }), 0.07 * s, 0.055 * s, 0.04 * s);
  hole.position.set(0, -0.05 * s, 0.16 * s);
  bugHead.add(hole);
  for (const side of [-1, 1]) {
    const goo = part(GEO.sphere, eyeW, 0.055 * s);
    goo.position.set(side * 0.09 * s, 0.04 * s, 0.14 * s);
    bugHead.add(goo);
    const pupil = part(GEO.sphereLo, eyeB, 0.028 * s);
    pupil.position.set(side * 0.098 * s, 0.036 * s, 0.178 * s);
    bugHead.add(pupil);
    const highlight = part(GEO.sphereLo, std(0xffffff, { roughness: 0.2 }), 0.01 * s);
    highlight.position.set(side * 0.086 * s, 0.052 * s, 0.188 * s);
    bugHead.add(highlight);
  }
  const antennae = [];
  for (const side of [-1, 1]) {
    const ant = new THREE.Group();
    ant.position.set(side * 0.05 * s, 0.1 * s, 0.04 * s);
    ant.rotation.z = side * 0.45;
    ant.rotation.x = -0.55;
    const wire = part(GEO.cyl, seam, 0.008 * s, 0.42 * s, 0.008 * s);
    wire.position.y = 0.21 * s;
    ant.add(wire);
    const bead = part(GEO.sphereLo, shellLite, 0.018 * s);
    bead.position.y = 0.42 * s;
    ant.add(bead);
    bugHead.add(ant);
    antennae.push(ant);
  }
  b.head.add(bugHead);

  const sticks = [];
  for (let i = 0; i < 3; i++) {
    for (const side of [-1, 1]) {
      const floppy = i !== 0;
      const leg = stickLeg(shell, shellDark, side, i, floppy);
      thorax.add(leg.root);
      sticks.push(leg);
    }
  }

  g.userData.roach = { bugHead, antennae, sticks, thorax };
}

export function buildRoachIncel() {
  const g = buildEmo();
  dressRoach(g);
  g.name = NAME;
  g.userData.kind = KIND;
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
  g.userData.job = "roach";
  return g;
}

function downed(mesh) {
  return !mesh || mesh.visible === false || mesh.userData.combatDown;
}

function poseMiserable(mesh, phase, t, wipe, heat) {
  const b = mesh.userData.body;
  const r = mesh.userData.roach;
  if (!b?.legL) return;
  const swing = Math.sin(phase);
  const amp = 0.32;
  b.legL.rotation.x = -swing * amp;
  b.legR.rotation.x = swing * amp;
  b.legL.rotation.z = 0.04;
  b.legR.rotation.z = -0.04;
  if (b.armL) {
    b.armL.rotation.x = swing * 0.22 + 0.22;
    b.armL.rotation.z = 0.12;
    b.armL.rotation.y = 0;
  }
  if (b.armR) {
    if (wipe > 0) {
      const w = wipe * wipe * (3 - 2 * wipe);
      b.armR.rotation.x = -1.55 * w + 0.22 * (1 - w);
      b.armR.rotation.z = -0.55 * w + 0.12 * (1 - w);
      b.armR.rotation.y = -0.35 * w;
    } else {
      b.armR.rotation.x = -swing * 0.22 + 0.22;
      b.armR.rotation.z = -0.12;
      b.armR.rotation.y = 0;
    }
  }
  if (b.head) {
    b.head.rotation.x = 0.22 + heat * 0.12;
    b.head.rotation.z = Math.sin(t * 1.4) * 0.08 * (0.4 + heat);
    b.head.rotation.y = Math.sin(t * 0.7) * 0.05;
  }
  if (r?.antennae) {
    r.antennae[0].rotation.x = -0.55 + Math.sin(t * 2.2) * 0.28;
    r.antennae[1].rotation.x = -0.55 + Math.sin(t * 2.05 + 1.1) * 0.32;
    r.antennae[0].rotation.z = -0.45 + Math.sin(t * 1.6) * 0.12;
    r.antennae[1].rotation.z = 0.45 + Math.sin(t * 1.7 + 0.4) * 0.12;
  }
  if (r?.sticks) {
    for (const st of r.sticks) {
      const flop = st.floppy ? 1 : 0.25;
      st.root.rotation.x = 0.15 + st.i * 0.22 + (st.floppy ? 0.55 : 0.08) + Math.sin(t * 1.8 + st.i) * 0.18 * flop;
      st.shin.rotation.x = (st.floppy ? 0.7 : 0.28) + Math.sin(t * 2.4 + st.i * 0.7) * 0.22 * flop;
    }
  }
}

function makeState(mesh, opts) {
  return {
    mesh,
    play: opts.play || null,
    i: 1,
    phase: Math.random() * TAU,
    nextSpeak: performance.now() + 1200 + Math.random() * 1800,
    sloganAt: 0,
    sloganId: null,
    wipeUntil: 0,
    nextWipe: performance.now() + 4000 + Math.random() * 4000,
    heatUntil: 0,
    lastId: "",
  };
}

function tryPlay(st, id, gain) {
  const play = st.play || st.mesh.userData.play;
  if (!play || !id) return false;
  try {
    play(id, { gain, pos: st.mesh.position });
    st.lastId = id;
    return true;
  } catch {
    return false;
  }
}

function tickState(st, dt, now) {
  const mesh = st.mesh;
  if (downed(mesh)) return;
  if (mesh.userData.flee) return;

  const h = Math.min(dt, 0.05);
  const loop = ROACH_LOOP;
  const [tx, tz] = loop[st.i % loop.length];
  const dx = tx - mesh.position.x;
  const dz = tz - mesh.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist < REACH) {
    st.i = (st.i + 1) % loop.length;
  } else {
    const step = Math.min(dist, WALK * h);
    mesh.position.x += (dx / dist) * step;
    mesh.position.z += (dz / dist) * step;
    const want = yawTo(mesh.position.x, mesh.position.z, tx, tz);
    mesh.rotation.y += wrapPi(want - mesh.rotation.y) * Math.min(1, h * 3.2);
  }
  st.phase += h * 4.05;
  mesh.position.y = Math.abs(Math.sin(st.phase)) * 0.018;

  const t = now * 0.001;
  if (now >= st.nextWipe) {
    st.wipeUntil = now + 700;
    st.nextWipe = now + 5500 + Math.random() * 4500;
    st.heatUntil = now + 1400;
  }
  const wipe = st.wipeUntil > now ? 1 - Math.abs((st.wipeUntil - now) / 700 - 0.5) * 2 : 0;
  const heat = st.heatUntil > now ? 1 : 0.35 + 0.15 * Math.sin(t * 0.9);
  poseMiserable(mesh, st.phase, t, Math.max(0, wipe), heat);

  if (st.sloganAt && now >= st.sloganAt) {
    tryPlay(st, st.sloganId, PROP_GAIN);
    st.sloganAt = 0;
    st.sloganId = null;
    st.nextSpeak = now + SPEAK_MIN + Math.random() * (SPEAK_MAX - SPEAK_MIN);
    return;
  }
  if (st.sloganAt) return;
  if (now < st.nextSpeak) return;

  if (Math.random() < ASIDE_CHANCE) {
    let aside = pick(ROACH_ASIDE);
    if (ROACH_ASIDE.length > 1 && aside === st.lastId) aside = pick(ROACH_ASIDE);
    if (tryPlay(st, aside, ASIDE_GAIN)) {
      st.sloganId = pick(ROACH_SLOGAN);
      st.sloganAt = now + 600 + Math.random() * 600;
    } else {
      st.nextSpeak = now + 1800;
    }
    return;
  }
  let line = pick(ROACH_PROP);
  if (ROACH_PROP.length > 1 && line === st.lastId) line = pick(ROACH_PROP);
  tryPlay(st, line, PROP_GAIN);
  st.nextSpeak = now + SPEAK_MIN + Math.random() * (SPEAK_MAX - SPEAK_MIN);
}

let live = null;

/**
 * One mascot on the sand loop. Second call returns the live instance and
 * can attach `play` if the first spawn had none.
 * @param {THREE.Scene} scene
 * @param {{ play?: (id: string, opts?: { gain?: number }) => unknown }} [opts]
 * @returns {{ mesh: THREE.Group, tick: Function, kind: string, ageBand: string }}
 */
export function spawnRoachIncel(scene, opts = {}) {
  if (live?.mesh && (live.mesh.parent === scene || (!scene && live.mesh.parent))) {
    if (opts.play) {
      live.play = opts.play;
      live.mesh.userData.play = opts.play;
      live.setPlay?.(opts.play);
    }
    return live;
  }
  const mesh = buildRoachIncel();
  const a = ROACH_LOOP[0];
  const b = ROACH_LOOP[1];
  mesh.position.set(a[0], 0, a[1]);
  mesh.rotation.y = yawTo(a[0], a[1], b[0], b[1]);
  scene?.add(mesh);
  const st = makeState(mesh, opts);
  if (opts.play) mesh.userData.play = opts.play;
  function tick(dt, now = performance.now()) {
    tickState(st, dt, now);
  }
  mesh.userData.tick = tick;
  live = {
    mesh,
    tick,
    kind: KIND,
    ageBand: "adult",
    play: opts.play || null,
    setPlay(fn) {
      st.play = fn;
      mesh.userData.play = fn;
      this.play = fn;
    },
  };
  return live;
}

export function tickRoachIncel(dt, now = performance.now()) {
  if (!live) return;
  live.tick(dt, now);
}
