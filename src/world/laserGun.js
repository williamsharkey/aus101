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

/** AUS101 chassis: dark steel with copper plates and gold hardware. */
const MAT = {
  dark: new THREE.MeshStandardMaterial({ color: 0x1a1a1e, metalness: 0.72, roughness: 0.32 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x2c2e34, metalness: 0.78, roughness: 0.26 }),
  black: new THREE.MeshStandardMaterial({ color: 0x0c0c0e, metalness: 0.4, roughness: 0.52 }),
  gold: new THREE.MeshStandardMaterial({ color: 0xd4a017, metalness: 0.86, roughness: 0.26 }),
  copper: new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 0.8, roughness: 0.3 }),
  lens: new THREE.MeshStandardMaterial({
    color: 0xff1010,
    emissive: 0xff1808,
    emissiveIntensity: 0.9,
    metalness: 0.12,
    roughness: 0.22,
  }),
};

const GEO = new Map();
const box = (w, h, d) => {
  const k = `b${w}_${h}_${d}`;
  let g = GEO.get(k);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    GEO.set(k, g);
  }
  return g;
};
const cyl = (rt, rb, h, s = 8) => {
  const k = `c${rt}_${rb}_${h}_${s}`;
  let g = GEO.get(k);
  if (!g) {
    g = new THREE.CylinderGeometry(rt, rb, h, s);
    GEO.set(k, g);
  }
  return g;
};

function noRaycast() {}

function put(parent, geo, mat, name, pos, rot) {
  const m = new THREE.Mesh(geo, mat);
  m.name = name;
  if (pos) m.position.set(pos[0], pos[1], pos[2]);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

/**
 * Compact laser pistol, ~0.33 m along −Z. Origin at the trigger / hold point.
 * Slide, barrel, iron sights, angled grip, mag, trigger guard, red muzzle lens.
 */
export function makeLaserPistol() {
  const g = new THREE.Group();
  g.name = "laser-pistol";
  const rx = Math.PI / 2;
  const gripA = 0.36;

  // Receiver / frame under the slide.
  put(g, box(0.028, 0.03, 0.145), MAT.dark, "frame", [0, 0.012, -0.018]);
  put(g, box(0.026, 0.016, 0.072), MAT.dark, "dustCover", [0, 0.01, -0.118]);

  // Slide + gold rear serration panel and a dark ejection port.
  put(g, box(0.034, 0.024, 0.2), MAT.steel, "slide", [0, 0.04, -0.045]);
  put(g, box(0.036, 0.02, 0.032), MAT.gold, "slideSerrations", [0, 0.041, 0.04]);
  put(g, box(0.016, 0.01, 0.042), MAT.black, "ejectionPort", [0.011, 0.046, -0.04]);

  // Barrel, muzzle collar, gold ring, red lens (beam origin).
  put(g, cyl(0.01, 0.01, 0.11, 8), MAT.steel, "barrel", [0, 0.034, -0.195], [rx, 0, 0]);
  put(g, cyl(0.013, 0.012, 0.022, 8), MAT.dark, "muzzle", [0, 0.034, -0.258], [rx, 0, 0]);
  put(g, cyl(0.014, 0.014, 0.006, 8), MAT.gold, "muzzleRing", [0, 0.034, -0.248], [rx, 0, 0]);
  put(g, cyl(0.0075, 0.0075, 0.008, 8), MAT.lens, "lens", [0, 0.034, -0.272], [rx, 0, 0]);

  // Gold underbarrel rail.
  put(g, box(0.012, 0.007, 0.058), MAT.gold, "rail", [0, 0.004, -0.125]);

  // Angled grip, copper side plates, mag with gold baseplate.
  put(g, box(0.026, 0.11, 0.04), MAT.dark, "grip", [0, -0.05, 0.038], [gripA, 0, 0]);
  put(g, box(0.004, 0.09, 0.032), MAT.copper, "gripPlateL", [-0.015, -0.048, 0.038], [gripA, 0, 0]);
  put(g, box(0.004, 0.09, 0.032), MAT.copper, "gripPlateR", [0.015, -0.048, 0.038], [gripA, 0, 0]);
  put(g, box(0.02, 0.055, 0.032), MAT.black, "mag", [0, -0.104, 0.058], [gripA, 0, 0]);
  put(g, box(0.022, 0.008, 0.034), MAT.gold, "magPlate", [0, -0.132, 0.068], [gripA, 0, 0]);

  // Square trigger guard + trigger.
  put(g, box(0.007, 0.03, 0.008), MAT.dark, "guardFront", [0, -0.016, -0.014]);
  put(g, box(0.007, 0.007, 0.04), MAT.dark, "guardBottom", [0, -0.034, 0.004]);
  put(g, box(0.006, 0.016, 0.008), MAT.black, "trigger", [0, -0.006, 0.004], [0.18, 0, 0]);

  // Iron sights + hammer.
  put(g, box(0.004, 0.014, 0.01), MAT.gold, "frontSight", [0, 0.059, -0.128]);
  put(g, box(0.006, 0.012, 0.008), MAT.dark, "rearSightL", [-0.01, 0.056, 0.046]);
  put(g, box(0.006, 0.012, 0.008), MAT.dark, "rearSightR", [0.01, 0.056, 0.046]);
  put(g, box(0.008, 0.016, 0.012), MAT.gold, "hammer", [0, 0.03, 0.066], [-0.45, 0, 0]);

  return g;
}

export function spawnLaserGun(scene) {
  const g = makeLaserPistol();
  g.name = "laser-gun";
  scene.add(g);

  const view = makeLaserPistol();
  view.name = "laser-gun-view";
  view.visible = false;
  view.traverse((o) => {
    if (o.isMesh) o.raycast = noRaycast;
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
