/**
 * Canvas textures + mesh helpers, vendored from Coconuts patterns.
 * Credit: Steve / a-better-internet/coconuts (Three r128 IIFE walkaround).
 * Rewritten as ES modules for Three r160. Canvas textures only — no hosted images.
 *
 * Everything here is called in loops by the level builders, so geometry and
 * materials live on the shared `kit()` singleton (or in a small keyed cache)
 * rather than being allocated per instance. Detail is spent on silhouette —
 * these props are read at 5-30 m on a phone screen.
 */
import * as THREE from "three";

const TAU = Math.PI * 2;

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

/** Materials keyed by (namespace, colour) so per-colour props share one material. */
const COLOR_MATS = new Map();
function colorMat(hex, ns, opts) {
  const k = ns + ":" + hex;
  let m = COLOR_MATS.get(k);
  if (!m) {
    m = mat(hex, opts);
    COLOR_MATS.set(k, m);
  }
  return m;
}

/* ------------------------------------------------------------------ textures */

/** Decking: real planks running along U, butt joints, grain and knots. */
export function woodTex() {
  const c = cvs(256, 96);
  const x = c.getContext("2d");
  const rows = 3;
  const bh = 96 / rows;
  const tones = ["#a9682f", "#b2712e", "#9c6029", "#bb7c3a"];
  x.fillStyle = "#5f3a19";
  x.fillRect(0, 0, 256, 96);
  for (let r = 0; r < rows; r++) {
    const y = r * bh;
    x.fillStyle = tones[r % tones.length];
    x.fillRect(0, y + 1.5, 256, bh - 3);
    for (let i = 0; i < 22; i++) {
      const gy = y + 3 + Math.random() * (bh - 6);
      x.strokeStyle = i % 3 ? "rgba(116,70,29,0.28)" : "rgba(220,171,112,0.26)";
      x.lineWidth = 0.6 + Math.random() * 0.9;
      x.beginPath();
      const sx = Math.random() * 256;
      const len = 40 + Math.random() * 150;
      x.moveTo(sx, gy);
      for (let d = 0; d <= len; d += 18) x.lineTo(sx + d, gy + Math.sin((sx + d) * 0.05 + r) * 1.1);
      x.stroke();
    }
    const jx = ((r * 89) % 190) + 30;
    x.fillStyle = "rgba(60,36,15,0.8)";
    x.fillRect(jx, y + 1.5, 2, bh - 3);
    if (r % 2 === 0) {
      x.beginPath();
      x.ellipse(46 + ((r * 67) % 170), y + bh * 0.5, 4.6, 2.6, 0.5, 0, TAU);
      x.fillStyle = "rgba(88,54,22,0.7)";
      x.fill();
    }
    const gg = x.createLinearGradient(0, y, 0, y + bh);
    gg.addColorStop(0, "rgba(255,240,215,0.12)");
    gg.addColorStop(0.45, "rgba(255,255,255,0)");
    gg.addColorStop(1, "rgba(0,0,0,0.20)");
    x.fillStyle = gg;
    x.fillRect(0, y, 256, bh);
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

/** Trunk bark: vertical fibre plus the ring scars left by shed fronds. */
export function palmBarkTex() {
  const c = cvs(64, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#9c7b4f";
  x.fillRect(0, 0, 64, 256);
  for (let i = 0; i < 260; i++) {
    x.fillStyle = ["rgba(126,98,62,0.35)", "rgba(190,163,118,0.30)", "rgba(146,116,74,0.28)"][i % 3];
    x.fillRect(Math.random() * 64, Math.random() * 256, 1 + Math.random() * 2, 4 + Math.random() * 12);
  }
  for (let y = 0; y < 256; y += 16) {
    const wob = Math.sin(y * 0.4) * 1.6;
    x.fillStyle = "rgba(96,72,43,0.55)";
    x.fillRect(0, y + wob, 64, 3);
    x.fillStyle = "rgba(214,190,146,0.35)";
    x.fillRect(0, y + wob + 3, 64, 1.6);
    // shed-frond scar chevrons so the ring reads as texture, not a band
    x.fillStyle = "rgba(112,84,50,0.30)";
    for (let bx = (y / 16) % 2 ? 0 : 8; bx < 64; bx += 16) x.fillRect(bx, y + wob + 1, 7, 5);
  }
  const sh = x.createLinearGradient(0, 0, 64, 0);
  sh.addColorStop(0, "rgba(0,0,0,0.22)");
  sh.addColorStop(0.45, "rgba(255,255,255,0.10)");
  sh.addColorStop(1, "rgba(0,0,0,0.22)");
  x.fillStyle = sh;
  x.fillRect(0, 0, 64, 256);
  return canvasTex(c);
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

/** Brick: mortar bed first, then bricks with per-brick tone and a lit top edge. */
export function brickTex(base, line) {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  const bw = 32;
  const bh = 16;
  x.fillStyle = line;
  x.fillRect(0, 0, 128, 128);
  const tints = ["rgba(255,255,255,0.10)", "rgba(0,0,0,0.06)", "rgba(0,0,0,0.10)", "rgba(255,255,255,0.05)"];
  for (let r = 0; r < 8; r++) {
    const y = r * bh;
    const off = (r % 2) * (bw / 2);
    for (let bx = -bw; bx < 128; bx += bw) {
      const px = bx + off + 1.2;
      x.fillStyle = base;
      x.fillRect(px, y + 1.2, bw - 2.4, bh - 2.4);
      x.fillStyle = tints[(r * 3 + ((bx / bw) | 0) + 8) % 4];
      x.fillRect(px, y + 1.2, bw - 2.4, bh - 2.4);
      x.fillStyle = "rgba(255,255,255,0.18)";
      x.fillRect(px, y + 1.2, bw - 2.4, 1.1);
      x.fillStyle = "rgba(0,0,0,0.13)";
      x.fillRect(px, y + bh - 2.5, bw - 2.4, 1.3);
    }
  }
  return canvasTex(c);
}

/** Corrugated iron: each rib is a shaded barrel, with seams and fixings. */
export function metalRoofTex() {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  const pitch = 16;
  for (let i = 0; i < 128; i += pitch) {
    const g = x.createLinearGradient(i, 0, i + pitch, 0);
    g.addColorStop(0, "#8a2a1d");
    g.addColorStop(0.18, "#bd3d2c");
    g.addColorStop(0.46, "#e4644c");
    g.addColorStop(0.72, "#c8442f");
    g.addColorStop(1, "#8a2a1d");
    x.fillStyle = g;
    x.fillRect(i, 0, pitch, 128);
  }
  for (const sy of [0, 64]) {
    x.fillStyle = "rgba(96,26,18,0.55)";
    x.fillRect(0, sy, 128, 2);
    x.fillStyle = "rgba(255,180,160,0.18)";
    x.fillRect(0, sy + 2, 128, 1);
    for (let i = 6; i < 128; i += pitch) {
      x.fillStyle = "rgba(70,20,14,0.6)";
      x.beginPath();
      x.arc(i, sy + 7, 1.7, 0, TAU);
      x.fill();
    }
  }
  for (let i = 0; i < 26; i++) {
    x.fillStyle = "rgba(150,40,28,0.08)";
    x.fillRect(0, Math.random() * 128, 128, 1 + Math.random() * 2);
  }
  return canvasTex(c);
}

/** Thatch: overlapping courses, each with a shadow line under its lip. */
export function thatchTex() {
  const c = cvs(128, 128);
  const x = c.getContext("2d");
  x.fillStyle = "#8d6d3c";
  x.fillRect(0, 0, 128, 128);
  const courses = 5;
  const ch = 128 / courses;
  for (let r = 0; r < courses; r++) {
    const top = r * ch;
    x.fillStyle = ["#b8945a", "#ad8a52", "#c09a5f"][r % 3];
    x.fillRect(0, top, 128, ch + 3);
    for (let i = 0; i < 110; i++) {
      const sx = Math.random() * 128;
      const sy = top + Math.random() * ch;
      x.strokeStyle = ["#c9a86a", "#a8854c", "#d8bb7d", "#95753f", "#bf9c60"][i % 5];
      x.lineWidth = 0.7 + Math.random() * 1.3;
      x.beginPath();
      x.moveTo(sx, sy);
      x.lineTo(sx + (Math.random() - 0.5) * 3, sy + 5 + Math.random() * 9);
      x.stroke();
    }
    const g = x.createLinearGradient(0, top, 0, top + ch);
    g.addColorStop(0, "rgba(60,40,18,0.42)");
    g.addColorStop(0.28, "rgba(255,255,255,0)");
    g.addColorStop(0.85, "rgba(255,240,200,0.12)");
    g.addColorStop(1, "rgba(60,40,18,0.10)");
    x.fillStyle = g;
    x.fillRect(0, top, 128, ch);
    // ragged lower lip of the course
    x.fillStyle = "rgba(58,40,18,0.35)";
    for (let bx = 0; bx < 128; bx += 5) x.fillRect(bx, top + ch - 1, 3, 1.5 + Math.random() * 2.5);
  }
  return canvasTex(c);
}

/** Pavers: recessed joints, per-paver tone, speckle and a chamfered lit edge. */
export function paverBrickTex() {
  const c = cvs(256, 256);
  const x = c.getContext("2d");
  x.fillStyle = "#6f5d51";
  x.fillRect(0, 0, 256, 256);
  const bw = 64;
  const bh = 32;
  const shades = ["#a68d7c", "#9a8270", "#ae9482", "#957d6b", "#a99080", "#9d8674"];
  for (let row = 0; row * bh < 256; row++) {
    const off = (row % 2) * (bw / 2);
    for (let bx = -bw; bx < 256; bx += bw) {
      const px = bx + off + 2.6;
      const py = row * bh + 2.6;
      const w = bw - 5.2;
      const h = bh - 5.2;
      x.fillStyle = shades[(Math.random() * shades.length) | 0];
      x.fillRect(px, py, w, h);
      x.fillStyle = "rgba(255,247,232,0.20)";
      x.fillRect(px, py, w, 1.4);
      x.fillStyle = "rgba(40,28,20,0.22)";
      x.fillRect(px, py + h - 1.6, w, 1.6);
      x.fillStyle = "rgba(40,28,20,0.14)";
      x.fillRect(px + w - 1.4, py, 1.4, h);
      for (let i = 0; i < 26; i++) {
        x.fillStyle = Math.random() < 0.5 ? "rgba(255,255,255,0.10)" : "rgba(60,45,32,0.12)";
        x.fillRect(px + Math.random() * w, py + Math.random() * h, 1.6, 1.6);
      }
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

/** Painted-board sign: grain under the paint, bevelled frame, shadowed lettering. */
export function signTex(title, sub, bg = "#1a120c", fg = "#ffd99a") {
  const c = cvs(256, 128);
  const x = c.getContext("2d");
  x.fillStyle = bg;
  x.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 90; i++) {
    x.fillStyle = i % 2 ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.10)";
    x.fillRect(0, Math.random() * 128, 256, 1 + Math.random() * 2);
  }
  x.strokeStyle = "#5a3d22";
  x.lineWidth = 8;
  x.strokeRect(4, 4, 248, 120);
  x.strokeStyle = "rgba(255,220,170,0.35)";
  x.lineWidth = 1.6;
  x.strokeRect(12, 12, 232, 104);
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.font = "bold 36px Georgia, serif";
  x.fillStyle = "rgba(0,0,0,0.55)";
  x.fillText(title, 129.5, (sub ? 50 : 64) + 2);
  x.fillStyle = fg;
  x.fillText(title, 128, sub ? 50 : 64);
  if (sub) {
    x.font = "600 14px ui-sans-serif, system-ui, sans-serif";
    x.fillStyle = "#c9ab7c";
    x.fillText(sub, 128, 92);
  }
  return canvasTex(c, false);
}

/** Awning: striped canvas with a cream sign band and a scalloped stitched hem. */
export function awningTex(line1, line2) {
  const c = cvs(256, 96);
  const x = c.getContext("2d");
  x.fillStyle = "#c8402e";
  x.fillRect(0, 0, 256, 96);
  for (let i = 0; i < 256; i += 16) {
    x.fillStyle = i % 32 === 0 ? "#a83321" : "#e0604b";
    x.fillRect(i, 0, 8, 96);
  }
  x.fillStyle = "rgba(255,246,228,0.95)";
  x.fillRect(0, 22, 256, 46);
  x.strokeStyle = "rgba(150,44,30,0.7)";
  x.lineWidth = 1.5;
  x.beginPath();
  x.moveTo(0, 22.5);
  x.lineTo(256, 22.5);
  x.moveTo(0, 67.5);
  x.lineTo(256, 67.5);
  x.stroke();
  x.fillStyle = "#b5301f";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.font = "bold 28px ui-sans-serif, system-ui, sans-serif";
  x.fillText(line1, 128, line2 ? 38 : 45);
  if (line2) {
    x.font = "bold 16px ui-sans-serif, system-ui, sans-serif";
    x.fillStyle = "#8f2a1c";
    x.fillText(line2, 128, 59);
  }
  x.fillStyle = "rgba(90,20,14,0.35)";
  x.fillRect(0, 90, 256, 6);
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

/* ---------------------------------------------------------------- geometries */

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

/** Three thruster fins hanging off the underside (-Z) near the tail. */
function surfFinGeo() {
  const pos = [];
  const fin = (cx, base, tip, depth) => {
    pos.push(cx, base, -0.07, cx, base - 0.17, -0.07, cx, tip, -0.07 - depth);
  };
  fin(0, -0.72, -0.80, 0.2);
  fin(-0.13, -0.6, -0.68, 0.12);
  fin(0.13, -0.6, -0.68, 0.12);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/**
 * Scalloped umbrella canopy: apex, a mid ring so it domes instead of coning,
 * rib tips that dip below the fabric between them, and a hanging valance.
 * Panels alternate `hexA`/`hexB` so the stripes read from underneath too.
 */
function canopyGeometry(radius, rise, segs, hexA, hexB, skirt = 0.15) {
  const A = new THREE.Color(hexA);
  const B = new THREE.Color(hexB);
  const pos = [];
  const col = [];
  const p = (ang, r, y) => [Math.cos(ang) * r, y, Math.sin(ang) * r];
  const tri = (a, b, c, k) => {
    pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    for (let i = 0; i < 3; i++) col.push(k.r, k.g, k.b);
  };
  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * TAU;
    const a1 = ((i + 1) / segs) * TAU;
    const am = (a0 + a1) * 0.5;
    const k = i % 2 === 0 ? A : B;
    const apex = [0, rise, 0];
    const m0 = p(a0, radius * 0.52, rise * 0.46);
    const m1 = p(a1, radius * 0.52, rise * 0.46);
    const e0 = p(a0, radius, 0);
    const e1 = p(a1, radius, 0);
    // fabric lifts a little between the ribs — a soft scallop, not a sawtooth
    const em = p(am, radius * 0.99, rise * 0.05);
    tri(apex, m1, m0, k);
    tri(m0, m1, em, k);
    tri(m0, em, e0, k);
    tri(m1, e1, em, k);
    if (skirt > 0) {
      // valance hangs the same depth all the way round, following the hem
      const s0 = [e0[0], e0[1] - skirt, e0[2]];
      const s1 = [e1[0], e1[1] - skirt, e1[2]];
      const sm = [em[0], em[1] - skirt, em[2]];
      tri(e0, em, sm, k);
      tri(e0, sm, s0, k);
      tri(em, e1, s1, k);
      tri(em, s1, sm, k);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}

const BEACH_CANOPIES = new Map();
/** One scalloped canopy geometry per beach-umbrella colour (there are ~8). */
function beachCanopyFor(hex) {
  let g = BEACH_CANOPIES.get(hex);
  if (!g) {
    g = canopyGeometry(1.3, 0.66, 12, hex, 0xf7f2e6, 0.09);
    BEACH_CANOPIES.set(hex, g);
  }
  return g;
}

/**
 * Arching blade — the workhorse behind palm fronds, banana leaves and ferns.
 * Grows along +X from the origin, rises then droops, and folds down along the
 * midrib so it catches light like a real leaf. `notch` serrates the outer edge
 * into leaflets; 0 leaves it smooth.
 */
function bladeGeo({ len = 2.3, width = 0.3, lift = 0.2, droop = 0.5, notch = 0.45, segs = 9, fold = 0.4 }) {
  const pos = [];
  const spineY = (t) => lift * len * Math.sin(t * 1.7) - droop * len * t * t * t;
  const halfW = (t, i) => {
    const w = width * (0.22 + 0.78 * Math.sin(Math.PI * Math.pow(t, 0.6)));
    return i % 2 ? w * (1 - notch) : w;
  };
  const S = [];
  const O = [[], []];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const x = t * len;
    const y = spineY(t);
    S.push([x, y, 0]);
    const w = halfW(t, i);
    for (let s = 0; s < 2; s++) {
      const side = s === 0 ? 1 : -1;
      O[s].push([x - w * 0.32, y - w * fold, side * w]);
    }
  }
  const tri = (a, b, c) => pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
  for (let i = 0; i < segs; i++) {
    tri(S[i], S[i + 1], O[0][i + 1]);
    tri(S[i], O[0][i + 1], O[0][i]);
    tri(S[i], O[1][i + 1], S[i + 1]);
    tri(S[i], O[1][i], O[1][i + 1]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Palm trunk: tapered, leaning, ringed. UVs run 0-1 around and 0-3 up so the
 * bark rings land at a believable spacing. `userData.top` is where the crown goes.
 */
function palmTrunkGeo(h, lean, baseR = 0.19, topR = 0.115) {
  const RINGS = 10;
  const SIDES = 7;
  const pos = [];
  const uv = [];
  const idx = [];
  const bend = (t) => lean * h * (0.16 * t * t + 0.05 * Math.sin(t * 2.4));
  for (let i = 0; i <= RINGS; i++) {
    const t = i / RINGS;
    const y = t * h;
    const dx = bend(t);
    const r = (baseR * (1 - t) + topR * t) * (1 + (t < 0.12 ? (0.12 - t) * 2.2 : 0)) + Math.sin(t * 11) * 0.005;
    for (let s = 0; s <= SIDES; s++) {
      const a = (s / SIDES) * TAU;
      pos.push(Math.cos(a) * r + dx, y, Math.sin(a) * r);
      uv.push(s / SIDES, t * 3);
    }
  }
  for (let i = 0; i < RINGS; i++) {
    for (let s = 0; s < SIDES; s++) {
      const a = i * (SIDES + 1) + s;
      const b = a + SIDES + 1;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  geo.userData.top = new THREE.Vector3(bend(1), h, 0);
  return geo;
}

/**
 * Gull wing, built for the right side and mirrored with scale.x for the left.
 * Flat and broad so it reads from directly underneath; vertex colours carry the
 * white-to-charcoal wingtip that makes the silhouette legible against sky.
 */
function gullWingGeo(span = 0.9) {
  const N = 6;
  const pos = [];
  const col = [];
  const white = new THREE.Color(0xf6f6f4);
  const grey = new THREE.Color(0x9aa1a8);
  const dark = new THREE.Color(0x2c3138);
  const at = (t) => {
    const x = t * span;
    const sweep = -t * t * 0.26 * span;
    const chord = 0.30 * (1 - t * 0.62) * (span / 0.9);
    const y = Math.sin(t * 1.5) * 0.07 * span - t * t * 0.10 * span;
    return { le: [x, y, sweep + chord * 0.55], te: [x, y - t * 0.01, sweep - chord * 0.45] };
  };
  const tint = (t) => (t > 0.82 ? dark : t > 0.62 ? grey : white);
  const push = (p, c) => {
    pos.push(p[0], p[1], p[2]);
    col.push(c.r, c.g, c.b);
  };
  for (let i = 0; i < N; i++) {
    const t0 = i / N;
    const t1 = (i + 1) / N;
    const a = at(t0);
    const b = at(t1);
    const c0 = tint(t0);
    const c1 = tint(t1);
    push(a.le, c0);
    push(b.le, c1);
    push(b.te, c1);
    push(a.le, c0);
    push(b.te, c1);
    push(a.te, c0);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  return geo;
}

/** Fanned gull tail with a dark trailing band. */
function gullTailGeo() {
  const pos = [];
  const col = [];
  const white = new THREE.Color(0xf2f2f0);
  const dark = new THREE.Color(0x555c63);
  const root = [0, 0, -0.16];
  const l = [-0.13, 0.01, -0.44];
  const r = [0.13, 0.01, -0.44];
  const m = [0, 0, -0.46];
  const tri = (a, b, c, ca, cb, cc) => {
    pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    col.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b, cc.r, cc.g, cc.b);
  };
  tri(root, m, l, white, dark, dark);
  tri(root, r, m, white, dark, dark);
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
  const barkMap = palmBarkTex();
  KIT = {
    sandMap,
    woodMap,
    paverMap,
    roofMap,
    thatchMap,
    barMap,
    glow,
    barkMap,
    brickLight: brickTex("#eef0ec", "#d6d6d0"),
    chair: mat(0x1d4a30, { roughness: 0.8 }),
    table: mat(0x235639, { roughness: 0.7 }),
    pole: mat(0x9aa0a6, { metalness: 0.4, roughness: 0.5 }),
    finial: mat(0xd6342a),
    canopy: new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.85 }),
    canopyGeo: canopyGeometry(1.35, 0.8, 16, 0xd6342a, 0xf6f3ec, 0.12),
    beachCanopyGeo: new THREE.ConeGeometry(1.3, 0.62, 10),
    hubGeo: new THREE.CylinderGeometry(0.075, 0.055, 0.13, 8),
    seatGeo: new THREE.CylinderGeometry(0.23, 0.21, 0.07, 10),
    backGeo: new THREE.BoxGeometry(0.4, 0.42, 0.055),
    railGeo: new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8),
    legGeo: new THREE.CylinderGeometry(0.028, 0.034, 0.45, 6),
    stileGeo: new THREE.CylinderGeometry(0.026, 0.032, 0.94, 6),
    tableTopGeo: new THREE.CylinderGeometry(0.62, 0.62, 0.07, 14),
    tableLipGeo: new THREE.CylinderGeometry(0.635, 0.635, 0.03, 14),
    tableLegGeo: new THREE.CylinderGeometry(0.06, 0.06, 0.74, 8),
    tableBaseGeo: new THREE.CylinderGeometry(0.28, 0.32, 0.08, 10),
    umbPoleGeo: new THREE.CylinderGeometry(0.045, 0.045, 3.4, 8),
    beachPoleGeo: new THREE.CylinderGeometry(0.035, 0.02, 2.5, 6),
    finGeo: new THREE.CylinderGeometry(0.04, 0.04, 0.22, 6),
    cupBodyGeo: new THREE.CylinderGeometry(0.046, 0.036, 0.13, 10),
    cupDrinkGeo: new THREE.CylinderGeometry(0.04, 0.032, 0.1, 8),
    cupRimGeo: new THREE.TorusGeometry(0.046, 0.006, 4, 10),
    strawGeo: new THREE.CylinderGeometry(0.006, 0.006, 0.17, 5),
    cupGlass: mat(0xe2edf4, { transparent: true, opacity: 0.3, roughness: 0.08 }),
    cupDrink: mat(0xe8703a, { transparent: true, opacity: 0.85 }),
    cupStripe: cupStripeTex(),
    straw: mat(0xe8404f, { roughness: 0.5 }),
    surfGeo: makeSurfboardGeo(),
    surfFinGeo: surfFinGeo(),
    surfFin: mat(0x2b3038, { roughness: 0.4, side: THREE.DoubleSide }),
    surfStringerGeo: new THREE.BoxGeometry(0.022, 1.86, 0.155),
    surfStringer: mat(0xf7f4ec, { roughness: 0.35 }),
    ballGeo: new THREE.SphereGeometry(0.35, 16, 12),
    ballGore: [0, 1, 2].map((k) => new THREE.SphereGeometry(0.353, 8, 12, k * 2.094, 1.02)),
    ballCapGeo: new THREE.SphereGeometry(0.356, 12, 4, 0, TAU, 0, 0.34),
    ballWhite: mat(0xfafafa, { roughness: 0.35 }),
    ballCols: [mat(0xe23b3b, { roughness: 0.35 }), mat(0xf2c53d, { roughness: 0.35 }), mat(0x2f7fc4, { roughness: 0.35 })],
    trunk: new THREE.MeshStandardMaterial({ map: barkMap, roughness: 0.95 }),
    trunkDark: mat(0x7d6140, { roughness: 0.95 }),
    frondA: mat(0x2f7d3f, { roughness: 0.85, side: THREE.DoubleSide }),
    frondB: mat(0x3c8a44, { roughness: 0.85, side: THREE.DoubleSide }),
    frondC: mat(0x24693a, { roughness: 0.85, side: THREE.DoubleSide }),
    brown: mat(0xa98b56, { roughness: 0.95, side: THREE.DoubleSide }),
    coco: mat(0x6b4a2a),
    trunkGeo: new THREE.CylinderGeometry(1, 1, 1, 6),
    palmTrunks: [palmTrunkGeo(3.9, 1), palmTrunkGeo(4.4, -0.55), palmTrunkGeo(3.4, 0.35)],
    palmFronds: [
      bladeGeo({ len: 2.4, width: 0.34, lift: 0.22, droop: 0.55, notch: 0.5 }),
      bladeGeo({ len: 2.1, width: 0.30, lift: 0.16, droop: 0.72, notch: 0.45 }),
      bladeGeo({ len: 2.7, width: 0.36, lift: 0.26, droop: 0.42, notch: 0.55 }),
    ],
    spearGeo: bladeGeo({ len: 1.1, width: 0.11, lift: 0.1, droop: 0.12, notch: 0.3, segs: 5 }),
    bananaLeafGeo: bladeGeo({ len: 1.45, width: 0.32, lift: 0.24, droop: 0.5, notch: 0.14, segs: 8, fold: 0.55 }),
    fernBladeGeo: bladeGeo({ len: 0.62, width: 0.11, lift: 0.24, droop: 0.5, notch: 0.5, segs: 6 }),
    frondGeo: new THREE.ConeGeometry(0.13, 2.4, 6),
    cocoGeo: new THREE.SphereGeometry(0.12, 6, 6),
    crownGeo: new THREE.SphereGeometry(0.34, 8, 6),
    palmBootGeo: new THREE.CylinderGeometry(0.2, 0.13, 0.3, 7),
    palmFlareGeo: new THREE.CylinderGeometry(0.2, 0.32, 0.32, 7),
    gullBody: mat(0xf3f3f5, { roughness: 0.8 }),
    gullGrey: mat(0x8a8a90),
    gullTail: mat(0xdedee2),
    gullBeak: mat(0xe8a33a, { roughness: 0.6 }),
    gullEye: mat(0x14171b, { roughness: 0.4 }),
    gullSkin: new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.85 }),
    gullWingGeo: gullWingGeo(0.9),
    gullTailGeo: gullTailGeo(),
    gullBodyGeo: new THREE.SphereGeometry(0.1, 8, 6),
    gullHeadGeo: new THREE.SphereGeometry(0.062, 7, 5),
    gullBeakGeo: new THREE.ConeGeometry(0.02, 0.1, 5),
    string: new THREE.MeshBasicMaterial({ color: 0x6b6149, fog: false }),
    cable: new THREE.LineBasicMaterial({ color: 0x3b352a, fog: false }),
    bulbGeo: new THREE.SphereGeometry(0.06, 6, 6),
    bulbLitGeo: new THREE.SphereGeometry(0.055, 6, 5),
    bulbLit: [0xffe6b0, 0xfff2d2, 0xffd58f].map(
      (c) => new THREE.MeshBasicMaterial({ color: c, fog: false })
    ),
    iron: mat(0x14171b, { roughness: 0.5, metalness: 0.5 }),
    bamboo: mat(0x7a5a32, { roughness: 0.85 }),
    bambooRing: mat(0x5e4528, { roughness: 0.9 }),
    lampGlass: new THREE.MeshBasicMaterial({ color: 0xffdca0, fog: false }),
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
    hedgeDark: mat(0x24572a, { roughness: 0.95 }),
    blobGeo: new THREE.SphereGeometry(1, 7, 5),
    crotonGeo: new THREE.ConeGeometry(0.09, 0.42, 5),
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
    // lamppost
    lampBaseGeo: new THREE.CylinderGeometry(0.22, 0.3, 0.45, 8),
    lampPoleGeo: new THREE.CylinderGeometry(0.065, 0.085, 3.0, 8),
    lampCageGeo: new THREE.CylinderGeometry(0.26, 0.2, 0.5, 4),
    lampPostBarGeo: new THREE.BoxGeometry(0.035, 0.52, 0.035),
    lampRoofGeo: new THREE.ConeGeometry(0.3, 0.32, 4),
    lampCollarGeo: new THREE.CylinderGeometry(0.1, 0.14, 0.1, 8),
    lampArmGeo: new THREE.BoxGeometry(0.5, 0.035, 0.035),
    lampKnobGeo: new THREE.SphereGeometry(0.05, 6, 5),
    // torch
    torchPoleGeo: new THREE.CylinderGeometry(0.07, 0.09, 2.2, 6),
    torchRingGeo: new THREE.CylinderGeometry(0.096, 0.096, 0.05, 6),
    torchCupGeo: new THREE.CylinderGeometry(0.16, 0.1, 0.22, 8),
    torchMetal: mat(0x2a2a2e, { metalness: 0.4, roughness: 0.5 }),
    flameOutGeo: new THREE.ConeGeometry(0.13, 0.5, 6),
    flameInGeo: new THREE.ConeGeometry(0.07, 0.32, 6),
    // lounger
    loungerLegGeo: new THREE.CylinderGeometry(0.028, 0.028, 0.34, 6),
    loungerRailGeo: new THREE.BoxGeometry(0.045, 0.045, 1.5),
    loungerWheelGeo: new THREE.CylinderGeometry(0.075, 0.075, 0.035, 8),
    loungerSeatGeo: new THREE.BoxGeometry(0.6, 0.07, 1.36),
    loungerBackGeo: new THREE.BoxGeometry(0.6, 0.07, 0.74),
    loungerPillowGeo: new THREE.BoxGeometry(0.34, 0.09, 0.16),
    // drum
    drumGeo: new THREE.CylinderGeometry(0.32, 0.3, 0.9, 12),
    drumRibGeo: new THREE.CylinderGeometry(0.335, 0.335, 0.055, 12),
    drumLidGeo: new THREE.CylinderGeometry(0.315, 0.315, 0.04, 12),
    drumLid: mat(0x9aa0a6, { metalness: 0.35, roughness: 0.6 }),
    // chair stack
    stackSeatGeo: new THREE.BoxGeometry(0.56, 0.05, 0.56),
    stackBackGeo: new THREE.BoxGeometry(0.56, 0.5, 0.055),
    stackLegGeo: new THREE.CylinderGeometry(0.022, 0.022, 0.44, 5),
    // pots
    potGeo: new THREE.CylinderGeometry(0.8, 0.66, 0.36, 9),
    potRimGeo: new THREE.CylinderGeometry(0.86, 0.86, 0.07, 9),
    pot: mat(0x8a5238, { roughness: 0.9 }),
    potRim: mat(0x74432d, { roughness: 0.9 }),
    stalkGeo: new THREE.CylinderGeometry(0.055, 0.085, 1.0, 7),
    stalk: mat(0x6a7e3a, { roughness: 0.9 }),
    banana: mat(0x2f8a3e, { roughness: 0.8, side: THREE.DoubleSide }),
    banana2: mat(0x3fa04a, { roughness: 0.8, side: THREE.DoubleSide }),
    bananaFruit: mat(0x9fbb3a, { roughness: 0.8 }),
    bananaFruitGeo: new THREE.CylinderGeometry(0.022, 0.03, 0.16, 5),
  };
  return KIT;
}

/**
 * Real hip roof — a ridge along the longer axis with hipped ends, not a pyramid.
 * Centred on the origin like the cone it replaces, so callers keep their offsets.
 */
export function hipRoof(w, d, h, m) {
  const hw = w * 0.52;
  const hd = d * 0.52;
  const hy = h / 2;
  const rx = Math.max(0, hw - hd) * 0.86;
  const rz = Math.max(0, hd - hw) * 0.86;
  const A = [-hw, -hy, -hd];
  const B = [hw, -hy, -hd];
  const C = [hw, -hy, hd];
  const D = [-hw, -hy, hd];
  const R0 = [-rx, hy, -rz];
  const R1 = [rx, hy, rz];
  const pos = [];
  const uv = [];
  const tri = (a, b, c, ta, tb, tc) => {
    pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    uv.push(ta[0], ta[1], tb[0], tb[1], tc[0], tc[1]);
  };
  const ridged = rx > 1e-4 || rz > 1e-4;
  tri(D, C, R1, [0, 0], [1, 0], [1, 1]);
  if (ridged) tri(D, R1, R0, [0, 0], [1, 1], [0, 1]);
  tri(B, A, R0, [0, 0], [1, 0], [1, 1]);
  if (ridged) tri(B, R0, R1, [0, 0], [1, 1], [0, 1]);
  tri(C, B, R1, [0, 0], [1, 0], [0.5, 1]);
  tri(A, D, R0, [0, 0], [1, 0], [0.5, 1]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  const r = new THREE.Mesh(geo, m);
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
  seat.castShadow = true;
  c.add(seat);
  const back = new THREE.Mesh(S.backGeo, S.chair);
  back.position.set(0, 0.68, 0.2);
  back.rotation.x = 0.13;
  back.castShadow = true;
  c.add(back);
  const rail = new THREE.Mesh(S.railGeo, S.chair);
  rail.rotation.z = Math.PI / 2;
  rail.position.set(0, 0.885, 0.225);
  c.add(rail);
  for (const lx of [-0.18, 0.18]) {
    const front = new THREE.Mesh(S.legGeo, S.chair);
    front.position.set(lx, 0.225, -0.18);
    front.castShadow = true;
    c.add(front);
    // the rear legs carry on up as back stiles, so the back is not floating
    const stile = new THREE.Mesh(S.stileGeo, S.chair);
    stile.position.set(lx, 0.47, 0.156);
    stile.rotation.x = 0.13;
    stile.castShadow = true;
    c.add(stile);
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
  const rim = new THREE.Mesh(S.cupRimGeo, S.cupGlass);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.129;
  c.add(rim);
  const straw = new THREE.Mesh(S.strawGeo, S.straw);
  straw.position.set(0.016, 0.15, 0.01);
  straw.rotation.z = -0.28;
  c.add(straw);
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
  const lip = new THREE.Mesh(S.tableLipGeo, S.table);
  lip.position.y = 0.72;
  g.add(lip);
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
  // collar where the ribs meet the pole, then the finial on top
  const hub = new THREE.Mesh(S.hubGeo, S.pole);
  hub.position.y = 2.42;
  g.add(hub);
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

/**
 * Coconut palm: leaning ringed trunk, a crown of arching serrated fronds with a
 * couple of dead ones hanging low, a spear at the centre and a nut cluster.
 * Geometry comes off the shared kit, so a grove costs one draw call per part.
 */
export function makePalm(scale) {
  const S = kit();
  const g = new THREE.Group();
  const tg = S.palmTrunks[(Math.random() * S.palmTrunks.length) | 0];
  const trunk = new THREE.Mesh(tg, S.trunk);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  const flare = new THREE.Mesh(S.palmFlareGeo, S.trunkDark);
  flare.position.y = 0.14;
  flare.castShadow = true;
  g.add(flare);

  const crown = new THREE.Group();
  crown.position.copy(tg.userData.top);
  crown.rotation.y = Math.random() * TAU;
  g.add(crown);

  const boot = new THREE.Mesh(S.palmBootGeo, S.trunkDark);
  boot.position.y = -0.08;
  boot.castShadow = true;
  crown.add(boot);

  const NF = 9;
  for (let i = 0; i < NF; i++) {
    const dead = i >= NF - 2;
    const geo = S.palmFronds[i % S.palmFronds.length];
    const m = dead ? S.brown : i % 3 === 0 ? S.frondC : i % 3 === 1 ? S.frondA : S.frondB;
    const f = new THREE.Mesh(geo, m);
    f.rotation.order = "YXZ";
    f.rotation.y = (i / NF) * TAU + (Math.random() - 0.5) * 0.22;
    f.rotation.z = dead ? -0.55 - Math.random() * 0.2 : 0.34 - (i % 3) * 0.16;
    f.rotation.x = (Math.random() - 0.5) * 0.25;
    f.scale.setScalar(0.86 + (i % 3) * 0.11);
    f.castShadow = true;
    crown.add(f);
  }
  const spear = new THREE.Mesh(S.spearGeo, S.frondB);
  spear.rotation.z = 1.32;
  spear.rotation.y = Math.random() * TAU;
  spear.position.y = 0.05;
  crown.add(spear);

  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + Math.random();
    const c = new THREE.Mesh(S.cocoGeo, S.coco);
    c.scale.setScalar(0.72 + Math.random() * 0.3);
    c.position.set(Math.cos(a) * 0.17, -0.16 - Math.random() * 0.12, Math.sin(a) * 0.17);
    c.castShadow = true;
    crown.add(c);
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

/**
 * Seagull, flying nose-first along +Z. Wings are broad flat planes with dark
 * tips — these are almost always seen from below against a bright sky, so the
 * silhouette does all the work. `userData.wings` pivots flap about Z.
 */
export function makeGull() {
  const S = kit();
  const g = new THREE.Group();

  const body = new THREE.Mesh(S.gullBodyGeo, S.gullBody);
  body.scale.set(1.05, 0.92, 2.5);
  body.position.z = 0.02;
  g.add(body);

  const head = new THREE.Mesh(S.gullHeadGeo, S.gullBody);
  head.position.set(0, 0.035, 0.26);
  g.add(head);

  const beak = new THREE.Mesh(S.gullBeakGeo, S.gullBeak);
  beak.rotation.x = Math.PI / 2;
  beak.position.set(0, 0.025, 0.34);
  g.add(beak);

  const tail = new THREE.Mesh(S.gullTailGeo, S.gullSkin);
  tail.position.y = 0.005;
  g.add(tail);

  const wings = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.055, 0.03, 0.02);
    const w = new THREE.Mesh(S.gullWingGeo, S.gullSkin);
    w.scale.x = side;
    pivot.add(w);
    g.add(pivot);
    wings.push({ pivot, side });
  }
  g.userData.wings = wings;
  return g;
}

export function makeLamppost(scene, addCollider, x, z) {
  const S = kit();
  const g = new THREE.Group();
  const base = new THREE.Mesh(S.lampBaseGeo, S.iron);
  base.position.y = 0.225;
  base.castShadow = true;
  g.add(base);
  const pole = new THREE.Mesh(S.lampPoleGeo, S.iron);
  pole.position.y = 2.0;
  pole.castShadow = true;
  g.add(pole);
  const collar = new THREE.Mesh(S.lampCollarGeo, S.iron);
  collar.position.y = 3.32;
  g.add(collar);
  // ornamental cross arms so the head is not just a lump on a stick
  for (const ry of [0, Math.PI / 2]) {
    const arm = new THREE.Mesh(S.lampArmGeo, S.iron);
    arm.position.y = 3.2;
    arm.rotation.y = ry;
    g.add(arm);
    for (const s of [-1, 1]) {
      const knob = new THREE.Mesh(S.lampKnobGeo, S.iron);
      knob.position.set(Math.cos(ry) * s * 0.25, 3.2, -Math.sin(ry) * s * 0.25);
      g.add(knob);
    }
  }
  // glazing is the lantern body; the ironwork is four corner posts around it
  const glass = new THREE.Mesh(S.lampCageGeo, S.lampGlass);
  glass.rotation.y = Math.PI / 4;
  glass.position.y = 3.6;
  g.add(glass);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU;
    const post = new THREE.Mesh(S.lampPostBarGeo, S.iron);
    post.position.set(Math.cos(a) * 0.225, 3.6, Math.sin(a) * 0.225);
    post.rotation.y = -a;
    post.rotation.z = 0.06;
    g.add(post);
  }
  const roof = new THREE.Mesh(S.lampRoofGeo, S.iron);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = 3.96;
  g.add(roof);
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: S.glow, color: 0xffd9a0, transparent: true, opacity: 0.3, depthWrite: false })
  );
  halo.scale.set(1.6, 1.6, 1);
  halo.position.y = 3.6;
  g.add(halo);
  g.position.set(x, 0, z);
  scene.add(g);
  addCollider(x - 0.28, x + 0.28, z - 0.28, z + 0.28);
  return g;
}

export function makeTorch(scene, addCollider, flames, x, z) {
  const S = kit();
  const g = new THREE.Group();
  const pole = new THREE.Mesh(S.torchPoleGeo, S.bamboo);
  pole.position.y = 1.1;
  pole.castShadow = true;
  g.add(pole);
  for (const ny of [0.5, 1.1, 1.7]) {
    const ring = new THREE.Mesh(S.torchRingGeo, S.bambooRing);
    ring.position.y = ny;
    g.add(ring);
  }
  const cup = new THREE.Mesh(S.torchCupGeo, S.torchMetal);
  cup.position.y = 2.28;
  cup.castShadow = true;
  g.add(cup);
  const flame = new THREE.Mesh(S.flameOutGeo, S.flameOut);
  flame.position.y = 2.62;
  flame.userData.ph = Math.random() * 6.28;
  g.add(flame);
  flames.push(flame);
  const core = new THREE.Mesh(S.flameInGeo, S.flameIn);
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

/**
 * Sun lounger: slung pad on a tubular frame, back hinged at the seat edge, a
 * headrest, feet on the ground and wheels at the head end. Seat sits at 0.36 m
 * so a 1.7 m NPC can sit on it without floating.
 */
export function makeLounger(scene, x, z, rotY, col) {
  const S = kit();
  const g = new THREE.Group();
  const fm = colorMat(col, "lounger", { roughness: 0.7 });

  const seat = new THREE.Mesh(S.loungerSeatGeo, fm);
  seat.position.set(0, 0.36, 0.06);
  seat.castShadow = true;
  seat.receiveShadow = true;
  g.add(seat);

  const back = new THREE.Mesh(S.loungerBackGeo, fm);
  back.position.set(0, 0.53, -0.77);
  back.rotation.x = 0.62;
  back.castShadow = true;
  g.add(back);

  const pillow = new THREE.Mesh(S.loungerPillowGeo, S.loungerFrame);
  pillow.position.set(0, 0.83, -0.96);
  pillow.rotation.x = 0.62;
  g.add(pillow);

  for (const lx of [-0.3, 0.3]) {
    const rail = new THREE.Mesh(S.loungerRailGeo, S.loungerFrame);
    rail.position.set(lx, 0.325, 0.02);
    g.add(rail);
    for (const lz of [-0.58, 0.62]) {
      const leg = new THREE.Mesh(S.loungerLegGeo, S.loungerFrame);
      leg.position.set(lx, 0.155, lz);
      leg.castShadow = true;
      g.add(leg);
    }
    const wheel = new THREE.Mesh(S.loungerWheelGeo, S.iron);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(lx, 0.075, -0.72);
    g.add(wheel);
  }
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  g.name = "lounger";
  g.userData.kind = "lounger";
  g.userData.seat = { x, z, yaw: rotY };
  scene.add(g);
  return g;
}

/**
 * Beach ball — six alternating panels plus white polar caps.
 * Mesh origin is the ball centre; radius is 0.35 * s (also on userData.radius).
 */
export function makeBeachBall(s) {
  const S = kit();
  const ball = new THREE.Mesh(S.ballGeo, S.ballWhite);
  ball.scale.setScalar(s);
  for (let k = 0; k < 3; k++) {
    const gore = new THREE.Mesh(S.ballGore[k], S.ballCols[k]);
    ball.add(gore);
  }
  for (const sign of [1, -1]) {
    const cap = new THREE.Mesh(S.ballCapGeo, S.ballWhite);
    cap.scale.y = sign;
    ball.add(cap);
  }
  ball.castShadow = true;
  ball.userData.radius = 0.35 * s;
  return ball;
}

export function makeSurfboard(color) {
  const S = kit();
  const b = new THREE.Mesh(S.surfGeo, colorMat(color, "surf", { roughness: 0.4 }));
  const stringer = new THREE.Mesh(S.surfStringerGeo, S.surfStringer);
  b.add(stringer);
  const fins = new THREE.Mesh(S.surfFinGeo, S.surfFin);
  b.add(fins);
  b.castShadow = true;
  return b;
}

/** Festoon run: a sagging cable with warm bulbs hung off it. */
export function stringLights(scene, x1, z1, x2, z2, y, n) {
  const S = kit();
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = x1 + (x2 - x1) * t;
    const z = z1 + (z2 - z1) * t;
    const sag = Math.sin(t * Math.PI) * 0.55;
    pts.push(new THREE.Vector3(x, y - sag, z));
  }
  const cable = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), S.cable);
  cable.frustumCulled = false;
  scene.add(cable);
  for (let i = 0; i <= n; i++) {
    const p = pts[i];
    const b = new THREE.Mesh(S.bulbLitGeo, S.bulbLit[i % S.bulbLit.length]);
    b.position.set(p.x, p.y - 0.075, p.z);
    b.scale.set(1.15, 1.5, 1.15);
    scene.add(b);
  }
}

/** Planted shrub: layered blobs sitting proud of a terracotta pot. */
export function bush(scene, x, z, r) {
  const S = kit();
  const g = new THREE.Group();
  const pot = new THREE.Mesh(S.potGeo, S.pot);
  pot.scale.set(r, 1, r);
  pot.position.y = 0.18;
  pot.castShadow = true;
  g.add(pot);
  const rim = new THREE.Mesh(S.potRimGeo, S.potRim);
  rim.scale.set(r, 1, r);
  rim.position.y = 0.35;
  g.add(rim);
  const mats = [S.hedge, S.hedge2, S.hedgeDark];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU;
    const rr = r * (0.44 + Math.random() * 0.22);
    const s = new THREE.Mesh(S.blobGeo, mats[i % 3]);
    s.scale.set(rr, rr * 0.85, rr);
    s.position.set(
      Math.cos(a) * r * (i === 3 ? 0 : 0.42),
      0.42 + r * (i === 3 ? 0.72 : 0.4) + Math.random() * 0.08,
      Math.sin(a) * r * (i === 3 ? 0 : 0.42)
    );
    s.castShadow = true;
    g.add(s);
  }
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

/** Beach oil drum — ribbed body, lid, painted band. */
export function drum(scene, addCollider, x, z, c) {
  const S = kit();
  const m = colorMat(c, "drum", { roughness: 0.6, metalness: 0.25 });
  const g = new THREE.Group();
  const body = new THREE.Mesh(S.drumGeo, m);
  body.position.y = 0.45;
  body.castShadow = true;
  g.add(body);
  for (const ry of [0.28, 0.62]) {
    const rib = new THREE.Mesh(S.drumRibGeo, m);
    rib.position.y = ry;
    g.add(rib);
  }
  const lid = new THREE.Mesh(S.drumLidGeo, S.drumLid);
  lid.position.y = 0.905;
  g.add(lid);
  g.position.set(x, 0, z);
  scene.add(g);
  addCollider(x - 0.34, x + 0.34, z - 0.34, z + 0.34);
  return g;
}

/** Understorey planting: rounded shrubs, fern fronds and croton spikes. */
export function foliageClump(scene, x, z, y, s) {
  const S = kit();
  s = s || 1;
  const g = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const r = (0.22 + Math.random() * 0.09) * s;
    const b = new THREE.Mesh(S.blobGeo, i % 2 ? S.fern2 : S.fern);
    b.scale.set(r * 1.3, r * 0.85, r * 1.3);
    b.position.set((Math.random() - 0.5) * 0.45 * s, r * 0.7, (Math.random() - 0.5) * 0.45 * s);
    b.castShadow = true;
    g.add(b);
  }
  // fern fronds arch out over the shrubs so the clump has an edge, not a dome
  for (let i = 0; i < 5; i++) {
    const f = new THREE.Mesh(S.fernBladeGeo, i % 2 ? S.fern2 : S.fern);
    f.rotation.order = "YXZ";
    f.rotation.y = (i / 5) * TAU + Math.random() * 0.5;
    f.rotation.z = 0.1 + Math.random() * 0.45;
    f.position.y = (0.28 + Math.random() * 0.14) * s;
    f.scale.setScalar(s * (0.95 + Math.random() * 0.5));
    f.castShadow = true;
    g.add(f);
  }
  const cols = [S.crotonR, S.crotonO, S.crotonY];
  for (let i = 0; i < 2; i++) {
    const a = (i / 2) * TAU + Math.random();
    const c = new THREE.Mesh(S.crotonGeo, cols[i % 3]);
    c.scale.set(s, s * (1.1 + Math.random() * 0.5), s);
    c.position.set(Math.cos(a) * 0.3 * s, 0.34 * s, Math.sin(a) * 0.3 * s);
    c.rotation.z = Math.cos(a) * -0.3;
    c.rotation.x = Math.sin(a) * 0.3;
    c.castShadow = true;
    g.add(c);
  }
  g.position.set(x, y, z);
  scene.add(g);
  return g;
}

/** Banana: sheathed stalk with big drooping ragged-edged leaves and a hand of fruit. */
export function bananaPlant(scene, x, z, y) {
  const S = kit();
  const g = new THREE.Group();
  const stalk = new THREE.Mesh(S.stalkGeo, S.stalk);
  stalk.position.y = 0.5;
  stalk.castShadow = true;
  g.add(stalk);
  for (let i = 0; i < 6; i++) {
    const leaf = new THREE.Mesh(S.bananaLeafGeo, i % 2 ? S.banana2 : S.banana);
    leaf.rotation.order = "YXZ";
    leaf.rotation.y = (i / 6) * TAU + (Math.random() - 0.5) * 0.3;
    leaf.rotation.z = 0.45 - (i % 3) * 0.22;
    leaf.rotation.x = (Math.random() - 0.5) * 0.2;
    leaf.position.y = 0.92 + (i % 3) * 0.06;
    leaf.scale.setScalar(0.85 + (i % 3) * 0.16);
    leaf.castShadow = true;
    g.add(leaf);
  }
  for (let i = 0; i < 5; i++) {
    const f = new THREE.Mesh(S.bananaFruitGeo, S.bananaFruit);
    const a = (i / 5) * TAU;
    f.position.set(Math.cos(a) * 0.07, 0.82, Math.sin(a) * 0.07);
    f.rotation.z = Math.cos(a) * 0.5;
    f.rotation.x = -Math.sin(a) * 0.5;
    g.add(f);
  }
  g.position.set(x, y, z);
  scene.add(g);
  return g;
}

/** Stack of patio chairs — the bottom one keeps its legs on the ground. */
export function chairStack(scene, addCollider, x, z, col) {
  const S = kit();
  const m = colorMat(col, "stack", { roughness: 0.7 });
  const g = new THREE.Group();
  for (const lx of [-0.22, 0.22]) {
    for (const lz of [-0.22, 0.22]) {
      const leg = new THREE.Mesh(S.stackLegGeo, m);
      leg.position.set(lx, 0.22, lz);
      leg.castShadow = true;
      g.add(leg);
    }
  }
  for (let i = 0; i < 4; i++) {
    const yaw = i * 0.09;
    const seat = new THREE.Mesh(S.stackSeatGeo, m);
    seat.position.set(0, 0.45 + i * 0.09, 0);
    seat.rotation.y = yaw;
    seat.castShadow = true;
    g.add(seat);
    const back = new THREE.Mesh(S.stackBackGeo, m);
    back.position.set(Math.sin(yaw) * -0.26, 0.72 + i * 0.09, -0.26 * Math.cos(yaw));
    back.rotation.y = yaw;
    back.rotation.x = -0.26;
    back.castShadow = true;
    g.add(back);
  }
  g.position.set(x, 0, z);
  scene.add(g);
  addCollider(x - 0.4, x + 0.4, z - 0.4, z + 0.4);
  return g;
}

/** Sand umbrella: scalloped two-tone canopy on a spike, tilted like a real one. */
export function beachUmbrella(scene, x, z, colorMat_, tilt) {
  const S = kit();
  const grp = new THREE.Group();
  grp.position.set(x, 0, z);
  const pole = new THREE.Mesh(S.beachPoleGeo, S.pole);
  pole.position.y = 1.2;
  pole.castShadow = true;
  grp.add(pole);
  const hex = colorMat_ && colorMat_.color ? colorMat_.color.getHex() : 0xf2654e;
  const can = new THREE.Mesh(beachCanopyFor(hex), S.canopy);
  can.position.y = 2.3;
  can.castShadow = true;
  grp.add(can);
  const hub = new THREE.Mesh(S.hubGeo, S.pole);
  hub.position.y = 2.3;
  hub.scale.setScalar(0.8);
  grp.add(hub);
  const fin = new THREE.Mesh(S.bulbGeo, S.pole);
  fin.position.y = 3.02;
  grp.add(fin);
  if (tilt) {
    grp.rotation.z = (Math.random() - 0.5) * 0.22;
    grp.rotation.x = (Math.random() - 0.5) * 0.16;
  }
  scene.add(grp);
  return grp;
}
