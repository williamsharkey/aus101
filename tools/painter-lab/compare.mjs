#!/usr/bin/env node
/**
 * Compare paint-loop samplers on a synthetic beach (sky top / sand bottom)
 * plus optional JPEGs. Reports MAE split by half so we can see top-half bias.
 */
import { runSession } from "./engine.js";
import {
  collectPatches,
  collectPatchesGreedy,
  collectPatchesTiled,
  collectPatchesCoverage,
} from "../../src/paint/policy.js";

const W = 96;
const H = 96;

function synthetic() {
  const d = new Uint8ClampedArray(W * H * 4);
  for (let y = 0; y < H; y++) {
    const v = y / (H - 1);
    for (let x = 0; x < W; x++) {
      const u = x / (W - 1);
      let r, g, b;
      if (v < 0.42) {
        const t = v / 0.42;
        r = 90 + t * 80;
        g = 170 + t * 40;
        b = 230 - t * 30;
      } else if (v < 0.5) {
        r = 210;
        g = 170;
        b = 120;
      } else {
        const t = (v - 0.5) / 0.5;
        r = 232 - t * 36;
        g = 196 - t * 40;
        b = 148 - t * 28;
      }
      const dx = u - 0.62;
      const dy = v - 0.58;
      if (dx * dx + dy * dy * 1.6 < 0.012) {
        r = 196;
        g = 48;
        b = 40;
      }
      const i = (y * W + x) * 4;
      d[i] = r;
      d[i + 1] = g;
      d[i + 2] = b;
      d[i + 3] = 255;
    }
  }
  return d;
}

function splitMae(view, paint, size) {
  let top = 0,
    bot = 0,
    tn = 0,
    bn = 0,
    topLinen = 0,
    botLinen = 0;
  const mid = (size / 2) | 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const e =
        Math.abs(view[i] - paint[i]) +
        Math.abs(view[i + 1] - paint[i + 1]) +
        Math.abs(view[i + 2] - paint[i + 2]);
      const linen =
        Math.abs(paint[i] - 244) + Math.abs(paint[i + 1] - 239) + Math.abs(paint[i + 2] - 228);
      if (y < mid) {
        top += e;
        tn += 1;
        if (linen < 18) topLinen += 1;
      } else {
        bot += e;
        bn += 1;
        if (linen < 18) botLinen += 1;
      }
    }
  }
  return {
    top: top / (tn * 3),
    bot: bot / (bn * 3),
    topLinen: topLinen / tn,
    botLinen: botLinen / bn,
  };
}

const ALGOS = [
  ["greedy", collectPatchesGreedy],
  ["tiled", collectPatchesTiled],
  ["coverage", collectPatchesCoverage],
  ["default", collectPatches],
];

const view = synthetic();
console.log("synthetic beach 96² — sky top, sand bottom, red blob");
const rows = [];
for (const [name, collect] of ALGOS) {
  const t0 = Date.now();
  const r = runSession(view, W, H, { maxSteps: 520, size: 96, collect });
  const split = splitMae(r.view, r.paint, r.size);
  const row = {
    algo: name,
    mae: +r.mae.toFixed(2),
    top: +split.top.toFixed(2),
    bot: +split.bot.toFixed(2),
    botLinen: +split.botLinen.toFixed(2),
    paints: r.paints,
    mixes: r.stats.squeezes,
    ms: Date.now() - t0,
  };
  rows.push(row);
  console.log(row);
}

const best = rows.slice().sort((a, b) => a.mae + a.bot - (b.mae + b.bot))[0];
console.log("pick", best.algo, "(lowest overall+bottom MAE)");
