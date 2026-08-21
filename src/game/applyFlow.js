/**
 * One apply frame: squeeze into the hand, stamp, orbit the subject.
 * The 2D coverage overlay is gone — applyUx is ignored if passed.
 */
import { stepApplyOrbit, tickApply } from "./apply.js";

/**
 * @param {{
 *   lotion: { tick: Function, canPaint: Function, squeezing?: boolean },
 *   cast: object[],
 *   playerPos: { x: number, z: number },
 *   playerYaw: number,
 *   squeezing: boolean,
 *   dt: number,
 *   applyUx?: { show?: Function, hide?: Function, tick?: Function },
 *   bay?: { track: Function, tick: Function },
 *   player?: object,
 *   keys?: Record<string, boolean>,
 *   col?: object[],
 *   bounds?: object,
 * }} args
 * @returns {{ npc: object, coverage: number, uv?: object, aim?: object } | null}
 */
export function runApplyFrame({
  lotion,
  cast,
  playerPos,
  playerYaw,
  squeezing,
  dt,
  bay,
  player,
  keys,
  col,
  bounds,
}) {
  const t = dt > 0 ? dt : 0;
  lotion.tick({ squeezeHeld: squeezing, applying: false, dt: t });

  const painted =
    squeezing && lotion.canPaint() ? tickApply(cast, playerPos, true, t, playerYaw) : null;
  if (!painted) tickApply(cast, playerPos, false, 0, playerYaw);

  if (painted) {
    lotion.tick({ squeezeHeld: false, applying: true, dt: t });
    lotion.squeezing = !!squeezing;
    bay?.track?.(painted.npc);
    if (player && painted.aim) {
      stepApplyOrbit(player, keys, painted.npc, painted.aim, t, col, bounds);
    }
  }

  if (bay?.track) {
    for (const npc of cast) {
      const m = npc?.mesh || npc;
      if (!m?.position) continue;
      const d = Math.hypot(m.position.x - playerPos.x, m.position.z - playerPos.z);
      if (d < 14) bay.track(npc);
    }
  }
  bay?.tick?.(t, painted?.npc ?? null);
  return painted;
}
