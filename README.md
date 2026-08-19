# AUS101 — I'll Be Back With SPF 50+

Self-contained Three.js browser game. You are **AUS101**, a copper T-101 with red eyes, reassigned to find beachgoers without SPF on the Gold Coast and apply sunscreen. Score completeness of coverage. Track up to 12 subjects for UV burn. Do not paint onto swimwear. Do not punch or laser — the factory will recall you.

Playable build target: a committed static `dist/` (no server). First frame is a full-scale movie poster for [laserbarf.com](https://laserbarf.com) thumbnails — big **AUS101** lettering, cast lineup, no tiny instruction menu.

Design document: [`docs/DESIGN.md`](docs/DESIGN.md)

## Status

Design approved (`docs/DESIGN.md`).

- **Voice:** 217 lines in `assets/voice/`. Bake without a TikTok account via `python3 tools/voice/bake_tiktok_proxy.py` (Weilnet/Ottsy) or `.venv/bin/python tools/voice/bake_edge.py`. See `docs/tts-research.md`.
- Playable `dist/`: poster + bunker stills, third-person copper AUS101, Gold Coast kit, Carpenter bed that **yields** to piano / DJ / boombox / guitar when you walk up. Artist paints his live view onto a canvas. Guitar Kens, boombox dancers, ragdoll fights, PSA kiosks. Mobile: move stick + look stick. VO is one conversation at a time.

```bash
npm install
npm run build
npx --yes serve dist   # not file:// — VO uses fetch
```

## Credits

**Coconuts / Steve** — Large parts of the planned control, collision, procedural audio, viewmodel overlay, prop factories, and canvas-texture helpers are adapted from [Coconuts](https://github.com/a-better-internet/coconuts) by **Steve** ([a-better-internet](https://github.com/a-better-internet)). Coconuts is a self-contained Three.js walkaround of the Coconuts Beach Bar patio. Thank you Steve — those patterns are the spine under a new Australian beach, boardwalk, and waves. See also [`docs/parts/`](docs/parts/) world section and `CREDITS.md` as assets land.

Any third-party SFX, tracker modules, and synth samples will be listed in `CREDITS.md` with license and attribution when committed.

## License

TBD for original AUS101 code and art. Upstream Coconuts attribution remains as above.
