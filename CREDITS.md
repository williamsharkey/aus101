# Credits

## Coconuts — Steve (a-better-internet)

Control, collision, procedural Web Audio unlock, first-person viewmodel overlay patterns, prop factories (umbrellas, loungers, palms, gulls, surfboards, beach balls, lamps, torches, cups), and canvas-texture helpers are adapted from:

- **Repository:** [a-better-internet/coconuts](https://github.com/a-better-internet/coconuts)
- **Author:** Steve ([a-better-internet](https://github.com/a-better-internet))

AUS101 keeps a new Gold Coast beach, boardwalk, and wave world; Coconuts is the friend-built foundation we are harvesting patterns from. Thank you Steve.

## Voice bake

- **Tooling:** `tools/voice/bake.py` (and `bake.mjs`) — build-time only, never in the playable bundle.
- **Line sheet:** `tools/voice/lines.json` (217 lines first batch: DJ + NPC catalogs).
- **Runtime assets:** `assets/voice/*.mp3` + `manifest.json`.
- **Current ship:** 34 macOS `say` placeholders (`bake_say.py`) so audio can be wired. Replace with TikTok bake when `TIKTOK_SESSION_ID` is available.
- Target voices: TikTok’s unofficial TTS via the [oscie57/tiktok-voice](https://github.com/oscie57/tiktok-voice) approach. Session cookie is never committed.

## Pending (to be filled as assets land)

- Committed TikTok-baked MP3s after `TIKTOK_SESSION_ID` bake
- Tracker / synth sample licenses (CC0 / CC-BY only)
- Foley packs (Kenney, Freesound, OpenGameArt, Mixkit — see `docs/sfx-catalog.md`)
