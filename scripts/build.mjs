#!/usr/bin/env node
/**
 * BUILD0 — esbuild bundle. Bake tools must never appear in dist/game.js.
 */
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const watch = process.argv.includes("--watch");

const BAN = ["tiktokv.com", "tools/voice/bake", "sessionid", "TIKTOK_SESSION"];

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function writeIndex() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="theme-color" content="#0b1210" />
  <meta property="og:title" content="AUS101" />
  <meta property="og:description" content="I'll Be Back With SPF 50+" />
  <meta property="og:image" content="assets/poster/og.webp" />
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="400" />
  <title>AUS101</title>
  <link rel="preload" as="image" href="assets/poster/og.webp" />
  <style>
    html, body {
      margin: 0;
      height: 100vh;
      width: 100%;
      background: #0b1210;
      overflow: hidden;
      touch-action: none;
      -webkit-user-select: none;
      user-select: none;
      overscroll-behavior: none;
    }
    #game {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: #0b1210;
    }
  </style>
</head>
<body>
  <canvas id="game"></canvas>
  <script type="module" src="./game.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(dist, "index.html"), html);
}

function assertNoBakeLeak(outfile) {
  const src = fs.readFileSync(outfile, "utf8");
  for (const needle of BAN) {
    if (src.toLowerCase().includes(needle.toLowerCase())) {
      throw new Error(`Bake isolation failed: "${needle}" found in ${outfile}`);
    }
  }
}

async function bundle() {
  fs.mkdirSync(dist, { recursive: true });
  const result = await esbuild.build({
    entryPoints: [path.join(root, "src/main.js")],
    bundle: true,
    outfile: path.join(dist, "game.js"),
    format: "esm",
    target: ["es2020"],
    minify: !watch,
    sourcemap: watch,
    logLevel: "info",
  });

  writeIndex();
  copyDir(path.join(root, "assets"), path.join(dist, "assets"));
  assertNoBakeLeak(path.join(dist, "game.js"));
  console.log("build ok → dist/index.html + dist/game.js + assets/");
  return result;
}

if (watch) {
  const ctx = await esbuild.context({
    entryPoints: [path.join(root, "src/main.js")],
    bundle: true,
    outfile: path.join(dist, "game.js"),
    format: "esm",
    target: ["es2020"],
    sourcemap: true,
    logLevel: "info",
  });
  writeIndex();
  copyDir(path.join(root, "assets"), path.join(dist, "assets"));
  await ctx.watch();
  console.log("watching…");
} else {
  await bundle();
}
