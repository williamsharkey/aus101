# AUS101 — implementation audit

**Date:** 2026-08-19 · **Against:** `docs/DESIGN.md` (1567 lines), `docs/sfx-catalog.md`
**Scope:** design-vs-implementation gap, asset quality, runtime health, play-feel.
**Method:** full read of `src/**` and `docs/DESIGN.md`; headless Chromium boot of the committed
`dist/` with a request logger (404s, byte counts); a clean rebuild of `tools/shots/harness.js`
*without* `tools/shots/extras/` for honest draw-call numbers; node repro for the crash in A-1;
static analysis of `assets/voice/manifest.json` vs `tools/voice/lines.json` vs the walk-by
director's tag filter.

> Line numbers in files under active edit by other agents
> (`gadgets.js`, `artist.js`, `recall.js`, `panic.js`, `npcs.js`, `goldCoast.js`, `aus101.js`)
> were correct at the time of writing and may have drifted; the quoted code is the anchor.

Severity: **P0** ship-blocker · **P1** player-visible, high · **P2** player-visible, medium · **P3** hygiene.
Size: **S** ≲1 h · **M** ≲½ day · **L** 1–3 days · **XL** >3 days.

---

## Executive summary — the ten worth doing next

| # | Finding | Sev | Size | Where |
|---|---|---|---|---|
| 1 | **Hard crash / freeze**: two fake `cast` entries with no `userData` are paintable; holding Space near a guitar spot throws inside the rAF loop and the screen stops updating | P0 | S | `src/main.js:89-93` + `src/game/coverage.js:88-92` |
| 2 | **There is no game.** No win check, no `minPatch`, no score, no overpaint, no bottle-dry lose, no sunburn lose, no game-over card. `RULES` (§5.1) does not exist | P0 | XL | `src/game/*`, missing `src/sim/rules.js` |
| 3 | **Draw calls 2 284–3 079 vs a budget of 45; 128 k–187 k tris vs 90 k.** Every body is ~60–200 separate `Mesh` nodes | P0 | L | `src/chars/npcs.js`, `src/chars/t101.js`, `src/world/goldCoast.js` |
| 4 | **17.7 MB pulled in the first ~15 s of a mobile-first build** — 14 `<video>` elements, 9 MP4s at `preload="auto"`, the 5 PSA clips fetched twice | P0 | M | `src/world/gadgets.js:22-31,445-462`; `src/world/psa.js:186-199` |
| 5 | **Voice bank is 14.7 MB at 224 kbps** where the design mandates 32 kbps mono / ≤4 MB. One ffmpeg pass reclaims ~12.6 MB | P1 | S | `assets/voice/*.mp3` |
| 6 | **Esc → resume replays the entire opening cutscene** and re-runs `beginPlay()` | P1 | S | `src/poster/PosterOverlay.js:141-148` + `src/main.js:277-285` |
| 7 | **101 of 224 baked VO lines (5.58 MB, 38 %) are unreachable** — all 10 heckles, 11 of 12 rub lines, all 12 HUD lines, 49 DJ quips, every overpaint/chase line | P1 | M | `src/audio/walkby.js:16-23`, `src/hud/radio.js:248-268`, `src/main.js:358` |
| 8 | **Punch and laser are unreachable on touch** and the two keys are swapped vs the design (`F`=laser, `G`=punch) | P1 | S | `src/main.js:128-138`; `src/input/touchControls.js` |
| 9 | **SFX bank is 13 of 30 files / 152 KB of a 1.5–2.5 MB budget** — no heli, punch, laser, splash, gulls, crowd, wind, UI. The recall setpiece lands in silence | P1 | M | `assets/sfx/foley/` |
| 10 | **The poster — the public face on laserbarf — is a flat vector placeholder with a doubled, overlapping wordmark** | P1 | M | `assets/poster/og.webp`, `src/poster/PosterOverlay.js:36-87` |

Two structural notes that colour everything below:

- **The product is a sunset, not noon.** `setupGoldCoastLights` ships a purple/pink sunset sky
  (`scene.background = 0xc45c68`, sun `0xffc080`) against Key Decision 9 ("Noon is the product") and
  the frozen `LIGHTS` table. That is defensible as a deliberate art change — but it is currently
  undocumented, and it removes the premise (harsh AU noon / hostile UV) that the erythema and
  white-cast systems were meant to sell.
- **Nothing in `§5.1 Systems` shipped as specified.** Coverage is a CPU 128² stamp map driven by a 2D
  DOM body-map panel, not the UV render-target paint pass with `ApplyRig`, thickness, aniso kernel
  and drips. That is a legitimate simplification, but the *consequences* — no `minPatch`, no cloth
  overpaint, no win — were never backfilled, which is why there is no game loop (finding 2).

---

## A. Crashes and correctness

### A-1 · P0 · Painting near a guitar spot throws and freezes the frame — S
`src/main.js:89-93` pushes pseudo-NPCs into `cast`:
```js
cast.push({ mesh: { position: spot.position }, kind: "ken", ageBand: "adult" });
```
That object has no `userData`. `isPaintable()` defends with `mesh.userData || {}` and returns **true**
(adult, kind `ken`), but `ensureCoverageMap` at `src/game/coverage.js:91` does the undefended read:
```js
const ud = mesh.userData;
if (ud.coverageMap) return ud.coverageMap;   // TypeError
```
`applyCoverageToMats` (`coverage.js:207`) has the same hazard.

**Verified:** node repro importing `src/game/apply.js` with exactly the object `main.js` pushes —
`pickApplyTarget -> true`, then `TypeError: Cannot read properties of undefined (reading 'coverageMap')`.
The throw happens inside `frame()` *after* `requestAnimationFrame(frame)` but *before*
`renderer.render`, so every subsequent frame aborts at the same line: the picture freezes while the
loop keeps spinning. The guitar spots are at `(-6,0,5)` and `(5,0,3)` — open sand, ~5 m from spawn.

**Done when:** either the guitar "NPCs" carry a real mesh with `userData`, or `isPaintable` requires
a real `Object3D` (`typeof mesh.traverse === "function"`), or `ensureCoverageMap`/`applyCoverageToMats`
use `mesh.userData || (mesh.userData = {})`. Belt-and-braces: wrap the body of `frame()` so one
throw cannot kill rendering forever.

### A-2 · P2 · `createFollowCam()` returns a fresh object but stores state in a module singleton — S
`src/input/thirdPerson.js:17` `const _state = {ready:false}` is shared across every camera the
factory hands out. Harmless today (one camera), a silent bug the moment POSTER1 or a cutscene camera
lands. **Done when:** `ready` lives on the returned object.

---

## B. The game loop — what is actually a stub

The design's whole mission (`§5.1`, `§14.5`, fail table) is unimplemented. These are separate
findings because they can land independently.

### B-1 · P0 · No `src/sim/rules.js`; no shared constants — S
`§5.1` specifies a frozen `RULES` object (`winMeanCoverage 0.92`, `winMinPatch 0.40`,
`overpaintNoticeMl 8`, `overpaintChaseMl 12`, `swarmLockS 2.4`, `swarmHullCap 8`, `bottleMl 200`,
`subjects 12`). **Verified:** `grep -rn "winMeanCoverage\|swarmHullCap\|RULES" src/` returns nothing;
`src/sim/` does not exist. Every threshold is a magic number in a different file
(`recall.js:46 HULL_MIN=6`, `lotion.js:6 BOTTLE_ML=200`, `reticule.js:9 FREEZE_AT=0.85`).
**Done when:** `src/sim/rules.js` exports the frozen table and `lotion.js`, `recall.js`, `reticule.js`
and the win check read it.

### B-2 · P0 · No win condition — M
Nothing computes mean coverage across subjects, nothing compares to 0.92, nothing marks a subject
`complete`, nothing walks a finished subject off the bay, nothing shows a win card.
**Verified:** `grep -rn "0.92\|minPatch\|win\b" src/` finds only CSS alpha values and unrelated
identifiers. **Done when:** a `mission.tick()` owns slot FSM
`tracked → applying → complete|chase|gone`, and 12 `complete` shows the win card with
`score = 1000 * meanCoverage * (1 - 0.5 * overpaintPenalty)`.

### B-3 · P0 · `minPatch` is not computable — M
`§5.1` win requires "no patch < 0.40". `coveragePercent` (`src/game/coverage.js:178-187`) returns only
`coated / skinCount` — a scalar mean. There is no percentile over the map, so the second half of the
win condition cannot be evaluated at all. **Done when:** `coverage.js` exposes
`coverageStats(npc) → {mean, p05}` computed from `map.thick` on a throttled interval (the design's
64×64 blit equivalent), and the win check uses `p05 ≥ 0.40`.

### B-4 · P0 · Overpaint / chase does not exist — L
Key Decision 7: "ClothMask is a paint reject for **coverage**, not a pick reject — painting trunks
triggers chase." `src/game/apply.js:101` does the opposite:
```js
if (hitsCloth(best, u, v)) continue;   // cloth is simply skipped
```
No `overpaintMl` counter anywhere (`grep -rn overpaint src/` → 0 hits). Consequence: the
`overpaint` (3) and `chase` (3) baked MP3s can never play, the `OVERPAINT`/`CHASE` archetypes are
dead, the "overpaint-chase" fail row of the fail table is dead, and the design's stated central joke
is absent from the build. **Done when:** cloth texels accumulate `overpaintMl`; 8 ml fires an
`overpaint` line; 12 ml flips the slot to `chase`, spawns a path-following NPC and a grab check at
`dist < 0.55 m for 0.4 s`.

### B-5 · P1 · The bottle is not a clock — S
`src/game/lotion.js` tracks `bottleMl` down from 200 correctly, but **nothing reads it**. There is no
`bottle-dry` lose (`"200 ml. That's the joke."`), no HUD readout of remaining ml, no drip system
(`dripRateMlS`, sand decals, the 40 ml `drown-drip` warning), no 4 ml `loaded` floor — `canPaint()`
is `handMl > 0` and `STARTER_ML = 1` tops the palm up on the first squeeze frame, so squeeze-and-rub
never gates. **Verified:** `grep -rn "bottleMl" src/` → only `lotion.js` and `bottle.js` (the palm
blob scale). **Done when:** bottle ml is on the HUD, `bottleMl === 0` with mean < 0.92 ends the run,
and `handMl ∈ [4,6]` gates `loaded`.

### B-6 · P1 · The reticule bay starts empty and never fills — S
`§5.1`: "Boot: 12 subjects spawn in a 28 m beach strip. Each slot = `tracked`." In practice `bay.track`
is called from exactly one place — `src/game/applyFlow.js:30`, only when a stamp lands. Until the
player successfully paints someone, all 12 cells read `SUBJECT nn // ——` (visible in the boot
screenshot). The player is never told who the targets are or how many remain.
**Done when:** `main.js` seeds the bay from `cast` at spawn.

### B-7 · P1 · Only 8 paintable subjects exist, not 12 — S
`src/chars/npcs.js:731-772` spawns 4 `ken` + 4 `babe` + 2 `goth` + 2 `sigma_07` + 2 `kid` + 2 `gull`.
Goth and SIGMA_07 are hard-excluded from paint (`coverage.js:13 SKIP_KIND`), kids and gulls by
age band. So the maximum reachable bay occupancy is **8**, and a 12-subject win is unreachable by
construction. **Verified:** `grep -oE 'kind: "[a-z_0-9]+"' src/chars/npcs.js | sort | uniq -c`.
**Done when:** the cast carries 12 adult ken/babe paint targets (goth/SIGMA stay non-targets as
designed) or `RULES.subjects` matches the real cast.

### B-8 · P1 · Sunburn is cosmetic — S
`src/hud/reticule.js:250-271` accrues `slot.dose` at `DOSE_RATE 0.02 * (1 - cov)` and flips
`slot.burn` past 1.0 — which only makes the HUD cell flash red. The fail table requires the subject
to leave angry, the slot to go `gone`, and three such losses to end the run. Also: dose only ticks
for slots the bay has tracked, which (per B-6) is nobody until you paint them.
**Done when:** burn removes the subject and counts toward the 3-strike lose.

### B-9 · P1 · Game over has no card and no restart — S
`src/main.js:114-119`:
```js
onGameOver: () => { playing = false; carpenter?.setState("menu"); }
```
That sets `raw = 0`, so the camera snaps to the static `(8, 6.5, 22)` establishing shot at
`main.js:364-367` and the run is over with no text, no score, no restart. `§5.1` requires a game-over
card separate from the poster, a restart CTA, `glClear` of the maps and a sim reset on the same GL
context (Key Decision 18). **Done when:** a card DOM node with cause-of-death copy + restart that
resets `lotion`, coverage maps, bay slots and `recall`/`panic` without recreating the renderer.

### B-10 · P2 · `ApplyRig` / apply camera never landed — L
`§5.1` specifies two cameras on one renderer, `ApplyRig` (yaw/pitch/radius, `enterLerpS 0.22`,
`exitLerpS 0.18`, 1.8 m enter ray, 2.4 m leash, 180 ms release). What ships is `src/hud/applyMinigame.js`
— a 2D DOM body-map panel that writes into the same CPU coverage map. That is a workable substitute,
but it means: no surface-locked orbit, no arc-length brush spacing, no anisotropic smear, no 3D
paint feedback on the body you are looking at, and no reason for the player to move. Decide
explicitly: either write the ApplyRig, or amend §5.1 so the 2D panel is the shipped design.

### B-11 · P2 · No onboarding at all — S
Design leans on "White-cast + erythema carry the tutorial. No popup." Neither white-cast nor erythema
exists (see C-1), and there is no controls legend. A first-time player has no way to discover Space,
`F`/`G`, `P`/`[`/`]`, or that painting is the goal. **Done when:** at minimum the first AUS101 HUD VO
line fires on spawn and the bay shows a "0/12 COATED" objective.

---

## C. Design divergences the player can see

### C-1 · P1 · No skin shader: no white-cast, no erythema, no clearcoat — L
`§5.1 Skin lighting` mandates one `MeshPhysicalMaterial` subclass in `src/mat/skin.js` with
`clearcoat = 0.55 * coverage`, thickness-driven white-cast, `UvDoseMap` and erythema
(`albedo *= mix(1.0, vec3(1.0,0.45,0.42), smoothstep(0.55,1.0,uvDose))`). **Verified:** `src/mat/`
does not exist; `grep -rn "clearcoat\|erythema\|uvDose" src/` → 0. What ships is
`applyCoverageToMats` (`coverage.js:204-217`), a per-material colour lerp toward zinc plus a
roughness/metalness tweak. Unpainted skin never reddens, so "miss is a colour, not a number" is not
in the build. **Done when:** unpainted skin visibly reddens under dose and painted skin reads as a
zinc stripe, not just a paler diffuse.

### C-2 · P1 · Punch/laser keys are swapped and unreachable on touch — S
`§5.1`: "Punch = two-finger or `F`. Laser = three-finger or `G`." `src/main.js:130-137` binds
`KeyF → commitViolence("laser")` and `KeyG → commitViolence("punch")`. There is **no** touch path:
`grep -n "punch\|laser" src/input/touchControls.js` returns nothing, so on the mobile-first target
the Terminator half of the game is unreachable. **Done when:** F=punch, G=laser, plus 2-finger and
3-finger gestures in `touchControls.js`.

### C-3 · P1 · Esc → resume replays the whole intro — S
`PosterOverlay.showAsPause()` (`src/poster/PosterOverlay.js:141-148`) sets `this._started = false`.
The next tap therefore re-runs `onStart`, which in `main.js:277-285` fires
`voice.play("factory_recall_01")` and `reel.start()` — the full 6-still, ~16 s opening cutscene —
and its `onDone` calls `beginPlay()` again (`clock.start()`, `tryLock()`, `dj_open_01` replay).
**Done when:** pause/resume uses a separate `resume()` path that skips the reel and the cold open.

### C-4 · P2 · The Esc pause table is only half honoured — S
Against `§5.0 Esc / pause table`: sim clock ✓ frozen (`raw = 0`), pointer lock ✓ released, HUD ✓
covered by the z-20 poster. **Not** honoured: Carpenter is set to `"menu"` rather than suspended;
the ocean bed, `shades`, the three local beds and the tape deck keep playing at full gain; ApplyMode
is not force-exited (`applyUx` stays mounted); `installLotionFoley`'s global keydown listener
(`src/audio/sfx.js:100-116`, wired with `keys = null` at `main.js:98`) still fires lotion Foley on
Space while the poster is up.

### C-5 · P2 · Follow camera has no occlusion handling — M
`src/input/thirdPerson.js:35-63` lerps to a fixed `(back 4.2, height 2.1)` offset with no raycast
against `colliders.COL` and no pull-in. **Verified:** the play screenshot taken 15 s after boot has
the camera *inside* a beach umbrella and behind a table — the player robot is not visible at all.
Spawn is `(0,0,10)` with `boardwalkZ = 16`, so the camera starts at `z ≈ 14.2`, in the deck furniture.
**Done when:** the cam sphere-casts to the player and shortens `back` on a hit, and spawn is clear.

### C-6 · P2 · World geometry diverges from the coordinate frame in §5.2 — (world file is owned elsewhere; noted, not for me to fix)
`src/world/goldCoast.js:33-46`: `GC = {width:90, depth:70}`, `boardwalkZ:+16`, `oceanZ:−22`. The design
specifies 80 × 50 m with **+Z seaward** (0 = boardwalk face, +38 mean water, +50 wade clip), a 12 m
boardwalk at `Y = 1.1`, stairs at `X = ±24`, tower deck `Y = 4.8`. The sign of the sea axis is
inverted and the rectangle is 2.4× the budgeted area. Related: `src/input/player.js` never writes
`player.pos.y`, so the band floors (`boardwalk 1.1`, `wet −0.25`, `wade −0.9`) do not exist — the
player walks at `Y = 0` through everything.

### C-7 · P2 · POSTER1 (live tableau) never landed — M
`src/poster/PosterOverlay.js:4` still says "Live Three tableau (POSTER1) comes after CHAR0". CHAR0 has
landed (`src/chars/` has AUS101, ken, babe, SIGMA_07), so POSTER1 is now unblocked and overdue. The
human first paint is currently a stretched 400×400 vector JPEG (see E-6).

### C-8 · P3 · Missing shell contract items — S
`src/shell/viewport.js`: no `screen.orientation.lock('landscape-primary')` and no CSS rotate-prompt
fallback (§5.1 viewport table). `dist/index.html` omits `<meta name="mobile-web-app-capable">`.
`sizeRenderer` writes `canvas.style.width/height`, which the design's resize pseudo-code explicitly
avoids. `og:image` is a relative URL — most OG scrapers need an absolute one.

---

## D. Audio and the VO director

### D-1 · P1 · 101 of 224 baked lines (5.58 MB) are unreachable — M
**Verified** by re-running the walk-by director's exact tag filter
(`src/audio/walkby.js:16-23,76-88`) over `assets/voice/manifest.json` offline:

| Catalog | Baked | Reachable | Why not |
|---|---|---|---|
| `walkby_heckle` | 10 | **0** | `TAGS` has no `heckle` key; the tag is `heckle`, the pools look for `ken/lad/babe/flirt/goth/incel/child/gull` |
| `aus101_hud` | 12 | **0** | no HUD director exists (PR **P4.2** never landed); `grep -rn aus101_hud src/` → 0 |
| `rub_pleasure` | 12 | **1** | `src/main.js:358` hard-codes `"rub_pleasure_01"` at a 1.2 %/frame roll |
| `dj_quip_*` | 49 | 49 in theory | only reachable after a *manual* `[`/`]` press (see D-2) |
| `overpaint`, `chase` | 6 | **0** | no overpaint system (B-4); `panic.js` plays only `chase_01` |
| `factory_recall` | 4 | 2 | `recall.js:519,578` play `_01`/`_02` only |

**Done when:** a real `src/audio/director.js` (per `§6`) owns catalogs by tag with the distance bands
of `§5.4` and dispatches HUD, heckle, overpaint, chase, rub and gossip lines.

### D-2 · P1 · 49 DJ quips only fire if the player presses `[`/`]` — S
`src/hud/radio.js:248-268`: `announce()` plays a song ID and, on that handle's `onended`, one quip.
`announce()` is called only from `applyProgram(true)`, which is only called from `step(dir)` — i.e. a
human pressing prev/next. `§5.3` requires "Announce every song change. Between tracks, pull from the
50-line catalog." There is no track timer, so a player who never touches the radio hears `dj_open_01`
and nothing else from a 1.5 MB DJ bank. **Done when:** the radio runs a between-track timer that
pulls from the shuffled quip bag.

### D-3 · P1 · No VO priority; `FACTORY_RECALL` can be silently dropped — M
`§5.3`: `panic > protest > rub > walkby > DJ > gull`; `§5.1`: "FACTORY_RECALL preempts per director
priority (cuts DJ/NPC)". `VoiceBank.play` (`src/audio/voice.js:105-108`) instead does:
```js
if (this.busy) { handle.ready = Promise.resolve(false); return handle; }
```
First-come-first-served. So if a gull line is mid-decode when the player punches someone,
`recall.tryFire`'s `play("factory_recall_01")` returns a dead handle and the setpiece is silent.
**Done when:** `play(id, {priority})` cancels/fades a lower-priority line instead of refusing.

### D-4 · P1 · All NPC voice is 2D — M
`§5.3` requires `PannerNode` HRTF, `refDistance 4`, `rolloffFactor 1.2`, max 28 m. `voice.js:33-34`
connects one gain straight to `destination`; `walkby.js:45-47` fakes distance with a scalar gain, so
every character speaks from dead centre. **Done when:** NPC lines route through a per-line panner
placed at the speaker.

### D-5 · P2 · Three separate `AudioContext`s — M
`src/audio/voice.js:31`, `src/audio/sfx.js:28`, and `src/audio/tapeDeck.js:65,82` each construct one
(the tape deck gets no `ctx` from `main.js:85-88`, so it always builds its own). iOS Safari caps
concurrent contexts and each carries its own clock, so beds drift against each other and against VO.
`§6` calls for one graph with `src/audio/mix.js` bus gains. **Done when:** one context, buses
`ocean/crowd/radio/voice3d/apply/sfx/gull/master` per the `§5.3` mix table.

### D-6 · P2 · `KeyM` does not mute everything and does not persist — S
`src/main.js:178-184` toggles `voice.gain` and `sfx.master` only, and only while `playing`.
`src/audio/tapeDeck.js:365-370` keeps a *second*, independent `muted` flag on its own `KeyM` listener,
so the two can desync. `oceanBed` is not in `musicDirector`'s bed set, so the ocean keeps playing when
muted. `§5.3` requires "Key `M` mutes all — persist `localStorage` key `aus101.mute`".
**Verified:** `grep -rn localStorage src/` → 0 hits.

### D-7 · P2 · No apply/wanted duck — S
`§5.3` and Key Decision 13 require the radio bus to duck −6 dB for the rub plus a 200 ms release, and
the same duck under the wanted sequence. Nothing implements it (`grep -rn duck src/` → 0). The
carpenter *does* switch to its `apply` state on Space (`main.js:344`), which is a different thing.

### D-8 · P3 · `assets/synth/` never landed (PR A2) — M
`§5.3` asks for 400–800 KB of CC0/CC-BY 16-bit WAVs (`juno_saw_c2/c3/c4`, `juno_square_c3`,
`juno_pwm_pad`, `pink`, `rim`, `tom`). The directory does not exist; `carpenter.js` runs the
sanctioned oscillator fallback, and the mandatory stereo BBD chorus **is** correctly implemented
(`src/audio/carpenter.js:27-48`, 0.6 Hz LFO, two `DelayNode`s, opposite phase, 40 % mix). This is the
lowest-value item on the list — the fallback is legitimate; just close the milestone or drop it.

### D-9 · P3 · `voice.busy` is not a talking flag — S
`VoiceBank.busy` is true only during decode, not during playback, and `radio.js:231` reads it as
"is someone talking". Real talk-state lives in `walkby`'s `talkingUntil`. Two sources of truth.

---

## E. Assets

Totals: `assets/` **29 MB** — voice 15 MB, media 14 MB, sfx 152 KB, poster 36 KB. `dist/assets` mirrors it.

### E-1 · P1 · Voice bank is 7× over budget — S
224 MP3s, **14.7 MB**, average 66 KB. **Verified** by parsing the first MPEG frame header of every
file: all 224 are **224 kbps mono @ 48 kHz**. `§5.3` mandates "Encode **32 kbps mono MP3**. Target
folder ≤ 4 MB." A single re-encode (`ffmpeg -b:a 32k -ac 1 -ar 22050`) drops the folder to ~2.1 MB —
**a 12.6 MB saving, larger than every other asset win combined.** Speech at 32 kbps mono is exactly
what the design budgeted for. Regenerate `dist/assets/voice` at the same time.
Bank contents are otherwise **correct**: 53 DJ files (`dj_open_01` + 49 quips + 3 song announces),
manifest ↔ file ↔ `lines.json` are in perfect three-way agreement (0 missing, 0 orphans).

### E-2 · P0 · 17.7 MB is fetched in the first ~15 s of play — M
**Verified** by serving the committed `dist/` to headless Chromium with a request logger and tapping
through the poster and reel. The transfer log:

| Group | Bytes | Notes |
|---|---|---|
| 9 MP4s (`psa1-5`, `loop_apply/billboard/bunker/crt`) | 7.9 MB | `preload="auto"` on all of them at boot, `src/world/gadgets.js:445-462` |
| `psa1-5` **fetched a second time** | 5.0 MB | `src/world/psa.js:186-199` builds its own `<video>` per kiosk for the same 5 URLs |
| 6 intro stills + 4 ad stills | 3.5 MB | 1280×720 JPEGs |
| `game.js` | 0.67 MB | fine |

That is 14 `HTMLVideoElement`s decoding concurrently. iOS Safari will not do this. **Done when:**
videos are shared between `psa.js` and `gadgets.js`, created lazily on first proximity, and use
`preload="none"`.

### E-3 · P1 · Two guaranteed 404s on every boot — S
`src/world/gadgets.js:427-444` `listDirMp4()` `fetch`es the directory URLs `assets/media/psa/` and
`assets/media/ads/` expecting Apache/nginx autoindex HTML. Static hosts return 404.
**Verified:** both appear in my request log and as console errors; they also account for the two
unexplained page errors emitted by `node scripts/shots.mjs`. The results are then unioned with a
hardcoded `KNOWN_VIDEOS` list that already contains all nine files, so the fetch buys nothing.
**Done when:** `listDirMp4` is deleted and `KNOWN_VIDEOS` (or a build-emitted manifest) is the only source.

### E-4 · P1 · SFX bank is 13 of 30 files, 152 KB of a 1.5–2.5 MB budget — M
`assets/sfx/foley/` holds 10 lotion one-shots + 2 sand steps + 1 wood step, all 96 kbps mono. The
`docs/sfx-catalog.md` "Suggested first checkout" table (30 files, ~1.0–1.4 MB) is otherwise untouched,
and the `amb/ step/ combat/ foley/ world/ ui/` folder layout of `§5.6` does not exist.
Missing and player-audible:

- `combat.punch`, `combat.shove`, `combat.laser`, `combat.laser_fail` — punch and laser are silent.
- `world.heli` — **the recall setpiece's helicopters arrive in silence.** This is the game's ending.
- `world.splash`, `world.wave_crash`, `world.gull_flap`, `amb.gulls`, `amb.ocean`, `amb.shore_close`,
  `amb.crowd_boardwalk`, `amb.wind_palms`, `amb.rain`, `amb.storm`, `amb.radio_static`,
  `ui.tick`, `ui.station_id`, `foley.lighter`, `foley.vape_exhale`.
- Steps: only 2 sand + 1 wood variant (design wants 3–5 each plus `sand_wet`, `chrome`, `chase`, `kids_run`) — audibly looping after ten paces.

Ocean/crowd being procedural (`src/audio/ocean.js`, `shades.js`) is a defensible substitute for the
`amb.*` loops; combat, heli and UI are not. Paste the `docs/sfx-catalog.md` §6 CREDITS block when landing.

### E-5 · P1 · `billboard_terminate_uv.png` is an 846 KB PNG of a photographic 1280×720 image — S
`src/main.js:287` and `src/world/psa.js:30` load it as a `MeshBasicMaterial` map. As a quality-85 JPEG
or WebP it is ~80 KB. This one file is 5.5× the entire SFX bank. **Done when:** re-encoded to WebP
with a JPEG fallback.

### E-6 · P1 · The poster is a flat vector placeholder, and the in-page render doubles the wordmark — M
`assets/poster/og.webp` / `og.png` are correctly **400×400** and the `docs/fixtures/poster/`
160/240/400 strips exist, so POSTER0's mechanical acceptance passes. The art does not:

- It is generated by `scripts/generate_poster.py` from flat rectangles — it does **not** use the CHAR0
  meshes, against `§5.0` ("Generate/update `og.webp` offline or in CI from an approved live still",
  "same character meshes as gameplay (zero art fork)").
- The `TERMINATE UV` tagline is baked *overlapping* the `AUS101` wordmark and is unreadable;
  `§5.0` says drop the tagline if it competes with the wordmark.
- The sun disc overlaps the final `1`, breaking the wordmark silhouette.
- Goth and SIGMA_07 read as two identical dark rectangles — `§5.0` requires four distinguishable
  archetypes without colour reliance.
- **In-page** (`src/poster/PosterOverlay.js:36-87`) the image uses `objectFit: cover`, so in a
  1280×800 landscape viewport the baked wordmark is cropped in half off the top — while the CSS
  overlay draws a *second* `AUS101` and a *second* `TERMINATE UV` underneath it. **Verified** in the
  boot screenshot. Also the PLAY triangle sits on the robot's chest with an off-centre
  `translate(-30%,-50%)`.

**Done when:** the OG image is rendered from the live tableau, carries one wordmark, and the overlay
either lets the image carry the type or uses a text-free background plate.

### E-7 · P2 · The intro cutscene skips two of its own five beats — S
`assets/media/README.md` documents the skit as s1 bunker → **s2 captured units** → **s3 what now** →
s4 "I can use them" → s5 PSA apply. `src/poster/CutsceneReel.js:3-10` plays s1, s4, s5 only, so the
story jumps from "operatives find time-cargo" to "the officer claims the units" with the setup
missing. `s2_captured_units.jpg` (347 KB) and `s3_what_now.jpg` (317 KB) ship in `dist/` and are
referenced by **nothing**. **Done when:** either they are in the reel or they are deleted from `dist/`.

### E-8 · P2 · Unused shipped assets — S
Referenced by no source file (**verified** by grepping every `assets/` literal in `src/` + `scripts/`
+ `dist/index.html`): `assets/media/cutscene/s2_captured_units.jpg` (347 KB),
`s3_what_now.jpg` (317 KB), `assets/media/ads/billboard_hero.jpg` (244 KB). `assets/poster/og.png`
(14 KB) is a build intermediate of `generate_poster.py`, not loaded at runtime. ~920 KB of dead ship
weight. `assets/mods/` (optional tracker pack, §5.3) does not exist — fine, but close Open Question 3.

### E-9 · P2 · `assets/media/**` has no licence block — S
`CREDITS.md` covers Coconuts, voice bake, foley and procedural music, and closes with a "Pending"
section. It says nothing about the 14 MB of Grok Imagine stills and the five PSA MP4s
(`assets/media/psa/README.md` sources them from `~/Downloads`). `§9.7` makes `CREDITS.md` mandatory
and restricts the ship to CC0 / CC-BY / Mixkit-or-Pixabay End Product assets. **Done when:** the
provenance and redistribution basis of every file under `assets/media/` is written down.
(Minor drift: CREDITS says "217 lines first batch"; the real count is 224.)

### E-10 · P2 · Bit-part "everyone is mocked" lines were never written — M
`§5.4` specifies 24 lines across `mock_lifeguard_*`, `mock_icecream_*`, `mock_camdad_*`,
`mock_spraytan_*` (6 each). **Verified:** `grep -c "mock_" tools/voice/lines.json` → 0. Everything
else in the `§5.4` catalogs is present and baked: rub 12, flirt 12, heckle 12, lad 12, goth 10,
child 8, gull 10, HUD 12, incel 16, overpaint/chase/panic 10, recall 4, babe gossip 20, ken 20,
cross-talk 8. This is the only remaining content hole in the sheet.

---

## F. Runtime health and performance

### F-1 · P0 · Draw calls are ~50–68× the budget; triangles ~1.4–2× — L
**Verified** by rebuilding `tools/shots/harness.js` *without* `tools/shots/extras/` (the extras dir is
currently populated by other in-flight work and inflates the numbers) and reading
`renderer.info` after two framed shots:

| Metric | Boardwalk shot | Overview shot | `§5.1` budget |
|---|---|---|---|
| draw calls | **2 284** | **3 079** | **45** |
| triangles | **128 327** | **187 424** | **90 000** |
| meshes in scene | 3 583 | | — |
| unique materials | **436** | | — |
| unique geometries | 450 | | — |

Per-body cost, aggregated from the scene graph:

| Rig | Instances | Meshes each | Tris each |
|---|---|---|---|
| AUS101 (`T101`) | 1 | **203** | 8 008 |
| `ken` | 8 | ~61 | ~5 173 |
| `babe` | 4 | ~64 | ~5 410 |
| `goth` / `SIGMA_07` / `kid` | 2 each | ~61 | ~5 000 |
| world groups | 83 | 1 393 total | 49 048 |

Triangle counts per body are near the design's 4 k; the problem is entirely **topology**: every
limb segment, cuff, badge and eye is its own `Mesh`, so each body is 60–200 draw calls. The design
anticipates "bodies instanced in idle, unique when `applying` or `chase`".
**Done when:** each rig merges its static, same-material parts into one `BufferGeometry` per material
(`BufferGeometryUtils.mergeGeometries`) with only jointed groups left separate, and the shared
`GEO`/`MAT` tables (already used correctly in `panic.js:24-43`) are used everywhere. Target ≤ 8 calls
per idle body. Note `recall.js` can spawn 6–8 more T-101s at 182 meshes each — **+1 456 draw calls at
the exact moment the game needs to stay at 30 fps.**

### F-2 · P1 · Per-frame DOM churn in the HUD — S
- `src/hud/reticule.js:269` — `paintSlot()` runs for all 12 slots every frame, writing `textContent`
  and rebuilding `className` strings even when nothing changed. 720 DOM writes/sec at 60 Hz.
- `src/hud/radio.js:424-426` — `tick()` calls `layout()` every frame, which runs two `matchMedia`
  queries and writes `style.top`, `style.right` and `dataset.touch`. Style writes on every frame
  invalidate layout.
- `src/hud/applyMinigame.js:503-506` — `tick()` repaints the whole body-map canvas every frame while
  visible, regardless of change.

**Done when:** each paints only on change (dirty flag / value compare); `layout()` moves to the
resize + orientationchange handlers it is already registered on.

### F-3 · P1 · The painter is dead on every iPhone — M *(file owned by another agent; flagging only)*
`src/chars/artist.js:728`:
```js
const ios = /iP(hone|ad|od)/.test(navigator.userAgent);
if (!ios && nowMs - lastStroke >= STROKE_MS) { stroke(renderer, scene3); ... }
```
On the primary target platform the canvas stays blank linen forever and the whole set-piece is a man
waving a brush at nothing. The underlying cost is the `readRenderTargetPixels` sync stall at
`artist.js:679` — **verified**: headless Chromium logs
`GL Driver Message (Performance, High): GPU stall due to ReadPixels`. `§5.1` prescribes the fix for
exactly this: budget it, then drop resolution or interval (64×64 → 32×32, 200 ms → 400 ms), not
disable the feature. Also, the regex is constructed and `navigator.userAgent` re-tested every frame.

### F-4 · P2 · One console.warn swallows the entire audio subsystem — S
`src/main.js:249-251`: the whole of `beginPlay()`'s audio bring-up is inside one `try`, and the
`catch` is `console.warn("audio", e)`. If `voice.unlock()` throws (an iOS autoplay refusal, a decode
failure), the player silently loses Carpenter, the ocean, all local beds, the music director **and
the radio HUD** — because `radio` and `music` are constructed inside that block
(`main.js:213-235`). **Done when:** audio bring-up is split so one failure does not take the others,
and a failure surfaces at least as a muted-speaker glyph.

### F-5 · P2 · Per-frame allocation in the hot path — S
- `src/audio/walkby.js:91-102` — `ranked()` builds a fresh array of 16 objects every frame.
- `src/main.js:222-232` — each `musicDirector` local's `getPos` closure runs
  `party.musicSpots.find(...)` per local per frame (6 linear scans/frame).
- `src/main.js:255,263-265` — `pickCast` runs `cast.find(...)` per encounter spot per frame
  (~5 700 scans/sec over 16 elements) even after every encounter has been seen.
- `src/audio/sfx.js:21` — `this.cache` is an unbounded `Map`; the design specifies an LRU of 16.
  (`VoiceBank` does implement LRU-16 correctly at `voice.js:52-56`.)

### F-6 · P2 · No quality-drop path, no debug overlay — M
`§5.1` requires: if `dt > 28 ms` for 20 frames → drop sand shadows, paint at 128, freeze idle bodies
beyond 12 m, swarm 4, skip tracker. `§10` requires a `?debug=1` overlay (lotion ml, coverage mean/min,
overpaint ml, active VO id, bus gains, readback ms, shadow map size) and a one-time feature-detect log.
**Verified:** `grep -rn "debug\|dt > 0.028\|quality" src/` → nothing. Given F-1, the drop path is not
optional. PERF0 was a gate before further content and was never run.

### F-7 · P3 · Dead code — S
- `src/world/coconutsLevel.js` — **1 095 lines, the largest file in the repo**, imported by nothing
  (its own doc-comment is the only occurrence of its name). Tree-shaken out of the bundle, but it is
  the first thing a reader opens.
- `src/world/beach.js` — 254 lines, imported by nothing.
- `src/input/player.js:65-70` — a registered `mousemove` listener whose body is an empty `if` block
  with a comment. Delete.
- `src/input/player.js:187-198` — `applyCamera` is exported and never imported (first-person leftover).
- `src/game/combat.js`, `src/phys/props.js`, `src/world/interiors.js` are unimported — expected,
  they are mid-flight from other agents.

### F-8 · P3 · No CI, no tests, no fixtures runner — M
`§10.4` lists five required CI gates and `§9.5` a banned-string test; `§15` makes several of them
merge gates ("no SIGMA_07 without banned-string test"). There is no `.github/`, no test directory,
no test script in `package.json`. I hand-ran the two content checks and **the data currently passes**:
zero banned-name hits across `tools/voice/lines.json`, zero `ageBand: child` lines carrying adult
trope tags, all gull lines correctly `ageBand: gull`, and `dist/game.js` contains no `tiktokv.com` /
`sessionid` string (bake isolation holds). Nothing keeps it passing. The runtime kid-proximity gate
partially exists in `src/audio/walkby.js:134-136,154` — but it measures **player→kid** distance, where
`§5.4` gates on the speaker/listener pair (≤6 m speakers, ≤8 m player).

---

## G. Already assigned elsewhere — noted, not re-litigated

Confirmed present and mid-flight; listed so nobody duplicates the work:

| Area | Files | State seen |
|---|---|---|
| Character anatomy / hair | `src/chars/npcs.js` | in place |
| Painter | `src/chars/artist.js` | in place — see F-3 for the iOS bailout, which is a *runtime* finding |
| Piano man / world layout | `src/world/goldCoast.js` | in place — see C-6 for the coordinate-frame divergence |
| Shared prop kit | `src/world/coconutsHelpers.js` | in place |
| T-101 rig | `src/chars/aus101.js`, `src/chars/t101.js` | `t101.js` exists and is consumed by `aus101.js` + `recall.js` — see F-1 for its 182-mesh cost |
| Punch / laser physics | `src/game/combat.js` | exists, **not yet imported by `main.js`** |
| Recall / panic | `src/game/recall.js`, `src/game/panic.js` | rewritten to a harm-driven escalation; `main.js` still drives them from a keypress |
| Prop physics | `src/phys/props.js` | exists, not yet imported |
| Enterable buildings | `src/world/interiors.js` | exists, not yet imported |
| Phones / instrument rigs | `src/world/gadgets.js`, `party.js`, `psa.js`, `synthRig.js` | in place — E-2/E-3 are *asset-loading* findings in `gadgets.js`/`psa.js`, not rig findings |

Two hand-offs those owners will want:

1. Whoever wires `combat.js` into `main.js` should fix **C-2** (F=punch, G=laser, plus 2-/3-finger
   touch) in the same change, and take **D-3** with it or the recall VO will keep getting dropped.
2. Whoever finishes `recall.js` should read **F-1**: eight T-101 hulls at 182 meshes each adds
   ~1 456 draw calls to a scene already at 2 300.

---

## H. Suggested order

1. **A-1** (crash) — one line, unblocks everything else.
2. **E-3, E-2, E-5, E-1** — asset/network hygiene; 20 MB and two 404s for maybe half a day of work.
3. **C-3** (intro replay) and **B-6** (seed the bay) — two small changes that make the build feel finished.
4. **F-1** merged rigs + **F-6** quality-drop hooks — the PERF0 gate that `§15` said should have run
   before this much content landed.
5. **B-1 → B-9** — the actual game: rules table, win check, `minPatch`, overpaint/chase, bottle-dry,
   burn, game-over card.
6. **D-1 → D-4** — a real VO director; this alone activates 5.6 MB of already-paid-for content.
7. **E-4** SFX first checkout, **E-6** poster, **C-7** POSTER1, **C-1** skin shader.
