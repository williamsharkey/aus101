/**
 * Lightweight VO loader against assets/voice/manifest.json.
 * Placeholders (say) and future TikTok bakes share the same path.
 */

export class VoiceBank {
  constructor() {
    this.manifest = null;
    this.byId = new Map();
    this.ctx = null;
    this.lru = new Map(); // id -> AudioBuffer
    this.maxLru = 16;
    this.gain = null;
  }

  async loadManifest() {
    const res = await fetch("assets/voice/manifest.json");
    this.manifest = await res.json();
    this.byId.clear();
    for (const line of this.manifest.lines || []) {
      this.byId.set(line.id, line);
    }
    return this.manifest;
  }

  async unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.gain = this.ctx.createGain();
      this.gain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  async decode(id) {
    if (this.lru.has(id)) {
      const buf = this.lru.get(id);
      this.lru.delete(id);
      this.lru.set(id, buf);
      return buf;
    }
    const meta = this.byId.get(id);
    if (!meta) throw new Error(`Unknown VO id: ${id}`);
    const res = await fetch(`assets/voice/${meta.file}`);
    const arr = await res.arrayBuffer();
    const buf = await this.ctx.decodeAudioData(arr.slice(0));
    this.lru.set(id, buf);
    while (this.lru.size > this.maxLru) {
      const oldest = this.lru.keys().next().value;
      this.lru.delete(oldest);
    }
    return buf;
  }

  play(id, { when = 0, gain = 1 } = {}) {
    const handle = {
      src: null,
      g: null,
      setGain(v) {
        if (this.g && this.g.context) this.g.gain.setTargetAtTime(v, this.g.context.currentTime, 0.04);
      },
      fadeOut(s = 0.08) {
        if (!this.g) return;
        const t = this.g.context.currentTime;
        this.g.gain.cancelScheduledValues(t);
        this.g.gain.setValueAtTime(this.g.gain.value, t);
        this.g.gain.linearRampToValueAtTime(0.0001, t + s);
        try {
          this.src?.stop(t + s + 0.02);
        } catch {
          /* already stopped */
        }
      },
      stop() {
        try {
          this.src?.stop();
        } catch {
          /* already stopped */
        }
      },
    };
    this.unlock()
      .then(() => this.decode(id))
      .then((buf) => {
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const g = this.ctx.createGain();
        g.gain.value = gain;
        src.connect(g);
        g.connect(this.gain);
        src.start(this.ctx.currentTime + when);
        handle.src = src;
        handle.g = g;
      })
      .catch(() => {});
    return handle;
  }
}
