/**
 * Shared T-101 endoskeleton. Heavy copper/gold combat chassis: ribbed cage with a
 * see-through spine, solid pelvis, hydraulic limb segments with exposed pivots,
 * fingered hands, plated feet and a jawed skull with deep-set red optics.
 *
 * Origin at the soles, faces +Z, ~1.83 m tall at scale 1.
 * Geometry is cached module-wide so every instance and both body sides share
 * buffers (iPhone-Safari budget: ~5.5k triangles per rig).
 */
import * as THREE from "three";

const COPPER = 0xb87333;
const GOLD = 0xd4a017;
const EYE = 0xff1410;
const DARK_COPPER = 0x6d4423;
const DARK_GOLD = 0x8a6b1c;

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const wrap = (a) => ((a % TAU) + TAU) % TAU;

/* ------------------------------------------------------------------ */
/* shared geometry / material tables                                    */
/* ------------------------------------------------------------------ */

const GEO = new Map();
function geo(key, make) {
  let g = GEO.get(key);
  if (!g) {
    g = make();
    GEO.set(key, g);
  }
  return g;
}
const box = (w, h, d) => geo(`b${w}_${h}_${d}`, () => new THREE.BoxGeometry(w, h, d));
const cyl = (rt, rb, h, s = 10) =>
  geo(`c${rt}_${rb}_${h}_${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s));
const sph = (r, w = 8, h = 6) => geo(`s${r}_${w}_${h}`, () => new THREE.SphereGeometry(r, w, h));
const cap = (r, l, cs = 3, rs = 8) =>
  geo(`p${r}_${l}_${cs}_${rs}`, () => new THREE.CapsuleGeometry(r, l, cs, rs));
const tor = (r, t, rs = 5, ts = 12) =>
  geo(`t${r}_${t}_${rs}_${ts}`, () => new THREE.TorusGeometry(r, t, rs, ts));

const MAT = new Map();
function mat(color, roughness, metalness) {
  const key = `${color}_${roughness}_${metalness}`;
  let m = MAT.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    MAT.set(key, m);
  }
  return m;
}

/** Rib arc from the spine, around the flank, into the sternum. Cached per side. */
function ribGeo(i, y, halfW, front, back, side) {
  return geo(`rib${i}_${side}`, () => {
    const sx = side;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(sx * 0.028, y + 0.012, back),
      new THREE.Vector3(sx * halfW * 0.72, y + 0.014, back * 0.45),
      new THREE.Vector3(sx * halfW, y, front * 0.15),
      new THREE.Vector3(sx * halfW * 0.78, y - 0.03, front * 0.72),
      new THREE.Vector3(sx * 0.042, y - 0.055, front),
    ]);
    return new THREE.TubeGeometry(curve, 7, 0.0165, 5, false);
  });
}

function put(parent, g, m, p, r, s) {
  const o = new THREE.Mesh(g, m);
  if (p) o.position.set(p[0], p[1], p[2]);
  if (r) o.rotation.set(r[0], r[1], r[2]);
  if (s) o.scale.set(s[0], s[1], s[2]);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}

function group(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

/* ------------------------------------------------------------------ */
/* skeleton layout (local units, soles at y = 0)                        */
/* ------------------------------------------------------------------ */

const HIP_Y = 0.95;
const THIGH = 0.44;
const SHIN = 0.37;
const UPPER_ARM = 0.30;
const FOREARM = 0.27;

const RIBS = [
  [0.280, 0.116, 0.112, -0.078],
  [0.223, 0.136, 0.132, -0.088],
  [0.166, 0.148, 0.142, -0.092],
  [0.109, 0.150, 0.142, -0.092],
  [0.052, 0.142, 0.132, -0.086],
  [-0.003, 0.126, 0.112, -0.076],
];

/* ------------------------------------------------------------------ */
/* builders                                                             */
/* ------------------------------------------------------------------ */

function buildPelvis(hips, C, G) {
  put(hips, box(0.27, 0.115, 0.17), C, [0, -0.01, 0]);
  put(hips, cyl(0.062, 0.062, 0.29, 10), C, [0, 0.012, -0.012], [0, 0, Math.PI / 2]);
  // iliac crests — the wide flare that reads as a real pelvis in silhouette
  for (const s of [-1, 1]) {
    put(hips, box(0.055, 0.155, 0.16), G, [s * 0.128, 0.062, -0.005], [0.1, 0, -s * 0.3]);
    put(hips, box(0.035, 0.07, 0.13), C, [s * 0.155, 0.02, 0.005], [0, 0, -s * 0.16]);
  }
  // sacrum + tail plate
  put(hips, box(0.11, 0.16, 0.05), G, [0, 0.03, -0.085]);
  put(hips, box(0.15, 0.07, 0.09), C, [0, -0.07, -0.03]);
  put(hips, tor(0.115, 0.017, 5, 14), G, [0, -0.055, 0.01], [Math.PI / 2, 0, 0], [1.12, 0.9, 1]);
}

function buildLeg(hips, side, C, G, D) {
  const hip = group(hips, side * 0.113, -0.028, 0);
  put(hip, sph(0.072, 8, 6), G);
  put(hip, cyl(0.048, 0.048, 0.09, 8), G, [side * 0.028, 0.006, 0], [0, 0, Math.PI / 2]);

  // femur: main bone + rear hydraulic + front actuator housing
  put(hip, cap(0.062, THIGH - 0.15, 2, 7), C, [0, -THIGH / 2 - 0.01, 0], null, [1, 1, 0.92]);
  put(hip, cyl(0.072, 0.056, 0.12, 9), C, [0, -0.09, 0]);
  put(hip, cyl(0.021, 0.021, THIGH - 0.14, 8), G, [0, -THIGH / 2, -0.052]);
  put(hip, box(0.052, 0.15, 0.048), D, [0, -0.16, 0.05]);
  put(hip, cyl(0.017, 0.017, 0.16, 6), G, [0, -0.3, 0.052]);
  put(hip, box(0.085, 0.05, 0.055), G, [0, -0.375, 0.012]);

  const knee = group(hip, 0, -THIGH, 0);
  put(knee, cyl(0.052, 0.052, 0.098, 10), G, null, [0, 0, Math.PI / 2]);
  put(knee, box(0.072, 0.085, 0.045), C, [0, 0.004, 0.052]);
  put(knee, sph(0.045, 8, 6), D, [0, 0, -0.04]);

  // tibia + fibula strut + calf ram
  put(knee, cap(0.046, SHIN - 0.14, 2, 7), C, [0, -SHIN / 2 - 0.01, 0.006]);
  put(knee, cyl(0.057, 0.04, 0.11, 9), C, [0, -0.075, 0.004]);
  put(knee, cyl(0.016, 0.016, SHIN - 0.11, 6), G, [side * 0.036, -SHIN / 2, -0.012]);
  put(knee, cyl(0.023, 0.023, 0.17, 8), D, [0, -0.135, -0.05]);
  put(knee, cyl(0.017, 0.017, 0.13, 6), G, [0, -0.255, -0.048]);
  put(knee, box(0.075, 0.05, 0.06), G, [0, -0.325, -0.006]);

  const foot = group(knee, 0, -SHIN, 0);
  put(foot, sph(0.043, 8, 6), G);
  put(foot, cyl(0.036, 0.036, 0.078, 8), G, null, [0, 0, Math.PI / 2]);
  put(foot, box(0.062, 0.06, 0.07), C, [0, -0.035, 0.028]); // instep
  put(foot, box(0.086, 0.055, 0.08), C, [0, -0.072, -0.036]); // heel block
  put(foot, box(0.092, 0.045, 0.14), C, [0, -0.086, 0.048]); // sole plate
  put(foot, box(0.082, 0.03, 0.055), G, [0, -0.092, 0.138]); // toe plate
  put(foot, box(0.03, 0.05, 0.05), G, [0, -0.05, -0.062]); // heel spur
  for (const t of [-0.026, 0.026]) put(foot, box(0.022, 0.024, 0.04), D, [t, -0.094, 0.165]);

  return { hip, knee, foot };
}

function buildRibcage(chest, C, G, D) {
  // thoracic column: you can see daylight between the ribs, spine holds it up
  put(chest, cyl(0.028, 0.034, 0.4, 8), D, [0, 0.155, -0.078]);
  for (let i = 0; i < 6; i++) {
    put(chest, cyl(0.046, 0.046, 0.022, 8), G, [0, -0.005 + i * 0.058, -0.078]);
  }
  // sternum stack
  put(chest, box(0.078, 0.31, 0.034), G, [0, 0.128, 0.124]);
  put(chest, box(0.145, 0.06, 0.04), G, [0, 0.276, 0.112]);
  put(chest, box(0.052, 0.07, 0.03), C, [0, -0.035, 0.112]);
  // ribs
  for (let i = 0; i < RIBS.length; i++) {
    const [y, halfW, front, back] = RIBS[i];
    for (const s of [-1, 1]) put(chest, ribGeo(i, y, halfW, front, back, s), G);
  }
  // scapula / back plates keep the silhouette solid from behind
  for (const s of [-1, 1]) {
    put(chest, box(0.115, 0.17, 0.032), C, [s * 0.112, 0.225, -0.086], [0.2, s * 0.25, 0]);
  }
  // clavicle deck
  put(chest, box(0.35, 0.052, 0.11), G, [0, 0.358, 0.03]);
  put(chest, box(0.21, 0.08, 0.13), C, [0, 0.334, -0.018]);
  // abdominal actuator block
  put(chest, box(0.16, 0.09, 0.135), D, [0, -0.072, 0.005]);
}

function buildArm(chest, side, C, G, D) {
  // shoulder mount lives on the chest so there is never a gap at the joint
  put(chest, sph(0.072, 8, 6), G, [side * 0.192, 0.322, 0], null, [1, 0.95, 1]);
  put(chest, cyl(0.026, 0.026, 0.19, 7), G, [side * 0.1, 0.352, 0.02], [0, 0, side * 1.34]);

  const shoulder = group(chest, side * 0.208, 0.312, 0);
  put(shoulder, sph(0.076, 9, 7), C, [0, 0.008, 0], null, [1, 0.92, 1]); // deltoid cowl
  put(shoulder, box(0.055, 0.09, 0.1), C, [side * 0.03, 0.02, 0], [0, 0, -side * 0.2]);

  // humerus + rear piston
  put(shoulder, cap(0.045, UPPER_ARM - 0.13, 2, 7), C, [0, -UPPER_ARM / 2 - 0.005, 0]);
  put(shoulder, cyl(0.052, 0.04, 0.1, 8), C, [0, -0.085, 0]);
  put(shoulder, cyl(0.016, 0.016, UPPER_ARM - 0.11, 6), G, [0, -UPPER_ARM / 2, -0.041]);
  put(shoulder, box(0.038, 0.11, 0.036), D, [0, -0.13, 0.038]);
  put(shoulder, box(0.062, 0.045, 0.05), G, [0, -0.253, 0]);

  const elbow = group(shoulder, 0, -UPPER_ARM, 0);
  put(elbow, cyl(0.038, 0.038, 0.075, 9), G, null, [0, 0, Math.PI / 2]);
  put(elbow, box(0.045, 0.05, 0.045), C, [0, 0.005, -0.035]);

  // ulna + radius
  put(elbow, cap(0.037, FOREARM - 0.12, 2, 7), C, [0, -FOREARM / 2 - 0.005, 0.004]);
  put(elbow, cyl(0.044, 0.032, 0.09, 8), C, [0, -0.06, 0.004]);
  put(elbow, cyl(0.014, 0.014, FOREARM - 0.09, 6), G, [side * 0.028, -FOREARM / 2, -0.014]);
  put(elbow, cyl(0.018, 0.018, 0.12, 6), D, [0, -0.11, 0.036]);
  put(elbow, box(0.05, 0.04, 0.045), G, [0, -FOREARM + 0.03, 0]);

  const hand = group(elbow, 0, -FOREARM, 0);
  put(hand, sph(0.031, 8, 6), G);
  put(hand, box(0.07, 0.085, 0.036), C, [0, -0.055, 0.002]);
  put(hand, box(0.076, 0.03, 0.042), G, [0, -0.095, 0.004]); // knuckle bar
  // four fingers, two segments each, curled forward
  for (let i = 0; i < 4; i++) {
    const fx = (-1.5 + i) * 0.019;
    const f = group(hand, fx, -0.104, 0.006);
    f.rotation.x = -0.22 - i * 0.03;
    put(f, box(0.016, 0.046, 0.02), C, [0, -0.023, 0]);
    const tip = group(f, 0, -0.046, 0);
    tip.rotation.x = -0.55;
    put(tip, box(0.014, 0.038, 0.017), G, [0, -0.019, 0]);
  }
  const thumb = group(hand, side * 0.032, -0.068, 0.02);
  thumb.rotation.set(-0.5, 0, side * 0.5);
  put(thumb, box(0.018, 0.04, 0.02), C, [0, -0.02, 0]);
  put(thumb, box(0.015, 0.032, 0.017), G, [0, -0.05, 0.006], [-0.5, 0, 0]);

  return { shoulder, elbow, hand };
}

function buildHead(neck, C, G, D, eyeMat) {
  const head = group(neck, 0, 0.122, 0);

  // cranium: squared-off dome with an occipital mass behind it
  put(head, sph(0.11, 12, 10), C, [0, 0.028, -0.008], null, [0.88, 0.96, 1.0]);
  put(head, box(0.128, 0.092, 0.09), C, [0, 0.04, -0.058]);
  put(head, box(0.06, 0.028, 0.16), G, [0, 0.108, -0.02]); // crown seam
  for (const s of [-1, 1]) {
    put(head, box(0.018, 0.1, 0.095), C, [s * 0.086, 0.015, -0.012]); // temple slab
    put(head, box(0.014, 0.046, 0.046), G, [s * 0.094, 0.0, -0.018]);
    put(head, cyl(0.019, 0.019, 0.026, 6), G, [s * 0.099, 0.0, -0.018], [0, 0, Math.PI / 2]);
  }

  // brow shelf: the overhang that puts the optics in shadow
  put(head, box(0.178, 0.032, 0.062), G, [0, 0.048, 0.066], [0.16, 0, 0]);
  put(head, box(0.16, 0.026, 0.05), C, [0, 0.072, 0.062], [0.3, 0, 0]);

  // recessed optic band + emitters
  put(head, box(0.052, 0.05, 0.045), D, [-0.047, 0.0, 0.072]);
  put(head, box(0.052, 0.05, 0.045), D, [0.047, 0.0, 0.072]);
  put(head, box(0.034, 0.062, 0.055), C, [0, 0.0, 0.086]); // nose bridge divider
  const eyes = [];
  for (const s of [-1, 1]) {
    put(head, sph(0.03, 8, 6), D, [s * 0.047, 0.0, 0.07], null, [1.1, 0.9, 0.7]);
    put(head, box(0.022, 0.056, 0.05), C, [s * 0.079, 0.0, 0.07], [0, s * 0.3, 0]); // orbital wall
    const e = new THREE.Mesh(sph(0.015, 8, 6), eyeMat);
    e.position.set(s * 0.047, 0.0, 0.082);
    head.add(e);
    eyes.push(e);
  }

  // cheekbones flaring down and out from the sockets
  for (const s of [-1, 1]) {
    put(head, box(0.038, 0.045, 0.062), G, [s * 0.068, -0.042, 0.055], [0, s * 0.18, s * 0.3]);
    put(head, box(0.024, 0.09, 0.06), C, [s * 0.085, -0.03, 0.018], [0, 0, s * 0.16]);
  }

  // nasal cavity + maxilla with a real tooth strip
  put(head, box(0.03, 0.042, 0.03), D, [0, -0.032, 0.096]);
  put(head, box(0.118, 0.044, 0.078), C, [0, -0.058, 0.05]);
  put(head, box(0.108, 0.024, 0.058), G, [0, -0.081, 0.056]);
  for (let i = 0; i < 5; i++) {
    put(head, box(0.006, 0.028, 0.014), D, [(-2 + i) * 0.022, -0.081, 0.082]);
  }
  put(head, cyl(0.021, 0.021, 0.15, 8), G, [0, -0.05, -0.008], [0, 0, Math.PI / 2]); // hinge axle

  const jaw = group(head, 0, -0.048, -0.006);
  put(jaw, box(0.104, 0.05, 0.095), C, [0, -0.05, 0.042]);
  put(jaw, box(0.1, 0.022, 0.055), G, [0, -0.03, 0.066]);
  for (let i = 0; i < 5; i++) {
    put(jaw, box(0.006, 0.026, 0.014), D, [(-2 + i) * 0.021, -0.03, 0.09]);
  }
  put(jaw, box(0.07, 0.046, 0.06), C, [0, -0.076, 0.06]); // chin block
  put(jaw, box(0.03, 0.026, 0.03), G, [0, -0.092, 0.08]);
  for (const s of [-1, 1]) {
    put(jaw, box(0.026, 0.1, 0.05), C, [s * 0.05, -0.016, 0.002], [0, 0, s * 0.13]); // ramus
  }

  return { head, jaw, eyeL: eyes[0], eyeR: eyes[1] };
}

/**
 * @param {{ scale?: number, copper?: number, gold?: number, eye?: number, dark?: boolean }} [opts]
 * @returns {THREE.Group} origin at the soles, faces +Z, userData.rig = joints
 */
export function buildT101(opts = {}) {
  const dark = !!opts.dark;
  const C = mat(opts.copper ?? (dark ? DARK_COPPER : COPPER), 0.3, 0.9);
  const G = mat(opts.gold ?? (dark ? DARK_GOLD : GOLD), 0.24, 0.95);
  const D = mat(dark ? 0x140d0a : 0x2a1a12, 0.62, 0.6);
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x340404,
    emissive: opts.eye ?? EYE,
    emissiveIntensity: 1.6,
    roughness: 0.35,
    metalness: 0.2,
  });

  const root = new THREE.Group();
  root.name = "T101";
  if (opts.scale && opts.scale !== 1) root.scale.setScalar(opts.scale);

  const hips = group(root, 0, HIP_Y, 0);
  buildPelvis(hips, C, G);
  const legL = buildLeg(hips, -1, C, G, D);
  const legR = buildLeg(hips, 1, C, G, D);

  const spine = group(hips, 0, 0.055, -0.005);
  put(spine, cyl(0.03, 0.034, 0.11, 8), D, [0, 0.05, -0.045]);
  for (let i = 0; i < 3; i++) put(spine, cyl(0.044, 0.044, 0.02, 8), G, [0, 0.012 + i * 0.042, -0.045]);
  put(spine, box(0.085, 0.1, 0.07), C, [0, 0.055, 0.015]);

  const chest = group(spine, 0, 0.17, 0.005);
  buildRibcage(chest, C, G, D);
  const armL = buildArm(chest, -1, C, G, D);
  const armR = buildArm(chest, 1, C, G, D);

  const neck = group(chest, 0, 0.418, -0.012);
  put(neck, cyl(0.034, 0.038, 0.145, 8), D, [0, 0.062, 0]);
  for (const s of [-1, 1]) put(neck, cyl(0.013, 0.013, 0.115, 6), G, [s * 0.045, 0.055, 0.012]);
  put(neck, cyl(0.05, 0.05, 0.026, 9), G, [0, 0.015, 0]);
  put(neck, sph(0.042, 8, 6), G, [0, 0.132, 0]);

  const { head, jaw, eyeL, eyeR } = buildHead(neck, C, G, D, eyeMat);

  root.userData.rig = {
    hips,
    spine,
    chest,
    neck,
    head,
    jaw,
    shoulderL: armL.shoulder,
    shoulderR: armR.shoulder,
    elbowL: armL.elbow,
    elbowR: armR.elbow,
    handL: armL.hand,
    handR: armR.hand,
    hipL: legL.hip,
    hipR: legR.hip,
    kneeL: legL.knee,
    kneeR: legR.knee,
    footL: legL.foot,
    footR: legR.foot,
    eyeL,
    eyeR,
    eyeMat,
  };
  root.userData.t101 = { hipY: HIP_Y, eyeBase: 1.6 };
  root.userData.height = 1.83 * (opts.scale || 1);

  poseT101(root, { walkPhase: 0, speed: 0 });
  return root;
}

/* ------------------------------------------------------------------ */
/* pose                                                                 */
/* ------------------------------------------------------------------ */

/** Sole contact candidates in foot-local space: [y, z] of heel, arch, ball, toe. */
const SOLE_PTS = [
  [-0.0995, -0.076],
  [-0.1085, -0.022],
  [-0.1085, 0.118],
  [-0.106, 0.165],
  [-0.106, 0.185],
];
const HIP_OFFSET_Y = -0.028; // hip joints sit this far below the hips group

/** Lowest sole point of a leg, measured from its hip joint. Pure sagittal FK. */
function soleDrop(hipRot, kneeRot, footRot) {
  const a2 = hipRot + kneeRot;
  const a3 = a2 + footRot;
  const y = -THIGH * Math.cos(hipRot) - SHIN * Math.cos(a2);
  const c = Math.cos(a3);
  const sn = Math.sin(a3);
  let lo = Infinity;
  for (let i = 0; i < SOLE_PTS.length; i++) {
    const d = y + SOLE_PTS[i][0] * c - SOLE_PTS[i][1] * sn;
    if (d < lo) lo = d;
  }
  return lo;
}

/**
 * One leg of the gait. `th` is that leg's phase; 0 = heel strike, PI = toe off.
 * Writes the joint rotations and returns the leg's sole drop for pelvis IK.
 */
function poseLeg(hip, knee, foot, th, g, rest, side) {
  const t2 = wrap(th);
  const hipRot = -0.46 * Math.cos(th) * g - 0.05 * g + rest * 0.02;
  let kneeRot;
  let roll;
  let comp;
  if (t2 < Math.PI) {
    // stance: loading-response flex just after heel strike, then straight
    const u = t2 / Math.PI;
    const d = (u - 0.17) / 0.19;
    kneeRot = (0.06 + 0.3 * Math.exp(-d * d) + 0.06 * Math.sin(t2)) * g;
    roll =
      -0.26 * Math.max(0, 1 - u / 0.2) +
      0.66 * Math.pow(Math.max(0, (u - 0.52) / 0.48), 2);
    comp = 0.94;
  } else {
    // swing: big knee flex for clearance, foot stays near level
    const u = (t2 - Math.PI) / Math.PI;
    kneeRot = (0.06 + 0.88 * Math.sin(Math.PI * Math.pow(u, 0.7))) * g;
    roll = 0.66 * Math.max(0, 1 - u / 0.28) - 0.24 * Math.min(1, u / 0.28);
    comp = 0.76;
  }
  kneeRot += rest * 0.06;
  const footRot = clamp(-(hipRot + kneeRot) * comp + roll * g - rest * 0.05, -0.62, 0.82);

  hip.rotation.x = hipRot;
  hip.rotation.z = -side * (0.022 + 0.03 * g * Math.max(0, Math.cos(th)));
  hip.rotation.y = side * 0.03 * g * Math.cos(th);
  knee.rotation.x = kneeRot;
  foot.rotation.x = footRot;
  foot.rotation.z = side * 0.04 * g * Math.sin(th);
  return soleDrop(hipRot, kneeRot, footRot);
}

const _down = new THREE.Vector3(0, -1, 0);
const _aim = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _qAim = new THREE.Quaternion();
const _eul = new THREE.Euler();

function mix(a, b, w) {
  return a * (1 - w) + b * w;
}

/**
 * Slack IK: lean hips/knees/spine, then point the bottle hand at `lotionAim`.
 * Punch keeps priority. `applyT` is seconds spent rubbing (dart + small circles).
 */
function poseLotion(root, r, state) {
  const aim = state.lotionAim;
  const applyT = state.applyT || 0;
  if (!aim || applyT <= 0) return;
  if ((state.punchT || 0) > 0.08) return;
  if (typeof aim.x !== "number" || typeof aim.y !== "number" || typeof aim.z !== "number") return;
  const w = clamp(applyT * 7, 0, 1);

  root.updateMatrixWorld(true);
  _aim.set(aim.x, aim.y, aim.z);
  root.worldToLocal(_aim);
  const rub = applyT * 15.5;
  _aim.x += Math.sin(rub) * 0.038;
  _aim.y += Math.sin(rub * 1.37) * 0.03;
  _aim.z += Math.cos(rub * 0.91) * 0.032;
  const lx = _aim.x;
  const ly = _aim.y;
  const lz = _aim.z;

  const yawK = clamp(Math.atan2(lx, lz), -0.75, 0.75);
  r.hips.rotation.y += yawK * 0.3 * w;
  r.hips.rotation.z += clamp(lx * 0.18, -0.14, 0.14) * w;
  r.spine.rotation.y += yawK * 0.22 * w;
  r.chest.rotation.y += yawK * 0.4 * w;
  r.head.rotation.y += yawK * 0.48 * w;

  const look = clamp((ly - 1.42) * 0.55, -0.72, 0.48);
  r.head.rotation.x += look * w;
  r.neck.rotation.x += look * 0.32 * w;

  const crouch = clamp((0.78 - ly) / 0.72, 0, 1) * w;
  const reachUp = clamp((ly - 1.52) / 0.42, 0, 1) * w;
  r.hips.position.y -= crouch * 0.22 - reachUp * 0.025;
  r.hipL.rotation.x += crouch * 0.52 + reachUp * 0.08;
  r.hipR.rotation.x += crouch * 0.6 + reachUp * 0.1;
  r.kneeL.rotation.x += crouch * 0.86;
  r.kneeR.rotation.x += crouch * 0.94;
  r.spine.rotation.x += (ly < 0.95 ? 0.24 : ly > 1.58 ? -0.2 : 0.05) * w;
  r.chest.rotation.x += (ly > 1.48 ? -0.14 : 0.07) * w;

  root.updateMatrixWorld(true);
  const sh = r.shoulderR;
  const parent = sh.parent;
  if (parent?.worldToLocal) {
    _aim.set(aim.x, aim.y, aim.z);
    parent.updateWorldMatrix(true, false);
    parent.worldToLocal(_aim);
    _dir.set(_aim.x - sh.position.x, _aim.y - sh.position.y, _aim.z - sh.position.z);
  } else {
    _dir.set(lx - sh.position.x, ly - (HIP_Y + 0.53), lz - sh.position.z);
  }
  _dir.x += Math.sin(rub * 1.1) * 0.02;
  _dir.y += Math.cos(rub * 1.65) * 0.022;
  const dist = _dir.length();
  if (dist < 1e-4) return;
  const u = UPPER_ARM;
  const f = FOREARM + 0.07;
  const d = clamp(dist, Math.abs(u - f) + 0.04, (u + f) * 0.995);
  const cosE = clamp((u * u + f * f - d * d) / (2 * u * f), -1, 1);
  const elbow = Math.PI - Math.acos(cosE);
  _dir.normalize();
  _qAim.setFromUnitVectors(_down, _dir);
  _eul.setFromQuaternion(_qAim, "XYZ");
  r.shoulderR.rotation.x = mix(r.shoulderR.rotation.x, _eul.x, w);
  r.shoulderR.rotation.y = mix(r.shoulderR.rotation.y, _eul.y, w);
  r.shoulderR.rotation.z = mix(r.shoulderR.rotation.z, _eul.z, w);
  r.elbowR.rotation.x = mix(r.elbowR.rotation.x, clamp(elbow, 0.12, 2.45), w);
  r.elbowR.rotation.y = mix(r.elbowR.rotation.y, 0, w);
  r.handR.rotation.set(-0.18 + Math.sin(rub) * 0.14, 0.12, 0.22);

  r.shoulderL.rotation.x = mix(r.shoulderL.rotation.x, -0.48 - reachUp * 0.45 + crouch * 0.28, w);
  r.shoulderL.rotation.z = mix(r.shoulderL.rotation.z, -0.44, w);
  r.elbowL.rotation.x = mix(r.elbowL.rotation.x, 0.82 + crouch * 0.38, w);
  r.handL.rotation.set(0.08, 0, -0.12);
}

/** punch shape: -1 wind-up, +1 full extension, 0 neutral. */
function punchCurve(p) {
  if (p <= 0) return 0;
  if (p < 0.3) {
    const u = p / 0.3;
    return -(u * u * (3 - 2 * u));
  }
  if (p < 0.52) {
    const u = (p - 0.3) / 0.22;
    return -1 + 2 * (u * u * (3 - 2 * u));
  }
  if (p < 1) {
    const u = (p - 0.52) / 0.48;
    return 1 - u * u * (3 - 2 * u);
  }
  return 0;
}

/**
 * @param {THREE.Group} rig
 * @param {{ walkPhase?: number, speed?: number, punchT?: number, laserT?: number,
 *           aimYaw?: number, aimPitch?: number,
 *           lotionAim?: { x: number, y: number, z: number }, applyT?: number }} [state]
 */
export function poseT101(rig, state = {}) {
  const r = rig?.userData?.rig;
  if (!r?.hips) return;
  const {
    walkPhase = 0,
    speed = 0,
    punchT = 0,
    laserT = 0,
    aimYaw = 0,
    aimPitch = 0,
  } = state;

  const base = rig.userData.t101 || { hipY: HIP_Y, eyeBase: 1.6 };
  const g = clamp(speed / 2.6, 0, 1);
  const rest = 1 - g;
  const ph = walkPhase;
  const cph = Math.cos(ph);
  const sinP = Math.sin(ph);

  /* ---- legs: right leg strikes at ph = 0, left half a cycle later ---- */
  const breath = Math.sin(ph * 0.32);
  const dropR = poseLeg(r.hipR, r.kneeR, r.footR, ph, g, rest, 1);
  const dropL = poseLeg(r.hipL, r.kneeL, r.footL, ph + Math.PI, g, rest, -1);

  /* ---- pelvis: rides on whichever sole is planted, plus a heavy footfall ---- */
  const plant = Math.pow(Math.abs(cph), 12);
  r.hips.position.y =
    -HIP_OFFSET_Y - Math.min(dropR, dropL) - 0.012 * g * plant + rest * (breath - 1) * 0.004;
  r.hips.position.z = -0.014 * g;
  r.hips.rotation.y = -0.09 * g * cph + rest * Math.sin(ph * 0.27) * 0.03;
  r.hips.rotation.z = 0.05 * g * sinP;
  r.hips.rotation.x = -0.02 * g + 0.025 * g * Math.cos(2 * ph);

  /* ---- spine / chest ---- */
  r.spine.rotation.x = -(0.03 + 0.1 * g) + 0.022 * g * Math.cos(2 * ph) + rest * breath * 0.012;
  r.spine.rotation.z = -0.03 * g * sinP;
  r.spine.rotation.y = 0;

  const chestYaw = 0.115 * g * cph;
  r.chest.rotation.y = chestYaw + rest * Math.sin(ph * 0.27 + 1.4) * 0.02;
  r.chest.rotation.x = 0.018 * g * Math.cos(2 * ph) + rest * breath * 0.01;
  r.chest.rotation.z = -0.03 * g * sinP;

  /* ---- arms: contralateral swing ---- */
  const swingL = -0.55 * g * cph;
  const swingR = 0.55 * g * cph;
  r.shoulderL.rotation.x = swingL + rest * 0.06;
  r.shoulderR.rotation.x = swingR + rest * 0.06;
  r.shoulderL.rotation.z = -(0.115 + 0.05 * g);
  r.shoulderR.rotation.z = 0.115 + 0.05 * g;
  r.shoulderL.rotation.y = -0.05 * g * cph;
  r.shoulderR.rotation.y = 0.05 * g * cph;
  r.elbowL.rotation.x = 0.22 + 0.55 * g * Math.max(0, cph) + rest * 0.06;
  r.elbowR.rotation.x = 0.22 + 0.55 * g * Math.max(0, -cph) + rest * 0.06;
  r.elbowL.rotation.y = 0;
  r.elbowR.rotation.y = 0;
  r.handL.rotation.set(0.12 * g * cph, 0, -0.06);
  r.handR.rotation.set(-0.12 * g * cph, 0, 0.06);

  /* ---- neck / head ---- */
  r.neck.rotation.x = 0.05 + 0.02 * g;
  r.neck.rotation.y = -chestYaw * 0.35;
  r.neck.rotation.z = 0;
  r.head.rotation.x = -0.05 - 0.03 * g - 0.02 * g * Math.cos(2 * ph) + rest * breath * 0.02;
  r.head.rotation.y = -chestYaw * 0.5 + rest * Math.sin(ph * 0.21) * 0.05;
  r.head.rotation.z = 0.02 * g * sinP;
  if (r.jaw) r.jaw.rotation.x = 0.03 + 0.02 * g * plant;

  /* ---- punch (right hand) ---- */
  const p = clamp(punchT, 0, 1);
  if (p > 0) {
    const e = punchCurve(p);
    const w = Math.min(1, Math.abs(e) * 1.6); // blend authority over the swing
    const fwd = Math.max(0, e);
    const back = Math.max(0, -e);

    r.shoulderR.rotation.x = r.shoulderR.rotation.x * (1 - w) + (-1.48 * fwd + 0.62 * back) * w;
    r.shoulderR.rotation.z = r.shoulderR.rotation.z * (1 - w) + (0.1 + 0.12 * back) * w;
    r.shoulderR.rotation.y = r.shoulderR.rotation.y * (1 - w) + -0.22 * fwd * w;
    const elbowPunch = e >= 0 ? 1.5 * (1 - e) + 0.14 : 1.5 + 0.55 * back;
    r.elbowR.rotation.x = r.elbowR.rotation.x * (1 - w) + elbowPunch * w;
    r.handR.rotation.set(-0.1 + 0.25 * fwd, 0, 0.06);

    // guard arm and whole-body torque
    r.shoulderL.rotation.x = r.shoulderL.rotation.x * (1 - w) + (-0.45 * fwd - 0.15 * back) * w;
    r.elbowL.rotation.x = r.elbowL.rotation.x * (1 - w) + (1.35 + 0.2 * back) * w;
    r.chest.rotation.y -= 0.4 * e;
    r.hips.rotation.y -= 0.2 * e;
    r.spine.rotation.x -= 0.13 * fwd - 0.05 * back;
    r.head.rotation.y += 0.16 * e;
    r.hips.position.y -= 0.018 * fwd;
  }

  /* ---- eye laser charge ---- */
  const L = clamp(laserT, 0, 1);
  if (r.eyeMat) {
    const pulse = 0.18 * Math.sin(ph * 2.2);
    const charge = L < 0.65 ? L / 0.65 : 1 - (L - 0.65) / 0.35;
    r.eyeMat.emissiveIntensity = base.eyeBase + pulse + 7.5 * Math.max(0, charge);
  }
  if (L > 0) {
    const tremor = Math.sin(ph * 34) * 0.012 * L;
    r.head.rotation.x = r.head.rotation.x * (1 - L) + (-0.02 + tremor) * L;
    r.head.rotation.z += tremor;
    r.neck.rotation.x = r.neck.rotation.x * (1 - L) + 0.02 * L;
    r.spine.rotation.x += 0.06 * L;
    const s = 1 + 0.35 * L;
    r.eyeL.scale.setScalar(s);
    r.eyeR.scale.setScalar(s);
  } else if (r.eyeL.scale.x !== 1) {
    r.eyeL.scale.setScalar(1);
    r.eyeR.scale.setScalar(1);
  }

  /* ---- aim ---- */
  if (aimYaw) {
    const a = clamp(aimYaw, -1.6, 1.6);
    r.chest.rotation.y += a * 0.35;
    r.hips.rotation.y += a * 0.12;
    r.head.rotation.y += a * 0.55;
  }
  if (aimPitch) {
    const a = clamp(aimPitch, -1.1, 1.1);
    r.head.rotation.x -= a * 0.75;
    r.chest.rotation.x -= a * 0.18;
  }

  poseLotion(rig, r, state);
}
