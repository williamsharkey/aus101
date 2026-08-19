#!/usr/bin/env node
/**
 * Build-time TikTok TTS baker for AUS101.
 * NEVER imported by the game bundle. sessionid from env only — never commit.
 *
 *   TIKTOK_SESSION_ID=... node tools/voice/bake.mjs
 *   TIKTOK_SESSION_ID=... node tools/voice/bake.mjs --only dj_open_01,rub_pleasure_01
 *   node tools/voice/bake.mjs --dry-run
 *   node tools/voice/bake.mjs --no-session   # try unofficial endpoint without cookie
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const LINES_PATH = path.join(__dirname, "lines.json");
const OUT_DIR = path.join(ROOT, "assets/voice");
const MANIFEST_PATH = path.join(OUT_DIR, "manifest.json");

const ENDPOINTS = [
  "https://api16-normal-v6.tiktokv.com/media/api/text/speech/invoke/",
  "https://api16-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke/",
];
const USER_AGENT =
  "com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; en_US; SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)";

const TROPE_TAGS = new Set([
  "pleasure",
  "flirt",
  "gossip",
  "incel",
  "iamverysmart",
  "babe",
  "ken",
  "crosstalk",
]);

function parseArgs(argv) {
  const opts = { dryRun: false, noSession: false, only: null, force: false, limit: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--no-session") opts.noSession = true;
    else if (a === "--force") opts.force = true;
    else if (a === "--only") opts.only = new Set(argv[++i].split(",").map((s) => s.trim()).filter(Boolean));
    else if (a === "--limit") opts.limit = Number(argv[++i]);
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: TIKTOK_SESSION_ID=... node tools/voice/bake.mjs [--only id,id] [--limit N] [--force] [--dry-run] [--no-session]`);
      process.exit(0);
    }
  }
  return opts;
}

function encodeReqText(text) {
  return text
    .replaceAll("+", "plus")
    .replaceAll(" ", "+")
    .replaceAll("&", "and")
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
}

function validateLines(lines) {
  const ids = new Set();
  for (const line of lines) {
    if (!line.id || !line.text || !line.voice || !line.ageBand) {
      throw new Error(`Invalid line: ${JSON.stringify(line)}`);
    }
    if (ids.has(line.id)) throw new Error(`Duplicate id: ${line.id}`);
    ids.add(line.id);
    if (line.ageBand === "child") {
      const bad = (line.tags || []).filter((t) => TROPE_TAGS.has(t));
      if (bad.length) throw new Error(`child line ${line.id} has trope tags: ${bad.join(",")}`);
    }
    const banned = /elliot\s*rodger|elliot\s*roger|manifesto/i;
    if ((line.tags || []).includes("sigma07") && banned.test(line.text)) {
      throw new Error(`Banned content in ${line.id}`);
    }
  }
}

async function ttsOnce({ text, voice, sessionId, endpoint }) {
  const url = `${endpoint}?text_speaker=${encodeURIComponent(voice)}&req_text=${encodeReqText(text)}&speaker_map_type=0&aid=1233`;
  const headers = { "User-Agent": USER_AGENT };
  if (sessionId) headers.Cookie = `sessionid=${sessionId}`;
  const res = await fetch(url, { method: "POST", headers });
  const raw = await res.text();
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    throw new Error(`Non-JSON response (${res.status}): ${raw.slice(0, 200)}`);
  }
  if (body.message === "Couldn't load speech. Try again.") {
    const err = new Error("Session ID invalid or rejected");
    err.code = "SESSION";
    throw err;
  }
  if (body.status_code !== 0 || !body?.data?.v_str) {
    const err = new Error(`TikTok TTS failed: ${body.message || JSON.stringify(body).slice(0, 200)}`);
    err.code = "TTS";
    err.body = body;
    throw err;
  }
  return Buffer.from(body.data.v_str, "base64");
}

async function bakeLine(line, { sessionId, endpoints }) {
  let lastErr;
  for (const endpoint of endpoints) {
    try {
      return await ttsOnce({ text: line.text, voice: line.voice, sessionId, endpoint });
    } catch (e) {
      lastErr = e;
      if (e.code === "SESSION") throw e;
    }
  }
  throw lastErr;
}

function writeManifest(lines) {
  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    count: lines.length,
    lines: lines.map((l) => ({
      id: l.id,
      file: `${l.id}.mp3`,
      voice: l.voice,
      category: l.category,
      priority: l.priority,
      ageBand: l.ageBand,
      tags: l.tags || [],
      cooldownMs: l.cooldownMs ?? null,
      text: l.text,
    })),
  };
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  return manifest;
}

async function main() {
  const opts = parseArgs(process.argv);
  const sheet = JSON.parse(fs.readFileSync(LINES_PATH, "utf8"));
  let lines = sheet.lines;
  validateLines(lines);

  if (opts.only) lines = lines.filter((l) => opts.only.has(l.id));
  if (opts.limit != null) lines = lines.slice(0, opts.limit);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const sessionId = opts.noSession ? null : process.env.TIKTOK_SESSION_ID || null;
  if (!sessionId && !opts.noSession && !opts.dryRun) {
    console.error("TIKTOK_SESSION_ID unset. Pass --no-session to try without a cookie, or set the env var.");
    process.exit(2);
  }

  console.log(`Baking ${lines.length} lines → ${path.relative(ROOT, OUT_DIR)}`);
  console.log(`Session: ${sessionId ? "yes" : "no"}`);

  if (opts.dryRun) {
    writeManifest(sheet.lines);
    console.log(`Dry run OK. Manifest written (${sheet.lines.length} ids).`);
    return;
  }

  let ok = 0;
  let skipped = 0;
  let failed = 0;
  const failures = [];

  for (const line of lines) {
    const outFile = path.join(OUT_DIR, `${line.id}.mp3`);
    if (fs.existsSync(outFile) && !opts.force) {
      skipped++;
      continue;
    }
    try {
      const buf = await bakeLine(line, { sessionId, endpoints: ENDPOINTS });
      fs.writeFileSync(outFile, buf);
      ok++;
      console.log(`OK  ${line.id}  (${buf.length} bytes)  [${line.voice}]`);
      await new Promise((r) => setTimeout(r, 350));
    } catch (e) {
      failed++;
      failures.push({ id: line.id, error: e.message });
      console.error(`FAIL ${line.id}: ${e.message}`);
      if (e.code === "SESSION") {
        console.error("Aborting: session rejected.");
        break;
      }
    }
  }

  writeManifest(sheet.lines);
  console.log(`\nDone. baked=${ok} skipped=${skipped} failed=${failed}`);
  if (failures.length) {
    console.error("Failures:");
    for (const f of failures) console.error(`  ${f.id}: ${f.error}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
