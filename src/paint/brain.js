import { createStudio } from "./studio.js";
import { chooseAction, collectPatches } from "./policy.js";

export const CANVAS = 192;

export function createPaintBrain() {
  const studio = createStudio();
  const canvas = typeof document !== "undefined" ? document.createElement("canvas") : null;
  let ctx = null;
  let paint = new Uint8ClampedArray(CANVAS * CANVAS * 4);
  for (let i = 0; i < CANVAS * CANVAS; i++) {
    paint[i * 4] = 244;
    paint[i * 4 + 1] = 239;
    paint[i * 4 + 2] = 228;
    paint[i * 4 + 3] = 255;
  }
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
    const rx = (kind === "dash" ? width * 1.7 : width) * CANVAS;
    const ry = (kind === "dash" ? width * 0.5 : width) * CANVAS;
    const x0 = Math.max(0, (cx - rx) | 0);
    const x1 = Math.min(CANVAS - 1, (cx + rx) | 0);
    const y0 = Math.max(0, (cy - ry) | 0);
    const y1 = Math.min(CANVAS - 1, (cy + ry) | 0);
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const dx = (x + 0.5 - cx) / Math.max(0.5, rx);
        const dy = (y + 0.5 - cy) / Math.max(0.5, ry);
        const d2 = dx * dx + dy * dy;
        if (d2 > 1) continue;
        const a = (1 - d2) * 0.78;
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

  function step(viewPix, vw, vh) {
    const W = vw || CANVAS;
    const H = vh || CANVAS;
    const pSmall = W === CANVAS ? paint : downsample(W, H);
    const patches = collectPatches(viewPix, pSmall, W, H, 2);
    const act = chooseAction(studio, patches);
    if (act.type === "switch") studio.switchBrush(act.id);
    else if (act.type === "clean") studio.clean();
    else if (act.type === "load") studio.load(act.well, act.n);
    else if (act.type === "squeeze") {
      studio.squeeze(act.tube, act.well, act.amount);
      if (act.follow) studio.squeeze(act.follow.tube, act.follow.well, act.follow.amount);
      studio.load(act.well, 6);
    } else if (act.type === "paint" && act.patch) {
      if (!studio.spend()) studio.clean();
      else {
        const rgb = studio.rgbOfBrush();
        if (rgb) stamp(act.patch.u, act.patch.v, rgb, studio.spec.width, act.kind);
      }
    }
    flush();
    return act;
  }

  return { studio, canvas, paint, step, flush, CANVAS };
}
