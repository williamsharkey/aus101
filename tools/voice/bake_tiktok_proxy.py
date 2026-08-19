#!/usr/bin/env python3
"""
Bake TikTok TTS via public workers proxy — NO TikTok sessionid required.
Primary: https://tiktok-tts.weilnet.workers.dev/api/generation
Uses curl (urllib mishandles the 307 on POST).
"""
from __future__ import annotations

import argparse
import base64
import json
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LINES_PATH = Path(__file__).resolve().parent / "lines.json"
OUT_DIR = ROOT / "assets" / "voice"
MANIFEST_PATH = OUT_DIR / "manifest.json"
# Sessionless TikTok TTS proxies (unofficial; try in order).
PROXIES = [
    "https://tiktok-tts.weilnet.workers.dev/api/generation",
    "https://ottsy.weilbyte.dev/api/generation",
]

# Map design voice codes → TikTok speaker codes the proxy accepts
VOICE_ALIASES = {
    "en_us_rocket": "en_us_rocket",
    "en_us_stitch": "en_us_stitch",
    "en_us_c3po": "en_us_c3po",
    "en_us_stormtrooper": "en_us_stormtrooper",
    "en_us_ghostface": "en_us_ghostface",
    "en_female_emotional": "en_us_002",
    "en_male_narration": "en_us_006",
    "en_male_funny": "en_us_010",
}


def proxy_tts(text: str, voice: str) -> bytes:
    speaker = VOICE_ALIASES.get(voice, voice)
    payload = json.dumps({"text": text[:300], "voice": speaker})
    last_err: Exception | None = None
    for proxy in PROXIES:
        # curl -L follows 307; --data-binary keeps POST body
        proc = subprocess.run(
            [
                "curl",
                "-sL",
                "--max-time",
                "45",
                "-X",
                "POST",
                proxy,
                "-H",
                "Content-Type: application/json",
                "-H",
                "User-Agent: Mozilla/5.0 AUS101Bake/1.0",
                "--data-binary",
                payload,
            ],
            capture_output=True,
            check=False,
        )
        if proc.returncode != 0:
            last_err = RuntimeError(f"curl failed ({proxy}): {proc.stderr.decode()[:160]}")
            continue
        try:
            body = json.loads(proc.stdout.decode())
        except json.JSONDecodeError as e:
            last_err = RuntimeError(f"non-JSON ({proxy}): {proc.stdout[:160]!r}")
            continue
        # Weilnet/Ottsy shapes: {success,data} or {data} / {audio}
        b64 = body.get("data") or body.get("audio") or body.get("mp3")
        if body.get("success") is False or not b64:
            last_err = RuntimeError(f"proxy error ({proxy}): {str(body)[:160]}")
            continue
        return base64.b64decode(b64)
    assert last_err is not None
    raise last_err


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
                "category": l.get("category"),
                "priority": l.get("priority"),
                "ageBand": l["ageBand"],
                "tags": list(l.get("tags") or []) + ["tiktok_proxy"],
                "cooldownMs": l.get("cooldownMs"),
                "text": l["text"],
                "placeholder": False,
                "engine": "tiktok-weilnet-proxy",
            }
        )
    MANIFEST_PATH.write_text(
        json.dumps(
            {
                "version": 1,
                "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "count": len(entries),
                "placeholder": False,
                "engine": "tiktok-weilnet-proxy",
                "note": "Baked via tiktok-tts.weilnet.workers.dev — no TikTok sessionid. Unofficial; may break.",
                "lines": entries,
            },
            indent=2,
        )
        + "\n"
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--smoke", action="store_true", help="Bake 8 representative lines")
    args = ap.parse_args()

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

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ok = fail = skip = 0
    baked: set[str] = set()
    # keep previously baked proxy files
    for p in OUT_DIR.glob("*.mp3"):
        # only claim files we rewrite this run + existing if not forcing full replace
        pass

    for i, line in enumerate(lines, 1):
        out = OUT_DIR / f"{line['id']}.mp3"
        if out.exists() and not args.force:
            skip += 1
            baked.add(line["id"])
            continue
        try:
            buf = proxy_tts(line["text"], line["voice"])
            out.write_bytes(buf)
            baked.add(line["id"])
            ok += 1
            print(f"[{i}/{len(lines)}] OK {line['id']} ({len(buf)} b) [{line['voice']}]")
            time.sleep(0.4)
        except Exception as e:  # noqa: BLE001
            fail += 1
            print(f"[{i}/{len(lines)}] FAIL {line['id']}: {e}", file=sys.stderr)
            time.sleep(0.8)

    # Manifest: prefer all files present on disk that are in the sheet
    on_disk = {p.stem for p in OUT_DIR.glob("*.mp3")}
    write_manifest(sheet["lines"], on_disk)
    print(f"Done. ok={ok} skip={skip} fail={fail} manifest={len(on_disk)}")
    return 1 if fail and ok == 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
