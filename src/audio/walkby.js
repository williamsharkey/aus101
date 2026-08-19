/**
 * Walk-by VO: only the nearest 1–2 NPCs, steep distance fade.
 */

const NEAR = {
  ken: 4.2,
  babe: 4.2,
  goth: 3.8,
  sigma_07: 4.0,
  kid: 3.6,
  gull: 4.8,
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
  ken: 11000,
  babe: 11000,
  goth: 13000,
  sigma_07: 14000,
  kid: 14000,
  gull: 9000,
};

const ADULT_TROPES = new Set(["pleasure", "flirt", "gossip", "incel", "iamverysmart", "babe", "ken"]);
const MAX_VOICES = 2;
const REF_M = 1.15;
const POW = 2.8;

function dist2(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}

function falloff(d) {
  return 1 / (1 + Math.pow(d / REF_M, POW));
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

export function createWalkbyDirector(voice, cast) {
  const last = new Map();
  const active = [];
  let lastId = "";
  const pool = new Map();

  const index = () => {
    pool.clear();
    const lines = voice.manifest?.lines || [];
    for (const [kind, tags] of Object.entries(TAGS)) {
      pool.set(
        kind,
        lines.filter((l) => {
          const t = l.tags || [];
          if (kind === "kid" && t.some((x) => ADULT_TROPES.has(x))) return false;
          if (kind === "gull" && t.some((x) => ADULT_TROPES.has(x))) return false;
          if (l.ageBand === "child" && kind !== "kid") return false;
          return tags.some((tag) => t.includes(tag) || (l.id && l.id.includes(tag)));
        })
      );
    }
  };

  const prune = (now) => {
    for (let i = active.length - 1; i >= 0; i--) {
      if (now >= active[i].until) {
        active[i].handle?.stop?.();
        active.splice(i, 1);
      }
    }
  };

  const ranked = (playerPos) => {
    const rows = [];
    for (const npc of cast) {
      const r = NEAR[npc.kind];
      if (!r) continue;
      const d = Math.sqrt(dist2(playerPos, npc.mesh.position));
      if (d > r) continue;
      rows.push({ npc, d, g: falloff(d) });
    }
    rows.sort((a, b) => a.d - b.d);
    return rows;
  };

  return {
    tick(now, playerPos) {
      if (!voice.manifest) return;
      if (!pool.size) index();
      prune(now);

      const near = ranked(playerPos);
      const keep = new Set(near.slice(0, MAX_VOICES).map((r) => r.npc.mesh));

      for (let i = active.length - 1; i >= 0; i--) {
        const a = active[i];
        const row = near.find((r) => r.npc.mesh === a.npc.mesh);
        if (!row || !keep.has(a.npc.mesh) || row.g < 0.04) {
          a.handle?.fadeOut?.(0.08);
          active.splice(i, 1);
          continue;
        }
        a.handle?.setGain?.(row.g * 1.05);
      }

      if (active.length >= MAX_VOICES) return;
      if (!near.length) return;

      const childNear = cast.some(
        (c) => c.ageBand === "child" && dist2(playerPos, c.mesh.position) < 5 * 5
      );

      for (const row of near.slice(0, MAX_VOICES)) {
        if (active.length >= MAX_VOICES) break;
        if (active.some((a) => a.npc.mesh === row.npc.mesh)) continue;
        if (row.g < 0.12) continue;
        const cd = CD[row.npc.kind] || 12000;
        if (now - (last.get(row.npc.mesh) || 0) < cd) continue;
        if (childNear && row.npc.ageBand === "adult") continue;
        const lines = pool.get(row.npc.kind) || [];
        if (!lines.length) continue;
        let line = pick(lines);
        if (lines.length > 1 && line.id === lastId) line = pick(lines);
        last.set(row.npc.mesh, now);
        lastId = line.id;
        const dur = Math.max(1400, (line.text?.length || 20) * 55);
        const handle = voice.play(line.id, { gain: row.g * 1.05 });
        active.push({ npc: row.npc, until: now + dur, handle });
      }
    },
  };
}
