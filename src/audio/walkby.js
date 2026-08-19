/**
 * Walk-by VO: fire a tagged line when AUS101 passes an NPC.
 * Adult tropes never attach to child/gull. One VO at a time.
 */

const NEAR = {
  ken: 5.8,
  babe: 5.8,
  goth: 5.2,
  sigma_07: 5.4,
  kid: 4.6,
  gull: 6.5,
};

const TAGS = {
  ken: ["ken", "lad"],
  babe: ["babe", "flirt"],
  goth: ["goth"],
  sigma_07: ["incel", "sigma07", "iamverysmart"],
  kid: ["child"],
  gull: ["gull"],
};

const CD = {
  ken: 14000,
  babe: 14000,
  goth: 16000,
  sigma_07: 20000,
  kid: 18000,
  gull: 9000,
};

const ADULT_TROPES = new Set(["pleasure", "flirt", "gossip", "incel", "iamverysmart", "babe", "ken"]);

function dist2(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

/**
 * @param {import('./voice.js').VoiceBank} voice
 * @param {{ mesh: THREE.Object3D, kind: string, ageBand: string }[]} cast
 */
export function createWalkbyDirector(voice, cast) {
  const last = new Map();
  let busyUntil = 0;
  let lastId = "";

  const pool = new Map();
  const index = () => {
    pool.clear();
    const lines = voice.manifest?.lines || [];
    for (const [kind, tags] of Object.entries(TAGS)) {
      const hits = lines.filter((l) => {
        const t = l.tags || [];
        if (kind === "kid" && t.some((x) => ADULT_TROPES.has(x))) return false;
        if (kind === "gull" && t.some((x) => ADULT_TROPES.has(x))) return false;
        if (l.ageBand === "child" && kind !== "kid") return false;
        return tags.some((tag) => t.includes(tag) || (l.id && l.id.includes(tag)));
      });
      pool.set(kind, hits);
    }
  };

  return {
    tick(now, playerPos, playerSpeed) {
      if (!voice.manifest) return;
      if (!pool.size) index();
      if (now < busyUntil) return;

      const childNear = cast.some(
        (c) => c.ageBand === "child" && dist2(playerPos, c.mesh.position) < 6.5 * 6.5
      );

      let best = null;
      let bestD = Infinity;
      for (const npc of cast) {
        const r = NEAR[npc.kind];
        if (!r) continue;
        const d = dist2(playerPos, npc.mesh.position);
        if (d > r * r) continue;
        if (d < bestD) {
          bestD = d;
          best = npc;
        }
      }
      if (!best) return;

      const cd = CD[best.kind] || 14000;
      const prev = last.get(best.mesh) || 0;
      if (now - prev < cd) return;

      // skip adult cheese if a kid is in earshot
      if (childNear && (best.ageBand === "adult" || best.kind === "babe" || best.kind === "ken")) return;

      const lines = pool.get(best.kind) || [];
      if (!lines.length) return;
      let line = pick(lines);
      if (lines.length > 1 && line.id === lastId) line = pick(lines);

      last.set(best.mesh, now);
      lastId = line.id;
      const dur = Math.max(1800, (line.text?.length || 20) * 70);
      busyUntil = now + dur + 400;
      voice.play(line.id).catch(() => {});
    },
  };
}
