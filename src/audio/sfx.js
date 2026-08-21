/**
 * Foley bank — lotion squeeze / slap / lather / spread.
 * Files live in assets/sfx/foley/. Decode-on-demand, no runtime network beyond same-origin.
 */

const FOL = "assets/sfx/foley";

export const LOTION = {
  squeeze: [`${FOL}/lotion_squeeze.mp3`, `${FOL}/lotion_squeeze_02.mp3`],
  cap: [`${FOL}/lotion_cap.mp3`],
  slap: [`${FOL}/lotion_slap.mp3`, `${FOL}/lotion_slap_02.mp3`],
  lather: [`${FOL}/lotion_lather.mp3`, `${FOL}/lotion_lather_02.mp3`],
  spread: [`${FOL}/lotion_spread.mp3`, `${FOL}/lotion_spread_02.mp3`],
  wet: [`${FOL}/lotion_wet.mp3`],
};

export class SfxBank {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.cache = new Map();
    this._i = 0;
    this._whoopAt = 0;
    this._chatAt = 0;
  }

  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  async decode(url) {
    if (this.cache.has(url)) return this.cache.get(url);
    if (this._decP && this._decP.has(url)) return this._decP.get(url);
    if (!this._decP) this._decP = new Map();
    const work = (async () => {
      const res = await fetch(url);
      const arr = await res.arrayBuffer();
      await new Promise((r) => requestAnimationFrame(() => r()));
      const buf = await this.ctx.decodeAudioData(arr.slice(0));
      this.cache.set(url, buf);
      return buf;
    })();
    this._decP.set(url, work);
    try {
      return await work;
    } finally {
      this._decP.delete(url);
    }
  }

  pick(urls) {
    this._i = (this._i + 1) % 997;
    return urls[this._i % urls.length];
  }

  async play(urls, { gain = 1, rate = 1, when = 0 } = {}) {
    await this.unlock();
    const url = Array.isArray(urls) ? this.pick(urls) : urls;
    const buf = await this.decode(url);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = this.ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(this.master);
    src.start(this.ctx.currentTime + when);
    return src;
  }

  /** Space: squeeze emulsion. Slightly pitch-up so it reads as a tube, not a crushed bottle. */
  squeeze() {
    return this.play(LOTION.squeeze, { gain: 0.35, rate: 0.84 });
  }

  /** First wet palm-to-skin contact. */
  slap() {
    return this.play(LOTION.slap, { gain: 0.9, rate: 0.95 + Math.random() * 0.12 });
  }

  /** Thick lather between hands / first smear. */
  lather() {
    return this.play(LOTION.lather, { gain: 0.75, rate: 0.9 + Math.random() * 0.2 });
  }

  /** Spreading film along a stroke. */
  spread() {
    return this.play(LOTION.spread, { gain: 0.65, rate: 0.85 + Math.random() * 0.3 });
  }

  wet() {
    return this.play(LOTION.wet, { gain: 0.35, rate: 1.1 });
  }

  async _beep({ freq = 880, dur = 0.12, type = "sawtooth", gain = 0.12, slide = 0 }) {
    await this.unlock();
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  laser() {
    this._beep({ freq: 1400, dur: 0.22, type: "sawtooth", gain: 0.16, slide: -900 });
    this._beep({ freq: 420, dur: 0.18, type: "square", gain: 0.08, slide: -200 });
  }

  async _noiseBurst({ dur = 0.1, gain = 0.04, freq = 800, type = "bandpass", Q = 2.4, rate = 1 } = {}) {
    await this.unlock();
    const t = this.ctx.currentTime;
    const n = Math.max(32, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 1.7);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const filt = this.ctx.createBiquadFilter();
    filt.type = type;
    filt.frequency.setValueAtTime(freq, t);
    filt.Q.value = Q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(Math.max(0.0001, gain), t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filt);
    filt.connect(g);
    g.connect(this.master);
    src.start(t);
  }

  async _thump() {
    await this.unlock();
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(170 + Math.random() * 50, t);
    o.frequency.exponentialRampToValueAtTime(62, t + 0.09);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 0.14);
  }

  /**
   * Handheld radio: key-up hiss, a couple of mid formants like clipped talk,
   * then squelch tail. Quiet enough to sit under spoken mantras.
   */
  radioChatter() {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - this._chatAt < 900) return;
    this._chatAt = now;
    this._noiseBurst({
      dur: 0.035,
      gain: 0.014,
      freq: 2800,
      type: "highpass",
      Q: 0.5,
    });
    const t0 = 40;
    for (let i = 0; i < 3; i++) {
      const f = 380 + Math.random() * 520;
      setTimeout(() => {
        this._beep({
          freq: f,
          dur: 0.05 + Math.random() * 0.05,
          type: "square",
          gain: 0.018,
          slide: (Math.random() - 0.5) * 180,
        });
      }, t0 + i * (55 + Math.random() * 40));
    }
    setTimeout(() => {
      this._noiseBurst({
        dur: 0.04,
        gain: 0.01,
        freq: 2400,
        type: "highpass",
        Q: 0.4,
      });
    }, 280);
  }

  /** One short whoop, ~0.1 of the old rattle. */
  copWhoop() {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - this._whoopAt < 1200) return;
    this._whoopAt = now;
    this._beep({
      freq: 620 + Math.random() * 80,
      dur: 0.11,
      type: "sine",
      gain: 0.012,
      slide: 140,
    });
  }

  /** Palm-to-face. Lotion slap mp3s, quieter, pitched; osc thump if the file misses. */
  slapFace() {
    const rate = 0.82 + Math.random() * 0.38;
    return this.play(LOTION.slap, { gain: 0.42, rate }).catch(() => this._thump());
  }

  /** Fist/kick air. One burst, never a loop. */
  fightWhoosh() {
    const air = 1500 + Math.random() * 1200;
    this._noiseBurst({
      dur: 0.06 + Math.random() * 0.05,
      gain: 0.042,
      freq: air,
      type: "highpass",
      Q: 0.55 + Math.random() * 0.4,
      rate: 1.05 + Math.random() * 0.45,
    });
  }

  /** Open-hand crack. Synth only — not the lotion slap files. */
  fightSlap() {
    this._noiseBurst({
      dur: 0.05,
      gain: 0.07,
      freq: 2100 + Math.random() * 700,
      type: "bandpass",
      Q: 3.4,
      rate: 1.2 + Math.random() * 0.35,
    });
    this._beep({
      freq: 820 + Math.random() * 180,
      dur: 0.045,
      type: "square",
      gain: 0.055,
      slide: -420,
    });
  }

  /**
   * Shove / heave / uh / oof — comic-book punches of breath, not one loop.
   * Random pick so a pack doesn't chorus the same blip.
   */
  copShove() {
    const now = typeof performance !== "undefined" ? performance.now() : 0;
    if (now && now - (this._shoveAt || 0) < 90) return;
    this._shoveAt = now;
    const k = (Math.random() * 8) | 0;
    if (k === 0) {
      this._beep({ freq: 140 + Math.random() * 40, dur: 0.09, type: "sine", gain: 0.09, slide: -50 });
    } else if (k === 1) {
      this._beep({ freq: 220 + Math.random() * 50, dur: 0.07, type: "sawtooth", gain: 0.06, slide: -90 });
      this._noiseBurst({ dur: 0.05, gain: 0.03, freq: 400, type: "lowpass", Q: 0.8 });
    } else if (k === 2) {
      this._noiseBurst({ dur: 0.08, gain: 0.045, freq: 280, type: "lowpass", Q: 1.1 });
    } else if (k === 3) {
      this._beep({ freq: 310, dur: 0.045, type: "square", gain: 0.04, slide: -40 });
      this._beep({ freq: 180, dur: 0.08, type: "sine", gain: 0.07, slide: -30 });
    } else if (k === 4) {
      this._beep({ freq: 95 + Math.random() * 20, dur: 0.12, type: "triangle", gain: 0.1, slide: 25 });
    } else if (k === 5) {
      this._noiseBurst({ dur: 0.06, gain: 0.038, freq: 900, type: "bandpass", Q: 2.2 });
    } else if (k === 6) {
      this._beep({ freq: 260, dur: 0.05, type: "sine", gain: 0.08, slide: -20 });
      this._noiseBurst({ dur: 0.04, gain: 0.025, freq: 160, type: "lowpass", Q: 0.6 });
    } else {
      this._beep({ freq: 190 + Math.random() * 80, dur: 0.06, type: "sawtooth", gain: 0.055, slide: -70 });
    }
  }

  /** T-101 zap: thin electric crack, not a fat boom. */
  copZap() {
    this._beep({ freq: 2100 + Math.random() * 400, dur: 0.045, type: "square", gain: 0.07, slide: 500 });
    this._noiseBurst({ dur: 0.04, gain: 0.04, freq: 2800, type: "highpass", Q: 0.7 });
    this._beep({ freq: 880, dur: 0.03, type: "sine", gain: 0.05, slide: -200 });
  }

  /** Ricochet off copper — metallic ping. */
  copPing() {
    this._beep({ freq: 2400 + Math.random() * 600, dur: 0.07, type: "sine", gain: 0.09, slide: -900 });
    this._beep({ freq: 3600 + Math.random() * 400, dur: 0.04, type: "triangle", gain: 0.05, slide: -400 });
    this._noiseBurst({ dur: 0.03, gain: 0.03, freq: 4200, type: "bandpass", Q: 4.5 });
  }

  /** Cop/t101 going down — short yell then thud. */
  copDie() {
    this._beep({
      freq: 420 + Math.random() * 90,
      dur: 0.22,
      type: "sawtooth",
      gain: 0.14,
      slide: -280,
    });
    this._noiseBurst({
      dur: 0.16,
      gain: 0.07,
      freq: 380,
      type: "lowpass",
      Q: 0.8,
    });
    this._beep({
      freq: 140,
      dur: 0.12,
      type: "sine",
      gain: 0.11,
      slide: -80,
    });
  }

  /** Body hit. Short sine drop + thud. */
  fightOof() {
    this._beep({
      freq: 170 + Math.random() * 50,
      dur: 0.11,
      type: "sine",
      gain: 0.13,
      slide: -110,
    });
    this._noiseBurst({
      dur: 0.07,
      gain: 0.036,
      freq: 260 + Math.random() * 80,
      type: "lowpass",
      Q: 0.7,
    });
  }

  /** Effort grunt so punches still yell before VO bakes. */
  fightYell() {
    const r = Math.random();
    if (r < 0.3) {
      this._beep({ freq: 500 + Math.random() * 90, dur: 0.11, type: "sawtooth", gain: 0.085, slide: -160 });
    } else if (r < 0.58) {
      this._beep({ freq: 330 + Math.random() * 40, dur: 0.13, type: "sine", gain: 0.1, slide: -70 });
    } else if (r < 0.8) {
      this._beep({ freq: 460 + Math.random() * 50, dur: 0.07, type: "square", gain: 0.07, slide: -50 });
    } else {
      this._beep({ freq: 390, dur: 0.055, type: "sawtooth", gain: 0.08, slide: -40 });
      setTimeout(() => {
        this._beep({ freq: 260, dur: 0.08, type: "sawtooth", gain: 0.065, slide: -45 });
      }, 65);
    }
  }
}

export { installLotionFoley } from "./lotionMix.js";
