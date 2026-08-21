/**
 * Original radio scores in a Galway / FM7 / DX / chip dialect — not rips.
 * Cells: { note, inst, vel? }  note = MIDI.
 */

function n(note, inst, vel) {
  return { note, inst, vel };
}

function row(...chs) {
  return chs;
}

function build(len, fn) {
  const out = [];
  for (let r = 0; r < len; r++) out.push(fn(r));
  return out;
}

const SID_BASS = { kind: "sid", wave: "tri", atk: 0.004, dec: 0.08, sus: 0.2, rel: 0.06, hold: 0.16, cut: 900, vol: 0.42, cutSweep: [1600, 420], cutT: 0.14 };
const SID_ARP = { kind: "arp", wave: "square", arp: [0, 3, 7], arpHz: 14, atk: 0.004, dec: 0.05, sus: 0.25, hold: 0.28, cut: 2200, vol: 0.22 };
const SID_LEAD = { kind: "sid", wave: "pulse", pw: 0.2, atk: 0.01, dec: 0.18, sus: 0.4, hold: 0.36, cut: 1800, vol: 0.2 };
const SID_HAT = { kind: "hat", atk: 0.001, dec: 0.04, sus: 0.05, hold: 0.05, cut: 5000, q: 3.5, vol: 0.16 };
const FM_BELL = { kind: "fm7", ratio: 3.01, idx: 620, idxDec: 0.4, atk: 0.004, dec: 0.22, sus: 0.15, hold: 0.5, cut: 2800, vol: 0.22 };
const FM_PAD = { kind: "fm2", ratio: 1.005, idx: 180, idxDec: 0.8, atk: 0.08, dec: 0.3, sus: 0.45, hold: 0.7, cut: 1400, vol: 0.16 };
const DX_EP = { kind: "dx", ratio: 14, idx: 1100, atk: 0.002, dec: 0.18, sus: 0.12, hold: 0.32, cut: 3600, vol: 0.2 };
const DX_BASS = { kind: "fm2", ratio: 0.5, idx: 90, atk: 0.006, dec: 0.1, sus: 0.4, hold: 0.2, cut: 700, vol: 0.34 };
const CHIP = { kind: "chip", atk: 0.002, dec: 0.08, sus: 0.1, hold: 0.12, cut: 3000, vol: 0.2 };
const CHIP_BASS = { kind: "sid", wave: "square", atk: 0.003, dec: 0.07, sus: 0.25, hold: 0.14, cut: 800, vol: 0.32 };

const GALWAY_BASS = [36, 36, 39, 36, 43, 36, 39, 41, 36, 36, 39, 36, 43, 46, 43, 39];
const GALWAY_ARP = [60, 0, 60, 0, 63, 0, 67, 0, 60, 0, 63, 0, 67, 0, 70, 0];

export const galway = {
  id: "galway",
  title: "WIZBALL SHORE",
  bpm: 132,
  speed: 3,
  inst: [SID_BASS, SID_ARP, SID_LEAD, SID_HAT],
  order: [0, 0, 1, 1],
  patterns: [
    build(32, (r) => {
      const b = GALWAY_BASS[r % 16];
      const a = GALWAY_ARP[r % 16];
      const hat = r % 2 === 0 ? n(80, 3, 0.5) : n(80, 3, 0.22);
      const lead = r === 8 || r === 24 ? n(72, 2, 0.55) : r === 12 || r === 28 ? n(75, 2, 0.5) : null;
      return row(n(b, 0, r % 4 === 0 ? 0.85 : 0.55), a ? n(a, 1, 0.55) : null, lead, hat);
    }),
    build(32, (r) => {
      const b = GALWAY_BASS[(r + 4) % 16] + (r >= 16 ? 2 : 0);
      const a = [63, 0, 67, 0, 70, 0, 67, 0][r % 8];
      const hat = r % 2 === 0 ? n(80, 3, 0.45) : null;
      const lead = r % 8 === 4 ? n(79, 2, 0.45) : r % 16 === 14 ? n(75, 2, 0.4) : null;
      return row(n(b, 0, 0.7), a ? n(a, 1, 0.5) : null, lead, hat);
    }),
  ],
};

export const fm7 = {
  id: "fm7",
  title: "FM7 DUSK",
  bpm: 96,
  speed: 4,
  inst: [FM_BELL, FM_PAD, DX_BASS, SID_HAT],
  order: [0, 1],
  patterns: [
    build(32, (r) => {
      const bass = [38, 0, 0, 38, 0, 0, 41, 0, 38, 0, 0, 36, 0, 0, 41, 0][r % 16];
      const bell = r % 8 === 0 ? n(74, 0, 0.7) : r % 8 === 4 ? n(77, 0, 0.45) : null;
      const pad = r % 16 === 0 ? n(62, 1, 0.6) : r % 16 === 8 ? n(65, 1, 0.5) : null;
      const hat = r % 4 === 2 ? n(90, 3, 0.3) : null;
      return row(bell, pad, bass ? n(bass, 2, 0.8) : null, hat);
    }),
    build(32, (r) => {
      const bass = [41, 0, 0, 41, 0, 38, 0, 0, 43, 0, 0, 41, 0, 36, 0, 0][r % 16];
      const bell = r % 4 === 0 ? n(79, 0, 0.55) : r % 8 === 6 ? n(74, 0, 0.4) : null;
      const pad = r === 0 ? n(67, 1, 0.55) : r === 16 ? n(65, 1, 0.5) : null;
      return row(bell, pad, bass ? n(bass, 2, 0.75) : null, r % 2 === 0 ? n(90, 3, 0.22) : null);
    }),
  ],
};

export const dx = {
  id: "dx",
  title: "DX ZINC",
  bpm: 108,
  speed: 4,
  inst: [DX_EP, DX_BASS, FM_PAD, SID_HAT],
  order: [0, 0, 1],
  patterns: [
    build(32, (r) => {
      const ep = [72, 0, 76, 0, 79, 0, 76, 72, 0, 74, 0, 76, 0, 79, 0, 76][r % 16];
      const bass = r % 4 === 0 ? n(36 + (r % 16 >= 8 ? 2 : 0), 1, 0.8) : r % 4 === 2 ? n(43, 1, 0.45) : null;
      const pad = r % 16 === 0 ? n(60, 2, 0.5) : null;
      return row(ep ? n(ep, 0, r % 4 === 0 ? 0.7 : 0.4) : null, bass, pad, r % 4 === 0 ? n(88, 3, 0.28) : null);
    }),
    build(32, (r) => {
      const ep = r % 2 === 0 ? n(81 - (r % 8 === 4 ? 3 : 0), 0, 0.45) : null;
      const bass = r % 8 === 0 ? n(34, 1, 0.85) : r % 8 === 4 ? n(41, 1, 0.5) : null;
      return row(ep, bass, r === 0 ? n(65, 2, 0.4) : null, r % 2 === 0 ? n(90, 3, 0.2) : null);
    }),
  ],
};

export const chip = {
  id: "chip",
  title: "CHIP PATROL",
  bpm: 150,
  speed: 2,
  inst: [CHIP, CHIP_BASS, SID_HAT, SID_ARP],
  order: [0, 1, 0, 1],
  patterns: [
    build(32, (r) => {
      const lead = [76, 76, 79, 76, 81, 79, 76, 72][r % 8];
      const bass = [40, 40, 40, 47, 43, 43, 40, 36][r % 8];
      return row(n(lead, 0, 0.55), n(bass, 1, 0.7), r % 2 === 0 ? n(92, 2, 0.35) : null, r % 8 === 0 ? n(64, 3, 0.4) : null);
    }),
    build(32, (r) => {
      const lead = [79, 81, 84, 81, 79, 76, 72, 76][r % 8];
      const bass = [43, 43, 40, 40, 36, 36, 43, 47][r % 8];
      return row(n(lead, 0, 0.5), n(bass, 1, 0.65), r % 4 === 0 ? n(92, 2, 0.3) : null, null);
    }),
  ],
};

export const SCORES = { galway, fm7, dx, chip };
export const SCORE_LIST = [galway, fm7, dx, chip];
