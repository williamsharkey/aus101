/**
 * Player ↔ NPC contacts. People are circles on XZ: overlap pushes both,
 * approaching velocity gets a soft bounce so a run-in is a bump, not a wall
 * and not a ghost.
 */
const PLAYER_R = 0.36;
const PLAYER_M = 1.25;
const RESTITUTION = 0.18;
const FRICTION = 0.35;
const SLIDE = 0.55;

function meshOf(npc) {
  return npc?.mesh || npc || null;
}

function radiusOf(npc, mesh) {
  const kind = npc?.kind || mesh?.userData?.kind || "";
  const age = npc?.ageBand || mesh?.userData?.ageBand || "";
  if (kind === "gull" || age === "gull") return 0;
  if (kind === "kid" || age === "child") return 0.22;
  if (kind === "cop" || kind === "t101") return 0.38;
  return 0.32;
}

function massOf(npc, mesh) {
  if (mesh?.userData?.seated || mesh?.userData?.anchored) return 0;
  if (mesh?.userData?.combatDown || npc?.down) return 0.35;
  const kind = npc?.kind || mesh?.userData?.kind || "";
  if (kind === "cop" || kind === "t101") return 1.4;
  if (kind === "kid") return 0.55;
  return 0.85;
}

function worldXZ(mesh, out) {
  if (typeof mesh.updateWorldMatrix === "function") mesh.updateWorldMatrix(true, false);
  const e = mesh.matrixWorld?.elements;
  if (e) {
    out.x = e[12];
    out.z = e[14];
    return out;
  }
  out.x = mesh.position.x;
  out.z = mesh.position.z;
  return out;
}

const _p = { x: 0, z: 0 };

/**
 * Resolve the player against the cast. Mutates player.pos / vel and NPC
 * positions plus a decaying `userData.bumpVx/Vz` so pathing NPCs still hitch.
 * @returns {boolean} true if any contact this step
 */
export function resolveCrowd(player, cast, dt) {
  if (!player?.pos || !cast?.length) return false;
  const h = dt > 0 ? dt : 1 / 60;
  let hit = false;
  const pr = player.radius || PLAYER_R;
  const px0 = player.pos.x;
  const pz0 = player.pos.z;

  for (const npc of cast) {
    const mesh = meshOf(npc);
    if (!mesh || mesh.visible === false) continue;
    if (mesh.userData?.combatDown && (npc.down || mesh.userData.combatDown)) {
      // Downed bodies are flat — step over, don't kick the corpse around.
      continue;
    }
    const rr = radiusOf(npc, mesh);
    if (!(rr > 0)) continue;
    worldXZ(mesh, _p);
    let dx = px0 - _p.x;
    let dz = pz0 - _p.z;
    let d = Math.hypot(dx, dz);
    const min = pr + rr;
    if (d >= min || d < 1e-5) continue;

    const nx = dx / d;
    const nz = dz / d;
    const overlap = min - d;
    const m2 = massOf(npc, mesh);
    const inv1 = 1 / PLAYER_M;
    const inv2 = m2 > 0 ? 1 / m2 : 0;
    const invSum = inv1 + inv2 || inv1;
    const push1 = overlap * (inv1 / invSum);
    const push2 = overlap * (inv2 / invSum);

    player.pos.x += nx * push1;
    player.pos.z += nz * push1;
    if (m2 > 0 && mesh.position) {
      mesh.position.x -= nx * push2;
      mesh.position.z -= nz * push2;
      const ud = mesh.userData;
      ud.bumpVx = (ud.bumpVx || 0) - nx * push2 / Math.max(0.016, h);
      ud.bumpVz = (ud.bumpVz || 0) - nz * push2 / Math.max(0.016, h);
    }

    const nvx = mesh.userData?.bumpVx || 0;
    const nvz = mesh.userData?.bumpVz || 0;
    const rel = (player.vel.x - nvx) * nx + (player.vel.z - nvz) * nz;
    if (rel < 0) {
      const j = -(1 + RESTITUTION) * rel / invSum;
      player.vel.x += j * inv1 * nx;
      player.vel.z += j * inv1 * nz;
      // Kill some of the tangent so you don't skate through a crowd.
      const tx = player.vel.x - nx * (player.vel.x * nx + player.vel.z * nz);
      const tz = player.vel.z - nz * (player.vel.x * nx + player.vel.z * nz);
      player.vel.x -= tx * FRICTION;
      player.vel.z -= tz * FRICTION;
      if (m2 > 0) {
        const ud = mesh.userData;
        ud.bumpVx = (ud.bumpVx || 0) - j * inv2 * nx;
        ud.bumpVz = (ud.bumpVz || 0) - j * inv2 * nz;
      }
    } else {
      const vn = player.vel.x * nx + player.vel.z * nz;
      if (vn < 0) {
        player.vel.x -= nx * vn * (1 - SLIDE);
        player.vel.z -= nz * vn * (1 - SLIDE);
      }
    }
    hit = true;
  }
  return hit;
}

/** Bleed leftover NPC knockback after their own tick has posed them. */
export function tickCrowdDrift(cast, dt) {
  const h = dt > 0 ? dt : 0;
  if (!h || !cast) return;
  const damp = Math.exp(-5.5 * h);
  for (const npc of cast) {
    const mesh = npc?.mesh || npc;
    const ud = mesh?.userData;
    if (!ud) continue;
    const vx = ud.bumpVx || 0;
    const vz = ud.bumpVz || 0;
    if (vx * vx + vz * vz < 1e-6) {
      ud.bumpVx = 0;
      ud.bumpVz = 0;
      continue;
    }
    if (mesh.position && mesh.visible !== false && !ud.combatDown) {
      mesh.position.x += vx * h;
      mesh.position.z += vz * h;
    }
    ud.bumpVx = vx * damp;
    ud.bumpVz = vz * damp;
  }
}
