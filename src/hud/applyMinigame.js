/**
 * Apply overlay retired. Coverage is stamped in 3D (Space + T-101 IK).
 * show/hide/tick stay as no-ops so old callers do not throw.
 */

/**
 * @returns {{ show: Function, hide: Function, tick: Function, el: null }}
 */
export function createApplyMinigame() {
  return {
    show() {},
    hide() {},
    tick() {},
    el: null,
  };
}
