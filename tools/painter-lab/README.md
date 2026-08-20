# Painter lab

Isolated cost-function test for the plein-air painter.

```bash
node tools/painter-lab/run.mjs
```

Photos in `photos/` (Unsplash/Wikimedia beach stills). The policy in `src/paint/policy.js` is tuned so he **paints most of the time** (~6–8 dabs per mix), reuses wells, and only rinses when the load is way off (ΔE > 55).

Pigment mix is Kubelka–Munk K/S. Wells hold 20 stroke-units. A load is 1–6. Fat brush spends 2 units/mark; thin spends 0.45.
