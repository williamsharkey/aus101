/**
 * Gold Coast playable level.
 * Starting kit: Coconuts prop factories (Steve / a-better-internet/coconuts).
 * Everything is restyled: timber esplanade, surf club, SLS tower, turquoise water,
 * harsh noon, no Maryland / no terracotta patio as the identity.
 *
 * Spawn: x=0, z=10, yaw=0 (facing ocean −Z).
 */
import * as THREE from "three";
import {
  kit,
  cloneMap,
  mat,
  box,
  canvasTex,
  sandCanvas,
  placeUmbrella,
  placePalm,
  makeGull,
  makeLamppost,
  makeTorch,
  makeLounger,
  makeBeachBall,
  makeSurfboard,
  stringLights,
  signTex,
  metalRoofTex,
} from "./coconutsHelpers.js";

export const GC = {
  width: 90,
  depth: 70,
  boardwalkZ: 16,
  wetZ: -10,
  oceanZ: -22,
};

export const BOUNDS = {
  minX: -GC.width / 2 + 1,
  maxX: GC.width / 2 - 1,
  minZ: -GC.depth / 2 + 1,
  maxZ: GC.depth / 2 - 1,
};

function skyGradient() {
  const c = document.createElement("canvas");
  c.width = 4;
  c.height = 256;
  const x = c.getContext("2d");
  const g = x.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#6ec4ff");
  g.addColorStop(0.45, "#b8e0ff");
  g.addColorStop(0.72, "#ffe2a8");
  g.addColorStop(1, "#f0c070");
  x.fillStyle = g;
  x.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

export function setupGoldCoastLights(scene) {
  scene.background = new THREE.Color(0x87c8ef);
  scene.fog = new THREE.Fog(0xd8c8a0, 28, 95);
  const hemi = new THREE.HemisphereLight(0xfff1c8, 0xc4a06a, 0.95);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe8c0, 2.2);
  sun.position.set(22, 48, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 2;
  sun.shadow.camera.far = 140;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  sun.shadow.bias = -0.0005;
  scene.add(sun);
  return { hemi, sun };
}

/**
 * @param {THREE.Scene} scene
 * @param {{ addCollider: Function, COL?: any[] }} colliders
 */
export function buildGoldCoast(scene, colliders) {
  const K = kit();
  const add = colliders.addCollider;
  const palms = [];
  const flames = [];
  const gulls = [];
  const balls = [];
  const waves = [];

  // Sky dome
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(180, 16, 12),
    new THREE.MeshBasicMaterial({ map: skyGradient(), side: THREE.BackSide, fog: false, depthWrite: false })
  );
  scene.add(sky);

  // Sand — Gold Coast blonde, not OC grey-tan
  const sandMap = canvasTex(sandCanvas());
  sandMap.repeat.set(48, 36);
  const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 30, GC.depth + 24),
    new THREE.MeshStandardMaterial({ map: sandMap, roughness: 1, color: 0xf0d9a0 })
  );
  sand.rotation.x = -Math.PI / 2;
  sand.receiveShadow = true;
  scene.add(sand);

  const wet = new THREE.Mesh(
    new THREE.PlaneGeometry(GC.width + 20, 14),
    new THREE.MeshStandardMaterial({ color: 0xc4a070, roughness: 0.42, metalness: 0.08 })
  );
  wet.rotation.x = -Math.PI / 2;
  wet.position.set(0, 0.03, GC.wetZ);
  wet.receiveShadow = true;
  scene.add(wet);

  // Turquoise ocean + swell
  const oceanGeo = new THREE.PlaneGeometry(GC.width + 50, 36, 40, 10);
  const ocean = new THREE.Mesh(
    oceanGeo,
    new THREE.MeshStandardMaterial({ color: 0x2ec4d4, roughness: 0.28, metalness: 0.12 })
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(0, 0.02, GC.oceanZ - 10);
  scene.add(ocean);
  const oceanBase = Float32Array.from(oceanGeo.attributes.position.array);

  for (let i = 0; i < 7; i++) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(GC.width + 24, 2.4),
      new THREE.MeshBasicMaterial({ color: 0xe8f6f4, transparent: true, opacity: 0, depthWrite: false })
    );
    w.rotation.x = -Math.PI / 2;
    w.userData.spd = 1.8 + i * 0.28;
    w.userData.z0 = GC.oceanZ - 6 - i * 2.6;
    w.userData.dieZ = GC.wetZ + 2;
    w.position.set(0, 0.08, w.userData.z0);
    scene.add(w);
    waves.push(w);
  }

  // Timber esplanade (NOT terracotta pavers)
  const wood = cloneMap(K.woodMap, 28, 6);
  const deck = box(GC.width * 0.78, 0.2, 9.2, new THREE.MeshStandardMaterial({ map: wood, roughness: 0.88 }));
  deck.position.set(0, 0.12, GC.boardwalkZ);
  scene.add(deck);

  // Rail
  for (let x = -32; x <= 32; x += 4) {
    const post = box(0.16, 1.15, 0.16, K.postWood);
    post.position.set(x, 0.7, GC.boardwalkZ + 4.2);
    scene.add(post);
    add(x - 0.18, x + 0.18, GC.boardwalkZ + 4.0, GC.boardwalkZ + 4.4);
  }
  const rail = box(GC.width * 0.78, 0.1, 0.12, K.postWood);
  rail.position.set(0, 1.18, GC.boardwalkZ + 4.2);
  scene.add(rail);

  // Surf club (was Coconuts bar) — cream walls, red corrugated roof, "SPF CLUB" / "SURFERS"
  const club = new THREE.Group();
  const walls = box(8.4, 3.2, 5.2, K.wall);
  walls.position.y = 1.7;
  club.add(walls);
  const roofMap = metalRoofTex();
  roofMap.repeat.set(6, 4);
  const roof = box(9.2, 0.22, 6.0, new THREE.MeshStandardMaterial({ map: roofMap, roughness: 0.55, metalness: 0.15 }));
  roof.position.y = 3.45;
  club.add(roof);
  const awning = box(8.6, 0.12, 2.2, mat(0xc8402e, { roughness: 0.7 }));
  awning.position.set(0, 2.55, 3.2);
  club.add(awning);
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 1.1),
    new THREE.MeshBasicMaterial({ map: signTex("SURF CLUB", "SPF 50 · GOLD COAST"), side: THREE.DoubleSide })
  );
  sign.position.set(0, 2.85, 2.72);
  club.add(sign);
  club.position.set(-18, 0, GC.boardwalkZ - 1.2);
  scene.add(club);
  add(-22.4, -13.6, GC.boardwalkZ - 3.8, GC.boardwalkZ + 1.4);

  // SLS tower — yellow/red
  const tower = new THREE.Group();
  const legs = box(2.4, 3.6, 2.4, mat(0xf3e36a, { roughness: 0.85 }));
  legs.position.y = 1.8;
  tower.add(legs);
  const cabin = box(3.0, 1.9, 3.0, mat(0xf7f4ea, { roughness: 0.9 }));
  cabin.position.y = 4.15;
  tower.add(cabin);
  const cap = box(3.3, 0.18, 3.3, mat(0xc8402e, { roughness: 0.55 }));
  cap.position.y = 5.2;
  tower.add(cap);
  const flag = box(0.06, 1.4, 0.9, mat(0xc8402e));
  flag.position.set(0.4, 6.0, 0);
  tower.add(flag);
  const flagY = box(0.06, 1.4, 0.45, mat(0xf3e36a));
  flagY.position.set(0.41, 6.0, -0.22);
  tower.add(flagY);
  tower.position.set(20, 0, GC.boardwalkZ - 2);
  scene.add(tower);
  add(18.4, 21.6, GC.boardwalkZ - 3.6, GC.boardwalkZ - 0.4);

  // SPF kiosk
  const kiosk = new THREE.Group();
  const booth = box(3.4, 2.4, 2.6, K.wall);
  booth.position.y = 1.2;
  kiosk.add(booth);
  const kroof = box(3.8, 0.16, 3.0, mat(0xc8402e));
  kroof.position.y = 2.5;
  kiosk.add(kroof);
  const ksign = new THREE.Mesh(
    new THREE.PlaneGeometry(2.8, 0.7),
    new THREE.MeshBasicMaterial({ map: signTex("ZINC", "FREE SPF"), side: THREE.DoubleSide })
  );
  ksign.position.set(0, 2.05, 1.35);
  kiosk.add(ksign);
  kiosk.position.set(8, 0, GC.boardwalkZ - 1);
  scene.add(kiosk);
  add(6.2, 9.8, GC.boardwalkZ - 2.3, GC.boardwalkZ + 0.3);

  stringLights(scene, -22, GC.boardwalkZ + 3.8, 22, GC.boardwalkZ + 3.8, 3.1, 18);

  // Palms along esplanade + sand
  const palmSpots = [
    [-30, 14, 1.1],
    [-26, 8, 0.95],
    [-22, 18, 1.2],
    [-12, 12, 1.0],
    [12, 13, 1.05],
    [24, 10, 1.15],
    [28, 17, 0.9],
    [-8, -4, 0.85],
    [16, -2, 0.9],
    [-28, 0, 1.0],
    [30, 2, 0.95],
    [-18, 6, 0.8],
  ];
  for (const [x, z, s] of palmSpots) placePalm(scene, add, palms, x, z, s);

  // Patio umbrellas + chairs (Coconuts factory, denser)
  const umb = [
    [-10, 6, true],
    [-6, 3, true],
    [-2, 5, true],
    [2, 2, true],
    [6, 5, true],
    [10, 3, true],
    [-14, 1, true],
    [14, 1, true],
    [-8, -1, false],
    [4, -3, false],
    [12, -5, false],
    [-16, -3, false],
    [0, 8, true],
    [-20, 4, true],
    [18, 4, true],
  ];
  for (const [x, z, chairs] of umb) placeUmbrella(scene, add, x, z, chairs, Math.random() * 0.4);

  // Loungers toward the water
  const loungeCols = [0xf2c12e, 0xf2654e, 0x2f7fd0, 0x1fb6a6, 0xe23b6e];
  for (let i = 0; i < 10; i++) {
    const x = -18 + i * 4.1;
    makeLounger(scene, x, -2.5, 0.05, loungeCols[i % loungeCols.length]);
    makeLounger(scene, x + 0.9, 0.4, -0.08, loungeCols[(i + 2) % loungeCols.length]);
  }

  // Surfboards in a rack near the club
  const boardCols = [0xf2c12e, 0xe23b3b, 0x2f7fc4, 0xffffff, 0x1fb6a6];
  for (let i = 0; i < 6; i++) {
    const b = makeSurfboard(boardCols[i % boardCols.length]);
    b.rotation.set(-0.1, 0.2, Math.PI / 2);
    b.position.set(-12.5 + i * 0.35, 1.1, GC.boardwalkZ + 1.4);
    scene.add(b);
  }

  // Beach balls
  for (const [x, z] of [
    [-5, 1],
    [7, -1],
    [3, 7],
    [-11, -4],
  ]) {
    const ball = makeBeachBall(1);
    ball.position.set(x, 0.35, z);
    scene.add(ball);
    balls.push(ball);
  }

  // Lamps / torches along the deck
  for (const x of [-28, -16, -4, 8, 20, 30]) {
    makeLamppost(scene, add, x, GC.boardwalkZ + 3.2);
  }
  for (const x of [-24, -8, 4, 16]) makeTorch(scene, add, flames, x, GC.boardwalkZ - 4.2);

  // Gull flock
  for (let i = 0; i < 8; i++) {
    const g = makeGull();
    g.position.set(-20 + i * 6, 4.5 + (i % 3), -6 + (i % 4) * 3);
    g.userData.phase = i * 0.7;
    scene.add(g);
    gulls.push(g);
  }

  return {
    ocean,
    oceanBase,
    waves,
    palms,
    gulls,
    balls,
    flames,
    bounds: BOUNDS,
    isWood(x, z) {
      return Math.abs(z - GC.boardwalkZ) < 4.8 && Math.abs(x) < GC.width * 0.4;
    },
    update(t) {
      const pos = ocean.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = oceanBase[ix];
        const z = oceanBase[ix + 2];
        pos.array[ix + 1] = Math.sin(x * 0.12 + t * 1.35) * 0.16 + Math.sin(z * 0.2 + t * 0.95) * 0.1;
      }
      pos.needsUpdate = true;

      for (const w of waves) {
        w.position.z += w.userData.spd * 0.016;
        const span = w.userData.dieZ - w.userData.z0;
        const u = (w.position.z - w.userData.z0) / Math.max(0.001, span);
        if (u < 0.12) w.material.opacity = u / 0.12;
        else if (u > 0.72) w.material.opacity = Math.max(0, 1 - (u - 0.72) / 0.28);
        else w.material.opacity = 0.6;
        if (w.position.z >= w.userData.dieZ) {
          w.position.z = w.userData.z0;
          w.material.opacity = 0;
        }
      }

      for (const g of gulls) {
        const p = g.userData.phase;
        g.position.x += Math.sin(t * 0.4 + p) * 0.02;
        g.position.y = 4.2 + Math.sin(t * 1.1 + p) * 0.6;
        g.rotation.y = Math.sin(t * 0.3 + p) * 0.5;
      }
      for (const f of flames) {
        if (!f.scale) continue;
        const s = 0.85 + Math.sin(t * 9 + (f.userData?.ph || 0)) * 0.12;
        f.scale.setScalar(s);
      }
    },
  };
}
