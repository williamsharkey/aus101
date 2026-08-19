/**
 * First-meet cutscenes. Each id plays once per session when the player
 * walks into radius. Same still-reel language as the intro.
 */

const HOLD = 2800;

const REELS = {
  piano: [{ src: "assets/media/cutscene/enc_piano.jpg", hold: HOLD }],
  painter: [{ src: "assets/media/cutscene/enc_painter.jpg", hold: HOLD }],
  incel: [{ src: "assets/media/cutscene/enc_incel.jpg", hold: HOLD }],
  kid: [{ src: "assets/media/cutscene/enc_kid.jpg", hold: HOLD }],
  babe: [{ src: "assets/media/cutscene/enc_babe.jpg", hold: HOLD }],
  fight: [{ src: "assets/media/cutscene/enc_fight.jpg", hold: HOLD }],
};

function dist2(a, b) {
  if (!a || !b) return Infinity;
  const ax = a.x ?? a.position?.x;
  const az = a.z ?? a.position?.z;
  const bx = b.x ?? b.position?.x;
  const bz = b.z ?? b.position?.z;
  if (ax == null || bx == null) return Infinity;
  const dx = ax - bx;
  const dz = az - bz;
  return dx * dx + dz * dz;
}

/**
 * @param {{
 *   reel: { start: Function, playing?: boolean },
 *   getPlayerPos: () => {x:number,z:number},
 *   spots: { id: string, getPos: () => any, radius?: number }[],
 *   isPlaying: () => boolean,
 *   onStart?: (id:string) => void,
 *   onEnd?: (id:string) => void,
 * }} opts
 */
export function createEncounterDirector(opts) {
  const seen = new Set();
  let busy = false;
  let current = null;

  return {
    seen,
    tick() {
      if (busy || !opts.isPlaying()) return;
      if (opts.reel.playing) return;
      const p = opts.getPlayerPos();
      for (const spot of opts.spots) {
        if (seen.has(spot.id)) continue;
        const r = spot.radius ?? 5.5;
        if (dist2(p, spot.getPos()) > r * r) continue;
        const stills = REELS[spot.id];
        if (!stills) continue;
        seen.add(spot.id);
        busy = true;
        current = spot.id;
        const prevDone = opts.reel.onDone;
        opts.reel.onDone = () => {
          opts.reel.onDone = prevDone;
          busy = false;
          const id = current;
          current = null;
          opts.onEnd?.(id);
        };
        opts.onStart?.(spot.id);
        opts.reel.start(stills);
        return;
      }
    },
  };
}
