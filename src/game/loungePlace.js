/**
 * Lie the T-101 root on a sun lounger. Feet at local (0, y, footZ), YXZ
 * supine so the head goes toward the backrest (−Z), not off the foot end.
 */
import * as THREE from "three";

const LIE_X = -Math.PI / 2 + 0.08;
const _foot = new THREE.Vector3();
const _eul = new THREE.Euler();

/**
 * @param {THREE.Object3D} mesh
 * @param {{ group?: THREE.Object3D, seat?: { y?: number, footZ?: number } }} sit
 */
export function placeLoungeRig(mesh, sit) {
  const g = sit?.group;
  if (!mesh || !g) return;
  const seat = sit.seat || g.userData?.seat || {};
  const y = seat.y ?? 0.48;
  const footZ = seat.footZ ?? 0.62;
  g.updateMatrixWorld(true);
  _foot.set(0, y, footZ);
  g.localToWorld(_foot);
  mesh.position.copy(_foot);
  _eul.setFromRotationMatrix(g.matrixWorld, "YXZ");
  mesh.rotation.order = "YXZ";
  // World yaw only — extra +π puts the body past the foot rail.
  mesh.rotation.set(LIE_X, _eul.y, 0);
}

/** Restore standing Euler order after leaving a lounger. */
export function resetStand(mesh) {
  if (!mesh) return;
  mesh.rotation.order = "XYZ";
  mesh.rotation.x = 0;
  mesh.rotation.z = 0;
}
