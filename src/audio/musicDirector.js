/**
 * Exclusive music mixer. Carpenter is the default bed.
 * Near a local source (piano ~14m / DJ / boombox / guitar), fade Carpenter down
 * and that source up. Never two beds at full volume.
 */

const FADE = 0.65;

function distXZ(a, b) {
  return Math.hypot(a.x - b.x, a.z - b.z);
}

export function createMusicDirector({ carpenter, tracker, shades, locals = [] } = {}) {
  let lastKey = null;

  function beds() {
    const set = new Set();
    if (carpenter) set.add(carpenter);
    if (tracker) set.add(tracker);
    if (shades) set.add(shades);
    for (const l of locals) if (l?.bed) set.add(l.bed);
    return set;
  }

  function radiusOf(l) {
    if (l.id === "piano" || (shades && l.bed === shades)) return Math.max(l.radius ?? 0, 14);
    if (l.radius != null) return l.radius;
    return 0;
  }

  function apply(key) {
    if (key === lastKey) return;
    lastKey = key;
    const all = beds();
    if (key === "mute") {
      for (const b of all) b.setMix?.(0, FADE);
      return;
    }
    let winner = tracker?.running ? tracker : carpenter;
    if (key === "radio") winner = tracker || winner;
    else if (key === "carpenter") winner = carpenter || winner;
    else if (key !== "mute") {
      const hit = locals.find((l) => l.id === key);
      winner = hit?.bed || winner;
    }
    for (const b of all) b.setMix?.(b === winner ? 1 : 0, FADE);
  }

  return {
    tick(playerPos, audioOn) {
      if (!audioOn || !playerPos) {
        apply("mute");
        return;
      }
      let best = null, bestD = Infinity;
      for (const l of locals) {
        if (!l?.getPos || !l.bed) continue;
        const p = l.getPos();
        if (!p) continue;
        const d = distXZ(playerPos, p);
        if (d < radiusOf(l) && d < bestD) {
          bestD = d;
          best = l;
        }
      }
      apply(best ? best.id : tracker?.running ? "radio" : "carpenter");
    },
  };
}
