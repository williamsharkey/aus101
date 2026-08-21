/**
 * VO bank with spatial mix: at most two near speakers, equal-power pan +
 * distance lowpass. Decode is queued across frames so walking into a new
 * pocket of lines does not hitch the renderer.
 */

const MAX_LIVE = 2;
const MAX_LRU = 48;
const START_GAP = 900;
const REF_D = 1.6;
const MAX_D = 18;

function yieldFrame() {
  return new Promise((resolve) => {
    const ric = typeof requestIdleCallback === "function" ? requestIdleCallback : null;
    if (ric) ric(() => resolve(), { timeout: 48 });
    else requestAnimationFrame(() => resolve());
  });
}

function distTo(listener, pos) {
  if (!pos || !listener) return 4;
  const dx = (pos.x ?? 0) - listener.x;
  const dy = (pos.y ?? 1.5) - (listener.y ?? 1.6);
  const dz = (pos.z ?? 0) - listener.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export class VoiceBank {
  constructor() {
    this.manifest = null;
    this.byId = new Map();
    this.ctx = null;
    this.lru = new Map();
    this.gain = null;
    this.busy = false;
    this.gen = 0;
    this.listener = { x: 0, y: 1.6, z: 0, yaw: 0 };
    this.live = [];
    this._queue = [];
    this._pumping = false;
    this._inflight = new Map();
    this._lastStart = 0;
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
      this.gain.gain.value = 0.72;
      this.gain.connect(this.ctx.destination);
      try {
        const L = this.ctx.listener;
        if (L.positionX) {
          L.positionX.value = 0;
          L.positionY.value = 1.6;
          L.positionZ.value = 0;
        }
      } catch {
        /* old AudioListener */
      }
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  has(id) {
    return this.lru.has(id);
  }

  /** Decode later; never awaits on the caller’s frame. */
  warm(id) {
    if (!id || this.lru.has(id) || this._inflight.has(id)) return;
    if (this._queue.includes(id)) return;
    this._queue.push(id);
    this._pump();
  }

  async _pump() {
    if (this._pumping) return;
    this._pumping = true;
    try {
      await this.unlock();
      while (this._queue.length) {
        const id = this._queue.shift();
        if (this.lru.has(id)) continue;
        await yieldFrame();
        try {
          await this.decode(id);
        } catch {
          /* missing / decode fail */
        }
        await yieldFrame();
      }
    } finally {
      this._pumping = false;
    }
  }

  async decode(id) {
    if (this.lru.has(id)) {
      const buf = this.lru.get(id);
      this.lru.delete(id);
      this.lru.set(id, buf);
      return buf;
    }
    if (this._inflight.has(id)) return this._inflight.get(id);
    const work = (async () => {
      const meta = this.byId.get(id);
      if (!meta) throw new Error(`Unknown VO id: ${id}`);
      await this.unlock();
      const res = await fetch(`assets/voice/${meta.file}`);
      const arr = await res.arrayBuffer();
      await yieldFrame();
      const buf = await this.ctx.decodeAudioData(arr.slice(0));
      this.lru.set(id, buf);
      while (this.lru.size > MAX_LRU) {
        const oldest = this.lru.keys().next().value;
        this.lru.delete(oldest);
      }
      return buf;
    })();
    this._inflight.set(id, work);
    try {
      return await work;
    } finally {
      this._inflight.delete(id);
    }
  }

  async preload(ids) {
    await this.unlock();
    for (const id of ids) this.warm(id);
  }

  _pruneLive() {
    const now = performance.now();
    this.live = this.live.filter((s) => {
      if (s.ended || (s.until && now > s.until + 80)) return false;
      return true;
    });
    this.busy = this.live.length >= MAX_LIVE;
  }

  _slotFor(pos) {
    this._pruneLive();
    const d = distTo(this.listener, pos);
    if (this.live.length < MAX_LIVE) {
      if (performance.now() - this._lastStart < START_GAP && this.live.length >= 1) {
        const closest = this.live.reduce((a, b) => (a.d <= b.d ? a : b));
        if (d > closest.d * 0.85) return null;
      }
      return { steal: null, d };
    }
    let far = this.live[0];
    for (const s of this.live) if (s.d > far.d) far = s;
    if (d >= far.d * 0.92) return null;
    return { steal: far, d };
  }

  _graph(buf, pos, gain) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    g.gain.value = Math.max(0.0001, gain);
    const filt = ctx.createBiquadFilter();
    filt.type = "lowpass";
    const d = distTo(this.listener, pos);
    filt.frequency.value = Math.max(700, 11000 / (1 + (d * d) / 22));
    filt.Q.value = 0.55;
    const pan = ctx.createPanner();
    pan.panningModel = "equalpower";
    pan.distanceModel = "inverse";
    pan.refDistance = REF_D;
    pan.maxDistance = MAX_D;
    pan.rolloffFactor = 1.15;
    pan.coneInnerAngle = 360;
    const x = pos?.x ?? this.listener.x;
    const y = pos?.y ?? 1.5;
    const z = pos?.z ?? this.listener.z;
    if (pan.positionX) {
      pan.positionX.value = x;
      pan.positionY.value = y;
      pan.positionZ.value = z;
    } else {
      pan.setPosition(x, y, z);
    }
    src.connect(g);
    g.connect(filt);
    filt.connect(pan);
    pan.connect(this.gain);
    return { src, g, filt, pan, d };
  }

  /**
   * @param {string} id
   * @param {{ when?: number, gain?: number, pos?: {x:number,y?:number,z:number} }} [opts]
   */
  play(id, { when = 0, gain = 1, pos = null } = {}) {
    const handle = {
      src: null,
      g: null,
      duration: 0,
      started: false,
      setGain(v) {
        if (this.g && this.g.context) this.g.gain.setTargetAtTime(v, this.g.context.currentTime, 0.05);
      },
      fadeOut(s = 0.12) {
        if (!this.g) return;
        const t = this.g.context.currentTime;
        this.g.gain.cancelScheduledValues(t);
        this.g.gain.setValueAtTime(Math.max(this.g.gain.value, 0.0001), t);
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

    if (!this.lru.has(id)) {
      this.warm(id);
      handle.ready = Promise.resolve(false);
      return handle;
    }

    const slot = this._slotFor(pos);
    if (!slot) {
      handle.ready = Promise.resolve(false);
      return handle;
    }

    handle.ready = this.unlock()
      .then(() => this.decode(id))
      .then((buf) => {
        const again = this._slotFor(pos);
        if (!again) return false;
        if (again.steal) {
          slot.steal = again.steal;
        }
        if (slot.steal) {
          try {
            slot.steal.handle?.fadeOut?.(0.1);
          } catch {
            /* */
          }
          slot.steal.ended = true;
          this.live = this.live.filter((s) => s !== slot.steal);
        }
        const nodes = this._graph(buf, pos, gain);
        nodes.src.start(this.ctx.currentTime + when);
        handle.src = nodes.src;
        handle.g = nodes.g;
        handle.duration = buf.duration * 1000;
        handle.started = true;
        const rec = {
          handle,
          pos: pos ? { x: pos.x, y: pos.y ?? 1.5, z: pos.z } : null,
          d: nodes.d,
          pan: nodes.pan,
          filt: nodes.filt,
          ended: false,
          until: performance.now() + handle.duration,
        };
        this.live.push(rec);
        this._lastStart = performance.now();
        this.busy = this.live.length >= MAX_LIVE;
        nodes.src.onended = () => {
          rec.ended = true;
          this._pruneLive();
          if (handle.onended) handle.onended();
        };
        return true;
      })
      .catch(() => false);

    return handle;
  }

  tick(listenerPos, yaw = 0) {
    if (!listenerPos) return;
    this.listener.x = listenerPos.x;
    this.listener.y = (listenerPos.y || 0) + 1.6;
    this.listener.z = listenerPos.z;
    this.listener.yaw = yaw;
    const ctx = this.ctx;
    if (!ctx) return;
    const L = ctx.listener;
    const x = this.listener.x;
    const y = this.listener.y;
    const z = this.listener.z;
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    try {
      if (L.positionX) {
        L.positionX.setTargetAtTime(x, ctx.currentTime, 0.02);
        L.positionY.setTargetAtTime(y, ctx.currentTime, 0.02);
        L.positionZ.setTargetAtTime(z, ctx.currentTime, 0.02);
        L.forwardX.setTargetAtTime(fx, ctx.currentTime, 0.02);
        L.forwardY.setTargetAtTime(0, ctx.currentTime, 0.02);
        L.forwardZ.setTargetAtTime(fz, ctx.currentTime, 0.02);
        L.upX.setTargetAtTime(0, ctx.currentTime, 0.02);
        L.upY.setTargetAtTime(1, ctx.currentTime, 0.02);
        L.upZ.setTargetAtTime(0, ctx.currentTime, 0.02);
      } else {
        L.setPosition(x, y, z);
        L.setOrientation(fx, 0, fz, 0, 1, 0);
      }
    } catch {
      /* */
    }
    this._pruneLive();
    const ranked = this.live
      .map((s) => {
        s.d = distTo(this.listener, s.pos);
        return s;
      })
      .sort((a, b) => a.d - b.d);
    ranked.forEach((s, i) => {
      if (!s.filt || !s.handle?.g) return;
      const duck = i < MAX_LIVE ? 1 : 0.05;
      const lp = Math.max(650, 11000 / (1 + (s.d * s.d) / 22));
      const t = ctx.currentTime;
      try {
        s.filt.frequency.setTargetAtTime(lp, t, 0.08);
        s.handle.g.gain.setTargetAtTime(Math.max(0.0001, duck), t, 0.08);
        if (s.pan?.positionX && s.pos) {
          s.pan.positionX.setTargetAtTime(s.pos.x, t, 0.05);
          s.pan.positionZ.setTargetAtTime(s.pos.z, t, 0.05);
        }
      } catch {
        /* */
      }
      if (i >= MAX_LIVE) s.handle.fadeOut?.(0.2);
    });
  }
}
