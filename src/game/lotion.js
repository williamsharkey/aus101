/**
 * Finite lotion: 200 ml bottle, 6 ml hand. Squeeze then paint.
 * Empty bottle with leftover hand is legal.
 */

const BOTTLE_ML = 200;
const HAND_CAP = 6;
const SQUEEZE_ML_S = 10;
const PAINT_ML_S = 2.2;
/** First squeeze frame puts enough on the palm for canPaint(). */
const STARTER_ML = 1;

export function createLotion() {
  const lotion = {
    bottleMl: BOTTLE_ML,
    handMl: 0,
    squeezing: false,
    _waste: 0,

    /**
     * @param {{ squeezeHeld?: boolean, applying?: boolean, hitting?: boolean, dt?: number }} frame
     */
    tick({ squeezeHeld = false, applying = false, hitting = false, dt = 0 } = {}) {
      const t = dt > 0 ? dt : 0;
      lotion.squeezing = !!squeezeHeld;

      if (lotion.squeezing && lotion.bottleMl > 0) {
        let from = Math.min(SQUEEZE_ML_S * t, lotion.bottleMl);
        if (lotion.handMl <= 0) {
          from = Math.max(from, Math.min(STARTER_ML, lotion.bottleMl));
        }
        lotion.bottleMl -= from;
        lotion.handMl += from;
        if (lotion.handMl > HAND_CAP) {
          lotion._waste += lotion.handMl - HAND_CAP;
          lotion.handMl = HAND_CAP;
        }
      }

      if ((applying || hitting) && lotion.handMl > 0) {
        lotion.handMl -= Math.min(PAINT_ML_S * t, lotion.handMl);
      }
    },

    canPaint() {
      return lotion.handMl > 0;
    },

    waste() {
      return lotion._waste;
    },
  };
  return lotion;
}
