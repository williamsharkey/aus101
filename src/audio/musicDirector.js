/**
 * Exclusive music mixer. Carpenter is the default bed.
 * Near a local source (piano / DJ / boombox / guitar), fade Carpenter down
 * and that source up. Never two beds at full volume.
 */

const FADE = 0.65;

function distXZ(a, b) {
  return Math.hypot(a.x - b.x, a.z - b.z);
}

export function createMusicDirector({ carpenter, shades, locals = [] } = {}) {
  let lastKey = null;

  function beds() {
    const set = new Set();
    if (carpenter) set.add(carpenter);
    if (shades) set.add(shades);
    for (const l of locals) if (l?.bed) set.add(l.bed);
    return set;
  }

  function radiusOf(l) {
    if (l.radius != null) return l.radius;
    if (shades && l.bed === shades) return 12;
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
    let winner = carpenter;
    if (key !== "carpenter") {
      const hit = locals.find((l) => l.id === key);
      winner = hit?.bed || carpenter;
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
      apply(best ? best.id : "carpenter");
    },
  };
}
