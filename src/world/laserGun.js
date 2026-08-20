import * as THREE from "three";

const HIDES = [
  { x: -29.2, z: 17.4, y: 0.12 }, // behind far palm / rail
  { x: 21.6, z: 19.8, y: 0.18 }, // SLS tower shadow
  { x: 8.4, z: 14.6, y: 0.08 }, // under zinc kiosk lip
  { x: -7.2, z: 22.2, y: 0.1 }, // ice-cream van far side
  { x: 27.5, z: 9.2, y: 0.14 }, // spray-tan tent back
  { x: -16.8, z: -3.4, y: 0.06 }, // in loungers
  { x: 3.2, z: -9.5, y: 0.05 }, // wet-sand hollow
  { x: -22.5, z: 4.2, y: 0.12 }, // behind DJ crate
];

export function spawnLaserGun(scene) {
  const mat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, metalness: 0.55, roughness: 0.4 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xff2020 });
  const g = new THREE.Group();
  g.name = "laser-gun";
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, 0.34), mat);
  body.position.y = 0.04;
  g.add(body);
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.14, 0.07), mat);
  grip.position.set(0, -0.04, 0.08);
  g.add(grip);
  const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.08, 8), glow);
  tip.rotation.x = Math.PI / 2;
  tip.position.set(0, 0.04, -0.2);
  g.add(tip);
  scene.add(g);

  let hid = true;
  let spot = HIDES[0];

  function hide() {
    hid = true;
    spot = HIDES[(Math.random() * HIDES.length) | 0];
    g.position.set(spot.x, spot.y, spot.z);
    g.rotation.y = Math.random() * 6;
    g.visible = true;
  }
  hide();

  function tick(playerPos, onPickup) {
    if (!hid || !playerPos) return;
    const d = Math.hypot(playerPos.x - g.position.x, playerPos.z - g.position.z);
    if (d < 1.15) {
      hid = false;
      g.visible = false;
      onPickup?.();
    }
  }

  return { group: g, hide, tick, get hidden() { return hid; } };
}
