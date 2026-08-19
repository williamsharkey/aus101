#!/usr/bin/env python3
"""Temporary macOS `say` placeholders until TikTok session bake works."""

from __future__ import annotations

import argparse
import json
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LINES_PATH = Path(__file__).resolve().parent / "lines.json"
OUT_DIR = ROOT / "assets" / "voice"
MANIFEST_PATH = OUT_DIR / "manifest.json"

# First tiny placeholder set — enough to wire buses, not the full 217.
PLACEHOLDER_IDS = [
    "dj_open_01",
    "dj_quip_01",
    "dj_quip_05",
    "dj_quip_27",
    "dj_quip_49",
    "dj_song_01",
    "dj_song_02",
    "dj_song_03",
    "rub_pleasure_01",
    "rub_pleasure_03",
    "walkby_flirt_01",
    "walkby_flirt_02",
    "walkby_heckle_01",
    "gold_coast_lad_01",
    "gold_coast_lad_02",
    "goth_01",
    "goth_03",
    "child_sassy_01",
    "gull_01",
    "gull_02",
    "aus101_hud_01",
    "aus101_hud_12",
    "incel_01",
    "incel_02",
    "incel_04",
    "overpaint_01",
    "panic_01",
    "factory_recall_01",
    "babe_gossip_botox_map",
    "babe_gossip_brazilian_discount",
    "ken_gossip_steaks_beach",
    "ken_gossip_love_song",
    "cross_babe_brain_tan",
    "cross_ken_scoop_love",
]

VOICE_MAP = {
    "en_au_001": "Karen",
    "en_au_002": "Daniel",  # no AU male installed; GB male stand-in
    "en_us_001": "Kathy",
    "en_us_002": "Samantha",
    "en_us_006": "Fred",
    "en_us_007": "Fred",
    "en_us_009": "Albert",
    "en_us_010": "Ralph",
    "en_uk_001": "Daniel",
    "en_uk_003": "Daniel",
    "en_female_emotional": "Samantha",
    "en_male_narration": "Zarvox",
    "en_male_funny": "Jester",
    "en_us_c3po": "Zarvox",
    "en_us_stormtrooper": "Ralph",
    "en_us_rocket": "Trinoids",
    "en_us_stitch": "Junior",
    "en_us_ghostface": "Whisper",
}


def say_to_mp3(text: str, voice: str, out_mp3: Path) -> None:
    mac_voice = VOICE_MAP.get(voice, "Samantha")
    with tempfile.TemporaryDirectory() as td:
        aiff = Path(td) / "line.aiff"
        wav = Path(td) / "line.wav"
        subprocess.run(
            ["say", "-v", mac_voice, "-o", str(aiff), text],
            check=True,
            capture_output=True,
        )
        # afconvert AIFF → WAV, then ffmpeg → 32kbps mono mp3
        subprocess.run(
            ["afconvert", "-f", "WAVE", "-d", "LEI16", str(aiff), str(wav)],
            check=True,
            capture_output=True,
        )
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                str(wav),
                "-ac",
                "1",
                "-ar",
                "22050",
                "-b:a",
                "32k",
                str(out_mp3),
            ],
            check=True,
            capture_output=True,
        )


def write_manifest(all_lines: list[dict], baked_ids: set[str]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    entries = []
    for l in all_lines:
        if l["id"] not in baked_ids:
            continue
        entries.append(
            {
                "id": l["id"],
                "file": f"{l['id']}.mp3",
                "voice": l["voice"],
                "category": l.get("category"),
                "priority": l.get("priority"),
                "ageBand": l["ageBand"],
                "tags": (l.get("tags") or []) + ["placeholder_say"],
                "cooldownMs": l.get("cooldownMs"),
                "text": l["text"],
                "placeholder": True,
                "placeholderEngine": "macos-say",
            }
        )
    manifest = {
        "version": 1,
        "generatedAt": __import__("time").strftime("%Y-%m-%dT%H:%M:%SZ", __import__("time").gmtime()),
        "count": len(entries),
        "placeholder": True,
        "note": "macOS say() stand-ins. Replace with TikTok bake via tools/voice/bake.py when TIKTOK_SESSION_ID is set.",
        "lines": entries,
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--all-sheet", action="store_true", help="Bake every line in lines.json (slow)")
    ap.add_argument("--only", help="Comma-separated ids")
    args = ap.parse_args()

    sheet = json.loads(LINES_PATH.read_text())
    by_id = {l["id"]: l for l in sheet["lines"]}

    if args.only:
        ids = [s.strip() for s in args.only.split(",") if s.strip()]
    elif args.all_sheet:
        ids = [l["id"] for l in sheet["lines"]]
    else:
        ids = list(PLACEHOLDER_IDS)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    baked: set[str] = set()
    for i, lid in enumerate(ids, 1):
        line = by_id.get(lid)
        if not line:
            print(f"SKIP missing id {lid}")
            continue
        out = OUT_DIR / f"{lid}.mp3"
        print(f"[{i}/{len(ids)}] {lid} → {line['voice']}")
        say_to_mp3(line["text"], line["voice"], out)
        baked.add(lid)

    # Keep any previously baked placeholders in the manifest too
    for p in OUT_DIR.glob("*.mp3"):
        baked.add(p.stem)

    write_manifest(sheet["lines"], baked)
    print(f"Wrote {len(baked)} mp3s + manifest → {OUT_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
