/**
 * CLOUD CARTS — was the zinc-free SPF kiosk. Open counter, flavor shelves,
 * sluggy goth clerk.
 */
import * as THREE from "three";
import { mat, box, signTex, metalRoofTex } from "./coconutsHelpers.js";
import { goth } from "../chars/npcs.js";

export const VAPE_SHOP = { x: 8, z: 15, yaw: 0 };
export const FLAVORS = [
  { id: "safeword", name: "SAFEWORD MANGO", hex: 0xffc14a },
  { id: "collar", name: "COLLAR COLA", hex: 0x4a2018 },
  { id: "aftercare", name: "AFTERCARE MINT", hex: 0x7dffc4 },
  { id: "restraint", name: "RESTRAINT BERRY", hex: 0x7a1a4a },
  { id: "impact", name: "IMPACT ICE", hex: 0xa8e8ff },
  { id: "choke", name: "CHOKECHERRY CUSTARD", hex: 0x6b1028 },
  { id: "kneel", name: "KNEEL VANILLA", hex: 0xf4e8c8 },
  { id: "peg", name: "PEG PEACH", hex: 0xff9a6a },
];

export const CLERK_LINES = [
  "vape_clerk_01",
  "vape_clerk_02",
  "vape_clerk_03",
  "vape_clerk_04",
  "vape_clerk_05",
  "vape_clerk_06",
  "vape_clerk_07",
  "vape_clerk_08",
];

/**
 * @param {THREE.Scene} scene
 * @param {(minX:number,maxX:number,minZ:number,maxZ:number)=>void} add
 */
export function spawnVapeShop(scene, add) {
  const g = new THREE.Group();
  g.name = "vape-shop";
  const wall = mat(0x1a1218, { roughness: 0.9 });
  const neon = mat(0xff4ad2, { emissive: 0xff2090, emissiveIntensity: 0.7, roughness: 0.4 });
  const wood = mat(0x3a2418, { roughness: 0.85 });
  const chrome = mat(0xb0b8c0, { roughness: 0.3, metalness: 0.6 });

  const back = box(3.6, 2.5, 0.18, wall);
  back.position.set(0, 1.25, -1.15);
  g.add(back);
  const sideL = box(0.18, 2.5, 2.4, wall);
  sideL.position.set(-1.8, 1.25, 0);
  g.add(sideL);
  const sideR = box(0.18, 2.5, 2.4, wall);
  sideR.position.set(1.8, 1.25, 0);
  g.add(sideR);

  const roofMap = metalRoofTex();
  roofMap.repeat.set(3, 2);
  const roof = box(4.0, 0.14, 2.8, new THREE.MeshStandardMaterial({ map: roofMap, color: 0x2a1020, roughness: 0.5, metalness: 0.2 }));
  roof.position.y = 2.58;
  g.add(roof);

  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(3.0, 0.72),
    new THREE.MeshBasicMaterial({ map: signTex("CLOUD", "CARTS"), side: THREE.DoubleSide })
  );
  sign.position.set(0, 2.15, 1.28);
  g.add(sign);

  const counter = box(3.2, 1.05, 0.7, wood);
  counter.position.set(0, 0.52, 0.55);
  g.add(counter);
  const top = box(3.25, 0.05, 0.74, chrome);
  top.position.set(0, 1.07, 0.55);
  g.add(top);

  for (let i = 0; i < FLAVORS.length; i++) {
    const col = i % 4;
    const row = (i / 4) | 0;
    const cart = box(0.12, 0.22, 0.08, mat(FLAVORS[i].hex, { roughness: 0.45, metalness: 0.15 }));
    cart.position.set(-1.1 + col * 0.7, 1.45 + row * 0.32, -1.0);
    g.add(cart);
  }

  const neonBar = box(3.4, 0.04, 0.06, neon);
  neonBar.position.set(0, 2.42, 1.2);
  g.add(neonBar);

  const clerk = goth();
  clerk.name = "vape-clerk";
  clerk.userData.kind = "goth";
  clerk.userData.paintTarget = true;
  clerk.position.set(0.15, 0, -0.35);
  clerk.rotation.y = 0;
  g.add(clerk);

  const lamp = new THREE.PointLight(0xff66cc, 4.5, 8, 2);
  lamp.position.set(0, 2.1, 0.2);
  g.add(lamp);

  g.position.set(VAPE_SHOP.x, 0, VAPE_SHOP.z);
  scene.add(g);
  add(6.2, 9.8, VAPE_SHOP.z - 1.4, VAPE_SHOP.z + 1.4);

  return {
    group: g,
    clerk,
    counter: { x: VAPE_SHOP.x, z: VAPE_SHOP.z + 0.9 },
    shop: { x: VAPE_SHOP.x, z: VAPE_SHOP.z },
  };
}
