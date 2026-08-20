/** sRGB ↔ linear, Kubelka–Munk mix, CIE76 deltaE. */

export function srgbToLinear(c) {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}
export function linearToSrgb(x) {
  const y = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  return Math.max(0, Math.min(255, Math.round(y * 255)));
}

export function rgbToLin(r, g, b) {
  return [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
}
export function linToRgb(l) {
  return [linearToSrgb(l[0]), linearToSrgb(l[1]), linearToSrgb(l[2])];
}

function ks(r) {
  const x = Math.max(0.02, Math.min(0.98, r));
  return ((1 - x) * (1 - x)) / (2 * x);
}
function ksInv(v) {
  // R = 1 + v - sqrt(v(v+2))
  const s = Math.sqrt(v * (v + 2));
  return Math.max(0.02, Math.min(0.98, 1 + v - s));
}

/** Mix pigments by volume using K/S (Kubelka–Munk, single coeff). */
export function mixPigment(a, va, b, vb) {
  const t = va + vb;
  if (t <= 1e-8) return a.slice();
  const wa = va / t;
  const wb = vb / t;
  return [0, 1, 2].map((i) => ksInv(ks(a[i]) * wa + ks(b[i]) * wb));
}

export function mixMany(parts) {
  // parts: [{ lin:[r,g,b], v }]
  let acc = [0.5, 0.5, 0.5];
  let v = 0;
  for (const p of parts) {
    if (p.v <= 0) continue;
    acc = v <= 0 ? p.lin.slice() : mixPigment(acc, v, p.lin, p.v);
    v += p.v;
  }
  return { lin: acc, v };
}

export function rgbToLab(r, g, b) {
  let [R, G, B] = rgbToLin(r, g, b);
  let x = R * 0.4124 + G * 0.3576 + B * 0.1805;
  let y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  let z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  x /= 0.95047;
  z /= 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

export function deltaE(r1, g1, b1, r2, g2, b2) {
  const a = rgbToLab(r1, g1, b1);
  const b = rgbToLab(r2, g2, b2);
  const dL = a[0] - b[0];
  const da = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dL * dL + da * da + db * db);
}

export function linToRgb255(lin) {
  const rgb = linToRgb(lin);
  return { r: rgb[0], g: rgb[1], b: rgb[2] };
}

export function css(rgb) {
  return `rgb(${rgb.r|0},${rgb.g|0},${rgb.b|0})`;
}
