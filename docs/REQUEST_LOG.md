# AUS101 — full request log from this session

Extracted from the conversation (63 user messages). Items later **superseded** are marked. This is what you asked for, not a claim that every line shipped.

---

## Painting (easel painter)

1. Beach artist with a **blank canvas** and a real brush that strokes the canvas.
2. He paints **what he sees**, rendered from **his own Three.js camera**.
3. He **locks a position and look angle**, maps that view onto the canvas (view UV = canvas UV).
4. Each stroke: **diff live view vs current canvas**, stamp where the **largest error** is, **forever**.
5. Use the **other hand**; body pose was awkward (stand so the painting arm reaches the canvas).
6. Canvas must **not start black**.
7. Canvas must **not** start as a photo dump of the sky: no red sunset stripes / gray horizon on first frame — **plain linen**, then paint.
8. **Real palette**: infinite **tubes** of starting colors (not infinite mixed wells).
9. Squeeze tubes into about **10 empty dimpled wells**.
10. Each dimple holds **20 strokes** of paint, then it runs out.
11. **Palette knife**: cut/mix from one well into another; mix premixed puddles **or** fresh tube paint.
12. **Real paint math** for mixed color (pigment mix, not RGB lerp).
13. **Load the brush** from a well: **1–6 strokes** per dip (6 is max); taking 6 also drains 6 from the well.
14. **Cost function**: is it worth loading a “good enough” color for ~6 upcoming dabs, or mixing a perfect color for each spot?
15. He should behave like a **normal painter**: mostly **use the loaded brush** unless the color is **way off**.
16. Isolated **test lab** on downloaded **natural beach photos** to tune that cost function, then implement the winner in-game.
17. Simple **stroke library**: a **dot**, or a stroke about **1/20 of canvas width**.
18. **Fat brush** and **thin brush**; thin uses **less paint**.
19. Cost to **rinse in a water cup** vs keep using a dirty brush vs **switch brushes**.
20. Confirm this work was **not dropped** after later merges; make mix/load/paint **visible** (tabouret, wells changing color, timed mix vs paint).

---

## Apply sunscreen (player verb)

21. 3D surface mapping onto bodies (UV / projection).
22. Squeeze SPF into the **hand**, then **rub**; finite volume; spread physics.
23. Coverage changes **skin lighting** (sheen, roughness, white-cast).
24. Squeeze / first **slap** / **lather** / **spread** SFX.
25. Desktop apply must **actually paint** (not a no-op).
26. Custom UX: **flat body projection**; white where lotion is; mini-game.
27. Visible lotion on people **in the 3D world**, not only the HUD.
28. Mini-UX like **scribbling a white marker** on non-white skin.
29. Vertical **test-tube** fills with white; top ≈ **95%** of outlined body coverage.
30. Do **not** draw empty gray UV-tracking rectangles; list **only people you have applied lotion to**.

---

## Robot / camera / items

31. Player is **AUS101**, T-101-like, red eyes; originally **chrome**, then **copper/gold tube skeleton**.
32. Third-person camera like **GTA** so you can see the robot.
33. Footsteps when **you** walk.
34. After laser/punch: people **scream and run**; **T-101s and cops** come.
35. After cops arrive: **no high freeze-cam**, **no dead end**.
36. Cops **drag him to a building** (jail), **hook him to a computer**, camera **follows live** (no cutscene), then **reprogram / start again**.
37. After reset he **does not have the laser**.
38. Laser is a **hidden pickup**, **random** each run, well hidden.
39. Laser **SFX**; screams; **radio chatter**; **cop sounds**.
40. Other people have **walking foley** and other sensible foley.

---

## World / Gold Coast

41. Reuse **Coconuts** (Steve / a-better-internet) for world/objects/sound/control as a **starting kit**.
42. New **beaches, waves, boardwalk**; restyle everything **Gold Coast**, not Ocean City.
43. Import Coconuts then **modify** looks/levels to Gold Coast.
44. Flesh out a real level (not black sky + two boxes); Coconuts assets if needed.
45. Cascading **sunset strips** (purple / pink / blue / green) from above, sun blazing through, **clouds and lighting**.
46. DJ booth, big screen, dancers, deadpan sarcastic visuals.
47. Boombox + women dancing; **one music bed at a time** (fade Carpenter into nearest boombox/DJ/etc.; **keep** the existing Carpenter bed as default).
48. Kens with **guitars** who sing and play.
49. Piano mystic **in the deep waves**, Digital Shades Vol. I / M83-**style** ambient (original, not the record).
50. Piano guy must **actually play**.
51. Keyboard/synth guy must **actually play**.
52. Synth + **drum machine** on the beach; program, save to **tapes**, put tapes in **boombox** or **DJ**.
53. Ice-cream van, spray-tan tent, extra dressing.
54. Dancer **arm angles were reversed** — fix.

---

## Characters / bodies / gadgets

55. Full **planted bodies** (no flying torsos / little heads).
56. Phones and tablets in hands; stupid looping content (BBL tips, chemtrails, vape juice, etc.).
57. Phones **parented correctly in hands**.
58. Incel: long clothes, shirt **on**, tropes + `/iamverysmart`.
59. Hardstomp / Flume / Kylie / Sia Gold Coast idiot archetypes; goths; vapes; cigarettes.
60. Kids and seagulls: camp lines; kids **not** sexualized / not paint targets.
61. Poster lineup = in-game characters (copper robot, jock, babe, incel, etc.).

---

## Audio / VO

62. TikTok TTS, many voices, ~200 lines, camp 80s tropes.
63. Seagull + kid lines.
64. Carpenter 80s soundtrack; tracker modules; Juno-106 swells.
65. Radio DJ, prev / pause / next, 50 quips, announce tracks.
66. No TikTok session — try other bake strategies.
67. Replace **chrome** with **copper** in VO.
68. One conversation at a time except interjections (`oi`, `watch out`).
69. Voices **0.5×**; footsteps **0.4×**.
70. Distance fade: only closest **1–2** speakers; no cacophony.
71. No delayed VO dump (~1 min later everything at once).
72. Carpenter must be **music**, not a held drone.

---

## Controls / iOS / shipping

73. WASD + arrows + space; mobile **minimal** sticks/buttons; **no user-select**.
74. iPhone Safari fullscreen; background color under chrome; `dist/` playable HTML, no server.
75. Mobile: unlabeled buttons (no WASD/Space text).
76. Second, smaller **look stick** (mouse-look).
77. Fighting + **all missing controls** on mobile (punch, laser, squeeze, jog).
78. No iOS text-select / zoom **loupe**; arcade lock, not a document.
79. iOS was frozen / intro never played — unblock.
80. Credit Steve / Coconuts in README; **public** `williamsharkey/aus101`; commit + push.
81. Confirm `dist/` is actually built and pushed.
82. Merge Claude isolated worker if unmerged.
83. Check **laserbarf.com** aus101 cart serves latest `main`.

---

## Cutscenes / poster (later partly undone)

84. Movie-poster **first frame** for laserbarf thumbnail: full-body lineup, huge **AUS101**, no tiny instruction menu.
85. Imagine bunker skit (T-101s captured → PSA lotion robots) + billboards / TV loops.
86. Folksy PSA guy (Cocoon / diabetes-ad energy): 5 videos, Imagine, longest duration; user later ran `psa1`–`psa5` from Downloads.
87. Encounter cutscenes (once per game): piano, incel, kid, babe, fighters, painter.
88. Camp intro: Kylie/Sia-like officials in military heels strutting a bunker.
89. **Superseded:** “remove **all** cutscenes, they are not worth it.”
90. Poster title **once**, centered, sharp: **AUS101** / **TERMINATE UV**. Remove the giant duplicate behind/CSS overlay.

---

## Process asks

91. Design the game (humor + technical approach) before/while building.
92. Launch **swarms / parallel / background agents** whenever work is hung or backlog is large.
93. This file: list **everything asked**, including painter + jail-reprogram-without-laser, from the whole log.
