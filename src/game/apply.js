/**
 * Hold-Space apply: zinc stamps on the facing side of the nearest adult.
 * Kids / gulls / clothed SIGMA / goth never receive coverage.
 */
import {
  applyCoverageToMats,
  coveragePercent,
  ensureCoverageMap,
  hitsCloth,
  isPaintable,
  stampCoverage,
} from "./coverage.js";

const REACH = 2.35;
/** ~1.0 thickness in 0.3 s so zinc reads on the 2D map immediately. */
const RATE = 3.5;
const STAMP_R = 0.22;
const FRONT_U = 0.5;
const FRONT_V = 0.4;
/** Vertical rub on the facing meridian. Cloth centers are skipped. */
const STAMP_V = [0.14, 0.4, 0.68];

function dist2(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}

function wrapPi(a) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

function wrap01(u) {
  return u - Math.floor(u);
}

/**
 * Fake body UV. Front = (0.5, 0.4). Sides from yaw delta or player azimuth.
 * @param {{ x: number, z: number }} playerPos
 * @param {{ position: { x: number, z: number }, rotation: { y: number } }} mesh
 * @param {number} [playerYaw]
 */
export function facingUV(playerPos, mesh, playerYaw) {
  const npcYaw = mesh.rotation.y || 0;
  let delta;
  if (playerYaw != null && Number.isFinite(playerYaw)) {
    delta = wrapPi(playerYaw - npcYaw);
  } else if (playerPos) {
    const dx = playerPos.x - mesh.position.x;
    const dz = playerPos.z - mesh.position.z;
    delta = wrapPi(Math.atan2(dx, dz) - npcYaw);
  } else {
    delta = 0;
  }
  return { u: wrap01(FRONT_U + delta / (Math.PI * 2)), v: FRONT_V };
}

/**
 * Nearest paintable adult inside REACH, or null.
 * @param {{ mesh: object, kind: string, ageBand: string }[]} cast
 * @param {{ x: number, z: number }} playerPos
 */
export function pickApplyTarget(cast, playerPos) {
  let best = null;
  let bestD = REACH * REACH;
  for (const npc of cast) {
    if (!isPaintable(npc)) continue;
    const mesh = npc.mesh;
    if (!mesh) continue;
    const d = dist2(playerPos, mesh.position);
    if (d < bestD) {
      bestD = d;
      best = npc;
    }
  }
  return best;
}

/**
 * @param {{ mesh: object, kind: string, ageBand: string }[]} cast
 * @param {{ x: number, z: number }} playerPos
 * @param {boolean} squeezing
 * @param {number} dt
 * @param {number} [playerYaw] optional — stamp the look-facing meridian
 * @returns {{ npc: object, coverage: number } | null}
 */
export function tickApply(cast, playerPos, squeezing, dt, playerYaw) {
  if (!squeezing) return null;
  const best = pickApplyTarget(cast, playerPos);
  if (!best) return null;

  ensureCoverageMap(best);
  const uv = facingUV(playerPos, best.mesh, playerYaw);
  const amount = Math.min(1, Math.max(0, dt) * RATE);
  let stamped = false;
  for (const v of STAMP_V) {
    if (hitsCloth(best, uv.u, v)) continue;
    stampCoverage(best, uv.u, v, STAMP_R, amount);
    stamped = true;
  }
  if (stamped) applyCoverageToMats(best);
  return { npc: best, coverage: coveragePercent(best) };
}

export { applyCoverageToMats, coveragePercent, ensureCoverageMap, isPaintable, stampCoverage };
