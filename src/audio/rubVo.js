/**
 * Rub VO: pick a baked line tagged rub + the lotioned kind.
 * Kids / gulls skip. Artist, t101, ken-fight share the ken pool.
 */

const ALIAS = {
  babe: "babe",
  female: "babe",
  ken: "ken",
  jock: "ken",
  artist: "ken",
  t101: "ken",
  "ken-fight": "ken",
  goth: "goth",
  sigma_07: "sigma_07",
  incel: "sigma_07",
};

const KIND_TAGS = new Set(["babe", "ken", "goth", "sigma_07", "incel", "kid", "jock"]);

function npcKind(npc) {
  return npc?.kind || npc?.mesh?.userData?.kind || "";
}

function npcAge(npc) {
  return npc?.ageBand || npc?.mesh?.userData?.ageBand || "";
}

function poolKind(npc) {
  const age = npcAge(npc);
  const raw = npcKind(npc);
  if (age === "child" || raw === "kid" || age === "gull" || raw === "gull") return null;
  return ALIAS[raw] || null;
}

/** Lines tagged rub + kind. Legacy rub_pleasure_* (no kind tag) stay babe-only. */
export function pickRubLine(manifest, npc) {
  const kind = poolKind(npc);
  if (!kind || !manifest) return null;
  const rows = [];
  for (const l of manifest.lines || []) {
    const t = l.tags || [];
    if (l.ageBand === "child") continue;
    if (l.category !== "rub" && !t.includes("rub")) continue;
    if (t.includes(kind)) {
      rows.push(l);
      continue;
    }
    if (kind !== "babe") continue;
    if (!t.includes("pleasure")) continue;
    if (t.some((x) => KIND_TAGS.has(x))) continue;
    rows.push(l);
  }
  if (!rows.length) return null;
  return rows[(Math.random() * rows.length) | 0];
}

/** Play one matching line. Busy or no pool → skip. */
export function playRubVo(voice, npc) {
  if (!voice || voice.busy) return null;
  const line = pickRubLine(voice.manifest, npc);
  if (!line) return null;
  const pos = npc.mesh?.position || npc.pos;
  return voice.play(line.id, { gain: 1.05, pos });
}
