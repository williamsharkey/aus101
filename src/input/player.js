/**
 * Player locomotion + look — ported from Coconuts patterns (Steve / a-better-internet).
 * WASD / arrows, Shift jog, pointer-lock + drag look, touch-drag, AABB colliders, 60Hz tick.
 */
import * as THREE from "three";

export const TICK = 1 / 60;

export function createPlayer(spawn = { x: 0, y: 0, z: 8 }) {
  return {
    pos: new THREE.Vector3(spawn.x, spawn.y, spawn.z),
    vel: new THREE.Vector3(),
    yaw: 0,
    pitch: -0.05,
    radius: 0.34,
    eye: 1.65,
    bob: 0,
    step: 0,
    _tx: null,
    _ty: null,
  };
}

export function createColliders() {
  /** @type {{minX:number,maxX:number,minZ:number,maxZ:number}[]} */
  const COL = [];
  const addCollider = (minX, maxX, minZ, maxZ) => COL.push({ minX, maxX, minZ, maxZ });
  return { COL, addCollider };
}

export function blocked(COL, x, z, radius) {
  for (const c of COL) {
    if (x > c.minX - radius && x < c.maxX + radius && z > c.minZ - radius && z < c.maxZ + radius) return c;
  }
  return null;
}

/**
 * @param {object} opts
 * @param {HTMLElement} opts.dom
 * @param {() => boolean} opts.isPlaying
 * @param {() => void} [opts.onEscapePause]
 */
export function installInput({ dom, isPlaying, onEscapePause, blockLock }) {
  const keys = Object.create(null);
  let locked = false;
  let dragging = false;
  let wasLocked = false;

  const tryLock = () => {
    if (!isPlaying()) return;
    if (blockLock?.()) return;
    try {
      dom.requestPointerLock?.();
    } catch {
      /* browsers may deny */
    }
  };

  document.addEventListener("pointerlockchange", () => {
    locked = document.pointerLockElement === dom;
    if (wasLocked && !locked && isPlaying() && !blockLock?.()) onEscapePause?.();
    wasLocked = locked;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isPlaying()) return;
    if (locked || dragging) {
      /* mutated via returned player ref in bindLook */
    }
  });

  const lookState = { player: null };
  document.addEventListener("mousemove", (e) => {
    const player = lookState.player;
    if (!player || !isPlaying()) return;
    if (locked || dragging) {
      player.yaw -= e.movementX * 0.0022;
      player.pitch -= e.movementY * 0.0022;
      player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
    }
  });

  dom.addEventListener("mousedown", () => {
    if (isPlaying()) {
      dragging = true;
      if (!locked) tryLock();
    }
  });
  addEventListener("mouseup", () => {
    dragging = false;
  });

  dom.addEventListener(
    "touchmove",
    (e) => {
      const player = lookState.player;
      if (!player || !isPlaying()) return;
      const t = e.touches[0];
      if (!t) return;
      if (player._tx != null) {
        player.yaw -= (t.clientX - player._tx) * 0.005;
        player.pitch -= (t.clientY - player._ty) * 0.005;
        player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch));
      }
      player._tx = t.clientX;
      player._ty = t.clientY;
      e.preventDefault();
    },
    { passive: false }
  );
  addEventListener("touchend", () => {
    if (lookState.player) lookState.player._tx = null;
  });

  addEventListener("keydown", (e) => {
    keys[e.code] = true;
    if (e.code === "Escape" && isPlaying()) onEscapePause?.();
    if (e.code === "Space" || e.code === "Tab" || e.code.indexOf("Arrow") === 0) e.preventDefault();
  });
  addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  return {
    keys,
    tryLock,
    bindPlayer(player) {
      lookState.player = player;
    },
    get locked() {
      return locked;
    },
  };
}

/**
 * Fixed-step locomotion (Coconuts / Eastgate resolver).
 * @param {ReturnType<typeof createPlayer>} player
 * @param {Record<string, boolean>} keys
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}[]} COL
 * @param {{minX:number,maxX:number,minZ:number,maxZ:number}} bounds
 * @param {number} dt
 */
export function fixedUpdate(player, keys, COL, bounds, dt) {
  const f = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0);
  const s = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
  const run = keys.ShiftLeft || keys.ShiftRight;
  const speed = run ? 6.4 : 3.4;
  const sy = Math.sin(player.yaw);
  const cy = Math.cos(player.yaw);
  let mx = s * cy - f * sy;
  let mz = -f * cy - s * sy;
  const L = Math.hypot(mx, mz);
  if (L > 0) {
    mx /= L;
    mz /= L;
  }
  const ar = L > 0 ? 12 : 10;
  player.vel.x += (mx * speed - player.vel.x) * Math.min(1, ar * dt);
  player.vel.z += (mz * speed - player.vel.z) * Math.min(1, ar * dt);
  const r = player.radius;

  let nx = player.pos.x + player.vel.x * dt;
  let c = blocked(COL, nx, player.pos.z, r);
  if (c) {
    nx = player.vel.x > 0 ? c.minX - r : c.maxX + r;
    player.vel.x = 0;
  }
  player.pos.x = nx;

  let nz = player.pos.z + player.vel.z * dt;
  c = blocked(COL, player.pos.x, nz, r);
  if (c) {
    nz = player.vel.z > 0 ? c.minZ - r : c.maxZ + r;
    player.vel.z = 0;
  }
  player.pos.z = nz;

  player.pos.x = Math.max(bounds.minX, Math.min(bounds.maxX, player.pos.x));
  player.pos.z = Math.max(bounds.minZ, Math.min(bounds.maxZ, player.pos.z));

  const hs = Math.hypot(player.vel.x, player.vel.z);
  player.step += hs * dt * 1.9;
  player.bob = Math.sin(player.step * 2) * 0.035 * Math.min(1, hs / 3);
}

export function applyCamera(camera, player) {
  const cp = Math.cos(player.pitch);
  const sp = Math.sin(player.pitch);
  const sy = Math.sin(player.yaw);
  const cy = Math.cos(player.yaw);
  camera.position.set(player.pos.x, player.pos.y + player.eye + player.bob, player.pos.z);
  camera.lookAt(
    player.pos.x - sy * cp,
    player.pos.y + player.eye + player.bob + sp,
    player.pos.z - cy * cp
  );
}
