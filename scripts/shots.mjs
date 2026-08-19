#!/usr/bin/env node
/**
 * Model-audit screenshots. Bundles tools/shots/harness.js, serves it with the
 * real dist assets, then drives headless Chromium through a shot list.
 *
 * node scripts/shots.mjs [--out DIR] [--only NAME,NAME] [--w 1280] [--h 800]
 */
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function arg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const OUT = path.resolve(root, arg("--out", "shots"));
const W = +arg("--w", 1280);
const H = +arg("--h", 800);
const only = arg("--only", "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
/** Ad hoc cameras, so a shot does not need a code edit: --custom '[{"name":"x","orbit":{...}}]' */
const custom = JSON.parse(arg("--custom", "[]"));

/**
 * Camera setups. `orbit` shots sweep the listed angles around a point.
 * Keep any shot list in ASCENDING `t` — the harness only steps the sim forward,
 * so a decreasing `t` renders later state under an earlier label.
 */
export const SHOTS = [
  { name: "piano-front", orbit: { at: [7, 1.0, -29], radius: 3.4, height: 1.7, deg: 0, fov: 42 } },
  { name: "piano-side", orbit: { at: [7, 1.0, -29], radius: 3.4, height: 1.5, deg: 90, fov: 42 } },
  { name: "piano-back", orbit: { at: [7, 1.0, -29], radius: 3.4, height: 1.9, deg: 180, fov: 42 } },
  { name: "piano-seat", orbit: { at: [7, 0.8, -29], radius: 2.0, height: 1.1, deg: 55, fov: 46 } },
  { name: "piano-wide", orbit: { at: [7, 1.0, -29], radius: 9, height: 3.2, deg: 25, fov: 45 } },

  { name: "painter-front", orbit: { at: [4.5, 1.1, -6.2], radius: 3.2, height: 1.6, deg: 20, fov: 44 } },
  { name: "painter-side", orbit: { at: [4.5, 1.1, -6.2], radius: 3.2, height: 1.5, deg: 110, fov: 44 } },
  { name: "painter-back", orbit: { at: [4.5, 1.1, -6.2], radius: 3.2, height: 1.7, deg: 200, fov: 44 } },
  { name: "painter-easel", orbit: { at: [4.2, 1.2, -6.0], radius: 1.9, height: 1.5, deg: 300, fov: 50 } },

  { name: "ken-guitar-a", orbit: { at: [-6, 1.0, 5], radius: 3.0, height: 1.5, deg: 20, fov: 42 } },
  { name: "ken-guitar-b", orbit: { at: [5, 1.0, 3], radius: 3.0, height: 1.5, deg: 200, fov: 42 } },
  { name: "dancers", orbit: { at: [12, 1.0, 8], radius: 5.5, height: 2.0, deg: 200, fov: 46 } },
  { name: "beach-cast", orbit: { at: [-8.2, 1.0, 4.0], radius: 4.0, height: 1.7, deg: 30, fov: 45 } },
  { name: "aus101", orbit: { at: [0, 1.0, 8], radius: 3.4, height: 1.6, deg: 0, fov: 42 } },
  { name: "aus101-side", orbit: { at: [0, 1.0, 8], radius: 3.4, height: 1.6, deg: 90, fov: 42 } },
  { name: "dj-booth", orbit: { at: [-24, 1.4, 7], radius: 8, height: 3.0, deg: 180, fov: 48 } },
  { name: "synth-rig", orbit: { at: [15.6, 1.2, 4.2], radius: 5, height: 2.2, deg: 180, fov: 48 } },
  { name: "fight-site", orbit: { at: [16, 1.0, 2], radius: 5.5, height: 2.0, deg: 30, fov: 46, t: 9 } },
  { name: "psa-kiosk", orbit: { at: [0, 1.4, 16], radius: 6, height: 2.6, deg: 180, fov: 48 } },
  { name: "surf-club", shot: { pos: [-13, 6.5, 27], target: [-18, 1.8, 14], fov: 55 } },
  { name: "surf-club-inside", shot: { pos: [-15.9, 1.6, 16.2], target: [-19, 1.4, 12], fov: 72 } },
  { name: "change-rooms", shot: { pos: [-26.5, 2.0, 32], target: [-26.5, 1.5, 25], fov: 58 } },
  { name: "overview", shot: { pos: [0, 14, 34], target: [0, 1, -6], fov: 55 } },
  { name: "boardwalk", shot: { pos: [2, 3.2, 26], target: [0, 1.4, 14], fov: 55 } },
];

async function bundle(dir) {
  fs.mkdirSync(dir, { recursive: true });
  const extrasDir = path.join(root, "tools/shots/extras");
  const extras = fs.existsSync(extrasDir)
    ? fs.readdirSync(extrasDir).filter((f) => f.endsWith(".js"))
    : [];
  const entry = path.join(dir, "entry.js");
  fs.writeFileSync(
    entry,
    ['import "../tools/shots/harness.js";']
      .concat(extras.map((f) => `import "../tools/shots/extras/${f}";`))
      .join("\n")
  );
  await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    outfile: path.join(dir, "harness.js"),
    format: "esm",
    target: ["es2020"],
    logLevel: "warning",
  });
  fs.writeFileSync(
    path.join(dir, "index.html"),
    `<!DOCTYPE html><meta charset="utf-8"><style>html,body{margin:0;background:#0b1210;overflow:hidden}canvas{display:block;width:100vw;height:100vh}</style><canvas id="game"></canvas><script type="module" src="./harness.js"></script>`
  );
}

function serve(dirs, port = 0) {
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".mp4": "video/mp4",
    ".mp3": "audio/mpeg",
    ".json": "application/json",
  };
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
    for (const dir of dirs) {
      const file = path.join(dir, rel);
      if (file.startsWith(dir) && fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
        return fs.createReadStream(file).pipe(res);
      }
    }
    res.writeHead(404).end("nope");
  });
  return new Promise((r) => server.listen(port, "127.0.0.1", () => r(server)));
}

const tmp = path.join(root, `.shots-build-${path.basename(OUT)}`);
await bundle(tmp);
const server = await serve([tmp, path.join(root, "dist")]);
const port = server.address().port;

const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: W, height: H } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
await page.goto(`http://127.0.0.1:${port}/index.html`);
await page.waitForFunction("window.__ready === true", null, { timeout: 60000 });

fs.mkdirSync(OUT, { recursive: true });
const base = only.length ? SHOTS.filter((s) => only.includes(s.name)) : custom.length ? [] : SHOTS;
const list = [...base, ...custom];
for (const s of list) {
  await page.evaluate(
    ([spec]) => (spec.orbit ? window.__orbit(spec.orbit) : window.__shot(spec.shot)),
    [s]
  );
  await page.screenshot({ path: path.join(OUT, `${s.name}.png`) });
  console.log("shot", s.name);
}

const boxes = await page.evaluate(() =>
  ["piano-ken", "artist", "ken-guitar-a", "babe-boom-a", "AUS101"].map((n) => [n, window.__bbox(n)])
);
fs.writeFileSync(path.join(OUT, "bboxes.json"), JSON.stringify(Object.fromEntries(boxes), null, 2));

await browser.close();
server.close();
if (errors.length) {
  console.error("page errors:\n" + errors.join("\n"));
  process.exitCode = 1;
}
console.log(`\n${list.length} shots → ${OUT}`);
