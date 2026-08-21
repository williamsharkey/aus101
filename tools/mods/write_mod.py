#!/usr/bin/env python3
"""Author original ProTracker M.K. modules for Reticule FM 101.7."""

from __future__ import annotations

import math
import pathlib
import struct

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "assets" / "mods"

# PAL Paula periods, octaves 1–4 (C-1 = ~32.7 Hz for a 128-sample cycle).
PERIOD = {
    "C-1": 856, "C#1": 808, "D-1": 762, "D#1": 720, "E-1": 678, "F-1": 640,
    "F#1": 604, "G-1": 570, "G#1": 538, "A-1": 508, "A#1": 480, "B-1": 453,
    "C-2": 428, "C#2": 404, "D-2": 381, "D#2": 360, "E-2": 339, "F-2": 320,
    "F#2": 302, "G-2": 285, "G#2": 269, "A-2": 254, "A#2": 240, "B-2": 226,
    "C-3": 214, "C#3": 202, "D-3": 190, "D#3": 180, "E-3": 170, "F-3": 160,
    "F#3": 151, "G-3": 143, "G#3": 135, "A-3": 127, "A#3": 120, "B-3": 113,
    "C-4": 107, "C#4": 101, "D-4": 95, "D#4": 90, "E-4": 85, "F-4": 80,
    "F#4": 76, "G-4": 71, "G#4": 67, "A-4": 64, "A#4": 60, "B-4": 57,
}

SR = 8287.0  # Paula rate at C-2 (period 428), used to author one-shots.


def clamp8(v: float) -> int:
    return max(-128, min(127, int(round(v)))) & 0xFF


def even_bytes(data: bytes) -> bytes:
    return data if len(data) % 2 == 0 else data + b"\x00"


def lcg_noise(n: int, seed: int) -> list[float]:
    x = seed & 0x7FFFFFFF
    out = []
    for _ in range(n):
        x = (x * 1103515245 + 12345) & 0x7FFFFFFF
        out.append((x / 0x40000000) - 1.0)
    return out


def one_shot(samples: list[int]) -> bytes:
    b = bytearray(clamp8(v) for v in samples)
    if len(b) >= 2:
        b[0] = 0
        b[1] = 0
    return even_bytes(bytes(b))


def kick(n: int = 4200, seed: int = 1) -> bytes:
    phase = 0.0
    out = []
    noise = lcg_noise(n, 9000 + seed)
    for i in range(n):
        t = i / SR
        f = 148.0 * math.exp(-t * 13.5) + 32.0
        phase += 2 * math.pi * f / SR
        env = math.exp(-t * 6.8)
        click = math.exp(-t * 85.0)
        v = math.sin(phase) * env * 118 + noise[i] * click * 28
        out.append(v)
    return one_shot(out)


def snare(n: int = 3400, seed: int = 2) -> bytes:
    phase = 0.0
    out = []
    noise = lcg_noise(n, 14000 + seed)
    for i in range(n):
        t = i / SR
        f = 190.0 * math.exp(-t * 7.5)
        phase += 2 * math.pi * f / SR
        env_n = math.exp(-t * 8.4)
        env_t = math.exp(-t * 11.0)
        v = noise[i] * env_n * 96 + math.sin(phase) * env_t * 52
        out.append(v)
    return one_shot(out)


def hat(n: int = 1800, open_: bool = False, seed: int = 3) -> bytes:
    out = []
    noise = lcg_noise(n, 22000 + seed)
    hp = 0.0
    decay = 5.5 if open_ else 16.0
    for i in range(n):
        t = i / SR
        hp = hp * 0.55 + noise[i] * 0.45
        high = noise[i] - hp
        env = math.exp(-t * decay)
        out.append(high * env * (88 if open_ else 78))
    return one_shot(out)


def tom(n: int = 3600, f0: float = 96.0, seed: int = 4) -> bytes:
    phase = 0.0
    out = []
    noise = lcg_noise(n, 5000 + seed)
    for i in range(n):
        t = i / SR
        f = f0 * math.exp(-t * 4.2) + 20.0
        phase += 2 * math.pi * f / SR
        env = math.exp(-t * 5.0)
        out.append(math.sin(phase) * env * 108 + noise[i] * env * 8)
    return one_shot(out)


def looped_wave(kind: str, n: int = 256, duty: float = 0.25, vol: float = 108.0) -> tuple[bytes, int, int]:
    """Return (data, loop_start_bytes, loop_len_bytes). 2-byte pad + one cycle."""
    body = []
    for i in range(n):
        ph = i / n
        if kind == "pulse":
            v = vol if ph < duty else -vol
        elif kind == "sq":
            v = vol if ph < 0.5 else -vol
        elif kind == "tri":
            x = ph * 2.0
            v = (x * 2 - 1 if x < 1 else 3 - x * 2) * vol
        elif kind == "saw":
            v = (ph * 2 - 1) * vol
        else:
            v = math.sin(2 * math.pi * ph) * vol
        # 3-point blur so Paula interpolation is less harsh
        body.append(v)
    blur = []
    for i, v in enumerate(body):
        a = body[(i - 1) % n]
        c = body[(i + 1) % n]
        blur.append((a + v * 2 + c) * 0.25)
    data = [0, 0] + blur
    raw = even_bytes(bytes(clamp8(v) for v in data))
    loop_start = 2
    loop_len = n if n % 2 == 0 else n + 1
    return raw, loop_start, loop_len


def pad_name(s: str, n: int) -> bytes:
    b = s.encode("ascii", "replace")[:n]
    return b + b"\x00" * (n - len(b))


def sample_hdr(name: str, data: bytes, vol: int = 64, loop: tuple[int, int] | None = None) -> bytes:
    length_w = len(data) // 2
    if loop:
        rep_w = loop[0] // 2
        replen_w = max(1, loop[1] // 2)
    else:
        rep_w = 0
        replen_w = 1
    return (
        pad_name(name, 22)
        + struct.pack(">H", length_w)
        + bytes([0, max(0, min(64, vol))])
        + struct.pack(">HH", rep_w, replen_w)
    )


def pack_cell(note: str | None, sample: int, effect: int = 0, param: int = 0) -> bytes:
    period = PERIOD.get(note or "", 0) if note else 0
    sample &= 0x1F
    period &= 0xFFF
    effect &= 0x0F
    param &= 0xFF
    b0 = (sample & 0xF0) | ((period >> 8) & 0x0F)
    b1 = period & 0xFF
    b2 = ((sample & 0x0F) << 4) | effect
    b3 = param
    return bytes([b0, b1, b2, b3])


EMPTY = pack_cell(None, 0, 0, 0)


def empty_pat() -> list[list[bytes]]:
    return [[EMPTY, EMPTY, EMPTY, EMPTY] for _ in range(64)]


def put(pat: list[list[bytes]], row: int, ch: int, note: str | None, smp: int, eff: int = 0, param: int = 0) -> None:
    if 0 <= row < 64:
        pat[row][ch] = pack_cell(note, smp, eff, param)


def pack_pattern(pat: list[list[bytes]]) -> bytes:
    out = bytearray()
    for row in pat:
        for cell in row:
            out.extend(cell)
    if len(out) != 1024:
        raise RuntimeError(f"pattern size {len(out)}")
    return bytes(out)


def write_mod(path: pathlib.Path, title: str, samples: list[tuple[str, bytes, int, tuple[int, int] | None]], patterns: list[list[list[bytes]]], order: list[int], restart: int = 0) -> None:
    if not 1 <= len(order) <= 128:
        raise RuntimeError("order length")
    npat = max(order) + 1
    if len(patterns) < npat:
        raise RuntimeError("missing patterns")
    hdr = bytearray(pad_name(title, 20))
    sample_data = []
    for i in range(31):
        if i < len(samples):
            name, data, vol, loop = samples[i]
            data = even_bytes(data)
            hdr.extend(sample_hdr(name, data, vol, loop))
            sample_data.append(data)
        else:
            hdr.extend(sample_hdr("", b"", 0, None))
            sample_data.append(b"")
    hdr.append(len(order) & 0xFF)
    hdr.append(0x7F if restart == 0 else restart & 0xFF)
    order_tbl = bytes(order) + bytes(128 - len(order))
    hdr.extend(order_tbl[:128])
    hdr.extend(b"M.K.")
    if len(hdr) != 1084:
        raise RuntimeError(f"header {len(hdr)}")
    body = bytearray(hdr)
    for i in range(npat):
        body.extend(pack_pattern(patterns[i]))
    for blob in sample_data:
        body.extend(blob)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(bytes(body))


def set_speed(pat: list[list[bytes]], speed: int, bpm: int) -> None:
    """Speed on ch0, BPM on ch2 of row 0 so bass/drums on ch1/ch3 stay put."""
    put(pat, 0, 0, None, 0, 0xF, speed)
    put(pat, 0, 2, None, 0, 0xF, bpm)


def drums_rock(pat: list[list[bytes]], ch: int = 3, kick_s: int = 1, snare_s: int = 2, hat_s: int = 3, kick_vol: int = 0x40, snare_vol: int = 0x32, hat_vol: int = 0x16) -> None:
    for r in range(64):
        if r % 8 == 0:
            put(pat, r, ch, "C-2", kick_s, 0xC, kick_vol if r % 16 == 0 else kick_vol - 6)
        elif r % 8 == 4:
            put(pat, r, ch, "C-2", snare_s, 0xC, snare_vol)
        elif r % 2 == 0:
            put(pat, r, ch, "C-3", hat_s, 0xC, hat_vol if r % 4 == 2 else hat_vol - 4)


def drums_drive(pat: list[list[bytes]], ch: int = 3) -> None:
    for r in range(64):
        if r % 16 == 0:
            put(pat, r, ch, "C-2", 1, 0xC, 0x3C)
        elif r % 16 == 8:
            put(pat, r, ch, "C-2", 2, 0xC, 0x28)
        elif r % 4 == 2:
            put(pat, r, ch, "C-3", 3, 0xC, 0x14)
        elif r % 2 == 0:
            put(pat, r, ch, "C-3", 3, 0xC, 0x0C)


def drums_chip(pat: list[list[bytes]], ch: int = 3) -> None:
    for r in range(64):
        if r % 8 == 0:
            put(pat, r, ch, "C-2", 1, 0xC, 0x3A)
        elif r % 8 == 4:
            put(pat, r, ch, "C-2", 2, 0xC, 0x30)
        else:
            put(pat, r, ch, "C-3", 3, 0xC, 0x12 if r % 2 == 0 else 0x0A)


def eighths(pat: list[list[bytes]], ch: int, notes: list[str], smp: int, vol: int = 0x30, start: int = 0) -> None:
    for i, n in enumerate(notes):
        r = start + i * 2
        if r >= 64:
            break
        if n and n != "---":
            put(pat, r, ch, n, smp, 0xC, vol)


def quarters(pat: list[list[bytes]], ch: int, notes: list[str], smp: int, vol: int = 0x28, start: int = 0, arp: int | None = None) -> None:
    for i, n in enumerate(notes):
        r = start + i * 4
        if r >= 64:
            break
        if n and n != "---":
            if arp is not None:
                put(pat, r, ch, n, smp, 0x0, arp)
            else:
                put(pat, r, ch, n, smp, 0xC, vol)


def sixteenths(pat: list[list[bytes]], ch: int, notes: list[str], smp: int, vol: int = 0x24, start: int = 0) -> None:
    for i, n in enumerate(notes):
        r = start + i
        if r >= 64:
            break
        if n and n != "---":
            put(pat, r, ch, n, smp, 0xC, vol)


def fill_toms(pat: list[list[bytes]], ch: int = 3, start: int = 56) -> None:
    seq = ["A-2", "G-2", "E-2", "D-2", "C-2", "A-1", "G-1", "E-1"]
    for i, n in enumerate(seq):
        r = start + i
        if r < 64:
            put(pat, r, ch, n, 7, 0xC, 0x34 - i)


def kit(seed: int, bass_kind: str, bass_duty: float, lead_duty: float, arp_duty: float) -> list[tuple[str, bytes, int, tuple[int, int] | None]]:
    bass, bs, bl = looped_wave(bass_kind, 256, bass_duty, 112)
    lead, ls, ll = looped_wave("pulse", 256, lead_duty, 100)
    arp, as_, al = looped_wave("sq", 256, arp_duty, 92)
    return [
        ("kick", kick(4200, seed), 64, None),
        ("snare", snare(3400, seed + 1), 64, None),
        ("hat", hat(1700, False, seed + 2), 48, None),
        ("bass", bass, 64, (bs, bl)),
        ("lead", lead, 58, (ls, ll)),
        ("arp", arp, 48, (as_, al)),
        ("tom", tom(3600, 90.0, seed + 3), 64, None),
        ("ohat", hat(2600, True, seed + 4), 40, None),
    ]


def song_zinc() -> tuple[str, list, list, list[int]]:
    """132 BPM A-minor boardwalk stomp — punchy pulse bass, short hook."""
    samples = kit(11, "pulse", 0.18, 0.14, 0.42)
    p = [empty_pat() for _ in range(8)]
    set_speed(p[0], 6, 132)
    bass = (["A-1", "A-1", "A-1", "C-2", "A-1", "E-2", "D-2", "C-2"] * 4)
    hook = ["A-3", "C-4", "E-4", "C-4", "A-3", "G-3", "A-3", "E-3", "A-3", "C-4", "D-4", "E-4", "G-4", "E-4", "D-4", "C-4"]
    for i, pat in enumerate(p):
        drums_rock(pat, kick_vol=0x40, snare_vol=0x34, hat_vol=0x14)
        eighths(pat, 1, bass if i < 4 else (["A-1", "C-2", "E-2", "A-1", "G-1", "G-1", "E-1", "G-1"] * 4), 4, 0x38)
        if i >= 1:
            quarters(pat, 2, ["A-3"] * 8 + ["C-4"] * 8, 6, arp=0x37)
        if i >= 2:
            quarters(pat, 0, hook if i % 2 == 0 else list(reversed(hook)), 5, 0x2E)
        if i == 7:
            fill_toms(pat, 3, 56)
    return "ZINC PATROL", samples, p, [0, 1, 2, 3, 2, 3, 4, 5, 6, 5, 2, 7]


def song_shore() -> tuple[str, list, list, list[int]]:
    """100 BPM D-major Galway lilt — triangle bass, offbeat hats, slower hook."""
    samples = kit(21, "tri", 0.5, 0.32, 0.48)
    p = [empty_pat() for _ in range(8)]
    set_speed(p[0], 6, 100)
    bass = (["D-1", "---", "A-1", "---", "D-1", "F-1", "A-1", "G-1"] * 4)
    hook = ["A-3", "F-3", "D-3", "F-3", "A-3", "C-4", "A-3", "G-3", "F-3", "D-3", "F-3", "A-3", "G-3", "F-3", "E-3", "D-3"]
    for i, pat in enumerate(p):
        drums_drive(pat)
        eighths(pat, 1, bass if i < 5 else (["G-1", "---", "D-1", "---", "G-1", "A-1", "C-2", "A-1"] * 4), 4, 0x34)
        if i >= 1:
            quarters(pat, 2, ["D-3"] * 8 + ["F-3"] * 8, 6, arp=0x47)
        if i >= 2:
            quarters(pat, 0, hook if i != 6 else list(reversed(hook)), 5, 0x2A)
        if i == 7:
            fill_toms(pat, 3, 56)
    return "GOLD COAST", samples, p, [0, 1, 2, 2, 3, 4, 5, 3, 2, 6, 5, 7]


def song_night() -> tuple[str, list, list, list[int]]:
    """92 BPM F#m night drive — half-time kick, saw bass, sparse lead."""
    samples = kit(33, "saw", 0.5, 0.10, 0.22)
    p = [empty_pat() for _ in range(8)]
    set_speed(p[0], 6, 92)
    bass = (["F#1", "---", "---", "---", "C#2", "---", "E-2", "---"] * 4)
    hook = ["C#4", "---", "B-3", "---", "A-3", "---", "G#3", "---", "F#3", "---", "A-3", "---", "G#3", "---", "E-3", "---"]
    for i, pat in enumerate(p):
        # half-time: kick on 1, snare on 3
        for r in range(64):
            if r % 16 == 0:
                put(pat, r, 3, "C-2", 1, 0xC, 0x3C)
            elif r % 16 == 8:
                put(pat, r, 3, "C-2", 2, 0xC, 0x2A)
            elif r % 8 == 4:
                put(pat, r, 3, "C-3", 3, 0xC, 0x10)
        eighths(pat, 1, bass if i < 4 else (["A-1", "---", "---", "---", "E-2", "---", "F#2", "---"] * 4), 4, 0x3A)
        if i >= 1:
            quarters(pat, 2, ["F#3"] * 16, 6, arp=0x37)
        if i >= 2:
            quarters(pat, 0, hook if i % 2 == 0 else ["F#3", "---", "A-3", "---", "C#4", "---", "E-4", "---", "C#4", "---", "B-3", "---", "A-3", "---", "G#3", "---"], 5, 0x24)
        if i == 7:
            fill_toms(pat, 3, 56)
    return "NIGHT DRIVE", samples, p, [0, 1, 2, 3, 2, 4, 5, 3, 6, 5, 2, 7]


def song_gulls() -> tuple[str, list, list, list[int]]:
    """160 BPM C-major chip run — square lead sixteenths, busy hats."""
    samples = kit(47, "sq", 0.5, 0.28, 0.50)
    p = [empty_pat() for _ in range(8)]
    set_speed(p[0], 5, 160)
    bass = (["C-2", "G-1", "C-2", "E-2", "F-1", "C-2", "G-1", "B-1"] * 4)
    run = (["C-4", "E-4", "G-4", "E-4", "C-4", "D-4", "E-4", "G-4"] * 8)[:64]
    run_b = (["E-4", "G-4", "A-4", "G-4", "E-4", "D-4", "C-4", "B-3"] * 8)[:64]
    for i, pat in enumerate(p):
        drums_chip(pat)
        eighths(pat, 1, bass if i < 5 else (["A-1", "E-1", "A-1", "C-2", "D-2", "A-1", "G-1", "E-1"] * 4), 4, 0x36)
        if i >= 1:
            quarters(pat, 2, ["C-4"] * 8 + ["G-3"] * 8, 6, arp=0x47)
        if i >= 2:
            sixteenths(pat, 0, run if i % 2 == 0 else run_b, 5, 0x22)
        if i == 7:
            fill_toms(pat, 3, 56)
    return "CHIP GULLS", samples, p, [0, 1, 2, 3, 2, 3, 4, 5, 6, 5, 2, 7]



SONGS = {
    "zinc_patrol.mod": song_zinc,
    "shore_galway.mod": song_shore,
    "after_dark.mod": song_night,
    "chip_gulls.mod": song_gulls,
}


def verify(path: pathlib.Path) -> None:
    b = path.read_bytes()
    if len(b) < 8192:
        raise SystemExit(f"{path.name}: {len(b)} bytes (< 8 KB)")
    if b[1080:1084] != b"M.K.":
        raise SystemExit(f"{path.name}: magic {b[1080:1084]!r}")
    title = b[0:20].split(b"\x00", 1)[0].decode("ascii", "replace")
    song_len = b[950]
    if song_len < 8:
        raise SystemExit(f"{path.name}: order {song_len} (< 8)")
    order = list(b[952:952 + 128])
    npat = max(order[:song_len]) + 1
    end = 1084 + npat * 1024
    if end > len(b):
        raise SystemExit(f"{path.name}: truncated patterns")
    notes = 0
    for i in range(1084, end, 4):
        period = ((b[i] & 0x0F) << 8) | b[i + 1]
        smp = (b[i] & 0xF0) | (b[i + 2] >> 4)
        if period or smp:
            notes += 1
    if notes < 64:
        raise SystemExit(f"{path.name}: sparse ({notes} cells)")
    print(f"{path.name} {len(b)} {b[1080:1084]!r} title={title!r} order={song_len} pats={npat} cells={notes}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, fn in SONGS.items():
        title, samples, patterns, order = fn()
        path = OUT / name
        write_mod(path, title, samples, patterns, order)
        verify(path)


if __name__ == "__main__":
    main()
