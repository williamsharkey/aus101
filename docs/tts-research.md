# TikTok-like TTS without `sessionid` — research for AUS101

**Date:** 2026-08-19  
**Constraint:** No TikTok account / no `sessionid` cookie.  
**Product need:** Self-contained browser comedy game; bake MP3s at build time; prefer AU male/female; commit assets (never ship cookies or bake tooling into runtime).

AUS101 already has `tools/voice/bake.py` hitting official TikTok invoke URLs and documents that `--no-session` fails. This note finds a **sessionless proxy that still returns real TikTok-voice MP3s**, plus safer drop-in alternatives.

---

## 1. Official / unofficial TikTok TTS endpoints (2025–2026)

| Endpoint | Session needed? | Live probe 2026-08-19 | Notes |
|---|---|---|---|
| `https://api16-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke/` | **Yes** | POST → HTTP 200, `status_code:1`, `"Couldn't load speech. Try again."` | Same failure mode as `bake.py --no-session` |
| `https://api16-normal-c-useast2a.tiktokv.com/media/api/text/speech/invoke/` | **Yes** | Same `status_code:1` | Region variant; still gated |
| `https://api16-normal-v6.tiktokv.com/media/api/text/speech/invoke/` | **Yes** | Not re-probed today; already known dead without cookie in project README | Used by `tools/voice/bake.py` |
| Historical browser wrappers (`oscie57/tiktok-voice`, `Steve0929/tiktok-tts`, `tiktok-tts-node`, `@shofipwk/tiktok-tts`) | **Yes** | N/A (code requires `sessionid`) | Docs all say: log into TikTok Web → copy `sessionid` |

**Conclusion (official path):** Direct TikTok TTS **does not work without a logged-in `sessionid`** as of 2026-08-19. Do not plan on `--no-session` against `*.tiktokv.com`.

---

## 2. Proxies / mirrors that return MP3 (sessionless)

### ✅ Working — Weilbyte / Ottsy (primary TikTok-timbre path)

| URL | Role |
|---|---|
| `https://ottsy.weilbyte.dev/api/generation` | **Live API** (POST JSON → JSON with base64 MP3) |
| `https://tiktok-tts.weilnet.workers.dev/api/generation` | Cloudflare Worker; **HTTP 307 → ottsy** |
| `https://tiktok-tts.weilbyte.dev/` | Old front door; **DNS NXDOMAIN** today |
| `https://weilbyte.github.io/tiktok-tts/` | Redirects to dead `tiktok-tts.weilbyte.dev` |
| Repo: https://github.com/Weilbyte/tiktok-tts | Browser UI project; API moved to Ottsy |

**Request (no cookie):**
```http
POST https://ottsy.weilbyte.dev/api/generation
Content-Type: application/json

{"text":"it's a beautiful day on the Gold Coast","voice":"en_au_002"}
```

**Response shape:**
```json
{"success":true,"data":"<base64-mp3>","error":null}
```

**Live probes (short phrase, no session):**

| Voice (AUS101 sheet) | Result | Approx MP3 size |
|---|---|---|
| `en_au_001` | OK | ~21 KB |
| `en_au_002` | OK | ~18–40 KB |
| `en_us_001` | OK | ~27 KB |
| `en_us_002` | OK | ~27 KB |
| `en_us_007` | OK | ~17 KB |
| `en_female_emotional` | OK | ~18 KB |
| `en_male_narration` | OK | ~23 KB |
| `en_us_rocket` | OK | ~21 KB |
| `en_us_c3po` | OK | ~18 KB |

Magic bytes confirmed: `ID3` / MPEG layer III (~128 kbps, 24 kHz mono on sample).

**Session needed:** No. Probe with empty `Cookie` header still returned valid MP3.

**License / ToS risk:** **High.** This proxies TikTok’s proprietary TTS. TikTok ToS forbid unauthorized API use. Proxy can die, rate-limit, or change domain (already moved from `weilnet.workers.dev` → `ottsy.weilbyte.dev`). Fine for **offline bake + commit MP3** (no runtime dependency), still grey for redistribution of TikTok-branded voice clones. Do not call from the shipped game.

### Web UIs (manual MP3 download; not bake-friendly)

| Site | Session? | Notes / risk |
|---|---|---|
| https://gesserit.co/tiktok | No TikTok login for UI | Free ~500 words then paid ($14–$99/mo). No documented public API found (`/api/tiktok` → 404; `api.gesserit.co` NXDOMAIN). ToS: third-party TikTok voice use. |
| https://tiktokvoice.net/ | — | **301 → https://mogofun.com/** (rebrand / different product). Unreliable as “TikTok TTS API”. |
| https://tkvoice.net/ | No | Marketing “TikTok Voice Generator”; 46 AI voices — likely **not** true TikTok invoke, more generic AI TTS with TikTok branding. |
| https://ttsvibes.com/ | No | Generic “TikTok voice” generator UI. |
| CapCut / VEED / AnySpeech / TextToSpeechRobot | Account-dependent | Web tools; not suitable for scripted bake of 217 lines. |

### Dead / flaky history

- Weilbyte issues (e.g. Oct 2024): `weilnet.workers.dev` returned 500 while TikTok gated harder — proxy recovered by moving hosts.
- Community packages that hit `tiktokv.com` directly: chronic “session invalid / expired” since ~2023–2025.

---

## 3. Drop-in alternatives (similar comedy energy, not TikTok)

| Engine | AU voices | Session / key | Quality | License / ToS | Bake fit for AUS101 |
|---|---|---|---|---|---|
| **edge-tts** (Microsoft Edge neural) | **Yes** — `en-AU-WilliamNeural` (M), `en-AU-NatashaNeural` (F), plus `en-AU-WilliamMultilingualNeural` | No key (unofficial Edge websocket) | High; neural, clear comedy VO | **Medium** — unofficial use of Microsoft service; widely used for hobby bake. Output audio you generate is yours to ship. | **Best legal-ish bake.** Live OK today. |
| **gTTS** (Google Translate TTS) | AU via `tld='com.au'` | No key | Robotic / meme; less “TikTok girl” | Grey (Translate ToS); brittle | OK for placeholders only |
| **Kokoro-82M** | No native `en-AU`; US/UK packs | Local / Apache-2.0 model | Very good neural | **Low risk** (Apache 2.0 weights) | Strong if accent can be US/UK or fine-tuned later |
| **Piper** | Limited AU community voices (spotty) | Local / MIT-ish models | Fast, lighter than Kokoro | **Low risk** | Good offline fallback; quality below Edge/Kokoro |
| **macOS `say`** | `Karen` (`en_AU`) present on this machine | Local | Synthetic; already used as placeholders | Apple OS license; fine for local bake | Current stand-in (`bake_say.py`) |
| Azure / ElevenLabs / OpenAI TTS | Many AU options | Paid API key | Excellent | Clear commercial ToS | Overkill if bake-once + commit |

### Live alternative probes (2026-08-19)

| Probe | Result |
|---|---|
| `edge-tts` → `en-AU-WilliamNeural` | OK — `/tmp/edge_au_william.mp3` ~19.6 KB MPEG ADTS |
| `edge-tts` → `en-AU-NatashaNeural` | OK — ~24.9 KB |
| `gTTS` `lang=en, tld=com.au` | OK — ~26.3 KB |
| `freetts.org/api/tts` | HTTP 403 — browser-only; wants `/api/v1/tts` + API key |
| macOS `say -v Karen` | Available (`en_AU`) |

Install note: system Python is PEP 668 managed; use a venv:
```bash
python3 -m venv .venv && .venv/bin/pip install edge-tts
.venv/bin/edge-tts --voice en-AU-WilliamNeural --text "G'day" --write-media out.mp3
```

---

## 4. npm / Python packages claiming TikTok TTS

| Package | Sessionless? | Reality |
|---|---|---|
| `tiktok-tts` / `Steve0929/tiktok-tts` | No | Requires `sessionid` |
| `tiktok-tts-node` | No | Constructor takes session id; error text about expired session |
| `@shofipwk/tiktok-tts` | No | Docs: Cookie Editor → `sessionid` |
| `oscie57/tiktok-voice` (Python) | No | Hard-fails: “You need to have a TikTok session ID!” |
| `markrzv/TikTok-Voice-TTS` | No | Same family as Oscie |
| No maintained package found that **honestly** does sessionless official TikTok | — | Sessionless only via **third-party proxies** (Weilbyte/Ottsy), not via npm wrappers on `tiktokv.com` |

**edge-tts** (PyPI `edge-tts`, also `node-edge-tts`) is the main sessionless package ecosystem — **not TikTok**, but closest practical quality for AU comedy VO.

---

## 5. Recommendation for AUS101

### Primary bake path (ONE choice): **Weilbyte Ottsy proxy → commit MP3s**

**Why:** Matches existing `lines.json` voice codes (`en_au_001` / `en_au_002` dominate 145/217 lines). No TikTok account. All nine sheet voices probed OK. Same build-time / commit-assets model already designed in `tools/voice/`.

**How (minimal):**
```bash
# Example single line — decode base64 data field to assets/voice/<id>.mp3
curl -sS -X POST https://ottsy.weilbyte.dev/api/generation \
  -H 'Content-Type: application/json' \
  -d '{"text":"it'\''s a beautiful day on the Gold Coast","voice":"en_au_002"}' \
  | python3 -c "import sys,json,base64; d=json.load(sys.stdin); open('assets/voice/dj_open_01.mp3','wb').write(base64.b64decode(d['data']))"
```

Wire into `bake.py` as a **third provider** ahead of `tiktokv.com` when `TIKTOK_SESSION_ID` is unset, e.g. `provider=ottsy` defaulting to:
- POST `https://ottsy.weilbyte.dev/api/generation`
- Fallback POST via `https://tiktok-tts.weilnet.workers.dev/api/generation` (follows 307)
- Keep official `tiktokv.com` + session as optional upgrade path

**Rules:**
- Bake on the build machine only; never call Ottsy from the browser game.
- Rate-limit (~0.3–0.5 s between lines; 217 lines is fine as a batch).
- Cache by `(voice, text)` hash; `--force` to rewrite.
- Tag manifest `engine: "tiktok-ottsy"` vs `placeholder_say`.
- Accept ToS risk: proxy can vanish; committed MP3s remain playable.

### If Ottsy dies or ToS is unacceptable

**Fallback bake:** `edge-tts` with:
- Male AU → `en-AU-WilliamNeural` (map from `en_au_002`, male narration, etc.)
- Female AU → `en-AU-NatashaNeural` (map from `en_au_001`, emotional female, etc.)
- Character bits (`rocket`, `c3po`) → keep Ottsy for those few lines, or accept non-TikTok substitutes / SFX

### Not recommended as primary

- Creating a TikTok account just for `sessionid` (user refused; cookies expire).
- Runtime web calls to any TikTok/proxy TTS.
- gTTS / macOS `say` as final ship voice (placeholders only).
- Paid “TikTok voice” SaaS UIs for 217-line automation.

---

## 6. Probe log (raw)

```
POST https://tiktok-tts.weilnet.workers.dev/api/generation
  → HTTP 307 Location: https://ottsy.weilbyte.dev/api/generation
  → HTTP 200 {"success":true,"data":"<base64 ID3 MP3>",...}

POST https://ottsy.weilbyte.dev/api/generation  (all 9 AUS101 voices)
  → HTTP 200 success=true

POST https://api16-normal-c-useast1a.tiktokv.com/.../invoke/  (no cookie)
  → HTTP 200 {"status_code":1,"message":"Couldn’t load speech. Try again."}

POST https://api16-normal-c-useast2a.tiktokv.com/.../invoke/  (no cookie)
  → same status_code 1

GET https://tiktok-tts.weilbyte.dev/
  → DNS fail

GET https://tiktokvoice.net/
  → 301 → https://mogofun.com/

POST https://gesserit.co/api/tiktok
  → 404

edge-tts en-AU-WilliamNeural / NatashaNeural
  → OK MP3 files written

gTTS en / com.au
  → OK MP3
```

---

## 7. Bottom line

| Goal | Path |
|---|---|
| **TikTok-sounding VO, no account** | **Bake via `https://ottsy.weilbyte.dev/api/generation`**, commit MP3s |
| **Safer / Microsoft neural AU** | Bake via **edge-tts** (`en-AU-WilliamNeural` / `en-AU-NatashaNeural`) |
| **Official TikTok API** | Requires `sessionid` — blocked for this user |

**Primary recommendation: Ottsy (Weilbyte) sessionless bake at build time.**
