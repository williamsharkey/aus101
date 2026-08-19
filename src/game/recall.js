/**
 * Factory recall fail setpiece.
 * Punch or laser-eyes anyone → helicopters drop copper T-101s → game over.
 * Desktop: KeyF = laser (comment only — no HUD text). No punch button on mobile.
 */
import * as THREE from "three";

const COPPER = 0xb87333;
const GOLD = 0xd4a017;
const EYE = 0xff1010;
const LOCK_S = 4.6;
const HULL_MIN = 6;
const HULL_MAX = 8;
const SPRINT = 9.4;
const DROP_G = 32;
const HELI_Y = 13.2;
const RING = 11.5;

// Shared — iPhone-safe. Do not allocate geo/mat per hull.
const GEO = {
  hull: new THREE.CapsuleGeometry(0.2, 1.16, 3, 6),
  eye: new THREE.SphereGeometry(0.042, 6, 6),
  brow: new THREE.BoxGeometry(0.22, 0.034, 0.07),
  heliBody: new THREE.BoxGeometry(2.35, 0.7, 1.18),
  heliNose: new THREE.BoxGeometry(0.72, 0.48, 0.86),
  heliCabin: new THREE.BoxGeometry(1.05, 0.42, 1.05),
  heliTail: new THREE.BoxGeometry(2.05, 0.14, 0.14),
  heliFin: new THREE.BoxGeometry(0.1, 0.52, 0.32),
  blade: new THREE.BoxGeometry(6.2, 0.035, 0.16),
  tailBlade: new THREE.BoxGeometry(0.04, 0.9, 0.1),
  mast: new THREE.CylinderGeometry(0.05, 0.05, 0.28, 6),
  skid: new THREE.BoxGeometry(2.15, 0.055, 0.055),
  skidLeg: new THREE.BoxGeometry(0.055, 0.26, 0.055),
  beam: new THREE.CylinderGeometry(0.028, 0.01, 1, 5),
};

const MAT = {
  copper: new THREE.MeshStandardMaterial({ color: COPPER, metalness: 0.85, roughness: 0.35 }),
  gold: new THREE.MeshStandardMaterial({ color: GOLD, metalness: 0.82, roughness: 0.32 }),
  eye: new THREE.MeshBasicMaterial({ color: EYE }),
  heli: new THREE.MeshStandardMaterial({ color: 0x1a1612, metalness: 0.45, roughness: 0.55 }),
  heliAccent: new THREE.MeshStandardMaterial({ color: COPPER, metalness: 0.7, roughness: 0.4 }),
  rotor: new THREE.MeshStandardMaterial({ color: 0x2a2420, metalness: 0.35, roughness: 0.62 }),
  beam: new THREE.MeshBasicMaterial({ color: EYE }),
};

const Y_UP = new THREE.Vector3(0, 1, 0);
const _dir = new THREE.Vector3();
const _mid = new THREE.Vector3();

function shadow(mesh, cast = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  return mesh;
}

function makeHull() {
  const root = new THREE.Group();
  root.name = "recall-hull";
  const body = shadow(new THREE.Mesh(GEO.hull, MAT.copper));
  body.position.y = 0.2 + 0.58;
  root.add(body);
  const brow = shadow(new THREE.Mesh(GEO.brow, MAT.gold), false);
  brow.position.set(0, 1.58, 0.14);
  root.add(brow);
  for (const x of [-0.055, 0.055]) {
    const eye = new THREE.Mesh(GEO.eye, MAT.eye);
    eye.position.set(x, 1.52, 0.16);
    root.add(eye);
  }
  return root;
}

function makeHeli() {
  const root = new THREE.Group();
  root.name = "recall-heli";
  const body = shadow(new THREE.Mesh(GEO.heliBody, MAT.heli));
  body.position.y = 0.55;
  const nose = shadow(new THREE.Mesh(GEO.heliNose, MAT.heli));
  nose.position.set(0, 0.42, 0.92);
  const cabin = shadow(new THREE.Mesh(GEO.heliCabin, MAT.heliAccent), false);
  cabin.position.set(0, 0.92, 0.12);
  const tail = shadow(new THREE.Mesh(GEO.heliTail, MAT.heli));
  tail.position.set(0, 0.62, -1.85);
  const fin = shadow(new THREE.Mesh(GEO.heliFin, MAT.heli));
  fin.position.set(0, 0.95, -2.78);
  const mast = shadow(new THREE.Mesh(GEO.mast, MAT.rotor), false);
  mast.position.set(0, 1.22, 0);
  root.add(body, nose, cabin, tail, fin, mast);

  for (const x of [-0.42, 0.42]) {
    const skid = shadow(new THREE.Mesh(GEO.skid, MAT.rotor), false);
    skid.position.set(x, 0.05, 0.08);
    const a = shadow(new THREE.Mesh(GEO.skidLeg, MAT.rotor), false);
    a.position.set(x, 0.2, 0.55);
    const b = shadow(new THREE.Mesh(GEO.skidLeg, MAT.rotor), false);
    b.position.set(x, 0.2, -0.45);
    root.add(skid, a, b);
  }

  const rotor = new THREE.Group();
  rotor.position.set(0, 1.38, 0);
  const bladeA = shadow(new THREE.Mesh(GEO.blade, MAT.rotor), false);
  const bladeB = shadow(new THREE.Mesh(GEO.blade, MAT.rotor), false);
  bladeB.rotation.y = Math.PI / 2;
  rotor.add(bladeA, bladeB);
  root.add(rotor);

  const tailRotor = new THREE.Group();
  tailRotor.position.set(0.12, 0.95, -2.82);
  const tb = shadow(new THREE.Mesh(GEO.tailBlade, MAT.rotor), false);
  tailRotor.add(tb);
  root.add(tailRotor);

  root.userData.rotor = rotor;
  root.userData.tailRotor = tailRotor;
  return root;
}

/**
 * @param {{ scene: THREE.Scene, onGameOver?: () => void, play?: (id: string) => unknown }} opts
 */
export function createRecall({ scene, onGameOver, play } = {}) {
  let wanted = false;
  let ended = false;
  let elapsed = 0;
  let beamT = 0;
  const lastPos = new THREE.Vector3();
  /** @type {{ root: THREE.Group, x: number, y: number, z: number, vy: number, phase: number, speed: number }[]} */
  const hulls = [];
  /** @type {{ root: THREE.Group, cx: number, cz: number, angle: number, radius: number, spin: number }[]} */
  const helis = [];
  /** @type {THREE.Mesh | null} */
  let beam = null;

  function spawnSwarm(origin) {
    const n = HULL_MIN + ((Math.random() * (HULL_MAX - HULL_MIN + 1)) | 0);
    const heliN = n > 6 ? 3 : 2;
    const yaw0 = Math.random() * Math.PI * 2;

    for (let i = 0; i < heliN; i++) {
      const angle = yaw0 + (i / heliN) * Math.PI * 2;
      const hx = origin.x + Math.cos(angle) * RING;
      const hz = origin.z + Math.sin(angle) * RING;
      const root = makeHeli();
      root.position.set(hx, HELI_Y, hz);
      root.rotation.y = angle + Math.PI;
      scene.add(root);
      helis.push({
        root,
        cx: origin.x,
        cz: origin.z,
        angle,
        radius: RING,
        spin: 18 + Math.random() * 6,
      });
    }

    for (let i = 0; i < n; i++) {
      const h = helis[i % helis.length];
      const jitter = ((i / heliN) | 0) * 0.55;
      const side = (i % 2 === 0 ? -1 : 1) * (0.35 + jitter);
      const root = makeHull();
      const x = h.root.position.x + Math.cos(h.angle + Math.PI * 0.5) * side;
      const z = h.root.position.z + Math.sin(h.angle + Math.PI * 0.5) * side;
      const y = HELI_Y - 1.05;
      root.position.set(x, y, z);
      scene.add(root);
      hulls.push({
        root,
        x,
        y,
        z,
        vy: -1.2 - Math.random() * 2.4,
        phase: Math.random() * Math.PI * 2,
        speed: SPRINT * (0.88 + Math.random() * 0.22),
      });
    }
  }

  function fireBeam(origin) {
    if (beam) scene.remove(beam);
    const target = helis[0]
      ? helis[0].root.position
      : new THREE.Vector3(origin.x, origin.y + 1.55, origin.z - 8);
    const from = _mid.set(origin.x, origin.y + 1.55, origin.z);
    _dir.copy(target).sub(from);
    _dir.y = Math.max(0.4, _dir.y);
    const len = Math.max(4, _dir.length());
    _dir.normalize();
    beam = new THREE.Mesh(GEO.beam, MAT.beam);
    beam.scale.set(1, len, 1);
    beam.position.copy(from).addScaledVector(_dir, len * 0.5);
    beam.quaternion.setFromUnitVectors(Y_UP, _dir);
    scene.add(beam);
    beamT = 0.2;
  }

  /**
   * Arm the recall. `kind` is `'laser'` (desktop KeyF) or `'punch'`.
   * @param {'laser' | 'punch'} kind
   * @returns {boolean}
   */
  function tryFire(kind) {
    if (wanted) return false;
    if (kind !== "laser" && kind !== "punch") return false;
    if (!scene) return false;
    wanted = true;
    elapsed = 0;
    spawnSwarm(lastPos);
    if (kind === "laser") fireBeam(lastPos);
    if (typeof play === "function") {
      try {
        play("factory_recall_01");
      } catch {
        /* voice optional */
      }
    }
    return true;
  }

  /**
   * @param {number} dt
   * @param {{ x: number, y?: number, z: number } | THREE.Vector3} playerPos
   */
  function tick(dt, playerPos) {
    if (playerPos) lastPos.set(playerPos.x, playerPos.y || 0, playerPos.z);
    if (!wanted || !(dt > 0)) return;
    const h = Math.min(dt, 0.05);
    elapsed += h;

    if (beam) {
      beamT -= h;
      if (beamT <= 0) {
        scene.remove(beam);
        beam = null;
      }
    }

    for (const heli of helis) {
      heli.angle += h * 0.28;
      const hx = heli.cx + Math.cos(heli.angle) * heli.radius;
      const hz = heli.cz + Math.sin(heli.angle) * heli.radius;
      heli.root.position.set(hx, HELI_Y + Math.sin(elapsed * 2.1 + heli.angle) * 0.18, hz);
      heli.root.lookAt(lastPos.x, HELI_Y, lastPos.z);
      heli.root.userData.rotor.rotation.y += heli.spin * h;
      heli.root.userData.tailRotor.rotation.x += heli.spin * 1.7 * h;
    }

    for (const u of hulls) {
      const dx = lastPos.x - u.x;
      const dz = lastPos.z - u.z;
      if (u.y > 0) {
        u.vy -= DROP_G * h;
        u.y += u.vy * h;
        if (u.y <= 0) {
          u.y = 0;
          u.vy = 0;
        }
        u.root.rotation.x = 0;
      } else {
        const dist = Math.hypot(dx, dz);
        if (dist > 0.55) {
          const inv = 1 / dist;
          u.x += dx * inv * u.speed * h;
          u.z += dz * inv * u.speed * h;
        }
        u.phase += h * 14;
        u.root.rotation.x = 0.12;
      }
      u.root.rotation.y = Math.atan2(dx, dz);
      const bob = u.y > 0 ? 0 : Math.abs(Math.sin(u.phase)) * 0.06;
      u.root.position.set(u.x, u.y + bob, u.z);
    }

    if (!ended && elapsed >= LOCK_S) {
      ended = true;
      onGameOver?.();
    }
  }

  return {
    tryFire,
    tick,
    get wanted() {
      return wanted;
    },
  };
}
