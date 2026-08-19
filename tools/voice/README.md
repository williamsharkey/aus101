# Voice bake (TikTok TTS — build machine only)

This folder is **not** part of the game runtime. The playable bundle must never import these scripts or contain a TikTok `sessionid`.

## First batch

`lines.json` currently holds **217** lines:

- 53 DJ (Reticule FM open + quips + song announces)
- NPC / HUD / gull / child / SIGMA_07 / babe & Ken gossip from `docs/DESIGN.md`

## Bake

Python (works without Node):

```bash
# Prefer a real TikTok session cookie (browser → Application → Cookies → sessionid)
export TIKTOK_SESSION_ID='...'
python3 tools/voice/bake.py

# First smoke: one line
python3 tools/voice/bake.py --only dj_open_01

# Try without session (fails as of 2026-08-19 — API requires session)
python3 tools/voice/bake.py --no-session --only dj_open_01

# Rewrite existing mp3s
python3 tools/voice/bake.py --force --only dj_open_01

# Manifest only
python3 tools/voice/bake.py --dry-run
```

Node alternative (same flags): `node tools/voice/bake.mjs` when Node is installed.

**2026-08-19:** `--no-session` returns `Couldn't load speech. Try again.` on both known endpoints. A valid `TIKTOK_SESSION_ID` is required for real TikTok voices.

## Sessionless TikTok TTS (preferred — no account)

Official `tiktokv.com` needs a `sessionid`. These public proxies do **not**:

```bash
# TikTok voices via Weilnet / Ottsy proxies (no cookie)
python3 tools/voice/bake_tiktok_proxy.py --smoke --force
python3 tools/voice/bake_tiktok_proxy.py --force          # all 217 lines

# Fallback: Microsoft Edge neural (AU Natasha / William) — no key
.venv/bin/python tools/voice/bake_edge.py --force
```

See `docs/tts-research.md` for probe results and ToS notes. Proxies are unofficial and may die; bake commits MP3s so runtime stays offline.

## Temporary placeholders (macOS `say`)

```bash
python3 tools/voice/bake_say.py --all-sheet
```

Tagged `placeholder_say` in the manifest.

Outputs:

- `assets/voice/<id>.mp3`
- `assets/voice/manifest.json`

## Safety

- Child lines cannot carry adult trope tags (validated in bake).
- SIGMA_07 lines reject banned real-killer / manifesto strings.
- Put secrets in env or a gitignored `.env` — never commit them.
