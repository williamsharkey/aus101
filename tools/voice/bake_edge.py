#!/usr/bin/env python3
"""
Bake via Microsoft Edge neural TTS (edge-tts) — no API key, no TikTok account.
Best AU voices: en-AU-NatashaNeural / en-AU-WilliamMultilingualNeural.
Requires: repo .venv with edge-tts installed.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LINES_PATH = Path(__file__).resolve().parent / "lines.json"
OUT_DIR = ROOT / "assets" / "voice"
MANIFEST_PATH = OUT_DIR / "manifest.json"
VENV_EDGE = ROOT / ".venv" / "bin" / "edge-tts"

VOICE_MAP = {
    "en_au_001": "en-AU-NatashaNeural",
    "en_au_002": "en-AU-WilliamMultilingualNeural",
    "en_us_001": "en-US-JennyNeural",
    "en_us_002": "en-US-AriaNeural",
    "en_us_006": "en-US-GuyNeural",
    "en_us_007": "en-US-DavisNeural",
    "en_us_009": "en-US-GuyNeural",
    "en_us_010": "en-US-DavisNeural",
    "en_uk_001": "en-GB-RyanNeural",
    "en_uk_003": "en-GB-ThomasNeural",
    "en_female_emotional": "en-US-JennyNeural",
    "en_male_narration": "en-GB-ThomasNeural",
    "en_male_funny": "en-US-AndrewNeural",
    "en_us_c3po": "en-GB-ThomasNeural",
    "en_us_stormtrooper": "en-US-GuyNeural",
    "en_us_rocket": "en-US-ChristopherNeural",
    "en_us_stitch": "en-US-AnaNeural",
    "en_us_ghostface": "en-US-DavisNeural",
}


async def synth(text: str, voice: str, out: Path) -> None:
    import edge_tts

    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(str(out))


def write_manifest(lines: list[dict], baked: set[str]) -> None:
    entries = []
    for l in lines:
        if l["id"] not in baked:
            continue
        entries.append(
            {
                "id": l["id"],
                "file": f"{l['id']}.mp3",
                "voice": l["voice"],
                "edgeVoice": VOICE_MAP.get(l["voice"], "en-AU-NatashaNeural"),
                "category": l.get("category"),
                "priority": l.get("priority"),
                "ageBand": l["ageBand"],
                "tags": list(l.get("tags") or []) + ["edge_tts"],
                "cooldownMs": l.get("cooldownMs"),
                "text": l["text"],
                "placeholder": False,
                "engine": "edge-tts",
            }
        )
    MANIFEST_PATH.write_text(
        json.dumps(
            {
                "version": 1,
                "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "count": len(entries),
                "placeholder": False,
                "engine": "edge-tts",
                "note": "Microsoft Edge neural TTS via edge-tts. No API key. Build-time only.",
                "lines": entries,
            },
            indent=2,
        )
        + "\n"
    )


async def amain(lines: list[dict], force: bool) -> tuple[int, int, int, set[str]]:
    ok = skip = fail = 0
    baked: set[str] = set()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for i, line in enumerate(lines, 1):
        out = OUT_DIR / f"{line['id']}.mp3"
        if out.exists() and not force:
            skip += 1
            baked.add(line["id"])
            continue
        voice = VOICE_MAP.get(line["voice"], "en-AU-NatashaNeural")
        try:
            await synth(line["text"], voice, out)
            baked.add(line["id"])
            ok += 1
            print(f"[{i}/{len(lines)}] OK {line['id']} [{voice}]")
            await asyncio.sleep(0.15)
        except Exception as e:  # noqa: BLE001
            fail += 1
            print(f"[{i}/{len(lines)}] FAIL {line['id']}: {e}", file=sys.stderr)
            await asyncio.sleep(0.5)
    return ok, skip, fail, baked


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--smoke", action="store_true")
    args = ap.parse_args()

    try:
        import edge_tts  # noqa: F401
    except ImportError:
        print("Install: python3 -m venv .venv && .venv/bin/pip install edge-tts", file=sys.stderr)
        return 2

    sheet = json.loads(LINES_PATH.read_text())
    lines = sheet["lines"]
    if args.smoke:
        want = {
            "dj_open_01",
            "rub_pleasure_01",
            "gold_coast_lad_01",
            "gull_01",
            "incel_02",
            "babe_gossip_botox_map",
            "ken_gossip_steaks_beach",
            "factory_recall_01",
        }
        lines = [l for l in lines if l["id"] in want]
    if args.only:
        only = {s.strip() for s in args.only.split(",") if s.strip()}
        lines = [l for l in lines if l["id"] in only]
    if args.limit is not None:
        lines = lines[: args.limit]

    ok, skip, fail, _ = asyncio.run(amain(lines, args.force))
    on_disk = {p.stem for p in OUT_DIR.glob("*.mp3")}
    write_manifest(sheet["lines"], on_disk)
    print(f"Done. ok={ok} skip={skip} fail={fail} on_disk={len(on_disk)}")
    return 1 if fail and ok == 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
