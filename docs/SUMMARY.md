# AUS101 Design Summary (approved)

Canonical: `docs/DESIGN.md` in https://github.com/williamsharkey/aus101

## 14. Key Decisions

1. **Poster-first boot + Option B required for laserbarf v1 OG.** Committed `og.webp` at **400×400** (laserbarf square) for thumbnails (screenshotapi has no WebGL wait). Humans get live Option A after CHAR0 + huge 2D `AUS101`; tap/PLAY unlocks; `#0b1210` under; Esc → pause table. No dark instruction menu. Canonical design path: `docs/DESIGN.md`.
2. **Static-host ship contract.** esbuild bundles JS+Three r160; audio via same-origin `fetch`. `file://` not supported for full play.
3. **Coverage is UV-space via WebGLRenderTarget** (R8/RGBA), applying-subject 256 resident; not screen decals; FramebufferTexture non-normative.
4. **`100vh` + `innerHeight`, never `100dvh`, never recreate WebGL** after boot.
5. **Finite 200 ml / 4–6 ml hand;** bottle viewmodel before lotion FSM. The bottle is the clock.
6. **Punch and laser are first-class instant lose** → wanted 2.4 s → ≤8 heli hulls + recall/panic VO + heli SFX.
7. **ClothMask is a paint reject for coverage, not a pick reject** — painting trunks triggers chase.
8. **Port Coconuts patterns (Steve); rewrite ES modules; delete the OC level.** Not “extract modules” from the IIFE. Vendor/bundle Three r160; no r128 CDN.
9. **Noon is the product.** Optional continuous `dayTime` + **`KeyT`** fast-forward leftover — **no KeyN**.
10. **Foam dies on wet sand** — the nearer Australian shore-break rule.
11. **Bake TTS, commit audio;** one `tools/voice/lines.json` source → manifest. Runtime has no network voice path.
12. **`carpenter.js` ships with stereo BBD chorus** (0.6 Hz, 8–12 ms). Tracker optional with iOS fallback.
13. **Radio is 2D (Prev/Pause/Next); NPCs are 3D; beds stay under.** Apply/wanted duck radio. Key M hard-mutes.
14. **Age band is data + runtime kid-proximity fixtures.** Kids not paint targets. Gull ≠ child.
15. **SIGMA_07 is a cloth-masked heckler.** Shirt on. SIGMA_07 / Trevor from the forum. No real killer names. No manifesto.
16. **Everyone is mocked.** Adult vanity / Ken gossip is `ageBand: adult` only.
17. **SFX ≤ 2.5 MB, CC0-first;** authoritative catalog = SFX part file; CREDITS.md (Steve + SFX) mandatory.
18. **Restart clears maps, keeps the GL context.**
19. **White-cast + erythema carry the tutorial.** No popup. Red and zinc. `LIGHTS` single table in `src/world/lights.js`.
20. **80 × 50 m world budget; PERF0 early; swarm capped; applying-only full RTTs.**
21. **CHAR0 / BODY0 before POSTER1 and P2–P4.** Shared meshes first.

---

## 12. Open Questions

1. ~~Exact Three version pin~~ → **Resolved: Three r160** for W0/build (revisit only if iOS blocker).
2. ~~SPF kiosk buy refill~~ → **Resolved for v1: scenery-only** (no mid-run refill). Revisit post-v1.
3. Tracker pack: ship empty `assets/mods/` stub or defer entirely until after Carpenter A/B.
4. Gossip speakers: unify `WALKBY_BABE` / `beach_babe` enums vs alias map in director.
5. Optional InspectorJ CC-BY seaside bed — accept attribution string or stay CC0-only.
6. Phone-recorded lotion rub if CC0 stand-ins fail playtest — who owns the take / CC0 grant.
7. Win screen copy and credit roll length.
8. ~~KeyN night~~ → **Resolved: no KeyN.** Optional continuous `dayTime` + **`KeyT`** fast-forward leftover; noon default.
9. ~~Option B SLA~~ → **Resolved: Option B `og.webp` required for laserbarf v1 OG**; live Option A for humans after CHAR0. No WebGL-wait dependency on screenshotapi.
10. Default optional tagline copy (`I'LL BE BACK WITH SPF 50+` vs `TERMINATE UV`) or none.
11. **Risk:** TikTok bake ToS / right to redistribute committed MP3s; pick fallback TTS if bake dies.

---

## 15. PR Plan (unified ordered PRs)

Land in this order. Gates: no chase before real `CoverageMap`; no voice catalogs if bake is in the game bundle; no Carpenter without BBD chorus; no SIGMA_07 without banned-string test; no rub without child-collider reject; **no POSTER1 before CHAR0**; **no P2–P4 before BODY0**; **no P4 lotion before bottle viewmodel**; **PERF0 after P3** before piling content.

| PR | Scope | Done when |
| --- | --- | --- |
| **BUILD0** | `package.json`, `scripts/build.mjs` (esbuild), Three **r160** vendor path, `npm run build` → `dist/index.html` + `dist/game.js` (Three bundled), asset copy, bake-isolation CI greps | Static-host open shows blank/`#0b1210` canvas; `dist/game.js` has no `tiktokv.com` / bake |
| **W0** | Vendor Coconuts snapshot + NOTICE (Steve); noon sand via `LIGHTS`; list symbols ported vs rewritten | Static host lit ground; no CDN; CREDITS/README credit Steve |
| **POSTER0** | Option B `assets/poster/og.webp` **400×400 required**; `#0b1210`; giant `AUS101` overlay; optional one tagline + PLAY; tap unlock; Esc pause table stub; 400×400 + 160/240/400 fixtures; gate dark start menu | Cold load shows static poster; **400×400** square silhouette pass; laserbarf OG does not depend on WebGL wait |
| **P1** | Shell viewport meta, `100vh`, safe-area, DPR cap, never recreate GL; poster root under shell | iPhone rotate keeps context; poster still first paint |
| **CHAR0** | Shared `src/chars/` primitives: AUS101 chrome, Ken-jock, beach babe, SIGMA_07 long-sleeve; silhouette-distinct | Four meshes render in isolation; usable by poster + subjects |
| **POSTER1** | Live `PosterScene` using CHAR0; wind/eye/dolly; same renderer | ~300px human view: title + four silhouettes; no second art fork |
| **W1** | Port player + `COL[]`, walls, bob, veil/pause, lock | WASD + Shift 3.4/6.4; stay in 80 × 50 |
| **A0** | `audio/context.js` — resume on poster tap, Key M, master gain | mute survives reload |
| **W2** | Bands: boardwalk, stairs, dry/wet, wade; floor AABBs | Deck → sand → wet, no fall-through |
| **A1** | `carpenter.js` + chorus + oscillator fallback | iPhone D-minor pulse after tap |
| **W3** | Shore-break + foam death; retune ocean | Dump Z=36; no dry-sand foam |
| **BODY0** | 12 slot placeholder bodies + ClothMask atlases + ApplyPickLayer; kids excluded from pick set | Ray hits body vs cloth; KID collider rejected |
| **VM0** | `vm.js` bottle + palm **before lotion** (was late W7) | Bottle ray / hold pose exists; bob works |
| **P2** | `FrameInput`, joystick, PlayCamera / ApplyRig | Space on BODY0 mesh orbits; release 180 ms returns |
| **P3** | UV unwrap WebGLRenderTarget maps, aniso stamp, 64×64 readback (applying-only 256) | Orbit keeps film in UV; trunks do not raise coverage |
| **PERF0** | Measure readback stall + physical skin cost on iPhone; quality-drop hooks; shadow 1024/512 | Documented numbers; drop path wired; gate further content if floor missed |
| **P4** | Lotion FSM using VM0 bottle: 200 ml, 4–6 ml hand, drip | Empty bottle before 12 bodies is a lose |
| **A2** | `assets/synth/*` + sample path | A/B vs oscillators; CREDITS licences |
| **W4** | Beach prop ports + scatter; noon `LIGHTS` | Reads as beach from spawn |
| **A3** | Radio Prev/Pause/Next + mobile buttons | Transport OK while muted |
| **W5** | Kiosk + tower (scenery; no refill v1) | Tower Y=4.8; kiosk blocks |
| **A4** | `tools/voice/bake.mjs` + `lines.json` SoT + manifest emit + CI missing-file; sessionid secret docs | bake never imported from `src/`; manifest emitted |
| **SFX1** | Follow SFX part **first-checkout table** (~30 files) | `assets/sfx/` ≤ 2.5 MB; heli/punch/laser/lotion present; CREDITS pasted |
| **W6** | `film.js` placements; radios on mute graph | Seven prop types |
| **P5** | Skin shader under `LIGHTS`; white-cast; erythema | Unpainted reddens; zinc reads |
| **A5** | **53** DJ MP3s: open + 49 quips + 3 song announces; bag shuffle | Ids match §5.3 count |
| **P4.1** | Schema + empty director on `tools/voice/lines.json` | child+trope fixture fails |
| **P4.2** | HUD + recall VO | Recall preempts HUD |
| **P6** | Reticule + fails; wanted sequence (panic/recall, heli SFX, ≤8 hulls, game-over card) | F/G or 2-/3-finger → swarm 2.4 s |
| **P4.3** | Gull + kid lines | gull ≠ child; kids not in paint set |
| **A6** | ~200 NPC lines, LRU 16, panner, priority | panic beats DJ; gull never steals |
| **P4.4** | Lad + goth (CHAR0 variants / unique meshes) | 12+10; Flume id-stable |
| **A7** | Mix: ocean/crowd, apply/wanted duck, slasher stem, sfx duck | duck depth unit-tested |
| **P4.5** | Babe/jock + rub/flirt/heckle + **kid-proximity fixture** | rub needs adult contact; KID in radius suppresses |
| **P4.5b** | Babe gossip 20 + Ken 20 + cross-talk 8 + bit-parts + kid-proximity | adult-only; 6 m / 8 m gates |
| **P4.6** | Overpaint / chase / panic lines | panic preempts walk-by |
| **P4.7** | SIGMA_07 | Shirt-on; 16 incel lines; banned-name test |
| **P4.8** | DJ priority vs dialog | DJ drop > gull VO |
| **A8** | Optional tracker + iOS fallback | feature-detect logged once |
| **DAY?** | Optional continuous dayTime + **KeyT** (not KeyN) | Noon remains default if shipped |
| **PERF1** | Final triangle/draw audit; swarm 4 drop; tracker off | 30 Hz floor iPhone 13 hidden URL bar |

**Milestone tags:**

- `poster-boot` — after BUILD0+POSTER0+P1
- `playable-beach` — after W3+A1
- `playable-apply` — after BODY0+VM0+P4+PERF0
- **`content-complete`** — after **A6 + P4.5b + P4.7 + A5 + SFX1** (and BODY/paint already landed)
- `v1` — after PERF1 + license/CI green + Option B fixtures + Steve CREDITS
