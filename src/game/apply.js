/**
 * Hold-Space apply: zinc film on the nearest adult paint target.
 * Kids / gulls / clothed SIGMA never receive coverage.
 */
import * as THREE from "three";

const REACH = 2.35;
const RATE = 0.38;
const ZINC = new THREE.Color(0xf3efe4);

function dist2(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}

function paintMats(npc, coverage) {
  const mats = npc.userData.skinMats;
  const bare = npc.userData.bareColor;
  if (!mats || !bare) return;
  const t = Math.min(1, Math.max(0, coverage));
  for (const m of mats) {
    m.color.copy(bare).lerp(ZINC, t * 0.72);
    m.roughness = 0.68 * (1 - t) + 0.26 * t;
    m.metalness = 0.04 + t * 0.08;
  }
}

/**
 * @param {{ mesh: THREE.Object3D, kind: string, ageBand: string }[]} cast
 * @param {THREE.Vector3} playerPos
 * @param {boolean} squeezing
 * @param {number} dt
 */
export function tickApply(cast, playerPos, squeezing, dt) {
  if (!squeezing) return null;
  let best = null;
  let bestD = REACH * REACH;
  for (const npc of cast) {
    if (npc.ageBand !== "adult") continue;
    if (npc.mesh.userData.paintTarget === false) continue;
    if (npc.kind === "sigma_07" || npc.kind === "goth") continue;
    const d = dist2(playerPos, npc.mesh.position);
    if (d < bestD) {
      bestD = d;
      best = npc;
    }
  }
  if (!best) return null;
  const u = best.mesh.userData;
  u.coverage = Math.min(1, (u.coverage || 0) + dt * RATE);
  paintMats(best.mesh, u.coverage);
  return best;
}
