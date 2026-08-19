/**
 * CHAR0 beach cast — Ken, Babe, SIGMA_07, Goth, extras, child, gull.
 * Simple primitives, distinct silhouettes. Adults ~1.7 m. Origin at feet.
 */
import * as THREE from "three";
import { GC as WORLD } from "../world/goldCoast.js";

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function box(w, h, d, mat) {
  return shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat));
}

function sphere(r, mat, wSeg = 10, hSeg = 8) {
  return shadow(new THREE.Mesh(new THREE.SphereGeometry(r, wSeg, hSeg), mat));
}

function cyl(rTop, rBot, h, mat, segs = 8) {
  return shadow(new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, segs), mat));
}

/**
 * Shared biped. `shirt` null = shirtless. `sleeves` paints upper+forearm with shirt.
 */
function buildBiped({
  height = 1.7,
  skin = 0xc68642,
  hair = 0x2a1a12,
  shirt = null,
  sleeves = false,
  bottoms = 0x2a4a6a,
  bottomsH = 0.28,
  shoulderW = 0.36,
  chestD = 0.16,
  chestW = 0.28,
  hipW = 0.22,
}) {
  const g = new THREE.Group();
  const skinM = std(skin);
  const hairM = std(hair, { roughness: 0.85 });
  const shirtM = shirt == null ? null : std(shirt);
  const pantM = std(bottoms);
  const scale = height / 1.7;
  const headR = 0.11 * scale;
  const headY = height - headR - 0.02;
  const shoulderY = height * 0.82;
  const hipY = height * 0.52;
  const torsoH = shoulderY - hipY - 0.04;

  const head = sphere(headR, skinM, 12, 10);
  head.position.y = headY;
  g.add(head);

  const hairCap = sphere(headR * 1.04, hairM, 10, 8);
  hairCap.position.y = headY + headR * 0.12;
  hairCap.scale.set(1.02, 0.7, 1.05);
  g.add(hairCap);

  const neck = cyl(0.035 * scale, 0.04 * scale, 0.08 * scale, skinM, 8);
  neck.position.y = shoulderY + 0.06 * scale;
  g.add(neck);

  const torsoMat = shirtM || skinM;
  const torso = box(chestW, torsoH, chestD, torsoMat);
  torso.position.y = hipY + torsoH * 0.5 + 0.02;
  g.add(torso);

  const hips = box(hipW, 0.12 * scale, chestD * 0.95, pantM);
  hips.position.y = hipY;
  g.add(hips);

  const armLenU = 0.26 * scale;
  const armLenL = 0.24 * scale;
  const armR = 0.038 * scale;
  for (const side of [-1, 1]) {
    const sx = side * (shoulderW / 2);
    const sleeveM = shirtM && sleeves ? shirtM : skinM;
    const shoulder = sphere(0.045 * scale, sleeveM, 8, 6);
    shoulder.position.set(sx, shoulderY, 0);
    g.add(shoulder);
    const upper = cyl(armR, armR * 1.1, armLenU, sleeveM);
    upper.position.set(sx, shoulderY - armLenU / 2, 0);
    g.add(upper);
    const forearm = cyl(armR * 0.85, armR, armLenL, sleeveM);
    forearm.position.set(sx, shoulderY - armLenU - armLenL / 2, 0);
    g.add(forearm);
    const hand = sphere(0.032 * scale, skinM, 8, 6);
    hand.position.set(sx, shoulderY - armLenU - armLenL - 0.02, 0);
    g.add(hand);
  }

  const legLen = hipY - 0.06 * scale;
  const thighH = legLen * 0.52;
  const shinH = legLen * 0.48;
  const legR = 0.05 * scale;
  const thighMat = bottomsH > 0.2 ? pantM : skinM;
  for (const side of [-1, 1]) {
    const lx = side * (hipW * 0.32);
    const thigh = cyl(legR * 0.9, legR, thighH, thighMat);
    thigh.position.set(lx, hipY - thighH / 2, 0);
    g.add(thigh);
    const shinMat = bottomsH > thighH * 0.85 ? pantM : skinM;
    const shin = cyl(legR * 0.75, legR * 0.85, shinH, shinMat);
    shin.position.set(lx, hipY - thighH - shinH / 2, 0);
    g.add(shin);
    const foot = box(0.07 * scale, 0.045 * scale, 0.14 * scale, std(0x2a2420));
    foot.position.set(lx, 0.022 * scale, 0.03);
    g.add(foot);
  }

  g.userData.body = { head, hairCap, headY, headR, shoulderY, hipY, scale, skinM, hairM };
  return g;
}

function addSharkTooth(g, y) {
  const cord = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.006, 6, 16), std(0x1a1a1a)));
  cord.position.y = y;
  cord.rotation.x = Math.PI / 2;
  g.add(cord);
  const tooth = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.05, 4), std(0xf4f0e6, { roughness: 0.4 })));
  tooth.position.set(0, y - 0.055, 0.04);
  tooth.rotation.x = 0.4;
  g.add(tooth);
}

function ken({ hair = 0xf4c431, shorts = 0x1f6f78, skin = 0xd4a06a } = {}) {
  const g = buildBiped({
    height: 1.78,
    skin,
    hair,
    shirt: null,
    sleeves: false,
    bottoms: shorts,
    bottomsH: 0.32,
    shoulderW: 0.46,
    chestW: 0.34,
    chestD: 0.18,
    hipW: 0.24,
  });
  const { headY, headR } = g.userData.body;
  const quiff = box(0.14, 0.1, 0.1, std(hair, { roughness: 0.85 }));
  quiff.position.set(0, headY + headR * 0.55, 0.02);
  g.add(quiff);
  addSharkTooth(g, g.userData.body.shoulderY + 0.04);
  const abs = box(0.2, 0.16, 0.04, std(skin, { roughness: 0.55 }));
  abs.position.set(0, 1.12, 0.09);
  g.add(abs);
  g.userData.kind = "ken";
  g.userData.ageBand = "adult";
  g.name = "ken";
  return g;
}

function babe({ hair = 0xc9a227, bikini = 0xe23d7a, skin = 0xe0b08a } = {}) {
  const g = buildBiped({
    height: 1.68,
    skin,
    hair,
    shirt: null,
    sleeves: false,
    bottoms: bikini,
    bottomsH: 0.12,
    shoulderW: 0.34,
    chestW: 0.24,
    chestD: 0.14,
    hipW: 0.24,
  });
  const { headY, headR, hipY } = g.userData.body;
  const tresses = sphere(headR * 1.15, std(hair, { roughness: 0.9 }), 8, 8);
  tresses.scale.set(0.85, 1.8, 0.7);
  tresses.position.set(0, headY - 0.12, -0.06);
  g.add(tresses);
  const cupL = sphere(0.055, std(bikini), 8, 6);
  cupL.position.set(-0.055, 1.28, 0.09);
  const cupR = sphere(0.055, std(bikini), 8, 6);
  cupR.position.set(0.055, 1.28, 0.09);
  g.add(cupL, cupR);
  const bottoms = box(0.2, 0.08, 0.12, std(bikini));
  bottoms.position.set(0, hipY - 0.02, 0.01);
  g.add(bottoms);
  g.userData.kind = "babe";
  g.userData.ageBand = "adult";
  g.name = "babe";
  return g;
}

function sigma07() {
  const g = buildBiped({
    height: 1.72,
    skin: 0xc4a882,
    hair: 0x1a1612,
    shirt: 0x141414,
    sleeves: true,
    bottoms: 0x4a4638,
    bottomsH: 0.7,
    shoulderW: 0.32,
    chestW: 0.26,
    chestD: 0.15,
    hipW: 0.22,
  });
  const graphic = box(0.12, 0.12, 0.02, std(0x5a1010));
  graphic.position.set(0, 1.22, 0.09);
  g.add(graphic);
  for (const side of [-1, 1]) {
    const pocket = box(0.07, 0.08, 0.04, std(0x3a382c));
    pocket.position.set(side * 0.09, 0.72, 0.1);
    g.add(pocket);
    const sock = cyl(0.038, 0.04, 0.12, std(0xefeee8));
    sock.position.set(side * 0.07, 0.1, 0);
    g.add(sock);
    const sandal = box(0.08, 0.02, 0.16, std(0x6a4a32));
    sandal.position.set(side * 0.07, 0.02, 0.03);
    g.add(sandal);
  }
  g.userData.kind = "sigma_07";
  g.userData.ageBand = "adult";
  g.name = "SIGMA_07";
  return g;
}

function goth() {
  const g = buildBiped({
    height: 1.7,
    skin: 0xc9c4be,
    hair: 0x0d0d10,
    shirt: 0x1c1c1e,
    sleeves: true,
    bottoms: 0x161618,
    bottomsH: 0.85,
    shoulderW: 0.34,
    chestW: 0.28,
    chestD: 0.16,
    hipW: 0.24,
  });
  const { headY, headR } = g.userData.body;
  const hang = sphere(headR * 1.2, std(0x0d0d10, { roughness: 0.95 }), 8, 8);
  hang.scale.set(0.9, 2.1, 0.75);
  hang.position.set(0, headY - 0.16, -0.05);
  g.add(hang);
  const coat = box(0.36, 0.7, 0.2, std(0x1c1c1e, { roughness: 0.88 }));
  coat.position.set(0, 1.05, -0.02);
  g.add(coat);
  const cig = cyl(0.006, 0.006, 0.07, std(0xd8d0c4), 6);
  cig.rotation.z = Math.PI / 2;
  cig.rotation.y = 0.4;
  cig.position.set(0.08, 1.48, 0.12);
  g.add(cig);
  g.userData.kind = "goth";
  g.userData.ageBand = "adult";
  g.name = "goth";
  return g;
}

function kid() {
  const g = buildBiped({
    height: 1.12,
    skin: 0xf0c9a0,
    hair: 0x6b3e1f,
    shirt: 0x3db8c8,
    sleeves: true,
    bottoms: 0x2d5a8c,
    bottomsH: 0.38,
    shoulderW: 0.26,
    chestW: 0.2,
    chestD: 0.12,
    hipW: 0.18,
  });
  const { headY, headR } = g.userData.body;
  const brim = cyl(0.16, 0.16, 0.02, std(0xf5e6a3), 12);
  brim.position.y = headY + headR * 0.35;
  const crown = cyl(0.1, 0.11, 0.08, std(0xf5e6a3), 12);
  crown.position.y = headY + headR * 0.55;
  g.add(brim, crown);
  g.userData.kind = "kid";
  g.userData.ageBand = "child";
  g.userData.paintTarget = false;
  g.name = "kid";
  return g;
}

function seagull() {
  const g = new THREE.Group();
  const white = std(0xf4f4f0, { roughness: 0.7 });
  const grey = std(0x9aa0a6, { roughness: 0.75 });
  const body = sphere(0.09, white, 10, 8);
  body.scale.set(1, 0.75, 1.6);
  body.position.y = 0.12;
  const head = sphere(0.045, white, 8, 6);
  head.position.set(0, 0.18, 0.14);
  const beak = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.05, 6), std(0xf0c040)));
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.175, 0.2);
  const wingL = box(0.16, 0.025, 0.08, grey);
  wingL.position.set(-0.12, 0.13, 0);
  wingL.rotation.z = 0.25;
  const wingR = box(0.16, 0.025, 0.08, grey);
  wingR.position.set(0.12, 0.13, 0);
  wingR.rotation.z = -0.25;
  const tail = box(0.05, 0.02, 0.08, grey);
  tail.position.set(0, 0.12, -0.14);
  const legL = cyl(0.008, 0.008, 0.08, std(0xe07a32), 5);
  legL.position.set(-0.03, 0.04, 0);
  const legR = cyl(0.008, 0.008, 0.08, std(0xe07a32), 5);
  legR.position.set(0.03, 0.04, 0);
  g.add(body, head, beak, wingL, wingR, tail, legL, legR);
  g.userData.kind = "gull";
  g.userData.ageBand = "gull";
  g.userData.paintTarget = false;
  g.name = "gull";
  return g;
}

function place(mesh, x, y, z, yaw = 0) {
  mesh.position.set(x, y, z);
  mesh.rotation.y = yaw;
  return mesh;
}

/**
 * Scatter the beach/patio cast. Adults on sand or deck; gull on the boardwalk rail.
 * @param {THREE.Scene} scene
 * @returns {{ mesh: THREE.Group, kind: string, ageBand: string }[]}
 */
export function spawnBeachCast(scene) {
  const railZ = WORLD.boardwalkZ + 3.6;
  const deckY = 0.18;

  const cast = [
    { mesh: place(ken(), -8.2, 0, 4.0, 0.4), kind: "ken", ageBand: "adult" },
    { mesh: place(babe(), 6.2, 0, 2.2, -0.6), kind: "babe", ageBand: "adult" },
    { mesh: place(sigma07(), 2.0, deckY, 16.5, Math.PI), kind: "sigma_07", ageBand: "adult" },
    { mesh: place(goth(), 11.5, 0, 14.0, -2.4), kind: "goth", ageBand: "adult" },
    {
      mesh: place(ken({ hair: 0xff6b9a, shorts: 0x1a4d8c, skin: 0xcc8f5a }), 9.8, 0, 6.2, -1.1),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0x3a2218, bikini: 0x39c6d4, skin: 0xd9a078 }), -4.2, 0, -1.8, 0.2),
      kind: "babe",
      ageBand: "adult",
    },
    { mesh: place(kid(), -3.5, deckY, 15.5, 0.8), kind: "kid", ageBand: "child" },
    { mesh: place(seagull(), 8.0, 1.2, railZ, -0.3), kind: "gull", ageBand: "gull" },
  ];

  for (const npc of cast) {
    npc.mesh.userData.kind = npc.kind;
    npc.mesh.userData.ageBand = npc.ageBand;
    if (npc.ageBand !== "adult") npc.mesh.userData.paintTarget = false;
    scene.add(npc.mesh);
  }
  return cast;
}
