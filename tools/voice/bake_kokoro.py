#!/usr/bin/env python3
"""Bake lines with local Kokoro-82M (hexgrad/kokoro via kokoro-onnx). Male voices only for fight."""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import numpy as np
import soundfile as sf

ROOT = Path(__file__).resolve().parents[2]
LINES_PATH = Path(__file__).resolve().parent / "lines.json"
OUT_DIR = ROOT / "assets" / "voice"
MANIFEST_PATH = OUT_DIR / "manifest.json"
MODEL_DIR = Path(__file__).resolve().parent / "kokoro_models"
MODEL = MODEL_DIR / "kokoro-v1.0.onnx"
VOICES = MODEL_DIR / "voices-v1.0.bin"

# Two Ken fighters: Fenrir (deeper) / Michael (brighter). Never female packs (af_*).
MALE_A = "am_fenrir"
MALE_B = "am_michael"

FIGHT_VOICE = {
    "en_au_002": MALE_A,
    "en_us_006": MALE_B,
    "en_au_001": MALE_A,
    "en_male_funny": MALE_B,
    "en_male_narration": MALE_A,
}


def is_fight(line: dict) -> bool:
    return line.get("category") == "fight" or str(line.get("id", "")).startswith("fight_")


def pick_voice(line: dict) -> str:
    return FIGHT_VOICE.get(line.get("voice") or "", MALE_A)


def wav_to_mp3(wav: Path, mp3: Path) -> None:
    subprocess.check_call(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-codec:a", "libmp3lame", "-q:a", "4", str(mp3)],
    )


def write_manifest(lines: list[dict], baked: set[str]) -> None:
    existing = []
    if MANIFEST_PATH.exists():
        try:
            existing = json.loads(MANIFEST_PATH.read_text()).get("lines") or []
        except json.JSONDecodeError:
            existing = []
    by_id = {e["id"]: e for e in existing if e.get("id")}
    for l in lines:
        if l["id"] not in baked:
            continue
        by_id[l["id"]] = {
            "id": l["id"],
            "file": f"{l['id']}.mp3",
            "voice": l["voice"],
            "kokoroVoice": pick_voice(l),
            "category": l.get("category"),
            "priority": l.get("priority"),
            "ageBand": l.get("ageBand"),
            "tags": list(l.get("tags") or []) + ["kokoro", "male"],
            "cooldownMs": l.get("cooldownMs"),
            "text": l["text"],
            "placeholder": False,
            "engine": "kokoro-onnx",
        }
    entries = list(by_id.values())
    MANIFEST_PATH.write_text(
        json.dumps(
            {
                "version": 1,
                "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "count": len(entries),
                "placeholder": False,
                "engine": "kokoro-onnx",
                "note": "Fight lines: Kokoro-82M male voices (am_fenrir / am_michael). Local, Apache-2.0.",
                "lines": entries,
            },
            indent=2,
        )
        + "\n"
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--fight", action="store_true", help="only fight_* lines")
    args = ap.parse_args()
    if not MODEL.exists() or not VOICES.exists():
        print(f"missing Kokoro models in {MODEL_DIR}", file=sys.stderr)
        return 2
    sheet = json.loads(LINES_PATH.read_text())
    lines = sheet["lines"] if isinstance(sheet, dict) else sheet
    if args.fight:
        lines = [l for l in lines if is_fight(l)]
    if args.only:
        want = {s.strip() for s in args.only.split(",")}
        lines = [l for l in lines if l["id"] in want]
    from kokoro_onnx import Kokoro

    kokoro = Kokoro(str(MODEL), str(VOICES))
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ok = skip = fail = 0
    baked: set[str] = set()
    for i, line in enumerate(lines, 1):
        out = OUT_DIR / f"{line['id']}.mp3"
        if out.exists() and not args.force:
            skip += 1
            baked.add(line["id"])
            continue
        voice = pick_voice(line)
        try:
            samples, sr = kokoro.create(line["text"], voice=voice, speed=1.02, lang="en-us")
            samples = np.asarray(samples, dtype=np.float32)
            with tempfile.TemporaryDirectory() as td:
                wav = Path(td) / "line.wav"
                sf.write(str(wav), samples, sr)
                wav_to_mp3(wav, out)
            baked.add(line["id"])
            ok += 1
            print(f"[{i}/{len(lines)}] OK {line['id']} [{voice}]")
        except Exception as e:  # noqa: BLE001
            fail += 1
            print(f"[{i}/{len(lines)}] FAIL {line['id']}: {e}", file=sys.stderr)
    on_disk = {p.stem for p in OUT_DIR.glob("*.mp3")}
    write_manifest(sheet["lines"] if isinstance(sheet, dict) else sheet, on_disk)
    print(f"ok={ok} skip={skip} fail={fail}")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
