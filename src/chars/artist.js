/**
 * Beach painter: locks a viewpoint, maps that view onto a blank canvas
 * (view UV == canvas UV), then forever stamps a stroke at the largest
 * view-vs-canvas RGB error.
 */
import * as THREE from "three";

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
const BRUSH_LEN = 0.3;
const RETRACT = 0.075;
const ELBOW_ROLL = 0.55;

/** Painter's stance in easel-local space (easel sits at the artist root origin). */
const STANCE = { x: 0.36, z: 0.62, turn: 0.22 };

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
  const thumb = part(GEO.box, skinM, 0.024, 0.024, 0.056);
  thumb.position.set(flip * 0.042, 0.006, 0.05);
  thumb.rotation.y = flip * -0.35;
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
  const { headR, neckH, shoulderW, chestW, chestD, hipW, armR, legR, footH } = BODY;
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
  const pelvis = part(GEO.box, pants, hipW, 0.18, chestD * 0.95);
  pelvis.position.y = hipY;
  g.add(pelvis);

  const belt = part(GEO.box, std(0x4a3a24, { roughness: 0.7 }), hipW * 1.03, 0.045, chestD * 0.99);
  belt.position.y = hipY + 0.085;
  g.add(belt);

  const torso = part(GEO.box, shirt, chestW, torsoH, chestD);
  torso.position.y = hipY + torsoH * 0.5 - 0.01;
  g.add(torso);

  // Shoulders: a clavicle slab plus deltoid balls, so the arms seat in the body.
  const clav = part(GEO.box, shirt, shoulderW * 0.9, 0.09, chestD * 0.9);
  clav.position.y = shoulderY;
  g.add(clav);
  for (const side of [-1, 1]) {
    const delt = part(GEO.sphere, shirt, 0.075, 0.07, chestD * 0.5);
    delt.position.set(side * shoulderW * 0.44, shoulderY - 0.01, 0);
    g.add(delt);
  }

  const collar = part(GEO.cyl12, shirt, 0.072, 0.05, 0.072);
  collar.position.y = shoulderY + 0.035;
  g.add(collar);

  const neck = part(GEO.cyl, skin, 0.045, neckH, 0.045);
  neck.position.y = shoulderY + neckH * 0.45;
  g.add(neck);

  // Splashes of paint on the shirt.
  for (const [dx, dy, col] of [
    [-0.06, -0.1, 0xc8402e],
    [0.05, -0.19, 0x2f6f9a],
    [0.09, -0.05, 0xd4a017],
  ]) {
    const dab = part(GEO.sphere, std(col, { roughness: 0.6 }), 0.018, 0.024, 0.008);
    dab.position.set(dx, shoulderY + dy, chestD * 0.5);
    g.add(dab);
  }

  // ---- head --------------------------------------------------------------
  const head = new THREE.Group();
  head.position.y = headY;
  head.rotation.y = -STANCE.turn; // square his gaze with the locked view
  const skull = part(GEO.sphereHi, skin, headR, headR * 1.06, headR * 1.02);
  head.add(skull);
  const jaw = part(GEO.box, skin, headR * 1.1, headR * 0.6, headR * 1.2);
  jaw.position.set(0, -headR * 0.5, headR * 0.1);
  head.add(jaw);
  const nose = part(GEO.cone, skin, 0.02, 0.045, 0.02);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.012, headR * 0.92);
  head.add(nose);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, eyeM, 0.016);
    eye.position.set(side * 0.042, 0.016, headR * 0.82);
    head.add(eye);
    const ear = part(GEO.sphere, skin, 0.012, 0.026, 0.02);
    ear.position.set(side * headR * 0.98, -0.008, 0);
    head.add(ear);
  }

  // Hair: a full cap over the crown (nothing bald peeks out under the brim)
  // plus a fringe and a nape tuft.
  const hairCap = part(GEO.sphereHi, hairM, headR * 1.09, headR * 1.02, headR * 1.11);
  hairCap.position.y = headR * 0.16;
  head.add(hairCap);
  const fringe = part(GEO.box, hairM, headR * 1.5, 0.03, 0.035);
  fringe.position.set(0, headR * 0.42, headR * 0.86);
  fringe.rotation.x = 0.25;
  head.add(fringe);
  const nape = part(GEO.sphere, hairM, headR * 0.95, headR * 0.7, headR * 0.6);
  nape.position.set(0, -headR * 0.25, -headR * 0.62);
  head.add(nape);
  for (const side of [-1, 1]) {
    const burn = part(GEO.box, hairM, 0.022, 0.05, 0.03);
    burn.position.set(side * headR * 0.94, -headR * 0.18, -headR * 0.12);
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
  arm.position.set(shoulderW * 0.5, shoulderY, 0.02);
  const brush = makeBrush(skin);
  brush.position.z = 0.46;
  arm.add(brush);
  poseLimb(limb, 0.46, ELBOW_ROLL);
  g.add(arm);

  // ---- palette arm (static, bent, hand under the palette) ----------------
  const pShoulder = new THREE.Vector3(-shoulderW * 0.5, shoulderY, 0.02);
  const pElbow = new THREE.Vector3(-0.255, 1.145, 0.035);
  const pHand = new THREE.Vector3(-0.145, 1.055, 0.235);
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

  const palHand = makeFlatHand(skin, -1);
  palHand.position.copy(pHand);
  palHand.rotation.set(-0.15, 0.55, 0.25);
  g.add(palHand);

  const palette = new THREE.Group();
  palette.position.set(-0.115, 1.088, 0.275);
  palette.rotation.set(-1.24, 0.18, -0.3);
  const disc = part(GEO.cyl12, std(0xcbb896, { roughness: 0.7 }), 0.105, 0.012, 0.085);
  disc.rotation.x = Math.PI / 2;
  palette.add(disc);
  for (const [ox, oy, col] of [
    [-0.05, 0.028, 0xc8402e],
    [-0.012, 0.045, 0x2f6f9a],
    [0.03, 0.03, 0xd4a017],
    [0.05, -0.012, 0x3a7a3a],
    [0.012, -0.038, 0xe8e2d2],
    [-0.04, -0.028, 0x6a3a8a],
  ]) {
    const dab = part(GEO.sphere, std(col, { roughness: 0.5 }), 0.017, 0.017, 0.008);
    dab.position.set(ox, oy, 0.01);
    palette.add(dab);
  }
  g.add(palette);

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
  painter.rotation.y = Math.PI + STANCE.turn;
  root.add(easel, painter);
  scene.add(root);
  root.updateMatrixWorld(true);

  const viewRT = makeRT(VIEW, VIEW, { depth: true, colorSpace: THREE.SRGBColorSpace });
  const paintRT = makeRT(PAINT, PAINT, { depth: false, colorSpace: THREE.SRGBColorSpace });
  const errRT = makeRT(VIEW, VIEW, { depth: false, colorSpace: THREE.NoColorSpace });

  const paintMat = new THREE.MeshBasicMaterial({
    map: paintRT.texture,
    toneMapped: false,
  });
  const canvasMesh = new THREE.Mesh(new THREE.PlaneGeometry(CANVAS_W, CANVAS_H), paintMat);
  canvasMesh.position.copy(board.position);
  canvasMesh.position.z += 0.018;
  canvasMesh.rotation.copy(board.rotation);
  canvasMesh.layers.set(LAYER_PAINT);
  canvasMesh.layers.enable(0);
  board.layers.set(LAYER_PAINT);
  board.layers.enable(0);
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

  const blitCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const errMat = new THREE.ShaderMaterial({
    uniforms: {
      viewMap: { value: viewRT.texture },
      paintMap: { value: paintRT.texture },
    },
    vertexShader: QUAD_VERT,
    fragmentShader: ERR_FRAG,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const errScene = new THREE.Scene();
  errScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), errMat));

  const stampMat = new THREE.ShaderMaterial({
    uniforms: {
      viewMap: { value: viewRT.texture },
      center: { value: new THREE.Vector2(0.5, 0.5) },
      radius: { value: BRUSH_UV },
      amount: { value: 0.7 },
    },
    vertexShader: QUAD_VERT,
    fragmentShader: STAMP_FRAG,
    transparent: true,
    blending: THREE.NormalBlending,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const stampScene = new THREE.Scene();
  stampScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), stampMat));

  const errPix = new Uint8Array(VIEW * VIEW * 4);
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
  let reach = 0.46;
  let jab = 0;

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

    renderer.autoClear = true;
    renderer.shadowMap.enabled = false;

    if (!inited) {
      renderer.setRenderTarget(paintRT);
      renderer.setClearColor(linen, 1);
      renderer.clear();
      inited = true;
    }

    // He paints the beach, not his own kit: the easel, canvas and painter
    // himself all sit between the locked eye and the view.
    root.visible = false;
    renderer.setRenderTarget(viewRT);
    renderer.setClearColor(sky, 1);
    renderer.render(scene3, eye);
    root.visible = true;

    renderer.setRenderTarget(errRT);
    renderer.setClearColor(0x000000, 1);
    renderer.render(errScene, blitCam);
    renderer.readRenderTargetPixels(errRT, 0, 0, VIEW, VIEW, errPix);

    const hit = maxErrorUV(errPix);
    targetUV.set(hit.u, hit.v);
    jab = 1;

    stampMat.uniforms.center.value.set(hit.u, hit.v);
    stampMat.uniforms.radius.value = BRUSH_UV * (0.72 + Math.random() * 0.5);
    stampMat.uniforms.amount.value = 0.58 + Math.min(0.36, hit.err / 90000);

    renderer.autoClear = false;
    renderer.setRenderTarget(paintRT);
    renderer.render(stampScene, blitCam);

    restore(renderer, prevRT, prevAuto, prevAlpha, prevShadow);
  }

  function aimBrush() {
    strokeLocal.set((targetUV.x - 0.5) * CANVAS_W, (targetUV.y - 0.5) * CANVAS_H, 0.02);
    canvasMesh.localToWorld(strokeWorld.copy(strokeLocal));
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
      if (!ios && nowMs - lastStroke >= STROKE_MS) {
        stroke(renderer, scene3);
        lastStroke = nowMs;
      }
      aimBrush();
    },
  };
}
