/**
 * GTA-style follow camera. Orbit from player.yaw; slight pitch from player.pitch.
 * Mouse / pointer-lock / drag already write yaw/pitch in player.js.
 */
import * as THREE from "three";

const BACK = 4.2;
const HEIGHT = 2.1;
const CHEST = 1.3;
const LERP = 8;
/** Keep the robot on screen — never pitch into dirt or over the crown. */
const PITCH_MIN = -0.36;
const PITCH_MAX = 0.28;

const _desired = new THREE.Vector3();
const _look = new THREE.Vector3();
const _state = { ready: false };

export function createFollowCam() {
  _state.ready = false;
  return {
    offset: new THREE.Vector3(0, HEIGHT, BACK),
    chest: CHEST,
    snap() {
      _state.ready = false;
    },
  };
}

/**
 * @param {THREE.Camera} camera
 * @param {{pos: THREE.Vector3, yaw: number, pitch: number, bob?: number}} player
 * @param {number} dt
 */
export function updateFollowCam(camera, player, dt) {
  const pitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, player.pitch * 0.42));
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const sy = Math.sin(player.yaw);
  const cy = Math.cos(player.yaw);

  // Local offset (0, 2.1, 4.2) in yaw space, then tilt with pitch.
  // yaw=0 faces −Z, so +Z is behind the player.
  const back = BACK * cp;
  const height = Math.max(0.88, HEIGHT - BACK * sp);

  _desired.set(
    player.pos.x + back * sy,
    player.pos.y + height + (player.bob || 0) * 0.2,
    player.pos.z + back * cy
  );

  if (!_state.ready) {
    camera.position.copy(_desired);
    _state.ready = true;
  } else {
    const t = Math.min(1, LERP * Math.max(0, dt));
    camera.position.lerp(_desired, t);
  }

  _look.set(player.pos.x, player.pos.y + CHEST + sp * 0.5, player.pos.z);
  camera.lookAt(_look);
}
