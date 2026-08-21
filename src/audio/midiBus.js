/**
 * Live MIDI bus for play-along. Beds emit strikes; no files.
 * Use the shared `midiBus` so emitters and the player share one stream.
 *
 * ev = { t, midi, vel, src: 'piano'|'guitar'|'carpenter'|'tape'|'radio', dur }
 * program change: { type: 'program', id, src: 'radio' }
 */

const CAP = 48;

export function createMidiBus() {
  const listeners = new Set();
  const hist = [];
  let last = null;

  function now() {
    return typeof performance !== "undefined" ? performance.now() : 0;
  }

  function emit(ev = {}) {
    const out = {
      t: ev.t != null ? ev.t : now(),
      midi: ev.midi,
      vel: ev.vel == null ? 0.7 : ev.vel,
      src: ev.src || "radio",
      dur: ev.dur == null ? 0.2 : ev.dur,
    };
    if (ev.type) out.type = ev.type;
    if (ev.id != null) out.id = ev.id;
    last = out;
    hist.push(out);
    if (hist.length > CAP) hist.splice(0, hist.length - CAP);
    for (const fn of listeners) {
      try {
        fn(out);
      } catch {
        /* listener */
      }
    }
    return out;
  }

  function on(fn) {
    if (typeof fn === "function") listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function off(fn) {
    listeners.delete(fn);
  }

  function recent(ms = 800) {
    const cut = now() - (ms == null || ms < 0 ? 0 : ms);
    let i = 0;
    while (i < hist.length && hist[i].t < cut) i++;
    if (i) hist.splice(0, i);
    return hist.filter((e) => e.t >= cut);
  }

  return {
    emit,
    on,
    off,
    recent,
    get last() {
      return last;
    },
  };
}

export const midiBus = createMidiBus();
