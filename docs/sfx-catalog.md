# AUS101 SFX catalog — free, commitable, static

Self-contained browser game. Audio is files on disk. No CDN, no API, no streaming. Commit encoded MP3s. Do not commit source WAV except as a local scratch that stays gitignored.

This catalog lists **real page URLs**, licenses checked 2026-08-18, and recommended picks per hook. It is a shopping list, not a download dump. Do **not** pull Sonniss GDC GB-scale zips. Do **not** rip YouTube or movie stems.

Companion to `grok-design-part-audio-3641153d.md` (voice + Reticule FM). SFX sit on a separate bus from VO.

---

## 0. License policy (what we can ship)

| Source | License | Game + commit-to-repo | Attribution |
|---|---|---|---|
| [Kenney](https://kenney.nl/assets/category:Audio) | CC0 1.0 | Yes | Not required. Credit anyway. |
| [BigSoundBank](https://bigsoundbank.com/licenses.html) | CC0 1.0 / WTFPL / PD | Yes. Share, adapt, commercial, no permission. | Not required. Prefer: `Additional sounds: Joseph SARDIN — BigSoundBank.com` |
| [OpenGameArt](https://opengameart.org) | **per file** (filter CC0 / CC-BY) | Yes if that file is CC0 or CC-BY | CC0 none; CC-BY must credit |
| [Freesound](https://freesound.org) | **per file** | Yes if CC0 or CC-BY. Reject CC-BY-NC. | CC0 none; CC-BY exact author string |
| [Mixkit SFX](https://mixkit.co/license/#sfxFree) | Mixkit Sound Effects Free License | Yes **inside the game**. Commercial + personal. No attribution. **Cannot** redistribute the file as standalone stock. Shipping inside AUS101 is an End Product. | Not required. Credit Mixkit. |
| [Pixabay Content License](https://pixabay.com/service/license-summary/) | Pixabay Content License | Yes inside a game. Commercial. No attribution. **Cannot** resell as standalone SFX. | Not required. Credit artist + Pixabay. |
| [Sonniss GameAudioGDC](https://sonniss.com/gameaudiogdc/) | Sonniss GDC EULA | Yes in games/film. No attribution. No selling SFX as-is. **No AI training.** Archives are 7–27 GB. Do not download the dump. Cherry-pick later if a specific file is needed. | Not required |
| [BBC RemArc](https://sound-effects.bbcrewind.co.uk/licensing) | RemArc (personal / education) | **REJECT.** Commercial use needs a paid licence. | n/a |
| [SoundBible](https://soundbible.com) | Per file (often Attribution 3.0) | Only if that file is CC0 / CC-BY and allows redistribution. Skip as a primary source. | Per file |

**Commit rule:** prefer CC0. Mixkit/Pixabay only as End Product assets (in `assets/sfx/`, not a “free SFX pack” folder). Never commit a file whose page says NC, “personal only”, or “no redistribution”.

---

## 1. Encode + budget

Target folder: **1.5–2.5 MB** total.

| Kind | Encode | Typical duration in-game | Size each |
|---|---|---|---|
| Ambient **loops** | MP3 32–48 kbps **mono**, 22.05 kHz | 8–16 s trimmed loop | 40–90 KB |
| One-shots | MP3 48–96 kbps **mono**, 22.05 kHz | 0.2–2.5 s | 3–25 KB |
| Flyover / rare stinger | MP3 64 kbps mono | 4–10 s | 30–80 KB |

Do **not** commit 5-minute 76 MB WAV. Trim first, then encode.

Pipeline (local, once):

```
ffmpeg -i in.wav -ac 1 -ar 22050 -b:a 48k assets/sfx/.../name.mp3
```

Loops: pick a 10–16 s slice with no unique event at the seam. Crossfade 80–150 ms in the DAW or `afade`/`acrossfade`. Test the loop in headphones before commit.

Runtime: one `AudioBufferSourceNode` per loop, `loop = true`. One-shots fire-and-forget. Cap concurrent one-shots at 8. Duck SFX −6 dB under VO (`panic > protest > rub`).

---

## 2. Folder layout

```
assets/sfx/
  amb/          # loops
    ocean.mp3
    shore_close.mp3
    gulls.mp3
    rain.mp3
    storm.mp3
    crowd_boardwalk.mp3
    wind_palms.mp3
    radio_static.mp3
  step/         # one-shots, 3–5 variants each, pick random
    sand_m_01.mp3 … sand_m_04.mp3
    sand_f_01.mp3 …
    sand_wet_01.mp3 …
    boardwalk_01.mp3 …
    chrome_01.mp3 …
    chase_01.mp3 …
    kids_run_01.mp3 …
  combat/
    punch_01.mp3 …
    shove_01.mp3 …
    laser.mp3
    laser_fail.mp3
  foley/
    lotion_squeeze.mp3
    lotion_rub.mp3
    bottle_plastic.mp3
    lighter.mp3
    vape_exhale.mp3
  world/
    splash.mp3
    wave_crash.mp3
    gull_flap.mp3
    heli.mp3
  ui/
    tick.mp3
    whoosh.mp3
    station_id.mp3
```

Keep 3–5 variants for footsteps and punches. One file per other hook.

---

## 3. Starter packs (download these first)

These five cover most combat / UI / laser / generic footsteps. Nature and Gold Coast foley come from BigSoundBank + Mixkit singles after that.

### Pack A — Kenney Interface Sounds (must)

- **Title:** Interface Sounds
- **Page:** https://kenney.nl/assets/interface-sounds
- **Zip:** https://kenney.nl/media/pages/assets/interface-sounds/fa43c1dd4d-1677589452/kenney_interface-sounds.zip
- **License:** Creative Commons CC0 1.0
- **Format:** 100 files, OGG in the zip. Re-encode the 4–6 ticks/clicks you keep.
- **Size:** pack is small (well under 2 MB). Keep ~6 files → ~30 KB encoded.
- **Hooks:** `ui.tick`, radio knob, pause, apply-confirm.
- **Loop:** no (one-shots).
- **Attribution:** `Interface Sounds by Kenney (www.kenney.nl) — CC0 1.0`

### Pack B — Kenney Impact Sounds (must)

- **Title:** Impact Sounds
- **Page:** https://kenney.nl/assets/impact-sounds
- **Zip:** https://kenney.nl/media/pages/assets/impact-sounds/87b4ddecda-1677589768/kenney_impact-sounds.zip
- **License:** CC0 1.0
- **Format:** 130 hits / thuds / crashes, OGG.
- **Hooks:** `combat.punch`, `combat.shove`, body hit. Pick fleshy/soft, not metal crash.
- **Loop:** no.
- **Attribution:** `Impact Sounds by Kenney (www.kenney.nl) — CC0 1.0`

### Pack C — Kenney Sci-fi Sounds + Digital Audio (must for laser)

- **Title:** Sci-fi Sounds
- **Page:** https://kenney.nl/assets/sci-fi-sounds
- **Zip:** https://kenney.nl/media/pages/assets/sci-fi-sounds/6b296f9ecf-1677589334/kenney_sci-fi-sounds.zip
- **License:** CC0 1.0
- **Format:** 70 files, OGG. Lasers, scans, engines.
- **Hooks:** `combat.laser`, `combat.laser_fail`. Original, not a movie stem.
- **Also:** https://kenney.nl/assets/digital-audio — 60 files, CC0, tagged laser/space. Zip: https://kenney.nl/media/pages/assets/digital-audio/216eac4753-1677590265/kenney_digital-audio.zip
- **Loop:** no (except a 1-shot whoosh reused as station ID).
- **Attribution:** `Sci-fi Sounds / Digital Audio by Kenney (www.kenney.nl) — CC0 1.0`

### Pack D — Kenney RPG Audio (footstep bed)

- **Title:** RPG Audio
- **Page:** https://kenney.nl/assets/rpg-audio
- **Zip:** https://kenney.nl/media/pages/assets/rpg-audio/8e99002d76-1677590336/kenney_rpg-audio.zip
- **License:** CC0 1.0
- **Format:** 50 files, OGG. Footsteps + foley + weapons.
- **Hooks:** fallback `step.sand` if beach foley is thin; `step.chase`.
- **Loop:** no.
- **Attribution:** `RPG Audio by Kenney (www.kenney.nl) — CC0 1.0`

### Pack E — OpenGameArt CC0 grab-bag (optional, still small)

- **100 CC0 SFX** — https://opengameart.org/content/100-cc0-sfx — CC0 — zip **2.9 MB**. Hits, switches, misc. Author rubberduck.
- **100 CC0 SFX #2** — https://opengameart.org/content/100-cc0-sfx-2 — CC0 — zip **2.4 MB**. Footsteps, thunder, metal hit, ambient loops.
- **100 CC0 metal and wood SFX** — https://opengameart.org/content/100-cc0-metal-and-wood-sfx — CC0. Chrome / AUS101 metal steps.
- **Solo Seagull Sound Effects** — https://opengameart.org/content/solo-seagull-sound-effects — CC0 — author Rango Mango. Isolated gull cries. Preview file `Seagull Ambient 1.wav` ~687 KB. Page states no credit required.
- **Attribution (optional):** `100 CC0 SFX by rubberduck — OpenGameArt.org — CC0` / `Solo Seagulls by Rango Mango — OpenGameArt.org — CC0`

---

## 4. Assets by category

Sizes below are **source** sizes from the host (stereo WAV/MP3 as sold). After encode they drop to the budget table in §1. Duration is the published length.

### 4.1 Beach / ocean / shore-break / wet sand

**Loops.** Layer `ocean` (far) under `shore_close` (near). Trim each to 12–16 s.

#### Sea Waves with Tern Calls — PRIMARY LOOP
- **Page:** https://bigsoundbank.com/sea-waves-and-seagulls-s0267.html
- **Also on Freesound (same author, same file):** https://freesound.org/people/JosephSardin/sounds/500355/
- **License:** CC0 1.0
- **Format:** WAV 9.9 MB / MP3 2.3 MB / OGG 1.6 MB · 00:58 · stereo 44.1 kHz 16-bit
- **Hook:** `amb.ocean` (trim 12 s, drop a slice without a loud tern if you also run a separate gull loop)
- **Loop:** yes
- **Attribution:** `Sea Waves with Tern Calls (#0267) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Small Waves, Froth and Beach
- **Page:** https://bigsoundbank.com/small-waves-froth-and-beach-s1447.html
- **License:** CC0 1.0
- **Format:** MP3 + WAV · 01:38 · recorded 10 cm off the sand
- **Hook:** `amb.shore_close` — wet sand / foam at the player’s feet
- **Loop:** yes (trim)
- **Attribution:** `Small Waves, Froth and Beach (#1447) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Beach: Small Waves
- **Page:** https://bigsoundbank.com/beach-small-waves-s0265.html
- **License:** CC0 1.0
- **Format:** ~00:58 stereo
- **Hook:** alt `amb.ocean` if 0267 is too birdy
- **Loop:** yes
- **Attribution:** `Beach: Small Waves (#0265) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Sea: Waves (no birds)
- **Page:** https://bigsoundbank.com/sea-waves-s0266.html
- **License:** CC0 1.0
- **Format:** 00:58
- **Hook:** clean ocean bed so gull one-shots sit on top
- **Loop:** yes
- **Attribution:** `Sea: Waves (#0266) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Close sea waves loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/sea/ (title: **Close sea waves loop**, 0:28)
- **License:** Mixkit Sound Effects Free License
- **Format:** WAV + MP3 download from that page · 0:28
- **Hook:** `amb.shore_close` if BSB 1447 is too long
- **Loop:** yes
- **Attribution:** `Close sea waves loop — Mixkit — Mixkit Sound Effects Free License`

#### Sea waves with birds loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/sea/ (title: **Sea waves with birds loop**, 0:38)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:38
- **Hook:** backup combined bed. Prefer BSB 0266 + separate gulls so you can mute birds at night.
- **Loop:** yes
- **Attribution:** `Sea waves with birds loop — Mixkit — Mixkit Sound Effects Free License`

#### Ambience, Seaside Waves, Close, A.wav (quality, not commit-as-is)
- **Page:** https://freesound.org/people/InspectorJ/sounds/400632/
- **License:** **CC BY 4.0** (author: “This sound is not in the public domain. Please attribute.”)
- **Format:** WAV 75.9 MB · 5:00 · 24-bit stereo. **Trim 12 s then encode.** Do not commit the 76 MB file.
- **Hook:** premium `amb.shore_close` if CC-BY credit is acceptable
- **Loop:** yes after trim
- **Attribution:** `"Ambience, Seaside Waves, Close, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org`

#### Beach Ocean Waves (OGA)
- **Page:** https://opengameart.org/content/beach-ocean-waves
- **License:** CC0
- **Format:** FLAC `wave_01_cc0-18363__jasinski__alkaibeach.flac` 626 KB
- **Hook:** tiny fallback loop
- **Loop:** yes
- **Attribution:** `Beach Ocean Waves — OpenGameArt.org — CC0`

---

### 4.2 Seagulls / birds

**One-shots + optional thin loop.** Do not bury them in the ocean bed if you want ducking (`gull` is lowest VO priority).

#### Solo Seagull Sound Effects — PRIMARY CRIES
- **Page:** https://opengameart.org/content/solo-seagull-sound-effects
- **License:** CC0
- **Format:** several isolated WAV (e.g. `Seagull Ambient 1.wav` 686.6 KB). Cut singles from the pack.
- **Hook:** `world.gull_cry` random 1 of N. Labels on the page: Struck / Death / Ambient.
- **Loop:** no (one-shots)
- **Attribution:** `Solo Seagull Sound Effects by Rango Mango — OpenGameArt.org — CC0`

#### Gulls on the Harbor
- **Page:** https://bigsoundbank.com/gulls-on-the-harbor-s2573.html
- **License:** CC0 1.0
- **Format:** 01:55
- **Hook:** `amb.gulls` distant bed (low volume, Gold Coast harbour)
- **Loop:** yes (trim 12 s)
- **Attribution:** `Gulls on the Harbor (#2573) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Sea birds squeak (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/sea/ (title: **Sea birds squeak**, 0:10)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:10
- **Hook:** alt one-shot cry
- **Loop:** no
- **Attribution:** `Sea birds squeak — Mixkit — Mixkit Sound Effects Free License`

#### Pixabay seagull search (pick 2 isolated cries)
- **Page:** https://pixabay.com/sound-effects/search/seagull/
- **Example file page:** https://pixabay.com/sound-effects/nature-seagull-307507/
- **License:** Pixabay Content License (commercial, no attribution, no standalone resale)
- **Format:** MP3, shorts 0:02–0:17
- **Hook:** extra `world.gull_cry` variants
- **Loop:** no
- **Attribution:** `Seagull SFX — Pixabay.com — Pixabay Content License`

---

### 4.3 Rain / storm (optional weather)

#### Light rain loop (Mixkit) — PRIMARY RAIN
- **Page:** https://mixkit.co/free-sound-effects/rain/ (title: **Light rain loop**, 0:15)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:15 (also a second “Light rain loop” at 0:39)
- **Hook:** `amb.rain`
- **Loop:** yes
- **Attribution:** `Light rain loop — Mixkit — Mixkit Sound Effects Free License`

#### Rain and Thunder #1
- **Page:** https://bigsoundbank.com/rain-and-storm-s0124.html
- **License:** CC0 1.0
- **Format:** 00:42
- **Hook:** `amb.storm` stinger then fade to rain loop
- **Loop:** no (one-shot weather change)
- **Attribution:** `Rain and Thunder #1 (#0124) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Rain and Thunder #2
- **Page:** https://bigsoundbank.com/rain-and-storm-2-s0740.html
- **License:** CC0 1.0
- **Format:** 02:37 — **trim 12 s**
- **Hook:** alt `amb.storm`
- **Loop:** yes after trim
- **Attribution:** `Rain and Thunder #2 (#0740) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Heavy storm rain loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/rain/ (title: **Heavy storm rain loop**, 0:18)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:18
- **Hook:** `amb.storm` loop
- **Loop:** yes
- **Attribution:** `Heavy storm rain loop — Mixkit — Mixkit Sound Effects Free License`

#### Rain on Puddle
- **Page:** https://bigsoundbank.com/rain-on-puddle-s1290.html
- **License:** CC0 1.0
- **Format:** 01:18
- **Hook:** close layer when the player stands in wet sand during rain
- **Loop:** yes (trim)
- **Attribution:** `Rain on Puddle (#1290) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

---

### 4.4 People walking — men, women, mixed — sand, timber, wet sand

True dry-sand footsteps are scarce on CC0 hosts. Use **gravel / pebbles / wet mud** as sand stand-ins, then layer a short filtered noise burst (local, 40 ms) if it still reads as dirt.

#### Feet on pebbles — SAND STAND-IN
- **Page:** https://bigsoundbank.com/feet-on-pebbles-s0839.html
- **License:** CC0 1.0
- **Format:** 00:32
- **Hook:** `player.step.sand` mixed / men. Slice into 4 one-shots.
- **Loop:** no
- **Attribution:** `Feet on pebbles (#0839) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Footsteps on Gravels #3
- **Page:** https://bigsoundbank.com/footsteps-on-gravels-3-s3202.html
- **License:** CC0 1.0
- **Format:** 01:13
- **Hook:** `player.step.sand` extra variants
- **Loop:** no
- **Attribution:** `Footsteps on Gravels #3 (#3202) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Steps in the Mud — WET SAND
- **Page:** https://bigsoundbank.com/steps-in-the-mud-s0495.html
- **License:** CC0 1.0
- **Format:** 00:09
- **Hook:** `player.step.sand_wet`
- **Loop:** no
- **Attribution:** `Steps in the Mud (#0495) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Footsteps in deep mud / Footsteps in a muddy puddle (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/ (titles: **Footsteps in deep mud** 0:31, **Footsteps in a muddy puddle** 0:03)
- **License:** Mixkit Sound Effects Free License
- **Hook:** alt wet sand
- **Loop:** no
- **Attribution:** `Footsteps in deep mud / muddy puddle — Mixkit — Mixkit Sound Effects Free License`

#### Walk on Pontoon — BOARDWALK
- **Page:** https://bigsoundbank.com/walk-on-pontoon-s1845.html
- **License:** CC0 1.0
- **Format:** 00:07
- **Hook:** `player.step.boardwalk` timber
- **Loop:** no
- **Attribution:** `Walk on Pontoon (#1845) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Man Footsteps on the Wooden Floor
- **Page:** https://bigsoundbank.com/man-footsteps-on-the-wooden-floor-s0165.html
- **License:** CC0 1.0
- **Format:** 00:08 · 13 steps
- **Hook:** `player.step.boardwalk` men
- **Loop:** no
- **Attribution:** `Man Footsteps on the Wooden Floor (#0165) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Steps on a Wooden Floor #1
- **Page:** https://bigsoundbank.com/steps-on-a-wooden-floor-1-s1515.html
- **License:** CC0 1.0
- **Format:** 00:38
- **Hook:** mixed boardwalk
- **Loop:** no
- **Attribution:** `Steps on a Wooden Floor #1 (#1515) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Heels #1 / Heels #2 — WOMEN
- **Pages:** https://bigsoundbank.com/heels-s0166.html (00:06, 9 steps) · https://bigsoundbank.com/heels-2-s2627.html (00:12)
- **License:** CC0 1.0
- **Hook:** `npc.step.sand_f` / boardwalk women. High-pass so they do not fight the ocean.
- **Loop:** no
- **Attribution:** `Heels (#0166 / #2627) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Footsteps on heels on the pavement (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/ (title: **Footsteps on heels on the pavement**, 0:05)
- **License:** Mixkit Sound Effects Free License
- **Hook:** women on concrete / esplanade
- **Loop:** no
- **Attribution:** `Footsteps on heels on the pavement — Mixkit — Mixkit Sound Effects Free License`

#### Crunchy footsteps loop / Crunchy road fast walking loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/ (0:09 and 0:23)
- **License:** Mixkit Sound Effects Free License
- **Hook:** mixed sand-like crunch. Slice to one-shots rather than looping under the player.
- **Loop:** source is looped; **use as one-shots**
- **Attribution:** `Crunchy footsteps loop — Mixkit — Mixkit Sound Effects Free License`

#### Different steps on wood, stone, leaves, gravel and mud (OGA)
- **Page:** https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud
- **License:** check page on download (classic OGA pack; verify CC0/CC-BY on the page before commit)
- **Format:** zip **77.7 KB** — 8 sounds
- **Hook:** tiny extra step bank
- **Loop:** no

---

### 4.5 Crowd murmur / distant party / Gold Coast boardwalk

Prefer **outdoor walla without distinct words**. French/Spanish beds still work at −18 dB under ocean.

#### Outside Talks #4 — PRIMARY CROWD
- **Page:** https://bigsoundbank.com/outside-talks-4-s3094.html
- **License:** CC0 1.0
- **Format:** 00:58 · ~100 people outdoors, French
- **Hook:** `amb.crowd_boardwalk`
- **Loop:** yes (trim 12–16 s, pick a stretch without a single loud laugh)
- **Attribution:** `Outside Talks #4 (#3094) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Crowd of 50–60 People #1
- **Page:** https://bigsoundbank.com/crowd-of-50-60-people-1-s3515.html
- **License:** CC0 1.0
- **Format:** 01:48
- **Hook:** closer esplanade pocket
- **Loop:** yes after trim
- **Attribution:** `Crowd of 50-60 People #1 (#3515) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Outdoor Market #1
- **Page:** https://bigsoundbank.com/outdoor-market-1-s2728.html
- **License:** CC0 1.0
- **Format:** 03:20 — **trim hard**
- **Hook:** Surfers Paradise stall strip
- **Loop:** yes after trim
- **Attribution:** `Outdoor Market #1 (#2728) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Beach and Sea
- **Page:** https://bigsoundbank.com/beach-and-sea-s1059.html
- **License:** CC0 1.0
- **Format:** 01:23 · holidaymakers + waves
- **Hook:** `amb.crowd` already mixed with sea — use only if you do not layer ocean separately
- **Loop:** yes after trim
- **Attribution:** `Beach and Sea (#1059) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Very crowded pub or party loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/crowd/ (title: **Very crowded pub or party loop**, 0:36)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:36
- **Hook:** `amb.party` — nightclub bleed from a high-rise, LPF 1.2 kHz, −20 dB
- **Loop:** yes
- **Attribution:** `Very crowded pub or party loop — Mixkit — Mixkit Sound Effects Free License`

#### People in fair ambience and laughter (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/crowd/ (title: **People in fair ambience and laughter**, 0:15)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:15
- **Hook:** daytime boardwalk colour
- **Loop:** yes
- **Attribution:** `People in fair ambience and laughter — Mixkit — Mixkit Sound Effects Free License`

#### Big crowd talking loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/crowd/ (title: **Big crowd talking loop**, 0:59)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:59
- **Hook:** denser walla
- **Loop:** yes
- **Attribution:** `Big crowd talking loop — Mixkit — Mixkit Sound Effects Free License`

Skip Mixkit **Loud children crowd outdoors** (0:35) — it is vocal. Kids running is a separate, non-vocal hook.

---

### 4.6 Laser (sci-fi zap, not movie stems)

Use Kenney. Mixkit lasers are original stock, also fine.

#### Kenney Sci-fi / Digital — PRIMARY
- **Pages:** https://kenney.nl/assets/sci-fi-sounds · https://kenney.nl/assets/digital-audio
- **License:** CC0 1.0
- **Format:** OGG shorts, ~70 + 60 files
- **Hook:** `combat.laser` (dry zap), `combat.laser_fail` (down-pitch or “scan fail” from the same pack)
- **Loop:** no
- **Attribution:** `Sci-fi Sounds / Digital Audio by Kenney (www.kenney.nl) — CC0 1.0`

#### Short laser gun shot / Laser weapon shot / Laser game over (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/laser/
- **Picks:** **Short laser gun shot** 0:01 · **Laser weapon shot** 0:02 · **Laser game over** 0:02 · **Cinematic laser swoosh** 0:01
- **License:** Mixkit Sound Effects Free License
- **Hook:** `combat.laser` / `combat.laser_fail` / UI miss
- **Loop:** no
- **Attribution:** `Short laser gun shot / Laser game over — Mixkit — Mixkit Sound Effects Free License`

#### Kenney Sci-fi on OGA (mirror)
- **Page:** https://opengameart.org/content/sci-fi-sounds
- **License:** CC0
- **Hook:** same pack if kenney.nl is down
- **Loop:** no

---

### 4.7 Punch / body hit / shove / chase footsteps

#### Punch #2 (9 punches in one file) — PRIMARY
- **Page:** https://bigsoundbank.com/punches-s0444.html
- **License:** CC0 1.0
- **Format:** 00:08 · 9 hits. Slice to `punch_01`…`punch_09`.
- **Hook:** `combat.punch`
- **Loop:** no
- **Attribution:** `Punch #2 (#0444) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Punch #5 / #6 / #13 (clean singles)
- **Pages:** https://bigsoundbank.com/punch-5-s2460.html · https://bigsoundbank.com/punch-6-s2461.html · https://bigsoundbank.com/punch-13-s2468.html
- **License:** CC0 1.0
- **Format:** 00:01 each
- **Hook:** extra variants
- **Loop:** no
- **Attribution:** `Punch #5/#6/#13 by Joseph Sardin — BigSoundBank.com — CC0 1.0`

**Avoid Punch #1** (https://bigsoundbank.com/punch-s0105.html) — it includes a spoken “tiens”.

#### Strong punches to the body / Body punch quick hit / Impact of a strong punch (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/punch/
- **Picks:** **Strong punches to the body** 0:03 · **Body punch quick hit** 0:01 · **Impact of a strong punch** 0:01 · **Air in a hit** 0:01 (shove whoosh)
- **License:** Mixkit Sound Effects Free License
- **Hook:** `combat.punch`, `combat.shove`
- **Loop:** no
- **Attribution:** `Strong punches to the body — Mixkit — Mixkit Sound Effects Free License`

#### Kenney Impact Sounds
- **Page:** https://kenney.nl/assets/impact-sounds
- **License:** CC0 1.0
- **Hook:** shove / body thud if BSB punches are too dry
- **Loop:** no

#### Fast Steps on Concrete / Footsteps, Shoe on Concrete — CHASE
- **Pages:** https://bigsoundbank.com/fast-steps-on-concrete-s1318.html (01:02) · https://bigsoundbank.com/footsteps-shoe-on-concrete-s0514.html (00:11, man running in sneakers)
- **License:** CC0 1.0
- **Hook:** `npc.step.chase` on the esplanade
- **Loop:** no (slice)
- **Attribution:** `Fast Steps on Concrete (#1318) / Shoe on Concrete (#0514) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Crunchy road fast walking loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:23
- **Hook:** chase on mixed ground
- **Loop:** source looped; slice to steps
- **Attribution:** `Crunchy road fast walking loop — Mixkit — Mixkit Sound Effects Free License`

---

### 4.8 Sunscreen / lotion squeeze, wet rub, plastic bottle

Dedicated “SPF 50 squeeze” files are rare on CC0. Build the rub from **plastic bottle + water + cloth**. Record a 4-second phone take if the stand-ins fail the playtest.

#### Plastic bottle crushed #1 / #2 / #3 — SQUEEZE
- **Pages:** https://bigsoundbank.com/plastic-bottle-crushed-1-s0775.html (00:04) · https://bigsoundbank.com/plastic-bottle-crushed-2-s0776.html (00:05) · https://bigsoundbank.com/plastic-bottle-crushed-3-s0777.html (00:09)
- **License:** CC0 1.0
- **Hook:** `foley.lotion_squeeze` / `foley.bottle_plastic`. Pitch up +2 st, shorten to 200–400 ms.
- **Loop:** no
- **Attribution:** `Plastic bottle crushed (#0775–#0777) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Opening a bottle of sparkling water
- **Page:** https://bigsoundbank.com/opening-a-bottle-of-sparkling-water-s0811.html
- **License:** CC0 1.0
- **Format:** 00:03 · small plastic bottle
- **Hook:** cap twist before apply
- **Loop:** no
- **Attribution:** `Opening a bottle of sparkling water (#0811) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Glass (fill from plastic water bottle)
- **Page:** https://bigsoundbank.com/glass-s0003.html
- **License:** CC0 1.0
- **Format:** 00:13 · two takes
- **Hook:** wet pour / leftover lotion drip
- **Loop:** no
- **Attribution:** `Glass (#0003) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Splash, Small #1 / #2 — WET RUB
- **Pages:** https://bigsoundbank.com/splash-small-1-s1529.html (00:03) · https://bigsoundbank.com/splash-small-2-s1530.html (00:02)
- **License:** CC0 1.0
- **Hook:** `foley.lotion_rub` — low-pass, layer 2–3, desync 40 ms
- **Loop:** no
- **Attribution:** `Splash, Small (#1529 / #1530) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Sea water splash / Water splash / Jump into the water (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/sea/ and https://mixkit.co/free-sound-effects/splash/
- **Picks:** **Sea water splash** 0:01 · **Water splash** 0:01 · **Jump into the water** 0:02
- **License:** Mixkit Sound Effects Free License
- **Hook:** rub + surf hit
- **Loop:** no
- **Attribution:** `Sea water splash — Mixkit — Mixkit Sound Effects Free License`

#### 40 CC0 water / splash / slime SFX (OGA)
- **Page:** https://opengameart.org/content/40-cc0-water-splash-slime-sfx
- **License:** CC0
- **Hook:** slime entries double as thick lotion
- **Loop:** no
- **Attribution:** `40 CC0 water / splash / slime SFX — OpenGameArt.org — CC0`

---

### 4.9 Vape exhale / cigarette lighter (foley, not brands)

No branded clicks. Generic flint + breath.

#### Lighter — PRIMARY FLINT
- **Page:** https://bigsoundbank.com/lighter-s0049.html
- **License:** CC0 1.0
- **Format:** 00:12 · two ignitions
- **Hook:** `foley.lighter`
- **Loop:** no
- **Attribution:** `Lighter (#0049) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Cigarette, Ignition
- **Page:** https://bigsoundbank.com/cigarette-ignition-s2131.html
- **License:** CC0 1.0
- **Format:** 00:04
- **Hook:** flint + first draw. Slice off any paper hiss you do not want.
- **Loop:** no
- **Attribution:** `Cigarette, Ignition (#2131) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Cigarette #1 / #2
- **Pages:** https://bigsoundbank.com/cigarette-1-s2132.html · https://bigsoundbank.com/cigarette-2-s2133.html
- **License:** CC0 1.0
- **Format:** 00:02 each
- **Hook:** ember crackle under a held vape
- **Loop:** no
- **Attribution:** `Cigarette #1/#2 (#2132 / #2133) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Sigh by the Mouth — EXHALE
- **Page:** https://bigsoundbank.com/sigh-by-the-mouth-s1405.html
- **License:** CC0 1.0
- **Format:** 00:05
- **Hook:** `foley.vape_exhale`. Low-pass, shorten to 0.6 s, add 80 ms of `Air leak` below.
- **Loop:** no
- **Attribution:** `Sigh by the Mouth (#1405) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Air leak
- **Page:** https://bigsoundbank.com/air-leak-s1486.html
- **License:** CC0 1.0
- **Format:** 00:22
- **Hook:** vapour hiss layer
- **Loop:** no (slice 200 ms)
- **Attribution:** `Air leak (#1486) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Blow on hand
- **Page:** https://bigsoundbank.com/blow-on-hand-s0747.html
- **License:** CC0 1.0
- **Format:** 00:50
- **Hook:** alt exhale / dry-off after rub
- **Loop:** no
- **Attribution:** `Blow on hand (#0747) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

---

### 4.10 Helicopter flyover (factory recall)

One rare stinger. Do not loop.

#### Helicopter (Transition) — PRIMARY
- **Page:** https://bigsoundbank.com/helicopter-transition-s0113.html
- **License:** CC0 1.0
- **Format:** 00:18
- **Hook:** `world.heli` factory-recall flyover. Pan L→R with the 3D panner.
- **Loop:** no
- **Attribution:** `Helicopter (Transition) (#0113) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Two helicopters flying
- **Page:** https://bigsoundbank.com/two-helicopters-flying-s0861.html
- **License:** CC0 1.0
- **Format:** 01:02 · bird cry at the start — trim it
- **Hook:** alt flyover
- **Loop:** no
- **Attribution:** `Two helicopters flying (#0861) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Helicopter #2 (outside)
- **Page:** https://bigsoundbank.com/helicopter-2-s0264.html
- **License:** CC0 1.0
- **Format:** 00:05
- **Hook:** short pass if 0113 is too long
- **Loop:** no
- **Attribution:** `Helicopter #2 (#0264) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

Skip the 3–4 minute takeoff sets (`s2732` etc.). Too big.

#### Helicopter flying far away / Helicopter flying in the sky (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/helicopter/
- **Picks:** **Helicopter flying far away** 0:26 (and a 0:45 take) · **Helicopter flying in the sky** 0:19 · **Vibrating wind passing by** 0:05
- **License:** Mixkit Sound Effects Free License
- **Hook:** `world.heli` if BSB is too dry
- **Loop:** no
- **Attribution:** `Helicopter flying far away — Mixkit — Mixkit Sound Effects Free License`

---

### 4.11 UI ticks / radio static / station ID whoosh

#### Kenney Interface — PRIMARY TICKS
- **Page:** https://kenney.nl/assets/interface-sounds
- **Also:** https://kenney.nl/assets/ui-audio (50 files, CC0)
- **License:** CC0 1.0
- **Hook:** `ui.tick` (prev/next/pause on Reticule FM)
- **Loop:** no
- **Attribution:** `Interface Sounds / UI Audio by Kenney (www.kenney.nl) — CC0 1.0`

#### Crackling Radio #1 / #2 — STATIC
- **Pages:** https://bigsoundbank.com/crackling-radio-1-s0312.html (00:05) · https://bigsoundbank.com/crackling-radio-2-s0313.html (00:04)
- **License:** CC0 1.0
- **Hook:** `amb.radio_static` between tracks, 200–600 ms
- **Loop:** optional (short bed under seek)
- **Attribution:** `Crackling Radio (#0312 / #0313) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Radio, Frequency Sweep #2
- **Page:** https://bigsoundbank.com/radio-frequency-sweep-2-s2618.html
- **License:** CC0 1.0
- **Format:** 00:12
- **Hook:** seek / station change
- **Loop:** no
- **Attribution:** `Radio, Frequency Sweep #2 (#2618) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Radio Interference #1
- **Page:** https://bigsoundbank.com/radio-interference-1-s0310.html
- **License:** CC0 1.0
- **Format:** 00:08
- **Hook:** failed tune / laser-jam flavour
- **Loop:** no
- **Attribution:** `Radio Interference #1 (#0310) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Whoosh #7 / #8 — STATION ID
- **Pages:** https://bigsoundbank.com/whoosh-7-s1800.html · https://bigsoundbank.com/whoosh-8-s1801.html
- **License:** CC0 1.0
- **Format:** 00:01 · metal-tube whoosh
- **Hook:** `ui.whoosh` / `ui.station_id` before DJ line `dj_open_01`
- **Loop:** no
- **Attribution:** `Whoosh #7/#8 (#1800 / #1801) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Mixkit whooshes
- **Page:** https://mixkit.co/free-sound-effects/wind/
- **Picks:** **Short wind swoosh** 0:01 · **Cinematic wind swoosh** 0:01 · **Transition windy swoosh** 0:03 · **Whoosh wind sweep** 0:01
- **License:** Mixkit Sound Effects Free License
- **Hook:** station ID / menu
- **Loop:** no
- **Attribution:** `Short wind swoosh — Mixkit — Mixkit Sound Effects Free License`

---

### 4.12 Water splash / wave crash close

#### Splash, Big #1 / #3
- **Pages:** https://bigsoundbank.com/splash-big-1-s1519.html (00:03) · https://bigsoundbank.com/splash-big-3-s1521.html (00:04)
- **License:** CC0 1.0
- **Hook:** `world.splash` (player / NPC enters surf)
- **Loop:** no
- **Attribution:** `Splash, Big (#1519 / #1521) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Small Waves, Froth and Beach (re-use)
- **Page:** https://bigsoundbank.com/small-waves-froth-and-beach-s1447.html
- **Hook:** slice one crash peak as `world.wave_crash`
- **Loop:** no (for the crash one-shot)

#### Cliff #1 (distant crash bed)
- **Page:** https://bigsoundbank.com/cliff-1-s2570.html
- **License:** CC0 1.0
- **Format:** 05:33 — **do not commit whole**. Slice one 2 s crash.
- **Hook:** heavy shore-break
- **Loop:** no
- **Attribution:** `Cliff #1 (#2570) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Mixkit
- **Page:** https://mixkit.co/free-sound-effects/sea/
- **Picks:** **Jump into the water** 0:02 · **Sea water splash** 0:01 · **Gentle sea wave** 0:04 · **Sea wave noise** 0:02 · **Sea coast breaking waves** 2:00 (trim)
- **License:** Mixkit Sound Effects Free License
- **Hook:** splash + crash
- **Loop:** only the 2:00 bed, after trim
- **Attribution:** `Jump into the water / Sea water splash — Mixkit — Mixkit Sound Effects Free License`

---

### 4.13 Gull wing flap

No isolated “silver gull wing” CC0 file turned up. Use small bird flutter, pitched down.

#### Small bird flutter / Bird movement while flying (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/flying/
- **Picks:** **Small bird flutter** 0:02 · **Bird movement while flying** 0:05
- **License:** Mixkit Sound Effects Free License
- **Hook:** `world.gull_flap` when a gull mesh launches. Pitch −3 to −5 st, HPF 400 Hz.
- **Loop:** no
- **Attribution:** `Small bird flutter — Mixkit — Mixkit Sound Effects Free License`

#### Flag #2 / #3 (nylon flap stand-in)
- **Pages:** https://bigsoundbank.com/flag-2-s1788.html (00:01) · https://bigsoundbank.com/flag-3-s1789.html (00:04)
- **License:** CC0 1.0
- **Hook:** wing leather if Mixkit flutter is too tiny
- **Loop:** no
- **Attribution:** `Flag #2/#3 (#1788 / #1789) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

If playtest fails, record 2 seconds of a tea-towel snap. Own recording, CC0 to the repo.

---

### 4.14 Kids running on sand (generic, not vocal)

No kids’ voices. Fast light steps only.

#### Fast Steps on Concrete (slice, pitch up)
- **Page:** https://bigsoundbank.com/fast-steps-on-concrete-s1318.html
- **License:** CC0 1.0
- **Format:** 01:02
- **Hook:** `npc.step.kids_run` — pitch +2 to +4 st, shorten gaps
- **Loop:** no
- **Attribution:** `Fast Steps on Concrete (#1318) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Running in the Tall Grass
- **Page:** https://bigsoundbank.com/running-in-the-tall-grass-s1843.html
- **License:** CC0 1.0
- **Format:** 00:20
- **Hook:** kids across dunes
- **Loop:** no
- **Attribution:** `Running in the Tall Grass (#1843) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Running out from sea (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/sea/ (title: **Running out from sea**, 0:08)
- **License:** Mixkit Sound Effects Free License
- **Format:** 0:08
- **Hook:** kids leaving the wash — best literal match
- **Loop:** no
- **Attribution:** `Running out from sea — Mixkit — Mixkit Sound Effects Free License`

#### Crunchy road fast walking loop (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/
- **License:** Mixkit Sound Effects Free License
- **Hook:** extra kids-run variants
- **Loop:** no (slice)

---

### 4.15 Wind / palm rustle

No labelled “palm frond” CC0 file. Use **wind in shrub / tall grass / tree**, HPF, keep it thin.

#### Wind in Tall Grass — PRIMARY
- **Page:** https://bigsoundbank.com/wind-in-tall-grass-s0908.html
- **License:** CC0 1.0
- **Format:** 01:26
- **Hook:** `amb.wind_palms`
- **Loop:** yes (trim 12 s)
- **Attribution:** `Wind in Tall Grass (#0908) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Wind in shrub
- **Page:** https://bigsoundbank.com/wind-in-shrub-s0907.html
- **License:** CC0 1.0
- **Format:** 03:01 — trim
- **Hook:** closer palm layer
- **Loop:** yes after trim
- **Attribution:** `Wind in shrub (#0907) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Strong Wind #1 (pine needles + bird)
- **Page:** https://bigsoundbank.com/strong-wind-1-s0146.html
- **License:** CC0 1.0
- **Format:** 01:18
- **Hook:** stormier palm
- **Loop:** yes after trim
- **Attribution:** `Strong Wind #1 (#0146) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Windy sea loop / Breeze through the trees / Wind blowing ambience (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/wind/ and https://mixkit.co/free-sound-effects/sea/
- **Picks:** **Windy sea loop** 0:30 · **Breeze through the trees** 0:14 · **Wind blowing ambience** 1:01 · **Wind in the forest** 0:25
- **License:** Mixkit Sound Effects Free License
- **Hook:** `amb.wind_palms` / sea breeze
- **Loop:** yes
- **Attribution:** `Windy sea loop / Breeze through the trees — Mixkit — Mixkit Sound Effects Free License`

---

### 4.16 Metal / chrome footsteps (AUS101)

Robot / chrome gait on the esplanade. Mix a dry metal tick on each Kenney/RPG step.

#### 100 CC0 metal and wood SFX — PRIMARY METAL BANK
- **Page:** https://opengameart.org/content/100-cc0-metal-and-wood-sfx
- **License:** CC0
- **Hook:** `player.step.chrome` — pick 4 short metal ticks
- **Loop:** no
- **Attribution:** `100 CC0 metal and wood SFX — OpenGameArt.org — CC0`

#### Tin can #1
- **Page:** https://bigsoundbank.com/tin-1-s0246.html
- **License:** CC0 1.0
- **Format:** 00:02
- **Hook:** chrome foot impact
- **Loop:** no
- **Attribution:** `Tin can #1 (#0246) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Metal bucket
- **Page:** https://bigsoundbank.com/metal-bucket-s0543.html
- **License:** CC0 1.0
- **Format:** 00:21
- **Hook:** slice handling hits as steps
- **Loop:** no
- **Attribution:** `Metal bucket (#0543) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Small metal grinding #1
- **Page:** https://bigsoundbank.com/petit-grincement-metal-1-s0322.html
- **License:** CC0 1.0
- **Format:** 00:02
- **Hook:** servo scrape on turn
- **Loop:** no
- **Attribution:** `Small metal grinding #1 (#0322) by Joseph Sardin — BigSoundBank.com — CC0 1.0`

#### Robot step (Mixkit)
- **Page:** https://mixkit.co/free-sound-effects/footsteps/ (title: **Robot step**, 0:01)
- **License:** Mixkit Sound Effects Free License
- **Hook:** `player.step.chrome` one-shot
- **Loop:** no
- **Attribution:** `Robot step — Mixkit — Mixkit Sound Effects Free License`

#### Kenney Impact (metal subset)
- **Page:** https://kenney.nl/assets/impact-sounds
- **License:** CC0 1.0
- **Hook:** extra chrome ticks
- **Loop:** no

---

## 5. Suggested first checkout (stay under 2.5 MB encoded)

Download **only** these. Encode, then delete source WAV/OGG.

| # | File | Role | Loop? |
|---|---|---|---|
| 1 | BSB 0266 Sea: Waves | `amb.ocean` | loop |
| 2 | BSB 1447 Froth and Beach | `amb.shore_close` | loop |
| 3 | OGA Solo Seagulls (3 cries) | `world.gull_cry` | one-shot |
| 4 | BSB 2573 Gulls on Harbor (trim) | `amb.gulls` | loop |
| 5 | Mixkit Light rain loop 0:15 | `amb.rain` | loop |
| 6 | BSB 0124 Rain and Thunder #1 | `amb.storm` | one-shot |
| 7 | BSB 0839 Feet on pebbles | `step.sand_*` | one-shot |
| 8 | BSB 0495 Steps in the Mud | `step.sand_wet` | one-shot |
| 9 | BSB 1845 Walk on Pontoon | `step.boardwalk` | one-shot |
| 10 | BSB 0166 Heels #1 | `step.sand_f` | one-shot |
| 11 | BSB 3094 Outside Talks #4 | `amb.crowd_boardwalk` | loop |
| 12 | Mixkit Very crowded pub 0:36 | `amb.party` | loop |
| 13 | Kenney Sci-fi (2 lasers) | `combat.laser` / fail | one-shot |
| 14 | BSB 0444 Punch #2 (slice 4) | `combat.punch` | one-shot |
| 15 | Mixkit Air in a hit | `combat.shove` | one-shot |
| 16 | BSB 0514 Shoe on Concrete | `step.chase` | one-shot |
| 17 | BSB 0775 Plastic bottle crushed | `foley.lotion_squeeze` | one-shot |
| 18 | BSB 1529 Splash Small #1 | `foley.lotion_rub` | one-shot |
| 19 | BSB 0049 Lighter | `foley.lighter` | one-shot |
| 20 | BSB 1405 Sigh by the Mouth | `foley.vape_exhale` | one-shot |
| 21 | BSB 0113 Helicopter Transition | `world.heli` | one-shot |
| 22 | Kenney Interface (4 clicks) | `ui.tick` | one-shot |
| 23 | BSB 0312 Crackling Radio #1 | `amb.radio_static` | one-shot |
| 24 | BSB 1801 Whoosh #8 | `ui.station_id` | one-shot |
| 25 | BSB 1519 Splash Big #1 | `world.splash` | one-shot |
| 26 | Mixkit Small bird flutter | `world.gull_flap` | one-shot |
| 27 | Mixkit Running out from sea | `step.kids_run` | one-shot |
| 28 | BSB 0908 Wind in Tall Grass | `amb.wind_palms` | loop |
| 29 | Mixkit Robot step + OGA metal tick | `step.chrome` | one-shot |
| 30 | Mixkit Jump into the water | `world.wave_crash` | one-shot |

Rough encoded total: **8 loops × ~70 KB + 40 one-shots × ~12 KB ≈ 1.0–1.4 MB**. Room left for 3 extra step variants and 2 extra punches.

---

## 6. CREDITS.md block (paste)

```
## Sound effects

Interface Sounds, Impact Sounds, Sci-fi Sounds, Digital Audio, RPG Audio, UI Audio
by Kenney (www.kenney.nl) — CC0 1.0
https://kenney.nl/assets/category:Audio

Additional sounds: Joseph Sardin — BigSoundBank.com — CC0 1.0
https://bigsoundbank.com
Including (non-exhaustive): #0266 Sea: Waves, #1447 Small Waves Froth and Beach,
#2573 Gulls on the Harbor, #0839 Feet on pebbles, #0495 Steps in the Mud,
#1845 Walk on Pontoon, #0166 Heels, #3094 Outside Talks #4, #0444 Punch #2,
#0775 Plastic bottle crushed, #0049 Lighter, #1405 Sigh by the Mouth,
#0113 Helicopter (Transition), #0312 Crackling Radio, #1801 Whoosh,
#1519 Splash Big, #0908 Wind in Tall Grass.

Solo Seagull Sound Effects by Rango Mango — OpenGameArt.org — CC0
https://opengameart.org/content/solo-seagull-sound-effects

100 CC0 SFX / 100 CC0 metal and wood SFX — OpenGameArt.org — CC0
https://opengameart.org/content/100-cc0-sfx
https://opengameart.org/content/100-cc0-metal-and-wood-sfx

Mixkit sound effects (used inside AUS101 as an End Product, not redistributed as stock)
— Mixkit Sound Effects Free License
https://mixkit.co/free-sound-effects/
https://mixkit.co/license/#sfxFree

If InspectorJ seaside bed is used:
"Ambience, Seaside Waves, Close, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org
https://freesound.org/people/InspectorJ/sounds/400632/
```

---

## 7. Reject / do not use

| Source | Why |
|---|---|
| https://sound-effects.bbcrewind.co.uk | RemArc: personal/education only. Commercial needs a paid licence. |
| YouTube “no copyright” ocean hours | Not a licence. Often Content-ID claimed. |
| Movie / game laser and punch rips | Copyright stems. Use Kenney / Mixkit. |
| Sonniss full GDC zips (7–27 GB) | Licence is fine for games; the archive is not. Do not pull it for a 2 MB budget. Cherry-pick later from https://sonniss.com/gameaudiogdc/ if a hole remains. Licence: https://sonniss.com/gdc-bundle-license/ |
| Freesound CC-BY-NC | Cannot ship in a commercial or unclear-use game. Filter `license:"Creative Commons 0"` or CC-BY. |
| Mixkit/Pixabay as a “free SFX pack” in the repo | Licence forbids standalone redistribution. Files must live as game assets. |
| SoundBible as a default | Many files are Attribution 3.0 with uneven provenance. Check per file or skip. |
| BSB Punch #1 (`s0105`) | Contains a spoken “tiens”. |
| Mixkit “Loud children crowd outdoors” | Vocal. Violates “kids running, not vocal”. |
| InspectorJ 5:00 / 76 MB WAV as committed | Encode a 12 s slice only. |

---

## 8. Mix notes for AUS101

- Ocean + wind + crowd are always-on 2D beds. Gull cries and heli are 3D (`PannerNode`, same as VO).
- Footsteps: random of 3–5, never the same index twice in a row. Rate-limit to gait.
- Apply rub: `bottle` → `squeeze` → 3× `rub` while the reticle is held. Duck ocean −3 dB on that bus.
- Radio: `static` 300 ms → `whoosh` → DJ line. Ticks on `[` `]` `P`.
- Laser fail: Kenney down-pitch, not a movie death ray.
- Chrome AUS101 steps: metal tick + sand step, 70/30, so the machine still reads as “on the beach”.

---

## 9. Source index (search pages)

- Kenney audio index: https://kenney.nl/assets/category:Audio
- BigSoundBank sea: https://bigsoundbank.com/search?q=wave
- BigSoundBank footsteps: https://bigsoundbank.com/search?q=footsteps
- BigSoundBank crowd: https://bigsoundbank.com/search?q=crowd
- BigSoundBank helicopter: https://bigsoundbank.com/search?q=helicopter
- BigSoundBank punch: https://bigsoundbank.com/search?q=punch
- Mixkit sea: https://mixkit.co/free-sound-effects/sea/
- Mixkit rain: https://mixkit.co/free-sound-effects/rain/
- Mixkit crowd: https://mixkit.co/free-sound-effects/crowd/
- Mixkit laser: https://mixkit.co/free-sound-effects/laser/
- Mixkit helicopter: https://mixkit.co/free-sound-effects/helicopter/
- Mixkit punch: https://mixkit.co/free-sound-effects/punch/
- Mixkit footsteps: https://mixkit.co/free-sound-effects/footsteps/
- Mixkit wind: https://mixkit.co/free-sound-effects/wind/
- Mixkit splash: https://mixkit.co/free-sound-effects/splash/
- Pixabay seagulls: https://pixabay.com/sound-effects/search/seagull/
- Freesound CC0 filter example: https://freesound.org/search/?q=ocean&f=license%3A%22Creative+Commons+0%22
- Sonniss archive (do not bulk-download): https://sonniss.com/gameaudiogdc/
