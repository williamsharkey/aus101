/**
 * CHAR0 beach cast — Ken, Babe, SIGMA_07, Goth, extras, child, gull.
 * Hierarchical full bodies, origin at the soles. Shared unit geos (iPhone).
 * Adults ~1.7 m, kid ~1.15 m.
 */
import * as THREE from "three";
import { GC as WORLD } from "../world/goldCoast.js";

const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  sphereHi: new THREE.SphereGeometry(1, 12, 10),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 8),
  cyl12: new THREE.CylinderGeometry(1, 1, 1, 12),
  cone: new THREE.ConeGeometry(1, 1, 6),
  cone4: new THREE.ConeGeometry(1, 1, 4),
  torus: new THREE.TorusGeometry(1, 0.12, 6, 16),
};

function std(color, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.72, metalness: 0.04, ...extra });
}

const MAT = {
  eye: std(0x1a1410, { roughness: 0.45 }),
  tooth: std(0xf4f0e6, { roughness: 0.4 }),
  cord: std(0x1a1a1a, { roughness: 0.55 }),
  beak: std(0xf0c040, { roughness: 0.5 }),
  gullWhite: std(0xf4f4f0, { roughness: 0.7 }),
  gullGrey: std(0x9aa0a6, { roughness: 0.75 }),
  gullLeg: std(0xe07a32, { roughness: 0.6 }),
};

function part(geo, mat, sx, sy = sx, sz = sx) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  m.scale.set(sx, sy, sz);
  return m;
}

/**
 * Shared biped. `shirt` null = shirtless. `sleeves` paints upper+forearm with shirt.
 * `cover`: bikini (pelvis only), shorts (thighs), pants (full leg).
 * `footwear`: bare | shoe | boot.
 */
function buildBiped({
  height = 1.7,
  skin = 0xc68642,
  hair = 0x2a1a12,
  shirt = null,
  sleeves = false,
  bottoms = 0x2a4a6a,
  cover = "shorts",
  footwear = "bare",
  shoe = 0x2a2420,
  shoulderW = 0.38,
  chestD = 0.18,
  chestW = 0.3,
  hipW = 0.24,
  armR = 0.042,
  legR = 0.055,
}) {
  const g = new THREE.Group();
  const s = height / 1.7;
  const skinM = std(skin);
  const hairM = std(hair, { roughness: 0.85 });
  const shirtM = shirt == null ? null : std(shirt);
  const pantM = std(bottoms);
  const shoeM = std(shoe, { roughness: 0.62 });
  const torsoMat = shirtM || skinM;
  const sleeveM = shirtM && sleeves ? shirtM : skinM;

  const headR = 0.12 * s;
  const neckH = 0.09 * s;
  const footH = footwear === "boot" ? 0.11 * s : 0.055 * s;
  const headY = height - headR - 0.01 * s;
  const shoulderY = headY - headR - neckH * 0.55;
  const hipY = 0.52 * height;
  const torsoH = Math.max(0.28 * s, shoulderY - hipY);
  const legLen = hipY;
  const shinH = (legLen - footH) * 0.47;
  const thighH = (legLen - footH) * 0.53;
  const upperLen = 0.28 * s;
  const foreLen = 0.26 * s;
  const aR = armR * s;
  const lR = legR * s;

  const pelvis = part(GEO.box, pantM, hipW, 0.16 * s, chestD * 0.95);
  pelvis.position.y = hipY;
  g.add(pelvis);

  const torso = part(GEO.box, torsoMat, chestW, torsoH, chestD);
  torso.position.y = hipY + torsoH * 0.5 - 0.02 * s;
  g.add(torso);

  const clav = part(GEO.box, torsoMat, shoulderW * 0.92, 0.08 * s, chestD * 0.88);
  clav.position.y = shoulderY;
  g.add(clav);

  const neck = part(GEO.cyl, skinM, 0.042 * s, neckH, 0.042 * s);
  neck.position.y = shoulderY + neckH * 0.42;
  g.add(neck);

  const head = new THREE.Group();
  head.position.y = headY;
  const skull = part(GEO.sphereHi, skinM, headR);
  head.add(skull);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, MAT.eye, 0.016 * s);
    eye.position.set(side * 0.038 * s, 0.012 * s, headR * 0.78);
    head.add(eye);
  }
  g.add(head);

  const hairCap = part(GEO.sphere, hairM, headR * 1.06, headR * 0.74, headR * 1.08);
  hairCap.position.y = headY + headR * 0.14;
  g.add(hairCap);

  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.name = side < 0 ? "armL" : "armR";
    arm.position.set(side * (shoulderW * 0.5), shoulderY, 0);
    arm.rotation.z = side * 0.1;

    arm.add(part(GEO.sphere, sleeveM, aR * 1.25));

    const upper = part(GEO.cyl, sleeveM, aR, upperLen, aR);
    upper.position.y = -upperLen * 0.5;
    arm.add(upper);

    const elbow = part(GEO.sphere, sleeveM, aR * 1.08);
    elbow.position.y = -upperLen;
    arm.add(elbow);

    const forearm = part(GEO.cyl, sleeveM, aR * 0.88, foreLen, aR * 0.88);
    forearm.position.y = -upperLen - foreLen * 0.5;
    arm.add(forearm);

    const hand = new THREE.Group();
    hand.position.y = -upperLen - foreLen;
    const palm = part(GEO.box, skinM, 0.058 * s, 0.088 * s, 0.032 * s);
    palm.position.y = -0.044 * s;
    const fingers = part(GEO.box, skinM, 0.052 * s, 0.05 * s, 0.026 * s);
    fingers.position.y = -0.105 * s;
    const thumb = part(GEO.box, skinM, 0.018 * s, 0.04 * s, 0.018 * s);
    thumb.position.set(side * 0.038 * s, -0.052 * s, 0.012 * s);
    thumb.rotation.z = side * 0.65;
    hand.add(palm, fingers, thumb);
    arm.add(hand);

    g.add(arm);
    arms.push(arm);
  }

  const thighCover = cover === "bikini" ? skinM : pantM;
  const shinCover = cover === "pants" ? pantM : skinM;
  const footCover = footwear === "bare" ? skinM : shoeM;
  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.name = side < 0 ? "legL" : "legR";
    leg.position.set(side * hipW * 0.32, hipY, 0);

    const hipJoint = part(GEO.sphere, thighCover, lR * 1.12);
    hipJoint.position.y = -0.01 * s;
    leg.add(hipJoint);

    const thigh = part(GEO.cyl, thighCover, lR * 0.95, thighH, lR * 0.95);
    thigh.position.y = -thighH * 0.5;
    leg.add(thigh);

    const knee = part(GEO.sphere, shinCover, lR * 0.95);
    knee.position.y = -thighH;
    leg.add(knee);

    const shin = part(GEO.cyl, shinCover, lR * 0.78, shinH, lR * 0.78);
    shin.position.y = -thighH - shinH * 0.5;
    leg.add(shin);

    const ankle = part(GEO.sphere, footCover, lR * 0.72);
    ankle.position.y = -thighH - shinH;
    leg.add(ankle);

    const foot = new THREE.Group();
    foot.position.y = -thighH - shinH;
    const soleH = footwear === "boot" ? 0.1 * s : 0.048 * s;
    const soleL = footwear === "boot" ? 0.17 * s : 0.16 * s;
    const sole = part(GEO.box, footCover, 0.085 * s, soleH, soleL);
    sole.position.set(0, -footH + soleH * 0.5, 0.04 * s);
    foot.add(sole);
    if (footwear === "shoe") {
      const vamp = part(GEO.box, shoeM, 0.082 * s, 0.045 * s, 0.1 * s);
      vamp.position.set(0, 0.01 * s, 0.05 * s);
      foot.add(vamp);
    }
    if (footwear === "boot") {
      const shaft = part(GEO.cyl, shoeM, lR * 0.88, 0.12 * s, lR * 0.88);
      shaft.position.y = 0.04 * s;
      foot.add(shaft);
    }
    leg.add(foot);

    g.add(leg);
    legs.push(leg);
  }

  g.userData.body = {
    head: skull,
    hairCap,
    headY,
    headR,
    shoulderY,
    hipY,
    scale: s,
    skinM,
    hairM,
    chestD,
    chestW,
    armL: arms[0],
    armR: arms[1],
    legL: legs[0],
    legR: legs[1],
  };
  g.userData.skinMats = [skinM];
  g.userData.bareColor = skinM.color.clone();
  g.userData.coverage = 0;
  g.userData.paintTarget = shirt == null;
  return g;
}

function addSharkTooth(g, y) {
  const s = g.userData.body.scale;
  const cord = part(GEO.torus, MAT.cord, 0.058 * s);
  cord.position.y = y;
  cord.rotation.x = Math.PI / 2;
  g.add(cord);
  const tooth = part(GEO.cone4, MAT.tooth, 0.018 * s, 0.05 * s, 0.018 * s);
  tooth.position.set(0, y - 0.055 * s, 0.045 * s);
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
    cover: "shorts",
    footwear: "bare",
    shoulderW: 0.5,
    chestW: 0.36,
    chestD: 0.22,
    hipW: 0.26,
    armR: 0.05,
    legR: 0.062,
  });
  const { headY, headR, shoulderY, hipY, scale: s, chestD, skinM } = g.userData.body;
  const quiff = part(GEO.box, std(hair, { roughness: 0.85 }), 0.16 * s, 0.12 * s, 0.12 * s);
  quiff.position.set(0, headY + headR * 0.55, 0.03 * s);
  g.add(quiff);
  addSharkTooth(g, shoulderY + 0.05 * s);

  const pecM = std(skin, { roughness: 0.5, metalness: 0.06 });
  for (const side of [-1, 1]) {
    const pec = part(GEO.sphere, pecM, 0.09 * s, 0.055 * s, 0.05 * s);
    pec.position.set(side * 0.085 * s, shoulderY - 0.12 * s, chestD * 0.42);
    g.add(pec);
  }
  const absM = std(skin, { roughness: 0.48, metalness: 0.08 });
  for (let row = 0; row < 3; row++) {
    for (const side of [-1, 1]) {
      const cell = part(GEO.box, absM, 0.085 * s, 0.055 * s, 0.04 * s);
      cell.position.set(side * 0.05 * s, hipY + 0.28 * s - row * 0.07 * s, chestD * 0.42);
      g.add(cell);
    }
  }
  g.userData.skinMats = [...g.userData.skinMats, pecM, absM];
  g.userData.kind = "ken";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
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
    cover: "bikini",
    footwear: "bare",
    shoulderW: 0.36,
    chestW: 0.26,
    chestD: 0.16,
    hipW: 0.26,
    armR: 0.036,
    legR: 0.05,
  });
  const { headY, headR, hipY, shoulderY, scale: s, chestD } = g.userData.body;
  const bikiniM = std(bikini, { roughness: 0.62 });
  const tresses = part(GEO.sphere, std(hair, { roughness: 0.9 }), headR * 0.95, headR * 2.05, headR * 0.78);
  tresses.position.set(0, headY - 0.14 * s, -0.07 * s);
  g.add(tresses);
  for (const side of [-1, 1]) {
    const cup = part(GEO.sphere, bikiniM, 0.058 * s, 0.05 * s, 0.045 * s);
    cup.position.set(side * 0.058 * s, shoulderY - 0.1 * s, chestD * 0.48);
    g.add(cup);
  }
  const strap = part(GEO.box, bikiniM, 0.14 * s, 0.012 * s, 0.012 * s);
  strap.position.set(0, shoulderY - 0.02 * s, chestD * 0.2);
  g.add(strap);
  const bottoms = part(GEO.box, bikiniM, 0.22 * s, 0.09 * s, 0.14 * s);
  bottoms.position.set(0, hipY - 0.02 * s, 0.01 * s);
  g.add(bottoms);
  g.userData.kind = "babe";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = true;
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
    cover: "pants",
    footwear: "shoe",
    shoe: 0x2a241c,
    shoulderW: 0.34,
    chestW: 0.28,
    chestD: 0.17,
    hipW: 0.24,
    armR: 0.038,
    legR: 0.052,
  });
  const { shoulderY, hipY, scale: s, chestD } = g.userData.body;
  const graphic = part(GEO.box, std(0x5a1010), 0.13 * s, 0.13 * s, 0.02 * s);
  graphic.position.set(0, shoulderY - 0.18 * s, chestD * 0.52);
  g.add(graphic);
  const pocketM = std(0x3a382c, { roughness: 0.78 });
  for (const side of [-1, 1]) {
    const pocket = part(GEO.box, pocketM, 0.08 * s, 0.09 * s, 0.045 * s);
    pocket.position.set(side * 0.1 * s, hipY - 0.16 * s, chestD * 0.42);
    g.add(pocket);
  }
  g.userData.kind = "sigma_07";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = false;
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
    cover: "pants",
    footwear: "boot",
    shoe: 0x111113,
    shoulderW: 0.36,
    chestW: 0.3,
    chestD: 0.18,
    hipW: 0.26,
    armR: 0.04,
    legR: 0.054,
  });
  const { headY, headR, hipY, scale: s } = g.userData.body;
  const linen = std(0x1c1c1e, { roughness: 0.88 });
  const hang = part(GEO.sphere, std(0x0d0d10, { roughness: 0.95 }), headR * 1.05, headR * 2.2, headR * 0.82);
  hang.position.set(0, headY - 0.18 * s, -0.06 * s);
  g.add(hang);
  const coat = part(GEO.box, linen, 0.4 * s, 0.72 * s, 0.22 * s);
  coat.position.set(0, hipY + 0.22 * s, -0.02 * s);
  g.add(coat);
  const cig = part(GEO.cyl, std(0xd8d0c4, { roughness: 0.5 }), 0.006 * s, 0.07 * s, 0.006 * s);
  cig.rotation.z = Math.PI / 2;
  cig.rotation.y = 0.4;
  cig.position.set(0.09 * s, headY - 0.04 * s, headR * 0.85);
  g.add(cig);
  const ember = part(GEO.sphere, std(0xc04020, { roughness: 0.4, metalness: 0.1, emissive: 0x401008 }), 0.007 * s);
  ember.position.set(0.125 * s, headY - 0.038 * s, headR * 0.9);
  g.add(ember);
  g.userData.kind = "goth";
  g.userData.ageBand = "adult";
  g.userData.paintTarget = false;
  g.name = "goth";
  return g;
}

function kid() {
  const g = buildBiped({
    height: 1.15,
    skin: 0xf0c9a0,
    hair: 0x6b3e1f,
    shirt: 0x3db8c8,
    sleeves: true,
    bottoms: 0x2d5a8c,
    cover: "shorts",
    footwear: "shoe",
    shoe: 0xe8d24a,
    shoulderW: 0.28,
    chestW: 0.22,
    chestD: 0.14,
    hipW: 0.2,
    armR: 0.034,
    legR: 0.046,
  });
  const { headY, headR, scale: s } = g.userData.body;
  const hat = std(0xf5e6a3, { roughness: 0.86 });
  const brim = part(GEO.cyl12, hat, 0.17 * s, 0.02 * s, 0.17 * s);
  brim.position.y = headY + headR * 0.32;
  const crown = part(GEO.cyl12, hat, 0.1 * s, 0.09 * s, 0.1 * s);
  crown.position.y = headY + headR * 0.58;
  g.add(brim, crown);
  g.userData.kind = "kid";
  g.userData.ageBand = "child";
  g.userData.paintTarget = false;
  g.name = "kid";
  return g;
}

function seagull() {
  const g = new THREE.Group();
  const white = MAT.gullWhite;
  const grey = MAT.gullGrey;
  const orange = MAT.gullLeg;

  const body = part(GEO.cyl, white, 0.055, 0.2, 0.055);
  body.rotation.x = Math.PI / 2;
  body.position.set(0, 0.16, 0);
  const chest = part(GEO.sphere, white, 0.07, 0.055, 0.09);
  chest.position.set(0, 0.155, 0.04);
  g.add(body, chest);

  const neck = part(GEO.cyl, white, 0.022, 0.055, 0.022);
  neck.position.set(0, 0.19, 0.11);
  neck.rotation.x = 0.7;
  const head = part(GEO.sphere, white, 0.042);
  head.position.set(0, 0.22, 0.145);
  g.add(neck, head);

  const beak = part(GEO.cone, MAT.beak, 0.012, 0.055, 0.012);
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.21, 0.195);
  g.add(beak);
  for (const side of [-1, 1]) {
    const eye = part(GEO.sphere, MAT.eye, 0.008);
    eye.position.set(side * 0.022, 0.228, 0.17);
    g.add(eye);
  }

  for (const side of [-1, 1]) {
    const wing = new THREE.Group();
    wing.position.set(side * 0.04, 0.175, 0.01);
    const inner = part(GEO.box, grey, 0.15, 0.022, 0.085);
    inner.position.set(side * 0.075, 0, 0);
    inner.rotation.z = side * -0.22;
    const outer = part(GEO.box, grey, 0.13, 0.016, 0.06);
    outer.position.set(side * 0.19, 0.025, -0.015);
    outer.rotation.z = side * -0.4;
    wing.add(inner, outer);
    g.add(wing);
  }

  const tail = part(GEO.box, grey, 0.07, 0.016, 0.11);
  tail.position.set(0, 0.15, -0.13);
  g.add(tail);

  for (const side of [-1, 1]) {
    const hip = part(GEO.sphere, orange, 0.012);
    hip.position.set(side * 0.028, 0.1, 0.02);
    const leg = part(GEO.cyl, orange, 0.007, 0.08, 0.007);
    leg.position.set(side * 0.028, 0.055, 0.02);
    const foot = part(GEO.box, orange, 0.04, 0.01, 0.05);
    foot.position.set(side * 0.028, 0.012, 0.035);
    g.add(hip, leg, foot);
  }

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
export { ken, babe };

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
    {
      mesh: place(ken({ hair: 0xf4e27a, shorts: 0xe23b3b, skin: 0xe0a060 }), -7.2, 0.38, WORLD.boardwalkZ + 6.2, 1.4),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0xf2c12e, bikini: 0xff6b9a, skin: 0xe8b898 }), 25.2, 0, 7.4, -2.2),
      kind: "babe",
      ageBand: "adult",
    },
    {
      mesh: place(ken({ hair: 0x5ec8ff, shorts: 0xf2c12e, skin: 0xd4924a }), -14.0, 0, 3.2, 0.9),
      kind: "ken",
      ageBand: "adult",
    },
    {
      mesh: place(babe({ hair: 0x8b3a2a, bikini: 0xffffff, skin: 0xc98a62 }), 1.4, 0, -4.6, 2.8),
      kind: "babe",
      ageBand: "adult",
    },
    { mesh: place(goth(), -22.0, 0, 9.5, 0.3), kind: "goth", ageBand: "adult" },
    { mesh: place(sigma07(), 15.5, 0, 9.0, -1.8), kind: "sigma_07", ageBand: "adult" },
    { mesh: place(seagull(), -10.0, 1.2, railZ, 0.8), kind: "gull", ageBand: "gull" },
    { mesh: place(kid(), 10.2, 0, 4.8, -0.4), kind: "kid", ageBand: "child" },
  ];

  for (const npc of cast) {
    npc.mesh.userData.kind = npc.kind;
    npc.mesh.userData.ageBand = npc.ageBand;
    if (npc.ageBand !== "adult") npc.mesh.userData.paintTarget = false;
    scene.add(npc.mesh);
  }
  return cast;
}
