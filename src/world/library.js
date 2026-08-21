/**
 * The Library — quaint brick rotunda outside, ball-pit trampoline well inside.
 * Walk in the south door, drop a few storeys, bounce with ~110 beach balls.
 */
import * as THREE from "three";
import {
  mat,
  cvs,
  canvasTex,
  brickTex,
} from "./coconutsHelpers.js";

const CX = -5.4;
const CZ = 24.6;
const R = 4.7;
const T = 0.28;
const DOOR_W = 1.9;
const DOOR_H = 2.2;
const PIT = -8.4;
const TRAMP_Y = PIT + 0.08;
const N_BALLS = 110;
const BR = 0.3;
const G = 22;
const PLAYER_R = 0.34;

const BALL_HEX = [0xff4d6a, 0xffd166, 0x06d6a0, 0x4cc9f0, 0xf72585, 0xffffff, 0xff9f1c, 0x7b2cbf];

function brickCanvas() {
  const t = brickTex(0xb5523a, 0x8a3a2c);
  t.repeat.set(10, 6);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  return t;
}

function bookSpine(w, h) {
  const c = cvs(32, 64);
  const x = c.getContext("2d");
  const hues = ["#6b2d2d", "#2d4a6b", "#3d5a32", "#6b5a2d", "#4a2d5a", "#2d3a3a"];
  x.fillStyle = hues[(Math.random() * hues.length) | 0];
  x.fillRect(0, 0, 32, 64);
  x.fillStyle = "rgba(255,255,255,0.14)";
  x.fillRect(0, 8, 32, 3);
  x.fillRect(0, 48, 32, 2);
  x.fillStyle = "rgba(0,0,0,0.25)";
  x.fillRect(0, 0, 3, 64);
  return canvasTex(c, false);
}

function trampTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#1a1a22";
  x.fillRect(0, 0, 256, 256);
  x.strokeStyle = "#c8c8d0";
  x.lineWidth = 3;
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    x.beginPath();
    x.moveTo(128, 128);
    x.lineTo(128 + Math.cos(a) * 120, 128 + Math.sin(a) * 120);
    x.stroke();
  }
  x.beginPath();
  x.arc(128, 128, 118, 0, Math.PI * 2);
  x.strokeStyle = "#e07040";
  x.lineWidth = 10;
  x.stroke();
  x.fillStyle = "#2a2a33";
  x.beginPath();
  x.arc(128, 128, 96, 0, Math.PI * 2);
  x.fill();
  return canvasTex(c, false);
}

function hashKey(x, z) {
  return ((x * 73856093) ^ (z * 19349663)) | 0;
}

/**
 * @param {(minX:number,maxX:number,minZ:number,maxZ:number,y0?:number,y1?:number,soft?:boolean)=>void} reg
 */
export function buildLibrary(reg) {
  const g = new THREE.Group();
  g.name = "interiorLibrary";

  const brick = new THREE.MeshStandardMaterial({
    map: brickCanvas(),
    roughness: 0.92,
    color: 0xd8c4b0,
  });
  const mortar = mat(0x6a5348);
  const timber = mat(0x5a3a28);
  const cream = mat(0xf2ead8);
  const iron = mat(0x2a2420, { roughness: 0.5, metalness: 0.25 });
  const trampM = new THREE.MeshStandardMaterial({
    map: trampTex(),
    roughness: 0.55,
    color: 0xffffff,
  });

  const outer = new THREE.Mesh(new THREE.CylinderGeometry(R + T * 0.5, R + T * 0.5, 3.4, 28, 1, true), brick);
  outer.position.set(CX, 1.7, CZ);
  outer.castShadow = true;
  outer.receiveShadow = true;
  g.add(outer);

  const inner = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.04, R - 0.04, 3.2, 24, 1, true), cream);
  inner.position.set(CX, 1.6, CZ);
  inner.material.side = THREE.BackSide;
  g.add(inner);

  const pitWall = new THREE.Mesh(
    new THREE.CylinderGeometry(R - 0.05, R - 0.05, Math.abs(PIT) + 0.4, 24, 1, true),
    brick
  );
  pitWall.position.set(CX, PIT * 0.5, CZ);
  pitWall.material.side = THREE.DoubleSide;
  g.add(pitWall);

  const ring = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.2, R + 0.15, 0.42, 28), mortar);
  ring.position.set(CX, 3.5, CZ);
  g.add(ring);

  const dome = new THREE.Mesh(new THREE.SphereGeometry(R * 0.62, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), brick);
  dome.position.set(CX, 3.55, CZ);
  g.add(dome);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), iron);
  finial.position.set(CX, 3.55 + R * 0.62, CZ);
  g.add(finial);

  // South door cut: dark opening + timber frame. Colliders skip this sector.
  const doorZ = CZ - R;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(DOOR_W + 0.22, DOOR_H + 0.18, 0.16), timber);
  frame.position.set(CX, DOOR_H * 0.5 + 0.04, doorZ - 0.02);
  g.add(frame);
  const opening = new THREE.Mesh(
    new THREE.BoxGeometry(DOOR_W, DOOR_H, 0.2),
    new THREE.MeshBasicMaterial({ color: 0x0b0a08 })
  );
  opening.position.set(CX, DOOR_H * 0.5, doorZ + 0.04);
  g.add(opening);

  const sc = cvs(512, 128);
  const sx = sc.getContext("2d");
  sx.fillStyle = "#1a120c";
  sx.fillRect(0, 0, 512, 128);
  sx.fillStyle = "#c9a45a";
  sx.fillRect(0, 0, 512, 6);
  sx.fillRect(0, 122, 512, 6);
  sx.fillStyle = "#ffd99a";
  sx.font = "bold 42px Georgia, serif";
  sx.textAlign = "center";
  sx.fillText("LIBRARY", 256, 58);
  sx.font = "16px Georgia, serif";
  sx.fillStyle = "#e8d8b0";
  sx.fillText("NO READING  ·  JUMPING ONLY", 256, 98);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 0.65),
    new THREE.MeshStandardMaterial({ map: canvasTex(sc, false), roughness: 0.7 })
  );
  sign.position.set(CX, 2.72, doorZ - 0.18);
  g.add(sign);

  // Vestibule lip (you take one step in, then the hole).
  const lip = new THREE.Mesh(new THREE.BoxGeometry(DOOR_W + 0.4, 0.12, 1.15), timber);
  lip.position.set(CX, 0.04, doorZ + 0.55);
  lip.receiveShadow = true;
  g.add(lip);

  // Trampoline
  const tramp = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.55, R - 0.55, 0.12, 28), trampM);
  tramp.position.set(CX, TRAMP_Y, CZ);
  tramp.receiveShadow = true;
  g.add(tramp);
  const pad = new THREE.Mesh(new THREE.TorusGeometry(R - 0.55, 0.09, 6, 24), mat(0xe07040, { roughness: 0.4 }));
  pad.rotation.x = Math.PI / 2;
  pad.position.set(CX, TRAMP_Y + 0.04, CZ);
  g.add(pad);

  // Bookshelves around the pit wall, mid-height of the well + ground floor.
  const spines = [0, 1, 2, 3, 4, 5].map(() => new THREE.MeshStandardMaterial({ map: bookSpine(), roughness: 0.75 }));
  const bookGeo = new THREE.BoxGeometry(0.12, 0.32, 0.18);
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2 + 0.2;
    const wz = Math.cos(a);
    if (wz < -0.82) continue;
    const px = CX + Math.sin(a) * (R - 0.38);
    const pz = CZ + Math.cos(a) * (R - 0.38);
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.2, 0.22), timber);
    shelf.position.set(px, 1.15, pz);
    shelf.lookAt(CX, 1.15, CZ);
    g.add(shelf);
    for (let row = 0; row < 4; row++) {
      for (let k = 0; k < 5; k++) {
        const bk = new THREE.Mesh(bookGeo, spines[(i + row + k) % spines.length]);
        bk.position.set(-0.32 + k * 0.16, -0.85 + row * 0.5, 0.02);
        shelf.add(bk);
      }
    }
  }

  // Ground-floor windows (false, with book silhouettes)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.5;
    if (i === 3) continue;
    const px = CX + Math.sin(a) * (R + T * 0.52);
    const pz = CZ + Math.cos(a) * (R + T * 0.52);
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.08), mat(0x1a1410, { roughness: 0.3, metalness: 0.15 }));
    win.position.set(px, 1.7, pz);
    win.lookAt(CX, 1.7, CZ);
    g.add(win);
  }

  const lamp = new THREE.PointLight(0xffd9a0, 9, 16, 2);
  lamp.position.set(CX, 1.2, CZ);
  g.add(lamp);
  const pitLamp = new THREE.PointLight(0xffc070, 14, 18, 1.6);
  pitLamp.position.set(CX, PIT + 4.2, CZ);
  g.add(pitLamp);

  // Collider ring — skip south door sector.
  const segs = 16;
  for (let i = 0; i < segs; i++) {
    const mid = (i + 0.5) / segs * Math.PI * 2;
    const wx = Math.sin(mid);
    const wz = Math.cos(mid);
    const facingSouth = wz < -0.82;
    if (facingSouth) continue;
    const px = CX + wx * R;
    const pz = CZ + wz * R;
    const hw = (Math.PI * 2 * R) / segs / 2 + 0.12;
    reg(px - hw, px + hw, pz - hw, pz + hw, PIT, 3.4);
  }

  const B = {
    x0: CX - R - T,
    x1: CX + R + T,
    z0: CZ - R - T,
    z1: CZ + R + T,
    floorY: 0,
    h: 3.6,
    doors: [{ side: "s", at: CX, w: DOOR_W }],
  };

  // --- balls ---
  const geo = new THREE.SphereGeometry(BR, 10, 8);
  const mats = BALL_HEX.map((h) => new THREE.MeshStandardMaterial({ color: h, roughness: 0.45 }));
  const inst = BALL_HEX.map((h, i) => {
    const m = new THREE.InstancedMesh(geo, mats[i], Math.ceil(N_BALLS / BALL_HEX.length) + 2);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.castShadow = false;
    m.receiveShadow = true;
    g.add(m);
    return m;
  });
  const dummy = new THREE.Object3D();
  const balls = [];
  for (let i = 0; i < N_BALLS; i++) {
    const a = Math.random() * Math.PI * 2;
    const rr = Math.random() * (R - 1.1);
    balls.push({
      x: CX + Math.cos(a) * rr,
      y: TRAMP_Y + 0.4 + Math.random() * 6,
      z: CZ + Math.sin(a) * rr,
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 2,
      vz: (Math.random() - 0.5) * 3,
      hue: i % BALL_HEX.length,
      slot: (i / BALL_HEX.length) | 0,
    });
  }

  function collideBalls() {
    const cell = 0.7;
    const bins = new Map();
    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      const k = hashKey((b.x / cell) | 0, (b.z / cell) | 0);
      let arr = bins.get(k);
      if (!arr) {
        arr = [];
        bins.set(k, arr);
      }
      arr.push(i);
    }
    for (const list of bins.values()) {
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const a = balls[list[i]];
          const b = balls[list[j]];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dz = b.z - a.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          const min = BR * 2;
          if (d2 > min * min || d2 < 1e-6) continue;
          const d = Math.sqrt(d2);
          const nx = dx / d;
          const ny = dy / d;
          const nz = dz / d;
          const pen = min - d;
          a.x -= nx * pen * 0.5;
          a.y -= ny * pen * 0.5;
          a.z -= nz * pen * 0.5;
          b.x += nx * pen * 0.5;
          b.y += ny * pen * 0.5;
          b.z += nz * pen * 0.5;
          const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny + (b.vz - a.vz) * nz;
          if (rel > 0) continue;
          const imp = rel * 0.92;
          a.vx += imp * nx;
          a.vy += imp * ny;
          a.vz += imp * nz;
          b.vx -= imp * nx;
          b.vy -= imp * ny;
          b.vz -= imp * nz;
        }
      }
    }
  }

  function stepBalls(dt) {
    const h = Math.min(dt, 0.032);
    const innerR = R - 0.55 - BR;
    for (const b of balls) {
      b.vy -= G * h;
      b.x += b.vx * h;
      b.y += b.vy * h;
      b.z += b.vz * h;
      const dx = b.x - CX;
      const dz = b.z - CZ;
      const d = Math.hypot(dx, dz);
      if (d > innerR) {
        const nx = dx / (d || 1);
        const nz = dz / (d || 1);
        b.x = CX + nx * innerR;
        b.z = CZ + nz * innerR;
        const vn = b.vx * nx + b.vz * nz;
        if (vn > 0) {
          b.vx -= vn * 1.6 * nx;
          b.vz -= vn * 1.6 * nz;
        }
      }
      if (b.y < TRAMP_Y + BR) {
        b.y = TRAMP_Y + BR;
        if (b.vy < 0) b.vy = -b.vy * 1.18 + 1.1;
        b.vx *= 0.98;
        b.vz *= 0.98;
      }
      if (b.y > 2.4) {
        b.y = 2.4;
        b.vy *= -0.3;
      }
    }
    collideBalls();
    const counts = new Array(inst.length).fill(0);
    for (const b of balls) {
      dummy.position.set(b.x, b.y, b.z);
      dummy.rotation.set(b.y * 0.7, b.x * 0.4, b.z * 0.5);
      dummy.updateMatrix();
      const im = inst[b.hue];
      const slot = counts[b.hue]++;
      im.setMatrixAt(slot, dummy.matrix);
    }
    for (let i = 0; i < inst.length; i++) {
      inst[i].count = counts[i];
      inst[i].instanceMatrix.needsUpdate = true;
    }
  }

  function inCylinder(x, z, pad = 0) {
    return Math.hypot(x - CX, z - CZ) < R - pad;
  }

  function inDoor(x, z) {
    return Math.abs(x - CX) < DOOR_W * 0.55 && z < CZ - R + 1.25 && z > CZ - R - 0.8;
  }

  function contains(x, z) {
    return inCylinder(x, z, -0.2) || inDoor(x, z);
  }

  function overHole(x, z) {
    return inCylinder(x, z, 1.15) && !(Math.abs(x - CX) < DOOR_W * 0.5 && z < CZ - R + 1.35);
  }

  let trampBoost = 0;

  function tickPlayer(player, dt) {
    if (!player?.pos) return false;
    const h = dt > 0 ? dt : 0;
    const x = player.pos.x;
    const z = player.pos.z;
    if (!contains(x, z) && player.pos.y > -0.2) {
      if (player.pos.y !== 0) player.pos.y = 0;
      return false;
    }
    const hole = overHole(x, z) || player.pos.y < -0.35;
    if (!hole && player.pos.y >= -0.05) {
      player.pos.y = 0;
      player.vel.y = 0;
      return true;
    }
    player.vel.y = (player.vel.y || 0) - G * h;
    player.pos.y += player.vel.y * h;
    const dx = player.pos.x - CX;
    const dz = player.pos.z - CZ;
    const d = Math.hypot(dx, dz);
    const maxR = R - 0.55 - PLAYER_R;
    if (d > maxR) {
      const nx = dx / (d || 1);
      const nz = dz / (d || 1);
      player.pos.x = CX + nx * maxR;
      player.pos.z = CZ + nz * maxR;
    }
    const stand = TRAMP_Y + 0.92;
    if (player.pos.y < stand) {
      player.pos.y = stand;
      const incoming = player.vel.y || 0;
      player.vel.y = Math.max(8.5, -incoming * 1.35);
      trampBoost = 1;
      for (const b of balls) {
        const dd = Math.hypot(b.x - player.pos.x, b.z - player.pos.z);
        if (dd < 2.4) {
          const k = (2.4 - dd) * 4;
          b.vy += 4 + k;
          b.vx += ((b.x - player.pos.x) / (dd || 1)) * k;
          b.vz += ((b.z - player.pos.z) / (dd || 1)) * k;
        }
      }
    }
    if (player.pos.y > 2.8 && overHole(player.pos.x, player.pos.z) === false) {
      player.pos.y = 0;
      player.vel.y = 0;
    }
    trampBoost *= 0.92;
    return true;
  }

  function tick(t, playerPos, dt = 1 / 60) {
    if (playerPos && contains(playerPos.x, playerPos.z)) stepBalls(dt);
    else if (Math.random() < 0.2) stepBalls(dt * 0.5);
    tramp.scale.y = 1 + trampBoost * 0.12;
  }

  return {
    id: "library",
    label: "LIBRARY",
    group: g,
    B,
    center: { x: CX, z: CZ },
    ceilingY: 4.2,
    lamp,
    lampBase: 9,
    fan: null,
    fluoro: null,
    door: { x: CX, z: doorZ },
    pit: true,
    contains,
    tick,
    tickPlayer,
  };
}

export { CX as LIBRARY_X, CZ as LIBRARY_Z, R as LIBRARY_R };
