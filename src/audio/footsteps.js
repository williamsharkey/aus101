/**
 * Walk-cycle footsteps. Prefers baked CC0 mp3s; falls back to filtered-noise synth.
 */

const FOL = "assets/sfx/foley";
const SAND = [`${FOL}/step_sand_01.mp3`, `${FOL}/step_sand_02.mp3`];
const WOOD = [`${FOL}/step_wood_01.mp3`];

/** Matches player.step rate: hs * dt * 1.9, plants at bob extrema. */
const STEP_RATE = 1.9;
const SPEED_GATE = 0.45;
const THRESH = [Math.PI / 4, (3 * Math.PI) / 4];

function asCtx(sfxOrCtx) {
  if (!sfxOrCtx) return null;
  if (sfxOrCtx.ctx) return sfxOrCtx.ctx;
  if (typeof sfxOrCtx.decodeAudioData === "function") return sfxOrCtx;
  return null;
}

function destOf(sfxOrCtx, ctx) {
  if (sfxOrCtx && sfxOrCtx.master) return sfxOrCtx.master;
  return ctx ? ctx.destination : null;
}

function synthStep(ctx, dest, onWood, rate) {
  const dur = onWood ? 0.09 : 0.12;
  const n = Math.max(32, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = buf.getChannelData(0);
  const decay = onWood ? 2.4 : 1.45;
  for (let i = 0; i < n; i++) {
    d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay);
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.playbackRate.value = rate;
  const filt = ctx.createBiquadFilter();
  filt.type = onWood ? "lowpass" : "bandpass";
  filt.frequency.value = onWood ? 380 : 640;
  filt.Q.value = onWood ? 0.65 : 1.05;
  const g = ctx.createGain();
  g.gain.value = onWood ? 0.32 : 0.26;
  src.connect(filt);
  filt.connect(g);
  g.connect(dest);
  src.start(ctx.currentTime);
}

function playBuf(ctx, dest, buf, gain, rate) {
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.playbackRate.value = rate;
  const g = ctx.createGain();
  g.gain.value = gain;
  src.connect(g);
  g.connect(dest);
  src.start(ctx.currentTime);
}

function crossed(prev, next) {
  const a = ((prev % Math.PI) + Math.PI) % Math.PI;
  const b = ((next % Math.PI) + Math.PI) % Math.PI;
  const wrap = next > prev && b < a;
  for (let i = 0; i < THRESH.length; i++) {
    const t = THRESH[i];
    if (wrap) {
      if (a < t || b >= t) return true;
    } else if (a < t && b >= t) {
      return true;
    }
  }
  return false;
}

/**
 * @param {object|AudioContext|null} sfxOrCtx  SfxBank or AudioContext
 * @returns {{ tick: (opts: {speed:number,onWood:boolean,dt:number}) => void }}
 */
export function createFootstepPlayer(sfxOrCtx) {
  const bank = sfxOrCtx && typeof sfxOrCtx.play === "function" ? sfxOrCtx : null;
  const buffers = { sand: [], wood: [] };
  let files = false;
  let loadP = null;
  let loadDone = false;
  let lastSand = -1;
  let phase = 0;

  const load = () => {
    if (loadP) return loadP;
    loadP = (async () => {
      if (bank && typeof bank.unlock === "function") {
        try {
          await bank.unlock();
        } catch {
          /* gesture may not have happened yet */
        }
      }
      const ctx = asCtx(sfxOrCtx);
      if (!ctx && !bank) {
        loadDone = true;
        return;
      }
      const decode = async (url) => {
        if (bank && typeof bank.decode === "function") return bank.decode(url);
        const res = await fetch(url);
        if (!res.ok) throw new Error(url);
        const arr = await res.arrayBuffer();
        return ctx.decodeAudioData(arr.slice(0));
      };
      try {
        buffers.sand = await Promise.all(SAND.map(decode));
        buffers.wood = await Promise.all(WOOD.map(decode));
        files = buffers.sand.length > 0;
      } catch {
        files = false;
      } finally {
        loadDone = true;
      }
    })();
    return loadP;
  };

  const fire = (onWood, speed) => {
    const rate = (0.93 + Math.random() * 0.16) * (speed > 5.4 ? 1.06 : 1);
    const ctx = asCtx(sfxOrCtx);
    const dest = destOf(sfxOrCtx, ctx);

    const urls = onWood ? WOOD : SAND;
    const gain = onWood ? 0.42 : 0.62;
    if (bank) {
      bank.play(urls, { gain, rate }).catch(() => {
        if (loadDone && ctx && dest) synthStep(ctx, dest, onWood, rate);
      });
      return;
    }

    if (ctx && dest && files) {
      const pack = onWood ? buffers.wood : buffers.sand;
      let i = Math.floor(Math.random() * pack.length);
      if (pack.length > 1 && i === lastSand && !onWood) i = (i + 1) % pack.length;
      if (!onWood) lastSand = i;
      const buf = pack[i];
      if (buf) {
        playBuf(ctx, dest, buf, onWood ? 0.42 : 0.62, rate);
        return;
      }
    }

    if (loadDone && ctx && dest) synthStep(ctx, dest, onWood, rate);
  };

  return {
    tick({ speed = 0, onWood = false, dt = 0 } = {}) {
      load();
      const hs = Math.max(0, speed);
      if (hs < SPEED_GATE) {
        phase = 0;
        return;
      }
      const prev = phase;
      phase += hs * Math.max(0, dt) * STEP_RATE;
      if (crossed(prev, phase)) fire(!!onWood, hs);
    },
  };
}
