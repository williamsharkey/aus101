# Credits

## Coconuts — Steve (a-better-internet)

Prop factories, canvas textures, chairs, umbrellas, palms, gulls, lamps, torches, loungers, surfboards, and collision patterns are **ported then restyled** into a Gold Coast esplanade (timber deck, surf club, SLS tower — not Ocean City). Source remains:

Control, collision, procedural Web Audio unlock, first-person viewmodel overlay patterns, prop factories (umbrellas, loungers, palms, gulls, surfboards, beach balls, lamps, torches, cups), and canvas-texture helpers are adapted from:

- **Repository:** [a-better-internet/coconuts](https://github.com/a-better-internet/coconuts)
- **Author:** Steve ([a-better-internet](https://github.com/a-better-internet))

AUS101 keeps a new Gold Coast beach, boardwalk, and wave world; Coconuts is the friend-built foundation we are harvesting patterns from. Thank you Steve.

## Voice bake

- **Tooling:** `tools/voice/bake.py` (and `bake.mjs`) — build-time only, never in the playable bundle.
- **Line sheet:** `tools/voice/lines.json` (217 lines first batch: DJ + NPC catalogs).
- **Runtime assets:** `assets/voice/*.mp3` + `manifest.json`.
- **Current ship:** TikTok-style MP3s baked via sessionless proxies (`bake_tiktok_proxy.py` → Weilnet / Ottsy). Fallback: `bake_edge.py` (Edge neural AU) or `bake_say.py`.
- Official TikTok `sessionid` path remains in `bake.py` if you ever have one; never commit secrets.
- Research notes: `docs/tts-research.md`.

## Foley — lotion apply (`assets/sfx/foley/`)

| File | Source | License |
|---|---|---|
| `lotion_squeeze.mp3` / `_02` | Plastic bottle crushed #0775 / #0776 — Joseph Sardin, [BigSoundBank](https://bigsoundbank.com/) | CC0 1.0 |
| `lotion_cap.mp3` | Opening a bottle of sparkling water #0811 — Joseph Sardin, BigSoundBank | CC0 1.0 |
| `lotion_slap.mp3` / `_02` | Splash Small #1529 / #1530 — Joseph Sardin, BigSoundBank | CC0 1.0 |
| `lotion_lather.mp3` / `_02`, `lotion_spread.mp3` / `_02` | slime/splash from [40 CC0 water/splash/slime SFX](https://opengameart.org/content/40-cc0-water-splash-slime-sfx) — rubberduck, OpenGameArt | CC0 |
| `lotion_wet.mp3` | Mixkit splash preview | Mixkit Sound Effects Free License |

## Foley — footsteps (`assets/sfx/foley/`)

| File | Source | License |
|---|---|---|
| `step_sand_01.mp3` / `step_sand_02.mp3` | Slices from Feet on pebbles #0839 — Joseph Sardin, [BigSoundBank](https://bigsoundbank.com/feet-on-pebbles-s0839.html) | CC0 1.0 |
| `step_wood_01.mp3` | Slice from Man Footsteps on the Wooden Floor #0165 — Joseph Sardin, [BigSoundBank](https://bigsoundbank.com/man-footsteps-on-the-wooden-floor-s0165.html) | CC0 1.0 |

True dry-sand steps are scarce on CC0 hosts; #0839 is the catalog sand stand-in (gravel/pebble crunch). Runtime fallback in `src/audio/footsteps.js` synthesizes a short filtered-noise plant if a file fails to decode.

## Procedural music / ocean

- `src/audio/carpenter.js` — original D-minor Juno-style pulse (oscillators + stereo BBD chorus). Not a Carpenter score; no samples.
- `src/audio/ocean.js` — brown-noise lowpass loop patterned after Coconuts (Steve).

## Pending (to be filled as assets land)

- Tracker / synth sample licenses (CC0 / CC-BY only)
- Remaining Foley packs (Kenney, more BigSoundBank — see `docs/sfx-catalog.md`)
