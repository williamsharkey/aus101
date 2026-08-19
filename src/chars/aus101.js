/**
 * AUS101 third-person endoskeleton — copper/gold T-101 tube skeleton, red eyes, SPF bottle.
 * Height ~1.85 m. Origin at feet. Not chrome silver.
 */
import * as THREE from "three";

const COPPER = 0xb87333;
const GOLD = 0xd4a017;
const EYE = 0xff1010;

function metal(color) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.85,
    roughness: 0.35,
  });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** Tube hanging down -Y from a joint group. */
function tube(len, rTop, rBot, mat, segs = 8) {
  const m = shadow(new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, len, segs), mat));
  m.position.y = -len / 2;
  return m;
}

function ball(r, mat, segs = 10) {
  return shadow(new THREE.Mesh(new THREE.SphereGeometry(r, segs, segs), mat));
}

function ribArc(y, halfW, back, front, mat) {
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-halfW * 0.12, y, -back),
    new THREE.Vector3(-halfW, y + 0.01, 0.02),
    new THREE.Vector3(-halfW * 0.18, y - 0.008, front)
  );
  return shadow(new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.011, 5, false), mat));
}

function makeBottle() {
  const bottle = new THREE.Group();
  const body = shadow(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.027, 0.032, 0.13, 10),
      new THREE.MeshStandardMaterial({ color: 0xf3efe4, roughness: 0.48, metalness: 0.05 })
    )
  );
  const band = shadow(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.033, 0.033, 0.046, 10),
      new THREE.MeshStandardMaterial({ color: 0xc8402e, roughness: 0.55 })
    )
  );
  band.position.y = 0.01;
  const cap = shadow(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.017, 0.02, 0.028, 8),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.2 })
    )
  );
  cap.position.y = 0.078;
  bottle.add(body, band, cap);
  bottle.rotation.z = 0.35;
  bottle.rotation.x = 0.15;
  bottle.position.set(0.02, -0.04, 0.02);
  return bottle;
}

function makeSkull(copper, gold) {
  const skull = new THREE.Group();
  const cranium = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), copper));
  cranium.scale.set(0.9, 1.02, 1.08);
  cranium.position.y = 0.02;
  const brow = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.028, 0.07), gold));
  brow.position.set(0, 0.045, 0.08);
  const jaw = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.055, 0.11), copper));
  jaw.position.set(0, -0.095, 0.025);
  const chin = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), copper));
  chin.position.set(0, -0.125, 0.06);
  const teeth = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.018, 0.03), gold));
  teeth.position.set(0, -0.078, 0.085);

  const eyes = new THREE.Group();
  const glow = new THREE.MeshBasicMaterial({ color: EYE });
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x1a0a08, roughness: 0.8, metalness: 0.2 });
  for (const x of [-0.042, 0.042]) {
    const socket = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), socketMat));
    socket.position.set(x, 0.018, 0.09);
    socket.scale.set(1, 0.85, 0.55);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), glow);
    eye.position.set(x, 0.018, 0.108);
    eyes.add(socket, eye);
  }

  skull.add(cranium, brow, jaw, chin, teeth, eyes);
  return { skull, eyes };
}

function makeRibcage(copper, gold) {
  const cage = new THREE.Group();
  const spine = tube(0.5, 0.026, 0.032, copper, 8);
  spine.position.y = 0.25;
  cage.add(spine);
  const sternum = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.32, 0.018), gold));
  sternum.position.set(0, 0.22, 0.155);
  cage.add(sternum);

  const ribs = [
    [0.38, 0.17, 0.12, 0.17],
    [0.3, 0.165, 0.125, 0.175],
    [0.22, 0.155, 0.13, 0.17],
    [0.14, 0.14, 0.12, 0.155],
    [0.06, 0.12, 0.1, 0.13],
  ];
  for (const [y, halfW, back, front] of ribs) {
    const left = ribArc(y, halfW, back, front, gold);
    const right = ribArc(y, halfW, back, front, gold);
    right.scale.x = -1;
    cage.add(left, right);
  }
  return cage;
}

/**
 * Hierarchical T-101: tubes + ball joints, origin at the soles.
 * @returns {THREE.Group}
 */
export function createAus101() {
  const copper = metal(COPPER);
  const gold = metal(GOLD);
  const root = new THREE.Group();
  root.name = "AUS101";

  const hips = new THREE.Group();
  hips.position.y = 0.94;
  const pelvis = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), copper));
  pelvis.scale.set(1.35, 0.7, 1.05);
  hips.add(pelvis);
  const pelvicRing = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.016, 6, 14), gold));
  pelvicRing.rotation.x = Math.PI / 2;
  pelvicRing.scale.set(1.15, 0.85, 1);
  hips.add(pelvicRing);

  function makeLeg(side) {
    const x = side * 0.11;
    const hip = new THREE.Group();
    hip.position.set(x, 0, 0);
    hip.add(ball(0.055, gold));

    const thigh = new THREE.Group();
    thigh.add(tube(0.45, 0.042, 0.05, copper));
    const knee = ball(0.048, gold);
    knee.position.y = -0.45;
    thigh.add(knee);

    const shin = new THREE.Group();
    shin.position.y = -0.45;
    shin.add(tube(0.42, 0.032, 0.038, copper));
    const ankle = ball(0.038, gold);
    ankle.position.y = -0.42;
    shin.add(ankle);

    const foot = new THREE.Group();
    foot.position.y = -0.42;
    const sole = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.16), copper));
    sole.position.set(0, -0.045, 0.04);
    const toe = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), gold));
    toe.position.set(0, -0.04, 0.11);
    foot.add(sole, toe);

    shin.add(foot);
    thigh.add(shin);
    hip.add(thigh);
    hips.add(hip);
    return { thigh, shin, foot };
  }

  const leftLeg = makeLeg(-1);
  const rightLeg = makeLeg(1);

  const torso = new THREE.Group();
  torso.position.y = 0.04;
  const cage = makeRibcage(copper, gold);
  torso.add(cage);

  const clav = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.38, 8), gold));
  clav.rotation.z = Math.PI / 2;
  clav.position.y = 0.52;
  torso.add(clav);

  function makeArm(side) {
    const armRoot = new THREE.Group();
    armRoot.position.set(side * 0.2, 0.52, 0);
    armRoot.add(ball(0.05, gold));

    const upper = new THREE.Group();
    upper.rotation.z = side * 0.12;
    upper.add(tube(0.28, 0.03, 0.038, copper));
    const elbow = ball(0.04, gold);
    elbow.position.y = -0.28;
    upper.add(elbow);

    const forearm = new THREE.Group();
    forearm.position.y = -0.28;
    forearm.add(tube(0.24, 0.024, 0.03, copper));
    const wrist = ball(0.032, gold);
    wrist.position.y = -0.24;
    forearm.add(wrist);

    const hand = new THREE.Group();
    hand.position.y = -0.24;
    const palm = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.035), copper));
    palm.position.y = -0.05;
    hand.add(palm);

    forearm.add(hand);
    upper.add(forearm);
    armRoot.add(upper);
    torso.add(armRoot);
    return { upper, forearm, hand };
  }

  const leftArm = makeArm(-1);
  const rightArm = makeArm(1);

  const bottle = makeBottle();
  rightArm.hand.add(bottle);

  const neck = tube(0.1, 0.028, 0.032, copper, 8);
  neck.position.y = 0.57;
  torso.add(neck);
  const neckBall = ball(0.04, gold);
  neckBall.position.y = 0.62;
  torso.add(neckBall);

  const { skull, eyes } = makeSkull(copper, gold);
  skull.position.y = 0.74;
  torso.add(skull);

  hips.add(torso);
  root.add(hips);

  root.userData.parts = {
    leftFoot: leftLeg.foot,
    rightFoot: rightLeg.foot,
    eyes,
    bottle,
    hips,
    torso,
    skull,
    leftThigh: leftLeg.thigh,
    rightThigh: rightLeg.thigh,
    leftShin: leftLeg.shin,
    rightShin: rightLeg.shin,
    leftUpperArm: leftArm.upper,
    rightUpperArm: rightArm.upper,
    leftForearm: leftArm.forearm,
    rightForearm: rightArm.forearm,
  };
  root.userData.height = 1.85;
  poseAus101(root, { walkPhase: 0, speed: 0 });
  return root;
}

/**
 * Opposite arm/leg walk. `walkPhase` in radians. `speed` ~0 holds idle.
 * @param {THREE.Group} rig
 * @param {{ walkPhase?: number, speed?: number }} pose
 */
export function poseAus101(rig, { walkPhase = 0, speed = 0 } = {}) {
  const p = rig.userData.parts;
  if (!p?.leftThigh) return;

  const amp = Math.min(1, Math.max(0, speed) / 3.2);
  const idle = amp < 0.05;
  const swing = idle ? 0 : Math.sin(walkPhase);
  const a = idle ? 0 : amp;

  const breath = idle ? Math.sin(walkPhase * 0.45) * 0.02 : 0;
  p.hips.position.y = 0.94 + (idle ? breath * 0.4 : Math.abs(Math.sin(walkPhase * 2)) * 0.03 * a);
  p.hips.rotation.y = idle ? Math.sin(walkPhase * 0.35) * 0.04 : swing * 0.08 * a;
  p.torso.rotation.x = idle ? breath : -Math.abs(swing) * 0.04 * a;
  p.torso.rotation.y = idle ? 0 : -swing * 0.06 * a;

  // Positive rot.x on a -Y limb swings toward -Z; face is +Z, so forward is negative rot.x.
  p.leftThigh.rotation.x = idle ? 0.02 : -swing * 0.55 * a;
  p.rightThigh.rotation.x = idle ? 0.02 : swing * 0.55 * a;
  p.leftShin.rotation.x = idle ? 0.04 : Math.max(0, swing) * 0.7 * a;
  p.rightShin.rotation.x = idle ? 0.04 : Math.max(0, -swing) * 0.7 * a;
  p.leftFoot.rotation.x = idle ? -0.02 : -Math.max(0, swing) * 0.25 * a;
  p.rightFoot.rotation.x = idle ? -0.02 : -Math.max(0, -swing) * 0.25 * a;

  p.leftUpperArm.rotation.x = idle ? 0.1 : swing * 0.5 * a + 0.08;
  p.rightUpperArm.rotation.x = idle ? 0.18 : -swing * 0.45 * a + 0.16;
  p.leftForearm.rotation.x = idle ? 0.12 : 0.12 + Math.max(0, -swing) * 0.2 * a;
  p.rightForearm.rotation.x = idle ? 0.32 : 0.28 + Math.max(0, swing) * 0.15 * a;

  if (p.skull) p.skull.rotation.x = idle ? breath * 0.4 : 0;
}
