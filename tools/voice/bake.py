#!/usr/bin/env python3
"""Build-time TikTok TTS baker for AUS101. Never imported by the game."""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LINES_PATH = Path(__file__).resolve().parent / "lines.json"
OUT_DIR = ROOT / "assets" / "voice"
MANIFEST_PATH = OUT_DIR / "manifest.json"

ENDPOINTS = [
    "https://api16-normal-v6.tiktokv.com/media/api/text/speech/invoke/",
    "https://api16-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke/",
]
USER_AGENT = (
    "com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; en_US; "
    "SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)"
)

TROPE_TAGS = {
    "pleasure",
    "flirt",
    "gossip",
    "incel",
    "iamverysmart",
    "babe",
    "ken",
    "crosstalk",
}


def encode_req_text(text: str) -> str:
    return (
        text.replace("+", "plus")
        .replace(" ", "+")
        .replace("&", "and")
        .replace("ä", "ae")
        .replace("ö", "oe")
        .replace("ü", "ue")
        .replace("ß", "ss")
    )


def validate_lines(lines: list[dict]) -> None:
    seen: set[str] = set()
    for line in lines:
        for key in ("id", "text", "voice", "ageBand"):
            if not line.get(key):
                raise SystemExit(f"Invalid line missing {key}: {line}")
        if line["id"] in seen:
            raise SystemExit(f"Duplicate id: {line['id']}")
        seen.add(line["id"])
        if line["ageBand"] == "child":
            bad = TROPE_TAGS.intersection(line.get("tags") or [])
            if bad:
                raise SystemExit(f"child line {line['id']} has trope tags: {sorted(bad)}")
        if "sigma07" in (line.get("tags") or []):
            import re

            if re.search(r"elliot\s*rodger|elliot\s*roger|manifesto", line["text"], re.I):
                raise SystemExit(f"Banned content in {line['id']}")


def write_manifest(lines: list[dict]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {
        "version": 1,
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "count": len(lines),
        "lines": [
            {
                "id": l["id"],
                "file": f"{l['id']}.mp3",
                "voice": l["voice"],
                "category": l.get("category"),
                "priority": l.get("priority"),
                "ageBand": l["ageBand"],
                "tags": l.get("tags") or [],
                "cooldownMs": l.get("cooldownMs"),
                "text": l["text"],
            }
            for l in lines
        ],
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n")


def tts_once(text: str, voice: str, session_id: str | None, endpoint: str) -> bytes:
    qs = urllib.parse.urlencode(
        {
            "text_speaker": voice,
            "req_text": encode_req_text(text),
            "speaker_map_type": "0",
            "aid": "1233",
        },
        safe="+",
    )
    # req_text must keep + as spaces-as-plus; urlencode would escape them — rebuild
    req_text = encode_req_text(text)
    url = (
        f"{endpoint}?text_speaker={urllib.parse.quote(voice)}"
        f"&req_text={req_text}&speaker_map_type=0&aid=1233"
    )
    headers = {"User-Agent": USER_AGENT}
    if session_id:
        headers["Cookie"] = f"sessionid={session_id}"
    req = urllib.request.Request(url, data=b"", method="POST", headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {e.code}: {raw[:240]}") from e

    if body.get("message") == "Couldn't load speech. Try again.":
        err = RuntimeError("Session ID invalid or rejected")
        err.code = "SESSION"  # type: ignore[attr-defined]
        raise err
    if body.get("status_code") != 0 or not body.get("data", {}).get("v_str"):
        raise RuntimeError(f"TikTok TTS failed: {body.get('message') or str(body)[:200]}")
    return base64.b64decode(body["data"]["v_str"])


def bake_line(line: dict, session_id: str | None) -> bytes:
    last = None
    for endpoint in ENDPOINTS:
        try:
            return tts_once(line["text"], line["voice"], session_id, endpoint)
        except Exception as e:  # noqa: BLE001 — try next endpoint
            last = e
            if getattr(e, "code", None) == "SESSION":
                raise
    assert last is not None
    raise last


def main() -> int:
    ap = argparse.ArgumentParser(description="Bake TikTok TTS mp3s for AUS101")
    ap.add_argument("--only", help="Comma-separated line ids")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--no-session", action="store_true")
    args = ap.parse_args()

    sheet = json.loads(LINES_PATH.read_text())
    lines = sheet["lines"]
    validate_lines(lines)

    if args.only:
        only = {s.strip() for s in args.only.split(",") if s.strip()}
        lines = [l for l in lines if l["id"] in only]
    if args.limit is not None:
        lines = lines[: args.limit]

    session_id = None if args.no_session else os.environ.get("TIKTOK_SESSION_ID")
    if not session_id and not args.no_session and not args.dry_run:
        print(
            "TIKTOK_SESSION_ID unset. Pass --no-session to try without a cookie, or set the env var.",
            file=sys.stderr,
        )
        return 2

    print(f"Baking {len(lines)} lines → {OUT_DIR.relative_to(ROOT)}")
    print(f"Session: {'yes' if session_id else 'no'}")

    if args.dry_run:
        write_manifest(sheet["lines"])
        print(f"Dry run OK. Manifest written ({len(sheet['lines'])} ids).")
        return 0

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ok = skipped = failed = 0
    failures: list[tuple[str, str]] = []

    for line in lines:
        out_file = OUT_DIR / f"{line['id']}.mp3"
        if out_file.exists() and not args.force:
            skipped += 1
            continue
        try:
            buf = bake_line(line, session_id)
            out_file.write_bytes(buf)
            ok += 1
            print(f"OK  {line['id']}  ({len(buf)} bytes)  [{line['voice']}]")
            time.sleep(0.35)
        except Exception as e:  # noqa: BLE001
            failed += 1
            failures.append((line["id"], str(e)))
            print(f"FAIL {line['id']}: {e}", file=sys.stderr)
            if getattr(e, "code", None) == "SESSION":
                print("Aborting: session rejected.", file=sys.stderr)
                break

    write_manifest(sheet["lines"])
    print(f"\nDone. baked={ok} skipped={skipped} failed={failed}")
    for fid, err in failures:
        print(f"  {fid}: {err}", file=sys.stderr)
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
