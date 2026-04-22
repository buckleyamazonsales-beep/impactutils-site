const DEFAULT_ITEMS = {
  "VO Tokens": {suggested_buy:"8M",suggested_sell:"14M",avg_buy:0,avg_sell:0,avg_roi:0,trade_count:0,avg_sell_time:0},
  "Mystery Pack": {suggested_buy:"250M",suggested_sell:"400M",avg_buy:0,avg_sell:0,avg_roi:0,trade_count:0,avg_sell_time:0},
  "Twisted Bow": {suggested_buy:"9B",suggested_sell:"12B",avg_buy:0,avg_sell:0,avg_roi:0,trade_count:0,avg_sell_time:0},
  "Revenant Ether": {suggested_buy:"15k",suggested_sell:"35k",avg_buy:0,avg_sell:0,avg_roi:0,trade_count:0,avg_sell_time:0}
};

// Boss KC targets for progression
const BOSS_PROGRESSIONS = {
  "Zulrah": { easy: 50, medium: 100, hard: 250 },
  "Vorkath": { easy: 50, medium: 100, hard: 200 },
  "The Nightmare": { easy: 25, medium: 50, hard: 100 },
  "Alchemical Hydra": { easy: 50, medium: 100, hard: 200 },
  "Gauntlet": { easy: 10, medium: 50, hard: 200 },
  "Theatre of Blood": { easy: 10, medium: 25, hard: 50 },
  "Chambers of Xeric": { easy: 20, medium: 50, hard: 100 }
};

const GENERAL_SKILL_MILESTONES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];
const GENERAL_SKILL_STEP_TARGETS = [10, 20, 30, 40, 50, 60, 70, 75, 80, 85, 90, 92, 95, 97, 99];

// Skill training targets
const SKILL_MILESTONES = {
  "Attack": [...GENERAL_SKILL_MILESTONES],
  "Strength": [...GENERAL_SKILL_MILESTONES],
  "Defence": [...GENERAL_SKILL_MILESTONES],
  "Hitpoints": [...GENERAL_SKILL_MILESTONES],
  "Ranged": [...GENERAL_SKILL_MILESTONES],
  "Prayer": [...GENERAL_SKILL_MILESTONES],
  "Magic": [...GENERAL_SKILL_MILESTONES],
  "Cooking": [...GENERAL_SKILL_MILESTONES],
  "Woodcutting": [...GENERAL_SKILL_MILESTONES],
  "Fletching": [...GENERAL_SKILL_MILESTONES],
  "Fishing": [...GENERAL_SKILL_MILESTONES],
  "Firemaking": [...GENERAL_SKILL_MILESTONES],
  "Crafting": [...GENERAL_SKILL_MILESTONES],
  "Smithing": [...GENERAL_SKILL_MILESTONES],
  "Mining": [...GENERAL_SKILL_MILESTONES],
  "Herblore": [...GENERAL_SKILL_MILESTONES],
  "Agility": [...GENERAL_SKILL_MILESTONES],
  "Thieving": [...GENERAL_SKILL_MILESTONES],
  "Slayer": [10, 25, 40, 55, 70, 80, 87, 90, 95, 99],
  "Farming": [...GENERAL_SKILL_MILESTONES],
  "Runecrafting": [...GENERAL_SKILL_MILESTONES],
  "Hunter": [...GENERAL_SKILL_MILESTONES],
  "Construction": [...GENERAL_SKILL_MILESTONES]
};

const SKILL_STEP_TARGETS = {
  Attack: [...GENERAL_SKILL_STEP_TARGETS],
  Strength: [...GENERAL_SKILL_STEP_TARGETS],
  Defence: [...GENERAL_SKILL_STEP_TARGETS],
  Hitpoints: [...GENERAL_SKILL_STEP_TARGETS],
  Ranged: [...GENERAL_SKILL_STEP_TARGETS],
  Prayer: [...GENERAL_SKILL_STEP_TARGETS],
  Magic: [...GENERAL_SKILL_STEP_TARGETS],
  Cooking: [...GENERAL_SKILL_STEP_TARGETS],
  Woodcutting: [...GENERAL_SKILL_STEP_TARGETS],
  Fletching: [...GENERAL_SKILL_STEP_TARGETS],
  Fishing: [...GENERAL_SKILL_STEP_TARGETS],
  Firemaking: [...GENERAL_SKILL_STEP_TARGETS],
  Crafting: [...GENERAL_SKILL_STEP_TARGETS],
  Smithing: [...GENERAL_SKILL_STEP_TARGETS],
  Mining: [...GENERAL_SKILL_STEP_TARGETS],
  Herblore: [...GENERAL_SKILL_STEP_TARGETS],
  Agility: [...GENERAL_SKILL_STEP_TARGETS],
  Thieving: [...GENERAL_SKILL_STEP_TARGETS],
  Farming: [...GENERAL_SKILL_STEP_TARGETS],
  Runecrafting: [...GENERAL_SKILL_STEP_TARGETS],
  Hunter: [...GENERAL_SKILL_STEP_TARGETS],
  Construction: [...GENERAL_SKILL_STEP_TARGETS],
  Slayer: [10, 25, 40, 55, 70, 75, 80, 85, 87, 90, 92, 95, 97, 99]
};

const XP_GOAL_PRIORITY = {
  Slayer: 100,
  Magic: 95,
  Ranged: 94,
  Prayer: 93,
  Strength: 92,
  Attack: 91,
  Defence: 90,
  Hitpoints: 89,
  Herblore: 84,
  Agility: 82,
  Crafting: 80,
  Construction: 79,
  Hunter: 77,
  Thieving: 76,
  Farming: 74,
  Mining: 72,
  Smithing: 71,
  Runecrafting: 70,
  Fletching: 68,
  Woodcutting: 66,
  Fishing: 64,
  Cooking: 58,
  Firemaking: 54
};

const FREE_SLAYER_TASK_LIMIT = 5;

const SLAYER_TASKS = [
  { name: "Amoxliatl", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below for mechanics and route details." },
  { name: "Araxxor", tier: "elite", guide: "Verified wiki support available. Use the media block below for the current guide source." },
  { name: "Barrows", tier: "hard", guide: "Verified wiki setup support available. This page includes a basic setup image pulled directly from the wiki." },
  { name: "Callisto", tier: "elite", guide: "Verified wiki support available. Open the linked guide video for route and wilderness prep." },
  { name: "Cerberus", tier: "elite", guide: "Verified wiki support available. Use the media block below for the current guide source." },
  { name: "Chaos Fanatic", tier: "hard", guide: "Verified wiki support available. This page includes a guide video and additional written setup guidance." },
  { name: "Corporeal Beast", tier: "elite", guide: "Verified wiki support available. This page includes multiple gear examples, an inventory image, and a guide video." },
  { name: "Crazy Archaeologist", tier: "hard", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Doom of Mokhaiotl", tier: "elite", guide: "Verified wiki support available. Multiple guide videos are linked on the wiki page." },
  { name: "Duke Sucellus", tier: "elite", guide: "Verified wiki support available. Multiple guide videos are linked on the wiki page." },
  { name: "King Black Dragon", tier: "hard", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Kraken", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Leviathan", tier: "elite", guide: "Verified wiki support available. Multiple guide videos are linked on the wiki page." },
  { name: "Nex", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Phantom Muspah", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Skotizo", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Vardovis", tier: "elite", guide: "Verified wiki support available. Multiple guide videos are linked on the wiki page." },
  { name: "Vet'ion", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Vorkath", tier: "elite", guide: "Verified wiki support available. This page includes setups and a guide video." },
  { name: "Whisperer", tier: "elite", guide: "Verified wiki support available. Multiple guide videos are linked on the wiki page." },
  { name: "Xamphur", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Yama", tier: "elite", guide: "Verified wiki support available. Open the linked guide video below." },
  { name: "Zulrah", tier: "elite", guide: "Verified wiki support available. This page includes setup images and a guide video." }
];

const STRATEGY_LIBRARY = {
  conservative: {
    label: "Conservative fixed fractional",
    riskPct: 0.02,
    slayerShare: 0.7,
    note: "Lower variance: flat bet small, protect the roll, and never chase losses."
  },
  balanced: {
    label: "Balanced fixed fractional",
    riskPct: 0.03,
    slayerShare: 0.55,
    note: "Most players are better off here: flat staking around 1.75-2% with hard caps."
  },
  aggressive: {
    label: "Aggressive fixed fractional",
    riskPct: 0.05,
    slayerShare: 0.35,
    note: "Higher variance and not usually the best long-run default in a fair 50/50."
  },
  online_fractional: {
    label: "Flat bankroll percentage",
    riskPct: 0.025,
    slayerShare: 0.6,
    note: "A bankroll-driven flat bet. This is one of the cleanest ways to survive variance."
  },
  online_antimartingale: {
    label: "Capped anti-martingale",
    riskPct: 0.03,
    slayerShare: 0.6,
    note: "Only useful as a short heater play: tiny press after a win, then cash out quickly."
  },
  online_fractional_kelly: {
    label: "Small fractional Kelly-style",
    riskPct: 0.02,
    slayerShare: 0.5,
    note: "Fractional Kelly-inspired sizing with smaller fractions to cut volatility and ruin risk."
  }
};

const FP_STAKE_MODELS = {
  conservative: {
    suggestedPct: 0.0125,
    capPct: 0.02,
    pressSequence: [1],
    cashOutAfter: 0,
    note: "Flat stake. No pressing after wins."
  },
  balanced: {
    suggestedPct: 0.0175,
    capPct: 0.025,
    pressSequence: [1],
    cashOutAfter: 0,
    note: "Flat stake by default. Best for reducing variance in a fair 50/50."
  },
  aggressive: {
    suggestedPct: 0.025,
    capPct: 0.035,
    pressSequence: [1, 1.08],
    cashOutAfter: 2,
    note: "Small one-step press after a win, then reset."
  },
  online_fractional: {
    suggestedPct: 0.02,
    capPct: 0.025,
    pressSequence: [1],
    cashOutAfter: 0,
    note: "Fractional bankroll sizing. Flat stake, scaled to bankroll."
  },
  online_antimartingale: {
    suggestedPct: 0.018,
    capPct: 0.025,
    pressSequence: [1, 1.08],
    cashOutAfter: 2,
    note: "Tiny win press only. Cash out after 2 wins and reset."
  },
  online_fractional_kelly: {
    suggestedPct: 0.015,
    capPct: 0.02,
    pressSequence: [1],
    cashOutAfter: 0,
    note: "Smaller fractional sizing. No progressive pressing."
  },
  custom_tiered: {
    suggestedPct: 0.02,
    capPct: 0.03,
    pressSequence: [1],
    cashOutAfter: 0,
    note: "Uses your custom tiers for planning, but keeps the FP logger on capped flat sizing."
  }
};

const GEAR_PROGRESSIONS = [
  { name: "Dragon defender", price: 1500000, stats: { attack: 60, strength: 60 }, category: "melee", importance: 98, desc: "Massive melee upgrade for almost every account stage." },
  { name: "Fire cape", price: 5000000, stats: { ranged: 70, defence: 45 }, category: "melee", importance: 97, desc: "Huge all-purpose cape upgrade and one of the best early priority unlocks." },
  { name: "Barrows gloves", price: 12000000, stats: { defence: 41, attack: 40, strength: 40, ranged: 40, magic: 40 }, category: "utility", importance: 96, desc: "One of the best account-wide unlocks because it upgrades almost every combat style at once." },
  { name: "Ava's accumulator", price: 3500000, stats: { ranged: 50 }, category: "ranged", importance: 94, desc: "Cheap early ranged utility piece that pays off across Slayer, PvM, and bossing." },
  { name: "Dragon boots", price: 18000000, stats: { defence: 60, strength: 60 }, category: "melee", importance: 92, desc: "Simple but efficient melee upgrade that slots into almost every general setup." },
  { name: "Toxic blowpipe", price: 85000000, stats: { ranged: 75 }, category: "ranged", importance: 96, desc: "Core ranged upgrade for PvM, Slayer, and general account progression." },
  { name: "Trident of the swamp", price: 65000000, stats: { magic: 75 }, category: "magic", importance: 95, desc: "Staple magic PvM weapon that unlocks smoother bossing and Slayer." },
  { name: "Abyssal whip", price: 45000000, stats: { attack: 70 }, category: "melee", importance: 93, desc: "Reliable melee backbone for training and most general combat grinds." },
  { name: "Occult necklace", price: 70000000, stats: { magic: 70 }, category: "magic", importance: 92, desc: "High-impact magic necklace upgrade with value across many PvM setups." },
  { name: "Bandos godsword", price: 140000000, stats: { strength: 75, attack: 75 }, category: "melee", importance: 90, desc: "Important spec weapon for bossing, team content, and PvM utility." },
  { name: "Amulet of torture", price: 90000000, stats: { attack: 75, hitpoints: 75 }, category: "melee", importance: 88, desc: "High-impact melee amulet once your main weapons are already handled." },
  { name: "Necklace of anguish", price: 110000000, stats: { ranged: 75, hitpoints: 75 }, category: "ranged", importance: 89, desc: "Top ranged amulet and a clean upgrade for most bossing paths." },
  { name: "Tormented bracelet", price: 105000000, stats: { magic: 75, hitpoints: 75 }, category: "magic", importance: 89, desc: "Best-in-slot magic glove slot for many PvM setups." },
  { name: "Ferocious gloves", price: 85000000, stats: { attack: 80, strength: 80 }, category: "melee", importance: 88, desc: "Excellent late-midgame melee gloves once the core unlocks are done." },
  { name: "Berserker ring (i)", price: 65000000, stats: { attack: 65, strength: 65 }, category: "melee", importance: 87, desc: "A classic strength ring upgrade that keeps paying off across melee content." },
  { name: "Dragon hunter lance", price: 180000000, stats: { attack: 78 }, category: "melee", importance: 85, desc: "Huge value if your account is leaning into dragon bosses and money makers." },
  { name: "Dragon hunter crossbow", price: 190000000, stats: { ranged: 65 }, category: "ranged", importance: 84, desc: "Strong dragon-focused ranged option if your grinds skew that way." },
  { name: "Ring of suffering", price: 95000000, stats: { hitpoints: 75, defence: 75 }, category: "utility", importance: 84, desc: "Very strong defensive utility ring for bossing and longer trips." },
  { name: "Lightbearer", price: 125000000, stats: { hitpoints: 75 }, category: "utility", importance: 83, desc: "Strong spec-focused utility ring for accounts leaning into bossing." },
  { name: "Armadyl chestplate", price: 130000000, stats: { ranged: 70, defence: 70 }, category: "ranged", importance: 76, desc: "Premium ranged armor pickup after core weapon slots are stabilized." },
  { name: "Armadyl helmet", price: 80000000, stats: { ranged: 70, defence: 70 }, category: "ranged", importance: 74, desc: "Helmet upgrade for finishing out a premium ranged set." },
  { name: "Armadyl chainskirt", price: 115000000, stats: { ranged: 70, defence: 70 }, category: "ranged", importance: 75, desc: "Pairs well with other ranged upgrades when polishing endgame setups." },
  { name: "Bandos chestplate", price: 120000000, stats: { defence: 65, strength: 70 }, category: "melee", importance: 77, desc: "Great strength armor upgrade for melee-heavy progression." },
  { name: "Bandos tassets", price: 115000000, stats: { defence: 65, strength: 70 }, category: "melee", importance: 78, desc: "Important melee armor slot once your weapon lineup is healthy." },
  { name: "Avernic defender", price: 220000000, stats: { attack: 70, strength: 70 }, category: "melee", importance: 82, desc: "Expensive but meaningful defender upgrade for mature melee setups." },
  { name: "Blood moon chestplate", price: 95000000, stats: { defence: 75, strength: 75 }, category: "melee", importance: 73, desc: "A sturdy mid-to-late melee armor pickup that bridges toward endgame kits." },
  { name: "Blood moon tassets", price: 90000000, stats: { defence: 75, strength: 75 }, category: "melee", importance: 72, desc: "Strong melee leg-slot upgrade if you are not yet at full premium gear." },
  { name: "Primordial boots", price: 95000000, stats: { strength: 75, defence: 75 }, category: "melee", importance: 74, desc: "Late-stage melee optimization piece with strong long-term value." },
  { name: "Pegasian boots", price: 85000000, stats: { ranged: 75, defence: 75 }, category: "ranged", importance: 71, desc: "Luxury ranged boot upgrade after core weapon and amulet slots." },
  { name: "Eternal boots", price: 70000000, stats: { magic: 75, defence: 75 }, category: "magic", importance: 70, desc: "Magic boot upgrade once the core staff and jewelry are sorted." },
  { name: "Osmumten's fang", price: 230000000, stats: { attack: 82 }, category: "melee", importance: 86, desc: "Top-tier melee progression item for general bossing and raids." },
  { name: "Bow of faerdhinen", price: 320000000, stats: { ranged: 80 }, category: "ranged", importance: 87, desc: "High-ceiling ranged weapon if your account is entering late-midgame PvM." },
  { name: "Sanguinesti staff", price: 240000000, stats: { magic: 82 }, category: "magic", importance: 83, desc: "Excellent premium magic upgrade for sustained PvM and bossing." },
  { name: "Venator bow", price: 260000000, stats: { ranged: 80 }, category: "ranged", importance: 81, desc: "Great ranged utility weapon when your route includes multi-target farming or Slayer value." },
  { name: "Webweaver bow", price: 235000000, stats: { ranged: 80 }, category: "ranged", importance: 79, desc: "High-value specialty ranged option for wilderness or niche bossing paths." },
  { name: "Virtus mask", price: 150000000, stats: { magic: 78, defence: 75 }, category: "magic", importance: 78, desc: "Premium magic helmet for accounts stepping into stronger mage bossing setups." },
  { name: "Virtus robe top", price: 235000000, stats: { magic: 78, defence: 75 }, category: "magic", importance: 80, desc: "Strong late-midgame magic armor body with good value before full endgame." },
  { name: "Virtus robe bottom", price: 220000000, stats: { magic: 78, defence: 75 }, category: "magic", importance: 79, desc: "Completes a strong magic armor core for sustained PvM progression." },
  { name: "Elidinis' ward", price: 145000000, stats: { magic: 80, defence: 80 }, category: "magic", importance: 77, desc: "Magic off-hand upgrade that pairs nicely with your stronger staff milestones." },
  { name: "Magus ring", price: 240000000, stats: { magic: 75 }, category: "magic", importance: 75, desc: "Late-stage mage ring upgrade once your core staff and armor line are solid." },
  { name: "Ultor ring", price: 265000000, stats: { attack: 80, strength: 80 }, category: "melee", importance: 76, desc: "Premium melee ring for squeezing more value out of already-strong melee kits." },
  { name: "Masori mask", price: 180000000, stats: { ranged: 80, defence: 70 }, category: "ranged", importance: 78, desc: "Premium ranged head slot if you are leaning hard into endgame ranged setups." },
  { name: "Masori body", price: 340000000, stats: { ranged: 80, defence: 70 }, category: "ranged", importance: 82, desc: "Endgame ranged armor body with strong long-term PvM value." },
  { name: "Masori chaps", price: 300000000, stats: { ranged: 80, defence: 70 }, category: "ranged", importance: 80, desc: "Completes your premium ranged body set for serious bossing routes." },
  { name: "Zaryte crossbow", price: 410000000, stats: { ranged: 80 }, category: "ranged", importance: 79, desc: "High-end ranged weapon for accounts with boss-heavy progression plans." },
  { name: "Kodai wand", price: 420000000, stats: { magic: 80 }, category: "magic", importance: 74, desc: "A prestige mage weapon goal for players finishing a serious magic setup." },
  { name: "Ancestral hat", price: 290000000, stats: { magic: 75 }, category: "magic", importance: 76, desc: "Endgame mage hat goal that starts the true premium magic set." },
  { name: "Ancestral robe top", price: 450000000, stats: { magic: 75 }, category: "magic", importance: 81, desc: "High-priority premium mage body once your core weapon is already covered." },
  { name: "Ancestral robe bottom", price: 400000000, stats: { magic: 75 }, category: "magic", importance: 80, desc: "Completes a high-end ancestral core for late-game mage progression." },
  { name: "Inquisitor's mace", price: 520000000, stats: { attack: 80, strength: 80 }, category: "melee", importance: 72, desc: "Expensive melee specialty weapon for accounts rounding out their bossing arsenal." },
  { name: "Torva full helm", price: 430000000, stats: { defence: 80, strength: 80 }, category: "melee", importance: 75, desc: "Late-game melee armor goal when your weapon line is already strong." },
  { name: "Torva platebody", price: 780000000, stats: { defence: 80, strength: 80 }, category: "melee", importance: 78, desc: "Premium melee chest goal for heavy PvM accounts." },
  { name: "Torva platelegs", price: 720000000, stats: { defence: 80, strength: 80 }, category: "melee", importance: 77, desc: "Finishing-piece melee legs for very high-end setups." },
  { name: "Infernal cape", price: 150000000, stats: { defence: 75, attack: 75, strength: 75, ranged: 75 }, category: "utility", importance: 91, desc: "A prestige unlock that upgrades nearly every combat route once your account is ready." },
  { name: "Twisted bow", price: 1600000000, stats: { ranged: 85 }, category: "ranged", importance: 80, desc: "Dream ranged purchase for long-term account completion and endgame PvM." },
  { name: "Scythe of vitur", price: 1500000000, stats: { attack: 85, strength: 85 }, category: "melee", importance: 79, desc: "Endgame melee chase goal with massive bossing upside." },
  { name: "Tumeken's shadow", price: 1650000000, stats: { magic: 85 }, category: "magic", importance: 81, desc: "A premier long-term magic goal once your account is ready for late-game gear." }
];

const WIKI_ITEM_GOALS = [
  { name: "Amulet of Blood Fury", category: "melee", importance: 76, desc: "Strong sustain-focused melee upgrade from the Impact wiki item database." },
  { name: "Ancient Sceptre", category: "magic", importance: 62, desc: "Useful magic-side progression item from the Impact wiki item database." },
  { name: "Ancient Warriors' Equipment", category: "hybrid", importance: 52, desc: "A broader PvP/PvM item family from the Impact wiki item database." },
  { name: "Ava's Accumulator", category: "ranged", importance: 58, desc: "Classic ranged progression pickup from the Impact wiki item database." },
  { name: "Avernic Treads", category: "melee", importance: 68, desc: "A melee-slot upgrade listed in the Impact wiki item database." },
  { name: "Blorva", category: "melee", importance: 73, desc: "A prestige melee progression target from the Impact wiki item database." },
  { name: "Book of the Dead", category: "magic", importance: 48, desc: "A utility magic-side item from the Impact wiki item database." },
  { name: "Emblems", category: "wealth", importance: 34, desc: "A trade/value goal from the Impact wiki item database." },
  { name: "Confliction Gauntlets", category: "melee", importance: 63, desc: "A glove-slot progression target from the Impact wiki item database." },
  { name: "Contract of Sensory Clouding", category: "magic", importance: 50, desc: "A niche progression item from the Impact wiki item database." },
  { name: "Cerberus Crystals", category: "melee", importance: 44, desc: "A component-style item goal from the Impact wiki item database." },
  { name: "DT2 Rings", category: "hybrid", importance: 72, desc: "High-value jewelry progression from the Impact wiki item database." },
  { name: "Dragon Hunter Lance", category: "melee", importance: 85, desc: "A dragon-focused melee staple listed in the Impact wiki item database." },
  { name: "Larran's keys", category: "wealth", importance: 28, desc: "A key-based wealth goal from the Impact wiki item database." },
  { name: "MA2 Capes", category: "magic", importance: 57, desc: "Magic progression capes listed in the Impact wiki item database." },
  { name: "Masori", category: "ranged", importance: 78, desc: "A premium ranged armor progression target from the Impact wiki item database." },
  { name: "Noxious Halberd", category: "melee", importance: 71, desc: "A strong melee progression weapon from the Impact wiki item database." },
  { name: "Prayer Scroll", category: "utility", importance: 64, desc: "A high-impact utility unlock from the Impact wiki item database." },
  { name: "Radiant Oathplate", category: "melee", importance: 82, desc: "A major melee armor progression target from the Impact wiki item database." },
  { name: "Revenant Weapons", category: "ranged", importance: 61, desc: "A wilderness-oriented weapon family from the Impact wiki item database." },
  { name: "Salve Amulet", category: "utility", importance: 54, desc: "A valuable utility amulet for several grinds from the Impact wiki item database." },
  { name: "Saturated Heart", category: "magic", importance: 77, desc: "A powerful magic progression item from the Impact wiki item database." },
  { name: "Slayer Helmet", category: "utility", importance: 79, desc: "One of the most important account unlocks listed in the Impact wiki item database." },
  { name: "Soulreaper Axe", category: "melee", importance: 83, desc: "A premium melee weapon progression target from the Impact wiki item database." },
  { name: "Sunfire runes", category: "magic", importance: 26, desc: "A supply-side progression or wealth target from the Impact wiki item database." },
  { name: "Sunfire Splinters", category: "wealth", importance: 25, desc: "A component-style progression target from the Impact wiki item database." },
  { name: "Torva (broken)", category: "melee", importance: 80, desc: "A high-end melee armor target from the Impact wiki item database." },
  { name: "Venator Bow", category: "ranged", importance: 74, desc: "A ranged progression bow from the Impact wiki item database." },
  { name: "Voidwaker", category: "melee", importance: 81, desc: "A top-end spec weapon target from the Impact wiki item database." },
  { name: "Zenyte Jewellery", category: "hybrid", importance: 75, desc: "A premium jewelry progression set from the Impact wiki item database." },
  { name: "Zombie Pirate's Keys", category: "wealth", importance: 24, desc: "A wilderness-oriented wealth target from the Impact wiki item database." }
];

const BOSS_GUIDE_MEDIA = {
  "Barrows": {
    wikiUrl: "https://impactmmo.wiki/Barrows",
    note: "The Barrows wiki page includes a basic setup image under Gear Recommendation.",
    setups: [
      {
        label: "Basic setup",
        imageUrl: "https://impactmmo.wiki/w/images/8/8d/Basicbarrowssetup.png",
        sourceUrl: "https://impactmmo.wiki/Barrows"
      }
    ]
  },
"Zulrah": {
  wikiUrl: "https://impactmmo.wiki/Zulrah",
  videos: ["https://youtu.be/4Ol--y6sdpw"],
  note: "Impact Wiki page includes both max and budget snapshots for this guide.",
  setups: [
    {
      label: "Max Setup",
      imageUrl: "https://impactmmo.wiki/w/images/2/28/Zulrah_Max_Gear1.png",
      sourceUrl: "https://impactmmo.wiki/Zulrah"
    },
    {
      label: "Budget Setup",
      imageUrl: "https://impactmmo.wiki/w/images/d/df/Zulrah_Budget_Gear12.png",
      sourceUrl: "https://impactmmo.wiki/Zulrah"
    },
    {
      label: "Budget Setup #2",
      imageUrl: "https://impactmmo.wiki/w/images/d/d2/Zulrah_Budget_Gear1.png",
      sourceUrl: "https://impactmmo.wiki/Zulrah"
    }
  ]
},
  "Amoxliatl": {
    wikiUrl: "https://impactmmo.wiki/Amoxliatl",
    videos: ["https://youtu.be/mkjwpobZsaA"],
    note: "The Amoxliatl wiki page includes multiple setup examples under gear and inventory examples.",
    setups: [
      { label: "Scythe setup", imageUrl: "https://impactmmo.wiki/w/images/c/c6/Amox_11.png", sourceUrl: "https://impactmmo.wiki/Amoxliatl" },
      { label: "Mid setup", imageUrl: "https://impactmmo.wiki/w/images/1/11/Amox_111.png", sourceUrl: "https://impactmmo.wiki/Amoxliatl" },
      { label: "Bludgeon void setup", imageUrl: "https://impactmmo.wiki/w/images/b/b5/Amox_2.png", sourceUrl: "https://impactmmo.wiki/Amoxliatl" }
    ]
  },
  "Araxxor": {
    wikiUrl: "https://impactmmo.wiki/Araxxor",
    videos: ["https://youtu.be/moITvNVONVs"],
    note: "The Araxxor wiki page includes high-tier, mid-tier, and budget gear setups.",
    setups: [
      { label: "High tier gear", imageUrl: "https://impactmmo.wiki/w/images/8/84/Araxxor_Gear_HighTier1.png", sourceUrl: "https://impactmmo.wiki/Araxxor" },
      { label: "Mid tier gear", imageUrl: "https://impactmmo.wiki/w/images/c/c6/Araxxor_Gear_MidTier1.png", sourceUrl: "https://impactmmo.wiki/Araxxor" },
      { label: "Budget gear", imageUrl: "https://impactmmo.wiki/w/images/d/d1/Araxxor_Gear_Budget1.png", sourceUrl: "https://impactmmo.wiki/Araxxor" }
    ]
  },
  "Callisto": {
    wikiUrl: "https://impactmmo.wiki/Callisto",
    videos: ["https://youtu.be/5u7aF6Z9Jjw"],
    note: "The Callisto page includes wilderness and donator zone setup examples.",
    setups: [
      { label: "Basic wilderness setup", imageUrl: "https://impactmmo.wiki/w/images/4/45/Basic_Wilderness_Setup.png", sourceUrl: "https://impactmmo.wiki/Callisto" },
      { label: "Donator zone setup 1", imageUrl: "https://impactmmo.wiki/w/images/a/a9/Donator_Zone_Vetion_Setup.png", sourceUrl: "https://impactmmo.wiki/Callisto" },
      { label: "Donator zone setup 2", imageUrl: "https://impactmmo.wiki/w/images/5/5c/Donator_Zone_Calvarion_Setup.png", sourceUrl: "https://impactmmo.wiki/Callisto" }
    ]
  },
  "Cerberus": {
    wikiUrl: "https://impactmmo.wiki/Cerberus",
    videos: ["https://youtu.be/wq-WIMnxZTs"],
    note: "The Cerberus wiki page includes high-tier and ranged setup images.",
    setups: [
      { label: "High tier gear", imageUrl: "https://impactmmo.wiki/w/images/2/2a/Cerberus_Gear_HighTier.png", sourceUrl: "https://impactmmo.wiki/Cerberus" },
      { label: "Ranged gear", imageUrl: "https://impactmmo.wiki/w/images/2/2d/Cerberus_Gear_Ranged.png", sourceUrl: "https://impactmmo.wiki/Cerberus" }
    ]
  },
  "Chaos Fanatic": {
    wikiUrl: "https://impactmmo.wiki/Chaos_Fanatic",
    videos: ["https://youtu.be/jz2rC5E8t8Q?si=xnXhs_rIQKQsf1uq"],
    note: "The Chaos Fanatic wiki page includes multiple gear example images alongside the video guide.",
    setups: [
      {
        label: "Gear example 1",
        imageUrl: "https://impactmmo.wiki/w/images/8/8f/ChaosFanaticGear.png",
        sourceUrl: "https://impactmmo.wiki/Chaos_Fanatic"
      },
      {
        label: "Gear example 2",
        imageUrl: "https://impactmmo.wiki/w/images/1/14/ChaosFanaticGear12.png",
        sourceUrl: "https://impactmmo.wiki/Chaos_Fanatic"
      },
      {
        label: "Gear example 3",
        imageUrl: "https://impactmmo.wiki/w/images/7/74/ChaosFanaticGear132.png",
        sourceUrl: "https://impactmmo.wiki/Chaos_Fanatic"
      }
    ]
  },
  "Corporeal Beast": {
    wikiUrl: "https://impactmmo.wiki/Corporeal_Beast",
    videos: ["https://youtu.be/pVRpG7ZQC6g"],
    note: "The Corporeal Beast wiki page includes multiple gear examples plus an example inventory image.",
    setups: [
      {
        label: "Gear example 1",
        imageUrl: "https://impactmmo.wiki/w/images/3/3a/Corpgear2.png",
        sourceUrl: "https://impactmmo.wiki/Corporeal_Beast"
      },
      {
        label: "Gear example 2",
        imageUrl: "https://impactmmo.wiki/w/images/5/5c/Corpgear35.png",
        sourceUrl: "https://impactmmo.wiki/Corporeal_Beast"
      },
      {
        label: "Gear example 3",
        imageUrl: "https://impactmmo.wiki/w/images/2/2d/Corpgear32.png",
        sourceUrl: "https://impactmmo.wiki/Corporeal_Beast"
      },
      {
        label: "Gear example 4",
        imageUrl: "https://impactmmo.wiki/w/images/1/13/Corpgear333.png",
        sourceUrl: "https://impactmmo.wiki/Corporeal_Beast"
      },
      {
        label: "Example inventory",
        imageUrl: "https://impactmmo.wiki/w/images/1/15/Corp_gear21.png",
        sourceUrl: "https://impactmmo.wiki/Corporeal_Beast"
      }
    ]
  },
  "Crazy Archaeologist": {
    wikiUrl: "https://impactmmo.wiki/Crazy_Archaeologist",
    videos: ["https://youtu.be/KRjkCzT--xc?si=InN_00rHfzHVmOZm"],
    note: "The Crazy Archaeologist wiki page includes wilderness, mid, and donator zone setups.",
    setups: [
      { label: "Wilderness setup", imageUrl: "https://impactmmo.wiki/w/images/8/8d/CrazyArchaeologistSetup.png", sourceUrl: "https://impactmmo.wiki/Crazy_Archaeologist" },
      { label: "Mid setup", imageUrl: "https://impactmmo.wiki/w/images/b/b2/CrazyArchaeologistSetup11.png", sourceUrl: "https://impactmmo.wiki/Crazy_Archaeologist" },
      { label: "Donator zone setup", imageUrl: "https://impactmmo.wiki/w/images/5/59/CrazyArchaeologistDISetup22.png", sourceUrl: "https://impactmmo.wiki/Crazy_Archaeologist" }
    ]
  },
  "Doom of Mokhaiotl": {
    wikiUrl: "https://impactmmo.wiki/Doom",
    videos: ["https://www.youtube.com/watch?v=fSTCW86VmGw&feature=youtu.be","https://www.youtube.com/watch?v=vbrRYlqyhNw&feature=youtu.be"],
    note: "The Doom page includes high-level and budget void setup images.",
    setups: [
      { label: "High-level setup", imageUrl: "https://impactmmo.wiki/w/images/4/44/Mokhabis1.png", sourceUrl: "https://impactmmo.wiki/Doom" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/c/ca/Mokhavoid.png", sourceUrl: "https://impactmmo.wiki/Doom" }
    ]
  },
  "Duke Sucellus": {
    wikiUrl: "https://impactmmo.wiki/Duke_Sucellus",
    videos: ["https://youtu.be/ZqjuareJOoU","https://youtu.be/ODC50BrJHfo"],
    note: "The Duke page includes high, med-high, med, and budget void setups.",
    setups: [
      { label: "High-level setup", imageUrl: "https://impactmmo.wiki/w/images/6/68/Dukemax1.png", sourceUrl: "https://impactmmo.wiki/Duke_Sucellus" },
      { label: "Med-high setup", imageUrl: "https://impactmmo.wiki/w/images/c/c9/Dukehigh1.png", sourceUrl: "https://impactmmo.wiki/Duke_Sucellus" },
      { label: "Med setup", imageUrl: "https://impactmmo.wiki/w/images/e/ee/Dukemed1.png", sourceUrl: "https://impactmmo.wiki/Duke_Sucellus" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/a/a1/Voiderduke1.png", sourceUrl: "https://impactmmo.wiki/Duke_Sucellus" }
    ]
  },
  "King Black Dragon": {
    wikiUrl: "https://impactmmo.wiki/King_Black_Dragon",
    videos: ["https://youtu.be/4hv2zeJvQ1M"],
    note: "The KBD page includes inventory, crossbow, blowpipe, and scythe setup examples.",
    setups: [
      { label: "Example inventory", imageUrl: "https://impactmmo.wiki/w/images/d/d7/KBDinventory.png", sourceUrl: "https://impactmmo.wiki/King_Black_Dragon" },
      { label: "Crossbow setup", imageUrl: "https://impactmmo.wiki/w/images/c/c6/KBDrange.png", sourceUrl: "https://impactmmo.wiki/King_Black_Dragon" },
      { label: "Blowpipe setup", imageUrl: "https://impactmmo.wiki/w/images/a/a2/KBDblowpipe.png", sourceUrl: "https://impactmmo.wiki/King_Black_Dragon" },
      { label: "Scythe setup", imageUrl: "https://impactmmo.wiki/w/images/a/a5/Kbdmeleesetup.png", sourceUrl: "https://impactmmo.wiki/King_Black_Dragon" }
    ]
  },
  "Kraken": {
    wikiUrl: "https://impactmmo.wiki/Kraken",
    videos: ["https://youtu.be/mC17aNAB80Y"],
    note: "The Kraken page includes high-level, med-high, and budget void setups.",
    setups: [
      { label: "High-level setup", imageUrl: "https://impactmmo.wiki/w/images/0/0f/Maxkrak11.png", sourceUrl: "https://impactmmo.wiki/Kraken" },
      { label: "Med-high setup", imageUrl: "https://impactmmo.wiki/w/images/4/49/Medkrak22.png", sourceUrl: "https://impactmmo.wiki/Kraken" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/1/1c/Voidkraked.png", sourceUrl: "https://impactmmo.wiki/Kraken" }
    ]
  },
  "Leviathan": {
    wikiUrl: "https://impactmmo.wiki/Leviathan",
    videos: ["https://youtu.be/DE7o9THBFgw","https://youtu.be/BCBp0OJnHTY","https://youtu.be/BvKesN2KusU","https://youtu.be/QgC4QYD_w0w","https://www.youtube.com/watch?v=7yu2LbDdajc","https://youtu.be/qk-np41Jo1U?si=T0-Uh7XKQIZFmGT9"],
    note: "The Leviathan page includes mage, med-level, budget void, and awakened setups.",
    setups: [
      { label: "Mage setup", imageUrl: "https://impactmmo.wiki/w/images/e/ea/Morrilevi211.png", sourceUrl: "https://impactmmo.wiki/Leviathan" },
      { label: "Med-level setup", imageUrl: "https://impactmmo.wiki/w/images/c/c4/Medlevel11.png", sourceUrl: "https://impactmmo.wiki/Leviathan" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/b/b7/Voiderrrrr11.png", sourceUrl: "https://impactmmo.wiki/Leviathan" },
      { label: "Awakened setup", imageUrl: "https://impactmmo.wiki/w/images/7/7e/Leviawake1.png", sourceUrl: "https://impactmmo.wiki/Leviathan" }
    ]
  },
  "Nex": {
    wikiUrl: "https://impactmmo.wiki/Nex",
    videos: ["https://youtu.be/-OzeKbn0hvg"],
    note: "The Nex page includes max, high-level, med-level, and budget void setups.",
    setups: [
      { label: "Max setup", imageUrl: "https://impactmmo.wiki/w/images/6/65/Nexmax11.png", sourceUrl: "https://impactmmo.wiki/Nex" },
      { label: "High-level setup", imageUrl: "https://impactmmo.wiki/w/images/8/80/Nexmax111.png", sourceUrl: "https://impactmmo.wiki/Nex" },
      { label: "Med-level setup", imageUrl: "https://impactmmo.wiki/w/images/d/d2/Nexmed21.png", sourceUrl: "https://impactmmo.wiki/Nex" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/3/39/Budgetnex1.png", sourceUrl: "https://impactmmo.wiki/Nex" }
    ]
  },
  "Phantom Muspah": {
    wikiUrl: "https://impactmmo.wiki/Phantom_Muspah",
    videos: ["https://www.youtube.com/watch?v=a2pa0waf7xQ"],
    note: "The Muspah page includes best-in-slot, med-level, and budget void setups.",
    setups: [
      { label: "Best in slot setup", imageUrl: "https://impactmmo.wiki/w/images/6/68/Maxswitch1.png", sourceUrl: "https://impactmmo.wiki/Phantom_Muspah" },
      { label: "Med-level setup", imageUrl: "https://impactmmo.wiki/w/images/f/fe/Bandosmusnoswitch1.png", sourceUrl: "https://impactmmo.wiki/Phantom_Muspah" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/0/0e/Voidmu1s.png", sourceUrl: "https://impactmmo.wiki/Phantom_Muspah" }
    ]
  },
  "Skotizo": {
    wikiUrl: "https://impactmmo.wiki/Skotizo",
    videos: ["https://youtu.be/jMJx774Am8o"],
    note: "The Skotizo page includes scythe, arclight, budget, and mage setups.",
    setups: [
      { label: "Scythe setup", imageUrl: "https://impactmmo.wiki/w/images/3/35/Scythe_Setup232.png", sourceUrl: "https://impactmmo.wiki/Skotizo" },
      { label: "Arclight or Emberlight setup", imageUrl: "https://impactmmo.wiki/w/images/9/99/Arclight_Setup23232.png", sourceUrl: "https://impactmmo.wiki/Skotizo" },
      { label: "Budget arclight setup", imageUrl: "https://impactmmo.wiki/w/images/5/57/Budgetsetups1.png", sourceUrl: "https://impactmmo.wiki/Skotizo" },
      { label: "Mage setup", imageUrl: "https://impactmmo.wiki/w/images/5/5b/Budgetsetups142343.png", sourceUrl: "https://impactmmo.wiki/Skotizo" }
    ]
  },
  "Vardovis": {
    wikiUrl: "https://impactmmo.wiki/Vardovis",
    videos: ["https://www.youtube.com/watch?v=n29bhS91Dt0","https://www.youtube.com/watch?v=x6g13l2XtJ0"],
    note: "The Vardovis page includes high-level, med-level, and budget void setups.",
    setups: [
      { label: "High-level setup", imageUrl: "https://impactmmo.wiki/w/images/e/ea/Dukemax32532.png", sourceUrl: "https://impactmmo.wiki/Vardovis" },
      { label: "Med-level setup", imageUrl: "https://impactmmo.wiki/w/images/a/a5/Dukemed23234454.png", sourceUrl: "https://impactmmo.wiki/Vardovis" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/5/5c/Voiderduk234253423e.png", sourceUrl: "https://impactmmo.wiki/Vardovis" }
    ]
  },
  "Vet'ion": {
    wikiUrl: "https://impactmmo.wiki/Vet%27ion",
    videos: ["https://youtu.be/bh1441GvVOY"],
    note: "The Vet'ion page includes wilderness and donator zone setups.",
    setups: [
      { label: "Basic wilderness setup", imageUrl: "https://impactmmo.wiki/w/images/4/45/Basic_Wilderness_Setup.png", sourceUrl: "https://impactmmo.wiki/Vet%27ion" },
      { label: "Donator zone setup 1", imageUrl: "https://impactmmo.wiki/w/images/a/a9/Donator_Zone_Vetion_Setup.png", sourceUrl: "https://impactmmo.wiki/Vet%27ion" },
      { label: "Donator zone setup 2", imageUrl: "https://impactmmo.wiki/w/images/5/5c/Donator_Zone_Calvarion_Setup.png", sourceUrl: "https://impactmmo.wiki/Vet%27ion" }
    ]
  },
  "Vorkath": {
    wikiUrl: "https://impactmmo.wiki/Vorkath",
    videos: ["https://www.youtube.com/watch?v=OzLF87GI1bE"],
    note: "The live Vorkath wiki page shows two melee setup images plus one range setup image.",
    setups: [
      {
        label: "Melee setup 1",
        imageUrl: "https://impactmmo.wiki/w/images/2/2f/Scythe1.png",
        sourceUrl: "https://impactmmo.wiki/Vorkath"
      },
      {
        label: "Melee setup 2",
        imageUrl: "https://impactmmo.wiki/w/images/6/60/Scythe12.png",
        sourceUrl: "https://impactmmo.wiki/Vorkath"
      },
      {
        label: "Range setup",
        imageUrl: "https://impactmmo.wiki/w/images/6/68/Blowpipe.png",
        sourceUrl: "https://impactmmo.wiki/Vorkath"
      }
    ]
  },
  "Whisperer": {
    wikiUrl: "https://impactmmo.wiki/Whisperer",
    videos: ["https://www.youtube.com/watch?v=3Eq0iVHGjPU","https://youtu.be/QH6ZHrxnArs"],
    note: "The Whisperer page includes max, med-high, med, and budget void setups.",
    setups: [
      { label: "Max setup", imageUrl: "https://impactmmo.wiki/w/images/0/02/Whispgear21.png", sourceUrl: "https://impactmmo.wiki/Whisperer" },
      { label: "Med-high setup", imageUrl: "https://impactmmo.wiki/w/images/e/e8/Whispmed2423423.png", sourceUrl: "https://impactmmo.wiki/Whisperer" },
      { label: "Med setup", imageUrl: "https://impactmmo.wiki/w/images/0/09/Whispmed2.png", sourceUrl: "https://impactmmo.wiki/Whisperer" },
      { label: "Budget void setup", imageUrl: "https://impactmmo.wiki/w/images/a/a9/Whispvoid.png", sourceUrl: "https://impactmmo.wiki/Whisperer" }
    ]
  },
  "Xamphur": {
    wikiUrl: "https://impactmmo.wiki/Xamphur",
    videos: ["https://m.youtube.com/watch?v=_113KtbQh5k"],
    note: "The Xamphur page includes melee, range, and low-tier crossbow examples.",
    setups: [
      { label: "Melee setup 1", imageUrl: "https://impactmmo.wiki/w/images/5/55/Scyxam1.png", sourceUrl: "https://impactmmo.wiki/Xamphur" },
      { label: "Melee setup 2", imageUrl: "https://impactmmo.wiki/w/images/d/d8/Scyxam22.png", sourceUrl: "https://impactmmo.wiki/Xamphur" },
      { label: "Range setup", imageUrl: "https://impactmmo.wiki/w/images/b/b3/Bpxam1.png", sourceUrl: "https://impactmmo.wiki/Xamphur" },
      { label: "Crossbow setup", imageUrl: "https://impactmmo.wiki/w/images/6/62/Crossbowxam1.png", sourceUrl: "https://impactmmo.wiki/Xamphur" }
    ]
  },
  "Yama": {
    wikiUrl: "https://impactmmo.wiki/Yama",
    videos: ["https://youtu.be/y_JUWz29SUk"],
    note: "The Yama page currently exposes three images under its gear recommendations section.",
    setups: [
      { label: "Gear 1", imageUrl: "https://impactmmo.wiki/w/images/8/86/Yama_Lair_Map1.png", sourceUrl: "https://impactmmo.wiki/Yama" },
      { label: "Gear 2", imageUrl: "https://impactmmo.wiki/w/images/9/95/Yama_Gear_Setup.png", sourceUrl: "https://impactmmo.wiki/Yama" },
      { label: "Gear 3", imageUrl: "https://impactmmo.wiki/w/images/2/2c/Yama_Boss_Phase3.png", sourceUrl: "https://impactmmo.wiki/Yama" }
    ]
  }
};

const STORAGE_KEY = 'flip_tracker_pro_rsps_v3';
const MARKETPLACE_LISTING_FEE = 500_000_000;
const AUTH_USERS_KEY = 'impact_flip_tracker_auth_users_v1';
const AUTH_SESSION_KEY = 'impact_flip_tracker_auth_session_v2';
const STAY_SIGNED_IN_KEY = 'impact_stay_signed_in';
const SITE_VERSION = '2026.04.22.4';
const AUTH_DB_NAME = 'impact_tracker_auth_db';
const AUTH_DB_VERSION = 1;
const AUTH_DB_STORE = 'kv';
const AUTH_DB_USERS_KEY = 'users';
/** Your sign-in email (lowercase). Unlocks Admin nav + full admin tools when you use this email. Leave '' to rely only on user.is_admin in browser storage. */
const OWNER_ADMIN_EMAIL = 'buckley@toke.com';
/**
 * Moderator emails (lowercase): optional extra mods on this device, same powers as "Give mod" in Mod Desk.
 * Only the site owner (OWNER_ADMIN_EMAIL / is_admin) can use Give mod / Remove mod — moderators cannot promote others.
 */
const MODERATOR_EMAILS = [].map(e => String(e).trim().toLowerCase()).filter(Boolean);
const HISCORES_PROXY_BASE = 'http://localhost:5050';
const VERIFICATION_EXPIRY_MS = 15 * 60 * 1000;

function getEmailVerificationEndpoint() {
  if (typeof window === 'undefined') return '/api/send-verification-email.php';
  if (window.IMPACT_VERIFICATION_ENDPOINT) return String(window.IMPACT_VERIFICATION_ENDPOINT);
  const h = (window.location.hostname || '').toLowerCase();
  if (/\.netlify\.app$/i.test(h)) {
    return '/.netlify/functions/send-verification-email';
  }
  return '/api/send-verification-email.php';
}

function getHiscoresEndpoint(username = '') {
  const safeUsername = encodeURIComponent(String(username || '').trim());
  if (typeof window === 'undefined') return `/api/hiscores.php?username=${safeUsername}`;
  if (window.IMPACT_HISCORES_ENDPOINT) {
    const base = String(window.IMPACT_HISCORES_ENDPOINT).replace(/\/$/, '');
    return `${base}?username=${safeUsername}`;
  }
  const h = (window.location.hostname || '').toLowerCase();
  if (window.location.protocol === 'file:' || h === 'localhost' || h === '127.0.0.1') {
    return `${HISCORES_PROXY_BASE}/hiscores/${safeUsername}`;
  }
  if (/\.netlify\.app$/i.test(h)) {
    return `/.netlify/functions/hiscores?username=${safeUsername}`;
  }
  return `/api/hiscores.php?username=${safeUsername}`;
}

/** Base URL for billing API (no trailing slash): /api on cPanel PHP, /.netlify/functions on Netlify. */
function getBillingFunctionsBase() {
  if (typeof window === 'undefined') return '';
  if (window.IMPACT_BILLING_FUNCTIONS_BASE) {
    return String(window.IMPACT_BILLING_FUNCTIONS_BASE).replace(/\/$/, '');
  }
  if (!isHostedMode()) return '';
  const h = (window.location.hostname || '').toLowerCase();
  if (h === 'localhost' || h === '127.0.0.1') return '';
  if (/\.netlify\.app$/i.test(h)) return '/.netlify/functions';
  return '/api';
}

function getCommunityApiBase() {
  if (typeof window === 'undefined') return '';
  if (window.IMPACT_COMMUNITY_API_BASE) {
    return String(window.IMPACT_COMMUNITY_API_BASE).replace(/\/$/, '');
  }
  if (window.location.protocol === 'file:') return '';
  const h = (window.location.hostname || '').toLowerCase();
  if (h === 'localhost' || h === '127.0.0.1') return '';
  if (/\.netlify\.app$/i.test(h)) return '';
  return '/api';
}

function applyCommunityStatePayload(data = {}) {
  if (!state) return;
  if (Array.isArray(data.marketplace_listings)) {
    state.marketplace_listings = data.marketplace_listings;
  }
  if (Array.isArray(data.tickets)) {
    state.tickets = data.tickets;
  }
  normalizeState();
  saveState();
}

async function syncCommunityStateFromServer() {
  const base = getCommunityApiBase();
  if (!base) return false;
  try {
    const res = await fetch(`${base}/community-state`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.error || `Community sync failed (${res.status}).`);
    }
    applyCommunityStatePayload(data);
    return true;
  } catch (e) {
    console.warn('syncCommunityStateFromServer', e);
    return false;
  }
}

async function postCommunityAction(action, payload = {}) {
  const base = getCommunityApiBase();
  if (!base) {
    throw new Error('Shared community API unavailable.');
  }
  const res = await fetch(`${base}/community-state`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, ...payload })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.error || `Community request failed (${res.status}).`);
  }
  applyCommunityStatePayload(data);
  return data;
}

function canUseLocalCommunityFallback() {
  return !getCommunityApiBase();
}

async function notifySiteUserRegistry(event) {
  if (typeof window === 'undefined') return;
  const base = getBillingFunctionsBase();
  if (!base) return;
  const email = currentUser?.email;
  if (!email) return;
  try {
    await fetch(`${base}/site-user-register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        email: String(email).trim().toLowerCase(),
        display_name: currentUser.display_name || email,
        created_at: currentUser.created_at || ''
      })
    });
  } catch (e) {
    console.warn('notifySiteUserRegistry', e);
  }
}

function getAdminRegistryApiKey() {
  if (typeof window === 'undefined') return '';
  if (window.IMPACT_ADMIN_PANEL_KEY) return String(window.IMPACT_ADMIN_PANEL_KEY).trim();
  try {
    return String(sessionStorage.getItem('impact_admin_registry_key') || '').trim();
  } catch (e) {
    return '';
  }
}

function stripBillingQueryFromUrl() {
  try {
    const u = new URL(window.location.href);
    u.searchParams.delete('billing');
    u.searchParams.delete('session_id');
    const qs = u.searchParams.toString();
    const next = `${u.pathname}${qs ? `?${qs}` : ''}${u.hash || ''}`;
    window.history.replaceState({}, '', next);
  } catch (e) {
    console.warn('stripBillingQueryFromUrl', e);
  }
}

async function handleBillingQueryParams() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const billing = params.get('billing');
  if (billing === 'cancel') {
    stripBillingQueryFromUrl();
    sessionStorage.removeItem('pending_stripe_checkout');
    setPricingStatus('Checkout was cancelled.', 'error');
    openPricingModal('pro');
    return;
  }
  if (billing !== 'success') return;

  const base = getBillingFunctionsBase();
  stripBillingQueryFromUrl();
  if (!base) {
    sessionStorage.removeItem('pending_stripe_checkout');
    setPricingStatus('Open the live site to finish syncing your Stripe purchase.', 'error');
    return;
  }

  const pendingPlan = sessionStorage.getItem('pending_stripe_checkout');
  sessionStorage.removeItem('pending_stripe_checkout');

  if (!currentUser?.email || !currentUser.email_verified) {
    setPricingStatus(
      'Sign in with the same verified email you used at Stripe, then open Account — your plan will sync automatically.',
      'error'
    );
    openPricingModal('pro');
    return;
  }

  if (!pendingPlan) {
    await recoverPaidPlanForSignedInUser();
    await syncPaidSubscriptionIfNeeded();
    return;
  }

  const sessionId = params.get('session_id');
  const res = await fetch(`${base}/verify-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      sessionId,
      expectedPlan: pendingPlan,
      email: currentUser.email 
    })
  });
  const data = await res.json().catch(() => ({}));
  
  if (res.ok && data.verified) {
    state.subscription = state.subscription || {};
    state.subscription.plan = pendingPlan;
    state.subscription.billing = 'stripe';
    state.subscription.stripeCustomerId = String(data.stripeCustomerId || '');
    state.subscription.stripeSubscriptionId = String(data.stripeSubscriptionId || '');
    state.subscription.currentPeriodEnd = data.currentPeriodEnd || null;
    saveState();
    updatePlanUI();
    setPricingStatus('Thanks! Your ' + pendingPlan.charAt(0).toUpperCase() + pendingPlan.slice(1) + ' plan is activated.', 'success');
    closePricingModal();
  } else {
    setPricingStatus(
      'Could not verify payment. If you completed payment, wait a moment and refresh. Otherwise, please try checkout again.',
      'error'
    );
    openPricingModal(pendingPlan);
  }
}

async function recoverPaidPlanForSignedInUser() {
  if (!currentUser?.email || !currentUser.email_verified) return;
  const base = getBillingFunctionsBase();
  if (!base) return;
  try {
    const res = await fetch(`${base}/recover-billing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: currentUser.email })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.plan || data.plan === 'free') return;
    state.subscription = state.subscription || {};
    state.subscription.plan = data.plan;
    state.subscription.billing = 'stripe';
    state.subscription.stripeSubscriptionId = String(data.stripeSubscriptionId || '');
    state.subscription.stripeCustomerId = String(data.stripeCustomerId || '');
    state.subscription.currentPeriodEnd = data.currentPeriodEnd ? String(data.currentPeriodEnd) : null;
    saveState();
  } catch (e) {
    console.warn('recoverPaidPlanForSignedInUser', e);
  }
}

async function refreshPaidPlanAfterAuth() {
  await recoverPaidPlanForSignedInUser();
  await syncPaidSubscriptionIfNeeded();
  updatePlanUI();
}

async function syncPaidSubscriptionIfNeeded() {
  const sid = state?.subscription?.stripeSubscriptionId;
  if (!sid || state.subscription.billing !== 'stripe') return;
  const base = getBillingFunctionsBase();
  if (!base) return;
  try {
    const res = await fetch(`${base}/billing-status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stripeSubscriptionId: sid })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return;
    const nextPlan = data.plan || 'free';
    state.subscription.plan = nextPlan;
    state.subscription.currentPeriodEnd = data.currentPeriodEnd ? String(data.currentPeriodEnd) : null;
    if (nextPlan === 'free') {
      state.subscription.stripeSubscriptionId = '';
      state.subscription.currentPeriodEnd = null;
    }
    saveState();
  } catch (e) {
    console.warn('syncPaidSubscriptionIfNeeded', e);
  }
}

async function tryStartPaidCheckout(plan) {
  if (!currentUser?.email) {
    setPricingStatus('Sign in first. Checkout uses your account email.', 'error');
    return true;
  }
  if (!currentUser.email_verified) {
    setPricingStatus('Verify your email before subscribing.', 'error');
    return true;
  }

  const base = getBillingFunctionsBase();
  if (!base) {
    return false;
  }

  try {
    const res = await fetch(`${base}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plan,
        customerEmail: currentUser.email,
        displayName: currentUser.display_name || currentUser.email
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setPricingStatus(data.error || `Checkout could not start (${res.status}).`, 'error');
      return true;
    }
    if (data.url) {
      sessionStorage.setItem('pending_stripe_checkout', plan);
      window.location.href = data.url;
      return true;
    }
    setPricingStatus(data.error || 'Checkout did not return a URL.', 'error');
    return true;
  } catch (e) {
    setPricingStatus(e.message || 'Network error starting checkout.', 'error');
    return true;
  }
}

async function openBillingPortal() {
  const cid = state?.subscription?.stripeCustomerId;
  if (!cid) {
    openPricingModal('pro');
    return;
  }
  const base = getBillingFunctionsBase();
  if (!base) {
    setPricingStatus('Billing portal is only available on the deployed site.', 'error');
    return;
  }
  try {
    const res = await fetch(`${base}/create-portal-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stripeCustomerId: cid })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || `Portal error (${res.status})`);
    }
    if (data.url) {
      window.location.href = data.url;
    }
  } catch (e) {
    setPricingStatus(e.message || String(e), 'error');
    openPricingModal('pro');
  }
}

function handleDashboardUpgradeClick() {
  openPricingModal('pro');
}
let state, sessionGP = 0, sessionProfit = 0, currentUser = null, authMode = 'signup';
let adRotationTimer = null;

function getCurrentUser() {
  return currentUser;
}
const AD_ROTATION_MS = 10000;
const ROTATING_ADS = {
  sidebar: [
    { tag:'Free tier ad', meta:'Impact utils', title:'Advertise on ImpactUtils', copy:'Small sponsor placements live on the side so the main workflow stays clean for everyone.', cta:'Visit impactutils.com', href:'https://impactutils.com' },
    { tag:'Sponsor slot', meta:'Clan promo', title:'Promote your clan or Discord', copy:'Sidebar sponsor cards are ideal for lightweight community promos that should stay visible without interrupting the tracker.', cta:'Book a sponsor slot', href:'https://impactutils.com' },
    { tag:'Partner slot', meta:'RSPS service', title:'Showcase an RSPS service', copy:'Use this placement for subtle skilling services, giveaways, or trusted partner promotions aimed at grinders.', cta:'See sponsor options', href:'https://impactutils.com' }
  ],
  dashboard: [
    { tag:'Free tier ad', meta:'Community partner', title:'Want your brand here?', copy:'Reserved for low-friction sponsors, clans, and community partners on impactutils.com.', cta:'Advertise with us', href:'https://impactutils.com' },
    { tag:'Featured sponsor', meta:'Launch slot', title:'Promote a launch offer or giveaway', copy:'Dashboard sponsors get more breathing room while staying well away from forms and core actions.', cta:'Claim a dashboard slot', href:'https://impactutils.com' },
    { tag:'Growth slot', meta:'Traffic', title:'Send users to your community hub', copy:'A good placement for Discords, communities, or offers that match the tracker audience without feeling spammy.', cta:'Learn sponsor rates', href:'https://impactutils.com' }
  ],
  marketplace: [
    { tag:'Free tier ad', meta:'Marketplace sponsor', title:'Promote a clan, service, or sponsor', copy:'Marketplace pages can carry subtle sponsor placements for free users without interrupting active listings.', cta:'Learn more', href:'https://impactutils.com' },
    { tag:'Featured listing partner', meta:'Username market', title:'Reach active buyers and sellers', copy:'This is a strong slot for broker services, clans, and marketplace-adjacent offers.', cta:'Book this placement', href:'https://impactutils.com' },
    { tag:'Community partner', meta:'Trusted promo', title:'Highlight a trusted service', copy:'Monetize marketplace traffic with a clean sponsor card that sits below the active listing flow.', cta:'Sponsor marketplace traffic', href:'https://impactutils.com' }
  ]
};

function generateVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function sanitizePin(pin) {
  return String(pin || '').trim().slice(0, 32);
}

function isValidPin(pin) {
  return /^[A-Za-z0-9._\-!@#$%^&*()+=]{4,32}$/.test(sanitizePin(pin));
}

function isHostedMode() {
  try {
    return ['http:', 'https:'].includes(window.location?.protocol);
  } catch (e) {
    return false;
  }
}

function setVerificationForUser(user, nextCode = generateVerificationCode()) {
  user.verification_code = String(nextCode);
  user.verification_sent_at = new Date().toISOString();
  user.verification_expires_at = new Date(Date.now() + VERIFICATION_EXPIRY_MS).toISOString();
  user.email_verified = false;
  return user;
}

function isVerificationExpired(user) {
  const expiresAt = new Date(user?.verification_expires_at || 0).getTime();
  return !expiresAt || Date.now() > expiresAt;
}

async function sendVerificationEmail(user) {
  if (!user) {
    return { ok: false, mode: 'none', message: 'No account is loaded for verification.' };
  }

  if (!isHostedMode()) {
    user.verification_delivery = 'local';
    saveCurrentUserRecord(user);
    return {
      ok: true,
      mode: 'local',
      message: 'Local preview mode: real email sending becomes available after deployment. The in-app code is still available for testing.'
    };
  }

  try {
    const res = await fetch(getEmailVerificationEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        code: user.verification_code,
        displayName: user.display_name || user.email,
        expiresAt: user.verification_expires_at
      })
    });

    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(payload?.error || 'Email delivery request failed.');
    }

    user.verification_delivery = 'email';
    user.verification_email_id = payload?.emailId || null;
    saveCurrentUserRecord(user);
    return {
      ok: true,
      mode: 'email',
      message: 'Verification email sent. Check your inbox and spam folder for the 6-digit code.'
    };
  } catch (error) {
    console.error('Verification email error:', error);
    user.verification_delivery = 'local-fallback';
    saveCurrentUserRecord(user);
    return {
      ok: false,
      mode: 'local-fallback',
      message: 'Email delivery is not configured yet on this deployment, so the app fell back to local test mode.'
    };
  }
}
let currentPlayerData = null;

function parseGP(s) {
  if (!s && s !== 0) return 0;
  const raw = String(s).toLowerCase().replace(/,/g, '').trim();
  if (!raw) return 0;
  const match = raw.match(/^(-?\d+(?:\.\d+)?)([mbt]?)$/);
  if (!match) return 0;
  const value = parseFloat(match[1]);
  if (!Number.isFinite(value)) return 0;
  const suffix = match[2];
  const multiplier = suffix === 't' ? 1e12 : suffix === 'b' ? 1e9 : suffix === 'm' ? 1e6 : 1;
  return Math.round(value * multiplier) || 0;
}

function fmtGP(n) {
  const a=Math.abs(n);
  if(a>=1e9) return (n/1e9).toFixed(2)+'B';
  if(a>=1e6) return (n/1e6).toFixed(2)+'M';
  if(a>=1e3) return (n/1e3).toFixed(1)+'k';
  return Math.round(n).toLocaleString();
}

function todayStr(){return new Date().toISOString().slice(0,10);}
function generateId(){return `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;}

function loadState(){
  try{
    const r=localStorage.getItem(STORAGE_KEY);
    if(r){
      state=JSON.parse(r);
      normalizeState();
      recalcItemStats();
      return;
    }
  }catch(e){}
  state={
    items:JSON.parse(JSON.stringify(DEFAULT_ITEMS)),
    trades:[],
    total_profit:0,
    favorites:[],
    theme:'dark',
    goals:[],
    gear_price_overrides:{},
    community_prices:[],
    fp_items:[],
    slayer_favorites:[],
    slayer_notes:{},
    slayer_logs:[],
    fp_logs:[],
    transfers:[],
    marketplace_listings:[],
    strategy_settings:{
      selected:'balanced',
      custom_rules:'0-3b:300m;3b-6b:500m;6b-9b:800m',
      bankroll_step:2000000000,
      gamble_unlock:500000000
    },
    fp_settings:{
      bankroll:0,
      base_stake:0,
      stop_loss:0,
      take_profit:0
    },
    subscription:{
      plan:'free'
    },
    ad_rotation:{
      sidebar:0,
      dashboard:0,
      marketplace:0
    },
    sidebar_account_open:false,
    slayer_daily_access:{
      date:'',
      tasks:[]
    },
    username: null,
    player_data: null,
    banned_users: [],
    user_sessions: {},
    tickets: []
  };
}

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  }catch(e){
    console.error('Storage error:', e);
  }
}

const ONLINE_TIMEOUT_MS = 15 * 60 * 1000;
let authUsersCache = null;

function normalizeAuthUserRecord(user) {
  return {
    ...user,
    display_name: user.display_name || user.email || 'User',
    pin: sanitizePin(user.pin || ''),
    linked_accounts: Array.isArray(user.linked_accounts) && user.linked_accounts.length
      ? user.linked_accounts.map(account => ({
          id: String(account.id || generateId()),
          label: String(account.label || 'Account').trim().slice(0, 40) || 'Account'
        }))
      : [
          { id: 'main', label: 'Main' },
          { id: 'alt', label: 'Alt' }
        ],
    is_admin: Boolean(user.is_admin),
    is_moderator: Boolean(user.is_moderator),
    points: Number(user.points) || 0,
    price_count: Number(user.price_count) || 0,
    created_at: user.created_at || new Date().toISOString(),
    successful_prices: Number(user.successful_prices) || 0
  };
}

function normalizeAuthUsers(users) {
  return Array.isArray(users) ? users.map(normalizeAuthUserRecord) : [];
}

function getCurrentLinkedAccounts() {
  if (!currentUser) return [];
  const accounts = Array.isArray(currentUser.linked_accounts) ? currentUser.linked_accounts : [];
  return accounts.length ? accounts : [{ id: 'main', label: 'Main' }, { id: 'alt', label: 'Alt' }];
}

function setLinkedAccountStatus(message = '', tone = 'muted') {
  const el = document.getElementById('linked-account-status');
  if (!el) return;
  el.textContent = message;
  el.style.color = tone === 'error' ? 'var(--red)' : tone === 'success' ? 'var(--green)' : 'var(--muted)';
}

function populateTransferAccountSelects() {
  const fromSel = document.getElementById('transfer-from');
  const toSel = document.getElementById('transfer-to');
  if (!fromSel || !toSel) return;

  const accounts = getCurrentLinkedAccounts();
  if (!accounts.length) {
    fromSel.innerHTML = '<option value="">Sign in first</option>';
    toSel.innerHTML = '<option value="">Sign in first</option>';
    return;
  }

  const priorFrom = fromSel.value;
  const priorTo = toSel.value;
  const options = accounts.map(account => `<option value="${escapeHtml(account.id)}">${escapeHtml(account.label)}</option>`).join('');
  fromSel.innerHTML = options;
  toSel.innerHTML = options;

  fromSel.value = accounts.some(account => account.id === priorFrom) ? priorFrom : (accounts[0]?.id || '');
  toSel.value = accounts.some(account => account.id === priorTo) ? priorTo : (accounts[1]?.id || accounts[0]?.id || '');

  if (fromSel.value === toSel.value && accounts.length > 1) {
    const alternate = accounts.find(account => account.id !== fromSel.value);
    if (alternate) toSel.value = alternate.id;
  }
}

function renderLinkedAccountsEditor() {
  const container = document.getElementById('linked-account-list');
  if (!container) return;

  if (!currentUser?.email) {
    container.innerHTML = '<div class="empty">Sign in to manage profile accounts.</div>';
    populateTransferAccountSelects();
    return;
  }

  const accounts = getCurrentLinkedAccounts();
  container.innerHTML = accounts.map(account => `
    <div class="item-row" style="flex-wrap:wrap;gap:8px;">
      <div style="flex:1;min-width:180px;">
        <div style="font-weight:600;">${escapeHtml(account.label)}</div>
        <div style="font-size:11px;color:var(--muted);">Profile account</div>
      </div>
      <button class="btn-sm" type="button" onclick="removeLinkedAccount('${account.id}')" ${accounts.length <= 1 ? 'disabled' : ''}>Delete</button>
    </div>
  `).join('');
  populateTransferAccountSelects();
}

function addLinkedAccount() {
  if (!ensureRegisteredUser('manage profile accounts')) return;
  const input = document.getElementById('linked-account-name');
  const label = String(input?.value || '').trim().slice(0, 40);
  if (!label) {
    setLinkedAccountStatus('Enter an account name first.', 'error');
    return;
  }
  const accounts = getCurrentLinkedAccounts();
  if (accounts.some(account => account.label.toLowerCase() === label.toLowerCase())) {
    setLinkedAccountStatus('That profile account name already exists.', 'error');
    return;
  }
  saveCurrentUserRecord(normalizeAuthUserRecord({
    ...currentUser,
    linked_accounts: [...accounts, { id: generateId(), label }]
  }));
  if (input) input.value = '';
  setLinkedAccountStatus(`Added ${label}.`, 'success');
  renderLinkedAccountsEditor();
}

function removeLinkedAccount(accountId) {
  if (!ensureRegisteredUser('manage profile accounts')) return;
  const accounts = getCurrentLinkedAccounts();
  if (accounts.length <= 1) {
    setLinkedAccountStatus('Keep at least one profile account.', 'error');
    return;
  }
  const nextAccounts = accounts.filter(account => account.id !== accountId);
  const removed = accounts.find(account => account.id === accountId);
  saveCurrentUserRecord(normalizeAuthUserRecord({
    ...currentUser,
    linked_accounts: nextAccounts
  }));
  setLinkedAccountStatus(removed ? `Removed ${removed.label}.` : 'Profile account removed.', 'success');
  renderLinkedAccountsEditor();
}

function readAuthUsersFromLocalStorage() {
  try {
    const raw = localStorage.getItem(AUTH_USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return normalizeAuthUsers(parsed);
  } catch (e) {
    console.error('Auth local storage read error:', e);
    return [];
  }
}

function writeAuthUsersToLocalStorage(users) {
  try {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
    return true;
  } catch (e) {
    console.error('Auth storage error:', e);
    return false;
  }
}

function openAuthDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }

    const request = window.indexedDB.open(AUTH_DB_NAME, AUTH_DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(AUTH_DB_STORE)) {
        db.createObjectStore(AUTH_DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
  });
}

function readAuthUsersFromIndexedDb() {
  return openAuthDatabase().then(db => new Promise((resolve, reject) => {
    if (!db) {
      resolve([]);
      return;
    }
    const tx = db.transaction(AUTH_DB_STORE, 'readonly');
    const store = tx.objectStore(AUTH_DB_STORE);
    const request = store.get(AUTH_DB_USERS_KEY);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const result = request.result;
      resolve(normalizeAuthUsers(Array.isArray(result) ? result : []));
    };
    tx.oncomplete = () => db.close();
    tx.onerror = () => db.close();
    tx.onabort = () => db.close();
  })).catch(error => {
    console.error('Auth IndexedDB read error:', error);
    return [];
  });
}

function persistAuthUsersToIndexedDb(users) {
  return openAuthDatabase().then(db => new Promise((resolve, reject) => {
    if (!db) {
      resolve(false);
      return;
    }
    const tx = db.transaction(AUTH_DB_STORE, 'readwrite');
    const store = tx.objectStore(AUTH_DB_STORE);
    const request = store.put(users, AUTH_DB_USERS_KEY);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => {
      db.close();
      resolve(true);
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || request.error);
    };
    tx.onabort = () => {
      db.close();
      reject(tx.error || request.error);
    };
  })).catch(error => {
    console.error('Auth IndexedDB write error:', error);
    return false;
  });
}

async function hydrateAuthUsersCache() {
  const localUsers = readAuthUsersFromLocalStorage();
  authUsersCache = localUsers;

  const indexedDbUsers = await readAuthUsersFromIndexedDb();
  if (indexedDbUsers.length && indexedDbUsers.length >= localUsers.length) {
    authUsersCache = indexedDbUsers;
    writeAuthUsersToLocalStorage(indexedDbUsers);
    return authUsersCache;
  }

  if (localUsers.length) {
    persistAuthUsersToIndexedDb(localUsers);
  }
  return authUsersCache;
}

function trackUserActivity() {
  const currentUser = getCurrentUser();
  if (!currentUser?.email) return;
  
  if (!state.user_sessions) state.user_sessions = {};
  
  const now = Date.now();
  const lastTrack = state.user_sessions[currentUser.email] || 0;
  if (now - lastTrack > 60000) {
    state.user_sessions[currentUser.email] = now;
    saveState();
  }
  updateOnlineIndicator();
}

function updateOnlineIndicator() {
  const now = Date.now();
  const sessions = state.user_sessions || {};
  const onlineCount = Object.values(sessions).filter(ts => now - ts < ONLINE_TIMEOUT_MS).length;
  
  const countEl = document.getElementById('online-count');
  if (countEl) countEl.textContent = onlineCount;
}

function getOnlineUsers() {
  if (!state?.user_sessions) return [];
  const now = Date.now();
  return Object.entries(state.user_sessions)
    .filter(([_, ts]) => now - ts < ONLINE_TIMEOUT_MS)
    .map(([email, ts]) => ({ email, lastActive: ts }));
}

function renderAllMembers() {
  if (!isStaffUser()) return;
  const container = document.getElementById('mod-all-members-list');
  if (!container) return;
  
  const membersMap = new Map();
  loadAuthUsers().forEach(user => {
    const email = String(user.email || '').toLowerCase();
    if (!email) return;
    membersMap.set(email, {
      email,
      display: user.display_name || email.split('@')[0] || 'User',
      authId: user.id || '',
      plan: user.subscription?.plan || user.plan || 'free',
      verified: Boolean(user.email_verified),
      flips: 0,
      slayer: 0,
      fp: 0,
      prices: 0,
      listings: 0,
      lastSeen: 0,
      registeredAt: user.created_at || ''
    });
  });
  
  state.trades.forEach(t => {
    if (t.actor_email) {
      const key = String(t.actor_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: t.actor_display || 'Unknown', authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.flips++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(t.date).getTime());
      membersMap.set(key, existing);
    }
  });
  
  state.slayer_logs.forEach(l => {
    if (l.actor_email) {
      const key = String(l.actor_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: l.actor_display || 'Unknown', authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.slayer++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(key, existing);
    }
  });
  
  state.fp_logs.forEach(l => {
    if (l.actor_email) {
      const key = String(l.actor_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: l.actor_display || 'Unknown', authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.fp++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(key, existing);
    }
  });
  
  state.community_prices.forEach(p => {
    if (p.user_email) {
      const key = String(p.user_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: p.user_name || 'Unknown', authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.prices++;
      existing.lastSeen = Math.max(existing.lastSeen, Number(p.created_at));
      membersMap.set(key, existing);
    }
  });
  
  state.marketplace_listings.forEach(l => {
    if (l.seller_email) {
      const key = String(l.seller_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: l.seller || l.seller_email, authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.listings++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(key, existing);
    }
  });
  
  if (state?.user_sessions) {
    Object.entries(state.user_sessions).forEach(([email, ts]) => {
      const key = String(email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: key.split('@')[0], authId: '', plan: 'free', verified: false, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0, registeredAt: '' };
      existing.lastSeen = Math.max(existing.lastSeen, ts);
      membersMap.set(key, existing);
    });
  }
  
  const members = Array.from(membersMap.values()).sort((a, b) => b.lastSeen - a.lastSeen);
  const now = Date.now();
  
  if (members.length === 0) {
    container.innerHTML = '<div class="empty">No members found.</div>';
    return;
  }
  
  container.innerHTML = `<table class="data-table" style="width:100%;">
    <thead>
      <tr>
        <th>Member</th>
        <th>Account</th>
        <th>Activity</th>
        <th>Last Seen</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      ${members.map(m => {
        const isOnline = now - m.lastSeen < ONLINE_TIMEOUT_MS;
        const totalActivity = m.flips + m.slayer + m.fp + m.prices + m.listings;
        return `<tr>
          <td>
            <div style="font-weight:600;">${escapeHtml(m.display)}</div>
            <div style="font-size:11px;color:var(--muted);">acct ${escapeHtml((m.authId || 'guest').slice(0, 8))}</div>
          </td>
          <td>
            <div style="font-size:11px;">
              <span style="color:${m.verified ? 'var(--green)' : 'var(--amber)'};">${m.verified ? 'Verified' : 'Pending verify'}</span><br>
              <span style="color:var(--muted);text-transform:capitalize;">${escapeHtml(m.plan || 'free')}</span>
              ${m.registeredAt ? `<br><span style="color:var(--hint);">Joined ${escapeHtml(String(m.registeredAt).slice(0, 10))}</span>` : ''}
            </div>
          </td>
          <td>
            <div style="font-size:11px;">
              ${!totalActivity ? `<span style="color:var(--muted);">No tracker activity yet</span>` : ''}
              ${m.flips ? `<span style="color:var(--accent);">💱 ${m.flips}</span>` : ''}
              ${m.slayer ? `<span style="color:var(--green);">⚔️ ${m.slayer}</span>` : ''}
              ${m.fp ? `<span style="color:var(--amber);">🎰 ${m.fp}</span>` : ''}
              ${m.prices ? `<span style="color:var(--muted);">💰 ${m.prices}</span>` : ''}
              ${m.listings ? `<span style="color:var(--purple);">🛒 ${m.listings}</span>` : ''}
            </div>
          </td>
          <td style="font-size:12px;color:var(--muted);">${isOnline ? 'Just now' : timeAgo(m.lastSeen)}</td>
          <td>
            ${isOnline ? '<span style="color:var(--green);font-size:11px;">● Online</span>' : '<span style="color:var(--muted);font-size:11px;">○ Offline</span>'}
          </td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>`;
}

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

setInterval(updateOnlineIndicator, 60000);

function loadAuthUsers() {
  if (Array.isArray(authUsersCache)) {
    return authUsersCache;
  }
  authUsersCache = readAuthUsersFromLocalStorage();
  return authUsersCache;
}

function saveAuthUsers(users) {
  const normalizedUsers = normalizeAuthUsers(users);
  authUsersCache = normalizedUsers;
  const localSaved = writeAuthUsersToLocalStorage(normalizedUsers);
  persistAuthUsersToIndexedDb(normalizedUsers);
  return localSaved;
}

async function persistAuthUsersEverywhere(users) {
  const normalizedUsers = normalizeAuthUsers(users);
  authUsersCache = normalizedUsers;
  const localSaved = writeAuthUsersToLocalStorage(normalizedUsers);
  const indexedDbSaved = await persistAuthUsersToIndexedDb(normalizedUsers);
  return localSaved || indexedDbSaved;
}

function findAuthUser(email) {
  const normalized = String(email || '').trim().toLowerCase();
  return loadAuthUsers().find(user => String(user.email || '').toLowerCase() === normalized) || null;
}

function findAuthUserByDisplayName(displayName) {
  const normalized = String(displayName || '').trim().toLowerCase();
  return loadAuthUsers().find(user => String(user.display_name || '').trim().toLowerCase() === normalized) || null;
}

function findAuthUserById(userId) {
  const normalized = String(userId || '').trim();
  return loadAuthUsers().find(user => String(user.id || '').trim() === normalized) || null;
}

function getStaffTargetUser(selectId = 'mod-user-select') {
  const userId = document.getElementById(selectId)?.value || '';
  return findAuthUserById(userId);
}

function populateStaffUserSelects() {
  const users = loadAuthUsers()
    .slice()
    .sort((a, b) => String(a.display_name || '').localeCompare(String(b.display_name || '')));
  const selects = ['mod-user-select', 'mod-ban-user-select', 'mod-points-user-select'];
  const options = ['<option value="">Select registered user</option>']
    .concat(users.map(user => {
      const label = `${user.display_name || 'User'} · acct ${(user.id || 'guest').slice(0, 8)}`;
      return `<option value="${escapeHtml(user.id || '')}">${escapeHtml(label)}</option>`;
    }))
    .join('');
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = options;
  });
}

function isAdminUser() {
  if (!currentUser) return false;
  if (currentUser.is_admin) return true;
  const owner = String(OWNER_ADMIN_EMAIL || '').trim().toLowerCase();
  if (!owner) return false;
  return String(currentUser.email || '').trim().toLowerCase() === owner;
}

function isModeratorUser() {
  if (!currentUser) return false;
  if (currentUser.is_moderator) return true;
  const email = String(currentUser.email || '').trim().toLowerCase();
  return MODERATOR_EMAILS.length > 0 && MODERATOR_EMAILS.includes(email);
}

function isStaffUser() {
  return isAdminUser() || isModeratorUser();
}

function isMarketplaceListingOwner(entry) {
  if (!currentUser || !entry) return false;
  const email = String(currentUser.email || '').trim().toLowerCase();
  if (entry.seller_email && String(entry.seller_email).toLowerCase() === email) return true;
  const seller = String(entry.seller || '').trim().toLowerCase();
  const name = String(currentUser.display_name || '').trim().toLowerCase();
  return seller === email || seller === name;
}

function getActorEmail() {
  return currentUser ? String(currentUser.email || '').trim().toLowerCase() : '';
}

function getActorDisplay() {
  return currentUser ? String(currentUser.display_name || currentUser.email || '').trim() : '';
}

function isEmailBanned(email) {
  const e = String(email || '').trim().toLowerCase();
  if (!e || !state) return false;
  return (state.banned_users || []).some(b => b.email === e);
}

function findBannedRecord(email) {
  const e = String(email || '').trim().toLowerCase();
  return (state.banned_users || []).find(b => b.email === e) || null;
}

function validateCurrentUserNotBanned() {
  if (!currentUser || !state) return;
  if (isEmailBanned(currentUser.email)) {
    currentUser = null;
    persistAuthSession();
    updateAuthUI();
    alert('This account has been suspended.');
  }
}

function staffBanUser(targetEmail, reason) {
  if (!isStaffUser() || !currentUser) return { ok: false, error: 'Staff only.' };
  const email = String(targetEmail || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return { ok: false, error: 'Enter a valid email.' };
  if (email === String(currentUser.email || '').toLowerCase()) return { ok: false, error: 'You cannot ban yourself.' };
  const owner = String(OWNER_ADMIN_EMAIL || '').trim().toLowerCase();
  if (owner && email === owner) return { ok: false, error: 'Cannot ban the configured owner email.' };
  const target = findAuthUser(email);
  if (target?.is_admin) return { ok: false, error: 'Cannot ban an admin account.' };
  if (findBannedRecord(email)) return { ok: false, error: 'Already banned.' };
  state.banned_users.push({
    email,
    reason: String(reason || 'Moderation').trim().slice(0, 500) || 'Moderation',
    at: new Date().toISOString(),
    by_email: String(currentUser.email || '').toLowerCase(),
    by_display: getActorDisplay().slice(0, 80)
  });
  saveState();
  return { ok: true };
}

function staffUnbanUser(targetEmail) {
  if (!isStaffUser() || !currentUser) return { ok: false, error: 'Staff only.' };
  const email = String(targetEmail || '').trim().toLowerCase();
  const idx = (state.banned_users || []).findIndex(b => b.email === email);
  if (idx === -1) return { ok: false, error: 'Not in ban list.' };
  state.banned_users.splice(idx, 1);
  saveState();
  return { ok: true };
}

/**
 * Toggle is_moderator on an auth user in this browser's registry. Only isAdminUser() (owner email or is_admin).
 * Moderators cannot call this — they never see the buttons.
 */
function adminSetUserModerator(targetEmail, wantModerator) {
  if (!isAdminUser() || !currentUser) {
    return { ok: false, error: 'Only the site owner can change moderator status.' };
  }
  const email = String(targetEmail || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return { ok: false, error: 'Enter a valid email.' };
  if (email === String(currentUser.email || '').toLowerCase()) {
    return { ok: false, error: 'You cannot change moderator status on your own account here.' };
  }
  const owner = String(OWNER_ADMIN_EMAIL || '').trim().toLowerCase();
  if (owner && email === owner) {
    return { ok: false, error: 'The owner account already has full access.' };
  }
  const users = loadAuthUsers();
  const idx = users.findIndex(u => String(u.email || '').trim().toLowerCase() === email);
  if (idx === -1) return { ok: false, error: 'No auth record for that email in this browser.' };
  const target = users[idx];
  if (target?.is_admin) {
    return { ok: false, error: 'Admin accounts are not toggled as moderators.' };
  }
  if (wantModerator) {
    if (isEmailBanned(email)) return { ok: false, error: 'Unban this email before making them a moderator.' };
    if (target.is_moderator) return { ok: false, error: 'Already a moderator.' };
    users[idx] = { ...target, is_moderator: true };
  } else {
    if (!target.is_moderator) return { ok: false, error: 'Not a moderator.' };
    users[idx] = { ...target, is_moderator: false };
  }
  saveAuthUsers(users);
  if (currentUser && String(currentUser.email || '').toLowerCase() === email) {
    currentUser = findAuthUser(email);
    persistAuthSession();
  }
  updateAuthUI();
  return { ok: true };
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setAdminRegistryStatus(message = '', tone = 'muted') {
  const el = document.getElementById('admin-registry-status');
  if (!el) return;
  if (!message) {
    el.style.display = 'none';
    el.textContent = '';
    return;
  }
  el.style.display = 'block';
  el.textContent = message;
  el.style.color = tone === 'error' ? 'var(--red)' : tone === 'success' ? 'var(--green)' : 'var(--muted)';
}

function saveAdminRegistryKey() {
  const input = document.getElementById('admin-registry-key');
  const v = String(input?.value || '').trim();
  if (!v) {
    setAdminRegistryStatus('Paste your admin key first.', 'error');
    return;
  }
  try {
    sessionStorage.setItem('impact_admin_registry_key', v);
  } catch (e) {
    setAdminRegistryStatus('Could not save key in this browser.', 'error');
    return;
  }
  setAdminRegistryStatus('Saved for this session. Use Refresh list.', 'success');
  void refreshAdminRegistry();
}

async function refreshAdminRegistry() {
  await renderAdminSiteRegistry();
}

async function renderAdminSiteRegistry() {
  if (!isAdminUser()) return;
  const tableEl = document.getElementById('admin-registry-table');
  if (!tableEl) return;
  const base = getBillingFunctionsBase();
  if (!base) {
    tableEl.innerHTML = '<div class="empty">Open the deployed site (not a local file preview) to load the registry.</div>';
    return;
  }
  const key = getAdminRegistryApiKey();
  if (!key) {
    tableEl.innerHTML =
      '<div class="empty">Set IMPACT_ADMIN_API_KEY in api/stripe-secrets.php on the server, then paste it above and click Save in this browser.</div>';
    setAdminRegistryStatus('');
    return;
  }
  setAdminRegistryStatus('Loading…', 'muted');
  try {
    const res = await fetch(`${base}/admin-site-users`, {
      method: 'GET',
      headers: { 'X-Impact-Admin-Key': key }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setAdminRegistryStatus(data.error || `Could not load (${res.status}).`, 'error');
      tableEl.innerHTML = '<div class="empty">Fix the key or server config and try Refresh again.</div>';
      return;
    }
    const users = Array.isArray(data.users) ? data.users : [];
    setAdminRegistryStatus(`${users.length} user${users.length === 1 ? '' : 's'} in server registry.`, 'success');
    if (!users.length) {
      tableEl.innerHTML = '<div class="empty">No signups recorded yet. New accounts appear after signup (and update on verify / sign-in).</div>';
      return;
    }
    const fmt = x => (x ? escapeHtml(String(x)) : '—');
    tableEl.innerHTML = `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:13px;">
<thead><tr style="text-align:left;border-bottom:1px solid var(--border);">
<th style="padding:8px 6px;">Email</th><th style="padding:8px 6px;">Display</th><th style="padding:8px 6px;">Signed up</th>
<th style="padding:8px 6px;">Verified</th><th style="padding:8px 6px;">Last sign-in</th></tr></thead><tbody>
${users
  .map(
    u => `<tr style="border-bottom:1px solid var(--border);">
<td style="padding:8px 6px;word-break:break-all;">${fmt(u.email)}</td>
<td style="padding:8px 6px;">${fmt(u.display_name)}</td>
<td style="padding:8px 6px;white-space:nowrap;">${fmt(u.signup_at || u.client_created_at)}</td>
<td style="padding:8px 6px;white-space:nowrap;">${fmt(u.email_verified_at)}</td>
<td style="padding:8px 6px;white-space:nowrap;">${fmt(u.last_signin_at)}</td>
</tr>`
  )
  .join('')}
</tbody></table></div>`;
  } catch (e) {
    setAdminRegistryStatus(e.message || 'Network error.', 'error');
    tableEl.innerHTML = '<div class="empty">Request failed.</div>';
  }
}

function renderAdminPaymentHints() {
  if (!isAdminUser()) return;
  const el = document.getElementById('admin-lemon-webhook-display');
  if (!el) return;
  try {
    const basePath =
      typeof getBillingFunctionsBase === 'function' && getBillingFunctionsBase()
        ? `${String(getBillingFunctionsBase()).replace(/\/$/, '')}/stripe-webhook`
        : '/api/stripe-webhook';
    const origin = window.location.origin || '';
    const u = origin + (basePath.startsWith('/') ? basePath : `/${basePath}`);
    el.innerHTML = `<strong>Webhook URL (paste into Stripe):</strong> <code style="word-break:break-all;">${escapeHtml(u)}</code>`;
  } catch (e) {
    el.textContent = '';
  }
}

function renderAdminUserList() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-user-list');
  if (!container) return;

  const users = loadAuthUsers();
  if (!users.length) {
    container.innerHTML = '<div class="empty">No users in local storage.</div>';
    return;
  }

  container.innerHTML = `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <thead>
        <tr style="text-align:left;border-bottom:1px solid var(--border);">
          <th style="padding:8px 6px;">Email</th>
          <th style="padding:8px 6px;">Display Name</th>
          <th style="padding:8px 6px;">Role</th>
          <th style="padding:8px 6px;">Trust</th>
          <th style="padding:8px 6px;">Points</th>
          <th style="padding:8px 6px;">Prices</th>
          <th style="padding:8px 6px;">Actions</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(u => {
          const isOwner = String(u.email || '').toLowerCase() === String(OWNER_ADMIN_EMAIL || '').toLowerCase();
          const role = u.is_admin ? '👑 Admin' : u.is_moderator ? '🛡️ Mod' : 'User';
          const roleColor = u.is_admin ? 'var(--green)' : u.is_moderator ? 'var(--accent)' : 'var(--muted)';
          const trustScore = getUserTrustScore(u);
          const trustColor = trustScore >= 5 ? 'var(--green)' : trustScore >= 2 ? 'var(--amber)' : 'var(--muted)';
          return `<tr style="border-bottom:1px solid var(--border);">
            <td style="padding:8px 6px;word-break:break-all;">${escapeHtml(u.email)}</td>
            <td style="padding:8px 6px;">${escapeHtml(u.display_name || '—')}</td>
            <td style="padding:8px 6px;color:${roleColor};font-weight:600;">${role}</td>
            <td style="padding:8px 6px;color:${trustColor};font-weight:600;">${trustScore.toFixed(1)}</td>
            <td style="padding:8px 6px;">${u.points || 0}</td>
            <td style="padding:8px 6px;">${u.price_count || 0}</td>
            <td style="padding:8px 6px;">
              ${isOwner ? '<span style="color:var(--muted);">Owner</span>' : `
                ${!u.is_admin ? `<button class="btn-sm" onclick="adminGiveMod('${escapeHtml(u.email)}')">Give Mod</button>` : ''}
                ${u.is_moderator ? `<button class="btn-sm" onclick="adminRemoveMod('${escapeHtml(u.email)}')">Remove Mod</button>` : ''}
                <button class="btn-sm" onclick="adminViewUserDetails('${escapeHtml(u.email)}')">View</button>
              `}
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

function adminGiveMod(email) {
  const r = adminSetUserModerator(email, true);
  if (r.ok) {
    alert('Moderator access granted.');
  } else {
    alert('Error: ' + r.error);
  }
  renderAdminUserList();
}

function adminRemoveMod(email) {
  const r = adminSetUserModerator(email, false);
  if (r.ok) {
    alert('Moderator access removed.');
  } else {
    alert('Error: ' + r.error);
  }
  renderAdminUserList();
}

const POINTS_PER_PRICE = 1;
const POINTS_FOR_REWARD = 1000;
const POINTS_REWARD_DAYS = 14;

const TRUST_DAYS_FULL = 5;
const TRUST_PREMIUM_BONUS = 2;
const TRUST_MOD_BONUS = 1.5;
const TRUST_ADMIN_BONUS = 3;

function getUserTrustScore(user) {
  if (!user) return 0.5;
  
  let score = 1;
  
  const accountAgeDays = (Date.now() - new Date(user.created_at).getTime()) / (24 * 60 * 60 * 1000);
  if (accountAgeDays >= TRUST_DAYS_FULL) {
    score += 1;
  } else if (accountAgeDays >= 2) {
    score += 0.5;
  }
  
  const isAdmin = String(user.email || '').toLowerCase() === String(OWNER_ADMIN_EMAIL || '').toLowerCase() || user.is_admin;
  const isMod = user.is_moderator;
  const hasPremium = user.subscription?.plan === 'pro' || user.subscription?.plan === 'founder';
  
  if (isAdmin) score += TRUST_ADMIN_BONUS;
  else if (isMod) score += TRUST_MOD_BONUS;
  else if (hasPremium) score += TRUST_PREMIUM_BONUS;
  
  const successfulPrices = user.successful_prices || 0;
  if (successfulPrices >= 20) score += 2;
  else if (successfulPrices >= 10) score += 1;
  else if (successfulPrices >= 5) score += 0.5;
  
  return Math.min(score, 10);
}

function getTrustWeight(user) {
  const score = getUserTrustScore(user);
  return Math.max(score, 0.5);
}

function awardPricePoints(email) {
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) return 0;
  
  user.points = (user.points || 0) + POINTS_PER_PRICE;
  user.price_count = (user.price_count || 0) + 1;
  saveAuthUsers(users);
  
  if (user.email === currentUser?.email) {
    currentUser = user;
    persistAuthSession();
  }
  
  console.log(`[Points] ${email} earned 1 point! Total: ${user.points} points.`);
  return user.points;
}

function getUserPoints(email) {
  const user = loadAuthUsers().find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  return user ? { points: user.points || 0, price_count: user.price_count || 0 } : { points: 0, price_count: 0 };
}

function adminGivePoints(email, amount) {
  if (!isAdminUser()) return;
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) {
    alert('User not found.');
    return;
  }
  
  user.points = Math.max(0, (user.points || 0) + amount);
  saveAuthUsers(users);
  
  if (user.email === currentUser?.email) {
    currentUser = user;
    persistAuthSession();
  }
  
  alert(`Gave ${amount} points to ${user.email}. New total: ${user.points} points.`);
}

function adminTakePoints(email, amount) {
  if (!isAdminUser()) return;
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) {
    alert('User not found.');
    return;
  }
  
  user.points = Math.max(0, (user.points || 0) - amount);
  saveAuthUsers(users);
  
  if (user.email === currentUser?.email) {
    currentUser = user;
    persistAuthSession();
  }
  
  alert(`Took ${amount} points from ${user.email}. New total: ${user.points} points.`);
}

function adminViewUserDetails(email) {
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) {
    alert('User not found.');
    return;
  }
  
  const emailLower = String(user.email || '').toLowerCase();
  
  const userFlips = state.trades.filter(t => String(t.actor_email || '').toLowerCase() === emailLower);
  const userSlayer = state.slayer_logs.filter(l => String(l.actor_email || '').toLowerCase() === emailLower);
  const userFp = state.fp_logs.filter(l => String(l.actor_email || '').toLowerCase() === emailLower);
  const userPrices = state.community_prices.filter(p => String(p.user_email || '').toLowerCase() === emailLower);
  const userListings = state.marketplace_listings.filter(l => String(l.seller_email || '').toLowerCase() === emailLower);
  
  const totalFlipProfit = userFlips.reduce((sum, t) => sum + (Number(t.profit) || 0), 0);
  const totalSlayerGp = userSlayer.reduce((sum, l) => sum + (Number(l.gp) || 0), 0);
  const totalFpNet = userFp.reduce((sum, l) => sum + (Number(l.net) || 0), 0);

  const details = `
    <div class="card" style="margin-top:16px;">
      <div class="card-title">📊 ${escapeHtml(user.display_name || user.email)}'s Stats</div>
      <div class="stat-grid" style="margin-bottom:0;">
        <div class="stat-card"><div class="stat-card-label">Flip Profit</div><div class="stat-card-value ${totalFlipProfit >= 0 ? 'green' : 'red'}">${fmtGP(totalFlipProfit)} GP</div></div>
        <div class="stat-card"><div class="stat-card-label">Slayer GP</div><div class="stat-card-value green">${fmtGP(totalSlayerGp)} GP</div></div>
        <div class="stat-card"><div class="stat-card-label">FP Net</div><div class="stat-card-value ${totalFpNet >= 0 ? 'green' : 'red'}">${fmtGP(totalFpNet)} GP</div></div>
        <div class="stat-card"><div class="stat-card-label">Total Combined</div><div class="stat-card-value ${(totalFlipProfit + totalSlayerGp + totalFpNet) >= 0 ? 'green' : 'red'}">${fmtGP(totalFlipProfit + totalSlayerGp + totalFpNet)} GP</div></div>
      </div>
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">📈 Flips (${userFlips.length})</div>
      ${userFlips.length ? `<div style="max-height:300px;overflow-y:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:12px;">
          <thead><tr style="text-align:left;"><th>Date</th><th>Item</th><th>Buy</th><th>Sell</th><th>Profit</th><th>Status</th></tr></thead>
          <tbody>
            ${userFlips.slice(0, 50).map(t => `<tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px;">${t.date}</td>
              <td style="padding:6px;">${escapeHtml(t.item)}</td>
              <td style="padding:6px;">${t.buy ? fmtGP(t.buy) : '—'}</td>
              <td style="padding:6px;">${t.sell ? fmtGP(t.sell) : '—'}</td>
              <td style="padding:6px;color:${(Number(t.profit)||0)>=0?'var(--green)':'var(--red)'};">${t.status==='pending'?'~ ':''}${fmtGP(Number(t.profit)||0)}</td>
              <td style="padding:6px;">${t.status}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>` : '<div class="empty">No flips recorded.</div>'}
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">⚔️ Slayer Sessions (${userSlayer.length})</div>
      ${userSlayer.length ? `<div style="max-height:200px;overflow-y:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:12px;">
          <thead><tr style="text-align:left;"><th>Date</th><th>Task</th><th>GP</th><th>Minutes</th></tr></thead>
          <tbody>
            ${userSlayer.slice(0, 30).map(l => `<tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px;">${l.date}</td>
              <td style="padding:6px;">${escapeHtml(l.task)}</td>
              <td style="padding:6px;color:var(--green);">${fmtGP(Number(l.gp)||0)}</td>
              <td style="padding:6px;">${l.minutes || '—'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>` : '<div class="empty">No slayer sessions recorded.</div>'}
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">🎰 FP Sessions (${userFp.length})</div>
      ${userFp.length ? `<div style="max-height:200px;overflow-y:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:12px;">
          <thead><tr style="text-align:left;"><th>Date</th><th>Result</th><th>Stake</th><th>Net</th></tr></thead>
          <tbody>
            ${userFp.slice(0, 30).map(l => `<tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px;">${l.date}</td>
              <td style="padding:6px;">${escapeHtml(l.result)}</td>
              <td style="padding:6px;">${l.stake ? fmtGP(l.stake) : '—'}</td>
              <td style="padding:6px;color:${(Number(l.net)||0)>=0?'var(--green)':'var(--red)'};">${(Number(l.net)||0)>=0?'+':''}${fmtGP(Number(l.net)||0)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>` : '<div class="empty">No FP sessions recorded.</div>'}
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">💰 Price Submissions (${userPrices.length})</div>
      ${userPrices.length ? userPrices.map(p => `<div class="item-row">
        <div class="item-name">${escapeHtml(p.item_name)}</div>
        <div class="item-meta">${fmtGP(Number(p.price)||0)}</div>
        <div style="font-size:11px;color:var(--muted);">${new Date(Number(p.created_at)).toLocaleString()}</div>
      </div>`).join('') : '<div class="empty">No price submissions.</div>'}
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">🛒 Marketplace Listings (${userListings.length})</div>
      ${userListings.length ? userListings.map(l => `<div class="item-row">
        <div class="item-name">${escapeHtml(l.username)}</div>
        <div class="item-meta">${fmtGP(Number(l.price)||0)} · ${escapeHtml(l.status)}</div>
        <div style="font-size:11px;color:var(--muted);">${escapeHtml(l.contact)}</div>
      </div>`).join('') : '<div class="empty">No marketplace listings.</div>'}
    </div>
  `;
  
  alert('User details for ' + user.email + ' - check console or add a modal to display');
  console.log('===== ADMIN VIEW: ' + user.email + ' =====');
  console.log('Flips:', userFlips);
  console.log('Slayer:', userSlayer);
  console.log('FP:', userFp);
  console.log('Prices:', userPrices);
  console.log('Listings:', userListings);
}

async function loadAdminPurchases() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-purchases-list');
  if (!container) return;
  
  container.innerHTML = '<div class="loading">Loading purchases from Stripe...</div>';
  
  const base = getBillingFunctionsBase();
  if (!base) {
    container.innerHTML = '<div class="empty">Open the deployed site to load purchases.</div>';
    return;
  }
  
  const key = getAdminRegistryApiKey();
  if (!key) {
    container.innerHTML = '<div class="empty">Set Admin API key first.</div>';
    return;
  }
  
  try {
    const res = await fetch(`${base}/admin-all-purchases`, {
      method: 'GET',
      headers: { 'X-Impact-Admin-Key': key }
    });
    const data = await res.json().catch(() => ({}));
    
    if (!res.ok) {
      container.innerHTML = '<div class="empty">Error: ' + (data.error || 'Failed to load') + '</div>';
      return;
    }
    
    const purchases = data.purchases || [];
    if (!purchases.length) {
      container.innerHTML = '<div class="empty">No purchases found.</div>';
      return;
    }
    
    container.innerHTML = `<div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead>
          <tr style="text-align:left;border-bottom:1px solid var(--border);">
            <th style="padding:8px 6px;">Email</th>
            <th style="padding:8px 6px;">Plan</th>
            <th style="padding:8px 6px;">Status</th>
            <th style="padding:8px 6px;">Customer ID</th>
            <th style="padding:8px 6px;">Subscription ID</th>
            <th style="padding:8px 6px;">Renews/Created</th>
          </tr>
        </thead>
        <tbody>
          ${purchases.map(p => {
            const isOwner = String(p.email || '').toLowerCase() === String(OWNER_ADMIN_EMAIL || '').toLowerCase();
            const displayPlan = isOwner ? 'founder' : (p.plan || 'unknown');
            return `<tr style="border-bottom:1px solid var(--border);">
              <td style="padding:8px 6px;word-break:break-all;">${escapeHtml(p.email)} ${isOwner ? '<span style="color:var(--amber);font-size:10px;">[OWNER]</span>' : ''}</td>
              <td style="padding:8px 6px;font-weight:600;color:${displayPlan==='founder'?'var(--amber)':displayPlan==='pro'?'var(--green)':'var(--muted)'};">${escapeHtml(displayPlan).toUpperCase()}</td>
              <td style="padding:8px 6px;">${escapeHtml(p.status || '—')}</td>
              <td style="padding:8px 6px;word-break:break-all;font-size:11px;">${escapeHtml(p.customerId || '—')}</td>
              <td style="padding:8px 6px;word-break:break-all;font-size:11px;">${escapeHtml(p.subscriptionId || '—')}</td>
              <td style="padding:8px 6px;white-space:nowrap;">${escapeHtml(p.periodEnd || p.createdAt || '—')}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
  } catch (e) {
    container.innerHTML = '<div class="empty">Error: ' + e.message + '</div>';
  }
}

function exportAllUserFlips() {
  if (!isAdminUser()) return;
  
  const headers = ['Email', 'Display Name', 'Date', 'Item', 'Buy', 'Sell', 'Qty', 'Profit', 'ROI', 'Status'];
  const rows = [];
  
  state.trades.forEach(t => {
    const email = t.actor_email || 'Anonymous';
    const name = t.actor_display || 'Unknown';
    rows.push([
      email,
      name,
      t.date || '',
      t.item || '',
      t.buy || 0,
      t.sell || 0,
      t.qty || 1,
      t.profit || 0,
      t.roi || 0,
      t.status || ''
    ]);
  });
  
  const csv = [headers.join(','), ...rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(','))].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'all_user_flips_' + new Date().toISOString().slice(0, 10) + '.csv';
  a.click();
  URL.revokeObjectURL(url);
  
  alert('Exported ' + rows.length + ' flips to CSV.');
}

function renderAdminPrices() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-prices-list');
  if (!container) return;
  
  const prices = state.community_prices || [];
  if (!prices.length) {
    container.innerHTML = '<div class="empty">No price submissions.</div>';
    return;
  }
  
  container.innerHTML = `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead>
        <tr style="text-align:left;border-bottom:1px solid var(--border);">
          <th style="padding:8px 6px;">User</th>
          <th style="padding:8px 6px;">Item</th>
          <th style="padding:8px 6px;">Price</th>
          <th style="padding:8px 6px;">Date</th>
        </tr>
      </thead>
      <tbody>
        ${prices.map(p => `<tr style="border-bottom:1px solid var(--border);">
          <td style="padding:8px 6px;word-break:break-all;">${escapeHtml(p.user_email || 'Unknown')}</td>
          <td style="padding:8px 6px;">${escapeHtml(p.item_name)}</td>
          <td style="padding:8px 6px;color:var(--green);font-weight:600;">${fmtGP(Number(p.price)||0)}</td>
          <td style="padding:8px 6px;white-space:nowrap;">${new Date(Number(p.created_at)).toLocaleDateString()}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderAdminMarketplace() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-marketplace-list');
  if (!container) return;
  
  const listings = state.marketplace_listings || [];
  if (!listings.length) {
    container.innerHTML = '<div class="empty">No marketplace listings.</div>';
    return;
  }
  
  container.innerHTML = `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead>
        <tr style="text-align:left;border-bottom:1px solid var(--border);">
          <th style="padding:8px 6px;">Username</th>
          <th style="padding:8px 6px;">Price</th>
          <th style="padding:8px 6px;">Seller</th>
          <th style="padding:8px 6px;">Status</th>
          <th style="padding:8px 6px;">Date</th>
        </tr>
      </thead>
      <tbody>
        ${listings.map(l => `<tr style="border-bottom:1px solid var(--border);">
          <td style="padding:8px 6px;font-weight:600;">${escapeHtml(l.username)}</td>
          <td style="padding:8px 6px;color:var(--green);font-weight:600;">${fmtGP(Number(l.price)||0)}</td>
          <td style="padding:8px 6px;word-break:break-all;">${escapeHtml(l.seller || l.seller_email || 'Unknown')}</td>
          <td style="padding:8px 6px;"><span class="badge ${l.status==='active'?'green':l.status==='pending'?'amber':'muted'}">${escapeHtml(l.status)}</span></td>
          <td style="padding:8px 6px;white-space:nowrap;">${escapeHtml(l.date || '')}</td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function renderAdminFlipsStats() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-flips-stats');
  if (!container) return;
  
  const totalProfit = state.trades.filter(t => t.status === 'completed').reduce((sum, t) => sum + (Number(t.profit) || 0), 0);
  const completedCount = state.trades.filter(t => t.status === 'completed').length;
  const pendingCount = state.trades.filter(t => t.status === 'pending').length;
  const uniqueUsers = [...new Set(state.trades.map(t => t.actor_email).filter(Boolean))];
  
  container.innerHTML = `<div class="stat-grid" style="margin-bottom:0;">
    <div class="stat-card"><div class="stat-card-label">Total Profit (Completed)</div><div class="stat-card-value ${totalProfit >= 0 ? 'green' : 'red'}">${fmtGP(totalProfit)} GP</div></div>
    <div class="stat-card"><div class="stat-card-label">Completed Flips</div><div class="stat-card-value">${completedCount}</div></div>
    <div class="stat-card"><div class="stat-card-label">Pending Flips</div><div class="stat-card-value amber">${pendingCount}</div></div>
    <div class="stat-card"><div class="stat-card-label">Unique Users</div><div class="stat-card-value">${uniqueUsers.length}</div></div>
  </div>`;
}

function adminLookupProfile() {
  if (!isAdminUser()) return;
  const query = document.getElementById('admin-profile-search')?.value.trim().toLowerCase() || '';
  if (!query) {
    document.getElementById('admin-profile-result').innerHTML = '<div class="empty">Enter an email or display name to search.</div>';
    return;
  }
  
  const emailResults = (state.trades || []).filter(t => String(t.actor_email || '').toLowerCase().includes(query));
  const nameResults = (state.trades || []).filter(t => String(t.actor_display || '').toLowerCase().includes(query));
  const allEmails = [...new Set([...emailResults.map(t => t.actor_email), ...nameResults.map(t => t.actor_email)].filter(Boolean))];
  
  if (!allEmails.length) {
    document.getElementById('admin-profile-result').innerHTML = '<div class="empty">No users found matching that query.</div>';
    return;
  }
  
  const email = allEmails[0];
  const userTrades = (state.trades || []).filter(t => String(t.actor_email || '').toLowerCase() === email);
  const userSlayer = (state.slayer_logs || []).filter(l => String(l.actor_email || '').toLowerCase() === email);
  const userFp = (state.fp_logs || []).filter(l => String(l.actor_email || '').toLowerCase() === email);
  const userPrices = (state.community_prices || []).filter(p => String(p.user_email || '').toLowerCase() === email);
  const userListings = (state.marketplace_listings || []).filter(l => String(l.seller_email || '').toLowerCase() === email);
  
  const totalProfit = userTrades.filter(t => t.status === 'completed').reduce((sum, t) => sum + (Number(t.profit) || 0), 0);
  const authUsers = loadAuthUsers();
  const authUser = authUsers.find(u => String(u.email || '').toLowerCase() === email);
  
  const isUserAdmin = String(email || '').toLowerCase() === String(OWNER_ADMIN_EMAIL || '').toLowerCase() || authUser?.is_admin;
  const displayPlan = isUserAdmin ? 'Founder' : (authUser?.subscription?.plan || 'free');
  const userPoints = authUser?.points || 0;
  const userPriceCount = authUser?.price_count || 0;
  const pointsToReward = POINTS_FOR_REWARD - (userPoints % POINTS_FOR_REWARD);
  
  document.getElementById('admin-profile-result').innerHTML = `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:16px;">
      <div style="font-weight:700;font-size:16px;margin-bottom:12px;color:var(--accent);">${escapeHtml(authUser?.display_name || email)}</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:12px;">${escapeHtml(email)}</div>
      ${authUser ? `
        <div style="font-size:12px;margin-bottom:8px;">
          <span style="color:var(--hint);">Plan:</span> <span style="color:${isUserAdmin ? 'var(--amber)' : 'var(--text)'};font-weight:600;">${displayPlan}</span>
          ${isUserAdmin ? '<span style="color:var(--red);margin-left:8px;">[OWNER]</span>' : ''}
          ${authUser.is_moderator && !isUserAdmin ? '<span style="color:var(--amber);margin-left:8px;">[MOD]</span>' : ''}
          <span style="margin-left:8px;">Trust: <span style="color:${getUserTrustScore(authUser) >= 5 ? 'var(--green)' : getUserTrustScore(authUser) >= 2 ? 'var(--amber)' : 'var(--muted)'};font-weight:600;">${getUserTrustScore(authUser).toFixed(1)}</span></span>
        </div>
      ` : ''}
      <div class="stat-grid" style="margin-bottom:12px;">
        <div class="stat-card"><div class="stat-card-label">Flips</div><div class="stat-card-value">${userTrades.length}</div></div>
        <div class="stat-card"><div class="stat-card-label">Total Profit</div><div class="stat-card-value ${totalProfit >= 0 ? 'green' : 'red'}">${fmtGP(totalProfit)}</div></div>
        <div class="stat-card"><div class="stat-card-label">Slayer</div><div class="stat-card-value">${userSlayer.length}</div></div>
        <div class="stat-card"><div class="stat-card-label">FP</div><div class="stat-card-value">${userFp.length}</div></div>
      </div>
      <div style="font-size:12px;margin-bottom:12px;">
        <div><span style="color:var(--hint);">Prices submitted:</span> ${userPriceCount}</div>
        <div><span style="color:var(--hint);">Listings:</span> ${userListings.length}</div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:12px;">
        <div style="font-weight:600;margin-bottom:4px;">🏆 Reward Points</div>
        <div style="font-size:14px;color:var(--accent);font-weight:700;">${userPoints} points</div>
        <div style="font-size:11px;color:var(--muted);">${pointsToReward} points until free premium (${POINTS_REWARD_DAYS} days)</div>
      </div>
      ${!isUserAdmin ? `
        <div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Mod controls:</div>
        <div class="btn-row" style="margin-bottom:8px;">
          <button class="btn btn-sm" onclick="adminGivePoints('${escapeHtml(email)}', 10)">+10 Points</button>
          <button class="btn btn-sm" onclick="adminTakePoints('${escapeHtml(email)}', 10)">-10 Points</button>
          <button class="btn btn-sm" onclick="adminGivePoints('${escapeHtml(email)}', 100)">+100 Points</button>
        </div>
      ` : ''}
      <div class="btn-row" style="margin-top:12px;">
        ${isUserAdmin ? '<span style="font-size:11px;color:var(--amber);">Site Owner</span>' : authUser?.is_moderator ? `<button class="btn btn-sm" onclick="adminRemoveMod('${escapeHtml(email)}')">Remove Mod</button>` : `<button class="btn btn-sm" onclick="adminGiveMod('${escapeHtml(email)}')">Give Mod</button>`}
        ${isEmailBanned(email) ? `<button class="btn btn-sm" onclick="adminUnbanUser()">Unban</button>` : (!isUserAdmin ? `<button class="btn btn-sm" onclick="adminBanUser()">Ban</button>` : '')}
      </div>
    </div>
  `;
}

function adminGiveMod(email) {
  if (!isAdminUser()) return;
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) return;
  user.is_moderator = true;
  saveAuthUsers(users);
  if (currentUser?.email === email) {
    currentUser = user;
    persistAuthSession();
  }
  updateAuthUI();
  adminLookupProfile();
  renderAdminUserList();
  alert(`${email} is now a moderator.`);
}

function adminRemoveMod(email) {
  if (!isAdminUser()) return;
  const users = loadAuthUsers();
  const user = users.find(u => String(u.email || '').toLowerCase() === String(email || '').toLowerCase());
  if (!user) return;
  user.is_moderator = false;
  saveAuthUsers(users);
  if (currentUser?.email === email) {
    currentUser = user;
    persistAuthSession();
  }
  updateAuthUI();
  adminLookupProfile();
  renderAdminUserList();
  alert(`${email} is no longer a moderator.`);
}

function renderAdminAllMembers() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-all-members-list');
  if (!container) return;
  
  const membersMap = new Map();
  
  state.trades.forEach(t => {
    if (t.actor_email) {
      const existing = membersMap.get(t.actor_email) || { email: t.actor_email, display: t.actor_display || 'Unknown', flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0 };
      existing.flips++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(t.date).getTime());
      membersMap.set(t.actor_email, existing);
    }
  });
  
  state.slayer_logs.forEach(l => {
    if (l.actor_email) {
      const existing = membersMap.get(l.actor_email) || { email: l.actor_email, display: l.actor_display || 'Unknown', flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0 };
      existing.slayer++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(l.actor_email, existing);
    }
  });
  
  state.fp_logs.forEach(l => {
    if (l.actor_email) {
      const existing = membersMap.get(l.actor_email) || { email: l.actor_email, display: l.actor_display || 'Unknown', flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0 };
      existing.fp++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(l.actor_email, existing);
    }
  });
  
  state.community_prices.forEach(p => {
    if (p.user_email) {
      const existing = membersMap.get(p.user_email) || { email: p.user_email, display: p.user_name || 'Unknown', flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0 };
      existing.prices++;
      existing.lastSeen = Math.max(existing.lastSeen, Number(p.created_at));
      membersMap.set(p.user_email, existing);
    }
  });
  
  state.marketplace_listings.forEach(l => {
    if (l.seller_email) {
      const key = String(l.seller_email || '').toLowerCase();
      const existing = membersMap.get(key) || { email: key, display: l.seller || l.seller_email, flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: 0 };
      existing.listings++;
      existing.lastSeen = Math.max(existing.lastSeen, new Date(l.date).getTime());
      membersMap.set(key, existing);
    }
  });
  
  if (state?.user_sessions) {
    Object.entries(state.user_sessions).forEach(([email, ts]) => {
      if (!membersMap.has(email)) {
        membersMap.set(email, { email, display: email.split('@')[0], flips: 0, slayer: 0, fp: 0, prices: 0, listings: 0, lastSeen: ts });
      }
    });
  }
  
  const members = Array.from(membersMap.values()).sort((a, b) => b.lastSeen - a.lastSeen);
  const now = Date.now();
  
  if (members.length === 0) {
    container.innerHTML = '<div class="empty">No members found.</div>';
    return;
  }
  
  container.innerHTML = `<table class="data-table" style="width:100%;">
    <thead>
      <tr>
        <th>Member</th>
        <th>Activity</th>
        <th>Last Seen</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${members.map(m => {
        const isOnline = now - m.lastSeen < ONLINE_TIMEOUT_MS;
        return `<tr>
          <td>
            <div style="font-weight:600;">${escapeHtml(m.display)}</div>
            <div style="font-size:11px;color:var(--muted);">${escapeHtml(m.email)}</div>
          </td>
          <td>
            <div style="font-size:11px;">
              ${m.flips ? `<span style="color:var(--accent);">💱 ${m.flips}</span>` : ''}
              ${m.slayer ? `<span style="color:var(--green);">⚔️ ${m.slayer}</span>` : ''}
              ${m.fp ? `<span style="color:var(--amber);">🎰 ${m.fp}</span>` : ''}
              ${m.prices ? `<span style="color:var(--muted);">💰 ${m.prices}</span>` : ''}
              ${m.listings ? `<span style="color:var(--purple);">🛒 ${m.listings}</span>` : ''}
            </div>
          </td>
          <td style="font-size:12px;color:var(--muted);">${isOnline ? 'Just now' : timeAgo(m.lastSeen)}</td>
          <td>
            ${isOnline ? '<span style="color:var(--green);font-size:11px;">● Online</span>' : '<span style="color:var(--muted);font-size:11px;">○ Offline</span>'}
          </td>
          <td>
            <button class="btn-sm" onclick="document.getElementById('admin-profile-search').value='${escapeHtml(m.email)}';adminLookupProfile()">View</button>
          </td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>`;
}

function renderAdminActivity() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-activity-list');
  const filter = document.getElementById('admin-activity-filter')?.value?.toLowerCase() || '';
  
  if (!container) return;
  
  const allActivity = [];
  
  state.trades.forEach(t => {
    if (!filter || String(t.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'flip',
        email: t.actor_email || 'Anonymous',
        display: t.actor_display || 'Unknown',
        date: t.date,
        details: `${t.item} - ${t.status === 'completed' ? 'Profit: ' + fmtGP(Number(t.profit)||0) : 'Pending'}`,
        profit: Number(t.profit) || 0
      });
    }
  });
  
  state.slayer_logs.forEach(l => {
    if (!filter || String(l.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'slayer',
        email: l.actor_email || 'Anonymous',
        display: l.actor_display || 'Unknown',
        date: l.date,
        details: `${l.task} - ${fmtGP(Number(l.gp)||0)} GP`,
        profit: Number(l.gp) || 0
      });
    }
  });
  
  state.fp_logs.forEach(l => {
    if (!filter || String(l.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'fp',
        email: l.actor_email || 'Anonymous',
        display: l.actor_display || 'Unknown',
        date: l.date,
        details: `FP ${l.result} - Net: ${fmtGP(Number(l.net)||0)}`,
        profit: Number(l.net) || 0
      });
    }
  });
  
  state.community_prices.forEach(p => {
    if (!filter || String(p.user_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'price',
        email: p.user_email || 'Anonymous',
        display: p.user_name || 'Unknown',
        date: new Date(Number(p.created_at)).toISOString().slice(0, 16).replace('T', ' '),
        details: `Price submitted: ${p.item_name} - ${fmtGP(Number(p.price)||0)}`,
        profit: 0
      });
    }
  });
  
  state.marketplace_listings.forEach(l => {
    if (!filter || String(l.seller_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'listing',
        email: l.seller_email || 'Anonymous',
        display: l.seller || 'Unknown',
        date: l.date,
        details: `Listing: ${l.username} - ${fmtGP(Number(l.price)||0)} GP (${l.status})`,
        profit: 0
      });
    }
  });
  
  allActivity.sort((a, b) => new Date(String(b.date || '').replace(' ', 'T')).getTime() - new Date(String(a.date || '').replace(' ', 'T')).getTime());
  
  const typeIcons = { flip: '💱', slayer: '⚔️', fp: '🎰', price: '💰', listing: '🛒' };
  const typeColors = { flip: 'var(--accent)', slayer: 'var(--green)', fp: 'var(--amber)', price: 'var(--muted)', listing: 'var(--purple)' };
  
  container.innerHTML = allActivity.length ? allActivity.slice(0, 100).map(a => `<div class="item-row">
    <span style="font-size:18px;margin-right:8px;">${typeIcons[a.type] || '📌'}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:600;color:${typeColors[a.type] || 'var(--text)'};">${escapeHtml(a.display)}</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(a.email)}</div>
    </div>
    <div style="flex:2;min-width:0;">
      <div style="font-size:12px;">${escapeHtml(a.details)}</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(a.date || '')}</div>
    </div>
    ${a.profit ? `<div style="font-weight:600;color:${a.profit >= 0 ? 'var(--green)' : 'var(--red)'};">${fmtGP(a.profit)}</div>` : ''}
  </div>`).join('') : '<div class="empty">No activity found.</div>';
}

function adminBanUser() {
  if (!isAdminUser()) return;
  const email = document.getElementById('admin-ban-email')?.value?.trim()?.toLowerCase() || '';
  const reason = document.getElementById('admin-ban-reason')?.value?.trim() || 'Admin ban';
  
  if (!email) {
    document.getElementById('admin-ban-result').innerHTML = '<span style="color:var(--red);">Enter an email to ban.</span>';
    return;
  }
  
  state.banned_users = state.banned_users || [];
  const existing = state.banned_users.find(b => String(b.email || '').toLowerCase() === email);
  if (existing) {
    document.getElementById('admin-ban-result').innerHTML = '<span style="color:var(--amber);">User is already banned.</span>';
    return;
  }
  
  state.banned_users.push({
    email,
    reason,
    by_email: currentUser?.email,
    by_display: currentUser?.display_name || currentUser?.email,
    at: new Date().toISOString().slice(0, 16).replace('T', ' ')
  });
  
  saveState();
  document.getElementById('admin-ban-result').innerHTML = '<span style="color:var(--green);">User banned successfully.</span>';
  renderAdminBannedList();
}

function adminUnbanUser() {
  if (!isAdminUser()) return;
  const email = document.getElementById('admin-ban-email')?.value?.trim()?.toLowerCase() || '';
  
  if (!email) {
    document.getElementById('admin-ban-result').innerHTML = '<span style="color:var(--red);">Enter an email to unban.</span>';
    return;
  }
  
  state.banned_users = (state.banned_users || []).filter(b => String(b.email || '').toLowerCase() !== email);
  saveState();
  document.getElementById('admin-ban-result').innerHTML = '<span style="color:var(--green);">User unbanned successfully.</span>';
  renderAdminBannedList();
}

function renderAdminBannedList() {
  const container = document.getElementById('admin-banned-list');
  if (!container) return;
  
  const bans = state.banned_users || [];
  if (!bans.length) {
    container.innerHTML = '<div class="empty">No banned users.</div>';
    return;
  }
  
  container.innerHTML = `<div style="max-height:300px;overflow-y:auto;">
    ${bans.map(b => `<div class="item-row" style="flex-wrap:wrap;gap:8px;">
      <div style="flex:1;min-width:200px;">
        <div style="font-weight:600;">${escapeHtml(b.email)}</div>
        <div style="font-size:11px;color:var(--muted);">${escapeHtml(b.reason)}</div>
        <div style="font-size:10px;color:var(--hint);">by ${escapeHtml(b.by_display || b.by_email || '')} · ${escapeHtml(b.at || '')}</div>
      </div>
      <button class="btn-sm" onclick="document.getElementById('admin-ban-email').value='${escapeHtml(b.email)}';adminUnbanUser()">Unban</button>
    </div>`).join('')}
  </div>`;
}

async function loadAdminTickets() {
  await syncCommunityStateFromServer();
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-ticket-list');
  if (!container) return;
  
  const tickets = (state.tickets || []).filter(t => t.status !== 'resolved');
  
  if (!tickets.length) {
    container.innerHTML = '<div class="empty">No open tickets.</div>';
    return;
  }
  
  container.innerHTML = tickets.map(ticket => `
    <div class="ticket-card" id="admin-ticket-${ticket.id}" style="border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px;background:var(--surface2);">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <div>
          <div style="font-weight:600;font-size:14px;">${escapeHtml(ticket.username)} — ${fmtGP(ticket.amount)} GP</div>
          <div style="font-size:11px;color:var(--muted);">By ${escapeHtml(ticket.created_by_display)} · ${timeAgo(ticket.created_at)}</div>
        </div>
        <div class="btn-row">
          <button class="btn primary btn-sm" onclick="openAdminTicketChat('${ticket.id}')">Open Chat</button>
          <button class="btn btn-sm" onclick="closeAdminTicket('${ticket.id}')">Close</button>
        </div>
      </div>
      <div id="admin-ticket-messages-${ticket.id}" style="max-height:200px;overflow-y:auto;margin-bottom:12px;display:none;">
        <div class="ticket-messages-inner" id="admin-ticket-messages-inner-${ticket.id}"></div>
      </div>
      <div style="display:flex;gap:8px;">
        <input type="text" id="admin-ticket-input-${ticket.id}" placeholder="Type a message..." style="flex:1;" onkeydown="if(event.key==='Enter')sendAdminTicketMessage('${ticket.id}')">
        <button class="btn primary btn-sm" onclick="sendAdminTicketMessage('${ticket.id}')">Send</button>
      </div>
    </div>
  `).join('');
}

async function openAdminTicketChat(ticketId) {
  await syncCommunityStateFromServer();
  const messagesContainer = document.getElementById(`admin-ticket-messages-${ticketId}`);
  const messagesInner = document.getElementById(`admin-ticket-messages-inner-${ticketId}`);
  if (!messagesContainer || !messagesInner) return;
  
  messagesContainer.style.display = 'block';
  
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket) return;
  
  messagesInner.innerHTML = (ticket.messages || []).map(msg => `
    <div style="margin-bottom:8px;padding:8px 12px;border-radius:8px;${msg.isStaff ? 'background:rgba(61,217,197,0.15);border-left:3px solid var(--accent);' : 'background:rgba(255,255,255,0.05);'}">
      <div style="font-size:11px;font-weight:600;margin-bottom:4px;">
        <span style="color:${msg.isStaff ? 'var(--accent)' : 'var(--text)'};">${escapeHtml(msg.sender_display)}</span>
        ${msg.isStaff ? '<span style="color:var(--amber);margin-left:4px;">[STAFF]</span>' : ''}
        <span style="color:var(--hint);margin-left:8px;">${timeAgo(msg.timestamp)}</span>
      </div>
      <div style="font-size:13px;">${escapeHtml(msg.text)}</div>
    </div>
  `).join('');
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function sendAdminTicketMessage(ticketId) {
  const input = document.getElementById(`admin-ticket-input-${ticketId}`);
  if (!input) return;
  
  const text = input.value.trim();
  if (!text) return;
  
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket || ticket.status === 'resolved') return;
  
  const message = {
    id: generateId(),
    sender: currentUser.email,
    sender_display: currentUser.display_name || currentUser.email,
    text,
    timestamp: Date.now(),
    isStaff: true
  };

  input.value = '';
  try {
    await postCommunityAction('add_ticket_message', { ticket_id: ticketId, message });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not send the staff ticket reply.');
      return;
    }
    ticket.messages.push(message);
    saveState();
  }
  await openAdminTicketChat(ticketId);
}

async function closeAdminTicket(ticketId) {
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket) return;
  
  if (!confirm('Close this ticket?')) return;
  
  try {
    await postCommunityAction('update_ticket_status', { ticket_id: ticketId, status: 'resolved' });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not close the ticket.');
      return;
    }
    ticket.status = 'resolved';
    saveState();
  }
  loadAdminTickets();
}

function renderAdminPendingListings() {
  if (!isAdminUser()) return;
  const container = document.getElementById('admin-pending-listings');
  if (!container) return;
  
  const pending = (state.marketplace_listings || []).filter(l => l.status === 'pending');
  
  if (!pending.length) {
    container.innerHTML = '<div class="empty">No pending listings.</div>';
    return;
  }
  
  container.innerHTML = pending.map(l => `<div class="item-row" style="flex-wrap:wrap;gap:8px;">
    <div style="flex:1;min-width:200px;">
      <div style="font-weight:600;">${escapeHtml(l.username)}</div>
      <div style="color:var(--green);font-weight:600;">${fmtGP(Number(l.price)||0)} GP</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(l.seller || '')} · ${escapeHtml(l.contact || '')}</div>
      ${l.description ? `<div style="font-size:11px;margin-top:4px;">${escapeHtml(l.description)}</div>` : ''}
    </div>
    <div class="btn-row">
      <button class="btn primary" onclick="adminApproveListing('${l.id}')">Approve</button>
      <button class="btn" onclick="modCancelListing('${l.id}')">Reject</button>
    </div>
  </div>`).join('');
}

async function adminApproveListing(id) {
  const entry = (state.marketplace_listings || []).find(l => l.id === id);
  if (entry) {
    try {
      await postCommunityAction('update_listing_status', { listing_id: id, status: 'active' });
    } catch (e) {
      if (!canUseLocalCommunityFallback()) {
        alert(e.message || 'Could not approve the listing.');
        return;
      }
      entry.status = 'active';
      saveState();
    }
    renderAdminPendingListings();
    alert('Listing approved and now live.');
  }
}

function renderModActivity() {
  if (!isStaffUser()) return;
  const container = document.getElementById('mod-activity-list');
  const filter = document.getElementById('mod-activity-filter')?.value?.toLowerCase() || '';
  
  if (!container) return;
  
  const allActivity = [];
  
  state.trades.forEach(t => {
    if (!filter || String(t.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'flip',
        email: t.actor_email || 'Anonymous',
        display: t.actor_display || 'Unknown',
        date: t.date,
        details: `${t.item} - ${t.status === 'completed' ? 'Profit: ' + fmtGP(Number(t.profit)||0) : 'Pending'}`,
        profit: Number(t.profit) || 0
      });
    }
  });
  
  state.slayer_logs.forEach(l => {
    if (!filter || String(l.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'slayer',
        email: l.actor_email || 'Anonymous',
        display: l.actor_display || 'Unknown',
        date: l.date,
        details: `${l.task} - ${fmtGP(Number(l.gp)||0)} GP`,
        profit: Number(l.gp) || 0
      });
    }
  });
  
  state.fp_logs.forEach(l => {
    if (!filter || String(l.actor_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'fp',
        email: l.actor_email || 'Anonymous',
        display: l.actor_display || 'Unknown',
        date: l.date,
        details: `FP ${l.result} - Net: ${fmtGP(Number(l.net)||0)}`,
        profit: Number(l.net) || 0
      });
    }
  });
  
  state.community_prices.forEach(p => {
    if (!filter || String(p.user_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'price',
        email: p.user_email || 'Anonymous',
        display: p.user_name || 'Unknown',
        date: new Date(Number(p.created_at)).toISOString().slice(0, 16).replace('T', ' '),
        details: `Price submitted: ${p.item_name} - ${fmtGP(Number(p.price)||0)}`,
        profit: 0
      });
    }
  });
  
  state.marketplace_listings.forEach(l => {
    if (!filter || String(l.seller_email || '').toLowerCase().includes(filter)) {
      allActivity.push({
        type: 'listing',
        email: l.seller_email || 'Anonymous',
        display: l.seller || 'Unknown',
        date: l.date,
        details: `Listing: ${l.username} - ${fmtGP(Number(l.price)||0)} GP (${l.status})`,
        profit: 0
      });
    }
  });
  
  allActivity.sort((a, b) => new Date(String(b.date || '').replace(' ', 'T')).getTime() - new Date(String(a.date || '').replace(' ', 'T')).getTime());
  
  const typeIcons = { flip: '💱', slayer: '⚔️', fp: '🎰', price: '💰', listing: '🛒' };
  const typeColors = { flip: 'var(--accent)', slayer: 'var(--green)', fp: 'var(--amber)', price: 'var(--muted)', listing: 'var(--purple)' };
  
  container.innerHTML = allActivity.length ? allActivity.slice(0, 100).map(a => `<div class="item-row">
    <span style="font-size:18px;margin-right:8px;">${typeIcons[a.type] || '📌'}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:600;color:${typeColors[a.type] || 'var(--text)'};">${escapeHtml(a.display)}</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(a.email)}</div>
    </div>
    <div style="flex:2;min-width:0;">
      <div style="font-size:12px;">${escapeHtml(a.details)}</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(a.date || '')}</div>
    </div>
    ${a.profit ? `<div style="font-weight:600;color:${a.profit >= 0 ? 'var(--green)' : 'var(--red)'};">${fmtGP(a.profit)}</div>` : ''}
  </div>`).join('') : '<div class="empty">No activity found.</div>';
}

function modDeskBanUser() {
  if (!isStaffUser()) return;
  const user = getStaffTargetUser('mod-ban-user-select');
  const email = String(user?.email || '').trim().toLowerCase();
  const reason = document.getElementById('mod-ban-reason')?.value?.trim() || 'Moderation';
  
  if (!email) {
    document.getElementById('mod-ban-result').innerHTML = '<span style="color:var(--red);">Select a user to ban.</span>';
    return;
  }
  
  const r = staffBanUser(email, reason);
  document.getElementById('mod-ban-result').innerHTML = r.ok 
    ? '<span style="color:var(--green);">User banned successfully.</span>' 
    : '<span style="color:var(--red);">Error: ' + escapeHtml(r.error) + '</span>';
  
  if (r.ok) {
    document.getElementById('mod-ban-user-select').value = '';
    document.getElementById('mod-ban-reason').value = '';
    renderModBannedList();
  }
}

function modDeskUnbanUser() {
  if (!isStaffUser()) return;
  const user = getStaffTargetUser('mod-ban-user-select');
  const email = String(user?.email || '').trim().toLowerCase();
  
  if (!email) {
    document.getElementById('mod-ban-result').innerHTML = '<span style="color:var(--red);">Select a user to unban.</span>';
    return;
  }
  
  const r = staffUnbanUser(email);
  document.getElementById('mod-ban-result').innerHTML = r.ok 
    ? '<span style="color:var(--green);">User unbanned successfully.</span>' 
    : '<span style="color:var(--red);">Error: ' + escapeHtml(r.error) + '</span>';
  
  if (r.ok) {
    document.getElementById('mod-ban-user-select').value = '';
    renderModBannedList();
  }
}

function modDeskGivePoints() {
  if (!isStaffUser()) return;
  const selectedUser = getStaffTargetUser('mod-points-user-select');
  const email = String(selectedUser?.email || '').trim().toLowerCase();
  const amount = parseInt(document.getElementById('mod-points-give')?.value) || 0;
  
  if (!email) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">Select a user.</span>';
    return;
  }
  if (amount <= 0) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">Enter a valid amount.</span>';
    return;
  }
  
  const users = loadAuthUsers();
  const targetUser = users.find(u => String(u.email || '').toLowerCase() === email);
  if (!targetUser) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">User not found.</span>';
    return;
  }
  
  targetUser.points = Math.max(0, (targetUser.points || 0) + amount);
  saveAuthUsers(users);
  
  document.getElementById('mod-points-result').innerHTML = `<span style="color:var(--green);">Gave ${amount} points to ${escapeHtml(targetUser.display_name || 'this user')}. New total: ${targetUser.points} points.</span>`;
}

function modDeskTakePoints() {
  if (!isStaffUser()) return;
  const selectedUser = getStaffTargetUser('mod-points-user-select');
  const email = String(selectedUser?.email || '').trim().toLowerCase();
  const amount = parseInt(document.getElementById('mod-points-take')?.value) || 0;
  
  if (!email) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">Select a user.</span>';
    return;
  }
  if (amount <= 0) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">Enter a valid amount.</span>';
    return;
  }
  
  const users = loadAuthUsers();
  const targetUser = users.find(u => String(u.email || '').toLowerCase() === email);
  if (!targetUser) {
    document.getElementById('mod-points-result').innerHTML = '<span style="color:var(--red);">User not found.</span>';
    return;
  }
  
  targetUser.points = Math.max(0, (targetUser.points || 0) - amount);
  saveAuthUsers(users);
  
  document.getElementById('mod-points-result').innerHTML = `<span style="color:var(--green);">Took ${amount} points from ${escapeHtml(targetUser.display_name || 'this user')}. New total: ${targetUser.points} points.</span>`;
}

function renderModBannedList() {
  const container = document.getElementById('mod-banned-list');
  if (!container) return;
  
  const bans = state.banned_users || [];
  if (!bans.length) {
    container.innerHTML = '<div class="empty">No banned users.</div>';
    return;
  }
  
  container.innerHTML = `<div style="max-height:300px;overflow-y:auto;">
    ${bans.map(b => `<div class="item-row" style="flex-wrap:wrap;gap:8px;">
      <div style="flex:1;min-width:200px;">
        <div style="font-weight:600;">${escapeHtml(b.email)}</div>
        <div style="font-size:11px;color:var(--muted);">${escapeHtml(b.reason)}</div>
        <div style="font-size:10px;color:var(--hint);">by ${escapeHtml(b.by_display || b.by_email || '')} · ${escapeHtml(b.at || '')}</div>
      </div>
      <button class="btn-sm" onclick="confirmUnban('${escapeHtml(b.email)}')">Unban</button>
    </div>`).join('')}
  </div>`;
}

function confirmUnban(email) {
  if (confirm('Unban ' + email + '?')) {
    document.getElementById('mod-ban-email').value = email;
    modDeskUnbanUser();
  }
}

function renderModPendingListings() {
  const container = document.getElementById('mod-pending-listings');
  if (!container) return;
  
  const pending = (state.marketplace_listings || []).filter(l => l.status === 'pending');
  
  if (!pending.length) {
    container.innerHTML = '<div class="empty">No pending listings.</div>';
    return;
  }
  
  container.innerHTML = pending.map(l => `<div class="item-row" style="flex-wrap:wrap;gap:8px;">
    <div style="flex:1;min-width:200px;">
      <div style="font-weight:600;">${escapeHtml(l.username)}</div>
      <div style="color:var(--green);font-weight:600;">${fmtGP(Number(l.price)||0)} GP</div>
      <div style="font-size:11px;color:var(--muted);">${escapeHtml(l.seller || '')} · ${escapeHtml(l.contact || '')}</div>
      ${l.description ? `<div style="font-size:11px;margin-top:4px;">${escapeHtml(l.description)}</div>` : ''}
    </div>
    <div class="btn-row">
      <button class="btn primary" onclick="modApproveListing('${l.id}')">Approve</button>
      <button class="btn" onclick="modRejectListing('${l.id}')">Reject</button>
    </div>
  </div>`).join('');
}

async function modApproveListing(id) {
  const entry = (state.marketplace_listings || []).find(l => l.id === id);
  if (entry) {
    try {
      await postCommunityAction('update_listing_status', { listing_id: id, status: 'active' });
    } catch (e) {
      if (!canUseLocalCommunityFallback()) {
        alert(e.message || 'Could not approve the listing.');
        return;
      }
      entry.status = 'active';
      saveState();
    }
    renderModPendingListings();
    alert('Listing approved and now live.');
  }
}

async function modRejectListing(id) {
  const entry = (state.marketplace_listings || []).find(l => l.id === id);
  if (entry) {
    try {
      await postCommunityAction('update_listing_status', { listing_id: id, status: 'rejected' });
    } catch (e) {
      if (!canUseLocalCommunityFallback()) {
        alert(e.message || 'Could not reject the listing.');
        return;
      }
      entry.status = 'rejected';
      saveState();
    }
    renderModPendingListings();
    alert('Listing rejected.');
  }
}

async function createDepositTicket(username, amount, contact, description) {
  const currentUser = getCurrentUser();
  if (!currentUser?.email) {
    alert('Sign in to create a deposit ticket.');
    return;
  }
  
  const ticket = {
    id: generateId(),
    type: 'deposit',
    username,
    amount: parseFloat(amount) || 0,
    contact: contact || currentUser.email,
    description: description || '',
    status: 'open',
    created_by: currentUser.email,
    created_by_display: currentUser.display_name || currentUser.email,
    created_at: Date.now(),
    messages: [{
      id: generateId(),
      sender: currentUser.email,
      sender_display: currentUser.display_name || currentUser.email,
      text: `I want to list "${username}" for ${fmtGP(parseFloat(amount)||0)} GP. My contact: ${contact || currentUser.email}${description ? '. Notes: ' + description : ''}`,
      timestamp: Date.now(),
      isStaff: false
    }]
  };
  
  try {
    await postCommunityAction('create_ticket', { ticket });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not create the deposit ticket.');
      return;
    }
    state.tickets = state.tickets || [];
    state.tickets.unshift(ticket);
    saveState();
  }
  alert('Ticket created. A moderator will respond shortly.');
}

async function loadTickets() {
  await syncCommunityStateFromServer();
  const container = document.getElementById('ticket-list');
  if (!container) return;
  
  const isStaff = isStaffUser();
  const currentUser = getCurrentUser();
  
  let tickets = state.tickets || [];
  
  if (isStaff) {
    tickets = tickets.filter(t => t.status !== 'resolved');
  } else {
    tickets = tickets.filter(t => t.created_by === currentUser?.email);
  }
  
  if (!tickets.length) {
    container.innerHTML = '<div class="empty">No tickets found.</div>';
    return;
  }
  
  container.innerHTML = tickets.map(ticket => `
    <div class="ticket-card" id="ticket-${ticket.id}" style="border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:12px;background:var(--surface2);">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <div>
          <div style="font-weight:600;font-size:14px;">${escapeHtml(ticket.username)} — ${fmtGP(ticket.amount)} GP</div>
          <div style="font-size:11px;color:var(--muted);">By ${escapeHtml(ticket.created_by_display)} · ${timeAgo(ticket.created_at)}</div>
          <div style="font-size:11px;color:var(--hint);">Status: <span style="color:${ticket.status === 'open' ? 'var(--amber)' : ticket.status === 'resolved' ? 'var(--green)' : 'var(--muted)'};">${ticket.status.toUpperCase()}</span></div>
        </div>
        <div class="btn-row">
          ${isStaff ? `<button class="btn primary btn-sm" onclick="openTicketChat('${ticket.id}')">Open Chat</button>` : ''}
          ${ticket.status === 'open' && (ticket.created_by === currentUser?.email || isStaff) ? `<button class="btn btn-sm" onclick="closeTicket('${ticket.id}')">Close</button>` : ''}
        </div>
      </div>
      ${ticket.status !== 'resolved' ? `
        <div id="ticket-messages-${ticket.id}" style="max-height:200px;overflow-y:auto;margin-bottom:12px;display:none;">
          <div class="ticket-messages-inner" id="ticket-messages-inner-${ticket.id}"></div>
        </div>
        ${ticket.status === 'open' ? `
          <div style="display:flex;gap:8px;">
            <input type="text" id="ticket-input-${ticket.id}" placeholder="Type a message..." style="flex:1;" onkeydown="if(event.key==='Enter')sendTicketMessage('${ticket.id}')">
            <button class="btn primary btn-sm" onclick="sendTicketMessage('${ticket.id}')">Send</button>
          </div>
        ` : ''}
      ` : ''}
    </div>
  `).join('');
}

async function openTicketChat(ticketId) {
  await syncCommunityStateFromServer();
  const messagesContainer = document.getElementById(`ticket-messages-${ticketId}`);
  const messagesInner = document.getElementById(`ticket-messages-inner-${ticketId}`);
  if (!messagesContainer || !messagesInner) return;
  
  messagesContainer.style.display = 'block';
  
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket) return;
  
  messagesInner.innerHTML = (ticket.messages || []).map(msg => `
    <div style="margin-bottom:8px;padding:8px 12px;border-radius:8px;${msg.isStaff ? 'background:rgba(61,217,197,0.15);border-left:3px solid var(--accent);' : 'background:rgba(255,255,255,0.05);'}">
      <div style="font-size:11px;font-weight:600;margin-bottom:4px;">
        <span style="color:${msg.isStaff ? 'var(--accent)' : 'var(--text)'};">${escapeHtml(msg.sender_display)}</span>
        ${msg.isStaff ? '<span style="color:var(--amber);margin-left:4px;">[STAFF]</span>' : ''}
        <span style="color:var(--hint);margin-left:8px;">${timeAgo(msg.timestamp)}</span>
      </div>
      <div style="font-size:13px;">${escapeHtml(msg.text)}</div>
    </div>
  `).join('');
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function sendTicketMessage(ticketId) {
  const input = document.getElementById(`ticket-input-${ticketId}`);
  if (!input) return;
  
  const text = input.value.trim();
  if (!text) return;
  
  const currentUser = getCurrentUser();
  if (!currentUser?.email) {
    alert('Sign in to send messages.');
    return;
  }
  
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket || ticket.status === 'resolved') {
    alert('This ticket is closed.');
    return;
  }
  
  const message = {
    id: generateId(),
    sender: currentUser.email,
    sender_display: currentUser.display_name || currentUser.email,
    text,
    timestamp: Date.now(),
    isStaff: isStaffUser()
  };

  input.value = '';
  try {
    await postCommunityAction('add_ticket_message', { ticket_id: ticketId, message });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not send the ticket reply.');
      return;
    }
    ticket.messages.push(message);
    saveState();
  }
  await openTicketChat(ticketId);
}

async function closeTicket(ticketId) {
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket) return;
  
  if (!confirm('Close this ticket? This will mark it as resolved.')) return;
  
  try {
    await postCommunityAction('update_ticket_status', { ticket_id: ticketId, status: 'resolved' });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not close the ticket.');
      return;
    }
    ticket.status = 'resolved';
    saveState();
  }
  loadTickets();
}

async function resolveTicket(ticketId) {
  const ticket = (state.tickets || []).find(t => t.id === ticketId);
  if (!ticket) return;
  
  const currentUser = getCurrentUser();

  const message = {
    id: generateId(),
    sender: currentUser.email,
    sender_display: currentUser.display_name || currentUser.email,
    text: '✅ Ticket resolved by staff. Your marketplace listing has been verified and approved.',
    timestamp: Date.now(),
    isStaff: true
  };

  try {
    await postCommunityAction('update_ticket_status', { ticket_id: ticketId, status: 'resolved', message });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not resolve the ticket.');
      return;
    }
    ticket.messages.push(message);
    ticket.status = 'resolved';
    saveState();
  }
  loadTickets();
  alert('Ticket resolved and user notified.');
}

function switchTab(tab) {
  if (tab === 'moderation' && !isStaffUser()) return;
  if (tab === 'admin' && !isAdminUser()) return;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[onclick*="switchTab('${tab}')"]`);
  if (navItem) navItem.classList.add('active');
  document.getElementById('panel-' + tab).classList.add('active');
  recalcItemStats();
  renderPanel(tab);
  
  if (tab === 'admin') {
    renderAdminUserList();
    renderAdminFlipsStats();
    renderAdminPrices();
    renderAdminMarketplace();
    renderAdminPaymentHints();
    void refreshAdminRegistry();
  }
  if (tab === 'moderation') {
    renderModActivity();
    renderModBannedList();
    renderModPendingListings();
  }
}

async function checkAdminStripeStatus() {
  if (!isAdminUser()) return;
  const out = document.getElementById('admin-lemon-status');
  if (!out) return;
  const key = getAdminRegistryApiKey();
  if (!key) {
    out.style.display = 'block';
    out.style.color = 'var(--red)';
    out.textContent = 'Save your Admin API key in the section above first, then try again.';
    return;
  }
  const apiBase = getBillingFunctionsBase();
  if (!apiBase) {
    out.style.display = 'block';
    out.style.color = 'var(--red)';
    out.textContent = 'Open the live HTTPS site (not a local file preview) to verify.';
    return;
  }
  out.style.display = 'block';
  out.style.color = 'var(--muted)';
  out.textContent = 'Checking…';
  try {
    const res = await fetch(`${apiBase}/admin-stripe-status`, {
      method: 'GET',
      headers: { 'X-Impact-Admin-Key': key }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      out.style.color = 'var(--red)';
      out.textContent = data.error || `Request failed (${res.status}).`;
      return;
    }
    const lines = [
      data.ready_for_checkout ? 'Checkout: ready.' : 'Checkout: not ready — fix missing items below.',
      data.php_curl_available ? 'PHP curl: enabled.' : 'PHP curl: not available — enable the curl extension in cPanel PHP settings.',
      data.ready_for_webhook ? 'Webhook signing secret: set on server.' : 'Webhook signing secret: missing — add STRIPE_WEBHOOK_SECRET.',
      data.redirect_base_resolved
        ? 'Checkout return URL can be derived from the current request (or set IMPACT_PUBLIC_SITE_URL explicitly).'
        : 'Set IMPACT_PUBLIC_SITE_URL in stripe-secrets.php to your canonical HTTPS URL.'
    ];
    if (Array.isArray(data.missing_for_checkout) && data.missing_for_checkout.length) {
      lines.push('Unset or empty: ' + data.missing_for_checkout.join(', ') + '.');
    }
    if (data.webhook_url) {
      lines.push('Server webhook URL: ' + data.webhook_url);
    }
    out.style.color = data.ready_for_checkout ? 'var(--green)' : 'var(--amber)';
    out.textContent = lines.join(' ');
  } catch (e) {
    out.style.color = 'var(--red)';
    out.textContent = e.message || 'Network error.';
  }
}

function modDeskUnbanPrompt(email) {
  const r = staffUnbanUser(email);
  alert(r.ok ? 'Unbanned.' : r.error);
  renderModerationPanel();
  if (document.getElementById('mod-profile-result')?.innerHTML) modDeskLookupProfile();
}

function modDeskBanSelected() {
  if (!isStaffUser()) return;
  const email = document.getElementById('mod-lookup-target-email')?.value?.trim().toLowerCase() || '';
  const reason = document.getElementById('mod-ban-reason-input')?.value?.trim() || 'Moderation';
  if (!email) {
    alert('Search for a profile first so the target email is set.');
    return;
  }
  const r = staffBanUser(email, reason);
  alert(r.ok ? 'Banned. They cannot sign in or submit community prices or marketplace listings on this site data.' : r.error);
  if (r.ok) modDeskLookupProfile();
  renderModerationPanel();
}

function modDeskGiveMod(email) {
  const r = adminSetUserModerator(email, true);
  alert(r.ok ? 'Moderator access granted for this browser\'s auth data. They must use this same site/device storage or you export/merge auth if you add sync later.' : r.error);
  if (r.ok) modDeskLookupProfile();
}

function modDeskRevokeMod(email) {
  const r = adminSetUserModerator(email, false);
  alert(r.ok ? 'Moderator access removed.' : r.error);
  if (r.ok) modDeskLookupProfile();
}

function modDeskTrackerSectionForQuery(qRaw) {
  const q = String(qRaw || '').trim().toLowerCase();
  if (!q) return '';
  const prices = (state.community_prices || []).filter(p =>
    String(p.user_email || '').toLowerCase().includes(q) ||
    String(p.user_name || '').toLowerCase().includes(q)
  );
  const mp = (state.marketplace_listings || []).filter(e =>
    String(e.seller || '').toLowerCase().includes(q) ||
    String(e.contact || '').toLowerCase().includes(q)
  );
  const trades = (state.trades || []).filter(t => String(t.actor_email || '').toLowerCase().includes(q));
  const slayer = (state.slayer_logs || []).filter(l => String(l.actor_email || '').toLowerCase().includes(q));
  const fp = (state.fp_logs || []).filter(l => String(l.actor_email || '').toLowerCase().includes(q));
  const transfers = (state.transfers || []).filter(l => String(l.actor_email || '').toLowerCase().includes(q));

  const block = (title, rows, formatter) => {
    if (!rows.length) return `<div class="card" style="margin-bottom:12px;"><div class="card-title">${title}</div><div class="profit-preview" style="margin:0;">None.</div></div>`;
    const slice = rows.slice(0, 50);
    return `<div class="card" style="margin-bottom:12px;"><div class="card-title">${title} (${rows.length})</div>${slice.map(formatter).join('')}</div>`;
  };

  let html = '<div class="card-title" style="margin:18px 0 8px;">Tracker rows matching search</div>';
  html += block('Community price submissions', prices, p => `<div class="item-row"><div class="item-name">${escapeHtml(p.item_name)}</div><div class="item-meta">${fmtGP(p.price)} · ${escapeHtml(p.user_email)}</div></div>`);
  html += block('Marketplace', mp, e => `<div class="item-row"><div class="item-name">${escapeHtml(e.username)}</div><div class="item-meta">${escapeHtml(e.status)} · ${fmtGP(e.price)} · seller ${escapeHtml(e.seller || '')}</div></div>`);
  html += block('Flips (signed-in)', trades, t => `<div class="item-row"><div class="item-name">${escapeHtml(t.item)} ${escapeHtml(t.status || '')}</div><div class="item-meta">${escapeHtml(t.date || '')}</div></div>`);
  html += block('Slayer (signed-in)', slayer, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.task)}</div><div class="item-meta">${fmtGP(l.gp)} · ${escapeHtml(l.date || '')}</div></div>`);
  html += block('FP sessions (signed-in)', fp, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.result || '')}</div><div class="item-meta">Net ${fmtGP(l.net || 0)} · ${escapeHtml(l.date || '')}</div></div>`);
  html += block('Transfers (signed-in)', transfers, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.from)}→${escapeHtml(l.to)}</div><div class="item-meta">${fmtGP(l.amount)} · ${escapeHtml(l.date || '')}</div></div>`);
  return html;
}

function modDeskLookupProfile() {
  if (!isStaffUser()) return;
  const raw = document.getElementById('mod-profile-search')?.value.trim() || '';
  const out = document.getElementById('mod-profile-result');
  if (!out) return;
  if (!raw) {
    out.innerHTML = '<div class="profit-preview" style="margin:0;">Enter an email or display name.</div>';
    return;
  }
  const q = raw.toLowerCase();
  const users = loadAuthUsers();
  let matches = users.filter(x =>
    String(x.email || '').toLowerCase() === q ||
    String(x.display_name || '').toLowerCase() === q
  );
  if (!matches.length) {
    matches = users.filter(x =>
      String(x.email || '').toLowerCase().includes(q) ||
      String(x.display_name || '').toLowerCase().includes(q)
    );
  }

  if (!matches.length) {
    out.innerHTML = `<div class="profit-preview" style="margin:0;">No <strong>auth record</strong> in this browser for that search. Tracker rows below still match email or name substrings.</div>${modDeskTrackerSectionForQuery(raw)}`;
    return;
  }

  const u = matches[0];
  const em = String(u.email || '').toLowerCase();
  const ban = findBannedRecord(em);
  const prices = (state.community_prices || []).filter(p => String(p.user_email || '').toLowerCase() === em);
  const mp = (state.marketplace_listings || []).filter(e => {
    const s = String(e.seller || '').toLowerCase();
    return s === em || s === String(u.display_name || '').toLowerCase();
  });
  const trades = (state.trades || []).filter(t => String(t.actor_email || '').toLowerCase() === em);
  const slayer = (state.slayer_logs || []).filter(l => String(l.actor_email || '').toLowerCase() === em);
  const fp = (state.fp_logs || []).filter(l => String(l.actor_email || '').toLowerCase() === em);
  const transfers = (state.transfers || []).filter(l => String(l.actor_email || '').toLowerCase() === em);

  const multiNote = matches.length > 1
    ? `<div class="profit-preview" style="margin:0 0 12px;">${matches.length} auth matches — showing <strong>${escapeHtml(em)}</strong>. Narrow the search for others.</div>`
    : '';
  const flagStr = [u.is_admin && 'Admin', u.is_moderator && 'Moderator'].filter(Boolean).join(' · ') || '—';

  const ownerEmail = String(OWNER_ADMIN_EMAIL || '').trim().toLowerCase();
  const modAdminBtns = (() => {
    if (!isAdminUser()) return '';
    if (u.is_admin) return '';
    if (ownerEmail && em === ownerEmail) return '';
    if (em === String(currentUser.email || '').toLowerCase()) return '';
    if (u.is_moderator) {
      return `<button type="button" class="btn" style="margin-left:8px;" onclick='modDeskRevokeMod(${JSON.stringify(em)})'>Remove mod</button>`;
    }
    if (!ban) {
      return `<button type="button" class="btn" style="margin-left:8px;" onclick='modDeskGiveMod(${JSON.stringify(em)})'>Give mod</button>`;
    }
    return '';
  })();

  const banControls = ban
    ? `<div class="btn-row" style="flex-wrap:wrap;margin-top:12px;"><button type="button" class="btn" onclick='modDeskUnbanPrompt(${JSON.stringify(em)})'>Unban</button>${modAdminBtns}</div>`
    : `<div class="form-group" style="margin-top:12px;"><label class="form-label">Ban reason</label><textarea id="mod-ban-reason-input" style="min-height:56px;resize:vertical;" placeholder="e.g. Repeated fake prices on the Community Price Desk"></textarea></div><input type="hidden" id="mod-lookup-target-email" value="${escapeHtml(em)}"><div class="btn-row" style="flex-wrap:wrap;margin-top:10px;"><button type="button" class="btn primary" onclick="modDeskBanSelected()">Ban this email</button>${modAdminBtns}</div>`;

  const block = (title, rows, formatter) => {
    if (!rows.length) return `<div class="card" style="margin-bottom:12px;"><div class="card-title">${title}</div><div class="profit-preview" style="margin:0;">None.</div></div>`;
    const slice = rows.slice(0, 50);
    return `<div class="card" style="margin-bottom:12px;"><div class="card-title">${title} (${rows.length})</div>${slice.map(formatter).join('')}</div>`;
  };

  out.innerHTML = `
    ${multiNote}
    <div class="card" style="margin-bottom:12px;">
      <div class="card-title">Auth record</div>
      <div class="item-row"><div class="item-name">Email</div><div class="item-meta">${escapeHtml(u.email)}</div></div>
      <div class="item-row"><div class="item-name">Display name</div><div class="item-meta">${escapeHtml(u.display_name)}</div></div>
      <div class="item-row"><div class="item-name">Email verified</div><div class="item-meta">${u.email_verified ? 'Yes' : 'No'}</div></div>
      <div class="item-row"><div class="item-name">Flags</div><div class="item-meta">${flagStr}</div></div>
      <div class="item-row"><div class="item-name">Ban status</div><div class="item-meta">${ban ? escapeHtml(ban.reason) + ' · ' + escapeHtml(ban.at) : 'Not banned'}</div></div>
      ${banControls}
    </div>
    ${block('Community price submissions', prices, p => `<div class="item-row"><div class="item-name">${escapeHtml(p.item_name)}</div><div class="item-meta">${fmtGP(p.price)} · ${escapeHtml(String(p.created_at || ''))}</div></div>`)}
    ${block('Marketplace', mp, e => `<div class="item-row"><div class="item-name">${escapeHtml(e.username)}</div><div class="item-meta">${escapeHtml(e.status)} · ${fmtGP(e.price)} · ${escapeHtml(e.date || '')}</div></div>`)}
    ${block('Flips while signed in', trades, t => `<div class="item-row"><div class="item-name">${escapeHtml(t.item)} · ${escapeHtml(t.status || '')}</div><div class="item-meta">${escapeHtml(t.date || '')}</div></div>`)}
    ${block('Slayer while signed in', slayer, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.task)}</div><div class="item-meta">${fmtGP(l.gp)} · ${escapeHtml(l.date || '')}</div></div>`)}
    ${block('FP while signed in', fp, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.result || '')}</div><div class="item-meta">${fmtGP(l.net || 0)} · ${escapeHtml(l.date || '')}</div></div>`)}
    ${block('Transfers while signed in', transfers, l => `<div class="item-row"><div class="item-name">${escapeHtml(l.from)}→${escapeHtml(l.to)}</div><div class="item-meta">${fmtGP(l.amount)} · ${escapeHtml(l.date || '')}</div></div>`)}
  `;
}

function renderModerationPanel() {
  if (!state || !isStaffUser()) return;
  populateStaffUserSelects();
  const listEl = document.getElementById('mod-banned-list');
  if (!listEl) return;
  const bans = state.banned_users || [];
  listEl.innerHTML = bans.length
    ? bans.map(b => `<div class="item-row" style="flex-wrap:wrap;gap:8px;"><div class="item-name" style="min-width:200px;">${escapeHtml(b.email)}</div><div class="item-meta" style="flex:1;">${escapeHtml(b.reason)}<br><span style="color:var(--hint);">by ${escapeHtml(b.by_display || b.by_email || '')} · ${escapeHtml(b.at || '')}</span></div><button type="button" class="btn-sm" onclick='modDeskUnbanPrompt(${JSON.stringify(b.email)})'>Unban</button></div>`).join('')
    : '<div class="empty" style="padding:12px;">No bans yet.</div>';
}

function saveCurrentUserRecord(nextUser) {
  const users = loadAuthUsers();
  const idx = users.findIndex(user => String(user.email || '').toLowerCase() === String(nextUser.email || '').toLowerCase());
  if (idx === -1) {
    users.unshift(nextUser);
  } else {
    users[idx] = nextUser;
  }
  saveAuthUsers(users);
  currentUser = nextUser;
  persistAuthSession();
}

function setAuthStatus(message = '', tone = 'muted') {
  const el = document.getElementById('auth-status');
  if (!el) return;
  if (!message) {
    el.style.display = 'none';
    el.textContent = '';
    return;
  }
  el.style.display = 'block';
  el.textContent = message;
  el.style.color = tone === 'error' ? 'var(--red)' : tone === 'success' ? 'var(--green)' : 'var(--muted)';
}

function updateAuthUI() {
  const pill = document.getElementById('auth-status-pill');
  const nameEl = document.getElementById('auth-user-name');
  const metaEl = document.getElementById('auth-user-meta');
  const primaryBtn = document.getElementById('auth-primary-btn');
  const secondaryBtn = document.getElementById('auth-secondary-btn');
  const loggedInRow = document.getElementById('auth-logged-in-row');
  const buttonsRow = document.getElementById('auth-buttons-row');
  const pointsDisplay = document.getElementById('user-points-display');
  const pointsValue = document.getElementById('user-points-value');
  const pointsNext = document.getElementById('user-points-next');
  const trustDisplay = document.getElementById('user-trust-display');

  if (!pill || !nameEl || !metaEl) return;

  if (currentUser) {
    const isAdmin = isAdminUser();
    const isMod = isModeratorUser() && !isAdmin;
    const trustScore = getUserTrustScore(currentUser);
    const trustLabel = trustScore >= 5 ? 'Trusted' : trustScore >= 2 ? 'Member' : 'New';
    if (isAdmin) pill.textContent = `Founder · Admin`;
    else if (isMod) pill.textContent = `${trustLabel} · Mod`;
    else pill.textContent = trustLabel;
    nameEl.textContent = currentUser.display_name || currentUser.email;
    metaEl.textContent = currentUser.email;
    if (loggedInRow) loggedInRow.style.display = 'flex';
    if (buttonsRow) buttonsRow.style.display = 'none';
    if (pointsDisplay) {
      const userPoints = currentUser.points || 0;
      const pointsToReward = POINTS_FOR_REWARD - (userPoints % POINTS_FOR_REWARD);
      if (pointsValue) pointsValue.textContent = userPoints;
      if (pointsNext) pointsNext.textContent = `${pointsToReward} points for free premium`;
      pointsDisplay.style.display = 'block';
    }
    if (trustDisplay) {
      trustDisplay.style.display = 'block';
      trustDisplay.innerHTML = `<div style="font-size:10px;color:var(--muted);">Trust Score</div><div style="font-size:14px;font-weight:600;color:${trustScore >= 5 ? 'var(--green)' : trustScore >= 2 ? 'var(--amber)' : 'var(--muted)'};">${trustScore.toFixed(1)}</div>`;
    }
  } else {
    pill.textContent = 'Guest Mode';
    nameEl.textContent = 'Not signed in';
    metaEl.textContent = 'Create an account to post listings and save your identity.';
    if (primaryBtn) {
      primaryBtn.textContent = 'Create Account';
      primaryBtn.setAttribute('onclick', "openAuthModal('signup')");
      primaryBtn.classList.remove('hidden');
    }
    if (secondaryBtn) {
      secondaryBtn.textContent = 'Sign In';
      secondaryBtn.setAttribute('onclick', "openAuthModal('login')");
      secondaryBtn.classList.remove('hidden');
    }
    if (loggedInRow) loggedInRow.style.display = 'none';
    if (buttonsRow) buttonsRow.style.display = 'flex';
    if (pointsDisplay) pointsDisplay.style.display = 'none';
    if (trustDisplay) trustDisplay.style.display = 'none';
  }
  if (document.getElementById('panel-marketplace')?.classList.contains('active')) {
    renderMarketplace();
  }
  if (document.getElementById('panel-moderation')?.classList.contains('active')) {
    renderModerationPanel();
  }
  const navMod = document.getElementById('nav-moderation');
  if (navMod) navMod.classList.toggle('hidden', !isStaffUser());
  const navAdmin = document.getElementById('nav-admin');
  if (navAdmin) navAdmin.classList.toggle('hidden', !isAdminUser());
  if (document.getElementById('panel-admin')?.classList.contains('active')) {
    void renderAdminSiteRegistry();
    renderAdminPaymentHints();
  }
}

function renderSidebarAccount() {
  const panel = document.getElementById('sidebar-account-panel');
  const toggle = document.getElementById('sidebar-account-toggle');
  if (!panel || !toggle) return;
  const isOpen = Boolean(state?.sidebar_account_open);
  panel.classList.toggle('hidden', !isOpen);
  toggle.classList.toggle('is-open', isOpen);
}

function toggleSidebarAccount() {
  if (!state) return;
  state.sidebar_account_open = !Boolean(state.sidebar_account_open);
  saveState();
  renderSidebarAccount();
}

function loadAuthSession() {
  try {
    const staySignedIn = localStorage.getItem(STAY_SIGNED_IN_KEY) === 'true';
    const raw = localStorage.getItem(AUTH_SESSION_KEY);
    console.log('[Auth] Loading session:', { staySignedIn, hasRaw: !!raw });
    
    if (!raw) {
      console.log('[Auth] No session found');
      currentUser = null;
      return;
    }
    
    const session = JSON.parse(raw);
    console.log('[Auth] Session:', session);
    
    if (!staySignedIn && session.ephemeral) {
      console.log('[Auth] Clearing ephemeral session');
      localStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(STAY_SIGNED_IN_KEY);
      currentUser = null;
      return;
    }
    
    const user = findAuthUser(session?.email);
    console.log('[Auth] Found user:', user?.email);
    currentUser = user || null;
  } catch (e) {
    console.error('[Auth] Error:', e);
    currentUser = null;
  }
}

function persistAuthSession(staySignedIn = true) {
  try {
    if (currentUser?.email) {
      const session = { email: currentUser.email, ephemeral: !staySignedIn };
      console.log('[Auth] Saving session:', session, 'staySignedIn:', staySignedIn);
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
      localStorage.setItem(STAY_SIGNED_IN_KEY, staySignedIn ? 'true' : 'false');
      console.log('[Auth] Session saved. StaySignedIn set to:', staySignedIn);
    } else {
      console.log('[Auth] Clearing session');
      localStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(STAY_SIGNED_IN_KEY);
    }
  } catch (e) {
    console.error('Auth session error:', e);
  }
}

function syncAuthModal() {
  const isSignup = authMode === 'signup';
  const title = document.getElementById('auth-modal-title');
  const sub = document.getElementById('auth-modal-sub');
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleBtn = document.getElementById('auth-toggle-btn');
  const displayGroup = document.getElementById('auth-display-group');
  const pinConfirmGroup = document.getElementById('auth-pin-confirm-group');

  if (title) title.textContent = isSignup ? 'Create Your Account' : 'Sign In';
  if (sub) sub.textContent = isSignup
    ? 'Set up your account, then verify the email with a 6-digit code before protected features unlock.'
    : 'Sign back in to manage listings, verify your identity, and keep your public profile consistent.';
  if (submitBtn) submitBtn.textContent = isSignup ? 'Create Account' : 'Sign In';
  if (toggleBtn) toggleBtn.textContent = isSignup ? 'Already have an account?' : 'Need an account?';
  if (displayGroup) displayGroup.classList.toggle('hidden', !isSignup);
  if (pinConfirmGroup) pinConfirmGroup.classList.toggle('hidden', !isSignup);
}

function openAuthModal(mode = 'signup') {
  authMode = mode === 'login' ? 'login' : 'signup';
  syncAuthModal();
  setAuthStatus('');
  ['auth-display-name', 'auth-email', 'auth-password', 'auth-pin', 'auth-pin-confirm'].forEach(id => {
    const el = document.getElementById(id);
    if (el && (id !== 'auth-email' || !currentUser)) el.value = '';
  });
  if (currentUser) {
    const emailField = document.getElementById('auth-email');
    if (emailField && authMode === 'login') emailField.value = currentUser.email || '';
  }
  document.getElementById('auth-modal')?.classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal')?.classList.add('hidden');
  setAuthStatus('');
}

function toggleAuthMode() {
  authMode = authMode === 'signup' ? 'login' : 'signup';
  syncAuthModal();
  setAuthStatus('');
}

async function submitAuthForm() {
  const displayName = document.getElementById('auth-display-name')?.value.trim() || '';
  const email = document.getElementById('auth-email')?.value.trim().toLowerCase() || '';
  const pin = sanitizePin(document.getElementById('auth-pin')?.value || '');
  const pinConfirm = sanitizePin(document.getElementById('auth-pin-confirm')?.value || '');
  const staySignedIn = document.getElementById('auth-stay-signed-in')?.checked ?? true;

  if (!email || !pin) {
    setAuthStatus('Enter your email and access PIN.', 'error');
    return;
  }

  const users = loadAuthUsers();
  const existing = users.find(user => String(user.email || '').toLowerCase() === email);

  if (authMode === 'signup') {
    if (!displayName) {
      setAuthStatus('Add a display name for your public account.', 'error');
      return;
    }
    if (findAuthUserByDisplayName(displayName)) {
      setAuthStatus('That display name is already taken. Choose a unique one.', 'error');
      return;
    }
    if (!isValidPin(pin)) {
      setAuthStatus('Your PIN must be 4-32 letters, numbers, or symbols with no spaces.', 'error');
      return;
    }
    if (pin !== pinConfirm) {
      setAuthStatus('PIN confirmation did not match.', 'error');
      return;
    }
    if (existing) {
      setAuthStatus('That email already has an account. Try signing in instead.', 'error');
      return;
    }
    if (isEmailBanned(email)) {
      setAuthStatus('This email cannot register.', 'error');
      return;
    }
    const newUser = {
      id: generateId(),
      display_name: displayName,
      email,
      pin,
      linked_accounts: [
        { id: 'main', label: 'Main' },
        { id: 'alt', label: 'Alt' }
      ],
      email_verified: false,
      is_admin: false,
      is_moderator: false,
      verification_code: '',
      verification_sent_at: null,
      verification_expires_at: null,
      verification_delivery: 'local',
      created_at: new Date().toISOString()
    };
    setVerificationForUser(newUser);
    users.unshift(newUser);
    const accountSaved = await persistAuthUsersEverywhere(users);
    if (!accountSaved) {
      users.shift();
      authUsersCache = loadAuthUsers().filter(user => String(user.email || '').toLowerCase() !== email);
      setAuthStatus('Your account could not be saved on this device yet. Please try again after clearing some browser storage.', 'error');
      return;
    }
    currentUser = newUser;
    persistAuthSession(staySignedIn);
    updateAuthUI();
    closeAuthModal();
    void notifySiteUserRegistry('signup');
    const delivery = await sendVerificationEmail(newUser);
    openVerifyModal(delivery.mode !== 'email');
    setVerifyStatus(delivery.message, delivery.ok ? 'success' : 'muted');
    return;
  }

  if (!existing) {
    setAuthStatus('That email does not have an account yet.', 'error');
    return;
  }

  if (!isValidPin(existing.pin)) {
    if (!isValidPin(pin)) {
      setAuthStatus('This older account needs a new access PIN before it can sign in.', 'error');
      return;
    }
    existing.pin = pin;
    saveCurrentUserRecord(existing);
  } else if (existing.pin !== pin) {
    setAuthStatus('Email or PIN did not match.', 'error');
    return;
  }

  if (isEmailBanned(email)) {
    setAuthStatus('This account has been suspended.', 'error');
    return;
  }

  if (!existing.email_verified) {
    currentUser = existing;
    persistAuthSession(staySignedIn);
    updateAuthUI();
    closeAuthModal();
    openVerifyModal();
    return;
  }

  currentUser = existing;
  persistAuthSession(staySignedIn);
  updateAuthUI();
  void notifySiteUserRegistry('signin');
  void refreshPaidPlanAfterAuth();
  setAuthStatus('Signed in.', 'success');
  closeAuthModal();
}

function logoutUser() {
  currentUser = null;
  persistAuthSession();
  updateAuthUI();
  closeVerifyModal();
}

function setVerifyStatus(message = '', tone = 'muted') {
  const el = document.getElementById('verify-status');
  if (!el) return;
  if (!message) {
    el.style.display = 'none';
    el.textContent = '';
    return;
  }
  el.style.display = 'block';
  el.textContent = message;
  el.style.color = tone === 'error' ? 'var(--red)' : tone === 'success' ? 'var(--green)' : 'var(--muted)';
}

function refreshVerifyHelper(showCode = false) {
  const helper = document.getElementById('verify-helper');
  if (!helper) return;
  if (!currentUser) {
    helper.textContent = 'Verification email support appears after deployment. Until then, local preview mode keeps the code visible for testing.';
    return;
  }
  if (showCode) {
    helper.innerHTML = `Local preview mode for <strong>${currentUser.email}</strong>. Current 6-digit code: <strong>${currentUser.verification_code}</strong>.`;
    return;
  }
  const expiryText = currentUser.verification_expires_at
    ? new Date(currentUser.verification_expires_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    : 'soon';
  helper.innerHTML = currentUser.verification_delivery === 'email'
    ? `A real verification email was sent to <strong>${currentUser.email}</strong>. Enter the 6-digit code before it expires around <strong>${expiryText}</strong>.`
    : `Email delivery is not active on this build yet, so the app is using local preview mode for <strong>${currentUser.email}</strong>.`;
}

function openVerifyModal(showCode = false) {
  if (!currentUser) {
    openAuthModal('signup');
    return;
  }
  document.getElementById('verify-code').value = '';
  setVerifyStatus('');
  refreshVerifyHelper(showCode || currentUser.verification_delivery !== 'email');
  document.getElementById('verify-modal')?.classList.remove('hidden');
}

function closeVerifyModal() {
  document.getElementById('verify-modal')?.classList.add('hidden');
  setVerifyStatus('');
}

async function resendVerificationCode() {
  if (!currentUser) return;
  setVerificationForUser(currentUser);
  saveCurrentUserRecord(currentUser);
  const delivery = await sendVerificationEmail(currentUser);
  refreshVerifyHelper(delivery.mode !== 'email');
  setVerifyStatus(delivery.message, delivery.ok ? 'success' : 'muted');
}

function submitVerificationCode() {
  if (!currentUser) return;
  const code = sanitizePin(document.getElementById('verify-code')?.value || '');
  if (!isValidPin(code)) {
    setVerifyStatus('Enter the 6-digit verification code.', 'error');
    return;
  }
  if (code !== String(currentUser.verification_code || '')) {
    setVerifyStatus('That verification code did not match.', 'error');
    return;
  }
  if (isVerificationExpired(currentUser)) {
    setVerifyStatus('That code expired. Resend a new verification email and try again.', 'error');
    return;
  }
  currentUser.email_verified = true;
  currentUser.verified_at = new Date().toISOString();
  delete currentUser.verification_code;
  delete currentUser.verification_expires_at;
  saveCurrentUserRecord(currentUser);
  updateAuthUI();
  void notifySiteUserRegistry('verified');
  void refreshPaidPlanAfterAuth();
  closeVerifyModal();
}

function reconcileExpiredPaidPro() {
  if (!state?.subscription) return;
  if (state.subscription.plan !== 'pro' || state.subscription.billing !== 'stripe') return;
  if (!state.subscription.stripeSubscriptionId) return;
  const end = state.subscription.currentPeriodEnd;
  if (!end) return;
  const t = new Date(end).getTime();
  if (Number.isNaN(t) || Date.now() <= t) return;
  state.subscription.plan = 'free';
  state.subscription.stripeSubscriptionId = '';
  state.subscription.currentPeriodEnd = null;
  saveState();
}

function getCurrentPlan() {
  if (isAdminUser()) return 'founder';
  const plan = state?.subscription?.plan || 'free';
  return ['free', 'pro', 'founder'].includes(plan) ? plan : 'free';
}

function isProUser() {
  if (isAdminUser()) return true;
  const plan = state?.subscription?.plan || 'free';
  return plan === 'pro' || plan === 'founder';
}

function isFounderUser() {
  if (isAdminUser()) return true;
  return getCurrentPlan() === 'founder';
}

function formatProAccessEndLabel() {
  const end = state?.subscription?.currentPeriodEnd;
  if (!end || state?.subscription?.plan !== 'pro' || state?.subscription?.billing !== 'stripe') return '';
  try {
    const d = new Date(end);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return '';
  }
}

function getPlanLabel() {
  const plan = getCurrentPlan();
  if (plan === 'pro') {
    const when = formatProAccessEndLabel();
    if (when) return `Pro · ends ${when}`;
    return 'Pro $7 / 30 days';
  }
  if (plan === 'founder') return 'Founder';
  return 'Free';
}

function setPricingStatus(message = '', tone = 'muted') {
  const el = document.getElementById('pricing-status');
  if (!el) return;
  if (!message) {
    el.style.display = 'none';
    el.textContent = '';
    el.className = 'profit-preview';
    return;
  }
  el.style.display = 'block';
  el.textContent = message;
  el.className = `profit-preview ${tone === 'success' ? 'positive' : tone === 'error' ? 'negative' : ''}`.trim();
}

function updatePricingUI(preferredPlan = '') {
  const currentPlan = getCurrentPlan();
  const highlightedPlan = ['free', 'pro', 'founder'].includes(preferredPlan) ? preferredPlan : currentPlan;
  ['free', 'pro', 'founder'].forEach(plan => {
    const tier = document.getElementById(`pricing-tier-${plan}`);
    const btn = document.getElementById(`pricing-${plan}-btn`);
    if (tier) tier.classList.toggle('active', highlightedPlan === plan);
    if (btn) {
      if (currentPlan === plan) {
        btn.textContent = plan === 'free' ? 'Current Plan' : plan === 'pro' ? 'Pro Active' : 'Founder Active';
      } else {
        btn.textContent = plan === 'free' ? 'Stay Free' : plan === 'pro' ? 'Upgrade to Pro' : 'Choose Founder';
      }
    }
  });
}

function updatePlanUI() {
  reconcileExpiredPaidPro();
  const plan = getCurrentPlan();
  const planPill = document.getElementById('plan-status-pill');
  const planCopy = document.getElementById('plan-status-copy');
  const dashboardPill = document.getElementById('dashboard-plan-pill');
  const dashboardCopy = document.getElementById('dashboard-pro-copy');
  const dashboardUpgradeBtn = document.getElementById('dashboard-upgrade-btn');
  const dashboardFounderBtn = document.getElementById('dashboard-founder-btn');
  const fpBanner = document.getElementById('fp-plan-banner');
  const slayerBanner = document.getElementById('slayer-plan-banner');
  const fpProCard = document.getElementById('fp-pro-card');
  const slayerProCard = document.getElementById('slayer-pro-card');
  const sidebarFreeNote = document.getElementById('sidebar-free-note');
  const sidebarAdBlock = document.getElementById('sidebar-ad-block');
  const dashboardFreeNotice = document.getElementById('dashboard-free-notice');
  const dashboardAdSlot = document.getElementById('ad-slot-dashboard');
  const marketplaceAdSlot = document.getElementById('ad-slot-marketplace');
  const accountPortalBtn = document.getElementById('account-billing-portal-btn');

  if (accountPortalBtn) {
    const showPortal = Boolean(
      state?.subscription?.stripeCustomerId && state?.subscription?.billing === 'stripe'
    );
    accountPortalBtn.classList.toggle('hidden', !showPortal);
  }

  if (planPill) planPill.textContent = getPlanLabel();
  if (planCopy) {
    if (!isProUser()) {
      planCopy.textContent =
        'Core tracking stays open. Premium planning, notes, smart helpers, and the ad-free experience unlock in Pro.';
    } else if (plan === 'founder') {
      planCopy.textContent =
        'Founder unlocks every Pro feature for the life of this product tier — no subscription term or renewal.';
    } else if (plan === 'pro' && formatProAccessEndLabel()) {
      planCopy.textContent = `Pro stays active through ${formatProAccessEndLabel()}, then returns to Free unless you renew in Stripe.`;
    } else {
      planCopy.textContent =
        'Premium tools are unlocked. Favorites, private notes, smart helpers, and the ad-free experience are active.';
    }
  }
  if (dashboardPill) {
    dashboardPill.textContent = plan === 'free' ? 'Free Plan Active' : plan === 'founder' ? 'Founder Plan Active' : 'Pro Plan Active';
  }
  if (dashboardCopy) {
    if (!isProUser()) {
      dashboardCopy.textContent = 'Ad-free plus the premium layers users actually pay for.';
    } else if (plan === 'founder') {
      dashboardCopy.textContent =
        'Founder mode is active — full Pro depth without a timed subscription window.';
    } else if (plan === 'pro' && formatProAccessEndLabel()) {
      dashboardCopy.textContent = `Pro access runs through ${formatProAccessEndLabel()}, then ends unless you renew in Stripe.`;
    } else {
      dashboardCopy.textContent =
        'Ad-free premium mode is active. This is where the deeper tools, planning, and power-user features live.';
    }
  }
  if (dashboardUpgradeBtn) {
    dashboardUpgradeBtn.textContent = isProUser() ? 'Manage Plan' : 'Upgrade to Pro';
    const stripePortal = Boolean(
      state?.subscription?.stripeCustomerId && state?.subscription?.billing === 'stripe'
    );
    if (isProUser() && stripePortal) {
      dashboardUpgradeBtn.setAttribute('onclick', 'openBillingPortal()');
    } else if (isProUser()) {
      dashboardUpgradeBtn.setAttribute('onclick', "openPricingModal('pro')");
    } else {
      dashboardUpgradeBtn.setAttribute('onclick', "handleDashboardUpgradeClick()");
    }
  }
  if (dashboardFounderBtn) {
    dashboardFounderBtn.textContent = plan === 'founder' ? 'Founder Active' : 'Founder Offer';
  }
  if (fpBanner) fpBanner.classList.toggle('hidden', isProUser());
  if (slayerBanner) slayerBanner.classList.toggle('hidden', isProUser());
  if (fpProCard) fpProCard.classList.toggle('hidden', isProUser());
  if (slayerProCard) slayerProCard.classList.toggle('hidden', isProUser());
  if (sidebarFreeNote) sidebarFreeNote.classList.toggle('hidden', isProUser());
  if (sidebarAdBlock) sidebarAdBlock.classList.toggle('hidden', isProUser());
  if (dashboardFreeNotice) dashboardFreeNotice.classList.toggle('hidden', isProUser());
  if (dashboardAdSlot) dashboardAdSlot.classList.toggle('hidden', isProUser());
  if (marketplaceAdSlot) marketplaceAdSlot.classList.toggle('hidden', isProUser());
  const fpHint = document.getElementById('fp-hint');
  if (fpHint) {
    fpHint.textContent = isProUser()
      ? 'Pro FP assistant is active. Use auto-fill when you want the app to suggest a bankroll-aware base stake for the current session.'
      : 'Tip: In a fair 50/50, flat or lightly capped sizing is safer than endlessly pressing wins. Pro unlocks the auto-fill assistant if you want the app handling the smarter base suggestion for you.';
  }
  renderAdSlots();
  startAdRotationTimer();
  updatePricingUI();
}

function getAdForSlot(slot) {
  const ads = ROTATING_ADS[slot] || [];
  if (!ads.length) return null;
  const index = Number(state?.ad_rotation?.[slot]) || 0;
  return ads[index % ads.length];
}

function renderAdSlot(slot) {
  const root = document.getElementById(`ad-slot-${slot}`);
  if (!root) return;
  const content = root.querySelector('.ad-slot-content');
  const ad = getAdForSlot(slot);
  if (!content || !ad) return;
  content.innerHTML = `
    <div class="ad-slot-tag">${ad.tag}</div>
    <div class="ad-slot-meta">${ad.meta}</div>
    <div class="ad-slot-title">${ad.title}</div>
    <div class="ad-slot-copy">${ad.copy}</div>
    <a class="${slot === 'sidebar' ? 'btn-sm ad-slot-link' : 'btn ad-slot-link'}" href="${ad.href}" target="_blank" rel="noreferrer">${ad.cta}</a>
  `;
}

function renderAdSlots() {
  Object.keys(ROTATING_ADS).forEach(slot => renderAdSlot(slot));
}

function rotateAdSlot(slot) {
  const ads = ROTATING_ADS[slot] || [];
  if (!ads.length) return;
  state.ad_rotation = state.ad_rotation || {};
  state.ad_rotation[slot] = ((Number(state.ad_rotation[slot]) || 0) + 1) % ads.length;
  saveState();
  renderAdSlot(slot);
}

function startAdRotationTimer() {
  if (adRotationTimer) {
    clearInterval(adRotationTimer);
    adRotationTimer = null;
  }
  if (isProUser()) return;
  adRotationTimer = setInterval(() => {
    ['sidebar', 'dashboard', 'marketplace'].forEach(slot => rotateAdSlot(slot));
  }, AD_ROTATION_MS);
}

function openPricingModal(preferredPlan = '') {
  updatePricingUI(preferredPlan);
  setPricingStatus('');
  document.getElementById('pricing-modal')?.classList.remove('hidden');
}

function closePricingModal() {
  document.getElementById('pricing-modal')?.classList.add('hidden');
  setPricingStatus('');
}

function applyLocalPlan(plan) {
  state.subscription = state.subscription || {};
  state.subscription.plan = plan;
  state.subscription.billing = 'local';
  state.subscription.stripeSubscriptionId = '';
  state.subscription.stripeCustomerId = '';
  state.subscription.currentPeriodEnd = null;
  saveState();
  updatePlanUI();
  updatePricingUI();
  setPricingStatus(
    plan === 'free'
      ? 'Free plan active. Keep the core tools open and let ads carry the free tier.'
      : plan === 'founder'
        ? 'Founder plan active in this preview. Founder includes all Pro tools and ad-free access.'
        : 'Pro plan active in this preview. Premium Slayer and FP tools are now unlocked.',
    'success'
  );
}

async function setPlan(plan) {
  if (!['free', 'pro', 'founder'].includes(plan)) return;
  if (plan === 'free' && state?.subscription?.billing === 'stripe' && isProUser()) {
    setPricingStatus(
      'Paid access is managed in Stripe. Use Billing portal (account panel) for subscriptions, or stay on Founder without a subscription.',
      'error'
    );
    return;
  }
  if (plan === 'pro' || plan === 'founder') {
    const handled = await tryStartPaidCheckout(plan);
    if (handled) return;
  }
  applyLocalPlan(plan);
}

function requireProFeature(featureName) {
  if (isProUser()) return true;
  openPricingModal('pro');
  setPricingStatus(`${featureName} is part of Pro. Core logging stays free, but this personal planning layer is gated.`, 'error');
  return false;
}

function ensureRegisteredUser(actionText = 'use this feature') {
  if (currentUser?.email) return true;
  openAuthModal('signup');
  setAuthStatus(`Create or sign in to ${actionText}.`, 'error');
  return false;
}

function normalizeState(){
  state.items = state.items || JSON.parse(JSON.stringify(DEFAULT_ITEMS));
  state.trades = Array.isArray(state.trades) ? state.trades : [];
  state.total_profit = Number(state.total_profit) || 0;
  state.favorites = Array.isArray(state.favorites) ? state.favorites : [];
  state.theme = state.theme || 'dark';
  state.goals = Array.isArray(state.goals) ? state.goals : [];
  state.gear_price_overrides = state.gear_price_overrides || {};
  state.community_prices = Array.isArray(state.community_prices) ? state.community_prices : [];
  state.fp_items = Array.isArray(state.fp_items) ? state.fp_items : [];
  state.slayer_favorites = Array.isArray(state.slayer_favorites) ? state.slayer_favorites : [];
  state.slayer_notes = state.slayer_notes || {};
  state.slayer_logs = Array.isArray(state.slayer_logs) ? state.slayer_logs : [];
  state.fp_logs = Array.isArray(state.fp_logs) ? state.fp_logs : [];
  state.transfers = Array.isArray(state.transfers) ? state.transfers : [];
  state.marketplace_listings = Array.isArray(state.marketplace_listings) ? state.marketplace_listings : [];
  state.strategy_settings = state.strategy_settings || {selected:'balanced', custom_rules:'0-3b:300m;3b-6b:500m;6b-9b:800m', bankroll_step:2000000000, gamble_unlock:500000000, custom_slayer_share:60, custom_fp_share:40};
  if (!state.strategy_settings.selected) state.strategy_settings.selected = 'balanced';
  if (!state.strategy_settings.custom_rules) state.strategy_settings.custom_rules = '0-3b:300m;3b-6b:500m;6b-9b:800m';
  state.strategy_settings.bankroll_step = Number(state.strategy_settings.bankroll_step) || 2000000000;
  state.strategy_settings.gamble_unlock = Number(state.strategy_settings.gamble_unlock) || 500000000;
  state.strategy_settings.custom_slayer_share = Math.max(0, Math.min(100, Number(state.strategy_settings.custom_slayer_share) || 60));
  state.strategy_settings.custom_fp_share = Math.max(0, Math.min(100, Number(state.strategy_settings.custom_fp_share) || 40));
  state.fp_settings = state.fp_settings || {bankroll:0, base_stake:0, stop_loss:0, take_profit:0};
  state.fp_settings.bankroll = Number(state.fp_settings.bankroll) || 0;
  state.fp_settings.base_stake = Number(state.fp_settings.base_stake) || 0;
  state.fp_settings.stop_loss = Number(state.fp_settings.stop_loss) || 0;
  state.fp_settings.take_profit = Number(state.fp_settings.take_profit) || 0;
  state.subscription = state.subscription || { plan: 'free' };
  if (!['free', 'pro', 'founder'].includes(state.subscription.plan)) state.subscription.plan = 'free';
  state.subscription.billing =
    state.subscription.billing === 'stripe' ? 'stripe' : 'local';
  state.subscription.stripeSubscriptionId = String(state.subscription.stripeSubscriptionId || state.subscription.lemonSubscriptionId || '');
  state.subscription.stripeCustomerId = String(state.subscription.stripeCustomerId || state.subscription.lemonCustomerId || '');
  delete state.subscription.lemonSubscriptionId;
  delete state.subscription.lemonCustomerId;
  state.subscription.currentPeriodEnd = state.subscription.currentPeriodEnd
    ? String(state.subscription.currentPeriodEnd)
    : null;
  state.ad_rotation = state.ad_rotation || { sidebar:0, dashboard:0, marketplace:0 };
  state.sidebar_account_open = Boolean(state.sidebar_account_open);
  state.slayer_daily_access = state.slayer_daily_access || { date:'', tasks:[] };
  state.slayer_daily_access.date = String(state.slayer_daily_access.date || '');
  state.slayer_daily_access.tasks = Array.isArray(state.slayer_daily_access.tasks) ? state.slayer_daily_access.tasks : [];
  Object.keys(ROTATING_ADS).forEach(slot => {
    const total = ROTATING_ADS[slot]?.length || 1;
    const nextIndex = Number(state.ad_rotation[slot]) || 0;
    state.ad_rotation[slot] = ((nextIndex % total) + total) % total;
  });
  state.username = state.username || null;
  state.player_data = state.player_data || null;
  state.banned_users = Array.isArray(state.banned_users) ? state.banned_users : [];
  state.banned_users = state.banned_users
    .map(b => ({
      email: String(b.email || '').trim().toLowerCase(),
      reason: String(b.reason || '').trim().slice(0, 500),
      at: String(b.at || new Date().toISOString()),
      by_email: String(b.by_email || '').trim().toLowerCase(),
      by_display: String(b.by_display || '').trim().slice(0, 80)
    }))
    .filter(b => b.email);

  state.trades.forEach(t => {
    if (!t.id) t.id = generateId();
    if (!t.status) t.status = 'pending';
    if (typeof t.profit !== 'number') t.profit = 0;
    if (!t.buy_time) t.buy_time = t.date;
  });

  state.goals.forEach(g => {
    if (!g.id) g.id = generateId();
    if (typeof g.progress !== 'number') g.progress = 0;
    if (typeof g.gp_price === 'undefined') g.gp_price = g.category === 'gear' ? Number(g.target) || 0 : null;
    if (typeof g.gear_item === 'undefined') g.gear_item = g.category === 'gear' ? g.name : null;
  });

  state.community_prices.forEach(entry => {
    if (!entry.id) entry.id = generateId();
    entry.item_name = String(entry.item_name || '').trim();
    entry.user_email = String(entry.user_email || '').trim().toLowerCase();
    entry.user_name = String(entry.user_name || 'User').trim();
    entry.price = Number(entry.price) || 0;
    entry.created_at = entry.created_at || Date.now();
  });

  state.fp_items.forEach(item => {
    if (!item.id) item.id = generateId();
    item.buy_value = Number(item.buy_value) || 0;
  });

  state.fp_logs.forEach(entry => {
    if (!entry.id) entry.id = generateId();
    entry.stake = Number(entry.stake) || 0;
    entry.base_stake = Number(entry.base_stake) || entry.stake || 0;
    entry.bankroll_after = Number(entry.bankroll_after) || 0;
    entry.profile = entry.profile || 'balanced';
  });

  state.marketplace_listings.forEach(entry => {
    if (!entry.id) entry.id = generateId();
    entry.username = String(entry.username || '').trim();
    entry.price = Number(entry.price) || 0;
    entry.contact = String(entry.contact || '').trim();
    entry.description = String(entry.description || '').trim();
    entry.status = entry.status || 'pending';
    entry.date = entry.date || new Date().toISOString().slice(0,16).replace('T',' ');
    entry.listing_fee = Number(entry.listing_fee) || MARKETPLACE_LISTING_FEE;
    entry.seller = entry.seller || state.username || 'Local seller';
    entry.seller_email = String(entry.seller_email || '').trim().toLowerCase();
  });

  state.tickets = Array.isArray(state.tickets) ? state.tickets : [];
  state.tickets.forEach(ticket => {
    if (!ticket.id) ticket.id = generateId();
    ticket.type = String(ticket.type || 'deposit');
    ticket.listing_id = String(ticket.listing_id || '');
    ticket.username = String(ticket.username || '').trim();
    ticket.amount = Number(ticket.amount) || 0;
    ticket.contact = String(ticket.contact || '').trim();
    ticket.description = String(ticket.description || '').trim();
    ticket.status = String(ticket.status || 'open');
    ticket.created_by = String(ticket.created_by || '').trim().toLowerCase();
    ticket.created_by_display = String(ticket.created_by_display || ticket.created_by || 'User').trim();
    ticket.created_at = Number(ticket.created_at) || Date.now();
    ticket.messages = Array.isArray(ticket.messages) ? ticket.messages : [];
    ticket.messages = ticket.messages.map(message => ({
      id: String(message.id || generateId()),
      sender: String(message.sender || '').trim().toLowerCase(),
      sender_display: String(message.sender_display || message.sender || 'User').trim(),
      text: String(message.text || '').trim(),
      timestamp: Number(message.timestamp) || Date.now(),
      isStaff: Boolean(message.isStaff)
    }));
  });

  Object.keys(state.items).forEach(name => {
    if(typeof state.items[name].avg_sell_time === 'undefined') {
      state.items[name].avg_sell_time = 0;
    }
  });
}

function recalcItemStats(){
  const completedFlips = state.trades.filter(t => t.status === 'completed');
  const flipProfit = completedFlips.reduce((sum, t) => sum + (Number(t.profit) || 0), 0);
  const slayerProfit = state.slayer_logs.reduce((sum, e) => sum + (Number(e.gp) || 0), 0);
  const fpProfit = state.fp_logs.reduce((sum, e) => sum + (Number(e.net) || 0), 0);
  state.total_profit = flipProfit + slayerProfit + fpProfit;

  Object.entries(state.items).forEach(([, item]) => {
    item.avg_buy = 0;
    item.avg_sell = 0;
    item.avg_roi = 0;
    item.trade_count = 0;
    item.avg_sell_time = 0;
  });

  const grouped = {};
  completedFlips.forEach(t => {
    if (!state.items[t.item]) return;
    if (!grouped[t.item]) grouped[t.item] = [];
    grouped[t.item].push(t);
  });

  Object.entries(grouped).forEach(([name, trades]) => {
    const item = state.items[name];
    const count = trades.length;
    const sumBuy = trades.reduce((s, t) => s + (Number(t.buy) || 0), 0);
    const sumSell = trades.reduce((s, t) => s + (Number(t.sell) || 0), 0);
    const sumRoi = trades.reduce((s, t) => s + (Number(t.roi) || 0), 0);
    
    const tradesWithTime = trades.filter(t => t.sell_time && t.buy_time);
    const sumTime = tradesWithTime.reduce((s, t) => {
      const buyDate = new Date(t.buy_time.replace(' ', 'T'));
      const sellDate = new Date(t.sell_time.replace(' ', 'T'));
      const minutes = (sellDate - buyDate) / 60000;
      return s + minutes;
    }, 0);

    item.trade_count = count;
    item.avg_buy = Math.round(sumBuy / count);
    item.avg_sell = Math.round(sumSell / count);
    item.avg_roi = parseFloat((sumRoi / count).toFixed(1));
    item.avg_sell_time = tradesWithTime.length > 0 ? sumTime / tradesWithTime.length : 0;
  });
}

// HISCORES INTEGRATION
function openHiscoresModal() {
  document.getElementById('hiscores-modal').classList.remove('hidden');
  document.getElementById('username-input').value = state.username || '';
  document.getElementById('hiscores-status').innerHTML = '';
}

function closeHiscoresModal() {
  document.getElementById('hiscores-modal').classList.add('hidden');
}

async function fetchHiscores() {
  if (!ensureRegisteredUser('set a username and import stats')) return;
  const username = document.getElementById('username-input').value.trim();
  const statusEl = document.getElementById('hiscores-status');
  if (!username) {
    if (statusEl) statusEl.innerHTML = '<div class="badge red">Enter a username first.</div>';
    return;
  }

  const endpoint = getHiscoresEndpoint(username);
  const isLocalPreview = typeof window !== 'undefined' && (
    window.location.protocol === 'file:' ||
    ['localhost', '127.0.0.1'].includes((window.location.hostname || '').toLowerCase())
  );
  statusEl.innerHTML = `<div class="loading">${isLocalPreview ? 'Fetching stats from local helper...' : 'Fetching account stats...'}</div>`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || `Request failed (${res.status})`);
    }
    if (!data.skills || !Object.keys(data.skills).length) {
      throw new Error('No skill data was returned for this username.');
    }

    state.player_data = { skills: data.skills };
    state.username = username;
    saveState();

    statusEl.innerHTML = '<div class="badge green">Username saved and stats imported successfully.</div>';
    switchTab('goals');
    renderSuggestedGoals();
  } catch (err) {
    const fallbackMessage = isLocalPreview
      ? `Stats lookup is not available in local preview mode right now. If you want local testing, run the local helper on ${HISCORES_PROXY_BASE}.`
      : 'Live stat lookup is not configured on this deployment yet. Connect your hiscores source to the website backend and this will work directly in-browser for users.';
    const message = err?.message || 'Could not fetch account stats.';
    statusEl.innerHTML = `<div class="badge red">${escapeHtml(message)}</div><div class="profit-preview" style="margin-top:10px;">${escapeHtml(fallbackMessage)}</div>`;
  }
}

function parseGoalSkill(skillVal) {
  if (typeof skillVal === 'number') return { level: skillVal, xp: 0 };
  if (skillVal && typeof skillVal === 'object') {
    return {
      level: parseInt(skillVal.level, 10) || 0,
      xp: parseInt(String(skillVal.xp || 0).replace(/,/g, ''), 10) || 0
    };
  }
  if (typeof skillVal === 'string') {
    const parts = skillVal.split(',');
    return { level: parseInt(parts[1], 10) || 0, xp: parseInt(parts[2], 10) || 0 };
  }
  return { level: 0, xp: 0 };
}

function getGoalProgressionData() {
  return currentPlayerData || state.player_data || null;
}

function getTrackedBankrollTotal() {
  const bankroll = Number(state?.fp_settings?.bankroll) || 0;
  const heldItems = (state?.fp_items || []).reduce((sum, item) => sum + (Number(item.buy_value) || 0), 0);
  return bankroll + heldItems;
}

function getPriceTrackedItems() {
  return [...GEAR_PROGRESSIONS, ...WIKI_ITEM_GOALS.filter(item => !GEAR_PROGRESSIONS.some(gear => gear.name === item.name))]
    .map(item => item.name)
    .sort((a, b) => a.localeCompare(b));
}

function getCommunityPriceEntries(itemName) {
  return (state.community_prices || [])
    .filter(entry => entry.item_name === itemName && Number(entry.price) > 0)
    .sort((a, b) => Number(a.created_at || 0) - Number(b.created_at || 0));
}

function getItemBasePrice(itemName) {
  const catalogItem = [...GEAR_PROGRESSIONS, ...WIKI_ITEM_GOALS].find(item => item.name === itemName);
  const override = Number(state.gear_price_overrides?.[itemName]) || 0;
  return override || Number(catalogItem?.price) || 0;
}

function calculateMedian(values) {
  const sorted = values.map(v => Number(v) || 0).filter(v => v > 0).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function getCommunityPriceSnapshot(itemName) {
  const entries = getCommunityPriceEntries(itemName);
  const basePrice = getItemBasePrice(itemName);
  
  if (!entries.length) {
    return {
      itemName,
      basePrice,
      rawMedian: 0,
      median: basePrice || 0,
      low: 0,
      high: 0,
      entries: [],
      validEntries: [],
      confidence: 0,
      trendSeries: []
    };
  }
  
  const rawMedian = calculateMedian(entries.map(entry => entry.price)) || basePrice || 0;
  const anchor = rawMedian || basePrice || 0;
  
  const validEntries = entries.filter(entry => {
    if (!anchor) return entry.price > 0;
    return entry.price >= anchor * 0.25 && entry.price <= anchor * 4;
  });
  
  let weightedSum = 0;
  let totalWeight = 0;
  validEntries.forEach(entry => {
    const weight = entry.trust_weight || 1;
    weightedSum += entry.price * weight;
    totalWeight += weight;
  });
  const weightedMedian = totalWeight > 0 ? weightedSum / totalWeight : rawMedian;
  
  const validPrices = validEntries.map(entry => entry.price);
  const median = calculateMedian(validPrices) || weightedMedian || rawMedian || basePrice || 0;
  const sortedValid = [...validPrices].sort((a, b) => a - b);
  const low = sortedValid.length ? sortedValid[Math.floor((sortedValid.length - 1) * 0.25)] : 0;
  const high = sortedValid.length ? sortedValid[Math.floor((sortedValid.length - 1) * 0.75)] : 0;
  const confidence = Math.max(0, Math.min(100, Math.round((validEntries.length * 12) - ((high && low && median) ? (((high - low) / median) * 45) : 0))));
  const trendSeries = validEntries.slice(-12).map(entry => entry.price);
  return {
    itemName,
    basePrice,
    rawMedian,
    median,
    low,
    high,
    entries,
    validEntries,
    confidence,
    trendSeries
  };
}

function getUserPriceTrustSummary(userEmail) {
  if (!userEmail) return { score: 0, rank: 'Unranked', contributionCount: 0 };
  const email = String(userEmail).trim().toLowerCase();
  const submissions = (state.community_prices || []).filter(entry => entry.user_email === email && Number(entry.price) > 0);
  if (!submissions.length) return { score: 0, rank: 'Unranked', contributionCount: 0 };

  let weightedScore = 0;
  let counted = 0;
  submissions.forEach(entry => {
    const snapshot = getCommunityPriceSnapshot(entry.item_name);
    const anchor = snapshot.median || snapshot.basePrice || 0;
    if (!anchor) return;
    const deviation = Math.abs(entry.price - anchor) / anchor;
    const closeness = Math.max(0, 1 - deviation);
    weightedScore += closeness;
    counted += 1;
  });

  const normalized = counted ? Math.round((weightedScore / counted) * 100) : 0;
  const rank = normalized >= 92 ? 'Trusted Median' : normalized >= 80 ? 'Steady Trader' : normalized >= 65 ? 'Watchlisted Solid' : 'Low Confidence';
  return { score: normalized, rank, contributionCount: counted };
}

function getCommunityPriceForItem(itemName) {
  const snapshot = getCommunityPriceSnapshot(itemName);
  return snapshot.median || snapshot.basePrice || 0;
}

function getBankrollRuleSummary() {
  const total = getTrackedBankrollTotal();
  const step = Number(state?.strategy_settings?.bankroll_step) || 0;
  const unlock = Number(state?.strategy_settings?.gamble_unlock) || 0;
  if (step <= 0 || unlock <= 0) {
    return { total, step, unlock, unlockedAmount: 0, tiersHit: 0, nextAt: 0 };
  }
  const tiersHit = Math.floor(total / step);
  const unlockedAmount = tiersHit * unlock;
  const nextAt = (tiersHit + 1) * step;
  return { total, step, unlock, unlockedAmount, tiersHit, nextAt };
}

function getSkillLevelsForGoals(data) {
  const lookup = {};
  Object.keys(SKILL_MILESTONES).forEach(skill => {
    const key = skill.toLowerCase();
    const skillData = data?.skills?.[key] || data?.[key];
    lookup[key] = parseGoalSkill(skillData).level;
  });
  return lookup;
}

function getGoalSuggestions() {
  const data = getGoalProgressionData();

  const activeGoalKeys = new Set(
    state.goals
      .filter(goal => !goal.completed)
      .map(goal => goal.category === 'gear' ? (goal.gear_item || goal.name) : `${goal.category}:${goal.name}`)
  );

  const xpCandidates = [];
  if (data) {
    Object.entries(SKILL_MILESTONES).forEach(([skill]) => {
      const skillKey = skill.toLowerCase();
      const parsed = parseGoalSkill(data.skills?.[skillKey] || data[skillKey]);
      const milestones = SKILL_STEP_TARGETS[skill] || SKILL_MILESTONES[skill] || [99];
      const nextTargets = milestones.filter(milestone => parsed.level < milestone).slice(0, parsed.level >= 85 ? 2 : 3);

      nextTargets.forEach((target, index) => {
        const gap = target - parsed.level;
        const priorityBase = XP_GOAL_PRIORITY[skill] || 50;
        const paceBonus = index === 0 ? 16 : index === 1 ? 9 : 4;
        const earlyGameBonus = parsed.level < 50 ? 8 : 0;
        const score = priorityBase + paceBonus + earlyGameBonus - gap;
        const name = `${skill} ${parsed.level} → ${target}`;
        if (activeGoalKeys.has(`skill:${name}`)) return;
        xpCandidates.push({
          name,
          shortName: skill,
          desc: gap <= 5
            ? `Push ${skill} from ${parsed.level} to ${target} next. This is a tight step that keeps the account moving.`
            : `Build ${skill} toward level ${target}. This keeps your path progressing without jumping too far ahead.`,
          category: 'skill',
          priority: target >= 95 ? 'high' : gap <= 7 ? 'medium' : 'low',
          type: 'skill_progress',
          target,
          unit: 'level',
          currentLevel: parsed.level,
          gap,
          score,
          skill,
          lane: ['Attack', 'Strength', 'Defence', 'Hitpoints', 'Prayer', 'Magic', 'Ranged', 'Slayer'].includes(skill) ? 'combat' : 'skilling'
        });
      });
    });
  }

  const levels = data ? getSkillLevelsForGoals(data) : {};
  const getGearTargetPrice = (item) => {
    const override = Number(state.gear_price_overrides?.[item.name]) || 0;
    if (override > 0) return override;
    return getCommunityPriceForItem(item.name) || Number(item.price) || 0;
  };

  const itemCatalog = [...GEAR_PROGRESSIONS, ...WIKI_ITEM_GOALS.filter(wikiItem => !GEAR_PROGRESSIONS.some(gear => gear.name === wikiItem.name))];
  const itemCandidates = itemCatalog
    .filter(item => !state.goals.some(goal => !goal.completed && goal.gear_item === item.name))
    .map(item => {
      const targetPrice = getGearTargetPrice(item);
      const requirements = Object.entries(item.stats || {});
      const unlocked = requirements.every(([skill, level]) => (levels[skill] || 0) >= level);
      const statGap = requirements.reduce((sum, [skill, level]) => sum + Math.max(0, level - (levels[skill] || 0)), 0);
      const readinessBonus = unlocked ? 30 : Math.max(0, 20 - statGap);
      const score = item.importance + readinessBonus - Math.min(statGap, 18);
      return {
        ...item,
        unlocked,
        statGap,
        score,
        name: `Gear Goal: ${item.name}`,
        shortName: item.name,
        desc: `${item.desc} ${targetPrice > 0 ? `Set aside ${fmtGP(targetPrice)} GP for this pickup if you want price tracking.` : 'Price tracking is optional for this item goal.'}${unlocked ? ' Your current stats are ready for it.' : ' Close the stat gaps first, then buy in.'}`,
        category: 'gear',
        priority: item.importance >= 92 ? 'high' : item.importance >= 80 ? 'medium' : 'low',
        target: targetPrice,
        unit: 'gp',
        price: targetPrice,
        basePrice: item.price,
        gear_item: item.name,
        type: 'gear_goal'
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    xpCandidates: xpCandidates.sort((a, b) => b.score - a.score),
    itemCandidates,
    featuredXpGoal: xpCandidates.sort((a, b) => b.score - a.score)[0] || null,
    featuredItemGoal: itemCandidates[0] || null
  };
}

function renderSuggestedGoals() {
  const container = document.getElementById('suggested-goals-container');
  if (!container) return;

  const { featuredXpGoal, featuredItemGoal } = getGoalSuggestions();
  if (!featuredXpGoal && !featuredItemGoal) {
    container.innerHTML = '<div class="goal-suggestion-empty">No featured goals found right now. Link stats or create a custom XP or item goal to start building your roadmap.</div>';
    return;
  }

  const encodeGoal = goal => encodeURIComponent(JSON.stringify(goal));

  const renderXpCard = goal => `
    <div class="goal-suggestion-card xp">
      <div class="goal-suggestion-eyebrow">Featured Skill Goal</div>
      <div class="goal-suggestion-name compact">${goal.skill}</div>
      <div class="goal-suggestion-meta">Level ${goal.currentLevel} to ${goal.target}</div>
      <div class="goal-suggestion-footer">
        <div class="goal-suggestion-stat">${goal.gap} level${goal.gap !== 1 ? 's' : ''} away</div>
        <button class="btn primary" onclick="createFromSuggestionEncoded('${encodeGoal(goal)}')">Set as Goal</button>
      </div>
    </div>
  `;

  const renderItemCard = goal => `
    <div class="goal-suggestion-card item">
      <div class="goal-suggestion-eyebrow">Next Item Target</div>
      <div class="goal-suggestion-name compact">${goal.gear_item}</div>
      <div class="goal-suggestion-meta">${goal.price > 0 ? `${fmtGP(goal.price)} GP target` : 'Optional price tracking'}</div>
      <div class="goal-suggestion-desc">${goal.desc}</div>
      <div class="goal-price-editor">
        <input type="text" id="${getGearPriceInputId(goal.gear_item)}" value="${goal.price > 0 ? fmtGP(goal.price) : ''}" placeholder="Optional item price">
        <div class="goal-price-chip">${goal.basePrice ? `Default: ${fmtGP(goal.basePrice)}` : 'No default price on file'}</div>
      </div>
      <div class="goal-suggestion-footer">
        <div class="goal-suggestion-stat">${goal.unlocked ? 'Stats ready now' : `${goal.statGap} total levels to go`}</div>
        <div class="btn-row" style="margin-top:0;">
          <button class="btn primary" onclick="createFromSuggestionEncoded('${encodeGoal(goal)}')">Set Goal</button>
          <button class="btn" onclick="addCompletedItemGoalEncoded('${encodeGoal(goal)}')">Already Own It</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = [
    `<div class="goal-suggestion-grid">
      ${featuredXpGoal ? renderXpCard(featuredXpGoal) : '<div class="goal-suggestion-empty">No featured skill goal available right now.</div>'}
      ${featuredItemGoal ? renderItemCard(featuredItemGoal) : '<div class="goal-suggestion-empty">No next item target available right now. Complete an active gear goal or create a custom one.</div>'}
    </div>`
  ].join('');
}

function getGearPriceInputId(itemName) {
  return `gear-price-${String(itemName).replace(/[^a-zA-Z0-9]/g, '-')}`;
}

function saveGearPriceOverride(itemName) {
  const input = document.getElementById(getGearPriceInputId(itemName));
  if(!input) return;
  const parsed = parseGP(input.value);
  if(parsed <= 0){
    return;
  }
  state.gear_price_overrides[itemName] = parsed;
  saveState();
  renderSuggestedGoals();
}

function applyGearGoalPrice(goal) {
  if(goal.type !== 'gear_goal' || !goal.gear_item) return goal;
  const input = document.getElementById(getGearPriceInputId(goal.gear_item));
  const parsed = input ? parseGP(input.value) : 0;
  if(parsed > 0){
    state.gear_price_overrides[goal.gear_item] = parsed;
    goal.target = parsed;
    goal.price = parsed;
    saveState();
  }
  return goal;
}

function addCompletedItemGoal(goal) {
  if (!ensureRegisteredUser('track owned items')) return;
  const appliedGoal = applyGearGoalPrice({ ...goal });
  if (state.goals.some(existing => existing.category === 'gear' && (existing.gear_item || existing.name) === (appliedGoal.gear_item || appliedGoal.name) && existing.completed)) {
    return;
  }
  const target = Number(appliedGoal.target || appliedGoal.price) || 0;
  state.goals.push({
    id: generateId(),
    name: appliedGoal.name,
    desc: appliedGoal.desc,
    target,
    unit: 'gp',
    category: 'gear',
    priority: appliedGoal.priority || 'medium',
    progress: target,
    created_at: Date.now(),
    completed: true,
    completed_at: Date.now(),
    from_hiscores: true,
    gear_item: appliedGoal.gear_item || null,
    gp_price: appliedGoal.price || target
  });
  saveState();
  renderGoals();
  renderSuggestedGoals();
}

function parseEncodedGoal(payload) {
  try {
    return JSON.parse(decodeURIComponent(payload));
  } catch (e) {
    alert('That goal payload could not be read. Refresh and try again.');
    return null;
  }
}

function addCompletedItemGoalEncoded(payload) {
  const goal = parseEncodedGoal(payload);
  if (!goal) return;
  addCompletedItemGoal(goal);
}

function createFromSuggestionEncoded(payload) {
  const goal = parseEncodedGoal(payload);
  if (!goal) return;
  createFromSuggestion(goal);
}

function createFromSuggestion(goal) {
  if (!ensureRegisteredUser('create goals')) return;
  if(goal.type === 'gear_goal' && goal.gear_item) goal = applyGearGoalPrice({ ...goal });
  const duplicateExists = state.goals.some(existing => !existing.completed && (
    (goal.category === 'gear' && (existing.gear_item || existing.name) === (goal.gear_item || goal.name)) ||
    (goal.category !== 'gear' && existing.name === goal.name)
  ));
  if (duplicateExists) {
    return;
  }
  let target = goal.category === 'gear' ? (Number(goal.target || goal.price) || 0) : (goal.target || 99);
  let unit = goal.category === 'gear' ? 'gp' : (goal.unit || 'levels');

  if(!goal.target && goal.name.includes('→')) {
    const parts = goal.name.split('→');
    const levelStr = parts[1].trim();
    target = parseInt(levelStr);
    unit = 'level';
  } else if(!goal.target && goal.name.includes('KC')) {
    const numStr = goal.name.match(/\d+/)[0];
    target = parseInt(numStr);
    unit = 'KC';
  }

  state.goals.push({
    id: generateId(),
    name: goal.name,
    desc: goal.desc,
    target,
    unit,
    category: goal.category,
    priority: goal.priority,
    progress: goal.category === 'wealth' ? Math.min(Number(goal.progress) || 0, Number(target) || 0) : 0,
    created_at: Date.now(),
    completed: false,
    completed_at: null,
    from_hiscores: true,
    gear_item: goal.gear_item || null,
    gp_price: goal.price || null
  });

  saveState();
  renderGoals();
  renderSuggestedGoals();
}

// GOALS SYSTEM
function openGoalModal() {
  document.getElementById('goal-modal').classList.remove('hidden');
  syncGoalCategoryFields();
}

function openGoalModalWithCategory(category) {
  openGoalModal();
  const categoryInput = document.getElementById('goal-category');
  if(categoryInput){
    categoryInput.value = category;
    syncGoalCategoryFields();
  }
}

function closeGoalModal() {
  document.getElementById('goal-modal').classList.add('hidden');
}

function syncGoalCategoryFields() {
  const category = document.getElementById('goal-category')?.value;
  const priceGroup = document.getElementById('goal-price-group');
  const targetInput = document.getElementById('goal-target');
  const unitInput = document.getElementById('goal-unit');
  if(!priceGroup || !targetInput || !unitInput) return;
  const isGear = category === 'gear';
  priceGroup.classList.toggle('hidden', !isGear);
  targetInput.disabled = isGear;
  unitInput.disabled = isGear;
  if(isGear){
    targetInput.placeholder = 'Auto from gear price';
    unitInput.placeholder = 'Auto set to gp';
    unitInput.value = 'gp';
  } else {
    targetInput.disabled = false;
    unitInput.disabled = false;
    targetInput.placeholder = '50';
    unitInput.placeholder = 'kills';
    if(unitInput.value === 'gp') unitInput.value = '';
  }
}

function createCustomGoal() {
  if (!ensureRegisteredUser('create goals')) return;
  const name = document.getElementById('goal-name').value.trim();
  const desc = document.getElementById('goal-desc').value.trim();
  const category = document.getElementById('goal-category').value;
  const priority = document.getElementById('goal-priority').value;
  const gearPrice = parseGP(document.getElementById('goal-price').value);
  const target = category === 'gear' ? gearPrice : parseInt(document.getElementById('goal-target').value);
  const unit = category === 'gear' ? 'gp' : document.getElementById('goal-unit').value.trim();

  if(!name || (category !== 'gear' && (!target || !unit))) {
    alert('Fill in all fields');
    return;
  }

  state.goals.push({
    id: generateId(),
    name,
    desc,
    target: category === 'gear' ? gearPrice : target,
    unit: category === 'gear' ? 'gp' : unit,
    category,
    priority,
    progress: 0,
    created_at: Date.now(),
    completed: false,
    completed_at: null,
    gear_item: category === 'gear' ? name : null,
    gp_price: category === 'gear' ? gearPrice : null
  });

  saveState();
  closeGoalModal();
  resetGoalForm();
  renderGoals();
}

function resetGoalForm() {
  document.getElementById('goal-name').value = '';
  document.getElementById('goal-desc').value = '';
  document.getElementById('goal-target').value = '';
  document.getElementById('goal-unit').value = '';
  document.getElementById('goal-category').value = 'grind';
  document.getElementById('goal-priority').value = 'medium';
  document.getElementById('goal-price').value = '';
  syncGoalCategoryFields();
}

function updateGoalProgress(goalId, newProgress) {
  const goal = state.goals.find(g => g.id === goalId);
  if(!goal) return;

  goal.progress = Math.min(newProgress, goal.target);
  
  if(goal.progress >= goal.target && !goal.completed) {
    goal.completed = true;
    goal.completed_at = Date.now();
  }

  saveState();
  renderGoals();
}

function completeGoal(goalId) {
  if (!ensureRegisteredUser('update goals')) return;
  const goal = state.goals.find(g => g.id === goalId);
  if(!goal) return;
  goal.progress = goal.target;
  goal.completed = true;
  goal.completed_at = Date.now();
  saveState();
  renderGoals();
}

function deleteGoal(goalId) {
  if (!ensureRegisteredUser('delete goals')) return;
  const idx = state.goals.findIndex(g => g.id === goalId);
  if(idx > -1) {
    state.goals.splice(idx, 1);
    saveState();
    renderGoals();
  }
}

function addFpItem() {
  if (!ensureRegisteredUser('track FP items')) return;
  const name = document.getElementById('fp-item-name')?.value.trim();
  const buyValue = parseGP(document.getElementById('fp-item-buy')?.value);
  const note = document.getElementById('fp-item-note')?.value.trim();
  if(!name || buyValue <= 0){
    alert('Enter an item name and buy value.');
    return;
  }
  state.fp_items.unshift({
    id: generateId(),
    name,
    buy_value: buyValue,
    note,
    date: new Date().toISOString().slice(0,16).replace('T',' ')
  });
  saveState();
  renderRspsSections();
  document.getElementById('fp-item-name').value = '';
  document.getElementById('fp-item-buy').value = '';
  document.getElementById('fp-item-note').value = '';
}

function deleteFpItem(itemId) {
  const idx = state.fp_items.findIndex(item => item.id === itemId);
  if(idx === -1) return;
  state.fp_items.splice(idx, 1);
  saveState();
  renderRspsSections();
}

function renderGearRoadmap() {
  const container = document.getElementById('gear-roadmap-list');
  if(!container) return;
  const data = getGoalProgressionData();
  const levels = data ? getSkillLevelsForGoals(data) : {};
  const activeGear = new Set(state.goals.filter(goal => !goal.completed && goal.category === 'gear').map(goal => goal.gear_item || goal.name));
  const ownedGear = new Set(state.goals.filter(goal => goal.completed && goal.category === 'gear').map(goal => goal.gear_item || goal.name));
  const allowedCategories = new Set(['melee', 'ranged', 'magic', 'utility', 'hybrid']);
  const roadmapItems = [...GEAR_PROGRESSIONS, ...WIKI_ITEM_GOALS.filter(item => !GEAR_PROGRESSIONS.some(gear => gear.name === item.name))]
    .filter(item => allowedCategories.has(item.category || 'utility'))
    .map(item => {
      const price = Number(state.gear_price_overrides?.[item.name]) || getCommunityPriceForItem(item.name) || Number(item.price) || 0;
      const status = ownedGear.has(item.name) ? 'owned' : activeGear.has(item.name) ? 'active' : 'missing';
      const requirements = Object.entries(item.stats || {});
      const statGap = requirements.reduce((sum, [skill, level]) => sum + Math.max(0, level - (levels[skill] || 0)), 0);
      const unlocked = requirements.every(([skill, level]) => (levels[skill] || 0) >= level);
      return { ...item, price, status, statGap, unlocked };
    })
    .sort((a, b) => {
      const order = { active: 0, missing: 1, owned: 2 };
      return order[a.status] - order[b.status]
        || a.statGap - b.statGap
        || (b.importance || 0) - (a.importance || 0);
    });

  const roadmapGroups = [
    { key: 'melee', label: 'Melee Path', desc: 'Weapons, armor, and utility that power your melee progression.', match: item => item.category === 'melee' },
    { key: 'ranged', label: 'Ranged Path', desc: 'Core ranged upgrades from early staples to late-game chase gear.', match: item => item.category === 'ranged' },
    { key: 'magic', label: 'Magic Path', desc: 'Mage progression targets for Slayer, PvM, and premium endgame setups.', match: item => item.category === 'magic' },
    { key: 'hybrid', label: 'Hybrid Extras', desc: 'Flexible cross-style pieces, utility unlocks, and wiki-backed extras that still fit the roadmap.', match: item => item.category === 'hybrid' || item.category === 'utility' }
  ];

  const usedNames = new Set();
  const sections = roadmapGroups.map(group => {
    const items = roadmapItems.filter(item => {
      if(usedNames.has(item.name)) return false;
      if(!group.match(item)) return false;
      usedNames.add(item.name);
      return true;
    });
    return { ...group, items };
  }).filter(group => group.items.length > 0);

  const buildRoadmapCard = item => `
    <div class="roadmap-card ${item.status}">
      <div class="roadmap-meta">${item.status === 'owned' ? 'Owned' : item.status === 'active' ? 'Active Goal' : 'Open Upgrade'} · ${item.category || 'gear'}</div>
      <div class="roadmap-title">${item.name}</div>
      <div class="roadmap-desc">${item.desc || 'Progression target from your roadmap.'}</div>
      <div class="goal-showcase-stats" style="margin-bottom:12px;">
        <span>${item.price > 0 ? `${fmtGP(item.price)} GP` : 'Set live price'}</span>
        <span>Priority ${item.importance || 50}</span>
        <span>${item.unlocked ? 'Ready now' : `${item.statGap} levels away`}</span>
      </div>
      <div class="roadmap-actions">
        ${item.status === 'missing' ? `<button class="btn" onclick="openGoalModalWithCategory('gear');document.getElementById('goal-name').value='${item.name.replace(/'/g, "\\'")}';document.getElementById('goal-price').value='${item.price > 0 ? fmtGP(item.price) : ''}';syncGoalCategoryFields();">Track Item</button>` : ''}
        ${item.status !== 'owned' ? `<button class="btn primary" onclick="addCompletedItemGoal(${JSON.stringify({
          name: `Gear Goal: ${item.name}`,
          desc: item.desc || '',
          category: 'gear',
          priority: item.importance >= 90 ? 'high' : item.importance >= 75 ? 'medium' : 'low',
          gear_item: item.name,
          type: 'gear_goal',
          target: item.price,
          price: item.price
        }).replace(/"/g, '&quot;')})">Mark Owned</button>` : '<span class="badge green">Complete</span>'}
      </div>
    </div>
  `;

  container.innerHTML = sections.map(section => `
    <section class="roadmap-section">
      <div class="roadmap-section-header">
        <div>
          <div class="roadmap-section-title">${section.label}</div>
          <div class="roadmap-section-subtitle">${section.desc}</div>
        </div>
        <div class="roadmap-section-count">${section.items.length} items</div>
      </div>
      <div class="roadmap-grid">${section.items.map(buildRoadmapCard).join('')}</div>
    </section>
  `).join('');
}

function renderGoals() {
  const activeGoals = state.goals.filter(g => !g.completed);
  const completedGoals = state.goals.filter(g => g.completed);
  const activeGearGoals = activeGoals.filter(goal => goal.category === 'gear');
  const completedGearGoals = completedGoals.filter(goal => goal.category === 'gear');
  const activeXpGoals = activeGoals.filter(goal => goal.category === 'skill');
  const trackedGearTotal = activeGearGoals.reduce((sum, goal) => sum + (Number(goal.gp_price || goal.target) || 0), 0);
  const ownedGearTotal = completedGearGoals.reduce((sum, goal) => sum + (Number(goal.gp_price || goal.target) || 0), 0);

  const trackedGearEl = document.getElementById('goals-gear-total');
  if(trackedGearEl) trackedGearEl.textContent = `${fmtGP(trackedGearTotal)} GP`;
  const ownedGearEl = document.getElementById('goals-gear-owned');
  if(ownedGearEl) ownedGearEl.textContent = `${fmtGP(ownedGearTotal)} GP`;
  const xpCountEl = document.getElementById('goals-xp-count');
  if(xpCountEl) xpCountEl.textContent = activeXpGoals.length.toLocaleString();
  const itemCountEl = document.getElementById('goals-item-count');
  if(itemCountEl) itemCountEl.textContent = activeGearGoals.length.toLocaleString();
  renderCommunityPriceDesk();
  renderGearRoadmap();

  const activeContainer = document.getElementById('active-goals-container');
  if(activeGoals.length === 0) {
    activeContainer.innerHTML = '<div class="card"><div class="empty">No active goals. Create one to get started!</div></div>';
  } else {
    activeContainer.innerHTML = `<div class="goal-stack">${activeGoals.map(goal => {
      const hasNumericTarget = Number(goal.target) > 0;
      const pct = hasNumericTarget ? Math.min(100, (goal.progress / goal.target) * 100) : 0;
      const progressLabel = goal.category === 'gear'
        ? hasNumericTarget
          ? `${fmtGP(goal.progress)} / ${fmtGP(goal.target)} GP`
          : 'Optional price not set'
        : `${goal.progress} / ${goal.target} ${goal.unit}`;
      const kicker = goal.category === 'gear' ? 'Item Goal' : goal.category === 'skill' ? 'XP Goal' : goal.category === 'wealth' ? 'GP Goal' : 'Progress Goal';
      
      return `
        <div class="goal-showcase ${goal.category === 'gear' ? 'gear' : 'xp'} priority-${goal.priority || 'medium'}">
          <div class="goal-showcase-top">
            <div>
              <div class="goal-kicker">${kicker}</div>
              <div class="goal-showcase-title">${goal.name}</div>
            </div>
            <span class="badge ${goal.priority === 'high' ? 'red' : goal.priority === 'medium' ? 'amber' : 'green'}">${goal.priority}</span>
          </div>
          ${goal.desc ? `<div class="goal-showcase-desc">${goal.desc}</div>` : ''}
          <div class="goal-progress">
            <div class="goal-progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="goal-showcase-stats">
            <span>${progressLabel}</span>
            <span>${hasNumericTarget ? `${pct.toFixed(0)}% complete` : 'Complete when ready'}</span>
            ${goal.category === 'gear' && hasNumericTarget ? `<span>${fmtGP(goal.gp_price || goal.target)} item value</span>` : ''}
          </div>
          <div class="form-group" style="margin:0 0 12px 0;${goal.category === 'gear' && !hasNumericTarget ? 'display:none;' : ''}">
            <input type="${goal.category === 'gear' ? 'text' : 'number'}" placeholder="${goal.category === 'gear' ? 'Add GP progress' : 'Add progress'}" style="padding:8px;font-size:12px;" id="progress-${goal.id}" />
          </div>
          <div class="goal-buttons">
            ${goal.category === 'gear' && !hasNumericTarget ? '' : `<button class="goal-btn primary-action" onclick="addProgress('${goal.id}')">+ Add Progress</button>`}
            <button class="goal-btn" onclick="completeGoal('${goal.id}')">${goal.category === 'gear' ? 'Complete' : 'Mark Complete'}</button>
            <button class="goal-btn" onclick="deleteGoal('${goal.id}')">Delete</button>
          </div>
        </div>
      `;
    }).join('')}</div>`;
  }

  const completedContainer = document.getElementById('completed-goals-list');
  if(completedGoals.length === 0) {
    completedContainer.innerHTML = '<div class="empty">No completed goals yet. Keep grinding!</div>';
  } else {
    completedContainer.innerHTML = completedGoals.map(goal => {
      const date = new Date(goal.completed_at).toLocaleDateString();
      const completedLabel = goal.category === 'gear'
        ? (Number(goal.progress) > 0 ? `${fmtGP(goal.progress)} GP` : 'Owned item goal')
        : `${goal.progress} ${goal.unit}`;
      return `
        <div class="item-row">
          <div class="item-name">✅ ${goal.name}</div>
          <div class="item-meta">${completedLabel}</div>
          <div style="min-width:100px;text-align:right;font-size:11px;color:var(--muted);">${date}</div>
        </div>
      `;
    }).join('');
  }
}

function addProgress(goalId) {
  if (!ensureRegisteredUser('update goals')) return;
  const input = document.getElementById(`progress-${goalId}`);
  const goal = state.goals.find(g => g.id === goalId);
  if(!goal) return;
  const amount = goal.category === 'gear' ? parseGP(input.value) : parseInt(input.value);
  
  if(!amount || amount <= 0) {
    alert('Enter a valid amount');
    return;
  }

  updateGoalProgress(goalId, goal.progress + amount);
  input.value = '';
}

function startSession(){
  const gp=parseGP(document.getElementById('gp-input').value);
  if(!gp || gp <= 0){
    alert('Enter a valid GP amount (e.g. 500m, 1.2b, 400m)');
    return;
  }
  sessionGP=gp; 
  sessionProfit=0;
  document.getElementById('gp-modal').classList.add('hidden');
  render();
}

function newSession(){
  document.getElementById('gp-input').value='';
  document.getElementById('gp-modal').classList.remove('hidden');
  sessionProfit=0;
}

async function switchTab(tab){
  if (tab === 'moderation' && !isStaffUser()) return;
  if (tab === 'admin' && !isAdminUser()) return;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[onclick*="switchTab('${tab}')"]`);
  if(navItem) navItem.classList.add('active');
  document.getElementById('panel-'+tab).classList.add('active');
  if (tab === 'marketplace' || tab === 'moderation' || tab === 'admin') {
    await syncCommunityStateFromServer();
  }
  recalcItemStats();
  if (tab === 'moderation') {
    renderAllMembers();
    renderModActivity();
    renderModerationPanel();
    loadTickets();
  }
  if (tab === 'admin') {
    renderAdminUserList();
    renderAdminFlipsStats();
    renderAdminPrices();
    renderAdminMarketplace();
    renderAdminAllMembers();
    renderAdminActivity();
    renderAdminBannedList();
    loadAdminTickets();
    renderAdminPendingListings();
  }
  renderPanel(tab);
  trackUserActivity();
}

function onItemChange(){
  calcProfit();
  updateSuggestedCard();
  updateFavoriteButton();
}

function updateSuggestedCard(){
  const name=document.getElementById('item-select').value;
  const info=state.items[name]; 
  if(!info) return;
  const roiStr=info.trade_count>0?`Avg ROI: <span style="color:var(--green);">${info.avg_roi}%</span> from ${info.trade_count} trade${info.trade_count!==1?'s':''}`:'No trades logged for this item yet.';
  document.getElementById('suggested-info').innerHTML=`<span style="color:var(--muted);">Buy:</span> <span style="color:var(--text);">${info.suggested_buy}</span> &nbsp;|&nbsp; <span style="color:var(--muted);">Sell:</span> <span style="color:var(--text);">${info.suggested_sell}</span><br><span style="display:inline-block;margin-top:6px;">${roiStr}</span>`;
}

function calcProfit(){
  const buy=parseGP(document.getElementById('buy-price').value)||0;
  const sell=parseGP(document.getElementById('sell-price').value)||0;
  const qty=parseInt(document.getElementById('qty').value)||1;
  const el=document.getElementById('profit-preview');
  if(!buy||!sell){el.textContent='Enter prices above to preview profit.';el.style.color='var(--muted)';return;}
  const profit=(sell-buy)*qty, roi=((sell-buy)/buy*100).toFixed(1), cost=buy*qty;
  const col=profit>=0?'var(--green)':'var(--red)';
  el.style.color='var(--text)';
  el.innerHTML=`Profit: <span style="color:${col};font-weight:600;">${fmtGP(profit)} GP</span> &nbsp; ROI: <span style="color:${col};">${roi}%</span> &nbsp;<span style="color:var(--muted);">Total cost: ${fmtGP(cost)} GP</span>`;
}

function logTrade(){
  if (!ensureRegisteredUser('log flips')) return;
  const itemName=document.getElementById('item-select').value;
  const buy=parseGP(document.getElementById('buy-price').value);
  const sell=parseGP(document.getElementById('sell-price').value);
  const qty=parseInt(document.getElementById('qty').value)||1;
  if(!itemName||!buy||!sell){alert('Please fill in all fields.');return;}
  
  const expectedProfit=(sell-buy)*qty;
  const expectedRoi=parseFloat(((sell-buy)/buy*100).toFixed(1));
  const now = new Date().toISOString().slice(0,16).replace('T',' ');
  
  const actorEmail = getActorEmail();
  state.trades.push({
    id: generateId(),
    type:'flip',
    date: now,
    buy_time: now,
    sell_time: null,
    item:itemName,
    buy,
    sell,
    qty,
    expected_profit: expectedProfit,
    expected_roi: expectedRoi,
    profit: 0,
    roi: null,
    status:'pending',
    actor_email: actorEmail || undefined,
    actor_display: actorEmail ? getActorDisplay() : undefined
  });
  
  saveState(); 
  trackUserActivity();
  recalcItemStats();
  render();
  
  document.getElementById('buy-price').value='';
  document.getElementById('sell-price').value='';
  document.getElementById('qty').value='1';
  document.getElementById('profit-preview').textContent='Flip logged as PENDING. Mark as sold when it sells.';
  document.getElementById('profit-preview').style.color='var(--amber)';
}

function confirmSellTrade(id){
  const trade = state.trades.find(t => t.id === id);
  if(!trade || trade.status === 'completed') return;
  
  const entry = prompt(`Sold ${trade.item} (qty ${trade.qty})?\n\nEnter actual sell price (or press OK to use ${fmtGP(trade.sell)}):`, trade.sell);
  if(entry === null) return;
  
  const actualSell = parseGP(entry) || trade.sell;
  if(!actualSell || actualSell <= 0){alert('Enter a valid sell price.');return;}

  trade.sell = actualSell;
  trade.profit = (actualSell - trade.buy) * trade.qty;
  trade.roi = parseFloat((((actualSell - trade.buy) / trade.buy) * 100).toFixed(1));
  trade.status = 'completed';
  trade.sell_time = new Date().toISOString().slice(0,16).replace('T',' ');

  sessionProfit += trade.profit;
  recalcItemStats();
  saveState();
  render();
}

function deleteTrade(id){
  const tradeIndex = state.trades.findIndex(t => t.id === id);
  if(tradeIndex === -1) return;
  const trade = state.trades[tradeIndex];
  if(!confirm(`Delete flip "${trade.item}"?`)) return;

  if(trade.status === 'completed'){
    sessionProfit -= Number(trade.profit) || 0;
  }
  state.trades.splice(tradeIndex, 1);
  recalcItemStats();
  saveState();
  render();
}

function toggleAddItem(){
  document.getElementById('add-item-form').classList.toggle('visible');
}

function addItem(){
  const name=document.getElementById('new-item-name').value.trim();
  const buy=document.getElementById('new-item-buy').value.trim();
  const sell=document.getElementById('new-item-sell').value.trim();
  
  if(!name){
    alert('Enter an item name.');
    return;
  }
  if(state.items[name]){
    alert('Item already exists.');
    return;
  }
  
  state.items[name]={
    suggested_buy:buy||'?',
    suggested_sell:sell||'?',
    avg_buy:0,
    avg_sell:0,
    avg_roi:0,
    trade_count:0,
    avg_sell_time:0
  };
  
  saveState(); 
  populateSelect();
  document.getElementById('item-select').value=name;
  updateSuggestedCard();
  
  document.getElementById('new-item-name').value='';
  document.getElementById('new-item-buy').value='';
  document.getElementById('new-item-sell').value='';
  document.getElementById('add-item-form').classList.remove('visible');
}

function renderHistory(){
  const wrap=document.getElementById('history-table-wrap');
  const sortByEl=document.getElementById('history-sort-by');
  const sortDirEl=document.getElementById('history-sort-dir');
  const sortBy=sortByEl?sortByEl.value:'date';
  const sortDir=sortDirEl?sortDirEl.value:'desc';
  const mult=sortDir==='asc'?1:-1;
  
  const combined=state.trades.sort((a,b)=>{
    if(sortBy==='profit') return ((Number(a.profit)||0) - (Number(b.profit)||0)) * mult;
    if(sortBy==='roi') return ((Number(a.roi)||0) - (Number(b.roi)||0)) * mult;
    const timeA = new Date(a.date.replace(' ','T')).getTime() || 0;
    const timeB = new Date(b.date.replace(' ','T')).getTime() || 0;
    return (timeA - timeB) * mult;
  });
  
  if(!combined.length){wrap.innerHTML='<div class="empty">No trades logged yet.</div>';return;}
  
  const rows=combined.map(t=>{
    const profit = Number(t.profit) || 0;
    const col=profit>=0?'var(--green)':'var(--red)';
    const roiCell=t.roi!=='—' && t.roi!==null && t.roi!==undefined ? `<span class="badge ${t.roi>=20?'green':t.roi>=0?'amber':'red'}">${t.roi}%</span>` : `<span class="badge muted">—</span>`;
    
    let actionButtons='';
    if(t.status==='pending'){
      actionButtons += `<button class="btn-sm" onclick="confirmSellTrade('${t.id}')">Sell</button> `;
    }
    actionButtons += `<button class="btn-sm" onclick="deleteTrade('${t.id}')">Delete</button>`;
    
    return `<tr><td>${t.date}</td><td style="font-weight:600;">${t.item}</td><td>${t.qty||1}</td><td>${t.buy?fmtGP(t.buy):'—'}</td><td>${t.sell?fmtGP(t.sell):'—'}</td><td style="color:${col};font-weight:600;">${t.status==='pending'?'~ ':''}${fmtGP(profit)}</td><td>${roiCell}</td><td>${actionButtons}</td></tr>`;
  }).join('');
  
  wrap.innerHTML=`<table><thead><tr><th>Date</th><th>Item</th><th>Qty</th><th>Buy</th><th>Sell</th><th>Profit</th><th>ROI</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function renderAnalysis(){
  const completed = state.trades.filter(t=>t.status==='completed');
  const wins = completed.filter(t=>(Number(t.profit)||0)>0);
  const winRate = completed.length ? ((wins.length/completed.length)*100).toFixed(1)+'%' : '—';
  
  document.getElementById('a-completed').textContent = completed.length.toLocaleString();
  document.getElementById('a-winrate').textContent = winRate;
  
  const rois = completed.map(t => Number(t.roi) || 0);
  const avgRoi = rois.length > 0 ? (rois.reduce((s,r) => s + r, 0) / rois.length).toFixed(1) : '—';
  document.getElementById('a-avgroi').textContent = avgRoi + '%';
  
  let gpPerHour = 0;
  const tradesWithTime = completed.filter(t => t.sell_time && t.buy_time && t.profit);
  
  if(tradesWithTime.length > 0) {
    let totalProfit = 0;
    let totalHours = 0;
    
    tradesWithTime.forEach(t => {
      const minutes = (new Date(t.sell_time.replace(' ','T')) - new Date(t.buy_time.replace(' ','T'))) / 60000;
      const hours = minutes / 60;
      totalProfit += t.profit;
      totalHours += hours;
    });
    
    gpPerHour = totalHours > 0 ? Math.round(totalProfit / totalHours) : 0;
  }
  
  document.getElementById('a-gphour').textContent = gpPerHour > 0 ? fmtGP(gpPerHour) + '/hr' : '—';

  const performers=Object.entries(state.items).filter(([,v])=>v.trade_count>0).sort((a,b)=>b[1].avg_roi-a[1].avg_roi);
  document.getElementById('analysis-list').innerHTML=performers.length?performers.slice(0,5).map(([name,info],i)=>`
    <div class="item-row"><div class="rank-num ${i===0?'gold':''}">${i+1}</div><div class="item-name">${name}</div><div class="item-meta">${info.trade_count} flip${info.trade_count!==1?'s':''}</div><div style="min-width:80px;text-align:right;"><span class="badge ${info.avg_roi>=20?'green':info.avg_roi>=0?'amber':'red'}">${info.avg_roi}%</span></div></div>`).join(''):'<div class="empty">Log trades to see rankings.</div>';

  const velocity = Object.entries(state.items)
    .filter(([,v])=>v.trade_count>0 && v.avg_sell_time>0)
    .map(([name, info]) => {
      const hours = info.avg_sell_time / 60;
      const avgProfit = (info.avg_sell - info.avg_buy);
      const gpPerHour = hours > 0 ? avgProfit / hours : 0;
      const fmtTime = info.avg_sell_time < 60 ? Math.round(info.avg_sell_time) + 'm' : (info.avg_sell_time / 60).toFixed(1) + 'h';
      return {name, fmtTime, gpPerHour};
    })
    .sort((a,b)=>b.gpPerHour - a.gpPerHour);
  
  document.getElementById('velocity-list').innerHTML=velocity.length?velocity.slice(0,5).map((v,i)=>`
    <div class="item-row"><div class="rank-num ${i===0?'gold':''}">${i+1}</div><div class="item-name">${v.name}</div><div class="item-meta">${v.fmtTime} avg</div><div style="min-width:90px;text-align:right;"><span class="badge green">${v.gpPerHour > 0 ? fmtGP(v.gpPerHour) : '—'}/hr</span></div></div>`).join(''):'<div class="empty">Complete flips to see velocity.</div>';
}

function getStrategyProfileLabel(key){
  const labels = {
    conservative: 'Conservative',
    balanced: 'Balanced',
    aggressive: 'Aggressive',
    online_fractional: 'Fractional',
    online_antimartingale: 'Anti-Martingale',
    online_fractional_kelly: 'Fractional Kelly',
    custom_tiered: 'Custom Tiered'
  };
  return labels[key] || 'Balanced';
}

function getLocalDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getSlayerDailyAccessState() {
  state.slayer_daily_access = state.slayer_daily_access || { date:'', tasks:[] };
  const today = getLocalDateKey();
  if (state.slayer_daily_access.date !== today) {
    state.slayer_daily_access = { date: today, tasks: [] };
    saveState();
  }
  if (!Array.isArray(state.slayer_daily_access.tasks)) {
    state.slayer_daily_access.tasks = [];
  }
  return state.slayer_daily_access;
}

function hasUnlockedSlayerTask(task) {
  if (!task || isProUser()) return true;
  return getSlayerDailyAccessState().tasks.includes(task);
}

function getRemainingFreeSlayerTasks() {
  if (isProUser()) return Infinity;
  const access = getSlayerDailyAccessState();
  return Math.max(0, FREE_SLAYER_TASK_LIMIT - access.tasks.length);
}

function unlockSlayerTaskAccess(task) {
  if (!task || isProUser()) return true;
  const access = getSlayerDailyAccessState();
  if (access.tasks.includes(task)) return true;
  if (access.tasks.length >= FREE_SLAYER_TASK_LIMIT) return false;
  access.tasks.push(task);
  saveState();
  return true;
}

function updateSlayerAccessUI(task = '') {
  const note = document.getElementById('slayer-access-note');
  if (!note) return;
  if (isProUser()) {
    note.innerHTML = '<span class="guide-pill"><strong>Pro Active</strong> Unlimited Slayer boss access is unlocked.</span>';
    return;
  }
  const remaining = getRemainingFreeSlayerTasks();
  const unlocked = task ? hasUnlockedSlayerTask(task) : false;
  if (unlocked) {
    note.innerHTML = `<span class="guide-pill"><strong>Free Access</strong> ${remaining} of ${FREE_SLAYER_TASK_LIMIT} free Slayer boss opens left today after this unlocked task.</span>`;
    return;
  }
  note.innerHTML = `<span class="guide-pill"><strong>Free Tier</strong> ${remaining} of ${FREE_SLAYER_TASK_LIMIT} Slayer boss opens left today. Pro removes the daily cap.</span>`;
}

function hasBossGuideMedia(taskName){
  const media = BOSS_GUIDE_MEDIA[taskName];
  return Boolean(media && ((media.videos && media.videos.length) || (media.setups && media.setups.length)));
}

function escapeForAttr(value){
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderBossMediaSection(task) {
  const card = document.getElementById('slayer-boss-media-card');
  const container = document.getElementById('slayer-boss-media');
  if (!card || !container) return;

  const media = BOSS_GUIDE_MEDIA[task];
  if (!media || (!media.videos?.length && !media.setups?.length)) {
    card.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  const videoCards = (media.videos || []).map((url, index) => `
    <a class="boss-video-link" href="${url}" target="_blank" rel="noopener noreferrer">
      <span>🎥 Guide video ${media.videos.length > 1 ? index + 1 : ''}</span>
      <span>Open ↗</span>
    </a>
  `).join('');

  const setupCards = (media.setups || []).map(setup => `
    <div class="boss-setup-card">
      <div class="boss-setup-label">${setup.label}</div>
      <img 
        src="${setup.imageUrl}" 
        alt="${setup.label}" 
        loading="lazy"
        style="cursor: zoom-in;"
        onerror="this.style.opacity='0.4'; this.style.border='1px dashed var(--border)'; this.alt='Image failed to load - try opening wiki link';"
        onclick="openImageLightbox('${escapeForAttr(setup.imageUrl)}', '${escapeForAttr(task + ' - ' + setup.label)}')"
      >
    </div>
  `).join('');

  container.innerHTML = `
    <div class="boss-media-grid">
      <div class="boss-video-list">
        ${videoCards || `<div class="profit-preview" style="margin:0;">No video linked.</div>`}
      </div>
      ${setupCards}
    </div>
    <div class="boss-media-links">
      <span>${media.note || 'Guide media from Impact Wiki'}</span>
      <a href="${media.wikiUrl}" target="_blank" rel="noopener noreferrer">📖 Open full wiki guide</a>
    </div>
  `;

  card.classList.remove('hidden');
}

function handleLightboxKeydown(e) {
  if (e.key === 'Escape' || e.key.toLowerCase() === 'x') {
    closeImageLightbox();
  }
}

function openImageLightbox(src, caption) {
  const overlay = document.getElementById('image-lightbox');
  const image = document.getElementById('lightbox-image');
  const captionEl = document.getElementById('lightbox-caption');
  if (!overlay || !image) return;
  
  image.src = src;
  image.alt = caption || 'Boss setup';
  if (captionEl) captionEl.textContent = caption;
  
  // Bigger zoom: near-fullscreen
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.style.width = 'min(98vw, 1800px)';  // Wider cap
    lightbox.style.maxHeight = '98vh';
    lightbox.style.padding = '1rem';  // Thin padding
    lightbox.style.margin = 'auto';   // Center
  }
  overlay.classList.remove('hidden');
}

document.addEventListener('keydown', handleLightboxKeydown);

function closeImageLightbox() {
  const overlay = document.getElementById('image-lightbox');
  if (overlay) {
    overlay.classList.add('hidden');
  }
}

function clearMarketplaceForm() {
  ['mp-username', 'mp-price', 'mp-contact', 'mp-description'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function renderMarketplaceStats() {
  const listings = state.marketplace_listings || [];
  const activeListings = listings.filter(entry => entry.status === 'active');
  const pendingListings = listings.filter(entry => entry.status === 'pending');
  const openListings = listings.filter(entry => entry.status === 'active' || entry.status === 'pending');
  const totalValue = activeListings.reduce((sum, entry) => sum + (Number(entry.price) || 0), 0);

  const activeCountEl = document.getElementById('mp-active-count');
  const pendingCountEl = document.getElementById('mp-pending-count');
  const totalValueEl = document.getElementById('mp-total-value');
  const yourListingsEl = document.getElementById('mp-your-listings');

  if (activeCountEl) activeCountEl.textContent = activeListings.length.toLocaleString();
  if (pendingCountEl) pendingCountEl.textContent = pendingListings.length.toLocaleString();
  if (totalValueEl) totalValueEl.textContent = `${fmtGP(totalValue)} GP`;
  if (yourListingsEl) yourListingsEl.textContent = openListings.length.toLocaleString();
}

function getMarketplaceCardMarkup(entry, mode = 'active') {
  const statusLabel = entry.status === 'pending' ? 'Pending Approval' : entry.status === 'active' ? 'Live Listing' : entry.status;
  const canModeratePending = mode === 'pending' && isStaffUser();
  const isOwner = isMarketplaceListingOwner(entry);
  const canModActive = mode === 'active' && (isStaffUser() || isOwner);
  const canCancel = mode === 'active' && isOwner && !isStaffUser();
  const actions = mode === 'pending'
    ? (canModeratePending
      ? `
      <button class="btn primary" onclick="approveMarketplaceListing('${entry.id}')">Approve</button>
      <button class="btn" onclick="modCancelListing('${entry.id}')">Reject</button>
    `
      : (isOwner ? `<button class="btn btn-sm" onclick="cancelMyListing('${entry.id}')">Cancel</button>` : `<span class="marketplace-meta">Awaiting mod review</span>`))
    : (canModActive
      ? `
      <button class="btn primary" onclick="markMarketplaceSold('${entry.id}')">Mark Sold</button>
      ${isStaffUser() ? `<button class="btn" onclick="modCancelListing('${entry.id}')">Cancel</button>` : ''}
    `
      : '');

  const usernameDisplay = `<span style="font-size:22px;font-weight:700;color:var(--text);letter-spacing:0.02em;">${escapeHtml(entry.username)}</span>`;
  const sellerInfo = entry.seller_email ? `<span style="color:var(--hint);">by ${escapeHtml(entry.seller)}</span>` : '';
  
  if (mode === 'active') {
    return `
      <div class="marketplace-card ${entry.status}" style="border:1px solid rgba(61,217,197,0.2);padding:20px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;">
          <div>
            <div style="margin-bottom:8px;">${usernameDisplay}</div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Listed by ${escapeHtml(entry.seller)}</div>
            ${entry.description ? `<div style="font-size:13px;color:var(--hint);margin-top:8px;">${escapeHtml(entry.description)}</div>` : ''}
          </div>
          <div style="text-align:right;">
            <div style="font-size:28px;font-weight:700;color:var(--green);">${fmtGP(entry.price)}</div>
            <div style="font-size:11px;color:var(--muted);">GP</div>
          </div>
        </div>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div style="font-size:12px;">
            <span style="color:var(--hint);">Contact:</span> <span style="color:var(--accent);">${escapeHtml(entry.contact)}</span>
            <span style="color:var(--hint);margin-left:16px;">Listed:</span> <span style="color:var(--muted);">${entry.date}</span>
          </div>
          <div class="marketplace-actions">${actions}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="marketplace-card ${entry.status}">
      <div class="marketplace-card-top">
        <div>
          <div class="marketplace-name">${entry.username}</div>
          <div class="marketplace-meta">${statusLabel} · ${entry.contact || 'No contact set'} · ${fmtGP(entry.listing_fee || MARKETPLACE_LISTING_FEE)} GP fee</div>
        </div>
        <div class="marketplace-price">${fmtGP(entry.price)} GP</div>
      </div>
      ${entry.description ? `<div class="marketplace-desc">${entry.description}</div>` : ''}
      <div class="marketplace-footer">
        <span>Listed ${entry.date}</span>
        <div class="marketplace-actions">${actions}</div>
      </div>
    </div>
  `;
}

function renderMarketplacePending() {
  const container = document.getElementById('mp-pending-list');
  if (!container) return;

  const search = document.getElementById('mp-pending-search')?.value.trim().toLowerCase() || '';
  const listings = (state.marketplace_listings || [])
    .filter(entry => entry.status === 'pending')
    .filter(entry => !search || entry.username.toLowerCase().includes(search) || entry.contact.toLowerCase().includes(search));

  container.innerHTML = listings.length
    ? listings.map(entry => getMarketplaceCardMarkup(entry, 'pending')).join('')
    : '<div class="empty">No pending listings</div>';
}

function renderMarketplaceListings() {
  const container = document.getElementById('mp-listings-grid');
  if (!container) return;

  const search = document.getElementById('mp-search')?.value.trim().toLowerCase() || '';
  const sortBy = document.getElementById('mp-sort')?.value || 'recent';
  const listings = (state.marketplace_listings || [])
    .filter(entry => entry.status === 'active')
    .filter(entry => !search || entry.username.toLowerCase().includes(search) || entry.contact.toLowerCase().includes(search) || entry.description.toLowerCase().includes(search))
    .sort((a, b) => {
      if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
      if (sortBy === 'alpha') return a.username.localeCompare(b.username);
      return String(b.date).localeCompare(String(a.date));
    });

  container.innerHTML = listings.length
    ? listings.map(entry => getMarketplaceCardMarkup(entry, 'active')).join('')
    : '<div class="empty">No usernames listed yet</div>';
}

function renderMarketplace() {
  renderMarketplaceStats();
  renderMyPendingListings();
  renderMarketplacePending();
  renderMarketplaceListings();
  viewMyTickets();
}

function renderMyPendingListings() {
  const listContainer = document.getElementById('mp-my-pending-list');
  const emptyContainer = document.getElementById('mp-my-pending-empty');
  if (!listContainer || !emptyContainer) return;
  
  const currentUser = getCurrentUser();
  if (!currentUser?.email) {
    listContainer.innerHTML = '';
    emptyContainer.innerHTML = '<div class="empty">Sign in to see your pending listings</div>';
    emptyContainer.style.display = 'block';
    return;
  }
  
  const myPending = (state.marketplace_listings || [])
    .filter(l => l.status === 'pending' && l.seller_email === currentUser.email);
  
  if (myPending.length === 0) {
    listContainer.innerHTML = '';
    emptyContainer.innerHTML = '<div class="empty">No pending listings. Submit a listing above.</div>';
    emptyContainer.style.display = 'block';
    return;
  }
  
  emptyContainer.style.display = 'none';
  listContainer.innerHTML = myPending.map(l => `
    <div class="item-row" style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:8px;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:600;font-size:14px;color:var(--accent);">${escapeHtml(l.username)}</div>
        <div style="font-size:12px;">${fmtGP(l.price)} GP</div>
        <div style="font-size:11px;color:var(--muted);">Contact: ${escapeHtml(l.contact)}</div>
      </div>
      <div class="btn-row">
        <button class="btn btn-sm" onclick="cancelMyListing('${l.id}')">Cancel</button>
      </div>
    </div>
  `).join('');
}

async function submitMarketplaceListing() {
  if (!currentUser) {
    openAuthModal('signup');
    setAuthStatus('Create or sign in to an account before posting a username listing.', 'error');
    return;
  }
  if (!currentUser.email_verified) {
    openVerifyModal();
    setVerifyStatus('Verify your email before posting a marketplace listing.', 'error');
    return;
  }
  if (isEmailBanned(getActorEmail())) {
    alert('Your account cannot post marketplace listings.');
    return;
  }
  const username = document.getElementById('mp-username')?.value.trim();
  const price = parseGP(document.getElementById('mp-price')?.value);
  const contact = document.getElementById('mp-contact')?.value.trim();
  const description = document.getElementById('mp-description')?.value.trim() || '';

  if (!username || price <= 0 || !contact) {
    alert('Enter a username, asking price, and contact method.');
    return;
  }

  const duplicate = (state.marketplace_listings || []).some(entry =>
    ['pending', 'active'].includes(entry.status) &&
    entry.username.toLowerCase() === username.toLowerCase()
  );
  if (duplicate) {
    alert('That username already has a pending or active listing.');
    return;
  }

  const listingId = generateId();
  const listing = {
    id: listingId,
    username,
    price,
    contact,
    description,
    seller: currentUser.display_name || currentUser.email,
    seller_email: currentUser.email,
    status: 'pending',
    listing_fee: MARKETPLACE_LISTING_FEE,
    date: new Date().toISOString().slice(0,16).replace('T',' ')
  };

  const ticket = {
    id: generateId(),
    type: 'deposit',
    listing_id: listingId,
    username,
    amount: MARKETPLACE_LISTING_FEE,
    contact,
    description,
    status: 'open',
    created_by: currentUser.email,
    created_by_display: currentUser.display_name || currentUser.email,
    created_at: Date.now(),
    messages: [{
      id: generateId(),
      sender: currentUser.email,
      sender_display: currentUser.display_name || currentUser.email,
      text: `I want to list "${username}" for ${fmtGP(price)} GP. I've deposited the ${fmtGP(MARKETPLACE_LISTING_FEE)} GP listing fee. My contact: ${contact}${description ? '. Notes: ' + description : ''}`,
      timestamp: Date.now(),
      isStaff: false
    }]
  };

  try {
    await postCommunityAction('submit_listing', { listing, ticket });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not submit the listing.');
      return;
    }
    state.marketplace_listings.unshift(listing);
    state.tickets = state.tickets || [];
    state.tickets.unshift(ticket);
    saveState();
  }
  trackUserActivity();
  clearMarketplaceForm();
  renderMarketplace();
  alert(`Listing submitted! Contact an Impact MOD in your ticket below to verify your ${fmtGP(MARKETPLACE_LISTING_FEE)} GP deposit.`);
}

async function cancelMyListing(listingId) {
  const listing = (state.marketplace_listings || []).find(l => l.id === listingId);
  if (!listing) return;
  
  const currentUser = getCurrentUser();
  if (!currentUser || listing.seller_email !== currentUser.email) {
    alert('You can only cancel your own listings.');
    return;
  }
  
  if (!confirm(`Cancel listing for "${listing.username}"?`)) return;
  
  try {
    await postCommunityAction('update_listing_status', { listing_id: listingId, status: 'cancelled' });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not cancel the listing.');
      return;
    }
    listing.status = 'cancelled';
    saveState();
  }
  renderMarketplace();
  alert('Listing cancelled.');
}

async function modCancelListing(listingId) {
  if (!isStaffUser()) return;
  
  const listing = (state.marketplace_listings || []).find(l => l.id === listingId);
  if (!listing) return;
  
  const reason = prompt('Reason for cancelling this listing:', 'Violation of marketplace rules');
  if (!reason) return;
  
  const cancelledBy = getCurrentUser()?.email || '';
  const cancelledAt = new Date().toISOString().slice(0,16).replace('T',' ');
  try {
    await postCommunityAction('update_listing_status', {
      listing_id: listingId,
      status: 'cancelled',
      cancelled_by: cancelledBy,
      cancelled_reason: reason,
      cancelled_at: cancelledAt
    });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not cancel the listing.');
      return;
    }
    listing.status = 'cancelled';
    listing.cancelled_by = cancelledBy;
    listing.cancelled_reason = reason;
    listing.cancelled_at = cancelledAt;
    saveState();
  }
  renderModPendingListings();
  renderMarketplaceListings();
}

async function createDepositTicketFromForm() {
  if (!currentUser) {
    openAuthModal('signup');
    setAuthStatus('Sign in to create a deposit ticket.', 'error');
    return;
  }
  
  const username = document.getElementById('ticket-username')?.value.trim();
  const amountStr = document.getElementById('ticket-amount')?.value.trim();
  const contact = document.getElementById('ticket-contact')?.value.trim();
  const description = document.getElementById('ticket-description')?.value.trim() || '';
  
  if (!username) {
    alert('Enter the username you want to list.');
    return;
  }
  
  const amount = parseGP(amountStr) || 0;
  if (amount <= 0) {
    alert('Enter the deposit amount in GP.');
    return;
  }
  
  await createDepositTicket(username, amount, contact, description);
  
  document.getElementById('ticket-username').value = '';
  document.getElementById('ticket-amount').value = '';
  document.getElementById('ticket-contact').value = '';
  document.getElementById('ticket-description').value = '';
}

function viewMyTickets() {
  const container = document.getElementById('my-tickets-list');
  if (!container) return;
  
  const currentUser = getCurrentUser();
  if (!currentUser?.email) {
    container.innerHTML = '<div class="empty">Sign in to view your tickets.</div>';
    return;
  }
  
  const myTickets = (state.tickets || []).filter(t => t.created_by === currentUser.email);
  
  if (!myTickets.length) {
    container.innerHTML = '<div class="empty">No tickets yet. Start a deposit ticket above.</div>';
    return;
  }
  
  container.innerHTML = myTickets.map(ticket => `
    <div style="border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;background:var(--surface2);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <div style="font-weight:600;">${escapeHtml(ticket.username)} — ${fmtGP(ticket.amount)} GP</div>
          <div style="font-size:11px;color:var(--hint);">${timeAgo(ticket.created_at)}</div>
        </div>
        <span style="font-size:11px;padding:4px 8px;border-radius:4px;background:${ticket.status === 'open' ? 'rgba(255,209,102,0.2)' : 'rgba(61,217,197,0.2)'};color:${ticket.status === 'open' ? 'var(--amber)' : 'var(--accent)'};">${ticket.status.toUpperCase()}</span>
      </div>
      ${ticket.status === 'open' ? `
        <div style="max-height:150px;overflow-y:auto;margin-bottom:8px;font-size:12px;">
          ${(ticket.messages || []).slice(-5).map(msg => `
            <div style="margin-bottom:4px;">
              <span style="color:${msg.isStaff ? 'var(--accent)' : 'var(--muted)'};font-weight:600;">${escapeHtml(msg.sender_display)}:</span>
              ${escapeHtml(msg.text)}
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:8px;">
          <input type="text" id="myticket-input-${ticket.id}" placeholder="Reply..." style="flex:1;font-size:12px;" onkeydown="if(event.key==='Enter')sendTicketMessage('${ticket.id}')">
          <button class="btn-sm" onclick="sendTicketMessage('${ticket.id}')">Send</button>
        </div>
      ` : '<div style="font-size:12px;color:var(--muted);">Ticket closed.</div>'}
    </div>
  `).join('');
}

async function updateMarketplaceListingStatus(listingId, status) {
  const entry = (state.marketplace_listings || []).find(item => item.id === listingId);
  if (!entry) return;
  try {
    await postCommunityAction('update_listing_status', { listing_id: listingId, status });
  } catch (e) {
    if (!canUseLocalCommunityFallback()) {
      alert(e.message || 'Could not update the listing.');
      return;
    }
    entry.status = status;
    saveState();
  }
  renderMarketplace();
}

function approveMarketplaceListing(listingId) {
  if (!isStaffUser()) {
    alert('Only staff can approve listings.');
    return;
  }
  void updateMarketplaceListingStatus(listingId, 'active');
}

function rejectMarketplaceListing(listingId) {
  if (!isStaffUser()) {
    alert('Only staff can reject listings.');
    return;
  }
  void updateMarketplaceListingStatus(listingId, 'rejected');
}

function markMarketplaceSold(listingId) {
  const entry = (state.marketplace_listings || []).find(item => item.id === listingId);
  if (!entry || (!isStaffUser() && !isMarketplaceListingOwner(entry))) {
    alert('Only the seller or staff can update this listing.');
    return;
  }
  void updateMarketplaceListingStatus(listingId, 'sold');
}

function removeMarketplaceListing(listingId) {
  const entry = (state.marketplace_listings || []).find(item => item.id === listingId);
  if (!entry || (!isStaffUser() && !isMarketplaceListingOwner(entry))) {
    alert('Only the seller or staff can update this listing.');
    return;
  }
  void updateMarketplaceListingStatus(listingId, 'removed');
}

function renderSlayerTaskOptions(filter = ''){
  const sel = document.getElementById('slayer-task');
  if(!sel) return;
  const currentValue = sel.value;
  const needle = filter.trim().toLowerCase();
  const matching = SLAYER_TASKS.filter(task => !needle || task.name.toLowerCase().includes(needle));
  if(!matching.length){
    sel.innerHTML = '<option value="">No matching tasks</option>';
    return;
  }
  const groups = {
    normal: matching.filter(task => task.tier === 'normal'),
    hard: matching.filter(task => task.tier === 'hard'),
    elite: matching.filter(task => task.tier === 'elite')
  };
  const optionsHtml = Object.entries(groups)
    .filter(([, tasks]) => tasks.length)
    .map(([tier, tasks]) => {
      const label = tier === 'normal' ? 'Normal tier' : tier === 'hard' ? 'Hard tier' : 'Elite tier';
      const options = tasks
        .sort((a, b) => {
          const favDiff = Number(state.slayer_favorites.includes(b.name)) - Number(state.slayer_favorites.includes(a.name));
          return favDiff || a.name.localeCompare(b.name);
        })
        .map(task => `<option value="${task.name}">${state.slayer_favorites.includes(task.name) ? '★ ' : ''}${task.name}</option>`)
        .join('');
      return `<optgroup label="${label}">${options}</optgroup>`;
    })
    .join('');
  sel.innerHTML = `<option value="">Choose a task</option>${optionsHtml}`;
  if (currentValue && [...sel.options].some(option => option.value === currentValue)) {
    sel.value = currentValue;
  }
}

function toggleSlayerFavorite(){
  if(!requireProFeature('Slayer favorites')) return;
  const task = document.getElementById('slayer-task')?.value;
  if(!task) return;
  const idx = state.slayer_favorites.indexOf(task);
  if(idx > -1){
    state.slayer_favorites.splice(idx, 1);
  } else {
    state.slayer_favorites.unshift(task);
  }
  saveState();
  populateSlayerTaskSelect();
  showTaskGuide();
}

function saveSlayerNote(){
  if(!requireProFeature('Private Slayer notes')) return;
  const task = document.getElementById('slayer-task')?.value;
  const note = document.getElementById('slayer-note')?.value.trim() || '';
  if(!task) return;
  if(note){
    state.slayer_notes[task] = note;
  } else {
    delete state.slayer_notes[task];
  }
  saveState();
  showTaskGuide();
}

function populateSlayerTaskSelect(){
  const sel = document.getElementById('slayer-task');
  if(!sel) return;
  const selected = sel.value;
  renderSlayerTaskOptions(document.getElementById('slayer-task-search')?.value || '');
  const exists = [...sel.options].some(option => option.value === selected);
  if(exists) sel.value = selected;
}

function onSlayerTaskChange(){
  const sel = document.getElementById('slayer-task');
  if(!sel) return;
  const task = sel.value;
  const previous = sel.dataset.unlockedTask || '';
  if(!task){
    showTaskGuide();
    return;
  }
  if(!unlockSlayerTaskAccess(task)){
    sel.value = previous;
    updateSlayerAccessUI(previous);
    showTaskGuide();
    openPricingModal('pro');
    setPricingStatus(`Free members can open ${FREE_SLAYER_TASK_LIMIT} Slayer bosses per day. Pro removes the daily cap.`, 'error');
    return;
  }
  sel.dataset.unlockedTask = task;
  updateSlayerAccessUI(task);
  showTaskGuide();
}

function showTaskGuide(){
  const task = document.getElementById('slayer-task')?.value;
  const meta = SLAYER_TASKS.find(entry => entry.name === task);
  const summary = document.getElementById('slayer-guide-summary');
  const favoriteState = document.getElementById('slayer-favorite-state');
  const noteField = document.getElementById('slayer-note');
  if(!meta){
    document.getElementById('slayer-guide').textContent = 'Choose a task to see route and tips.';
    if(summary) summary.textContent = 'This section only includes bosses with verified wiki guide coverage.';
    if(favoriteState) favoriteState.innerHTML = 'Not Favorited';
    if(noteField) noteField.value = '';
    updateSlayerAccessUI('');
    renderBossMediaSection('');
    return;
  }
  if(!isProUser() && !hasUnlockedSlayerTask(task)){
    const remaining = getRemainingFreeSlayerTasks();
    document.getElementById('slayer-guide').innerHTML = `Select <strong>${task}</strong> to use 1 of your ${FREE_SLAYER_TASK_LIMIT} free daily Slayer boss opens. ${remaining} remaining today.`;
    if(summary){
      summary.innerHTML = `<span class="guide-pill"><strong>Free Preview</strong> ${remaining} of ${FREE_SLAYER_TASK_LIMIT} daily boss opens remaining</span>`;
    }
    if(favoriteState) favoriteState.innerHTML = 'Pro only';
    if(noteField) noteField.value = '';
    updateSlayerAccessUI(task);
    renderBossMediaSection('');
    return;
  }
  const tierLabel = meta.tier === 'normal' ? 'Normal' : meta.tier === 'hard' ? 'Hard' : 'Elite';
  const personalNote = state.slayer_notes?.[task];
  document.getElementById('slayer-guide').innerHTML = `${meta.guide}<br><span style="color:var(--hint);">${tierLabel} task bracket. Search lets you jump straight to any supported task.</span>${personalNote ? `<br><br><span style="color:var(--text);">Saved note:</span> <span style="color:var(--muted);">${personalNote}</span>` : ''}`;
  if(summary){
    summary.innerHTML = `<span class="guide-pill"><strong>Wiki Ready</strong> Verified media from the Impact wiki is available below</span>`;
  }
  if(favoriteState){
    favoriteState.innerHTML = state.slayer_favorites.includes(task) ? 'Favorited Boss' : 'Not Favorited';
  }
  if(noteField){
    noteField.value = personalNote || '';
  }
  updateSlayerAccessUI(task);
  renderBossMediaSection(task);
}

function filterSlayerTasks(){
  const sel = document.getElementById('slayer-task');
  if(!sel) return;
  const previous = sel.value;
  renderSlayerTaskOptions(document.getElementById('slayer-task-search')?.value || '');
  const hasPrevious = [...sel.options].some(option => option.value === previous);
  sel.value = hasPrevious ? previous : sel.options[0]?.value || '';
  showTaskGuide();
}

function logSlayerGP(){
  if (!ensureRegisteredUser('log Slayer sessions')) return;
  const task = document.getElementById('slayer-task').value;
  const gp = parseGP(document.getElementById('slayer-gp').value);
  const minutes = parseInt(document.getElementById('slayer-minutes').value, 10) || 0;
  const account = document.getElementById('slayer-account').value;
  if(!task || gp <= 0){
    alert('Enter a task and GP earned.');
    return;
  }
  const actorEmail = getActorEmail();
  state.slayer_logs.unshift({
    id: generateId(),
    task,
    gp,
    minutes,
    account,
    date: new Date().toISOString().slice(0,16).replace('T',' '),
    actor_email: actorEmail || undefined,
    actor_display: actorEmail ? getActorDisplay() : undefined
  });
  saveState();
  trackUserActivity();
  recalcItemStats();
  render();
  document.getElementById('slayer-gp').value = '';
  document.getElementById('slayer-minutes').value = '';
}

function logFpSession(){
  if (!ensureRegisteredUser('log FP sessions')) return;
  const bankroll = getFpWorkingBankroll();
  const baseStake = getFpWorkingBaseStake();
  const result = document.getElementById('fp-result').value;
  const profileKey = getSelectedStrategyProfile();
  if(bankroll <= 0){
    alert('Enter FP bankroll first so the app can calculate the next stake.');
    return;
  }
  const plan = buildFpStakePlan({ bankroll, baseStake, profileKey });
  const stake = plan.nextStake;
  let net = 0;
  if(result === 'custom'){
    net = parseGP(document.getElementById('fp-net').value);
    if(String(document.getElementById('fp-net').value).trim().startsWith('-')) net = -Math.abs(net);
    if(!net){
      alert('Enter a custom net amount.');
      return;
    }
  } else {
    if(stake <= 0){
      alert('Set a valid base stake first.');
      return;
    }
    net = result === 'win' ? stake : -stake;
  }
  const bankrollAfter = Math.max(0, bankroll + net);
  const actorEmail = getActorEmail();
  state.fp_logs.unshift({
    id: generateId(),
    stake,
    base_stake: plan.baseStake,
    net,
    result,
    profile: profileKey,
    bankroll_after: bankrollAfter,
    date: new Date().toISOString().slice(0,16).replace('T',' '),
    actor_email: actorEmail || undefined,
    actor_display: actorEmail ? getActorDisplay() : undefined
  });
  state.fp_settings.bankroll = bankrollAfter;
  state.fp_settings.base_stake = plan.baseStake;
  saveState();
  trackUserActivity();
  recalcItemStats();
  render();
  document.getElementById('fp-net').value = '';
  const bankrollField = document.getElementById('fp-bankroll');
  if(bankrollField) bankrollField.value = bankrollAfter ? fmtGP(bankrollAfter).replace(/,/g,'') : '';
  const baseStakeField = document.getElementById('fp-base-stake');
  if(baseStakeField) baseStakeField.value = plan.baseStake ? fmtGP(plan.baseStake).replace(/,/g,'') : '';
  refreshFpStakePreview();
  const guardrailMsg = evaluateFpGuardrails();
  if(guardrailMsg) alert(guardrailMsg);
}

function getFpStreak(){
  let wins = 0;
  let losses = 0;
  for(const entry of state.fp_logs){
    if((Number(entry.net) || 0) > 0){
      if(losses > 0) break;
      wins += 1;
    }else if((Number(entry.net) || 0) < 0){
      if(wins > 0) break;
      losses += 1;
    }else{
      break;
    }
  }
  return { wins, losses };
}

function getSelectedStrategyProfile(){
  return document.getElementById('plan-risk')?.value || state.strategy_settings.selected || 'balanced';
}

function getFpStakeModel(profileKey = getSelectedStrategyProfile()){
  return FP_STAKE_MODELS[profileKey] || FP_STAKE_MODELS.balanced;
}

function getFpWorkingBankroll(){
  const bankrollInput = parseGP(document.getElementById('fp-bankroll')?.value || 0);
  const fallbackPlanBankroll = parseGP(document.getElementById('plan-current-bank')?.value || 0);
  return bankrollInput || fallbackPlanBankroll || state.fp_settings.bankroll || 0;
}

function getFpWorkingBaseStake(){
  const baseStakeInput = parseGP(document.getElementById('fp-base-stake')?.value || 0);
  return baseStakeInput || state.fp_settings.base_stake || 0;
}

function getFpStakeFloor(bankroll){
  if(bankroll <= 0) return 0;
  if(bankroll >= 15_000_000_000) return 50_000_000;
  if(bankroll >= 5_000_000_000) return 25_000_000;
  if(bankroll >= 1_000_000_000) return 10_000_000;
  if(bankroll >= 250_000_000) return 5_000_000;
  return Math.max(1_000_000, Math.round(bankroll * 0.005));
}

function getFpStakeCap(bankroll, model){
  if(bankroll <= 0 || !model) return 0;
  return Math.min(bankroll, Math.round(bankroll * model.capPct));
}

function clampFpStake(stake, bankroll, model){
  const cap = getFpStakeCap(bankroll, model);
  if(cap <= 0) return 0;
  const floor = Math.min(cap, getFpStakeFloor(bankroll));
  return Math.min(cap, Math.max(floor, Math.round(stake)));
}

function getBestFpStrategyRecommendation(bankroll){
  if(bankroll <= 0){
    return {
      profileKey: 'balanced',
      methodLabel: 'Need bankroll input',
      targetPct: FP_STAKE_MODELS.balanced.suggestedPct,
      why: 'Enter an FP bankroll first so the app can choose a method and size the base stake.'
    };
  }

  if(bankroll < 750_000_000){
    return {
      profileKey: 'conservative',
      methodLabel: 'Best current fit: flat fixed-fraction',
      targetPct: 0.0125,
      why: 'Smaller bankrolls usually do best by staying boring: flat 1.25% stakes, no pressing, no chasing.'
    };
  }

  if(bankroll < 5_000_000_000){
    return {
      profileKey: 'balanced',
      methodLabel: 'Best current fit: balanced flat betting',
      targetPct: 0.0175,
      why: 'This range is usually strongest with flat 1.75% stakes and a hard cap, which keeps drawdowns manageable.'
    };
  }

  if(bankroll < 15_000_000_000){
    return {
      profileKey: 'online_fractional',
      methodLabel: 'Best current fit: flat bankroll percentage',
      targetPct: 0.02,
      why: 'A clean 2% bankroll model scales up smoothly without the blow-up risk of larger progression systems.'
    };
  }

  return {
    profileKey: 'online_antimartingale',
    methodLabel: 'Best current fit: capped anti-martingale',
    targetPct: 0.018,
    why: 'If you want a streak-based method, this is the safest version here: one tiny press after a win, then cash out after 2 wins.'
  };
}

function syncFpInputsToState(){
  const bankrollRaw = document.getElementById('fp-bankroll')?.value || '';
  const baseStakeRaw = document.getElementById('fp-base-stake')?.value || '';
  const stopLossRaw = document.getElementById('fp-stoploss')?.value || '';
  const takeProfitRaw = document.getElementById('fp-takeprofit')?.value || '';
  const bankroll = parseGP(bankrollRaw);
  const baseStake = parseGP(baseStakeRaw);
  const stopLoss = parseGP(stopLossRaw);
  const takeProfit = parseGP(takeProfitRaw);
  if(bankroll > 0) state.fp_settings.bankroll = bankroll;
  if(baseStake > 0) state.fp_settings.base_stake = baseStake;
  if(String(stopLossRaw).trim() !== '') state.fp_settings.stop_loss = stopLoss > 0 ? stopLoss : 0;
  if(String(takeProfitRaw).trim() !== '') state.fp_settings.take_profit = takeProfit > 0 ? takeProfit : 0;
  saveState();
}

function getSuggestedFpBaseStake(bankroll, profileKey = getSelectedStrategyProfile()){
  if(bankroll <= 0) return 0;
  const model = getFpStakeModel(profileKey);
  return clampFpStake(bankroll * model.suggestedPct, bankroll, model);
}

function buildFpStakePlan({ bankroll = 0, baseStake = 0, profileKey = getSelectedStrategyProfile(), streak = getFpStreak() } = {}){
  const model = getFpStakeModel(profileKey);
  const cap = getFpStakeCap(bankroll, model);
  const fallbackBase = bankroll > 0 ? getSuggestedFpBaseStake(bankroll, profileKey) : 0;
  const rawBase = baseStake > 0 ? baseStake : fallbackBase;
  const sanitizedBase = bankroll > 0 ? clampFpStake(rawBase, bankroll, model) : rawBase;
  let nextStake = sanitizedBase;
  let action = model.note;

  if(streak.losses > 0){
    nextStake = sanitizedBase;
    action = "Loss streak detected. Reset to base stake.";
  } else if(model.cashOutAfter && streak.wins >= model.cashOutAfter){
    nextStake = sanitizedBase;
    action = `Cash-out point reached after ${model.cashOutAfter} straight wins. Reset to base.`;
  } else if(model.pressSequence.length > 1 && streak.wins > 0){
    const idx = Math.min(streak.wins, model.pressSequence.length - 1);
    nextStake = Math.round(sanitizedBase * model.pressSequence[idx]);
    if(cap > 0) nextStake = Math.min(nextStake, cap);
    action = `Short heater detected. Mild press only, still capped at ${Math.round(model.capPct * 100)}% of bankroll.`;
  }

  return {
    model,
    cap,
    baseStake: sanitizedBase,
    nextStake,
    streak,
    profileKey,
    baseWasCapped: rawBase > 0 && cap > 0 && rawBase > cap,
    action
  };
}

function refreshFpStakePreview(){
  syncFpInputsToState();
  const bankroll = getFpWorkingBankroll();
  const baseStake = getFpWorkingBaseStake();
  const profileKey = getSelectedStrategyProfile();
  const plan = buildFpStakePlan({ bankroll, baseStake, profileKey });
  const recommendation = getBestFpStrategyRecommendation(bankroll);
  const nextStakeEl = document.getElementById('fp-next-stake');
  if(nextStakeEl){
    nextStakeEl.value = plan.nextStake > 0 ? fmtGP(plan.nextStake).replace(/,/g,'') : '';
  }
  const hint = document.getElementById('fp-hint');
  if(!hint) return plan;
  if(bankroll <= 0){
    hint.innerHTML = 'Enter FP bankroll to auto-calculate a capped next stake. In a fair 50/50, the strongest default is usually flat sizing, while mild anti-martingale only makes sense as a very short, capped heater play.';
    return plan;
  }
  const streakLabel = plan.streak.wins ? `W${plan.streak.wins}` : plan.streak.losses ? `L${plan.streak.losses}` : 'Neutral';
  const capText = plan.cap ? `${fmtGP(plan.cap)} GP` : '—';
  const baseText = plan.baseStake ? `${fmtGP(plan.baseStake)} GP` : '—';
  const recommendedLabel = STRATEGY_LIBRARY[recommendation.profileKey]?.label || recommendation.profileKey;
  const selectedLabel = STRATEGY_LIBRARY[profileKey]?.label || 'Balanced';
  const recommendationDiffers = recommendation.profileKey !== profileKey;
  hint.innerHTML = `Best bankroll method: <span style="color:var(--green);font-weight:700;">${recommendation.methodLabel}</span> · Recommended profile: <span style="color:var(--accent);font-weight:700;">${recommendedLabel}</span>.<br>${recommendation.why}<br>Current model: <span style="color:var(--accent);font-weight:700;">${selectedLabel}</span> · Base: ${baseText} · Next: <span style="color:var(--amber);font-weight:700;">${plan.nextStake ? fmtGP(plan.nextStake) : '—'} GP</span> · Hard cap: ${capText}.<br>Streak: ${streakLabel}. ${plan.action}${plan.baseWasCapped ? ` Base was capped down to stay under ${Math.round(plan.model.capPct * 100)}% bankroll.` : ''}${recommendationDiffers ? ' Auto-Fill will switch you to the recommended profile for this bankroll size.' : ''}`;
  return plan;
}

function suggestFpStake(){
  if(!requireProFeature('FP auto-fill assistant')) return;
  const bankroll = getFpWorkingBankroll();
  if(bankroll <= 0){
    alert('Enter FP bankroll (or Current Bank in planner) first.');
    return;
  }
  const recommendation = getBestFpStrategyRecommendation(bankroll);
  const suggested = clampFpStake(bankroll * recommendation.targetPct, bankroll, getFpStakeModel(recommendation.profileKey));
  document.getElementById('fp-base-stake').value = fmtGP(suggested).replace(/,/g,'');
  const riskSelect = document.getElementById('plan-risk');
  if(riskSelect) riskSelect.value = recommendation.profileKey;
  state.strategy_settings.selected = recommendation.profileKey;
  state.fp_settings.bankroll = bankroll;
  state.fp_settings.base_stake = suggested;
  saveState();
  updatePlanUI();
  refreshFpStakePreview();
}

function saveFpGuardrails(){
  const bankroll = getFpWorkingBankroll();
  const baseStake = parseGP(document.getElementById('fp-base-stake').value) || state.fp_settings.base_stake;
  const stopLoss = parseGP(document.getElementById('fp-stoploss').value);
  const takeProfit = parseGP(document.getElementById('fp-takeprofit').value);
  if(bankroll <= 0){
    alert('Enter FP bankroll first.');
    return;
  }
  const plan = buildFpStakePlan({ bankroll, baseStake });
  state.fp_settings.bankroll = bankroll;
  state.fp_settings.base_stake = plan.baseStake;
  state.fp_settings.stop_loss = Math.max(0, stopLoss);
  state.fp_settings.take_profit = Math.max(0, takeProfit);
  saveState();
  if(document.getElementById('fp-base-stake')){
    document.getElementById('fp-base-stake').value = plan.baseStake ? fmtGP(plan.baseStake).replace(/,/g,'') : '';
  }
  refreshFpStakePreview();
  document.getElementById('fp-hint').innerHTML += `<br>Guardrails saved. Stop-loss: ${state.fp_settings.stop_loss ? fmtGP(state.fp_settings.stop_loss) : 'off'} · Take-profit: ${state.fp_settings.take_profit ? fmtGP(state.fp_settings.take_profit) : 'off'}.`;
}

function renderStatsDashboard(){
  const flipCompleted = state.trades.filter(t => t.status === 'completed');
  const flipProfit = flipCompleted.reduce((sum, trade) => sum + (Number(trade.profit) || 0), 0);
  const slayerProfit = state.slayer_logs.reduce((sum, entry) => sum + (Number(entry.gp) || 0), 0);
  const fpProfit = state.fp_logs.reduce((sum, entry) => sum + (Number(entry.net) || 0), 0);
  const transfers = state.transfers.reduce((sum, entry) => sum + (Number(entry.amount) || 0), 0);
  const fpItemValue = state.fp_items.reduce((sum, item) => sum + (Number(item.buy_value) || 0), 0);
  const completedGoals = state.goals.filter(goal => goal.completed).length;

  const combinedProfitEl = document.getElementById('stats-combined-profit');
  if(combinedProfitEl){
    combinedProfitEl.textContent = `${state.total_profit >= 0 ? '+' : ''}${fmtGP(state.total_profit)} GP`;
    combinedProfitEl.className = `stat-card-value ${state.total_profit >= 0 ? 'green' : 'red'}`;
  }

  const fpBankrollEl = document.getElementById('stats-fp-bankroll');
  if(fpBankrollEl) fpBankrollEl.textContent = state.fp_settings.bankroll ? `${fmtGP(state.fp_settings.bankroll)} GP` : '—';
  const fpItemsEl = document.getElementById('stats-fp-items');
  if(fpItemsEl) fpItemsEl.textContent = fpItemValue ? `${fmtGP(fpItemValue)} GP` : '—';
  const goalsCompletedEl = document.getElementById('stats-goals-completed');
  if(goalsCompletedEl) goalsCompletedEl.textContent = completedGoals.toLocaleString();

  const breakdownEl = document.getElementById('stats-breakdown-list');
  if(breakdownEl){
    breakdownEl.innerHTML = [
      { label: 'Completed Flip Profit', value: `${flipProfit >= 0 ? '+' : ''}${fmtGP(flipProfit)} GP` },
      { label: 'Slayer Profit Logged', value: `${fmtGP(slayerProfit)} GP` },
      { label: 'FP Net Logged', value: `${fpProfit >= 0 ? '+' : ''}${fmtGP(fpProfit)} GP` },
      { label: 'Transfers Logged', value: `${fmtGP(transfers)} GP` },
      { label: 'Tracked FP Item Value', value: `${fmtGP(fpItemValue)} GP` },
      { label: 'Pending Flips', value: state.trades.filter(t => t.status === 'pending').length.toLocaleString() },
      { label: 'Active Goals', value: state.goals.filter(goal => !goal.completed).length.toLocaleString() },
      { label: 'Saved FP Base Stake', value: state.fp_settings.base_stake ? `${fmtGP(state.fp_settings.base_stake)} GP` : '—' }
    ].map(item => `<div class="item-row"><div class="item-name">${item.label}</div><div class="item-meta">${item.value}</div></div>`).join('');
  }
}

function buildMiniChart(values, colorVar = 'var(--accent)'){
  const cleaned = values.map(v => Number(v) || 0);
  if(!cleaned.length){
    return '<div class="empty" style="padding:18px 0;">No data yet.</div>';
  }
  const width = 320;
  const height = 86;
  const min = Math.min(...cleaned);
  const max = Math.max(...cleaned);
  const range = max - min || 1;
  const points = cleaned.map((value, index) => {
    const x = cleaned.length === 1 ? width / 2 : (index / (cleaned.length - 1)) * width;
    const y = height - (((value - min) / range) * (height - 12)) - 6;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return `
    <svg class="mini-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      <polyline fill="none" stroke="${colorVar}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${points}"></polyline>
    </svg>
    <div class="mini-chart-meta">
      <span>${fmtGP(cleaned[0])}</span>
      <span>${fmtGP(cleaned[cleaned.length - 1])}</span>
    </div>
  `;
}

function populatePriceItemSelect() {
  const select = document.getElementById('price-item-select');
  if (!select) return;
  const items = getPriceTrackedItems();
  const current = select.value;
  select.innerHTML = items.map(name => `<option value="${name}">${name}</option>`).join('');
  if (items.includes(current)) {
    select.value = current;
  } else if (!select.value && items.length) {
    select.value = items[0];
  }
}

const PRICE_COOLDOWN_MS = 2 * 24 * 60 * 60 * 1000;

function submitCommunityPrice() {
  if (!currentUser) {
    openAuthModal('signup');
    setAuthStatus('Create or sign in to submit a community item price.', 'error');
    return;
  }
  if (isEmailBanned(getActorEmail())) {
    alert('Your account cannot submit community prices.');
    return;
  }
  const itemName = document.getElementById('price-item-select')?.value;
  const price = parseGP(document.getElementById('price-item-input')?.value);
  if (!itemName || price <= 0) {
    alert('Choose an item and enter a valid price.');
    return;
  }

  const now = Date.now();
  const userEmail = String(currentUser.email || '').toLowerCase();
  
  const existingIndex = (state.community_prices || []).findIndex(entry =>
    entry.item_name === itemName &&
    entry.user_email === userEmail
  );

  if (existingIndex > -1) {
    const lastSubmission = state.community_prices[existingIndex].created_at;
    const timeSinceLastSubmission = now - lastSubmission;
    if (timeSinceLastSubmission < PRICE_COOLDOWN_MS) {
      const daysLeft = Math.ceil((PRICE_COOLDOWN_MS - timeSinceLastSubmission) / (24 * 60 * 60 * 1000));
      alert(`You can update this item's price again in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}.`);
      return;
    }
  }

  const record = {
    id: existingIndex > -1 ? state.community_prices[existingIndex].id : generateId(),
    item_name: itemName,
    price,
    user_email: userEmail,
    user_name: currentUser.display_name || currentUser.email,
    created_at: now,
    trust_weight: getTrustWeight(currentUser)
  };

  if (existingIndex > -1) {
    state.community_prices[existingIndex] = record;
  } else {
    state.community_prices.unshift(record);
  }
  
  awardPricePoints(userEmail);
  updateAuthUI();

  saveState();
  trackUserActivity();
  document.getElementById('price-item-input').value = '';
  renderCommunityPriceDesk();
  renderGoals();
  renderSuggestedGoals();
}

function renderCommunityPriceDesk() {
  populatePriceItemSelect();
  const itemName = document.getElementById('price-item-select')?.value;
  const submitCopy = document.getElementById('price-submit-copy');
  const proCard = document.getElementById('price-pro-card');
  const trustPill = document.getElementById('price-trust-pill');
  const analyticsBody = document.getElementById('price-analytics-body');
  if (!itemName || !submitCopy || !proCard || !trustPill || !analyticsBody) return;

  const snapshot = getCommunityPriceSnapshot(itemName);
  const trust = getUserPriceTrustSummary(currentUser?.email);
  const visibleMedian = snapshot.median || snapshot.basePrice || 0;
  submitCopy.innerHTML = `
    Community median: <span style="color:var(--text);font-weight:700;">${visibleMedian ? fmtGP(visibleMedian) : 'No data yet'}</span>.<br>
    Range: ${snapshot.low ? fmtGP(snapshot.low) : '—'} to ${snapshot.high ? fmtGP(snapshot.high) : '—'} · Submissions: ${snapshot.validEntries.length}.<br>
    Submit a fair price to help the median stay useful for everyone.
  `;

  if (!isProUser()) {
    trustPill.textContent = 'Pro only';
    analyticsBody.innerHTML = `
      <div class="locked-copy">Pro unlocks price trend charts, confidence scoring, and trust rank based on how often your submissions stay close to the community middle.</div>
      <div class="locked-list">
        <div>Median trend chart for ${itemName}</div>
        <div>Confidence score from depth and price spread</div>
        <div>Trust rank that rewards medium, consistent submissions</div>
      </div>
      <button class="btn primary" onclick="openPricingModal('pro')">Unlock Pro Price Intel</button>
    `;
    return;
  }

  trustPill.textContent = trust.rank;
  analyticsBody.innerHTML = `
    <div class="dashboard-chart-card" style="margin-bottom:14px;">
      <div class="dashboard-chart-label">${itemName} median trend</div>
      ${buildMiniChart(snapshot.trendSeries.length ? snapshot.trendSeries : [visibleMedian || 0], 'var(--amber)')}
    </div>
    <div class="price-analytics-grid">
      <div class="price-analytics-stat"><span>Community median</span><strong>${visibleMedian ? fmtGP(visibleMedian) : '—'}</strong></div>
      <div class="price-analytics-stat"><span>Confidence</span><strong>${snapshot.confidence}/100</strong></div>
      <div class="price-analytics-stat"><span>Your trust</span><strong>${trust.score}/100</strong></div>
      <div class="price-analytics-stat"><span>Your submissions</span><strong>${trust.contributionCount}</strong></div>
    </div>
    <div class="profit-preview" style="margin-top:14px;">Trust rank favors pricing that stays near the community median. The more consistently your submissions land in the middle range, the stronger your trust rank becomes.</div>
  `;
}

function renderDashboard(){
  const combinedEl = document.getElementById('dash-combined-profit');
  const bankrollEl = document.getElementById('dash-bankroll');
  const activeGoalsEl = document.getElementById('dash-active-goals');
  const bossesEl = document.getElementById('dash-guide-bosses');
  const focusEl = document.getElementById('dashboard-focus-list');
  const planEl = document.getElementById('dashboard-plan-list');
  const momentumEl = document.getElementById('dashboard-momentum-list');
  const dashboardPlanPill = document.getElementById('dashboard-plan-pill');

  const fpItemValue = state.fp_items.reduce((sum, item) => sum + (Number(item.buy_value) || 0), 0);
  const activeGoals = state.goals.filter(goal => !goal.completed);
  const completedGoals = state.goals.filter(goal => goal.completed);
  const completedTrades = state.trades.filter(trade => trade.status === 'completed');
  const combinedEvents = [
    ...completedTrades.map(trade => ({ date: trade.date, delta: Number(trade.profit) || 0 })),
    ...state.fp_logs.map(entry => ({ date: entry.date, delta: Number(entry.net) || 0 })),
    ...state.slayer_logs.map(entry => ({ date: entry.date, delta: Number(entry.gp) || 0 }))
  ].sort((a, b) => new Date(String(a.date).replace(' ','T')).getTime() - new Date(String(b.date).replace(' ','T')).getTime());
  const combinedSeries = combinedEvents.reduce((series, event) => {
    const previous = series.length ? series[series.length - 1] : 0;
    series.push(previous + event.delta);
    return series;
  }, []);
  const fpSeries = state.fp_logs.slice(0, 14).reverse().map(entry => Number(entry.net) || 0);
  const slayerSeries = state.slayer_logs.slice(0, 14).reverse().map(entry => Number(entry.gp) || 0);

  if(combinedEl){
    combinedEl.textContent = `${state.total_profit >= 0 ? '+' : ''}${fmtGP(state.total_profit)} GP`;
    combinedEl.className = `stat-card-value ${state.total_profit >= 0 ? 'green' : 'red'}`;
  }
  if(bankrollEl) bankrollEl.textContent = state.fp_settings.bankroll || fpItemValue ? `${fmtGP(state.fp_settings.bankroll)} + ${fmtGP(fpItemValue)} items` : '—';
  if(activeGoalsEl) activeGoalsEl.textContent = activeGoals.length.toLocaleString();
  if(bossesEl) bossesEl.textContent = SLAYER_TASKS.length.toLocaleString();
  if(dashboardPlanPill) dashboardPlanPill.textContent = getCurrentPlan() === 'free' ? 'Free Plan Active' : getCurrentPlan() === 'founder' ? 'Founder Plan Active' : 'Pro Plan Active';

  const combinedChart = document.getElementById('chart-combined-trend');
  if(combinedChart) combinedChart.innerHTML = buildMiniChart(combinedSeries, 'var(--green)');
  const fpChart = document.getElementById('chart-fp-trend');
  if(fpChart) fpChart.innerHTML = buildMiniChart(fpSeries, 'var(--amber)');
  const slayerChart = document.getElementById('chart-slayer-trend');
  if(slayerChart) slayerChart.innerHTML = buildMiniChart(slayerSeries, 'var(--accent)');

  const featuredGear = activeGoals.find(goal => goal.category === 'gear');
  const featuredXp = activeGoals.find(goal => goal.category === 'skill');
  const suggestedGoals = getGoalSuggestions();
  const fallbackXp = suggestedGoals.featuredXpGoal;
  const fallbackGear = suggestedGoals.featuredItemGoal;
  const biggestSlayer = state.slayer_logs.reduce((best, entry) => (Number(entry.gp) || 0) > (Number(best?.gp) || 0) ? entry : best, null);
  const latestFp = state.fp_logs[0] || null;
  if(focusEl){
    focusEl.innerHTML = [
      { label: 'Next Gear Goal', value: featuredGear ? featuredGear.name : (fallbackGear ? fallbackGear.gear_item : 'Set your next item target') },
      { label: 'Next XP Goal', value: featuredXp ? featuredXp.name : (fallbackXp ? fallbackXp.name : 'Set your next XP target') },
      { label: 'Favorite Bosses', value: state.slayer_favorites.length ? state.slayer_favorites.slice(0, 3).join(', ') : 'Pick a few bosses to pin' },
      { label: 'Held FP Items', value: state.fp_items.length ? `${state.fp_items.length} tracked item${state.fp_items.length !== 1 ? 's' : ''}` : 'No held items tracked' },
      { label: 'Cloud Sync Status', value: 'Planned for Pro backend phase' }
    ].map(item => `<div class="item-row"><div class="item-name">${item.label}</div><div class="item-meta" style="min-width:160px;text-align:right;">${item.value}</div></div>`).join('');
  }
  if(planEl){
    const plans = [
      featuredGear
        ? { title: 'Push your next gear unlock', desc: `${featuredGear.name} is active. Add GP progress after flips, FP, or bossing sessions to keep the roadmap moving.` }
        : fallbackGear
          ? { title: `Track ${fallbackGear.gear_item} next`, desc: fallbackGear.desc }
          : { title: 'Set one premium gear target', desc: 'Pick one expensive item goal and assign a live server price so the roadmap has a real chase target.' },
      biggestSlayer
        ? { title: `Repeat ${biggestSlayer.task} if it still prints`, desc: `Your best logged Slayer payout is ${fmtGP(biggestSlayer.gp)} GP on ${biggestSlayer.task}. That is a strong candidate for another session.` }
        : { title: 'Log your first Slayer benchmark', desc: 'Once you log a few sessions, the dashboard can highlight your best bosses and trend lines.' },
      latestFp
        ? { title: 'Respect the FP model', desc: `Latest FP result was ${latestFp.result}. Let the auto stake reset and avoid manually forcing a larger chase bet.` }
        : { title: 'Use FP like a tool, not the whole plan', desc: 'Keep the FP bankroll separate and let the auto-sized model cap your risk before you log sessions.' }
    ];
    planEl.innerHTML = plans.map(plan => `<div class="item-row"><div class="item-name">${plan.title}<div style="color:var(--muted);font-size:11px;line-height:1.7;margin-top:4px;">${plan.desc}</div></div></div>`).join('');
  }
  if(momentumEl){
    const winTrades = completedTrades.filter(trade => (Number(trade.profit) || 0) > 0).length;
    const flipWinRate = completedTrades.length ? `${((winTrades / completedTrades.length) * 100).toFixed(0)}%` : '—';
    const eliteBossCoverage = `${state.slayer_favorites.length}/${SLAYER_TASKS.length}`;
    momentumEl.innerHTML = [
      { label: 'Completed Goals', value: completedGoals.length.toLocaleString() },
      { label: 'Flip Win Rate', value: flipWinRate },
      { label: 'Pinned Bosses', value: state.slayer_favorites.length.toLocaleString() },
      { label: 'Boss Coverage', value: eliteBossCoverage },
      { label: 'Tracker Depth', value: `${completedTrades.length + state.fp_logs.length + state.slayer_logs.length} logged sessions` }
    ].map(item => `<div class="item-row"><div class="item-name">${item.label}</div><div class="item-meta">${item.value}</div></div>`).join('');
  }
}

function resetFpStats(){
  if(!confirm('Reset all FP stats, saved bankroll, FP settings, and FP-held items?')) return;
  state.fp_logs = [];
  state.fp_items = [];
  state.fp_settings = { bankroll: 0, base_stake: 0, stop_loss: 0, take_profit: 0 };
  ['fp-bankroll','fp-base-stake','fp-stoploss','fp-takeprofit','fp-net','fp-next-stake'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  saveState();
  recalcItemStats();
  render();
}

function resetSlayerStats(){
  if(!confirm('Reset all Slayer sessions and Slayer totals?')) return;
  state.slayer_logs = [];
  saveState();
  recalcItemStats();
  render();
}

function resetTransferStats(){
  if(!confirm('Reset all recorded transfers?')) return;
  state.transfers = [];
  saveState();
  recalcItemStats();
  render();
}

function resetAllTrackerStats(){
  if(!confirm('Reset all flip, FP, Slayer, transfer, and goal tracking data? This cannot be undone.')) return;
  state.trades = [];
  state.goals = [];
  state.gear_price_overrides = {};
  state.fp_items = [];
  state.slayer_favorites = [];
  state.slayer_notes = {};
  state.slayer_logs = [];
  state.fp_logs = [];
  state.transfers = [];
  state.fp_settings = { bankroll: 0, base_stake: 0, stop_loss: 0, take_profit: 0 };
  state.total_profit = 0;
  sessionProfit = 0;
  sessionGP = 0;
  ['fp-bankroll','fp-base-stake','fp-stoploss','fp-takeprofit','fp-net','fp-next-stake'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  saveState();
  recalcItemStats();
  render();
}

function resetUserTrackerStatsByEmail(targetEmail, scope = 'all'){
  const email = String(targetEmail || '').trim().toLowerCase();
  if(!email) return { ok:false, error:'No account selected.' };

  const removeActorRows = (rows, field = 'actor_email') => (rows || []).filter(entry => String(entry[field] || '').toLowerCase() !== email);

  if(scope === 'fp' || scope === 'all'){
    state.fp_logs = removeActorRows(state.fp_logs, 'actor_email');
    state.fp_items = (state.fp_items || []).filter(item => String(item.owner_email || item.actor_email || '').toLowerCase() !== email);
  }
  if(scope === 'slayer' || scope === 'all'){
    state.slayer_logs = removeActorRows(state.slayer_logs, 'actor_email');
    const favorites = state.slayer_favorites_by_user || {};
    const notes = state.slayer_notes_by_user || {};
    delete favorites[email];
    delete notes[email];
  }
  if(scope === 'transfers' || scope === 'all'){
    state.transfers = removeActorRows(state.transfers, 'actor_email');
  }
  if(scope === 'trades' || scope === 'all'){
    state.trades = removeActorRows(state.trades, 'actor_email');
  }
  if(scope === 'goals' || scope === 'all'){
    state.goals = (state.goals || []).filter(goal => String(goal.owner_email || goal.actor_email || '').toLowerCase() !== email);
  }
  if(scope === 'prices' || scope === 'all'){
    state.community_prices = (state.community_prices || []).filter(entry => String(entry.user_email || '').toLowerCase() !== email);
  }
  if(scope === 'marketplace' || scope === 'all'){
    state.marketplace_listings = (state.marketplace_listings || []).filter(entry => String(entry.seller_email || '').toLowerCase() !== email);
  }

  if(state.user_sessions && state.user_sessions[email]) {
    delete state.user_sessions[email];
  }

  saveState();
  recalcItemStats();
  render();
  return { ok:true };
}

function modResetSelectedUserStats(scope = 'all'){
  if(!isStaffUser()) return;
  const user = getStaffTargetUser('mod-user-select');
  const resultEl = document.getElementById('mod-reset-result');
  if(!user?.email){
    if (resultEl) resultEl.innerHTML = '<span style="color:var(--red);">Select a registered user first.</span>';
    return;
  }

  const labelMap = {
    all: 'all tracker data',
    fp: 'FP stats',
    slayer: 'Slayer stats',
    trades: 'flip history',
    transfers: 'transfer history',
    goals: 'goals',
    prices: 'community prices',
    marketplace: 'marketplace listings'
  };
  const scopeLabel = labelMap[scope] || 'selected stats';
  if(!confirm(`Reset ${scopeLabel} for ${user.display_name || 'this user'}? This cannot be undone.`)) return;

  const result = resetUserTrackerStatsByEmail(user.email, scope);
  if (resultEl) {
    resultEl.innerHTML = result.ok
      ? `<span style="color:var(--green);">Reset ${scopeLabel} for ${escapeHtml(user.display_name || 'that user')}.</span>`
      : `<span style="color:var(--red);">${escapeHtml(result.error || 'Could not reset stats.')}</span>`;
  }
  renderAllMembers();
  renderModActivity();
}

function evaluateFpGuardrails(){
  const fpTotal = state.fp_logs.reduce((s, e) => s + (Number(e.net) || 0), 0);
  const stopLoss = state.fp_settings.stop_loss;
  const takeProfit = state.fp_settings.take_profit;
  if(stopLoss > 0 && fpTotal <= -Math.abs(stopLoss)){
    return `Stop-loss triggered: FP net is ${fmtGP(fpTotal)}. Suggested action: pause FP and rebuild via Slayer/Flips.`;
  }
  if(takeProfit > 0 && fpTotal >= Math.abs(takeProfit)){
    return `Take-profit reached: FP net is ${fmtGP(fpTotal)}. Suggested action: lock gains and transfer to main/safer bankroll bucket.`;
  }
  return '';
}

function logTransfer(){
  if (!ensureRegisteredUser('record transfers')) return;
  const fromSelect = document.getElementById('transfer-from');
  const toSelect = document.getElementById('transfer-to');
  const from = fromSelect?.value || '';
  const to = toSelect?.value || '';
  const fromLabel = fromSelect?.selectedOptions?.[0]?.textContent?.trim() || from;
  const toLabel = toSelect?.selectedOptions?.[0]?.textContent?.trim() || to;
  const amount = parseGP(document.getElementById('transfer-amount').value);
  const note = document.getElementById('transfer-note').value.trim();
  if(from === to){
    alert('From and To cannot be the same account.');
    return;
  }
  if(amount <= 0){
    alert('Enter a valid transfer amount.');
    return;
  }
  const actorEmail = getActorEmail();
  state.transfers.unshift({
    id: generateId(),
    from,
    from_label: fromLabel,
    to,
    to_label: toLabel,
    amount,
    note,
    date: new Date().toISOString().slice(0,16).replace('T',' '),
    actor_email: actorEmail || undefined,
    actor_display: actorEmail ? getActorDisplay() : undefined
  });
  saveState();
  renderRspsSections();
  document.getElementById('transfer-amount').value = '';
  document.getElementById('transfer-note').value = '';
}

function getCustomStrategyShares() {
  const slayerInput = parseFloat(document.getElementById('custom-slayer-share')?.value);
  const fpInput = parseFloat(document.getElementById('custom-fp-share')?.value);
  let slayerShare = Number.isFinite(slayerInput) ? slayerInput : Number(state.strategy_settings?.custom_slayer_share) || 60;
  let fpShare = Number.isFinite(fpInput) ? fpInput : Number(state.strategy_settings?.custom_fp_share) || 40;
  slayerShare = Math.max(0, slayerShare);
  fpShare = Math.max(0, fpShare);
  const total = slayerShare + fpShare;
  if (total <= 0) return { slayerShare: 0.6, fpShare: 0.4 };
  return { slayerShare: slayerShare / total, fpShare: fpShare / total };
}

function deleteTransfer(transferId){
  if (!ensureRegisteredUser('delete transfers')) return;
  const idx = state.transfers.findIndex(entry => entry.id === transferId);
  if(idx === -1) return;
  state.transfers.splice(idx, 1);
  saveState();
  renderRspsSections();
}

function generatePlan(){
  if (!ensureRegisteredUser('use the strategy planner')) return;
  const current = parseGP(document.getElementById('plan-current-bank').value);
  const target = parseGP(document.getElementById('plan-target-bank').value);
  const selectedProfile = document.getElementById('plan-risk').value;
  const customRules = document.getElementById('plan-custom-rules').value.trim();
  const daily = parseGP(document.getElementById('plan-daily-gp').value);
  const out = document.getElementById('plan-output');

  if(current <= 0 || target <= 0 || target <= current){
    out.textContent = 'Enter valid current/target bank values where target is higher than current.';
    return;
  }

  const remaining = target - current;
  let riskPct;
  let slayerShare;
  let strategyNote = '';
  let fpBet;
  let fpShare;
  if(selectedProfile === 'custom_tiered'){
    const tiers = parseCustomTierRules(customRules);
    if(!tiers.length){
      out.textContent = 'Invalid custom rules. Example: 0-3b:300m;3b-6b:500m;6b-9b:800m';
      return;
    }
    const activeTier = tiers.find(t => current >= t.min && current < t.max) || tiers[tiers.length - 1];
    const customShares = getCustomStrategyShares();
    fpBet = Math.max(10_000_000, activeTier.bet);
    riskPct = fpBet / current;
    slayerShare = customShares.slayerShare;
    fpShare = customShares.fpShare;
    strategyNote = `Custom tier active: ${fmtGP(activeTier.min)}-${fmtGP(activeTier.max)} bankroll -> ${fmtGP(activeTier.bet)} FP shot.`;
  } else {
    const profile = STRATEGY_LIBRARY[selectedProfile] || STRATEGY_LIBRARY.balanced;
    const fpModel = getFpStakeModel(selectedProfile);
    riskPct = profile.riskPct;
    slayerShare = profile.slayerShare;
    fpShare = 1 - slayerShare;
    fpBet = getSuggestedFpBaseStake(current, selectedProfile);
    strategyNote = `${profile.note} Auto logger rule: ${fpModel.note}`;
  }

  const estDays = daily > 0 ? Math.ceil(remaining / daily) : null;
  const bankrollRule = getBankrollRuleSummary();
  const aggressionFactor = selectedProfile === 'aggressive' ? 0.65 : selectedProfile === 'conservative' ? 1.25 : 1;
  const suggestedTasksBeforeFp = Math.max(3, Math.round((fpBet / current) * 60 * aggressionFactor));

  state.strategy_settings.selected = selectedProfile;
  state.strategy_settings.custom_rules = customRules || state.strategy_settings.custom_rules;
  state.strategy_settings.custom_slayer_share = Math.round(slayerShare * 100);
  state.strategy_settings.custom_fp_share = Math.round(fpShare * 100);
  saveState();
  renderRspsSections();

  out.innerHTML = `
    Suggested FP base stake: <span style="color:var(--accent);font-weight:700;">${fmtGP(fpBet)} GP</span> (${Math.round(riskPct*100)}% bankroll cap).<br>
    Split focus: <span style="color:var(--green);">${Math.round(slayerShare*100)}% Slayer GP</span> + <span style="color:var(--amber);">${Math.round(fpShare*100)}% FP/Flips</span>.<br>
    Gap to target: <span style="font-weight:600;">${fmtGP(remaining)} GP</span>${estDays ? ` · ETA ~ ${estDays} day(s) at ${fmtGP(daily)}/day.` : ''}<br>
    Bank-share rule: every ${fmtGP(bankrollRule.step)} bankroll allows ${fmtGP(bankrollRule.unlock)} for FP or flips. Current unlocked allocation: ${fmtGP(bankrollRule.unlockedAmount)}.<br>
    Pace guide: at this bankroll and aggression, stack about ${suggestedTasksBeforeFp} Slayer task${suggestedTasksBeforeFp === 1 ? '' : 's'} before taking an FP shot near ${fmtGP(fpBet)}.<br>
    Strategy note: ${strategyNote}
  `;
}

function parseCustomTierRules(rules){
  if(!rules) return [];
  return rules.split(';').map(part => part.trim()).filter(Boolean).map(rule => {
    const pieces = rule.split(':');
    if(pieces.length !== 2) return null;
    const range = pieces[0].split('-').map(v => v.trim());
    if(range.length !== 2) return null;
    const min = parseGP(range[0]);
    const max = parseGP(range[1]);
    const bet = parseGP(pieces[1].trim());
    if(min < 0 || max <= min || bet <= 0) return null;
    return {min, max, bet};
  }).filter(Boolean).sort((a,b)=>a.min-b.min);
}

function saveCustomStrategy(){
  if (!ensureRegisteredUser('save custom strategy rules')) return;
  const rules = document.getElementById('plan-custom-rules').value.trim();
  const parsed = parseCustomTierRules(rules);
  if(!parsed.length){
    alert('Invalid custom rules format. Example: 0-3b:300m;3b-6b:500m;6b-9b:800m');
    return;
  }
  state.strategy_settings.custom_rules = rules;
  state.strategy_settings.selected = 'custom_tiered';
  state.strategy_settings.custom_slayer_share = Math.max(0, Math.min(100, parseFloat(document.getElementById('custom-slayer-share')?.value) || state.strategy_settings.custom_slayer_share || 60));
  state.strategy_settings.custom_fp_share = Math.max(0, Math.min(100, parseFloat(document.getElementById('custom-fp-share')?.value) || state.strategy_settings.custom_fp_share || 40));
  saveState();
  document.getElementById('plan-risk').value = 'custom_tiered';
  renderRspsSections();
}

function saveBankrollRule(){
  if (!ensureRegisteredUser('save bank-share rules')) return;
  const step = parseGP(document.getElementById('rule-bankroll-step')?.value);
  const unlock = parseGP(document.getElementById('rule-gamble-amount')?.value);
  if(step <= 0 || unlock <= 0){
    alert('Enter valid bankroll and gamble amounts.');
    return;
  }
  state.strategy_settings.bankroll_step = step;
  state.strategy_settings.gamble_unlock = unlock;
  saveState();
  renderRspsSections();
}

function onStrategyProfileChange(){
  const val = document.getElementById('plan-risk').value;
  state.strategy_settings.selected = val;
  saveState();
  renderRspsSections();
}

function syncStrategyControls(){
  const sel = document.getElementById('plan-risk');
  const rules = document.getElementById('plan-custom-rules');
  const bankrollStep = document.getElementById('rule-bankroll-step');
  const gambleUnlock = document.getElementById('rule-gamble-amount');
  const customSlayerShare = document.getElementById('custom-slayer-share');
  const customFpShare = document.getElementById('custom-fp-share');
  if(!sel || !rules) return;
  sel.value = state.strategy_settings?.selected || 'balanced';
  rules.value = state.strategy_settings?.custom_rules || '0-3b:300m;3b-6b:500m;6b-9b:800m';
  if(bankrollStep) bankrollStep.value = state.strategy_settings?.bankroll_step ? fmtGP(state.strategy_settings.bankroll_step) : '';
  if(gambleUnlock) gambleUnlock.value = state.strategy_settings?.gamble_unlock ? fmtGP(state.strategy_settings.gamble_unlock) : '';
  if(customSlayerShare) customSlayerShare.value = Number(state.strategy_settings?.custom_slayer_share) || 60;
  if(customFpShare) customFpShare.value = Number(state.strategy_settings?.custom_fp_share) || 40;
}

function renderRspsSections(){
  renderLinkedAccountsEditor();
  const viewerEmail = getActorEmail();
  const visibleSlayerLogs = viewerEmail ? state.slayer_logs.filter(e => String(e.actor_email || '').toLowerCase() === viewerEmail) : [];
  const visibleFpLogs = viewerEmail ? state.fp_logs.filter(e => String(e.actor_email || '').toLowerCase() === viewerEmail) : [];
  const visibleTransfers = viewerEmail ? state.transfers.filter(e => String(e.actor_email || '').toLowerCase() === viewerEmail) : [];
  const slayerTotal = visibleSlayerLogs.reduce((s, e) => s + (Number(e.gp) || 0), 0);
  const fpTotal = visibleFpLogs.reduce((s, e) => s + (Number(e.net) || 0), 0);
  const transferTotal = visibleTransfers.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const fpItemTotal = state.fp_items.reduce((s, item) => s + (Number(item.buy_value) || 0), 0);
  const combined = state.total_profit;
  const streak = getFpStreak();
  const streakLabel = streak.wins ? `W${streak.wins}` : streak.losses ? `L${streak.losses}` : 'Neutral';
  const guardrailWarning = evaluateFpGuardrails();
  const selectedProfile = state.strategy_settings?.selected || 'balanced';
  const strategyProfile = STRATEGY_LIBRARY[selectedProfile] || STRATEGY_LIBRARY.balanced;
  const customShares = getCustomStrategyShares();
  const currentBank = parseGP(document.getElementById('plan-current-bank')?.value || 0) || state.fp_settings.bankroll;
  const workingBankroll = getFpWorkingBankroll();
  const workingBaseStake = getFpWorkingBaseStake();
  const fpPlan = buildFpStakePlan({ bankroll: workingBankroll, baseStake: workingBaseStake, profileKey: selectedProfile, streak });
  const recommendedStake = currentBank > 0 ? getSuggestedFpBaseStake(currentBank, selectedProfile) : 0;
  const bankrollRule = getBankrollRuleSummary();
  const fpNet = fpTotal;

  const slayerTotalEl = document.getElementById('ops-slayer-total');
  if(slayerTotalEl) slayerTotalEl.textContent = `${fmtGP(slayerTotal)} GP`;
  const fpTotalEl = document.getElementById('ops-fp-total');
  if(fpTotalEl) fpTotalEl.textContent = `${fpTotal >= 0 ? '+' : ''}${fmtGP(fpTotal)} GP`;
  const transferTotalEl = document.getElementById('ops-transfer-total');
  if(transferTotalEl) transferTotalEl.textContent = `${fmtGP(transferTotal)} GP`;
  const combinedEl = document.getElementById('ops-combined-total');
  if(combinedEl){
    combinedEl.textContent = `${combined >= 0 ? '+' : ''}${fmtGP(combined)} GP`;
    combinedEl.className = `stat-card-value ${combined >= 0 ? 'green' : 'red'}`;
  }
  const bankrollTotalEl = document.getElementById('fp-bankroll-total');
  if(bankrollTotalEl){
    const displayTotal = state.fp_settings.bankroll ? `${fmtGP(state.fp_settings.bankroll)} GP` : '—';
    bankrollTotalEl.textContent = fpItemTotal > 0 ? `${displayTotal} + ${fmtGP(fpItemTotal)} items` : displayTotal;
  }
  const streakDisplayEl = document.getElementById('fp-streak-display');
  if(streakDisplayEl) streakDisplayEl.textContent = streakLabel;

  const slayerList = visibleSlayerLogs.slice(0, 8).map(e => {
    const gph = e.minutes > 0 ? Math.round((e.gp / e.minutes) * 60) : 0;
    return `<div class="item-row"><div class="item-name">${e.task} <span style="color:var(--muted);font-size:11px;">(${e.account})</span></div><div class="item-meta">${fmtGP(e.gp)} GP</div><div style="min-width:110px;text-align:right;color:var(--muted);font-size:11px;">${gph ? `${fmtGP(gph)}/hr` : '—'} · ${e.date}</div></div>`;
  }).join('');
  const slayerLogList = document.getElementById('slayer-log-list');
  if(slayerLogList) slayerLogList.innerHTML = slayerList || '<div class="empty">No slayer sessions logged yet.</div>';
  updateSlayerAccessUI(document.getElementById('slayer-task')?.value || '');

  const slayerSessionCountEl = document.getElementById('slayer-session-count');
  if(slayerSessionCountEl) slayerSessionCountEl.textContent = visibleSlayerLogs.length.toLocaleString();
  const slayerMinutes = visibleSlayerLogs.reduce((sum, entry) => sum + (Number(entry.minutes) || 0), 0);
  const slayerAvgGph = slayerMinutes > 0 ? Math.round((slayerTotal / slayerMinutes) * 60) : 0;
  const slayerAvgGphEl = document.getElementById('slayer-avg-gph');
  if(slayerAvgGphEl) slayerAvgGphEl.textContent = slayerAvgGph ? `${fmtGP(slayerAvgGph)}/hr` : '—';
  const bestTaskEl = document.getElementById('slayer-best-task');
  if(bestTaskEl){
    const bestTask = visibleSlayerLogs.reduce((best, entry) => {
      const currentGph = entry.minutes > 0 ? entry.gp / entry.minutes : 0;
      return !best || currentGph > best.gph ? { name: entry.task, gph: currentGph } : best;
    }, null);
    bestTaskEl.textContent = bestTask ? bestTask.name : '—';
  }

  const transferList = visibleTransfers.slice(0, 8).map(e => {
    const fromName = e.from_label || e.from;
    const toName = e.to_label || e.to;
    return `<div class="item-row"><div class="item-name">${escapeHtml(fromName)} → ${escapeHtml(toName)}<div style="color:var(--muted);font-size:11px;">${escapeHtml(e.note || 'No note')}</div></div><div class="item-meta">${fmtGP(e.amount)} GP</div><div style="min-width:160px;text-align:right;color:var(--muted);font-size:11px;">${e.date}<div style="margin-top:8px;"><button class="btn-sm" onclick="deleteTransfer('${e.id}')">Delete</button></div></div></div>`;
  }).join('');
  const transferLogList = document.getElementById('transfer-log-list');
  if(transferLogList) transferLogList.innerHTML = transferList || '<div class="empty">No transfers logged yet.</div>';
  const transferCountEl = document.getElementById('transfer-count');
  if(transferCountEl) transferCountEl.textContent = visibleTransfers.length.toLocaleString();
  const largestTransferEl = document.getElementById('transfer-largest');
  if(largestTransferEl){
    const largest = visibleTransfers.reduce((best, entry) => Math.max(best, Number(entry.amount) || 0), 0);
    largestTransferEl.textContent = largest ? `${fmtGP(largest)} GP` : '—';
  }
  const latestRouteEl = document.getElementById('transfer-latest-route');
  if(latestRouteEl){
    latestRouteEl.textContent = visibleTransfers[0] ? `${visibleTransfers[0].from_label || visibleTransfers[0].from} → ${visibleTransfers[0].to_label || visibleTransfers[0].to}` : '—';
  }

  syncStrategyControls();
  const fpBankrollEl = document.getElementById('fp-bankroll');
  if(fpBankrollEl && !fpBankrollEl.value && state.fp_settings.bankroll > 0) fpBankrollEl.value = fmtGP(state.fp_settings.bankroll);
  const fpBaseStakeEl = document.getElementById('fp-base-stake');
  if(fpBaseStakeEl && !fpBaseStakeEl.value && state.fp_settings.base_stake > 0) fpBaseStakeEl.value = fmtGP(state.fp_settings.base_stake);
  const fpNextStakeEl = document.getElementById('fp-next-stake');
  if(fpNextStakeEl) fpNextStakeEl.value = fpPlan.nextStake ? fmtGP(fpPlan.nextStake).replace(/,/g,'') : '';
  const stopEl = document.getElementById('fp-stoploss');
  if(stopEl && !stopEl.value && state.fp_settings.stop_loss > 0) stopEl.value = fmtGP(state.fp_settings.stop_loss);
  const takeEl = document.getElementById('fp-takeprofit');
  if(takeEl && !takeEl.value && state.fp_settings.take_profit > 0) takeEl.value = fmtGP(state.fp_settings.take_profit);
  const hint = document.getElementById('fp-hint');
  if(hint){
    hint.innerHTML = `FP net: <span style="color:${fpNet>=0?'var(--green)':'var(--red)'};font-weight:700;">${fpNet>=0?'+':''}${fmtGP(fpNet)} GP</span> · Streak: ${streakLabel} · Next auto stake: <span style="color:var(--amber);font-weight:700;">${fpPlan.nextStake ? fmtGP(fpPlan.nextStake) : '—'} GP</span>.<br>${fpPlan.action}${guardrailWarning ? `<br><span style="color:var(--red);">${guardrailWarning}</span>` : ''}`;
  }
  const fpLogList = document.getElementById('fp-log-list');
  if(fpLogList){
    fpLogList.innerHTML = visibleFpLogs.slice(0, 8).map(entry => {
      const color = (Number(entry.net) || 0) >= 0 ? 'var(--green)' : 'var(--red)';
      return `<div class="item-row"><div class="item-name">${entry.result === 'custom' ? 'Custom result' : entry.result === 'win' ? 'Win' : 'Loss'}<div style="color:var(--muted);font-size:11px;">${STRATEGY_LIBRARY[entry.profile]?.label || 'Balanced'} · ${entry.bankroll_after ? `Bankroll ${fmtGP(entry.bankroll_after)}` : 'No bankroll saved'}</div></div><div class="item-meta" style="color:${color};">${(Number(entry.net) || 0) >= 0 ? '+' : ''}${fmtGP(entry.net)} GP</div><div style="min-width:140px;text-align:right;color:var(--muted);font-size:11px;">${entry.stake ? `${fmtGP(entry.stake)} auto stake` : 'Custom'} · ${entry.date}</div></div>`;
    }).join('') || '<div class="empty">No FP sessions logged yet.</div>';
  }
  const fpItemList = document.getElementById('fp-item-list');
  if(fpItemList){
    const itemSearch = String(document.getElementById('fp-item-search')?.value || '').trim().toLowerCase();
    const filteredItems = state.fp_items.filter(item => !itemSearch || item.name.toLowerCase().includes(itemSearch) || String(item.note || '').toLowerCase().includes(itemSearch));
    fpItemList.innerHTML = filteredItems.length ? filteredItems.map(item => {
      return `<div class="item-row"><div class="item-name">${item.name}<div style="color:var(--muted);font-size:11px;">${item.note || 'No note'}</div></div><div class="item-meta">${fmtGP(item.buy_value)} GP</div><div style="min-width:120px;text-align:right;"><button class="btn-sm" onclick="deleteFpItem('${item.id}')">Remove</button></div></div>`;
    }).join('') : `<div class="empty">${state.fp_items.length ? 'No held items match that search.' : 'No FP-held items tracked yet.'}</div>`;
  }
  const strategySlayerShareEl = document.getElementById('strategy-slayer-share');
  const strategyFpShareEl = document.getElementById('strategy-fp-share');
  const strategyProfileLabelEl = document.getElementById('strategy-profile-label');
  const strategyStakeEl = document.getElementById('strategy-recommended-stake');
  if(strategySlayerShareEl) strategySlayerShareEl.textContent = `${Math.round((selectedProfile === 'custom_tiered' ? customShares.slayerShare * 100 : strategyProfile.slayerShare * 100))}%`;
  if(strategyFpShareEl) strategyFpShareEl.textContent = `${Math.round((selectedProfile === 'custom_tiered' ? customShares.fpShare * 100 : (1 - strategyProfile.slayerShare) * 100))}% available`;
  if(strategyProfileLabelEl) strategyProfileLabelEl.textContent = getStrategyProfileLabel(selectedProfile);
  if(strategyStakeEl) strategyStakeEl.textContent = recommendedStake ? `${fmtGP(recommendedStake)} GP` : '—';
  const bankrollRulePreview = document.getElementById('bankroll-rule-preview');
  if(bankrollRulePreview){
    if(bankrollRule.step > 0 && bankrollRule.unlock > 0){
      bankrollRulePreview.innerHTML = `
        Current tracked bankroll: <span style="color:var(--text);font-weight:700;">${fmtGP(bankrollRule.total)} GP</span>.<br>
        Rule: every <span style="color:var(--accent);font-weight:700;">${fmtGP(bankrollRule.step)} GP</span> allows <span style="color:var(--amber);font-weight:700;">${fmtGP(bankrollRule.unlock)} GP</span> for FP or flips.<br>
        Unlocked now: <span style="color:var(--green);font-weight:700;">${fmtGP(bankrollRule.unlockedAmount)} GP</span> across ${bankrollRule.tiersHit} tier${bankrollRule.tiersHit !== 1 ? 's' : ''}. Next unlock at ${fmtGP(bankrollRule.nextAt)} GP.
      `;
    } else {
      bankrollRulePreview.textContent = 'Set a bank-share rule like every 2b tracked bankroll allows 500m of FP or flips.';
    }
  }
}

function renderStats(){
  const today=todayStr(), tt=state.trades.filter(t=>t.date.startsWith(today)&&t.status==='completed');
  const tp=tt.reduce((s,t)=>s+(Number(t.profit)||0),0);
  const completedTrades=state.trades.filter(t=>t.status==='completed');
  
  document.getElementById('s-today').textContent=fmtGP(tp)+' GP';
  document.getElementById('s-today').className='stat-card-value '+(tp>=0?'green':'red');
  document.getElementById('s-trades').textContent=state.trades.length;
  
  const best=completedTrades.reduce((b,t)=>(!b||(Number(t.roi)||0)>(Number(b.roi)||0))?t:b,null);
  document.getElementById('s-best').textContent=best?best.roi+'%':'—';
  
  let gpPerHour = 0;
  const tradesWithTime = completedTrades.filter(t => t.sell_time && t.buy_time);
  if(tradesWithTime.length > 0) {
    let totalProfit = 0;
    let totalHours = 0;
    
    tradesWithTime.forEach(t => {
      const minutes = (new Date(t.sell_time.replace(' ','T')) - new Date(t.buy_time.replace(' ','T'))) / 60000;
      const hours = minutes / 60;
      totalProfit += t.profit;
      totalHours += hours;
    });
    
    gpPerHour = totalHours > 0 ? Math.round(totalProfit / totalHours) : 0;
  }
  
  document.getElementById('s-gphour').textContent = gpPerHour > 0 ? fmtGP(gpPerHour) : '—';
}

function populateSelect(){
  const sel=document.getElementById('item-select'), cur=sel.value;
  sel.innerHTML='';
  Object.keys(state.items).forEach(name=>{
    const opt=document.createElement('option');
    opt.value=name;opt.textContent=name;
    if(name===cur) opt.selected=true;
    sel.appendChild(opt);
  });
}

function renderSession(){
  const sign=sessionProfit>=0?'+':'';
  document.getElementById('sb-profit').textContent=sign+fmtGP(sessionProfit)+' GP';
  document.getElementById('sb-profit').className='session-value '+(sessionProfit>=0?'green':'red');
  document.getElementById('sb-start').textContent=sessionGP?fmtGP(sessionGP)+' GP':'—';
  document.getElementById('sb-now').textContent=sessionGP?fmtGP(sessionGP+sessionProfit)+' GP':'—';
  const t=state.total_profit;
  document.getElementById('sb-alltime').textContent=fmtGP(t)+' GP';
  document.getElementById('sb-alltime').className='sval '+(t>=0?'green':'red');
}

function renderPanel(tab){
  const d=new Date();
  document.getElementById('log-date').textContent=d.toLocaleDateString(undefined,{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  
  if(tab==='dashboard') renderDashboard();
  if(tab==='history') renderHistory();
  if(tab==='analysis') renderAnalysis();
  if(tab==='stats') renderStatsDashboard();
  if(tab==='goals') {
    renderSuggestedGoals();
    renderGoals();
  }
  if(tab==='log') renderFavorites();
  if(tab==='marketplace') renderMarketplace();
  if(tab==='moderation') renderModerationPanel();
  if (tab === 'admin') {
    void renderAdminSiteRegistry();
    renderAdminPaymentHints();
  }
  if(tab==='fp' || tab==='strategy' || tab==='slayer' || tab==='transfers') {
    populateSlayerTaskSelect();
    showTaskGuide();
    renderRspsSections();
  }
}

function renderFavorites() {
  if(state.favorites.length === 0) {
    document.getElementById('favorites-card').style.display = 'none';
    return;
  }
  
  document.getElementById('favorites-card').style.display = 'block';
  const list = document.getElementById('favorites-list');
  
  list.innerHTML = state.favorites.map(name => {
    const info = state.items[name];
    if(!info) return '';
    return `<div class="fav-btn" onclick="quickFillItem('${name}')">
      ⭐ ${name}
    </div>`;
  }).join('');
}

function toggleFavorite() {
  const name = document.getElementById('item-select').value;
  if(!name) return;
  
  const idx = state.favorites.indexOf(name);
  if(idx > -1) {
    state.favorites.splice(idx, 1);
  } else {
    state.favorites.push(name);
  }
  saveState();
  renderFavorites();
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const name = document.getElementById('item-select').value;
  const btn = document.getElementById('fav-toggle-btn');
  if(state.favorites.includes(name)) {
    btn.textContent = '⭐';
    btn.style.color = 'var(--amber)';
  } else {
    btn.textContent = '☆';
    btn.style.color = 'var(--muted)';
  }
}

function quickFillItem(name) {
  const info = state.items[name];
  if(!info) return;
  const fallbackSell = typeof info.suggested_sell === 'string' && info.suggested_sell.includes('-')
    ? info.suggested_sell.split('-')[1]
    : info.suggested_sell;
  
  document.getElementById('item-select').value = name;
  document.getElementById('buy-price').value = info.avg_buy || parseGP(info.suggested_buy.split('-')[0]);
  document.getElementById('sell-price').value = info.avg_sell || parseGP(fallbackSell);
  document.getElementById('qty').value = 1;
  calcProfit();
  updateSuggestedCard();
  updateFavoriteButton();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  saveState();
}

function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "flip_tracker_pro_backup_" + new Date().toISOString().slice(0,10) + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
  alert('Data exported successfully!');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.items && Array.isArray(parsed.trades)) {
          if(confirm('This will replace ALL your current data. Continue?')) {
            state = parsed;
            saveState();
            location.reload();
          }
        } else {
          alert('Invalid backup file format.');
        }
      } catch (e) {
        alert('Error reading file: ' + e.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function render(){
  validateCurrentUserNotBanned();
  populateSelect(); 
  populatePriceItemSelect();
  renderStats(); 
  renderSession();
  renderDashboard();
  renderStatsDashboard();
  renderMarketplace();
  renderAdSlots();
  updateAuthUI();
  renderLinkedAccountsEditor();
  populateTransferAccountSelects();
  if (isStaffUser()) renderModerationPanel();
  updatePlanUI();
  renderSidebarAccount();
  updateSuggestedCard(); 
  const activeNav = document.querySelector('.nav-item.active');
  if(activeNav) {
    const active = activeNav.getAttribute('onclick').replace("switchTab('","").replace("')","");
    renderPanel(active);
  }
  document.documentElement.setAttribute('data-theme', state.theme);
  const versionEl = document.getElementById('site-version-display');
  if (versionEl) versionEl.textContent = `v${SITE_VERSION}`;
}

document.getElementById('gp-input').addEventListener('keydown', e => {
  if(e.key === 'Enter') startSession();
});

document.getElementById('start-session-btn').addEventListener('click', startSession);
document.getElementById('goal-category')?.addEventListener('change', syncGoalCategoryFields);
document.getElementById('fp-bankroll')?.addEventListener('input', refreshFpStakePreview);
document.getElementById('fp-base-stake')?.addEventListener('input', refreshFpStakePreview);
document.getElementById('fp-result')?.addEventListener('change', refreshFpStakePreview);

(async function initApp() {
  await hydrateAuthUsersCache();
  loadAuthSession();
  loadState();
  await syncCommunityStateFromServer();
  await handleBillingQueryParams();
  await recoverPaidPlanForSignedInUser();
  await syncPaidSubscriptionIfNeeded();
  syncGoalCategoryFields();
  syncAuthModal();
  updateOnlineIndicator();
  trackUserActivity();
  render();
})();
