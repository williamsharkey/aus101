/**
 * In-memory cassette: save a 16-step pattern, carry one tape, play it
 * at the boombox or DJ booth. Original oscillators, no files / worklets.
 */

export const TRACKS = ["kick", "hat", "snare", "n0", "n1", "n2", "n3"];
export const NOTES = [72, 75, 79, 84];

const INSERT_R = 2.5;
const BOOM_R = 8;
const DJ_R = 10;

const hz = (m) => 440 * 2 ** ((m - 69) / 12);

function osc(ctx, type, f) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.value = f;
  return o;
}
function gn(ctx, v) {
  const g = ctx.createGain();
  g.gain.value = v;
  return g;
}
function bq(ctx, type, f, q) {
  const n = ctx.createBiquadFilter();
  n.type = type;
  n.frequency.value = f;
  if (q != null) n.Q.value = q;
  return n;
}
function ramp(p, v, s, t) {
  p.cancelScheduledValues(t);
  p.setValueAtTime(p.value, t);
  p.linearRampToValueAtTime(v, t + s);
}

function noiseBuf(ctx, sec) {
  const n = Math.max(1, (ctx.sampleRate * sec) | 0);
  const b = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function envGain(ctx, t, peak, atk, rel) {
  const g = gn(ctx, 0.0001);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + atk);
  g.gain.exponentialRampToValueAtTime(0.0001, t + rel);
  return g;
}

function distXZ(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot((a.x ?? 0) - (b.x ?? 0), (a.z ?? 0) - (b.z ?? 0));
}

function armUnlock() {
  if (typeof window === "undefined" || armUnlock._on) return;
  armUnlock._on = true;
  const go = () => {
    if (!acquireCtx._c) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      acquireCtx._c = new AC();
    }
    if (acquireCtx._c.state === "suspended") acquireCtx._c.resume();
  };
  window.addEventListener("pointerdown", go);
  window.addEventListener("keydown", go);
  window.addEventListener("touchstart", go);
}

export function acquireCtx(passed) {
  armUnlock();
  if (passed) acquireCtx._c = passed;
  if (!acquireCtx._c) {
    const AC = (typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext)) || null;
    if (!AC) return null;
    acquireCtx._c = new AC();
  }
  if (acquireCtx._c.state === "suspended") acquireCtx._c.resume();
  return acquireCtx._c;
}

armUnlock();

export function makePattern(bpm = 118) {
  const p = { steps: 16, bpm };
  for (const k of TRACKS) p[k] = new Array(16).fill(0);
  return p;
}

export function clonePattern(src) {
  const p = makePattern(src?.bpm || 118);
  if (!src) return p;
  for (const k of TRACKS) {
    const row = src[k];
    if (!row) continue;
    for (let i = 0; i < 16; i++) p[k][i] = row[i] ? 1 : 0;
  }
  return p;
}

export function starterPattern() {
  const p = makePattern(118);
  for (let i = 0; i < 16; i++) {
    if ((i & 3) === 0) p.kick[i] = 1;
    if ((i & 1) === 0) p.hat[i] = 1;
  }
  p.hat[3] = 1;
  p.hat[11] = 1;
  p.snare[4] = 1;
  p.snare[12] = 1;
  p.snare[14] = 1;
  p.n0[0] = 1;
  p.n2[4] = 1;
  p.n1[8] = 1;
  p.n0[10] = 1;
  p.n3[12] = 1;
  return p;
}

function kick(ctx, dest, t) {
  const o = osc(ctx, "sine", 148);
  o.frequency.setValueAtTime(148, t);
  o.frequency.exponentialRampToValueAtTime(42, t + 0.11);
  const g = envGain(ctx, t, 0.78, 0.004, 0.22);
  o.connect(g).connect(dest);
  o.start(t);
  o.stop(t + 0.24);
}

function hat(ctx, dest, buf, t, open) {
  const s = ctx.createBufferSource();
  s.buffer = buf;
  const bp = bq(ctx, "highpass", open ? 5200 : 7600, 0.7);
  const g = envGain(ctx, t, open ? 0.16 : 0.11, 0.002, open ? 0.14 : 0.045);
  s.connect(bp).connect(g).connect(dest);
  s.start(t);
  s.stop(t + (open ? 0.16 : 0.06));
}

function snare(ctx, dest, buf, t) {
  const s = ctx.createBufferSource();
  s.buffer = buf;
  const bp = bq(ctx, "bandpass", 1800, 0.85);
  const ng = envGain(ctx, t, 0.28, 0.003, 0.16);
  s.connect(bp).connect(ng).connect(dest);
  s.start(t);
  s.stop(t + 0.18);
  const o = osc(ctx, "sine", 188);
  o.frequency.exponentialRampToValueAtTime(120, t + 0.08);
  const g = envGain(ctx, t, 0.22, 0.004, 0.12);
  o.connect(g).connect(dest);
  o.start(t);
  o.stop(t + 0.14);
}

function tone(ctx, dest, t, midi) {
  const o = osc(ctx, "sine", hz(midi));
  const o2 = osc(ctx, "triangle", hz(midi));
  o2.detune.value = 7;
  const g = envGain(ctx, t, 0.2, 0.01, 0.38);
  o.connect(g);
  o2.connect(g);
  g.connect(dest);
  o.start(t);
  o.stop(t + 0.4);
  o2.start(t);
  o2.stop(t + 0.4);
}

function hitStep(ctx, dest, nbuf, p, t, i) {
  const e = i & 15;
  if (!p) return;
  if (p.kick && p.kick[e]) kick(ctx, dest.kick, t);
  if (p.hat && p.hat[e]) hat(ctx, dest.hat, nbuf, t, e === 6 || e === 14);
  if (p.snare && p.snare[e]) snare(ctx, dest.snare, nbuf, t);
  if (p.n0 && p.n0[e]) tone(ctx, dest.syn, t, NOTES[0]);
  if (p.n1 && p.n1[e]) tone(ctx, dest.syn, t, NOTES[1]);
  if (p.n2 && p.n2[e]) tone(ctx, dest.syn, t, NOTES[2]);
  if (p.n3 && p.n3[e]) tone(ctx, dest.syn, t, NOTES[3]);
}

/**
 * 4 bars of 4/4, repeated until the file is at least 30s.
 * bar = 4*60/bpm; fourBar = 4*bar; loops = ceil(30/fourBar);
 * duration = max(30, fourBar*loops). At 118 bpm: bar≈2.034s, 4 bars≈8.136s, 4 loops≈32.54s.
 */
export function loopFileSpec(bpm = 118) {
  const b = bpm || 118;
  const bar = (4 * 60) / b;
  const fourBar = 4 * bar;
  const loops = Math.max(1, Math.ceil(30 / fourBar));
  const duration = Math.max(30, fourBar * loops);
  return { bpm: b, bar, fourBar, loops, duration, step: 15 / b, totalSteps: loops * 4 * 16 };
}

export function loopFileDuration(bpm = 118) {
  return loopFileSpec(bpm).duration;
}

function writeStr(view, offset, s) {
  for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
}

/** PCM 16-bit WAV (RIFF). */
export function encodeWavPcm16(audioBuffer) {
  const ch = audioBuffer.numberOfChannels;
  const sr = audioBuffer.sampleRate;
  const n = audioBuffer.length;
  const dataBytes = n * ch * 2;
  const buf = new ArrayBuffer(44 + dataBytes);
  const view = new DataView(buf);
  writeStr(view, 0, "RIFF");
  view.setUint32(4, 36 + dataBytes, true);
  writeStr(view, 8, "WAVE");
  writeStr(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, ch, true);
  view.setUint32(24, sr, true);
  view.setUint32(28, sr * ch * 2, true);
  view.setUint16(32, ch * 2, true);
  view.setUint16(34, 16, true);
  writeStr(view, 36, "data");
  view.setUint32(40, dataBytes, true);
  const channels = [];
  for (let c = 0; c < ch; c++) channels.push(audioBuffer.getChannelData(c));
  let o = 44;
  for (let i = 0; i < n; i++) {
    for (let c = 0; c < ch; c++) {
      let s = channels[c][i];
      if (s > 1) s = 1;
      else if (s < -1) s = -1;
      view.setInt16(o, s < 0 ? (s * 0x8000) | 0 : (s * 0x7fff) | 0, true);
      o += 2;
    }
  }
  return buf;
}

function renderOffline(ctx) {
  return new Promise((resolve, reject) => {
    let done = false;
    const finish = (buf) => {
      if (done || !buf) return;
      done = true;
      resolve(buf);
    };
    ctx.oncomplete = (ev) => finish(ev.renderedBuffer);
    let p;
    try {
      p = ctx.startRendering();
    } catch (err) {
      reject(err);
      return;
    }
    if (p && typeof p.then === "function") p.then(finish, reject);
  });
}

function triggerDownload(buf, filename, mime) {
  if (!buf || typeof document === "undefined") return false;
  const blob = new Blob([buf], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  return true;
}

/**
 * Offline render of the 16-step bed, looped to >=30s. Returns a PCM 16-bit WAV ArrayBuffer.
 * No live AudioContext; does not touch the preview bed.
 */
export async function renderLoopWav(pattern) {
  const p = clonePattern(pattern);
  const spec = loopFileSpec(p.bpm);
  const { duration, step, totalSteps } = spec;
  const tail = 0.45;
  const sr = 44100;
  const length = Math.max(1, Math.ceil((duration + tail) * sr));
  const OAC =
    (typeof window !== "undefined" && (window.OfflineAudioContext || window.webkitOfflineAudioContext)) ||
    (typeof OfflineAudioContext !== "undefined" ? OfflineAudioContext : null);
  if (!OAC) return null;
  const ctx = new OAC(1, length, sr);
  const PEAK = 0.46;
  const out = gn(ctx, PEAK);
  out.connect(ctx.destination);
  const dest = {
    kick: gn(ctx, 1),
    hat: gn(ctx, 0.72),
    snare: gn(ctx, 0.85),
    syn: gn(ctx, 0.7),
  };
  dest.kick.connect(out);
  dest.hat.connect(out);
  dest.snare.connect(out);
  dest.syn.connect(out);
  const nbuf = noiseBuf(ctx, 0.08);
  for (let i = 0; i < totalSteps; i++) hitStep(ctx, dest, nbuf, p, i * step, i);
  const rendered = await renderOffline(ctx);
  return encodeWavPcm16(rendered);
}

/** Browser download of `aus101-tape.wav` (>=30s loop). */
export async function downloadLoopWav(pattern, filename = "aus101-tape.wav") {
  const wav = await renderLoopWav(pattern);
  return triggerDownload(wav, filename, "audio/wav");
}

/**
 * Live-reading 16-step bed. Holds the caller's pattern object (no row clone);
 * each pulse reads the same arrays, so sequencer toggles hit on the next 16th.
 * @returns {{ start: Function, setMix: Function, stop: Function, running: boolean, step: number }}
 */
export function createPatternBed(ctx, dest, pattern, opts = {}) {
  const PEAK = opts.peak ?? 0.46;
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);
  const kickBus = gn(ctx, 1);
  const hatBus = gn(ctx, 0.72);
  const snareBus = gn(ctx, 0.85);
  const synBus = gn(ctx, 0.7);
  kickBus.connect(out);
  hatBus.connect(out);
  snareBus.connect(out);
  synBus.connect(out);
  const nbuf = noiseBuf(ctx, 0.08);
  let running = false;
  let timer = 0;
  let nextT = 0;
  let stepI = 0;
  let mix = 0;
  let live = pattern;

  const buses = { kick: kickBus, hat: hatBus, snare: snareBus, syn: synBus };
  function pulse(t, i) {
    hitStep(ctx, buses, nbuf, live, t, i);
  }

  function clock() {
    if (!running) return;
    const step = 15 / (live?.bpm || 118);
    const hor = ctx.currentTime + 0.12;
    while (nextT < hor) {
      pulse(nextT, stepI++);
      nextT += step;
    }
    timer = setTimeout(clock, 35);
  }

  const bed = {
    out,
    get running() {
      return running;
    },
    get step() {
      return stepI & 15;
    },
    get pattern() {
      return live;
    },
    /** Swap the live object. Does not clone rows. */
    setPattern(p) {
      if (p) live = p;
    },
    start() {
      if (ctx.state === "suspended") ctx.resume();
      if (running) return;
      running = true;
      stepI = 0;
      nextT = ctx.currentTime + 0.06;
      ramp(out.gain, PEAK * mix, 0.08, ctx.currentTime);
      clock();
    },
    setMix(v, s = 0.5) {
      mix = Math.max(0, Math.min(1, v));
      ramp(out.gain, PEAK * mix, s, ctx.currentTime);
    },
    stop() {
      running = false;
      clearTimeout(timer);
      ramp(out.gain, 0, 0.08, ctx.currentTime);
    },
  };
  return bed;
}

function mountPip() {
  if (typeof document === "undefined") return null;
  if (document.getElementById("aus101-tape-pip")) {
    return document.getElementById("aus101-tape-pip");
  }
  if (!document.getElementById("aus101-tape-css")) {
    const css = document.createElement("style");
    css.id = "aus101-tape-css";
    css.textContent =
      "#aus101-tape-pip{position:fixed;z-index:11;pointer-events:none;left:max(10px,env(safe-area-inset-left,0px));" +
      "bottom:max(12px,env(safe-area-inset-bottom,0px));width:28px;height:16px;border-radius:2px;" +
      "background:#1a1a1e;box-shadow:inset 0 0 0 1px #c84;opacity:0;transition:opacity .2s}" +
      "#aus101-tape-pip[data-on='1']{opacity:.92}" +
      "#aus101-tape-pip i{display:block;margin:4px 4px 0;height:5px;background:#e07030;border-radius:1px}";
    document.head.appendChild(css);
  }
  const el = document.createElement("div");
  el.id = "aus101-tape-pip";
  el.appendChild(document.createElement("i"));
  document.body.appendChild(el);
  return el;
}

/**
 * @param {{ getBoomPos?: () => {x:number,z:number}, getDjPos?: () => {x:number,z:number}, ctx?: AudioContext }} opts
 * @returns {{ hasTape: boolean, saveFromSynth: Function, insertNearest: Function, tick: Function, currentBed: object }}
 */
export function createTapeSystem({ getBoomPos, getDjPos, ctx } = {}) {
  const boomAt = getBoomPos || (() => ({ x: 12, z: 8 }));
  const djAt = getDjPos || (() => ({ x: -24, z: 7 }));
  let clip = null;
  let hasTape = false;
  let inserted = null;
  let inner = null;
  let muted = false;
  let heldMix = 0;
  const pip = mountPip();

  const currentBed = {
    start() {
      inner?.start();
    },
    setMix(v, s) {
      heldMix = v;
      if (!muted) inner?.setMix(v, s);
    },
    stop() {
      inner?.stop();
    },
    get running() {
      return !!inner?.running;
    },
    get step() {
      return inner?.step ?? 0;
    },
    get inserted() {
      return inserted;
    },
  };

  function paintPip() {
    if (pip) pip.dataset.on = hasTape ? "1" : "0";
  }

  function bootInner(pattern) {
    const ac = acquireCtx(ctx);
    if (!ac) return;
    const next = createPatternBed(ac, ac.destination, pattern, { peak: 0.48 });
    if (inner?.running) inner.stop();
    inner = next;
    next.start();
    next.setMix(muted ? 0 : heldMix || 1, 0.08);
  }

  function saveFromSynth(pattern) {
    clip = clonePattern(pattern);
    hasTape = true;
    api.hasTape = true;
    paintPip();
    if (inserted) bootInner(clip);
    return clip;
  }

  function insertNearest(playerPos) {
    if (!hasTape || !clip || !playerPos) return null;
    const boom = boomAt();
    const dj = djAt();
    const db = distXZ(playerPos, boom);
    const dd = distXZ(playerPos, dj);
    let where = null;
    if (db <= INSERT_R && db <= dd) where = "boom";
    else if (dd <= INSERT_R) where = "dj";
    if (!where) return null;
    hasTape = false;
    api.hasTape = false;
    inserted = where;
    paintPip();
    bootInner(clip);
    currentBed.setMix(1, 0.12);
    return where;
  }

  function tick(playerPos) {
    if (hasTape) insertNearest(playerPos);
    if (!inserted || !playerPos || !inner) return;
    const pos = inserted === "boom" ? boomAt() : djAt();
    const r = inserted === "boom" ? BOOM_R : DJ_R;
    const d = distXZ(playerPos, pos);
    let mix = 0;
    if (d < r) mix = 1;
    else mix = Math.max(0, 1 - (d - r) / 7);
    currentBed.setMix(mix, 0.28);
  }

  const onKey = (e) => {
    if (e.code === "KeyM") {
      muted = !muted;
      inner?.setMix(muted ? 0 : heldMix, 0.08);
    }
  };
  if (typeof window !== "undefined") window.addEventListener("keydown", onKey);

  const api = {
    hasTape: false,
    saveFromSynth,
    insertNearest,
    tick,
    currentBed,
    get clip() {
      return clip;
    },
  };
  return api;
}
