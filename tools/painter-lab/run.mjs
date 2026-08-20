#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { runSession } from "./engine.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const photos = path.join(__dirname, "photos");

function decodeJpeg(buf) {
  try {
    const require = createRequire(import.meta.url);
    const jpeg = require("jpeg-js");
    const raw = jpeg.decode(buf, { maxMemoryUsageInMB: 64 });
    return { data: raw.data, width: raw.width, height: raw.height };
  } catch {
    return null;
  }
}

const files = fs.readdirSync(photos).filter((f) => f.endsWith(".jpg"));
if (!files.length) {
  console.error("no photos in", photos);
  process.exit(1);
}

const rows = [];
for (const f of files) {
  const img = decodeJpeg(fs.readFileSync(path.join(photos, f)));
  if (!img) {
    console.warn("skip (need jpeg-js):", f);
    continue;
  }
  const t0 = Date.now();
  const r = runSession(img.data, img.width, img.height, { maxSteps: 700, size: 128 });
  rows.push({
    file: f,
    mae: +r.mae.toFixed(2),
    paints: r.paints,
    mixes: r.stats.squeezes + r.stats.knife,
    cleans: r.stats.cleans,
    loads: r.stats.loads,
    switches: r.stats.switches,
    time: +r.stats.time.toFixed(1),
    ms: Date.now() - t0,
  });
  console.log(f, rows[rows.length - 1]);
}

if (!rows.length) {
  console.error("Install jpeg-js: npm i -D jpeg-js");
  process.exit(2);
}
const avg = (k) => rows.reduce((s, r) => s + r[k], 0) / rows.length;
console.log("--- avg ---");
console.log({
  mae: avg("mae").toFixed(2),
  paints: avg("paints").toFixed(0),
  mixes: avg("mixes").toFixed(1),
  cleans: avg("cleans").toFixed(1),
  ratioPaintToPrep: (avg("paints") / Math.max(1, avg("mixes") + avg("cleans"))).toFixed(2),
});
