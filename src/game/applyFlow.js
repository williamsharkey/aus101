/**
 * One apply frame: squeeze into the hand, then stamp, then show/hide UX.
 */
import { pickApplyTarget, tickApply } from "./apply.js";

/**
 * @param {{
 *   lotion: { tick: Function, canPaint: Function },
 *   cast: object[],
 *   playerPos: { x: number, z: number },
 *   playerYaw: number,
 *   squeezing: boolean,
 *   dt: number,
 *   applyUx: { show: Function, hide: Function, tick: Function },
 *   bay: { track: Function, tick: Function },
 * }} args
 * @returns {{ npc: object, coverage: number } | null}
 */
export function runApplyFrame({ lotion, cast, playerPos, playerYaw, squeezing, dt, applyUx, bay }) {
  const t = dt > 0 ? dt : 0;
  lotion.tick({ squeezeHeld: squeezing, applying: false, dt: t });

  const target = pickApplyTarget(cast, playerPos);
  const painted =
    squeezing && lotion.canPaint() ? tickApply(cast, playerPos, true, t, playerYaw) : null;

  if (painted) {
    lotion.tick({ squeezeHeld: false, applying: true, dt: t });
    lotion.squeezing = !!squeezing;
    bay?.track?.(painted.npc);
  }

  const npc = painted?.npc || (squeezing && lotion.canPaint() ? target : null);
  if (npc) applyUx?.show?.(npc);
  else applyUx?.hide?.();

  applyUx?.tick?.();
  bay?.tick?.(t, painted?.npc ?? null);
  return painted;
}
