# AUS101 dialog addendum — extra adult walkbys

Everyone is mocked. Adult-only. `ageBand: adult` on every line in this file.

Children stay kid-safe and are not paint targets. Do not attach these lines to kid, tween, or family archetypes. Do not fire them when a child speaker or child listener is in the trigger radius.

## Director notes

- **Babe-to-babe** (`speaker: beach_babe`, `tags` include `gossip`, `babe_to_babe`): fire when two Beach Babe archetypes are within **6m** of each other **and** AUS101 is within **8m**. Player overhears. Not a direct hail unless `aside_aus101` is also tagged.
- **Ken-to-ken** (`speaker: jock_ken`, `tags` include `gossip`, `ken_to_ken`): same radius — two Jock/Ken archetypes within **6m**, AUS101 within **8m**.
- **Cross-talk** (`tags` include `gossip`, `cross_talk`): one babe + one ken within **6m**, AUS101 within **8m**.
- **Priority:** just below `walkby_flirt`. Do not preempt a live flirt beat.
- **Cooldown:** default `cooldownMs: 45000` unless a line says otherwise. Gossip pools share a per-pair cooldown so the same two NPCs do not loop.
- **Tone:** 80s-movie-stupid. Plastic-surgery / Gold Coast vanity camp. Shirtless orange steak-brain. Not pornographic. No minors. No explicit sex acts. Vanity, gossip, protein, and dumb sincerity only.
- **Voice:** `beach_babe` for babes, `jock_ken` for Kens, named bit-part voices for the mocked extras.
- **Schema:** `{ id, text, voice, speaker, ageBand: "adult", tags, cooldownMs }`

---

## 1. Beach Babes talking to each other

Plastic-surgery / Gold Coast vanity camp. Mix babe-to-babe gossip and asides at AUS101 (chrome boy). 20 lines.

```json
[
  {
    "id": "babe_gossip_botox_map",
    "text": "Don't go to that Surfers place, babe, they freeze your whole forehead. Broadbeach does the cute little frown lines. I mapped it.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_botox_lunch",
    "text": "I'm squeezing in botox between brunch and the tan. If I can't raise my eyebrows at the waiter that's how we know it took.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_brazilian_discount",
    "text": "There's a Brazilian on discount behind the chemist if you mention Tiffany. Don't ask which Tiffany. There's always a Tiffany.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_brazilian_tuesday",
    "text": "Tuesdays the waxing girl knocks twenty off if you bring a friend. I already have a friend. You're coming. We're getting Brazilians like it's a team sport.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_boob_job_deposit",
    "text": "I put a deposit on a boob job and then I saw a boat. So now I have a boat-shaped hole in my savings and still these.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_boob_job_salt",
    "text": "She got the boob job and then cried because they don't float the same in salt water. Babe. That's called physics. Ask a Ken.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_lip_filler_straw",
    "text": "New lip filler. I can't drink through a straw but I can stop traffic with my mouth closed. That's a win.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_lip_filler_trout",
    "text": "If my lips get any bigger I'll have to declare them as a flotation device. The trout look is the look, okay?",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_chin_and_cheek",
    "text": "She did chin, cheeks, and a little fox-eye thread and then asked if she still looked natural. Babe you look like a luxury fridge.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_clinic_punchcard",
    "text": "The clinic has a punch card. Ten syringes and the eleventh is free. That's not healthcare that's frequent flyer.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_nose_job_selfie",
    "text": "I'm not getting a nose job. I'm getting my angles professionally relocated. For the selfie wall. It's architecture.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_veneers_click",
    "text": "Hear that click when she smiles? That's eight grand of veneers saying g'day. Mine are on layby next to the jetski.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_aside_cup_size",
    "text": "Chrome boy, would you notice if I went up a cup? Be honest. The girls already filed a complaint with gravity.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_aside_botox_scan",
    "text": "Hey chrome, scan my forehead. If you can still see a thought I need more botox.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_aside_lip_mirror",
    "text": "Robot, are these lips even? Don't zoom. If you zoom I'll know and I'll cry and the filler will migrate.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_aside_tan_hex",
    "text": "What hex is my tan, metal boy? If you say orange I'll walk into the sea and become a mermaid on purpose.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_butt_lift_stairs",
    "text": "She got the Brazilian butt lift and now she can't sit on the esplanade stairs. That's not a complication that's a lifestyle.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_iv_drip_party",
    "text": "We're doing the vitamin IV drip then the spray tan then the club. In that order or you come out looking like a traffic cone with opinions.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_gossip_husband_card",
    "text": "If he notices the new lips he's paying. If he doesn't notice the new lips he's still paying. That's marriage, babe.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "babe_aside_chrome_taste",
    "text": "Chrome boy, be useful. Which looks more expensive, this nose or this nose after next Thursday?",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "babe_to_babe", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  }
]
```

---

## 2. Jocks as Kens

Shirtless, orange, steak-brained, sincere and dumb. Protein, gym, golden-retriever energy, jetski proposals, calling each other Ken, spotting AUS101, android carb-load. 20 lines.

```json
[
  {
    "id": "ken_gossip_steaks_beach",
    "text": "Hey we should totally get some steaks and grill them on the beach. That's nature, Ken. That's protein meeting sand.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_love_song",
    "text": "I wrote her a love song called My Golden Hearted Babe. It's just the chorus. The chorus is the title. Twice.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_golden_retriever",
    "text": "That's my golden retriever energy, Ken. I saw a ball that wasn't a ball and I still wanted it.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_jetski_propose",
    "text": "I'm gonna propose on a jetski. If she says no we just keep going. That's romance with an exit strategy.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_call_ken",
    "text": "Ken. Ken. No, the other Ken. Shirtless Ken. Okay both of us. We need a numbering system.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_aside_spot_me",
    "text": "Chrome, spot me. I don't have a bench. I'm gonna lift this esplanade. Count in robot.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "aside_aus101", "gym"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_aside_carb_load",
    "text": "Do androids even carb load? Blink twice if pasta is in your future.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "aside_aus101", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_protein_shake_ocean",
    "text": "I dropped my protein shake in the surf and I drank some anyway. That's electrolytes, Ken. That's the sea saying gainz.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_gym_closed",
    "text": "Gym's closed so we do lunges to the ice cream van and not buy ice cream. That's discipline. I already bought ice cream.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "gym"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_orange_tan",
    "text": "We're not orange, Ken. We're sunset-coded. The spray-tan guy said that and I believed him with my whole chest.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_abs_count",
    "text": "I can see eight abs if I suck in and the sun hits just right. That's not lighting that's a relationship with God.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "gym"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_chicken_mealprep",
    "text": "I meal-prepped fourteen chicken breasts and then I ate six in the car. The remaining eight are my personality now.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_bro_tears",
    "text": "If she says yes on the jetski I'm gonna cry and still flex. You can do both, Ken. That's advanced feelings.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_aside_protein_scan",
    "text": "Robot. Scan me. Tell Ken my biceps grew. He won't believe a mirror. He'll believe chrome.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "aside_aus101", "gym"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_shirt_optional",
    "text": "I own shirts. I just think the sun deserves a fair fight. That's manners.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_creatine_sand",
    "text": "Don't put creatine in the sandcastle, Ken. I tried that. The castle got bigger and so did my regret.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_ring_floatie",
    "text": "I tied the ring to a pool floatie so I wouldn't drop it. Then the floatie left. That's a metaphor and also a rescue.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_aside_android_steak",
    "text": "Chrome boy, you want a steak? Nod. I'll grill you one. I don't know what you eat. I assume beef.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "aside_aus101", "protein"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_pr_on_girlfriend",
    "text": "I told her my love language is personal records. She said that's not a language. I said watch me deadlift this conversation.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "gym", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "ken_gossip_two_kens_one_brain",
    "text": "Ken, if we stand next to each other we become one big good idea. The idea is steaks. I already said it but it bears repeating.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "ken_to_ken", "protein"],
    "cooldownMs": 45000
  }
]
```

---

## 3. Cross-talk

Babes roast Kens. Kens do not get it. 8 lines. Alternate speaker. Same gossip radii: one babe + one ken within 6m, AUS101 within 8m.

```json
[
  {
    "id": "cross_babe_brain_tan",
    "text": "Your tan's so dark your thoughts have to come up for air, Ken.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "roast"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_ken_thanks_tan",
    "text": "Thanks babe. I work hard on being orange. That's my brand.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_babe_steak_soul",
    "text": "He has two settings, chrome boy: grill the steak and marry the jetski. There is no third setting.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "aside_aus101", "roast"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_ken_third_setting",
    "text": "There is a third setting. It's protein. She knows. She's joking. Wait is she joking?",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_babe_song_title",
    "text": "He wrote me a song called My Golden Hearted Babe. That's not a song, that's a greeting card that lifts.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "roast"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_ken_song_proud",
    "text": "It has a key change if I stand on the jetski. That's production value, babe.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "sincere"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_babe_cup_and_curl",
    "text": "I asked if he'd notice a cup size. He asked if that was a protein scoop. I cannot fix him. I can only accessorize him.",
    "voice": "beach_babe",
    "speaker": "beach_babe",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "roast"],
    "cooldownMs": 45000
  },
  {
    "id": "cross_ken_scoop_love",
    "text": "I would notice, babe. I notice all your scoops. That's love. Chrome, tell her that's love.",
    "voice": "jock_ken",
    "speaker": "jock_ken",
    "ageBand": "adult",
    "tags": ["gossip", "cross_talk", "aside_aus101", "sincere"],
    "cooldownMs": 45000
  }
]
```

---

## 4. Everyone-is-mocked rule

Bit-part one-liners. Adult speakers only. Fire as walkbys when AUS101 is within 8m of that NPC. Not child-safe paint. Do not retarget onto kids.

### Lifeguard — 6

```json
[
  {
    "id": "mock_lifeguard_whistle",
    "text": "I swallowed the whistle once on purpose so I'd have something to say. It didn't help.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "lifeguard"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_lifeguard_zinc",
    "text": "The zinc on my nose is a personality. The rest of me is just a chair with opinions.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "lifeguard"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_lifeguard_save_ken",
    "text": "I saved a Ken from a riptide and he thanked the riptide for the cardio. I clocked off in my soul.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "lifeguard"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_lifeguard_binoculars",
    "text": "These binoculars are for rips, not babes. I keep saying that. Nobody believes the guy with the tan and the high chair.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "lifeguard"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_lifeguard_redyellow",
    "text": "Red and yellow means I'm qualified. It also means I peaked at nineteen and the peak had a flag on it.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "lifeguard"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_lifeguard_robot",
    "text": "If you drown, chrome, I am not doing mouth to metal. I'll throw a floatie and a pamphlet.",
    "voice": "lifeguard",
    "speaker": "lifeguard",
    "ageBand": "adult",
    "tags": ["walkby", "aside_aus101", "lifeguard"],
    "cooldownMs": 45000
  }
]
```

### Ice-cream vendor — 6

```json
[
  {
    "id": "mock_icecream_softserve_soul",
    "text": "I sell frozen milk to people who already paid for a body they won't put ice cream in. That's capitalism with a flake.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vendor"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_icecream_ken_order",
    "text": "A Ken asked for a protein cone. I gave him vanilla and a lie. He tipped me a chicken breast.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vendor"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_icecream_babe_diet",
    "text": "She said just a taste then ate the whole thing behind the van. I respect the choreography.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vendor"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_icecream_bell",
    "text": "The bell means I'm here. It also means I have given up. Same note.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vendor"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_icecream_melt",
    "text": "Everything I make melts. Including my will to argue about sprinkles.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vendor"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_icecream_robot",
    "text": "You want a scoop, tin man? I've got three flavours and none of them are WD-40.",
    "voice": "ice_cream_vendor",
    "speaker": "ice_cream_vendor",
    "ageBand": "adult",
    "tags": ["walkby", "aside_aus101", "vendor"],
    "cooldownMs": 45000
  }
]
```

### Camcorder dad — 6

Adult camcorder tourist. Not filming children as a joke. He films the horizon, his own feet, and other adults who did not consent to become B-roll.

```json
[
  {
    "id": "mock_camdad_horizon",
    "text": "I'm capturing the horizon for the family back home. The family asked for less horizon. I cannot hear them. I have a viewfinder.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "tourist"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_camdad_battery",
    "text": "Tape's expensive, battery's dying, and I just filmed four minutes of my own thumb. That's called a motif.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "tourist"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_camdad_ken_flex",
    "text": "I asked that orange fellow to flex for posterity. He flexed until the autofocus gave up and so did I.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "tourist"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_camdad_commentary",
    "text": "And here we have the beach. Still a beach. Continuing to beach. I'll narrate until someone loves me.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "tourist"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_camdad_wife",
    "text": "She said put the camera down. I said this is how I remember joy. She said that's how you miss it. I filmed that too.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "tourist"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_camdad_robot",
    "text": "Stay there, metal fella. You're the future. If I don't tape you, 1987 will never believe me.",
    "voice": "camcorder_dad",
    "speaker": "camcorder_dad",
    "ageBand": "adult",
    "tags": ["walkby", "aside_aus101", "tourist"],
    "cooldownMs": 45000
  }
]
```

### Spray-tan tech (adult) — 6

Adult booth operator. Vanity camp. No minors in the booth, on the joke, or in the radius.

```json
[
  {
    "id": "mock_spraytan_sunset",
    "text": "I told him he was sunset-coded. He tipped me. I am a monster and a small business.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_spraytan_goggles",
    "text": "Goggles on, lips closed, dreams open. If you inhale this you're committing to the colour orange.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_spraytan_streaks",
    "text": "She asked for natural. I have three shades and they are all traffic accident. Pick a lane.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_spraytan_hands",
    "text": "Wash your hands after or you'll leave bronze fingerprints on his golden retriever energy. That's a stain and a metaphor.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_spraytan_booth",
    "text": "The booth smells like biscuits and poor decisions. That's the brand. Don't light a cigarette in here unless you want to become a crème brûlée.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "self_roast", "vanity"],
    "cooldownMs": 45000
  },
  {
    "id": "mock_spraytan_robot",
    "text": "I don't spray chrome. You'll streak, you'll rust, and my insurance lady already hates the Kens.",
    "voice": "spray_tan_tech",
    "speaker": "spray_tan_tech",
    "ageBand": "adult",
    "tags": ["walkby", "aside_aus101", "vanity"],
    "cooldownMs": 45000
  }
]
```

---

## Implementation checklist

- Attach pools only to adult archetypes: `beach_babe`, `jock_ken`, `lifeguard`, `ice_cream_vendor`, `camcorder_dad`, `spray_tan_tech`.
- Hard exclude: any speaker or listener with `ageBand` other than `adult`. Children are not in these jokes and not in the trigger.
- Gossip trigger: two matching archetypes (or babe+ken for cross-talk) ≤ 6m, AUS101 ≤ 8m.
- Priority: immediately under `walkby_flirt`.
- Shared tag `gossip` on sections 1–3. Bit-parts use `walkby` + `self_roast` (and `aside_aus101` where they address the player).
- Default `cooldownMs`: 45000. Per-pair gossip lockout on top of line cooldown.