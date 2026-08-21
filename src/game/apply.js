/**
 * Hold-Space apply: zinc stamps on the facing side of the nearest paint target,
 * plus a darting chase stamp on the least-covered skin UV. Gulls stay dry.
 * Nested rigs (piano, DJ, synth, artist) use world XZ.
 */
import {
  applyCoverageToMats,
  coveragePercent,
  ensureCoverageMap,
  findUnpaintedSample,
  hitsCloth,
  isPaintable,
  stampCoverage,
} from "./coverage.js";
import { blocked } from "../input/player.js";

const REACH = 2.35;
/** ~1.0 thickness in 0.3 s so zinc reads on the 2D map immediately. */
const RATE = 3.5;
const STAMP_R = 0.22;
const CHASE_R = 0.14;
const FRONT_U = 0.5;
const FRONT_V = 0.4;
/** Vertical rub on the facing meridian. Cloth centers are skipped. */
const STAMP_V = [0.14, 0.4, 0.68];
/** Side lobes so a frontal hold also reaches the 2D-map arms. */
const STAMP_U_OFF = [0, 0.3, -0.3];
/** Horizontal distance from player to the skin point the arm can work. */
const ARM_HORIZ = 0.95;
const STAND_R = 0.84;
const STEP_SPEED = 2.35;
const YAW_RATE = 5.8;
const RETARGET = 0.2;

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

const _wp = { x: 0, y: 0, z: 0 };

function worldPos(mesh, out = _wp) {
  if (mesh && typeof mesh.updateWorldMatrix === "function") mesh.updateWorldMatrix(true, false);
  const e = mesh?.matrixWorld?.elements;
  if (e) {
    out.x = e[12];
    out.y = e[13];
    out.z = e[14];
    return out;
  }
  const p = mesh?.position;
  out.x = p?.x || 0;
  out.y = p?.y || 0;
  out.z = p?.z || 0;
  return out;
}

function worldYaw(mesh) {
  const e = mesh?.matrixWorld?.elements;
  if (e) return Math.atan2(e[8], e[10]);
  return mesh?.rotation?.y || 0;
}

const chase = {
  npc: null,
  u: FRONT_U,
  v: FRONT_V,
  wait: 0,
  salt: 0,
  primed: false,
  world: { x: 0, y: 1.1, z: 0, nx: 0, ny: 0.1, nz: 1 },
};

function heightOf(mesh) {
  const body = mesh?.userData?.body;
  if (body?.headY) return body.headY + (body.headR || 0.12);
  const h = mesh?.userData?.height;
  return Number.isFinite(h) && h > 0.4 ? h : 1.7;
}

function radiusAt(v, u) {
  let rad = 0.14;
  if (v < 0.12) rad = 0.07;
  else if (v < 0.36) rad = 0.09;
  else if (v < 0.52) rad = 0.15;
  else if (v < 0.78) rad = 0.16;
  else if (v < 0.86) rad = 0.07;
  else rad = 0.11;
  const uu = wrap01(u);
  if (v > 0.38 && v < 0.64) {
    const arm = Math.min(Math.abs(uu - 0.22), Math.abs(uu - 0.78));
    if (arm < 0.12) rad = 0.26;
  }
  return rad;
}

function yAt(mesh, v) {
  const body = mesh?.userData?.body;
  const h = heightOf(mesh);
  if (!body) return v * h;
  const hip = body.hipY || 0.52 * h;
  const sh = body.shoulderY || 0.82 * h;
  const hd = body.headY || h - 0.13;
  if (v < 0.38) return (v / 0.38) * hip;
  if (v < 0.72) return hip + ((v - 0.38) / 0.34) * (sh - hip);
  if (v < 0.86) return sh + ((v - 0.72) / 0.14) * (hd - sh);
  return hd + ((v - 0.86) / 0.14) * (body.headR || 0.12);
}

/**
 * Fake-atlas UV → world point + outward normal. Cylinder unwrap: u=0.5 is
 * the mesh front (+Z local), v=0 feet, v=1 head.
 * @param {object} mesh
 * @param {number} u
 * @param {number} v
 * @param {{ x:number, y:number, z:number, nx:number, ny:number, nz:number }} [out]
 */
export function uvToWorld(mesh, u, v, out) {
  const dst = out || { x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 1 };
  const p = worldPos(mesh);
  const yaw = worldYaw(mesh);
  const rad = radiusAt(v, u);
  const theta = (wrap01(u) - FRONT_U) * Math.PI * 2;
  const lx = rad * Math.sin(theta);
  const lz = rad * Math.cos(theta);
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  dst.x = p.x + lx * c + lz * s;
  dst.z = p.z - lx * s + lz * c;
  dst.y = p.y + yAt(mesh, v);
  const nx = Math.sin(theta);
  const nz = Math.cos(theta);
  dst.nx = nx * c + nz * s;
  dst.nz = -nx * s + nz * c;
  dst.ny = v > 0.8 ? 0.38 : v < 0.18 ? -0.04 : 0.06;
  const nl = Math.hypot(dst.nx, dst.ny, dst.nz) || 1;
  dst.nx /= nl;
  dst.ny /= nl;
  dst.nz /= nl;
  return dst;
}

function dampChase(pt, dt) {
  const w = chase.world;
  if (!chase.primed) {
    w.x = pt.x;
    w.y = pt.y;
    w.z = pt.z;
    w.nx = pt.nx;
    w.ny = pt.ny;
    w.nz = pt.nz;
    chase.primed = true;
    return w;
  }
  const k = 1 - Math.exp(-16 * Math.max(0, dt));
  w.x += (pt.x - w.x) * k;
  w.y += (pt.y - w.y) * k;
  w.z += (pt.z - w.z) * k;
  w.nx += (pt.nx - w.nx) * k;
  w.ny += (pt.ny - w.ny) * k;
  w.nz += (pt.nz - w.nz) * k;
  return w;
}

/**
 * Fake body UV. Front = (0.5, 0.4). Sides from yaw delta or player azimuth.
 * @param {{ x: number, z: number }} playerPos
 * @param {{ position: { x: number, z: number }, rotation: { y: number } }} mesh
 * @param {number} [playerYaw]
 */
export function facingUV(playerPos, mesh, playerYaw) {
  const npcYaw = worldYaw(mesh);
  let delta;
  if (playerYaw != null && Number.isFinite(playerYaw)) {
    delta = wrapPi(playerYaw - npcYaw);
  } else if (playerPos) {
    const p = worldPos(mesh);
    const dx = playerPos.x - p.x;
    const dz = playerPos.z - p.z;
    delta = wrapPi(Math.atan2(dx, dz) - npcYaw);
  } else {
    delta = 0;
  }
  return { u: wrap01(FRONT_U + delta / (Math.PI * 2)), v: FRONT_V };
}

/**
 * Nearest paint target inside REACH, or null.
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
    const d = dist2(playerPos, worldPos(mesh));
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
 * @returns {{ npc: object, coverage: number, uv: {u:number,v:number}, aim: object } | null}
 */
export function tickApply(cast, playerPos, squeezing, dt, playerYaw) {
  if (!squeezing) {
    chase.npc = null;
    chase.primed = false;
    chase.wait = 0;
    return null;
  }
  const best = pickApplyTarget(cast, playerPos);
  if (!best) {
    chase.npc = null;
    chase.primed = false;
    return null;
  }

  ensureCoverageMap(best);
  const uv = facingUV(playerPos, best.mesh, playerYaw);
  if (chase.npc !== best) {
    chase.npc = best;
    chase.u = uv.u;
    chase.v = uv.v;
    chase.wait = 0;
    chase.salt = 0;
    chase.primed = false;
  }

  chase.wait -= dt > 0 ? dt : 0;
  if (chase.wait <= 0) {
    chase.salt += 1;
    const next = findUnpaintedSample(best, {
      salt: chase.salt,
      avoidU: chase.u,
      avoidV: chase.v,
      faceU: uv.u,
    });
    if (next) {
      chase.u = next.u;
      chase.v = next.v;
    }
    chase.wait = RETARGET + (chase.salt % 3) * 0.03;
  }

  const amount = Math.min(1, Math.max(0, dt) * RATE);
  let stamped = false;
  for (const du of STAMP_U_OFF) {
    const u = wrap01(uv.u + du);
    for (const v of STAMP_V) {
      if (hitsCloth(best, u, v)) continue;
      stampCoverage(best, u, v, STAMP_R, amount);
      stamped = true;
    }
  }
  if (!hitsCloth(best, chase.u, chase.v)) {
    stampCoverage(best, chase.u, chase.v, CHASE_R, amount * 1.15);
    stamped = true;
  }
  if (stamped) applyCoverageToMats(best);

  const pt = uvToWorld(best.mesh, chase.u, chase.v);
  pt.x += pt.nx * 0.05;
  pt.y += pt.ny * 0.05;
  pt.z += pt.nz * 0.05;
  const aim = dampChase(pt, dt);
  return {
    npc: best,
    coverage: coveragePercent(best),
    uv: { u: chase.u, v: chase.v },
    aim: {
      x: aim.x,
      y: aim.y,
      z: aim.z,
      nx: aim.nx,
      ny: aim.ny,
      nz: aim.nz,
      u: chase.u,
      v: chase.v,
    },
  };
}

function movingKeys(keys) {
  if (!keys) return false;
  if (keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD) return true;
  if (keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight) return true;
  return (keys.analogMag || 0) > 0.3;
}

/**
 * Face the stamp point. Sidestep around the NPC when that point is out of
 * arm reach. WASD / stick keeps player control (yaw only skipped with them).
 * @param {{ pos: {x:number,y:number,z:number}, vel?: {x:number,z:number}, yaw: number, radius?: number, step?: number }} player
 * @param {Record<string, boolean>|null} keys
 * @param {object} npc
 * @param {{ x:number, y:number, z:number }} aim
 * @param {number} dt
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}[]} [COL]
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} [bounds]
 */
export function stepApplyOrbit(player, keys, npc, aim, dt, COL, bounds) {
  if (!player?.pos || !aim || !npc) return;
  const mesh = npc.mesh || npc;
  const p = worldPos(mesh);
  const t = dt > 0 ? dt : 0;
  if (!t) return;

  const steer = !movingKeys(keys);
  if (steer) {
    const wantYaw = Math.atan2(player.pos.x - aim.x, player.pos.z - aim.z);
    let dy = wrapPi(wantYaw - player.yaw);
    const cap = YAW_RATE * t;
    if (dy > cap) dy = cap;
    else if (dy < -cap) dy = -cap;
    player.yaw += dy;
  }
  if (!steer) return;

  const px = player.pos.x - p.x;
  const pz = player.pos.z - p.z;
  const curR = Math.hypot(px, pz) || 0.01;
  const curA = Math.atan2(px, pz);
  const wantA = Math.atan2(aim.x - p.x, aim.z - p.z);
  let standR = STAND_R;
  if (aim.v < 0.38) standR = STAND_R + (0.5 - STAND_R) * (1 - aim.v / 0.38);

  const hx = aim.x - player.pos.x;
  const hz = aim.z - player.pos.z;
  if (Math.hypot(hx, hz) < ARM_HORIZ && curR <= standR + 0.08) return;

  let nx;
  let nz;
  if (curR > 1.55) {
    const standX = p.x + Math.sin(wantA) * standR;
    const standZ = p.z + Math.cos(wantA) * standR;
    const vx = standX - player.pos.x;
    const vz = standZ - player.pos.z;
    const len = Math.hypot(vx, vz) || 1;
    const step = Math.min(0.32, STEP_SPEED * 0.5 * t);
    nx = player.pos.x + (vx / len) * step;
    nz = player.pos.z + (vz / len) * step;
  } else {
    let dA = wrapPi(wantA - curA);
    const maxA = (STEP_SPEED * t) / Math.max(0.55, curR);
    if (dA > maxA) dA = maxA;
    else if (dA < -maxA) dA = -maxA;
    const newA = curA + dA;
    const newR = curR + (standR - curR) * Math.min(1, 3.6 * t);
    nx = p.x + Math.sin(newA) * newR;
    nz = p.z + Math.cos(newA) * newR;
  }
  const r = player.radius || 0.34;
  if (COL && blocked(COL, nx, player.pos.z, r)) nx = player.pos.x;
  if (COL && blocked(COL, player.pos.x, nz, r)) nz = player.pos.z;
  if (COL && blocked(COL, nx, nz, r)) {
    nx = player.pos.x;
    nz = player.pos.z;
  }
  if (bounds) {
    nx = Math.max(bounds.minX, Math.min(bounds.maxX, nx));
    nz = Math.max(bounds.minZ, Math.min(bounds.maxZ, nz));
  }
  const mx = nx - player.pos.x;
  const mz = nz - player.pos.z;
  player.pos.x = nx;
  player.pos.z = nz;
  if (player.vel) {
    player.vel.x = mx / t;
    player.vel.z = mz / t;
  }
  if (Number.isFinite(player.step)) player.step += Math.hypot(mx, mz) * 1.9;
}

export { applyCoverageToMats, coveragePercent, ensureCoverageMap, findUnpaintedSample, isPaintable, stampCoverage };
