/**
 * Canvas textures + mesh helpers, vendored from Coconuts patterns.
 * Credit: Steve / a-better-internet/coconuts (Three r128 IIFE walkaround).
 * Rewritten as ES modules for Three r160. Canvas textures only — no hosted images.
 */
import * as THREE from "three";

export function cvs(w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

export function canvasTex(c, wrap = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (wrap) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true;
  return t;
}

export function cloneMap(tex, rx, ry) {
  const t = tex.clone();
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.needsUpdate = true;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function mat(color, opts) {
  return new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.92, metalness: 0 }, opts || {}));
}

export function box(w, h, d, m) {
  const g = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  g.castShadow = true;
  g.receiveShadow = true;
  return g;
}

export function woodTex() {
  const c = cvs(256, 64);
  const x = c.getContext("2d");
  x.fillStyle = "#a9682f";
  x.fillRect(0, 0, 256, 64);
  for (let i = 0; i < 70; i++) {
    const y = Math.random() * 64;
    const w = 20 + Math.random() * 60;
    x.fillStyle = ["#8f561f", "#b9762f", "#c2853f", "#965a27", "#a96a30"][i % 5];
    x.fillRect(Math.random() * 256, y, w, 2 + Math.random() * 4);
  }
  return canvasTex(c);
}

export function sandCanvas() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#ddc486";
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 14000; i++) {
    const gx = Math.random() * 256;
    const gy = Math.random() * 256;
    const r = Math.random();
    x.fillStyle = r < 0.4 ? "rgba(168,140,92,0.30)" : r < 0.7 ? "rgba(255,243,205,0.28)" : "rgba(200,180,130,0.22)";
    x.fillRect(gx, gy, 1.4, 1.4);
  }
  x.globalAlpha = 0.06;
  x.strokeStyle = "#9c7f4f";
  x.lineWidth = 2;
  for (let i = 0; i < 22; i++) {
    x.beginPath();
    const yy = Math.random() * 256;
    x.moveTo(0, yy);
    for (let xx = 0; xx <= 256; xx += 16) x.lineTo(xx, yy + Math.sin(xx * 0.08 + i) * 4);
    x.stroke();
  }
  x.globalAlpha = 1;
  return c;
}

export function barFrontTex() {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  x.fillStyle = "#c2402f";
  x.fillRect(0, 0, 128, 128);
  x.fillStyle = "#ecdfc0";
  x.fillRect(8, 10, 112, 78);
  x.fillStyle = "#cf2a20";
  x.fillRect(16, 18, 96, 62);
  x.fillStyle = "#a8201a";
  x.fillRect(20, 22, 88, 54);
  x.fillStyle = "#e23026";
  x.fillRect(0, 98, 128, 30);
  x.fillStyle = "#7d1813";
  x.fillRect(0, 120, 128, 8);
  return canvasTex(c);
}

export function brickTex(base, line) {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  x.fillStyle = base;
  x.fillRect(0, 0, 128, 128);
  x.strokeStyle = line;
  x.lineWidth = 1.4;
  for (let r = 0; r < 8; r++) {
    const y = r * 16;
    x.beginPath();
    x.moveTo(0, y);
    x.lineTo(128, y);
    x.stroke();
    const off = (r % 2) * 16;
    for (let bx = off; bx < 128; bx += 32) {
      x.beginPath();
      x.moveTo(bx, y);
      x.lineTo(bx, y + 16);
      x.stroke();
    }
  }
  return canvasTex(c);
}

export function metalRoofTex() {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  x.fillStyle = "#c8402e";
  x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 128; i += 10) {
    x.fillStyle = "#a83321";
    x.fillRect(i, 0, 1.6, 128);
    x.fillStyle = "#d9533f";
    x.fillRect(i + 2, 0, 1.2, 128);
  }
  for (let i = 0; i < 40; i++) {
    x.fillStyle = "rgba(150,40,28,0.10)";
    x.fillRect(0, Math.random() * 128, 128, 1);
  }
  return canvasTex(c);
}

export function thatchTex() {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  x.fillStyle = "#b8945a";
  x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 420; i++) {
    const sh = ["#c9a86a", "#a8854c", "#d3b577", "#9c7b44", "#bf9c60"][i % 5];
    x.strokeStyle = sh;
    x.lineWidth = 0.8 + Math.random() * 1.2;
    const sx = Math.random() * 128;
    const sy = Math.random() * 128;
    x.beginPath();
    x.moveTo(sx, sy);
    x.lineTo(sx + (Math.random() - 0.5) * 3, sy + 6 + Math.random() * 10);
    x.stroke();
  }
  return canvasTex(c);
}

export function paverBrickTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#8c7567";
  x.fillRect(0, 0, 256, 256);
  const bw = 64;
  const bh = 32;
  const shades = ["#a18979", "#9a8270", "#a98f7e", "#977e6c", "#a88f7d", "#9b8472"];
  for (let row = 0; row * bh < 256; row++) {
    const off = (row % 2) * (bw / 2);
    for (let bx = -bw; bx < 256; bx += bw) {
      x.fillStyle = shades[(Math.random() * shades.length) | 0];
      x.fillRect(bx + off + 2.2, row * bh + 2.2, bw - 4.4, bh - 4.4);
    }
  }
  return canvasTex(c);
}

export function glowTex() {
  const c = cvs(64, 64);
  const x = c.getContext("2d");
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.6)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  return canvasTex(c, false);
}

export function signTex(title, sub, bg = "#1a120c", fg = "#ffd99a") {
  const c = cvs(256, 128);
  const x = c.getContext("2d");
  x.fillStyle = bg;
  x.fillRect(0, 0, 256, 128);
  x.strokeStyle = "#5a3d22";
  x.lineWidth = 8;
  x.strokeRect(4, 4, 248, 120);
  x.fillStyle = fg;
  x.font = "bold 36px Georgia, serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(title, 128, sub ? 50 : 64);
  if (sub) {
    x.font = "600 14px ui-sans-serif, system-ui, sans-serif";
    x.fillStyle = "#b89a6c";
    x.fillText(sub, 128, 92);
  }
  return canvasTex(c, false);
}

export function awningTex(line1, line2) {
  const c = cvs(256, 96);
  const x = c.getContext("2d");
  x.fillStyle = "#c8402e";
  x.fillRect(0, 0, 256, 96);
  for (let i = 0; i < 256; i += 16) {
    x.fillStyle = i % 32 === 0 ? "#a83321" : "#d9533f";
    x.fillRect(i, 0, 8, 96);
  }
  x.fillStyle = "#fff6e4";
  x.font = "bold 28px ui-sans-serif, system-ui, sans-serif";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(line1, 128, line2 ? 34 : 48);
  if (line2) {
    x.font = "bold 18px ui-sans-serif, system-ui, sans-serif";
    x.fillText(line2, 128, 66);
  }
  return canvasTex(c, false);
}

function cupStripeTex() {
  const c = cvs(64, 64);
  const x = c.getContext("2d");
  x.fillStyle = "#e8f2f6";
  x.fillRect(0, 0, 64, 64);
  x.fillStyle = "#1f9aa8";
  x.fillRect(0, 18, 64, 18);
  x.fillStyle = "#e85d4c";
  x.fillRect(0, 36, 64, 8);
  x.fillStyle = "#1a120c";
  x.font = "bold 11px ui-sans-serif, system-ui, sans-serif";
  x.textAlign = "center";
  x.fillText("SPF", 32, 31);
  return canvasTex(c, false);
}

function makeSurfboardGeo() {
  const L = 2.0;
  const W = 0.44;
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.quadraticCurveTo(W * 0.6, L * 0.12, W * 0.5, L * 0.42);
  s.quadraticCurveTo(W * 0.5, L * 0.82, 0, L);
  s.quadraticCurveTo(-W * 0.5, L * 0.82, -W * 0.5, L * 0.42);
  s.quadraticCurveTo(-W * 0.6, L * 0.12, 0, 0);
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.06,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.05,
    bevelSegments: 1,
    steps: 1,
  });
  geo.center();
  return geo;
}

function canopyGeometry(radius, rise, segs, hexA, hexB) {
  const pos = [];
  const col = [];
  const a = new THREE.Color(hexA);
  const b = new THREE.Color(hexB);
  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * Math.PI * 2;
    const a1 = ((i + 1) / segs) * Math.PI * 2;
    pos.push(0, rise, 0, Math.cos(a1) * radius, 0, Math.sin(a1) * radius, Math.cos(a0) * radius, 0, Math.sin(a0) * radius);
    const c = i % 2 === 0 ? a : b;
    for (let k = 0; k < 3; k++) col.push(c.r, c.g, c.b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}

let KIT = null;

/** Shared geos + materials. Call once from the level builder. */
export function kit() {
  if (KIT) return KIT;
  const sandMap = canvasTex(sandCanvas());
  const woodMap = woodTex();
  const paverMap = paverBrickTex();
  const roofMap = metalRoofTex();
  const thatchMap = thatchTex();
  const barMap = barFrontTex();
  const glow = glowTex();
  KIT = {
    sandMap,
    woodMap,
    paverMap,
    roofMap,
    thatchMap,
    barMap,
    glow,
    brickLight: brickTex("#eef0ec", "#d6d6d0"),
    chair: mat(0x1d4a30, { roughness: 0.8 }),
    table: mat(0x235639, { roughness: 0.7 }),
    pole: mat(0x9aa0a6, { metalness: 0.4, roughness: 0.5 }),
    finial: mat(0xd6342a),
    canopy: new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.85 }),
    canopyGeo: canopyGeometry(1.35, 0.8, 16, 0xd6342a, 0xf6f3ec),
    beachCanopyGeo: new THREE.ConeGeometry(1.3, 0.62, 10),
    seatGeo: new THREE.CylinderGeometry(0.23, 0.21, 0.07, 10),
    backGeo: new THREE.BoxGeometry(0.4, 0.42, 0.055),
    railGeo: new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8),
    legGeo: new THREE.CylinderGeometry(0.028, 0.034, 0.45, 6),
    tableTopGeo: new THREE.CylinderGeometry(0.62, 0.62, 0.07, 14),
    tableLegGeo: new THREE.CylinderGeometry(0.06, 0.06, 0.74, 8),
    tableBaseGeo: new THREE.CylinderGeometry(0.28, 0.32, 0.08, 10),
    umbPoleGeo: new THREE.CylinderGeometry(0.045, 0.045, 3.4, 8),
    finGeo: new THREE.CylinderGeometry(0.04, 0.04, 0.22, 6),
    cupBodyGeo: new THREE.CylinderGeometry(0.046, 0.036, 0.13, 10),
    cupDrinkGeo: new THREE.CylinderGeometry(0.04, 0.032, 0.1, 8),
    cupGlass: mat(0xe2edf4, { transparent: true, opacity: 0.3, roughness: 0.08 }),
    cupDrink: mat(0xe8703a, { transparent: true, opacity: 0.85 }),
    cupStripe: cupStripeTex(),
    surfGeo: makeSurfboardGeo(),
    ballGeo: new THREE.SphereGeometry(0.35, 12, 10),
    ballGore: [0, 1, 2].map((k) => new THREE.SphereGeometry(0.353, 12, 10, k * 2.094, 1.02)),
    ballWhite: mat(0xfafafa, { roughness: 0.5 }),
    ballCols: [mat(0xe23b3b, { roughness: 0.5 }), mat(0xf2c53d, { roughness: 0.5 }), mat(0x2f7fc4, { roughness: 0.5 })],
    trunk: mat(0x9c7b4f, { roughness: 0.95 }),
    frondA: mat(0x2f7d3f, { roughness: 0.85, side: THREE.DoubleSide }),
    frondB: mat(0x3c8a44, { roughness: 0.85, side: THREE.DoubleSide }),
    brown: mat(0xa98b56, { roughness: 0.95, side: THREE.DoubleSide }),
    coco: mat(0x6b4a2a),
    trunkGeo: new THREE.CylinderGeometry(1, 1, 1, 6),
    frondGeo: new THREE.ConeGeometry(0.13, 2.4, 6),
    cocoGeo: new THREE.SphereGeometry(0.12, 6, 6),
    crownGeo: new THREE.SphereGeometry(0.34, 8, 6),
    gullBody: mat(0xf3f3f5, { roughness: 0.8 }),
    gullGrey: mat(0x8a8a90),
    gullTail: mat(0xdedee2),
    string: new THREE.MeshBasicMaterial({ color: 0x6b6149, fog: false }),
    bulbGeo: new THREE.SphereGeometry(0.06, 6, 6),
    iron: mat(0x14171b, { roughness: 0.5, metalness: 0.5 }),
    bamboo: mat(0x7a5a32, { roughness: 0.85 }),
    wall: mat(0xf6f4ef, { roughness: 0.95 }),
    darkGlass: mat(0x2a3138, { roughness: 0.5, metalness: 0.2 }),
    postWood: mat(0x6b4326, { roughness: 0.9 }),
    fascia: mat(0xb23a2a, { roughness: 0.7 }),
    fern: mat(0x2e7d3a, { roughness: 0.95, side: THREE.DoubleSide }),
    fern2: mat(0x46a14a, { roughness: 0.9, side: THREE.DoubleSide }),
    crotonR: mat(0xc23a1f, { roughness: 0.85 }),
    crotonO: mat(0xe8862a, { roughness: 0.85 }),
    crotonY: mat(0xe6c133, { roughness: 0.85 }),
    hedge: mat(0x2f6e33, { roughness: 0.95 }),
    hedge2: mat(0x368039, { roughness: 0.95 }),
    brick: mat(0x9c5a44, { roughness: 0.95 }),
    soil: mat(0x3a2a1c, { roughness: 1 }),
    stone: mat(0xded7c8, { roughness: 0.9 }),
    statue: mat(0xeceae2, { roughness: 0.85 }),
    flameOut: new THREE.MeshBasicMaterial({ color: 0xff8a1e, transparent: true, opacity: 0.95, depthWrite: false }),
    flameIn: new THREE.MeshBasicMaterial({ color: 0xffe27a, depthWrite: false }),
    beachUmb: [0x2f7fd0, 0x1fb6a6, 0xf2c12e, 0xf2654e, 0x4fc4e0, 0xe23b6e, 0xd6342a, 0xe6c133].map((c) =>
      mat(c, { roughness: 0.7 })
    ),
    loungerFrame: mat(0xdedee2, { roughness: 0.5, metalness: 0.3 }),
  };
  return KIT;
}

export function hipRoof(w, d, h, m) {
  const r = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.72, h, 4), m);
  r.rotation.y = Math.PI / 4;
  r.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d));
  r.castShadow = true;
  r.receiveShadow = true;
  return r;
}

export function makeSignPlane(tex, w, h) {
  const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, side: THREE.DoubleSide });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
  return p;
}

export function makeChair() {
  const S = kit();
  const c = new THREE.Group();
  const seat = new THREE.Mesh(S.seatGeo, S.chair);
  seat.position.y = 0.45;
  c.add(seat);
  const back = new THREE.Mesh(S.backGeo, S.chair);
  back.position.set(0, 0.68, 0.2);
  back.rotation.x = 0.13;
  c.add(back);
  const rail = new THREE.Mesh(S.railGeo, S.chair);
  rail.rotation.z = Math.PI / 2;
  rail.position.set(0, 0.885, 0.225);
  c.add(rail);
  for (const lx of [-0.18, 0.18]) {
    for (const lz of [-0.18, 0.18]) {
      const leg = new THREE.Mesh(S.legGeo, S.chair);
      leg.position.set(lx, 0.225, lz);
      c.add(leg);
    }
  }
  return c;
}

export function makeCup() {
  const S = kit();
  const c = new THREE.Group();
  const cup = new THREE.Mesh(S.cupBodyGeo, S.cupGlass);
  cup.position.y = 0.065;
  c.add(cup);
  const drink = new THREE.Mesh(S.cupDrinkGeo, S.cupDrink);
  drink.position.y = 0.055;
  c.add(drink);
  const dec = new THREE.Mesh(
    new THREE.PlaneGeometry(0.072, 0.1),
    new THREE.MeshStandardMaterial({ map: S.cupStripe, roughness: 0.5, side: THREE.DoubleSide })
  );
  dec.position.set(0, 0.072, 0.047);
  c.add(dec);
  return c;
}

export function makeUmbrella(withChairs) {
  const S = kit();
  const g = new THREE.Group();
  if (Math.random() < 0.5) {
    const cup = makeCup();
    cup.position.set(-0.1 + (Math.random() - 0.5) * 0.4, 0.775, -0.05 + (Math.random() - 0.5) * 0.4);
    cup.rotation.y = Math.random() * Math.PI * 2;
    g.add(cup);
  }
  const top = new THREE.Mesh(S.tableTopGeo, S.table);
  top.position.y = 0.74;
  top.castShadow = true;
  top.receiveShadow = true;
  g.add(top);
  const leg = new THREE.Mesh(S.tableLegGeo, S.pole);
  leg.position.y = 0.37;
  g.add(leg);
  const base = new THREE.Mesh(S.tableBaseGeo, S.pole);
  base.position.y = 0.04;
  base.receiveShadow = true;
  g.add(base);
  const pole = new THREE.Mesh(S.umbPoleGeo, S.pole);
  pole.position.y = 1.7;
  g.add(pole);
  const can = new THREE.Mesh(S.canopyGeo, S.canopy);
  can.position.y = 2.45;
  can.castShadow = true;
  g.add(can);
  const fin = new THREE.Mesh(S.finGeo, S.finial);
  fin.position.y = 3.4;
  g.add(fin);
  if (withChairs) {
    for (const [ox, oz] of [
      [0.95, 0],
      [-0.95, 0],
      [0, 0.95],
      [0, -0.95],
    ]) {
      const chair = makeChair();
      chair.position.set(ox, 0, oz);
      chair.rotation.y = Math.atan2(ox, oz);
      g.add(chair);
    }
  }
  return g;
}

export function placeUmbrella(scene, addCollider, x, z, withChairs, rot) {
  const u = makeUmbrella(withChairs);
  u.position.set(x, 0, z);
  u.rotation.y = rot !== undefined ? rot : Math.random() * Math.PI * 2;
  scene.add(u);
  const r = withChairs ? 0.92 : 0.6;
  addCollider(x - r, x + r, z - r, z + r);
  return u;
}

export function makePalm(scale) {
  const S = kit();
  const g = new THREE.Group();
  const segH = 0.7;
  const n = 5;
  for (let i = 0; i < n; i++) {
    const r = 0.22 - i * 0.025;
    const seg = new THREE.Mesh(S.trunkGeo, S.trunk);
    seg.scale.set(r, segH, r);
    seg.position.set(Math.sin(i * 0.5) * 0.12, segH * 0.5 + i * segH * 0.96, 0);
    seg.rotation.z = Math.sin(i * 0.5) * 0.05;
    seg.castShadow = true;
    g.add(seg);
  }
  const topY = n * segH * 0.96;
  const topX = Math.sin((n - 1) * 0.5) * 0.12;
  const NF = 8;
  for (let i = 0; i < NF; i++) {
    const brown = i % 5 === 0;
    const blade = new THREE.Mesh(S.frondGeo, brown ? S.brown : i % 2 ? S.frondB : S.frondA);
    blade.scale.set(0.5, 1, 0.12);
    blade.position.set(topX, topY, 0);
    blade.rotation.order = "YXZ";
    blade.rotation.y = (i / NF) * Math.PI * 2;
    blade.rotation.x = Math.PI / 2 - (brown ? 0.12 : 0.45 - (i % 2) * 0.14);
    blade.castShadow = true;
    g.add(blade);
  }
  const bulb = new THREE.Mesh(S.bulbGeo, S.brown);
  bulb.scale.y = 1.3;
  bulb.position.set(topX, topY - 0.1, 0);
  g.add(bulb);
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(S.cocoGeo, S.coco);
    c.position.set(topX + (Math.random() - 0.5) * 0.3, topY - 0.1, (Math.random() - 0.5) * 0.3);
    g.add(c);
  }
  g.scale.setScalar(scale || 1);
  return g;
}

export function placePalm(scene, addCollider, palms, x, z, s) {
  const p = makePalm(s);
  p.position.set(x, 0, z);
  p.rotation.y = Math.random() * Math.PI * 2;
  p.userData.swayPh = Math.random() * Math.PI * 2;
  p.userData.swayAmt = 0.018 + Math.random() * 0.02;
  scene.add(p);
  palms.push(p);
  addCollider(x - 0.3, x + 0.3, z - 0.3, z + 0.3);
  return p;
}

export function makeGull() {
  const S = kit();
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), S.gullBody);
  body.scale.set(1, 0.7, 2.4);
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 5), S.gullBody);
  head.position.set(0, 0.04, 0.34);
  g.add(head);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.34, 4), S.gullTail);
  tail.rotation.x = -Math.PI / 2;
  tail.position.set(0, 0, -0.4);
  g.add(tail);
  const wings = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    const w = new THREE.Mesh(new THREE.ConeGeometry(0.17, 1.5, 4), S.gullBody);
    w.rotation.z = -side * Math.PI / 2;
    w.position.x = side * 0.78;
    w.scale.set(0.55, 1, 0.16);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 4), S.gullGrey);
    tip.rotation.z = -side * Math.PI / 2;
    tip.position.x = side * 1.45;
    tip.scale.set(0.5, 1, 0.14);
    pivot.add(w);
    pivot.add(tip);
    g.add(pivot);
    wings.push({ pivot, side });
  }
  g.userData.wings = wings;
  return g;
}

export function makeLamppost(scene, addCollider, x, z) {
  const S = kit();
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 0.45, 8), S.iron);
  base.position.y = 0.225;
  base.castShadow = true;
  g.add(base);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.085, 3.0, 8), S.iron);
  pole.position.y = 2.0;
  pole.castShadow = true;
  g.add(pole);
  const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.2, 0.5, 4), S.iron);
  cage.rotation.y = Math.PI / 4;
  cage.position.y = 3.6;
  g.add(cage);
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.42, 0.3), new THREE.MeshBasicMaterial({ color: 0x6a6048 }));
  glass.position.y = 3.6;
  g.add(glass);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.32, 4), S.iron);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 3.96;
  g.add(roof);
  g.position.set(x, 0, z);
  scene.add(g);
  addCollider(x - 0.28, x + 0.28, z - 0.28, z + 0.28);
  return g;
}

export function makeTorch(scene, addCollider, flames, x, z) {
  const S = kit();
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.2, 6), S.bamboo);
  pole.position.y = 1.1;
  pole.castShadow = true;
  g.add(pole);
  for (const ny of [0.5, 1.1, 1.7]) {
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.096, 0.096, 0.05, 6), mat(0x5e4528));
    ring.position.y = ny;
    g.add(ring);
  }
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.1, 0.22, 8), mat(0x2a2a2e, { metalness: 0.4, roughness: 0.5 }));
  cup.position.y = 2.28;
  g.add(cup);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.5, 6), S.flameOut);
  flame.position.y = 2.62;
  flame.userData.ph = Math.random() * 6.28;
  g.add(flame);
  flames.push(flame);
  const core = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.32, 6), S.flameIn);
  core.position.y = 2.6;
  core.userData.ph = flame.userData.ph;
  g.add(core);
  flames.push(core);
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: S.glow, color: 0xffb24a, transparent: true, opacity: 0.4, depthWrite: false })
  );
  halo.scale.set(1.5, 1.5, 1);
  halo.position.y = 2.62;
  g.add(halo);
  g.position.set(x, 0, z);
  scene.add(g);
  addCollider(x - 0.16, x + 0.16, z - 0.16, z + 0.16);
  return g;
}

export function makeLounger(scene, x, z, rotY, col) {
  const S = kit();
  const g = new THREE.Group();
  const fm = mat(col, { roughness: 0.7 });
  const seat = box(0.6, 0.08, 1.4, fm);
  seat.position.set(0, 0.35, 0);
  g.add(seat);
  const back = box(0.6, 0.08, 0.72, fm);
  back.position.set(0, 0.55, -0.78);
  back.rotation.x = 0.6;
  g.add(back);
  for (const lx of [-0.26, 0.26]) {
    for (const lz of [-0.6, 0.6]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 5), S.loungerFrame);
      leg.position.set(lx, 0.17, lz);
      g.add(leg);
    }
  }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  scene.add(g);
  return g;
}

export function makeBeachBall(s) {
  const S = kit();
  const ball = new THREE.Mesh(S.ballGeo, S.ballWhite);
  ball.scale.setScalar(s);
  for (let k = 0; k < 3; k++) {
    const gore = new THREE.Mesh(S.ballGore[k], S.ballCols[k]);
    ball.add(gore);
  }
  ball.castShadow = true;
  ball.userData.radius = 0.35 * s;
  return ball;
}

export function makeSurfboard(color) {
  const S = kit();
  const b = new THREE.Mesh(S.surfGeo, mat(color, { roughness: 0.4 }));
  b.castShadow = true;
  return b;
}

export function stringLights(scene, x1, z1, x2, z2, y, n) {
  const S = kit();
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = x1 + (x2 - x1) * t;
    const z = z1 + (z2 - z1) * t;
    const sag = Math.sin(t * Math.PI) * 0.55;
    const b = new THREE.Mesh(S.bulbGeo, S.string);
    b.position.set(x, y - sag, z);
    scene.add(b);
  }
}

export function bush(scene, x, z, r) {
  const S = kit();
  const g = new THREE.Group();
  const m = mat(0x377a3a, { roughness: 0.95 });
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(r * (0.7 + Math.random() * 0.4), 6, 6), m);
    s.position.set((Math.random() - 0.5) * r, r * 0.5 + Math.random() * 0.2, (Math.random() - 0.5) * r);
    s.castShadow = true;
    g.add(s);
  }
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r * 0.7, 0.4, 8), mat(0x7a4a32));
  pot.position.y = 0.2;
  g.add(pot);
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

export function drum(scene, addCollider, x, z, c) {
  const d = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.3, 0.9, 8), mat(c));
  d.position.set(x, 0.45, z);
  d.castShadow = true;
  scene.add(d);
  addCollider(x - 0.34, x + 0.34, z - 0.34, z + 0.34);
}

export function foliageClump(scene, x, z, y, s) {
  const S = kit();
  s = s || 1;
  for (let i = 0; i < 3; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.3 * s, 6, 5), i % 2 ? S.fern2 : S.fern);
    b.scale.set(1.2, 0.8, 1.2);
    b.position.set(x + (Math.random() - 0.5) * 0.5, y + 0.28 * s, z + (Math.random() - 0.5) * 0.5);
    b.castShadow = true;
    scene.add(b);
  }
  const cols = [S.crotonR, S.crotonO, S.crotonY];
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.09 * s, 0.42 * s, 5), cols[i % 3]);
    c.position.set(x + (Math.random() - 0.5) * 0.7, y + 0.32 * s, z + (Math.random() - 0.5) * 0.7);
    c.rotation.z = (Math.random() - 0.5) * 0.4;
    scene.add(c);
  }
}

export function bananaPlant(scene, x, z, y) {
  const S = kit();
  const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 1.0, 6), mat(0x6a7e3a));
  stalk.position.set(x, y + 0.5, z);
  stalk.castShadow = true;
  scene.add(stalk);
  const bananaM = mat(0x2f8a3e, { roughness: 0.8, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 1.5), bananaM);
    leaf.position.set(x, y + 1.0, z);
    leaf.rotation.order = "YXZ";
    leaf.rotation.y = (i / 5) * Math.PI * 2;
    leaf.rotation.x = -0.7 - Math.random() * 0.3;
    scene.add(leaf);
  }
}

export function chairStack(scene, addCollider, x, z, col) {
  const m = mat(col, { roughness: 0.7 });
  for (let i = 0; i < 4; i++) {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.6), m);
    seat.position.set(x, 0.5 + i * 0.12, z);
    seat.rotation.y = i * 0.1;
    seat.castShadow = true;
    scene.add(seat);
  }
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.08), m);
  back.position.set(x, 0.95, z - 0.28);
  back.rotation.x = -0.3;
  scene.add(back);
  addCollider(x - 0.4, x + 0.4, z - 0.4, z + 0.4);
}

export function beachUmbrella(scene, x, z, colorMat, tilt) {
  const S = kit();
  const grp = new THREE.Group();
  grp.position.set(x, 0, z);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.4, 6), mat(0xe8e8e8));
  pole.position.y = 1.2;
  grp.add(pole);
  const can = new THREE.Mesh(S.beachCanopyGeo, colorMat);
  can.position.y = 2.45;
  can.castShadow = true;
  grp.add(can);
  const fin = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), mat(0xe8e8e8));
  fin.position.y = 2.8;
  grp.add(fin);
  if (tilt) grp.rotation.z = (Math.random() - 0.5) * 0.16;
  scene.add(grp);
  return grp;
}
