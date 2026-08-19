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

## Temporary placeholders (macOS `say`)

Until a TikTok session is available:

```bash
python3 tools/voice/bake_say.py          # 34-line starter set
python3 tools/voice/bake_say.py --all-sheet   # every line (slow)
```

Placeholders are tagged `placeholder_say` in `assets/voice/manifest.json`. Replace by running `bake.py` with `TIKTOK_SESSION_ID` and `--force`.

Outputs:

- `assets/voice/<id>.mp3`
- `assets/voice/manifest.json`

## Safety

- Child lines cannot carry adult trope tags (validated in bake).
- SIGMA_07 lines reject banned real-killer / manifesto strings.
- Put secrets in env or a gitignored `.env` — never commit them.
