/**
 * AUS101 third-person player rig — the shared T-101 endoskeleton in player
 * colours (copper body, gold hardware, red optics) plus the SPF bottle in the
 * right hand. Height ~1.85 m, origin at the feet. Not chrome silver.
 */
import * as THREE from "three";
import { buildT101, poseT101 } from "./t101.js";

const COPPER = 0xb87333;
const GOLD = 0xd4a017;
const EYE = 0xff1010;

function makeBottle() {
  const bottle = new THREE.Group();
  const shadow = (m) => {
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  };
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
  bottle.name = "spfBottle";
  bottle.rotation.z = 0.35;
  bottle.rotation.x = 0.15;
  bottle.position.set(0.012, -0.105, 0.055);
  return bottle;
}

/**
 * Player endoskeleton. `userData.rig` holds the shared T-101 joints;
 * `userData.parts` keeps the legacy aliases that view/bottle.js binds to.
 * @returns {THREE.Group}
 */
export function createAus101() {
  const root = buildT101({ copper: COPPER, gold: GOLD, eye: EYE });
  root.name = "AUS101";
  const r = root.userData.rig;

  // SPF bottle rides in the right hand; bottle.js parents the lotion blob to
  // bottle.parent, so the hand joint has to be the bottle's parent.
  const bottle = makeBottle();
  r.handR.add(bottle);

  const eyes = new THREE.Group();
  eyes.name = "aus101Eyes";
  r.head.add(eyes);

  root.userData.parts = {
    bottle,
    eyes,
    eyeL: r.eyeL,
    eyeR: r.eyeR,
    eyeMat: r.eyeMat,
    hips: r.hips,
    torso: r.chest,
    spine: r.spine,
    chest: r.chest,
    neck: r.neck,
    skull: r.head,
    head: r.head,
    leftFoot: r.footL,
    rightFoot: r.footR,
    leftThigh: r.hipL,
    rightThigh: r.hipR,
    leftShin: r.kneeL,
    rightShin: r.kneeR,
    leftUpperArm: r.shoulderL,
    rightUpperArm: r.shoulderR,
    leftForearm: r.elbowL,
    rightForearm: r.elbowR,
    leftHand: r.handL,
    rightHand: r.handR,
  };
  root.userData.height = 1.85;
  poseAus101(root, { walkPhase: 0, speed: 0 });
  return root;
}

/**
 * Delegates to the shared endoskeleton pose. `walkPhase` in radians, `speed`
 * in m/s (~0 holds idle). The combat channels are optional and pass through.
 * @param {THREE.Group} rig
 * @param {{ walkPhase?: number, speed?: number, punchT?: number, laserT?: number,
 *           aimYaw?: number, aimPitch?: number }} [state]
 */
export function poseAus101(rig, state = {}) {
  poseT101(rig, state);
}
