/**
 * Tiny beach-patrol hut west of the surf club. Cops walk here after an arrest.
 * Inner box is walkable; the north door faces the boardwalk.
 */
import * as THREE from "three";
import { mat, box, signTex, metalRoofTex } from "./coconutsHelpers.js";
import { buildT101, poseT101 } from "../chars/t101.js";

const T = 0.24;

/** Inner west / east / south / north. */
export const PATROL_BOX = { x0: -28.2, x1: -24.8, z0: 13.5, z1: 16.4 };
export const PATROL_HOME = { x: -26.5, z: 14.85 };
export const PATROL_DOOR = { x: -26.5, z: 16.52, w: 1.6 };

function addBox(colliders, minX, maxX, minZ, maxZ) {
  if (colliders?.addCollider) colliders.addCollider(minX, maxX, minZ, maxZ);
  else if (colliders?.add) colliders.add(minX, maxX, minZ, maxZ);
  else if (colliders?.COL) colliders.COL.push({ minX, maxX, minZ, maxZ });
}

/**
 * @param {THREE.Scene} scene
 * @param {{ addCollider?: Function, add?: Function, COL?: any[] }} [colliders]
 */
export function spawnPatrolHouse(scene, colliders) {
  const { x0, x1, z0, z1 } = PATROL_BOX;
  const h = 2.65;
  const floorY = 0.05;
  const g = new THREE.Group();
  g.name = "patrolHouse";

  const wall = mat(0xdfd2b6, { roughness: 0.95 });
  const wallIn = mat(0xe7ddc8, { roughness: 0.96, emissive: 0x1a2230, emissiveIntensity: 1 });
  const teal = mat(0x1e3a6e, { roughness: 0.8 });
  const timber = mat(0x6b4326, { roughness: 0.9 });
  const floorM = mat(0x6a5340, { roughness: 0.88, emissive: 0x120e0a, emissiveIntensity: 1 });
  const roofMap = metalRoofTex();
  roofMap.repeat.set(3, 2);
  const roofM = new THREE.MeshStandardMaterial({
    map: roofMap,
    color: 0xc8402e,
    roughness: 0.55,
    metalness: 0.15,
  });

  const cx = (x0 + x1) / 2;
  const cz = (z0 + z1) / 2;
  const iw = x1 - x0;
  const id = z1 - z0;
  const hy = floorY + h / 2;

  const floor = box(iw + T * 2, 0.12, id + T * 2, floorM);
  floor.position.set(cx, floorY - 0.06, cz);
  g.add(floor);

  function wallRun(minX, maxX, minZ, maxZ, matl = wall) {
    const w = maxX - minX;
    const d = maxZ - minZ;
    if (w < 0.04 || d < 0.04) return;
    const m = box(w, h, d, matl);
    m.position.set((minX + maxX) / 2, hy, (minZ + maxZ) / 2);
    g.add(m);
    addBox(colliders, minX, maxX, minZ, maxZ);
  }

  const door0 = PATROL_DOOR.x - PATROL_DOOR.w / 2;
  const door1 = PATROL_DOOR.x + PATROL_DOOR.w / 2;
  wallRun(x0, door0, z1, z1 + T);
  wallRun(door1, x1, z1, z1 + T);
  wallRun(x0, x1, z0 - T, z0);
  wallRun(x0 - T, x0, z0 - T, z1 + T);
  wallRun(x1, x1 + T, z0 - T, z1 + T);

  // Interior skins — leave the door gap on the north face.
  function skin(w, d, x, z) {
    const p = box(w, h, d, wallIn);
    p.position.set(x, hy, z);
    p.castShadow = false;
    g.add(p);
  }
  skin(door0 - x0, 0.02, (x0 + door0) / 2, z1 - 0.012);
  skin(x1 - door1, 0.02, (door1 + x1) / 2, z1 - 0.012);
  skin(iw, 0.02, cx, z0 + 0.012);
  skin(0.02, id, x0 + 0.012, cz);
  skin(0.02, id, x1 - 0.012, cz);

  const headH = h - 2.15;
  if (headH > 0.05) {
    const lintel = box(PATROL_DOOR.w + 0.24, headH, T, wall);
    lintel.position.set(PATROL_DOOR.x, floorY + 2.15 + headH / 2, z1 + T / 2);
    g.add(lintel);
  }

  function band(minX, maxX, minZ, maxZ) {
    const w = maxX - minX;
    const d = maxZ - minZ;
    if (w < 0.04 || d < 0.04) return;
    const m = box(w + 0.06, 0.48, d + 0.06, teal);
    m.position.set((minX + maxX) / 2, floorY + 0.24, (minZ + maxZ) / 2);
    g.add(m);
  }
  band(x0, door0, z1, z1 + T);
  band(door1, x1, z1, z1 + T);
  band(x0, x1, z0 - T, z0);
  band(x0 - T, x0, z0, z1);
  band(x1, x1 + T, z0, z1);

  const roof = box(iw + T * 2 + 0.7, 0.14, id + T * 2 + 0.7, roofM);
  roof.position.set(cx, floorY + h + 0.08, cz);
  g.add(roof);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 0.7),
    new THREE.MeshBasicMaterial({ map: signTex("PATROL", "BEACH UNIT"), side: THREE.DoubleSide })
  );
  sign.position.set(cx, floorY + 2.15, z1 + T + 0.04);
  g.add(sign);

  const desk = box(1.4, 0.72, 0.46, timber);
  desk.position.set(x0 + 0.85, floorY + 0.36, z0 + 0.42);
  g.add(desk);
  addBox(colliders, x0, x0 + 1.5, z0, z0 + 0.7);

  const bench = box(0.42, 0.42, 1.6, timber);
  bench.position.set(x1 - 0.38, floorY + 0.21, cz);
  g.add(bench);

  const robots = [];
  for (const [rx, rz, yaw] of [
    [cx - 0.7, cz + 0.15, 0.55],
    [cx + 0.55, cz - 0.35, -0.4],
  ]) {
    const bot = buildT101({ scale: 0.92 });
    bot.name = "patrol-t101";
    bot.position.set(rx, 0, rz);
    bot.rotation.y = yaw;
    bot.userData.kind = "t101";
    bot.userData.ageBand = "adult";
    bot.userData.paintTarget = true;
    poseT101(bot, { walkPhase: 0.2, speed: 0 });
    g.add(bot);
    robots.push(bot);
  }

  scene.add(g);
  return {
    group: g,
    home: { ...PATROL_HOME },
    door: { x: PATROL_DOOR.x, z: PATROL_DOOR.z },
    box: { ...PATROL_BOX },
    robots,
  };
}
