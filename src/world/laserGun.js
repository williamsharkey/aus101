import * as THREE from "three";

export const HIDES = [
  { x: -29.2, z: 17.4, y: 0.12 }, // behind far palm / rail
  { x: 21.6, z: 19.8, y: 0.18 }, // SLS tower shadow
  { x: 8.4, z: 14.6, y: 0.08 }, // under zinc kiosk lip
  { x: -7.2, z: 22.2, y: 0.1 }, // ice-cream van far side
  { x: 27.5, z: 9.2, y: 0.14 }, // spray-tan tent back
  { x: -16.8, z: -3.4, y: 0.06 }, // in loungers
  { x: 3.2, z: -9.5, y: 0.05 }, // wet-sand hollow
  { x: -22.5, z: 4.2, y: 0.12 }, // behind DJ crate
];

function makeLaserPistol() {
  const mat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, metalness: 0.62, roughness: 0.38 });
  const slideM = new THREE.MeshStandardMaterial({ color: 0x2a2a32, metalness: 0.7, roughness: 0.32 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xb08a2a, metalness: 0.8, roughness: 0.28 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xff2020 });
  const g = new THREE.Group();
  g.name = "laser-gun";
  const shadow = (m) => {
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  };
  const slide = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.055, 0.22), slideM));
  slide.position.set(0, 0.055, -0.02);
  g.add(slide);
  const rec = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.16), mat));
  rec.position.set(0, 0.02, 0.02);
  g.add(rec);
  const barrel = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.16, 8), mat));
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.052, -0.18);
  g.add(barrel);
  const muzzle = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, 0.04, 8), glow));
  muzzle.rotation.x = Math.PI / 2;
  muzzle.position.set(0, 0.052, -0.27);
  g.add(muzzle);
  const grip = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.13, 0.055), mat));
  grip.position.set(0, -0.05, 0.07);
  grip.rotation.x = 0.32;
  g.add(grip);
  const guard = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.045, 0.06), gold));
  guard.position.set(0, -0.01, 0.02);
  g.add(guard);
  const mag = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.08, 0.04), mat));
  mag.position.set(0, -0.09, 0.055);
  g.add(mag);
  const rear = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.022, 0.012), gold));
  rear.position.set(0, 0.088, 0.08);
  g.add(rear);
  const front = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.02, 0.01), gold));
  front.position.set(0, 0.088, -0.12);
  g.add(front);
  return g;
}

export function spawnLaserGun(scene) {
  const g = makeLaserPistol();
  scene.add(g);
  const view = makeLaserPistol();
  view.visible = false;
  view.traverse((o) => {
    if (o.isMesh) o.raycast = () => {};
  });

  let hid = true;
  let spot = HIDES[0];

  function hide(at) {
    hid = true;
    if (at && Number.isFinite(at.x) && Number.isFinite(at.z)) {
      spot = { x: at.x, y: at.y ?? 0.1, z: at.z };
    } else {
      spot = HIDES[(Math.random() * HIDES.length) | 0];
    }
    g.position.set(spot.x, spot.y, spot.z);
    g.rotation.y = Math.random() * 6;
    g.visible = true;
  }
  function stashAway() {
    hid = true;
    spot = HIDES[(Math.random() * HIDES.length) | 0];
    g.position.set(spot.x, spot.y, spot.z);
    g.rotation.y = Math.random() * 6;
    g.visible = false;
    return { x: spot.x, y: spot.y, z: spot.z };
  }
  function conceal() {
    hid = true;
    g.visible = false;
  }
  function reveal() {
    g.visible = true;
    hid = true;
  }
  hide();

  function tick(playerPos, onPickup) {
    if (!g.visible || !hid || !playerPos) return;
    const d = Math.hypot(playerPos.x - g.position.x, playerPos.z - g.position.z);
    if (d < 1.15) {
      hid = false;
      g.visible = false;
      onPickup?.();
    }
  }

  return { group: g, view, hide, stashAway, conceal, reveal, tick, get hidden() { return hid; } };
}
