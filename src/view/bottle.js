/**
 * First-person-ish SPF bottle in AUS101's hand.
 * Animates the existing parts.bottle; adds a palm blob scaled by handMl.
 */
import * as THREE from "three";

const ZINC = 0xf3efe4;
const TILT_X = 0.42;
const TILT_Z = 0.48;
const BLOB_POS = { x: 0, y: -0.05, z: 0.032 };

function damp(cur, target, dt, rate) {
  return cur + (target - cur) * (1 - Math.exp(-rate * Math.max(0, dt)));
}

function makeBlob() {
  const blob = new THREE.Mesh(
    new THREE.SphereGeometry(0.016, 8, 6),
    new THREE.MeshStandardMaterial({
      color: ZINC,
      roughness: 0.22,
      metalness: 0.04,
    })
  );
  blob.name = "lotionBlob";
  blob.castShadow = true;
  blob.position.set(BLOB_POS.x, BLOB_POS.y, BLOB_POS.z);
  blob.scale.set(0, 0, 0);
  blob.visible = false;
  return blob;
}

/**
 * @param {THREE.Object3D} aus101Group
 * @returns {THREE.Object3D | null}
 */
export function bindBottle(aus101Group) {
  const bottle = aus101Group?.userData?.parts?.bottle;
  if (!bottle) return null;

  if (!bottle.userData.restRot) {
    bottle.userData.restRot = {
      x: bottle.rotation.x,
      y: bottle.rotation.y,
      z: bottle.rotation.z,
    };
  }

  if (!bottle.userData.palm) {
    const blob = makeBlob();
    const hand = bottle.parent;
    if (hand) hand.add(blob);
    else bottle.add(blob);
    bottle.userData.palm = blob;
  }

  return bottle;
}

/**
 * @param {THREE.Object3D} aus101Group
 * @param {{ squeezing?: boolean, handMl?: number }} lotion
 * @param {number} dt
 */
export function tickBottle(aus101Group, lotion, dt) {
  const bottle = aus101Group?.userData?.parts?.bottle;
  if (!bottle || !lotion) return;
  if (!bottle.userData.palm || !bottle.userData.restRot) bindBottle(aus101Group);

  const rest = bottle.userData.restRot;
  const palm = bottle.userData.palm;
  if (!rest) return;

  const squeeze = lotion.squeezing ? 1 : 0;
  bottle.rotation.x = damp(bottle.rotation.x, rest.x + squeeze * TILT_X, dt, 14);
  bottle.rotation.z = damp(bottle.rotation.z, rest.z + squeeze * TILT_Z, dt, 14);

  if (!palm) return;
  const t = Math.max(0, Math.min(1, (lotion.handMl || 0) / 6));
  palm.visible = t > 0.01;
  const sx = damp(palm.scale.x, t * 1.25, dt, 10);
  const sy = damp(palm.scale.y, t * 0.55, dt, 10);
  const sz = damp(palm.scale.z, t * 1.15, dt, 10);
  palm.scale.set(sx, sy, sz);
}
