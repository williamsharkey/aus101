/**
 * Gold Coast beach stub — patterns ported from Coconuts (Steve), new AU layout.
 * ~80×50 m playable sand + nearer shore-break foam strip + boardwalk band.
 */
import * as THREE from "three";

export const WORLD = {
  width: 80,
  depth: 50,
  boardwalkZ: 18, // deck toward +Z from spawn
  wetZ: -8,
  oceanZ: -18,
};

export const BOUNDS = {
  minX: -WORLD.width / 2 + 0.5,
  maxX: WORLD.width / 2 - 0.5,
  minZ: -WORLD.depth / 2 + 0.5,
  maxZ: WORLD.depth / 2 - 0.5,
};

function sandCanvas() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const x = c.getContext("2d");
  x.fillStyle = "#ddc486";
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 12000; i++) {
    const gx = Math.random() * 256;
    const gy = Math.random() * 256;
    const r = Math.random();
    x.fillStyle =
      r < 0.4 ? "rgba(168,140,92,0.30)" : r < 0.7 ? "rgba(255,243,205,0.28)" : "rgba(200,180,130,0.22)";
    x.fillRect(gx, gy, 1.4, 1.4);
  }
  return c;
}

function woodCanvas() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const x = c.getContext("2d");
  x.fillStyle = "#a9682f";
  x.fillRect(0, 0, 256, 64);
  for (let i = 0; i < 70; i++) {
    const y = Math.random() * 64;
    const w = 20 + Math.random() * 60;
    x.fillStyle = ["#8f561f", "#b9762f", "#c2853f", "#965a27"][i % 4];
    x.fillRect(Math.random() * 256, y, w, 2 + Math.random() * 4);
  }
  return c;
}

/**
 * @param {THREE.Scene} scene
 * @param {{ addCollider: Function }} colliders
 */
export function buildBeach(scene, colliders) {
  const waves = [];

  const sandTex = new THREE.CanvasTexture(sandCanvas());
  sandTex.wrapS = sandTex.wrapT = THREE.RepeatWrapping;
  sandTex.colorSpace = THREE.SRGBColorSpace;
  sandTex.repeat.set(40, 25);
  const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.width + 20, WORLD.depth + 20),
    new THREE.MeshStandardMaterial({ map: sandTex, roughness: 1 })
  );
  sand.rotation.x = -Math.PI / 2;
  sand.receiveShadow = true;
  scene.add(sand);

  // wet sand band
  const wet = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD.width + 10, 10),
    new THREE.MeshStandardMaterial({ color: 0x9a8560, roughness: 0.55, metalness: 0.05 })
  );
  wet.rotation.x = -Math.PI / 2;
  wet.position.set(0, 0.03, WORLD.wetZ);
  wet.receiveShadow = true;
  scene.add(wet);

  // nearer ocean
  const oceanGeo = new THREE.PlaneGeometry(WORLD.width + 40, 28, 32, 8);
  const ocean = new THREE.Mesh(
    oceanGeo,
    new THREE.MeshStandardMaterial({ color: 0x2fb0c6, roughness: 0.3, metalness: 0.1 })
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(0, 0.04, WORLD.oceanZ - 8);
  scene.add(ocean);
  const oceanBase = Float32Array.from(oceanGeo.attributes.position.array);

  // foam crests that die on wet sand (new AU rule — nearer than Coconuts strip)
  for (let i = 0; i < 5; i++) {
    const w = new THREE.Mesh(
      new THREE.PlaneGeometry(WORLD.width + 20, 2.2),
      new THREE.MeshBasicMaterial({
        color: 0xe6f3f0,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
    );
    w.rotation.x = -Math.PI / 2;
    w.userData.spd = 1.6 + i * 0.35;
    w.userData.z0 = WORLD.oceanZ - 4 - i * 3;
    w.userData.dieZ = WORLD.wetZ + 1.5;
    w.position.set(0, 0.07, w.userData.z0);
    scene.add(w);
    waves.push(w);
  }

  // timber boardwalk
  const woodTex = new THREE.CanvasTexture(woodCanvas());
  woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;
  woodTex.colorSpace = THREE.SRGBColorSpace;
  woodTex.repeat.set(24, 4);
  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(WORLD.width * 0.7, 0.18, 8),
    new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.85 })
  );
  deck.position.set(0, 0.12, WORLD.boardwalkZ);
  deck.receiveShadow = true;
  deck.castShadow = true;
  scene.add(deck);
  colliders.addCollider(-WORLD.width * 0.35, WORLD.width * 0.35, WORLD.boardwalkZ - 0.2, WORLD.boardwalkZ + 0.2);
  // rail posts as thin colliders
  for (const x of [-22, -10, 0, 10, 22]) {
    const post = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 1.1, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x6e4a2e, roughness: 0.9 })
    );
    post.position.set(x, 0.7, WORLD.boardwalkZ + 3.6);
    post.castShadow = true;
    scene.add(post);
    colliders.addCollider(x - 0.2, x + 0.2, WORLD.boardwalkZ + 3.4, WORLD.boardwalkZ + 3.8);
  }
  const rail = new THREE.Mesh(
    new THREE.BoxGeometry(WORLD.width * 0.7, 0.1, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x6e4a2e })
  );
  rail.position.set(0, 1.15, WORLD.boardwalkZ + 3.6);
  scene.add(rail);

  // SPF kiosk (scenery)
  const kiosk = new THREE.Group();
  const booth = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 2.6, 2.4),
    new THREE.MeshStandardMaterial({ color: 0xf6f4ef, roughness: 0.92 })
  );
  booth.position.y = 1.3;
  kiosk.add(booth);
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(3.6, 0.2, 2.8),
    new THREE.MeshStandardMaterial({ color: 0xc8402e, roughness: 0.55, metalness: 0.2 })
  );
  roof.position.y = 2.7;
  kiosk.add(roof);
  kiosk.position.set(14, 0, WORLD.boardwalkZ - 1);
  scene.add(kiosk);
  colliders.addCollider(12.4, 15.6, WORLD.boardwalkZ - 2.2, WORLD.boardwalkZ + 0.2);

  // lifeguard tower
  const tower = new THREE.Group();
  const legs = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 3.2, 2.2),
    new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.95 })
  );
  legs.position.y = 1.6;
  tower.add(legs);
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 1.8, 2.8),
    new THREE.MeshStandardMaterial({ color: 0xf3f0e8 })
  );
  cabin.position.y = 4.0;
  tower.add(cabin);
  tower.position.set(-16, 0, WORLD.boardwalkZ - 2);
  scene.add(tower);
  colliders.addCollider(-17.4, -14.6, WORLD.boardwalkZ - 3.4, WORLD.boardwalkZ - 0.6);

  // a few umbrellas (Coconuts-style prop pattern, simplified)
  for (const [ux, uz] of [
    [-8, 4],
    [6, 2],
    [-4, -2],
    [10, 6],
  ]) {
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 2.2, 8),
      new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    pole.position.set(ux, 1.1, uz);
    scene.add(pole);
    const canopy = new THREE.Mesh(
      new THREE.ConeGeometry(1.6, 0.35, 16, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xe85d4c, side: THREE.DoubleSide, roughness: 0.8 })
    );
    canopy.position.set(ux, 2.2, uz);
    scene.add(canopy);
  }

  return {
    ocean,
    oceanBase,
    waves,
    update(t) {
      // gentle vertex swell
      const pos = ocean.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = oceanBase[ix];
        const z = oceanBase[ix + 2];
        pos.array[ix + 1] =
          Math.sin(x * 0.15 + t * 1.2) * 0.12 + Math.sin(z * 0.22 + t * 0.9) * 0.08;
      }
      pos.needsUpdate = true;
      ocean.geometry.computeVertexNormals();

      for (const w of waves) {
        w.position.z += w.userData.spd * 0.016;
        const span = w.userData.dieZ - w.userData.z0;
        const u = (w.position.z - w.userData.z0) / Math.max(0.001, span);
        if (u < 0.15) w.material.opacity = u / 0.15;
        else if (u > 0.75) w.material.opacity = Math.max(0, 1 - (u - 0.75) / 0.25);
        else w.material.opacity = 0.55;
        if (w.position.z >= w.userData.dieZ) {
          w.position.z = w.userData.z0;
          w.material.opacity = 0;
        }
      }
    },
  };
}

export function setupLights(scene) {
  const hemi = new THREE.HemisphereLight(0x7ec8ff, 0xc4a574, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe2b0, 1.85);
  sun.position.set(18, 42, -8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 120;
  sun.shadow.camera.left = -40;
  sun.shadow.camera.right = 40;
  sun.shadow.camera.top = 40;
  sun.shadow.camera.bottom = -40;
  sun.shadow.bias = -0.0004;
  scene.add(sun);
  return { hemi, sun };
}
