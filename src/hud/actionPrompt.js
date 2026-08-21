/**
 * Tiny implicit-action prompt. Bottom-center, above the desktop hint.
 * pointer-events none — never steals lotion Space or punches.
 */

export function createActionPrompt(host) {
  const el = document.createElement("div");
  el.id = "aus101-act";
  el.setAttribute("aria-live", "polite");
  Object.assign(el.style, {
    position: "fixed",
    left: "50%",
    bottom: "max(28px, calc(env(safe-area-inset-bottom, 0px) + 22px))",
    transform: "translateX(-50%)",
    zIndex: "9",
    pointerEvents: "none",
    font: "12px ui-sans-serif, system-ui, sans-serif",
    color: "rgba(251,246,234,0.82)",
    textShadow: "0 1px 3px #000",
    letterSpacing: "0.03em",
    display: "none",
    whiteSpace: "nowrap",
  });
  (host || document.body).appendChild(el);

  return {
    set(text) {
      const next = text || "";
      if (!next) {
        el.textContent = "";
        el.style.display = "none";
        return;
      }
      el.textContent = next;
      el.style.display = "block";
    },
    get text() {
      return el.textContent || "";
    },
    get visible() {
      return el.style.display !== "none" && !!el.textContent;
    },
  };
}
