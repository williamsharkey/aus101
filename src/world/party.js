/**
 * Gold Coast extras — two guitar Kens, a sand boombox + dancers, music-spot radii.
 * Boardwalk is Z=16; all party props stay on sand well seaward of the deck.
 */
import * as THREE from "three";
import { ken, babe } from "../chars/npcs.js";

const WOOD = 0x8b5428;
const WOOD_NECK = 0xc4a06a;
const WOOD_DARK = 0x2c1810;

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function makeGuitar() {
  const g = new THREE.Group();
  const wood = std(WOOD, { roughness: 0.62, metalness: 0.08 });
  const neckM = std(WOOD_NECK, { roughness: 0.5 });
  const dark = std(WOOD_DARK, { roughness: 0.48 });

  const body = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), wood));
  body.scale.set(1.05, 1.22, 0.28);
  g.add(body);

  const bout = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), wood));
  bout.scale.set(0.95, 1.05, 0.28);
  bout.position.set(0, -0.12, 0);
  g.add(bout);

  const neck = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.48, 0.032), neckM));
  neck.position.set(0, 0.4, 0);
  g.add(neck);

  const headstock = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.1, 0.028), wood));
  headstock.position.set(0, 0.68, 0);
  g.add(headstock);

  const hole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.02, 12), dark));
  hole.rotation.x = Math.PI / 2;
  hole.position.set(0, 0.02, 0.04);
  g.add(hole);

  const bridge = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.016), dark));
  bridge.position.set(0, -0.1, 0.038);
  g.add(bridge);

  return g;
}

function armPivot(npc, side) {
  const parts = [];
  for (const c of [...npc.children]) {
    if (side * c.position.x > 0.15 && c.position.y > 0.85) parts.push(c);
  }
  const pivot = new THREE.Group();
  if (!parts.length) return pivot;
  const shoulder = parts.reduce((a, b) => (a.position.y >= b.position.y ? a : b));
  pivot.position.copy(shoulder.position);
  npc.add(pivot);
  for (const p of parts) {
    p.position.sub(pivot.position);
    pivot.add(p);
  }
  return pivot;
}

function placeGuitarKen(opts, x, y, z, yaw) {
  const mesh = ken(opts);
  mesh.position.set(x, y, z);
  mesh.rotation.y = yaw;

  const guitar = makeGuitar();
  guitar.position.set(0.08, 0.9, 0.2);
  guitar.rotation.set(0.22, 0.12, 1.05);
  mesh.add(guitar);

  const strum = armPivot(mesh, 1);
  strum.rotation.set(-1.12, 0.08, -0.52);
  const fret = armPivot(mesh, -1);
  fret.rotation.set(-0.98, -0.06, 0.72);

  return { mesh, guitar, strum, fret, yaw };
}

function makeBoombox() {
  const g = new THREE.Group();
  const shell = std(0x1a1a1e, { roughness: 0.42, metalness: 0.35 });
  const chrome = std(0x9aa0a8, { roughness: 0.28, metalness: 0.65 });
  const cone = std(0x111111, { roughness: 0.55, metalness: 0.4 });

  const body = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.42, 0.32), shell));
  body.position.y = 0.22;
  g.add(body);

  for (const sx of [-0.26, 0.26]) {
    const rim = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.155, 0.04, 16), chrome));
    rim.rotation.x = Math.PI / 2;
    rim.position.set(sx, 0.22, 0.155);
    g.add(rim);
    const speaker = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 0.03, 14), cone));
    speaker.rotation.x = Math.PI / 2;
    speaker.position.set(sx, 0.22, 0.175);
    g.add(speaker);
  }

  const handle = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.016, 6, 12, Math.PI), chrome));
  handle.rotation.set(0, 0, Math.PI);
  handle.position.set(0, 0.44, 0);
  g.add(handle);

  const grille = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.02), std(0x2a2a30, { metalness: 0.25 })));
  grille.position.set(0, 0.22, 0.165);
  g.add(grille);

  return g;
}

function placeDancer(opts, x, z, yaw) {
  const mesh = babe(opts);
  mesh.position.set(x, 0, z);
  mesh.rotation.y = yaw;
  return { mesh, yaw, phase: x * 0.7 + z * 0.4 };
}

/**
 * @param {THREE.Scene} scene
 * @returns {{ tick: (tSeconds: number) => void, musicSpots: { id: string, position: THREE.Vector3, radius: number }[] }}
 */
export function spawnParty(scene) {
  const guitarAPos = new THREE.Vector3(-6, 0, 5);
  const guitarBPos = new THREE.Vector3(5, 0, 3);
  const boomPos = new THREE.Vector3(12, 0, 8);

  const kenA = placeGuitarKen({ hair: 0xffe08a, shorts: 0x0e4a52, skin: 0xd8a56e }, guitarAPos.x, 0, guitarAPos.z, 0.35);
  const kenB = placeGuitarKen({ hair: 0xf0d48a, shorts: 0xc8402e, skin: 0xce8f58 }, guitarBPos.x, 0, guitarBPos.z, -0.4);
  kenA.mesh.name = "ken-guitar-a";
  kenB.mesh.name = "ken-guitar-b";
  scene.add(kenA.mesh, kenB.mesh);

  const boombox = makeBoombox();
  boombox.position.copy(boomPos);
  boombox.name = "boombox";
  scene.add(boombox);

  const dancerA = placeDancer({ hair: 0x1a1210, bikini: 0xff6b9a, skin: 0xe8b898 }, 10.85, 7.15, 0.55);
  const dancerB = placeDancer({ hair: 0xf2c12e, bikini: 0x2f7fd0, skin: 0xd9a078 }, 13.2, 8.7, -0.7);
  dancerA.mesh.name = "babe-boom-a";
  dancerB.mesh.name = "babe-boom-b";
  scene.add(dancerA.mesh, dancerB.mesh);

  const kens = [kenA, kenB];
  const dancers = [dancerA, dancerB];

  return {
    tick(tSeconds) {
      for (let i = 0; i < kens.length; i++) {
        const k = kens[i];
        const s = Math.sin(tSeconds * 8.2 + i * 1.7);
        k.strum.rotation.x = -1.12 + s * 0.14;
        k.strum.rotation.z = -0.52 + s * 0.08;
        k.guitar.rotation.z = 1.05 + s * 0.035;
        k.guitar.rotation.x = 0.22 + Math.abs(s) * 0.02;
        k.fret.rotation.z = 0.72 + Math.sin(tSeconds * 3.4 + i) * 0.04;
        k.mesh.rotation.y = k.yaw + Math.sin(tSeconds * 1.1 + i) * 0.04;
      }
      for (const d of dancers) {
        const s = Math.sin(tSeconds * 4.6 + d.phase);
        d.mesh.position.y = Math.abs(s) * 0.14;
        d.mesh.rotation.z = Math.sin(tSeconds * 2.3 + d.phase) * 0.16;
        d.mesh.rotation.y = d.yaw + Math.sin(tSeconds * 1.7 + d.phase) * 0.28;
      }
    },
    musicSpots: [
      { id: "guitar-a", position: kenA.mesh.position, radius: 7 },
      { id: "guitar-b", position: kenB.mesh.position, radius: 7 },
      { id: "boombox", position: boombox.position, radius: 8 },
      { id: "dj", position: new THREE.Vector3(-24, 0, 7), radius: 10 },
    ],
  };
}
