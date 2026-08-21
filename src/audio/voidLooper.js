/**
 * 16-pad clip looper for the Shita cave. Rec captures 2 bars (~2s at 120bpm)
 * from the live shita engine, a piano pluck, or a sine. Pads mix; Save writes
 * aus101-void-loop.wav (16–32s PCM).
 */
import { acquireCtx, encodeWavPcm16 } from "./tapeDeck.js";
import { createShita } from "./shitaEngine.js";
import { playPianoPluck } from "./shades.js";

export const PAD_N = 16;
export const BPM = 120;
/** 2 bars of 2/4 at 120bpm (task: ~2s). */
export const REC_SEC = (2 * 2 * 60) / BPM;
export const SAVE_MIN = 16;
export const SAVE_MAX = 32;
export const SAVE_FILE = "aus101-void-loop.wav";

export const PAD_COLORS = [
  "#e07040",
  "#ffd76a",
  "#2ec4c8",
  "#7ad0ff",
  "#9be07a",
  "#ff7ab0",
  "#c9a0ff",
  "#fbf6ea",
  "#e07040",
  "#ffd76a",
  "#2ec4c8",
  "#7ad0ff",
  "#9be07a",
  "#ff7ab0",
  "#c9a0ff",
  "#f4d35e",
];

const CHOIR_IDS = ["piano_ooh_low", "piano_ooh_mid", "piano_ooh_hi"];
const HUM_GAIN = 0.045;
const BUS_PEAK = 0.72;

function gn(ctx, v) {
  const g = ctx.createGain();
  g.gain.value = v;
  return g;
}

function rmsOf(data, n) {
  const m = Math.max(1, n | 0);
  let s = 0;
  for (let i = 0; i < m; i++) s += data[i] * data[i];
  return Math.sqrt(s / m);
}

function makeSineLoop(ctx, sec, freq = 110) {
  const sr = ctx.sampleRate;
  const n = Math.max(1, (sr * sec) | 0);
  const b = ctx.createBuffer(1, n, sr);
  const d = b.getChannelData(0);
  const f2 = freq * 3 / 2;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const env = Math.min(1, t / 0.02) * Math.min(1, (sec - t) / 0.05);
    d[i] = (Math.sin(2 * Math.PI * freq * t) * 0.42 + Math.sin(2 * Math.PI * f2 * t) * 0.2) * env;
  }
  return b;
}

function copyToOffline(oac, buf) {
  if (!buf) return null;
  if (buf.sampleRate === oac.sampleRate && buf.numberOfChannels <= 2) return buf;
  const n = Math.max(1, Math.round(buf.duration * oac.sampleRate));
  const out = oac.createBuffer(1, n, oac.sampleRate);
  const dst = out.getChannelData(0);
  const src = buf.getChannelData(0);
  const ratio = buf.sampleRate / oac.sampleRate;
  for (let i = 0; i < n; i++) {
    const x = i * ratio;
    const j = x | 0;
    const f = x - j;
    const a = src[j] || 0;
    const b = src[j + 1] || a;
    dst[i] = a + (b - a) * f;
  }
  return out;
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

function makePad(i) {
  return { armed: false, buffer: null, playing: false, color: PAD_COLORS[i % PAD_COLORS.length] };
}

/**
 * @param {{
 *   getEngine?: () => { started?: boolean, output?: AudioNode, note?: Function, params?: object } | null,
 *   getPiano?: () => { at?: number, midi?: number, mix?: number } | null,
 *   getVoice?: () => { decode?: Function, ctx?: AudioContext } | null,
 * }} [opts]
 */
export function createVoidLooper(opts = {}) {
  const pads = Array.from({ length: PAD_N }, (_, i) => makePad(i));
  const listeners = new Set();
  let selected = 0;
  let recording = false;
  let recTarget = -1;
  let inCave = false;
  let bus = null;
  let busCtx = null;
  let recTap = null;
  const live = new Array(PAD_N).fill(null);
  const hums = [];
  let choirReady = false;
  let humBusy = false;

  function emit() {
    for (const fn of listeners) {
      try {
        fn(pads);
      } catch {
        /* hud optional */
      }
    }
  }

  function onChange(fn) {
    if (typeof fn === "function") listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function ctxOf() {
    const engine = opts.getEngine?.();
    const passed = engine?.output?.context || opts.getVoice?.()?.ctx;
    const ctx = acquireCtx(passed || undefined);
    if (ctx && ctx !== busCtx) {
      try {
        bus?.disconnect();
      } catch {
        /* first */
      }
      busCtx = ctx;
      bus = gn(ctx, BUS_PEAK);
      bus.connect(ctx.destination);
      recTap = gn(ctx, 1);
    }
    return ctx;
  }

  function stopSrc(slot) {
    const src = live[slot];
    if (!src) return;
    try {
      src.stop();
    } catch {
      /* already */
    }
    try {
      src.disconnect();
    } catch {
      /* already */
    }
    live[slot] = null;
  }

  function startSrc(slot) {
    const ctx = ctxOf();
    const p = pads[slot];
    if (!ctx || !p?.buffer || !bus) return;
    stopSrc(slot);
    const src = ctx.createBufferSource();
    src.buffer = p.buffer;
    src.loop = true;
    src.loopStart = 0;
    src.loopEnd = p.buffer.duration;
    const g = gn(ctx, 0.85);
    src.connect(g).connect(bus);
    src.start();
    live[slot] = src;
  }

  function pickRecPad() {
    if (selected >= 0 && selected < PAD_N && (pads[selected].armed || !pads[selected].buffer || !pads[selected].playing)) {
      return selected;
    }
    for (let i = 0; i < PAD_N; i++) if (!pads[i].buffer) return i;
    return selected >= 0 ? selected : 0;
  }

  function armSource(ctx, tap, engine, piano) {
    const cleanups = [];
    if (engine?.started) {
      if (engine.output) {
        try {
          engine.output.connect(tap);
        } catch {
          /* already */
        }
        cleanups.push(() => {
          try {
            engine.output.disconnect(tap);
          } catch {
            /* already */
          }
        });
        engine.note?.(110, 1.7, 0.9);
        engine.note?.(164.81, 1.35, 0.55);
        engine.note?.(220, 0.9, 0.4);
        return cleanups;
      }
      const rec = createShita(ctx, tap);
      if (rec) {
        if (engine.params) Object.assign(rec.params, engine.params);
        rec.start();
        rec.setMix(0.82, 0.01);
        rec.note(110, 1.7, 0.9);
        rec.note(164.81, 1.35, 0.55);
        rec.note(220, 0.9, 0.4);
        engine.note?.(110, 1.7, 0.85);
        cleanups.push(() => rec.stop());
        return cleanups;
      }
    }
    const pulse = piano || null;
    const recent = pulse?.at && performance.now() - pulse.at < 8000;
    if (pulse && (pulse.mix > 0.05 || recent)) {
      const midi = pulse.midi || 62;
      playPianoPluck(ctx, tap, ctx.currentTime, midi, 0.42);
      playPianoPluck(ctx, tap, ctx.currentTime + 0.55, midi + 7, 0.3);
      playPianoPluck(ctx, tap, ctx.currentTime + 1.1, midi + 12, 0.22);
      return cleanups;
    }
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = 110;
    const o2 = ctx.createOscillator();
    o2.type = "triangle";
    o2.frequency.value = 164.81;
    o2.detune.value = 6;
    const g = gn(ctx, 0.28);
    o.connect(g);
    o2.connect(g);
    g.connect(tap);
    o.start();
    o2.start();
    cleanups.push(() => {
      try {
        o.stop();
        o2.stop();
      } catch {
        /* already */
      }
    });
    return cleanups;
  }

  function captureSeconds(ctx, tap, sec) {
    return new Promise((resolve) => {
      const sr = ctx.sampleRate;
      const need = Math.max(1, Math.ceil(sec * sr));
      const data = new Float32Array(need);
      let wrote = 0;
      let done = false;
      const nodes = [];

      const finish = (buf) => {
        if (done) return;
        done = true;
        for (const n of nodes) {
          try {
            n.disconnect();
          } catch {
            /* already */
          }
        }
        resolve(buf);
      };

      const fromData = () => {
        const n = Math.max(1, wrote);
        const buf = ctx.createBuffer(1, n, sr);
        buf.getChannelData(0).set(data.subarray(0, n));
        if (rmsOf(data, n) < 1e-4) finish(makeSineLoop(ctx, sec));
        else finish(buf);
      };

      const Processor = ctx.createScriptProcessor || ctx.createJavaScriptNode;
      if (typeof Processor === "function") {
        let proc;
        try {
          proc = Processor.call(ctx, 2048, 1, 1);
        } catch {
          proc = null;
        }
        if (proc) {
          const mute = gn(ctx, 0);
          proc.onaudioprocess = (ev) => {
            if (done) return;
            const inp = ev.inputBuffer.getChannelData(0);
            const n = Math.min(inp.length, need - wrote);
            if (n > 0) {
              data.set(inp.subarray(0, n), wrote);
              wrote += n;
            }
            if (wrote >= need) fromData();
          };
          tap.connect(proc);
          proc.connect(mute);
          mute.connect(ctx.destination);
          nodes.push(proc, mute);
          setTimeout(() => {
            if (done) return;
            if (wrote > need * 0.4) fromData();
            else finish(makeSineLoop(ctx, sec));
          }, sec * 1000 + 280);
          return;
        }
      }

      if (typeof MediaRecorder !== "undefined") {
        try {
          const dest = ctx.createMediaStreamDestination();
          tap.connect(dest);
          nodes.push(dest);
          const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
            ? "audio/webm;codecs=opus"
            : "audio/webm";
          const mr = new MediaRecorder(dest.stream, { mimeType: mime });
          const chunks = [];
          mr.ondataavailable = (e) => {
            if (e.data && e.data.size) chunks.push(e.data);
          };
          mr.onstop = async () => {
            if (done) return;
            try {
              const blob = new Blob(chunks, { type: mr.mimeType || mime });
              const ab = await blob.arrayBuffer();
              const buf = await ctx.decodeAudioData(ab.slice(0));
              finish(buf);
            } catch {
              finish(makeSineLoop(ctx, sec));
            }
          };
          mr.start();
          setTimeout(() => {
            try {
              mr.stop();
            } catch {
              finish(makeSineLoop(ctx, sec));
            }
          }, sec * 1000);
          return;
        } catch {
          /* fall through */
        }
      }

      finish(makeSineLoop(ctx, sec));
    });
  }

  async function decodeChoir(id) {
    const ctx = ctxOf();
    if (!ctx || typeof fetch !== "function") return null;
    try {
      const res = await fetch(`assets/voice/${id}.mp3`);
      if (!res.ok) return null;
      const arr = await res.arrayBuffer();
      return await ctx.decodeAudioData(arr.slice(0));
    } catch {
      return null;
    }
  }

  async function loadChoir() {
    if (choirReady) return;
    choirReady = true;
    const mid = await decodeChoir(CHOIR_IDS[1]);
    if (mid && !pads[15].buffer) {
      pads[15].buffer = mid;
      pads[15].color = "#f4d35e";
      emit();
    }
  }

  function stopHums() {
    for (const h of hums) {
      try {
        h.src.stop();
      } catch {
        /* already */
      }
      try {
        h.g.disconnect();
      } catch {
        /* already */
      }
    }
    hums.length = 0;
  }

  async function startHums() {
    if (hums.length || humBusy) return;
    humBusy = true;
    try {
      const ctx = ctxOf();
      if (!ctx || !bus) return;
      const ids = [CHOIR_IDS[0], CHOIR_IDS[2]];
      for (const id of ids) {
        const buf = await decodeChoir(id);
        if (!buf || !inCave) continue;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.loop = true;
        const g = gn(ctx, HUM_GAIN);
        src.connect(g).connect(bus);
        src.start();
        hums.push({ src, g });
      }
    } finally {
      humBusy = false;
    }
  }

  function selectPad(i) {
    if (i < 0 || i >= PAD_N) return;
    selected = i;
    emit();
  }

  function togglePad(i) {
    if (i < 0 || i >= PAD_N) return;
    selected = i;
    const p = pads[i];
    if (!p.buffer) {
      emit();
      return;
    }
    p.playing = !p.playing;
    if (p.playing && inCave) startSrc(i);
    else {
      p.playing = p.playing && inCave;
      stopSrc(i);
    }
    emit();
  }

  function stopAll(keepFlags) {
    for (let i = 0; i < PAD_N; i++) {
      stopSrc(i);
      if (!keepFlags) pads[i].playing = false;
      pads[i].armed = false;
    }
    emit();
  }

  async function record() {
    if (recording) return false;
    const ctx = ctxOf();
    if (!ctx || !recTap) return false;
    if (ctx.state === "suspended") await ctx.resume();
    const slot = pickRecPad();
    recTarget = slot;
    selected = slot;
    recording = true;
    for (const p of pads) p.armed = false;
    pads[slot].armed = true;
    pads[slot].playing = false;
    stopSrc(slot);
    emit();

    const engine = opts.getEngine?.() || null;
    const piano = opts.getPiano?.() || null;
    const cleanups = armSource(ctx, recTap, engine, piano);
    const monitor = gn(ctx, 0.22);
    recTap.connect(monitor);
    monitor.connect(ctx.destination);

    let buf = null;
    try {
      buf = await captureSeconds(ctx, recTap, REC_SEC);
    } finally {
      for (const fn of cleanups) {
        try {
          fn();
        } catch {
          /* already */
        }
      }
      try {
        recTap.disconnect(monitor);
      } catch {
        /* already */
      }
      try {
        monitor.disconnect();
      } catch {
        /* already */
      }
    }

    const keep = recording && recTarget === slot;
    recording = false;
    recTarget = -1;
    pads[slot].armed = false;
    if (keep && buf) {
      pads[slot].buffer = buf;
      emit();
    } else emit();
    return !!(keep && buf);
  }

  function clear() {
    recording = false;
    recTarget = -1;
    for (let i = 0; i < PAD_N; i++) {
      stopSrc(i);
      pads[i].armed = false;
      pads[i].playing = false;
      pads[i].buffer = null;
    }
    choirReady = false;
    if (inCave) loadChoir();
    emit();
  }

  function stop() {
    recording = false;
    recTarget = -1;
    stopAll(false);
  }

  async function save() {
    const clips = pads.filter((p) => p.playing && p.buffer);
    const pool = clips.length ? clips : pads.filter((p) => p.buffer);
    const sr = 44100;
    const clipDur = pool[0]?.buffer?.duration || REC_SEC;
    const loops = Math.max(1, Math.ceil(SAVE_MIN / clipDur));
    const duration = Math.min(SAVE_MAX, Math.max(SAVE_MIN, clipDur * loops));
    const OAC =
      (typeof window !== "undefined" && (window.OfflineAudioContext || window.webkitOfflineAudioContext)) ||
      (typeof OfflineAudioContext !== "undefined" ? OfflineAudioContext : null);
    if (!OAC) {
      const fake = {
        sampleRate: sr,
        createBuffer(ch, n, r) {
          const chans = Array.from({ length: ch }, () => new Float32Array(n));
          return {
            numberOfChannels: ch,
            length: n,
            sampleRate: r,
            getChannelData: (c) => chans[c],
          };
        },
      };
      return triggerDownload(encodeWavPcm16(makeSineLoop(fake, duration)), SAVE_FILE, "audio/wav");
    }
    const length = Math.max(1, Math.ceil(duration * sr));
    const oac = new OAC(1, length, sr);
    const master = oac.createGain();
    const n = Math.max(1, pool.length);
    master.gain.value = 0.7 / Math.sqrt(n);
    master.connect(oac.destination);
    if (!pool.length) {
      const src = oac.createBufferSource();
      src.buffer = makeSineLoop(oac, duration);
      src.loop = true;
      src.connect(master);
      src.start(0);
    } else {
      for (const p of pool) {
        const copied = copyToOffline(oac, p.buffer);
        if (!copied) continue;
        const src = oac.createBufferSource();
        src.buffer = copied;
        src.loop = true;
        src.loopStart = 0;
        src.loopEnd = copied.duration;
        src.connect(master);
        src.start(0);
      }
    }
    const rendered = await new Promise((resolve, reject) => {
      let done = false;
      const finish = (b) => {
        if (done || !b) return;
        done = true;
        resolve(b);
      };
      oac.oncomplete = (ev) => finish(ev.renderedBuffer);
      let p;
      try {
        p = oac.startRendering();
      } catch (err) {
        reject(err);
        return;
      }
      if (p && typeof p.then === "function") p.then(finish, reject);
    });
    return triggerDownload(encodeWavPcm16(rendered), SAVE_FILE, "audio/wav");
  }

  function setInCave(v) {
    const next = !!v;
    if (next === inCave) {
      if (next) loadChoir();
      return;
    }
    inCave = next;
    if (inCave) {
      loadChoir();
      startHums();
      for (let i = 0; i < PAD_N; i++) if (pads[i].playing && pads[i].buffer) startSrc(i);
    } else {
      recording = false;
      recTarget = -1;
      for (let i = 0; i < PAD_N; i++) {
        stopSrc(i);
        pads[i].armed = false;
      }
      stopHums();
    }
    emit();
  }

  function tick() {
    if (inCave && !hums.length) startHums();
  }

  return {
    pads,
    get selected() {
      return selected;
    },
    get recording() {
      return recording;
    },
    get recTarget() {
      return recTarget;
    },
    get inCave() {
      return inCave;
    },
    onChange,
    selectPad,
    togglePad,
    record,
    stop,
    clear,
    save,
    setInCave,
    tick,
  };
}
