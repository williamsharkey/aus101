/**
 * Beach painter: locks a viewpoint, maps that view onto a blank canvas
 * (view UV == canvas UV), then forever stamps a stroke at the largest
 * view-vs-canvas RGB error.
 */
import * as THREE from "three";
import { createPaintBrain } from "../paint/brain.js";

const VIEW = 64;
const PAINT = 256;
const STROKE_MS = 170;
const BRUSH_UV = 0.08;
const LAYER_PAINT = 1;
const CANVAS_W = 0.82;
const CANVAS_H = 0.6;
const LINEN = 0xf4efe4;
const SKY = 0x87c8ef;

/** Painter rig: origin at the soles, ~1.72 m, same construction idiom as npcs.js. */
const BODY = {
  height: 1.72,
  headR: 0.115,
  neckH: 0.1,
  shoulderW: 0.4,
  chestW: 0.32,
  chestD: 0.19,
  hipW: 0.27,
  armR: 0.045,
  legR: 0.058,
  footH: 0.055,
};
BODY.headY = BODY.height - BODY.headR - 0.01;
BODY.shoulderY = BODY.headY - BODY.headR - BODY.neckH * 0.55;
BODY.hipY = 0.52 * BODY.height;
BODY.torsoH = BODY.shoulderY - BODY.hipY;
BODY.thighH = (BODY.hipY - BODY.footH) * 0.53;
BODY.shinH = (BODY.hipY - BODY.footH) * 0.47;

const UP_ARM = 0.29;
const FORE_ARM = 0.27;
/** Shoulder -> hand travel the IK will honour, and hand -> bristle tip. */
const HAND_MIN = 0.22;
const HAND_MAX = (UP_ARM + FORE_ARM) * 0.985;
const BRUSH_LEN = 0.34;
const RETRACT = 0.035;
const ELBOW_ROLL = 0.55;
/** How far the body may lean/rock after a stroke that is out of arm's reach. */
const LEAN_PITCH = 0.17;
const LEAN_ROLL = 0.15;

/** Painter's stance in easel-local space (easel sits at the artist root origin). */
const STANCE = { x: 0.38, z: 0.72, turn: -0.2 };

const QUAD_VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ERR_FRAG = `
uniform sampler2D viewMap;
uniform sampler2D paintMap;
varying vec2 vUv;
void main() {
  vec3 v = texture2D(viewMap, vUv).rgb;
  vec3 p = texture2D(paintMap, vUv).rgb;
  gl_FragColor = vec4(abs(v - p), 1.0);
}
`;

const STAMP_FRAG = `
uniform sampler2D viewMap;
uniform vec2 center;
uniform float radius;
uniform float amount;
varying vec2 vUv;
void main() {
  vec2 d = vUv - center;
  d.x *= 1.15;
  float dist = length(d);
  float mask = smoothstep(radius, radius * 0.28, dist);
  mask *= 0.82 + 0.18 * sin((vUv.x * 71.0 + vUv.y * 53.0) + center.x * 9.0);
  if (mask < 0.012) discard;
  vec3 src = texture2D(viewMap, vUv).rgb;
  gl_FragColor = vec4(src, mask * amount);
}
`;

/** Shared unit geometry — every part is one of these, scaled (iPhone budget). */
const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  sphereHi: new THREE.SphereGeometry(1, 12, 10),
  skull: new THREE.SphereGeometry(1, 16, 12),
  // Open-bottomed hair shells: they sit ON the skull instead of swallowing the
  // face. `hairCrown` caps the crown down to the hairline, `hairBack` the nape.
  hairCrown: new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, 1.32),
  hairBack: new THREE.SphereGeometry(1, 12, 8, Math.PI, Math.PI, 0.42, 1.55),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl12: new THREE.CylinderGeometry(1, 1, 1, 12),
  cone: new THREE.ConeGeometry(1, 1, 6),
  torus: new THREE.TorusGeometry(1, 0.09, 5, 14),
};

const ZAXIS = new THREE.Vector3(0, 0, 1);
const YAXIS = new THREE.Vector3(0, 1, 0);

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

/** Cylinder spanning two points — used for the static (palette) arm. */
function bone(mat, r, a, b) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = part(GEO.cyl, mat, r, len, r);
  m.position.copy(a).addScaledVector(dir, 0.5);
  m.quaternion.setFromUnitVectors(YAXIS, dir.normalize());
  return m;
}

function makeRT(w, h, { depth = false, colorSpace = THREE.NoColorSpace } = {}) {
  const rt = new THREE.WebGLRenderTarget(w, h, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: depth,
    stencilBuffer: false,
    generateMipmaps: false,
  });
  rt.texture.colorSpace = colorSpace;
  rt.texture.flipY = false;
  return rt;
}

function makeEasel() {
  const g = new THREE.Group();
  const wood = std(0x7a4e2a, { roughness: 0.9 });
  const dark = std(0x4a2e16, { roughness: 0.88 });
  const linen = std(LINEN, { roughness: 0.96 });

  for (const [x, z, lean] of [
    [-0.3, 0.14, 0.08],
    [0.3, 0.14, -0.08],
    [0, -0.2, 0],
  ]) {
    const leg = part(GEO.box, wood, 0.048, 1.52, 0.048);
    leg.position.set(x, 0.76, z);
    leg.rotation.z = lean;
    g.add(leg);
  }

  const tray = part(GEO.box, dark, 0.72, 0.04, 0.16);
  tray.position.set(0, 0.52, 0.1);
  g.add(tray);

  const bar = part(GEO.box, wood, 0.7, 0.04, 0.04);
  bar.position.set(0, 1.46, 0.08);
  g.add(bar);

  const board = part(GEO.box, linen, CANVAS_W + 0.04, CANVAS_H + 0.04, 0.028);
  board.position.set(0, 1.16, 0.11);
  board.rotation.x = -0.1;
  g.add(board);

  const pegL = part(GEO.box, dark, 0.03, 0.08, 0.03);
  pegL.position.set(-0.34, 0.84, 0.12);
  const pegR = part(GEO.box, dark, 0.03, 0.08, 0.03);
  pegR.position.set(0.34, 0.84, 0.12);
  g.add(pegL, pegR);

  return { group: g, board };
}

/**
 * Two-bone limb laid out along local +Z: shoulder ball at the origin, hand at
 * (0, 0, len). `upper` and `fore` are posed by `poseLimb`, so the elbow bends
 * as the reach changes and nothing ever floats free of the joint above it.
 */
function makeLimb(sleeveM, skinM, r) {
  const g = new THREE.Group();
  g.add(part(GEO.sphere, sleeveM, r * 1.3, r * 1.24, r * 1.24));

  const upper = new THREE.Group();
  const uMesh = part(GEO.cyl, sleeveM, r, UP_ARM, r);
  uMesh.rotation.x = Math.PI / 2;
  uMesh.position.z = UP_ARM * 0.5;
  const cuff = part(GEO.cyl, sleeveM, r * 1.12, 0.045, r * 1.12);
  cuff.rotation.x = Math.PI / 2;
  cuff.position.z = UP_ARM - 0.02;
  const elbowBall = part(GEO.sphere, skinM, r * 0.98);
  elbowBall.position.z = UP_ARM;
  upper.add(uMesh, cuff, elbowBall);
  g.add(upper);

  const fore = new THREE.Group();
  const fMesh = part(GEO.cyl, skinM, r * 0.92, FORE_ARM, r * 0.78);
  fMesh.rotation.x = Math.PI / 2;
  fMesh.position.z = FORE_ARM * 0.5;
  const wrist = part(GEO.sphere, skinM, r * 0.72);
  wrist.position.z = FORE_ARM;
  fore.add(fMesh, wrist);
  g.add(fore);

  return { group: g, upper, fore };
}

const IK_ELBOW = new THREE.Vector3();
const IK_DIR = new THREE.Vector3();

/** Place elbow/forearm so the hand lands at (0, 0, len) in limb space. */
function poseLimb(limb, len, roll) {
  const L = THREE.MathUtils.clamp(len, Math.abs(UP_ARM - FORE_ARM) + 0.03, (UP_ARM + FORE_ARM) * 0.999);
  const cz = (L * L + UP_ARM * UP_ARM - FORE_ARM * FORE_ARM) / (2 * L);
  const h = Math.sqrt(Math.max(0, UP_ARM * UP_ARM - cz * cz));
  IK_ELBOW.set(Math.sin(roll) * h, -Math.cos(roll) * h, cz);
  limb.upper.quaternion.setFromUnitVectors(ZAXIS, IK_DIR.copy(IK_ELBOW).normalize());
  limb.fore.position.copy(IK_ELBOW);
  IK_DIR.set(-IK_ELBOW.x, -IK_ELBOW.y, L - cz).normalize();
  limb.fore.quaternion.setFromUnitVectors(ZAXIS, IK_DIR);
}

/** Fist closed around a rod that runs along local +Z through the palm. */
function makeGripHand(skinM, flip = 1) {
  const h = new THREE.Group();
  const wristBall = part(GEO.sphere, skinM, 0.034, 0.034, 0.03);
  wristBall.position.z = -0.012;
  const back = part(GEO.box, skinM, 0.072, 0.034, 0.086);
  back.position.set(0, 0.021, 0.03);
  const fingers = part(GEO.box, skinM, 0.068, 0.032, 0.08);
  fingers.position.set(0, -0.021, 0.032);
  const knuckle = part(GEO.sphere, skinM, 0.036, 0.03, 0.014);
  knuckle.position.set(0, 0.004, 0.072);
  const thumb = part(GEO.box, skinM, 0.024, 0.026, 0.064);
  thumb.position.set(flip * 0.031, 0.01, 0.038);
  thumb.rotation.z = flip * -0.22;
  h.add(wristBall, back, fingers, knuckle, thumb);
  return h;
}

/** Open hand, palm up (+Y), fingers along +Z — carries the palette. */
function makeFlatHand(skinM, flip = 1) {
  const h = new THREE.Group();
  const wristBall = part(GEO.sphere, skinM, 0.032, 0.028, 0.032);
  const palm = part(GEO.box, skinM, 0.072, 0.028, 0.078);
  palm.position.set(0, 0.004, 0.044);
  const fingers = part(GEO.box, skinM, 0.07, 0.022, 0.056);
  fingers.position.set(0, 0.008, 0.104);
  fingers.rotation.x = -0.22;
  const thumb = part(GEO.box, skinM, 0.024, 0.05, 0.05);
  thumb.position.set(flip * 0.04, 0.024, 0.048);
  thumb.rotation.y = flip * -0.35;
  thumb.rotation.z = flip * -0.2;
  h.add(wristBall, palm, fingers, thumb);
  return h;
}

function makeBrush(skinM) {
  const g = new THREE.Group();
  g.add(makeGripHand(skinM, -1));
  const stick = part(GEO.cyl, std(0x5a3a1a, { roughness: 0.7 }), 0.011, 0.3, 0.011);
  stick.rotation.x = Math.PI / 2;
  stick.position.z = 0.075;
  const ferrule = part(GEO.cyl, std(0xb0a070, { metalness: 0.45, roughness: 0.4 }), 0.013, 0.032, 0.013);
  ferrule.rotation.x = Math.PI / 2;
  ferrule.position.z = 0.24;
  const bristle = part(GEO.cone, std(0x3a2a18, { roughness: 0.9 }), 0.016, 0.055, 0.016);
  bristle.rotation.x = Math.PI / 2;
  bristle.position.z = BRUSH_LEN - 0.028;
  g.add(stick, ferrule, bristle);
  return g;
}

function makePainter() {
  const g = new THREE.Group();
  const { headR, shoulderW, chestW, chestD, hipW, armR, legR, footH } = BODY;
  const { headY, shoulderY, hipY, torsoH, thighH, shinH } = BODY;

  const skin = std(0xc9a07a, { roughness: 0.62 });
  const shirt = std(0xe4dac0, { roughness: 0.88 });
  const pants = std(0x6b5a3a, { roughness: 0.82 });
  const straw = std(0xe8d9a0, { roughness: 0.92 });
  const band = std(0x9c7a4a, { roughness: 0.85 });
  const hairM = std(0x6a5040, { roughness: 0.88 });
  const sandal = std(0x4a3a2c, { roughness: 0.78 });
  const eyeM = std(0x1a1410, { roughness: 0.45 });

  // ---- trunk -------------------------------------------------------------
  const pelvis = part(GEO.box, pants, hipW, 0.2, chestD * 0.98);
  pelvis.position.y = hipY - 0.03;
  g.add(pelvis);

  const belt = part(GEO.box, std(0x4a3a24, { roughness: 0.7 }), hipW * 1.03, 0.045, chestD * 1.01);
  belt.position.y = hipY + 0.075;
  g.add(belt);

  const torso = part(GEO.box, shirt, chestW, torsoH, chestD);
  torso.position.y = hipY + torsoH * 0.5 - 0.02;
  g.add(torso);

  // Two-step taper out to the shoulder yoke: ribcage -> lats -> clavicle, so the
  // arms hang off the ends of the yoke instead of off thin air beside the chest.
  const lats = part(GEO.box, shirt, (chestW + shoulderW) * 0.5, 0.14, chestD * 0.95);
  lats.position.y = shoulderY - 0.13;
  g.add(lats);

  const clav = part(GEO.box, shirt, shoulderW * 0.94, 0.13, chestD * 0.92);
  clav.position.y = shoulderY - 0.04;
  g.add(clav);

  // Deltoid caps on the body itself, so the socket stays filled however the
  // painting arm swings.
  for (const side of [-1, 1]) {
    const delt = part(GEO.sphere, shirt, 0.072, 0.075, chestD * 0.52);
    delt.position.set(side * (shoulderW * 0.5 - armR * 0.6), shoulderY - 0.035, 0);
    g.add(delt);
  }
  const trap = part(GEO.sphere, shirt, 0.1, 0.055, 0.075);
  trap.position.y = shoulderY + 0.005;
  g.add(trap);

  // Neck runs from inside the clavicle up into the skull, so nothing floats.
  const neckTop = headY - headR * 0.62;
  const neckBot = shoulderY - 0.05;
  const neck = part(GEO.cyl12, skin, 0.05, neckTop - neckBot, 0.048);
  neck.position.y = (neckTop + neckBot) * 0.5;
  g.add(neck);

  // Splashes of paint on the shirt.
  for (const [dx, dy, col] of [
    [-0.06, -0.12, 0xc8402e],
    [0.05, -0.21, 0x2f6f9a],
    [0.09, -0.07, 0xd4a017],
  ]) {
    const dab = part(GEO.sphere, std(col, { roughness: 0.6 }), 0.018, 0.024, 0.008);
    dab.position.set(dx, shoulderY + dy, chestD * 0.5);
    g.add(dab);
  }

  // ---- head --------------------------------------------------------------
  const head = new THREE.Group();
  head.position.y = headY;
  head.rotation.y = -STANCE.turn; // square his gaze with the locked view
  const skull = part(GEO.skull, skin, headR * 0.96, headR * 1.05, headR);
  head.add(skull);
  const jaw = part(GEO.sphere, skin, headR * 0.72, headR * 0.52, headR * 0.8);
  jaw.position.set(0, -headR * 0.52, headR * 0.14);
  head.add(jaw);
  const nose = part(GEO.cone, skin, 0.018, 0.04, 0.018);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.014, headR * 0.9);
  head.add(nose);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, eyeM, 0.015);
    eye.position.set(side * 0.04, 0.012, headR * 0.8);
    head.add(eye);
    const ear = part(GEO.sphere, skin, 0.013, 0.028, 0.019);
    ear.position.set(side * headR * 0.95, -0.008, -0.006);
    head.add(ear);
  }

  // Hair: shells concentric with the skull, so the crown is covered under the
  // brim without a slab of hair hanging over his eyes.
  const hairCap = part(GEO.hairCrown, hairM, headR * 1.04, headR * 1.09, headR * 1.05);
  hairCap.rotation.x = -0.13;
  head.add(hairCap);
  const hairBack = part(GEO.hairBack, hairM, headR * 1.05, headR * 1.14, headR * 1.07);
  hairBack.rotation.x = -0.06;
  head.add(hairBack);
  for (const side of [-1, 1]) {
    const burn = part(GEO.box, hairM, 0.02, 0.048, 0.028);
    burn.position.set(side * headR * 0.93, -headR * 0.2, -headR * 0.16);
    head.add(burn);
  }

  // Straw hat, worn back off the brow.
  const hat = new THREE.Group();
  hat.position.set(0, headR * 0.72, -0.018);
  hat.rotation.x = -0.14;
  const brim = part(GEO.cyl12, straw, 0.2, 0.018, 0.2);
  hat.add(brim);
  const crown = part(GEO.cyl12, straw, 0.118, 0.105, 0.118);
  crown.position.y = 0.055;
  hat.add(crown);
  const top = part(GEO.sphereHi, straw, 0.118, 0.05, 0.118);
  top.position.y = 0.104;
  hat.add(top);
  const hatBand = part(GEO.torus, band, 0.122, 0.122, 0.122);
  hatBand.rotation.x = Math.PI / 2;
  hatBand.position.y = 0.024;
  hatBand.scale.z = 0.35;
  hat.add(hatBand);
  head.add(hat);
  g.add(head);

  // ---- painting arm (aimed by aimBrush; local +Z runs down the arm) -------
  const limb = makeLimb(shirt, skin, armR);
  const arm = limb.group;
  arm.position.set(-(shoulderW * 0.5 - armR * 0.6), shoulderY - 0.035, 0.015);
  const brush = makeBrush(skin);
  brush.position.z = 0.42;
  arm.add(brush);
  poseLimb(limb, 0.42, ELBOW_ROLL);
  g.add(arm);

  // ---- palette arm (static, bent, hand under the palette) ----------------
  const pShoulder = new THREE.Vector3(shoulderW * 0.5 - armR * 0.6, shoulderY - 0.035, 0.015);
  const pElbow = new THREE.Vector3(0.255, 1.145, 0.035);
  const pHand = new THREE.Vector3(0.145, 1.055, 0.235);
  const pDelt = part(GEO.sphere, shirt, armR * 1.3, armR * 1.24, armR * 1.24);
  pDelt.position.copy(pShoulder);
  g.add(pDelt);
  g.add(bone(shirt, armR, pShoulder, pElbow));
  const pCuff = part(GEO.sphere, shirt, armR * 1.12);
  pCuff.position.copy(pElbow);
  g.add(pCuff);
  g.add(bone(skin, armR * 0.9, pElbow, pHand));
  const pElbowBall = part(GEO.sphere, skin, armR * 0.95);
  pElbowBall.position.copy(pElbow);
  g.add(pElbowBall);

  const palHand = makeFlatHand(skin, 1);
  palHand.position.copy(pHand);
  palHand.rotation.set(-0.1, -0.5, -0.2);
  g.add(palHand);

  // Palette rides on the flat of that hand, thumb up through it.
  const palette = new THREE.Group();
  palette.position.set(0, 0.03, 0.028);
  palette.rotation.y = -0.15;
  const disc = part(GEO.cyl12, std(0xcbb896, { roughness: 0.7 }), 0.105, 0.011, 0.078);
  palette.add(disc);
  for (const [ox, oz, col] of [
    [-0.055, -0.022, 0xc8402e],
    [-0.03, 0.036, 0x2f6f9a],
    [0.014, 0.044, 0xd4a017],
    [0.048, 0.02, 0x3a7a3a],
    [0.058, -0.026, 0xe8e2d2],
    [0.008, -0.042, 0x6a3a8a],
  ]) {
    const dab = part(GEO.sphere, std(col, { roughness: 0.5 }), 0.016, 0.007, 0.013);
    dab.position.set(ox, 0.008, oz);
    palette.add(dab);
  }
  palHand.add(palette);
  g.userData.palette = palette;

  // ---- legs --------------------------------------------------------------
  for (const [side, zOff, splay] of [
    [-1, 0.055, -0.12],
    [1, -0.075, 0.16],
  ]) {
    const leg = new THREE.Group();
    leg.position.set(side * hipW * 0.3, hipY, zOff);
    leg.rotation.x = -zOff * 0.55;

    const hipBall = part(GEO.sphere, pants, legR * 1.16);
    leg.add(hipBall);
    const thigh = part(GEO.cyl, pants, legR, thighH, legR * 0.94);
    thigh.position.y = -thighH * 0.5;
    leg.add(thigh);
    const knee = part(GEO.cyl12, pants, legR * 0.95, 0.06, legR * 0.95);
    knee.position.y = -thighH;
    leg.add(knee);

    const shinGrp = new THREE.Group();
    shinGrp.position.y = -thighH;
    shinGrp.rotation.x = zOff * 0.8;
    const shin = part(GEO.cyl, skin, legR * 0.8, shinH, legR * 0.78);
    shin.position.y = -shinH * 0.5;
    shinGrp.add(shin);
    const ankle = part(GEO.sphere, skin, legR * 0.66);
    ankle.position.y = -shinH;
    shinGrp.add(ankle);

    const foot = new THREE.Group();
    foot.position.y = -shinH;
    foot.rotation.y = splay;
    const sole = part(GEO.box, sandal, 0.088, 0.028, 0.2);
    sole.position.set(0, -footH + 0.014, 0.045);
    foot.add(sole);
    const heel = part(GEO.box, sandal, 0.082, 0.036, 0.07);
    heel.position.set(0, -footH + 0.03, -0.018);
    foot.add(heel);
    const toes = part(GEO.sphere, skin, 0.042, 0.024, 0.045);
    toes.position.set(0, -footH + 0.035, 0.108);
    foot.add(toes);
    const strap = part(GEO.box, sandal, 0.086, 0.016, 0.03);
    strap.position.set(0, -footH + 0.05, 0.052);
    strap.rotation.x = 0.25;
    foot.add(strap);
    shinGrp.add(foot);
    leg.add(shinGrp);
    g.add(leg);
  }

  const eye = new THREE.Vector3(0, 0.014, headR * 0.85).applyEuler(head.rotation).add(head.position);

  g.userData.arm = arm;
  g.userData.brush = brush;
  g.userData.limb = limb;
  g.userData.eye = eye;
  g.userData.paintTarget = false;
  g.userData.kind = "artist";
  g.userData.ageBand = "adult";
  return g;
}

function maxErrorUV(pix) {
  let best = -1;
  let bx = VIEW >> 1;
  let by = VIEW >> 1;
  const n = VIEW * VIEW;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const e = pix[o] * pix[o] + pix[o + 1] * pix[o + 1] + pix[o + 2] * pix[o + 2];
    if (e > best) {
      best = e;
      bx = i % VIEW;
      by = (i / VIEW) | 0;
    }
  }
  return { u: (bx + 0.5) / VIEW, v: (by + 0.5) / VIEW, err: best };
}

/**
 * @param {THREE.Scene} scene
 * @param {{x:number,z:number,yaw:number}} [pose]
 */
export function createArtist(scene, pose = { x: 4.5, z: -6.2, yaw: -2.6 }) {
  const root = new THREE.Group();
  root.name = "artist";
  root.position.set(pose.x, 0, pose.z);
  // Canvas faces opposite the locked view so boardwalk traffic sees the work.
  root.rotation.y = pose.yaw + Math.PI;
  root.userData.kind = "artist";
  root.userData.ageBand = "adult";
  root.userData.paintTarget = false;

  const { group: easel, board } = makeEasel();
  const painter = makePainter();
  painter.position.set(STANCE.x, 0, STANCE.z);
  // YXZ: yaw first, then pitch/roll in his own frame — a lean about the ankles.
  painter.rotation.order = "YXZ";
  painter.rotation.y = Math.PI + STANCE.turn;
  root.add(easel, painter);
  scene.add(root);
  root.updateMatrixWorld(true);

  const viewRT = makeRT(VIEW, VIEW, { depth: true, colorSpace: THREE.SRGBColorSpace });
  const brain = createPaintBrain();
  const paintTex = new THREE.CanvasTexture(brain.canvas);
  paintTex.colorSpace = THREE.SRGBColorSpace;
  paintTex.flipY = true;
  const paintMat = new THREE.MeshBasicMaterial({
    map: paintTex,
    toneMapped: false,
  });
  const canvasMesh = new THREE.Mesh(new THREE.PlaneGeometry(CANVAS_W, CANVAS_H), paintMat);
  canvasMesh.position.copy(board.position);
  canvasMesh.position.z += 0.018;
  canvasMesh.rotation.copy(board.rotation);
  canvasMesh.layers.set(0);
  board.layers.set(0);
  easel.add(canvasMesh);

  const lookX = pose.x + Math.sin(pose.yaw) * 14;
  const lookZ = pose.z + Math.cos(pose.yaw) * 14;
  const eye = new THREE.PerspectiveCamera(42, CANVAS_W / CANVAS_H, 0.28, 90);
  const head = painter.userData.eye.clone();
  painter.localToWorld(head);
  eye.position.set(
    head.x + Math.sin(pose.yaw) * 0.14,
    head.y,
    head.z + Math.cos(pose.yaw) * 0.14
  );
  eye.lookAt(lookX, 1.15, lookZ);
  eye.layers.set(0);
  eye.updateProjectionMatrix();

  const viewPix = new Uint8Array(VIEW * VIEW * 4);
  const wellMeshes = [];
  if (painter.userData.palette) {
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const well = new THREE.Mesh(
        new THREE.SphereGeometry(0.018, 8, 6),
        new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.55 })
      );
      well.position.set(Math.cos(a) * 0.07, 0.012, Math.sin(a) * 0.055);
      painter.userData.palette.add(well);
      wellMeshes.push(well);
    }
  }
  const linen = new THREE.Color(LINEN);
  const sky = new THREE.Color(SKY);
  const prevClear = new THREE.Color();
  const targetUV = new THREE.Vector2(0.5, 0.5);
  const strokeLocal = new THREE.Vector3();
  const strokeWorld = new THREE.Vector3();
  const armWorld = new THREE.Vector3();
  const prevQuat = new THREE.Quaternion();
  const aimQuat = new THREE.Quaternion();
  const arm = painter.userData.arm;
  const brush = painter.userData.brush;
  const limb = painter.userData.limb;
  let inited = false;
  let lastStroke = 0;
  let reach = 0.42;
  let jab = 0;
  let leanX = 0;
  let leanZ = 0;

  function restore(renderer, prevRT, prevAuto, prevAlpha, prevShadow) {
    renderer.shadowMap.enabled = prevShadow;
    renderer.autoClear = prevAuto;
    renderer.setClearColor(prevClear, prevAlpha);
    renderer.setRenderTarget(prevRT);
  }

  function stroke(renderer, scene3) {
    const prevRT = renderer.getRenderTarget();
    const prevAuto = renderer.autoClear;
    const prevAlpha = renderer.getClearAlpha();
    const prevShadow = renderer.shadowMap.enabled;
    renderer.getClearColor(prevClear);

    try {
      renderer.autoClear = true;
      renderer.shadowMap.enabled = false;
      root.visible = false;
      renderer.setRenderTarget(viewRT);
      renderer.setClearColor(sky, 1);
      renderer.render(scene3, eye);
      root.visible = true;
      renderer.readRenderTargetPixels(viewRT, 0, 0, VIEW, VIEW, viewPix);
      const act = brain.step(viewPix, VIEW, VIEW);
      if (act.patch) {
        targetUV.set(act.patch.u, act.patch.v);
        jab = 1;
      }
      paintTex.needsUpdate = true;
      const wells = brain.studio.wells;
      for (let i = 0; i < wellMeshes.length; i++) {
        const w = wells[i];
        const m = wellMeshes[i].material;
        if (w.vol < 0.15) m.color.setHex(0xf4efe4);
        else {
          const rgb = brain.studio.rgbOfWell(i);
          m.color.setRGB(rgb.r / 255, rgb.g / 255, rgb.b / 255);
        }
      }
    } catch (e) {
      console.warn("artist stroke", e);
    }
    restore(renderer, prevRT, prevAuto, prevAlpha, prevShadow);
  }

  function aimBrush() {
    strokeLocal.set((targetUV.x - 0.5) * CANVAS_W, (targetUV.y - 0.5) * CANVAS_H, 0.006);
    canvasMesh.localToWorld(strokeWorld.copy(strokeLocal));

    // Weight shift: he stoops into low strokes and rocks across for wide ones,
    // which is both alive and worth ~0.12 m of extra reach at the corners.
    leanX += (LEAN_PITCH * (0.44 - targetUV.y) - leanX) * 0.07;
    leanZ += (LEAN_ROLL * (targetUV.x - 0.5) - leanZ) * 0.07;
    painter.rotation.x = leanX;
    painter.rotation.z = leanZ;
    painter.updateMatrixWorld(true);

    prevQuat.copy(arm.quaternion);
    arm.lookAt(strokeWorld);
    aimQuat.copy(arm.quaternion);
    arm.quaternion.copy(prevQuat).slerp(aimQuat, 0.2);

    // Extend to put the bristle tip on the canvas, then ease back between
    // strokes so he dabs instead of leaning on it.
    arm.getWorldPosition(armWorld);
    const want = THREE.MathUtils.clamp(armWorld.distanceTo(strokeWorld) - BRUSH_LEN, HAND_MIN, HAND_MAX);
    jab *= 0.82;
    const goal = want - RETRACT * (1 - jab);
    reach += (goal - reach) * 0.34;
    brush.position.z = reach;
    poseLimb(limb, reach, ELBOW_ROLL);
  }

  return {
    root,
    pose,
    tick(renderer, scene3, nowMs) {
      const ios = /iP(hone|ad|od)/.test(navigator.userAgent);
      const gap = ios ? 380 : STROKE_MS;
      if (nowMs - lastStroke >= gap) {
        stroke(renderer, scene3);
        lastStroke = nowMs;
      }
      aimBrush();
    },
  };
}
