import { createStudio } from "./studio.js";
import { chooseAction, collectPatches } from "./policy.js";

export const CANVAS = 192;

/** Fraction of pixels still near linen (244, 239, 228). */
export function linenFrac(pix, w, h) {
  const n = w * h;
  if (!n) return 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const d = Math.abs(pix[o] - 244) + Math.abs(pix[o + 1] - 239) + Math.abs(pix[o + 2] - 228);
    if (d <= 18) c += 1;
  }
  return c / n;
}

export function createPaintBrain() {
  const studio = createStudio();
  const canvas = typeof document !== "undefined" ? document.createElement("canvas") : null;
  let ctx = null;
  let paint = new Uint8ClampedArray(CANVAS * CANVAS * 4);
  let paints = 0;
  let houseStrokes = 0;
  fillLinen();
  if (canvas) {
    canvas.width = CANVAS;
    canvas.height = CANVAS;
    ctx = canvas.getContext("2d");
    flush();
  }

  function flush() {
    if (!ctx) return;
    const img = ctx.createImageData(CANVAS, CANVAS);
    img.data.set(paint);
    ctx.putImageData(img, 0, 0);
  }

  function stamp(u, v, rgb, width, kind) {
    const cx = u * CANVAS;
    const cy = v * CANVAS;
    const rx =
      (kind === "wash" ? width * 1.2 : kind === "dash" ? width * 1.7 : width) * CANVAS;
    const ry =
      (kind === "wash" ? width * 0.95 : kind === "dash" ? width * 0.5 : width) * CANVAS;
    const x0 = Math.max(0, (cx - rx) | 0);
    const x1 = Math.min(CANVAS - 1, (cx + rx) | 0);
    const y0 = Math.max(0, (cy - ry) | 0);
    const y1 = Math.min(CANVAS - 1, (cy + ry) | 0);
    const cover = kind === "wash" ? 0.92 : 0.78;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const dx = (x + 0.5 - cx) / Math.max(0.5, rx);
        const dy = (y + 0.5 - cy) / Math.max(0.5, ry);
        const d2 = dx * dx + dy * dy;
        if (d2 > 1) continue;
        const a = (1 - d2) * cover;
        const i = (y * CANVAS + x) * 4;
        paint[i] = paint[i] * (1 - a) + rgb.r * a;
        paint[i + 1] = paint[i + 1] * (1 - a) + rgb.g * a;
        paint[i + 2] = paint[i + 2] * (1 - a) + rgb.b * a;
      }
    }
  }

  function downsample(toW, toH) {
    const out = new Uint8ClampedArray(toW * toH * 4);
    for (let y = 0; y < toH; y++) {
      for (let x = 0; x < toW; x++) {
        const u = (x + 0.5) / toW;
        const v = (y + 0.5) / toH;
        const px = Math.min(CANVAS - 1, (u * CANVAS) | 0);
        const py = Math.min(CANVAS - 1, (v * CANVAS) | 0);
        const si = (py * CANVAS + px) * 4;
        const di = (y * toW + x) * 4;
        out[di] = paint[si];
        out[di + 1] = paint[si + 1];
        out[di + 2] = paint[si + 2];
        out[di + 3] = 255;
      }
    }
    return out;
  }

  function fillLinen() {
    for (let i = 0; i < CANVAS * CANVAS; i++) {
      paint[i * 4] = 244;
      paint[i * 4 + 1] = 239;
      paint[i * 4 + 2] = 228;
      paint[i * 4 + 3] = 255;
    }
  }

  function resetLinen() {
    fillLinen();
    paints = 0;
    houseStrokes = 0;
    flush();
  }

  function step(viewPix, vw, vh) {
    const W = vw || CANVAS;
    const H = vh || CANVAS;
    const pSmall = W === CANVAS ? paint : downsample(W, H);
    const patches = collectPatches(viewPix, pSmall, W, H, 2);
    let errSum = 0;
    for (const p of patches) errSum += p.err;
    const meanErr = patches.length ? errSum / patches.length : 0;
    const lf = linenFrac(paint, CANVAS, CANVAS);
    const act = chooseAction(studio, patches, paints, { houseStrokes, linenFrac: lf });
    if (act.type === "switch") studio.switchBrush(act.id);
    else if (act.type === "clean") studio.clean();
    else if (act.type === "load") studio.load(act.well, act.n);
    else if (act.type === "squeeze") {
      studio.squeeze(act.tube, act.well, act.amount);
      if (act.follow) studio.squeeze(act.follow.tube, act.follow.well, act.follow.amount);
    } else if (act.type === "paint" && act.patch) {
      if (!studio.spend()) studio.clean();
      else {
        const rgb = studio.rgbOfBrush();
        if (rgb) {
          stamp(act.patch.u, act.patch.v, rgb, studio.spec.width, act.kind);
          paints += 1;
          if (studio.active === "house") houseStrokes += 1;
        }
      }
    }
    flush();
    act.paints = paints;
    act.meanErr = meanErr;
    act.nPatches = patches.length;
    act.houseStrokes = houseStrokes;
    act.linenFrac = lf;
    return act;
  }

  return {
    studio,
    canvas,
    paint,
    step,
    flush,
    resetLinen,
    linenFrac() {
      return linenFrac(paint, CANVAS, CANVAS);
    },
    get paints() {
      return paints;
    },
    get houseStrokes() {
      return houseStrokes;
    },
    CANVAS,
  };
}
