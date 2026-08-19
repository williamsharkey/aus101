# Shot extras

Modules dropped here are auto-imported by the audit harness before its first
render, so content the world does not spawn yet can still be reviewed.

Each module gets `window.__api`:

```js
const { THREE, scene, renderer, camera, player, onTick } = window.__api;
onTick((t) => { /* advance your rig; t is sim seconds */ });
```

These are dev-only review rigs — they never reach `dist/`. For a one-off camera
you do not need a module at all; use `--custom` on `scripts/shots.mjs`.

Keep any shot list in ascending `t`: the harness only steps the sim forward, so
a decreasing `t` renders later state under an earlier label.
