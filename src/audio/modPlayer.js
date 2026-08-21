/**
 * ProTracker M.K. mixer. 31 samples, 4 ch, PAL Paula, ScriptProcessorNode.
 * file:// / iOS: no WASM, no worklet module URL.
 */
import { midiBus } from "./midiBus.js";

const PAL = 7093789.2;
const MASTER = 0.52;
const CH_GAIN = 0.2;
const STATIC_S = 0.07;
const BUFFER = 2048;
const MAGICS = ["M.K.", "M!K!", "FLT4", "4CHN"];

function gn(ctx, v) {
  const g = ctx.createGain();
  g.gain.value = v;
  return g;
}

function ascii(bytes, off, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    const c = bytes[off + i];
    if (!c) break;
    if (c >= 32 && c < 127) s += String.fromCharCode(c);
  }
  return s.trim();
}

function bcd(p) {
  return (p >> 4) * 10 + (p & 0x0f);
}

function periodToMidi(period) {
  if (period <= 0) return 0;
  return 48 + 12 * Math.log2(428 / period);
}

function clip(x) {
  if (x > 1.2) return 1;
  if (x < -1.2) return -1;
  return Math.tanh(x);
}

/**
 * @param {ArrayBuffer|Uint8Array} src
 */
export function parseMod(src) {
  const bytes = src instanceof ArrayBuffer ? new Uint8Array(src) : new Uint8Array(src);
  if (bytes.byteLength < 1084) throw new Error("mod: short");
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const base = bytes.byteOffset;
  const magic = ascii(bytes, 1080, 4);
  if (!MAGICS.includes(magic)) throw new Error("mod: not M.K.");
  const title = ascii(bytes, 0, 20);
  const samples = [];
  for (let i = 0; i < 31; i++) {
    const off = 20 + i * 30;
    const length = view.getUint16(off + 22) * 2;
    let finetune = view.getUint8(off + 24) & 0x0f;
    if (finetune >= 8) finetune -= 16;
    samples.push({
      name: ascii(bytes, off, 22),
      length,
      finetune,
      volume: Math.min(64, view.getUint8(off + 25)),
      repeat: view.getUint16(off + 26) * 2,
      replen: view.getUint16(off + 28) * 2,
      data: null,
    });
  }
  const songLen = bytes[950];
  if (songLen < 1 || songLen > 128) throw new Error("mod: order");
  let restart = bytes[951];
  const order = Array.from(bytes.subarray(952, 1080));
  let npat = 0;
  for (let i = 0; i < 128; i++) npat = Math.max(npat, (order[i] | 0) + 1);
  if (npat < 1) throw new Error("mod: patterns");
  const patterns = [];
  let poff = 1084;
  if (poff + npat * 1024 > bytes.length) throw new Error("mod: truncated");
  for (let p = 0; p < npat; p++) {
    const rows = [];
    for (let r = 0; r < 64; r++) {
      const chans = [];
      for (let c = 0; c < 4; c++) {
        const b0 = bytes[poff++];
        const b1 = bytes[poff++];
        const b2 = bytes[poff++];
        const b3 = bytes[poff++];
        chans.push({
          sample: (b0 & 0xf0) | (b2 >> 4),
          period: ((b0 & 0x0f) << 8) | b1,
          effect: b2 & 0x0f,
          param: b3,
        });
      }
      rows.push(chans);
    }
    patterns.push(rows);
  }
  for (const s of samples) {
    if (s.length <= 0) {
      s.data = new Int8Array(0);
      continue;
    }
    const take = Math.min(s.length, bytes.length - poff);
    if (take <= 0) {
      s.data = new Int8Array(0);
      continue;
    }
    s.data = new Int8Array(bytes.buffer, base + poff, take);
    s.length = take;
    poff += s.length;
  }
  const used = order.slice(0, songLen);
  if (restart >= songLen) restart = 0;
  return { title, samples, songLen, restart, order: used, patterns, magic };
}

function makeChan() {
  return {
    data: null,
    length: 0,
    repeat: 0,
    replen: 0,
    finetune: 0,
    pos: 0,
    step: 0,
    period: 0,
    basePeriod: 0,
    volume: 0,
    active: false,
    arp: 0,
    portaSpeed: 0,
    portaTarget: 0,
    volSlide: 0,
    fine: 0,
  };
}

/**
 * @param {AudioContext} ctx
 * @param {AudioNode} [dest]
 */
export function createModPlayer(ctx, dest) {
  const out = gn(ctx, 0);
  out.connect(dest || ctx.destination);
  const chans = [makeChan(), makeChan(), makeChan(), makeChan()];
  const cache = new Map();
  let mod = null;
  let title = "";
  let running = false;
  let mix = 1;
  let gen = 0;
  let ordI = 0;
  let row = 0;
  let tick = 0;
  let speed = 6;
  let bpm = 125;
  let acc = 0;
  let jumpOrder = -1;
  let breakRow = -1;
  let pulse = 0;
  let staticN = 0;
  let staticTot = 1;
  let rng = 1;

  function spt() {
    return (ctx.sampleRate * 2.5) / Math.max(32, bpm);
  }

  function stepFor(period, finetune) {
    if (period <= 0) return 0;
    let hz = PAL / (period * 2);
    if (finetune) hz *= 2 ** (finetune / 96);
    return hz / ctx.sampleRate;
  }

  function assignInst(ch, inst) {
    ch.data = inst.data;
    ch.length = inst.length;
    ch.repeat = inst.repeat;
    ch.replen = inst.replen;
    ch.finetune = inst.finetune;
    ch.volume = inst.volume;
  }

  function trig(ch, period, offset) {
    ch.period = period;
    ch.basePeriod = period;
    ch.portaTarget = period;
    ch.pos = offset || 0;
    ch.active = !!(ch.data && ch.length);
    ch.step = stepFor(period, ch.finetune);
    if (period) {
      midiBus.emit({
        midi: Math.round(periodToMidi(period)),
        vel: Math.max(0.2, ch.volume / 64),
        src: "tracker",
        dur: (speed * 2.5) / bpm,
      });
    }
  }

  function readRow() {
    if (!mod) return;
    const pat = mod.patterns[mod.order[ordI] | 0];
    if (!pat) return;
    const cells = pat[row];
    if (!cells) return;
    for (let i = 0; i < 4; i++) {
      const cell = cells[i];
      const ch = chans[i];
      const fx = cell.effect;
      const param = cell.param;
      const tonePorta = fx === 3 || (fx === 0x5);
      if (cell.sample) {
        const inst = mod.samples[cell.sample - 1];
        if (inst && inst.length) assignInst(ch, inst);
      }
      if (cell.period && !tonePorta) {
        ch.arp = 0;
        trig(ch, cell.period, 0);
      } else if (cell.period && tonePorta) {
        ch.portaTarget = cell.period;
      }
      ch.volSlide = 0;
      switch (fx) {
        case 0x0:
          if (param) ch.arp = param;
          break;
        case 0x1:
        case 0x2:
        case 0x3:
          if (param) ch.portaSpeed = param;
          break;
        case 0x9:
          ch.pos = param * 256;
          if (ch.pos >= ch.length) ch.pos = ch.length ? ch.length - 1 : 0;
          break;
        case 0xa:
          ch.volSlide = param;
          break;
        case 0xb:
          jumpOrder = param;
          break;
        case 0xc:
          ch.volume = Math.min(64, param);
          break;
        case 0xd:
          breakRow = Math.min(63, bcd(param));
          break;
        case 0xf:
          if (param === 0) break;
          if (param < 32) speed = param;
          else bpm = param;
          break;
        case 0xe:
          if ((param >> 4) === 0xc && (param & 0x0f) === 0) ch.volume = 0;
          ch.fine = param;
          break;
        default:
          break;
      }
    }
  }

  function slidePeriod(ch, delta) {
    ch.period = Math.max(56, Math.min(1712, ch.period + delta));
    ch.basePeriod = ch.period;
    ch.step = stepFor(ch.period, ch.finetune);
  }

  function tonePorta(ch) {
    if (!ch.portaTarget || !ch.portaSpeed) return;
    if (ch.period < ch.portaTarget) {
      ch.period = Math.min(ch.portaTarget, ch.period + ch.portaSpeed);
    } else if (ch.period > ch.portaTarget) {
      ch.period = Math.max(ch.portaTarget, ch.period - ch.portaSpeed);
    }
    ch.basePeriod = ch.period;
    ch.step = stepFor(ch.period, ch.finetune);
  }

  function volSlide(ch) {
    if (!ch.volSlide) return;
    const up = ch.volSlide >> 4;
    const down = ch.volSlide & 0x0f;
    if (up) ch.volume = Math.min(64, ch.volume + up);
    else ch.volume = Math.max(0, ch.volume - down);
  }

  function applyArp(ch, t) {
    if (!ch.arp || !ch.basePeriod) {
      if (ch.period) ch.step = stepFor(ch.period, ch.finetune);
      return;
    }
    const x = ch.arp >> 4;
    const y = ch.arp & 0x0f;
    const k = t % 3;
    const semi = k === 1 ? x : k === 2 ? y : 0;
    const p = ch.basePeriod * 2 ** (-semi / 12);
    ch.step = stepFor(p, ch.finetune);
  }

  function applyTickFx() {
    for (let i = 0; i < 4; i++) {
      const ch = chans[i];
      if (tick > 0) {
        const pat = mod?.patterns[mod.order[ordI] | 0];
        const cell = pat?.[row]?.[i];
        const fx = cell?.effect;
        const param = cell?.param ?? 0;
        if (fx === 1) slidePeriod(ch, -param);
        else if (fx === 2) slidePeriod(ch, param);
        else if (fx === 3 || fx === 5) tonePorta(ch);
        if (fx === 0xa || fx === 5 || fx === 6) volSlide(ch);
        if (fx === 0xe && (param >> 4) === 0xc && tick >= (param & 0x0f)) ch.volume = 0;
      }
      applyArp(ch, tick);
    }
  }

  function advanceRow() {
    if (jumpOrder >= 0) {
      ordI = jumpOrder;
      row = breakRow >= 0 ? breakRow : 0;
      jumpOrder = -1;
      breakRow = -1;
    } else if (breakRow >= 0) {
      ordI += 1;
      row = breakRow;
      breakRow = -1;
    } else {
      row += 1;
      if (row >= 64) {
        row = 0;
        ordI += 1;
      }
    }
    if (!mod) return;
    if (ordI >= mod.songLen) ordI = mod.restart || 0;
    if (ordI >= mod.songLen) ordI = 0;
  }

  function doTick() {
    if (!mod) return;
    if (tick === 0) {
      readRow();
      pulse = 1;
    }
    applyTickFx();
    tick += 1;
    if (tick >= speed) {
      tick = 0;
      advanceRow();
    }
  }

  function readSample(ch) {
    if (!ch.active || !ch.data || ch.length <= 0 || ch.volume <= 0) {
      if (ch.active && ch.step) ch.pos += ch.step;
      return 0;
    }
    let pos = ch.pos;
    const looping = ch.replen > 2;
    const loopEnd = looping ? ch.repeat + ch.replen : ch.length;
    if (looping) {
      if (pos >= loopEnd) {
        const span = ch.replen;
        if (span <= 0) {
          ch.active = false;
          return 0;
        }
        pos = ch.repeat + ((pos - ch.repeat) % span);
      }
    } else if (pos >= ch.length) {
      ch.active = false;
      return 0;
    }
    const i0 = pos | 0;
    if (i0 < 0 || i0 >= ch.length) {
      ch.active = false;
      return 0;
    }
    let i1 = i0 + 1;
    if (looping) {
      if (i1 >= loopEnd) i1 = ch.repeat;
    } else if (i1 >= ch.length) i1 = i0;
    const s0 = ch.data[i0];
    const s1 = ch.data[i1] ?? s0;
    const frac = pos - i0;
    ch.pos = pos + ch.step;
    return (s0 + (s1 - s0) * frac) * (1 / 128) * (ch.volume / 64) * CH_GAIN;
  }

  function crackle() {
    staticTot = Math.max(1, (ctx.sampleRate * STATIC_S) | 0);
    staticN = staticTot;
  }

  function onProcess(ev) {
    const L = ev.outputBuffer.getChannelData(0);
    const R = ev.outputBuffer.getChannelData(1);
    const n = L.length;
    if (!running && staticN <= 0) {
      L.fill(0);
      R.fill(0);
      pulse *= 0.9;
      return;
    }
    const tickLen = spt();
    for (let i = 0; i < n; i++) {
      if (running) {
        acc += 1;
        while (acc >= tickLen) {
          acc -= tickLen;
          doTick();
        }
      }
      let l = 0;
      let r = 0;
      if (running) {
        const a = readSample(chans[0]);
        const b = readSample(chans[1]);
        const c = readSample(chans[2]);
        const d = readSample(chans[3]);
        l = a + d;
        r = b + c;
      }
      if (staticN > 0) {
        rng = (rng * 1664525 + 1013904223) >>> 0;
        const ns = ((rng / 0x80000000) - 1) * 0.1 * (staticN / staticTot);
        l += ns;
        r += ns;
        staticN -= 1;
      }
      L[i] = clip(l);
      R[i] = clip(r);
    }
    pulse *= 0.86;
  }

  const makeSp = ctx.createScriptProcessor || ctx.createJavaScriptNode;
  const node = makeSp.call(ctx, BUFFER, 1, 2);
  node.onaudioprocess = onProcess;
  node.connect(out);

  async function load(src) {
    if (src instanceof ArrayBuffer) return src;
    if (ArrayBuffer.isView(src)) {
      return src.buffer.slice(src.byteOffset, src.byteOffset + src.byteLength);
    }
    if (typeof src !== "string") throw new Error("mod: src");
    if (cache.has(src)) return cache.get(src);
    const res = await fetch(src);
    if (!res.ok) throw new Error("mod: fetch " + src);
    const buf = await res.arrayBuffer();
    parseMod(buf);
    cache.set(src, buf);
    return buf;
  }

  function arm(parsed) {
    mod = parsed;
    title = parsed.title || "";
    ordI = 0;
    row = 0;
    tick = 0;
    speed = 6;
    bpm = 125;
    acc = spt();
    jumpOrder = -1;
    breakRow = -1;
    pulse = 1;
    for (let i = 0; i < 4; i++) {
      const c = chans[i];
      c.data = null;
      c.active = false;
      c.pos = 0;
      c.volume = 0;
      c.period = 0;
      c.basePeriod = 0;
      c.arp = 0;
      c.portaSpeed = 0;
      c.portaTarget = 0;
      c.volSlide = 0;
    }
  }

  return {
    output: out,
    get running() {
      return running;
    },
    get title() {
      return title;
    },
    get tickPulse() {
      return pulse;
    },
    crackle,
    async play(src) {
      if (src == null) return;
      const g = ++gen;
      const buf = await load(src);
      if (g !== gen) return;
      arm(parseMod(buf));
      crackle();
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch {
          /* gesture */
        }
      }
      if (g !== gen) return;
      running = true;
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(Math.max(0.0001, out.gain.value), t);
      out.gain.linearRampToValueAtTime(MASTER * mix, t + 0.1);
    },
    stop() {
      gen += 1;
      running = false;
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.linearRampToValueAtTime(0, t + 0.08);
      for (const ch of chans) ch.active = false;
    },
    setMix(v, s = 0.4) {
      mix = Math.max(0, Math.min(1, v));
      const t = ctx.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(out.gain.value, t);
      out.gain.linearRampToValueAtTime(running ? MASTER * mix : 0, t + Math.max(0.01, s));
    },
  };
}
