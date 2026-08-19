/**
 * One conversation at a time. Short interjections (oi / watch out) may overlap.
 * Distance fade still applies; only the nearest speaker starts a new talk.
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
const REF_M = 1.15;
const POW = 2.8;
const INTERJECT_RE = /^(oi+|oy|hey|watch out|watch it|look out|heads up|oi copper)[\s!.?,]*$/i;

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

function isInterjection(line) {
  if ((line.tags || []).includes("interject")) return true;
  return INTERJECT_RE.test((line.text || "").trim());
}

function lineMs(line) {
  if (isInterjection(line)) return 900;
  return Math.max(1600, (line.text?.length || 20) * 70);
}

export function createWalkbyDirector(voice, cast) {
  const last = new Map();
  const lastInterject = new Map();
  let talkingUntil = 0;
  let talkingHandle = null;
  let lastId = "";
  let interjectUntil = 0;
  const pool = new Map();
  const interjects = [];

  const index = () => {
    pool.clear();
    interjects.length = 0;
    const lines = voice.manifest?.lines || [];
    for (const L of lines) {
      if (isInterjection(L)) interjects.push(L);
    }
    for (const [kind, tags] of Object.entries(TAGS)) {
      pool.set(
        kind,
        lines.filter((l) => {
          if (isInterjection(l)) return false;
          const t = l.tags || [];
          if (kind === "kid" && t.some((x) => ADULT_TROPES.has(x))) return false;
          if (kind === "gull" && t.some((x) => ADULT_TROPES.has(x))) return false;
          if (l.ageBand === "child" && kind !== "kid") return false;
          return tags.some((tag) => t.includes(tag) || (l.id && l.id.includes(tag)));
        })
      );
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
    isTalking(now) {
      return now < talkingUntil;
    },
    tick(now, playerPos) {
      if (!voice.manifest) return;
      if (!pool.size) index();

      const near = ranked(playerPos);
      if (talkingHandle && now < talkingUntil && near[0]) {
        talkingHandle.setGain?.(near[0].g * 1.05);
      }
      if (now >= talkingUntil) talkingHandle = null;
      if (!near.length) return;

      const closest = near[0];
      if (closest.g < 0.12) return;

      const childNear = cast.some(
        (c) => c.ageBand === "child" && dist2(playerPos, c.mesh.position) < 5 * 5
      );

      const busy = now < talkingUntil;

      // Interjection only while someone else is mid-sentence
      if (busy) {
        if (now < interjectUntil) return;
        if (now - (lastInterject.get(closest.npc.mesh) || 0) < 6000) return;
        if (!interjects.length) return;
        const line = pick(interjects);
        lastInterject.set(closest.npc.mesh, now);
        interjectUntil = now + lineMs(line);
        voice.play(line.id, { gain: Math.min(1, closest.g * 1.2) });
        return;
      }

      const cd = CD[closest.npc.kind] || 12000;
      if (now - (last.get(closest.npc.mesh) || 0) < cd) return;
      if (childNear && closest.npc.ageBand === "adult") return;
      const lines = pool.get(closest.npc.kind) || [];
      if (!lines.length) return;
      let line = pick(lines);
      if (lines.length > 1 && line.id === lastId) line = pick(lines);
      last.set(closest.npc.mesh, now);
      lastId = line.id;
      const dur = lineMs(line);
      talkingUntil = now + dur + 250;
      talkingHandle = voice.play(line.id, { gain: closest.g * 1.05 });
    },
  };
}
