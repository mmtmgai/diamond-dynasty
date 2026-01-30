// Game state management for Diamond Dynasty

import { createDeck, shuffleDeck } from '../data/cards.js';

// Initial game state
export function createInitialState() {
  const baseDeck = createDeck();
  const deck = shuffleDeck([...baseDeck]);

  return {
    // Core game state
    phase: 'PLAYING',  // PLAYING, SHOP, GAME_OVER, VICTORY

    // Deck and hand
    fullDeck: baseDeck,       // Master deck with all cards (persists enhancements)
    deck: deck.slice(8),      // Remaining deck after initial draw
    hand: deck.slice(0, 8),   // Starting hand of 8 cards
    selectedCards: [],        // Cards selected to play
    discardPile: [],

    // Scoring
    currentScore: 0,
    targetScore: 300,         // Score needed to beat current At-Bat

    // Resources
    handsRemaining: 4,        // Hands you can play this At-Bat
    discardsRemaining: 3,     // Discards available this At-Bat
    money: 4,                 // Starting money

    // Progression
    series: 1,                // Current series (1-8)
    atBat: 1,                 // Current at-bat in series (1-3)
    atBatType: 'FIRST',       // FIRST, SECOND, BOSS

    // Hand levels (each hand type can be leveled up)
    handLevels: {
      HIGH_CARD: 1,
      PAIR: 1,
      TWO_PAIR: 1,
      THREE_OF_A_KIND: 1,
      STRAIGHT: 1,
      FLUSH: 1,
      FULL_HOUSE: 1,
      FOUR_OF_A_KIND: 1,
      STRAIGHT_FLUSH: 1,
      ROYAL_FLUSH: 1,
      FIVE_OF_A_KIND: 1,
      FLUSH_HOUSE: 1,
      FLUSH_FIVE: 1
    },

    // Legends (special modifier cards - empty for now)
    legends: [],
    maxLegends: 5,

    // Ballparks
    ballparks: [],
    maxBallparks: 5,

    // Consumables (ballparks, positions, dynasties)
    consumables: [],
    maxConsumables: 2,

    // Injury/Buff system
    // legendInjuries: { legendName: inningsRemaining } - injured legends
    // legendBuffs: { legendName: { inningsRemaining, buffPercent } } - buffed legends
    legendInjuries: {},
    legendBuffs: {},
    hasTrainingCamp: false, // Voucher that reduces injury chance by 50%

    // Shop/Reroll system
    hasScoutReport: false, // Voucher that reduces base reroll cost by $2
    rerollsThisShop: 0, // Track rerolls to increment cost

    // Boss modifiers - generated at start of series for preview, applied when entering boss
    upcomingBossModifiers: [], // Preview of boss modifiers for current series
    bossModifiers: [], // Active boss modifiers (only during BOSS at-bat)

    // Voucher tracking - only one voucher can be purchased per series
    voucherBoughtThisSeries: false,
    // Track all purchased voucher effects to prevent repeats
    purchasedVoucherEffects: [],

    // Run statistics
    handsPlayed: 0,
    highestScore: 0,
    runStartTime: Date.now()
  };
}

// Series names for display
const SERIES_NAMES = {
  1: 'Draft Day',
  2: 'Minor League Promotion',
  3: 'Spring Training',
  4: 'Opening Day',
  5: 'All-Star Game',
  6: 'Wild Card Round',
  7: 'Divisional Round',
  8: 'League Championship',
  9: 'World Series'
};

/**
 * Get the display name for a series
 * @param {number} series - Series number
 * @returns {string} - Display name for the series
 */
export function getSeriesName(series) {
  if (SERIES_NAMES[series]) {
    return SERIES_NAMES[series];
  }
  // Endless mode (series 10+)
  return `Extra Innings ${series}`;
}

// Calculate target score for current At-Bat
// Based on Balatro's scoring scale (adjusted for our game)
export function calculateTargetScore(series, atBatType) {
  // Balatro-style scoring table
  // Series 1-9 with FIRST (Small), SECOND (Big), BOSS targets
  const scoreTable = {
    1: { FIRST: 300, SECOND: 300, BOSS: 300 },
    2: { FIRST: 800, SECOND: 900, BOSS: 1000 },
    3: { FIRST: 2000, SECOND: 2600, BOSS: 3200 },
    4: { FIRST: 5000, SECOND: 8000, BOSS: 9000 },
    5: { FIRST: 11000, SECOND: 20000, BOSS: 25000 },
    6: { FIRST: 20000, SECOND: 36000, BOSS: 60000 },
    7: { FIRST: 35000, SECOND: 60000, BOSS: 110000 },
    8: { FIRST: 50000, SECOND: 100000, BOSS: 200000 },
    9: { FIRST: 75000, SECOND: 150000, BOSS: 300000 }
  };

  // If series exists in table, use it; otherwise calculate for endless mode
  if (scoreTable[series]) {
    return scoreTable[series][atBatType] || scoreTable[series].FIRST;
  }

  // Endless mode (series 10+) - exponential scaling
  const lastKnown = scoreTable[9];
  const extraSeries = series - 9;
  const multiplier = Math.pow(2.5, extraSeries);

  const baseScores = {
    FIRST: lastKnown.FIRST,
    SECOND: lastKnown.SECOND,
    BOSS: lastKnown.BOSS
  };

  return Math.floor((baseScores[atBatType] || baseScores.FIRST) * multiplier);
}

// Get At-Bat name for display
export function getAtBatName(atBatType, series) {
  const names = {
    FIRST: 'First At-Bat',
    SECOND: 'Second At-Bat',
    BOSS: 'Boss At-Bat'
  };
  return `Series ${series} - ${names[atBatType] || 'At-Bat'}`;
}

// Calculate reward for beating an At-Bat
export function calculateReward(series, atBatType) {
  const baseReward = {
    FIRST: 3,
    SECOND: 4,
    BOSS: 5
  };
  return (baseReward[atBatType] || 3) + series;
}

// Legend to Home Park mapping
// Maps legend names to their home ballpark name (if one exists in the game)
const LEGEND_HOME_PARKS = {
  // Yankees
  'Babe Ruth': 'Yankee Stadium',
  'Mickey Mantle': 'Yankee Stadium',
  'Derek Jeter': 'Yankee Stadium',
  'Mariano Rivera': 'Yankee Stadium',
  'Yogi Berra': 'Yankee Stadium',
  'Reggie Jackson': 'Yankee Stadium',

  // Red Sox
  'Ted Williams': 'Fenway Park',

  // Giants (Oracle Park)
  'Willie Mays': 'Oracle Park',

  // Dodgers
  'Shohei Ohtani': 'Dodger Stadium',
  'Jackie Robinson': 'Dodger Stadium',
  'Sandy Koufax': 'Dodger Stadium',

  // Cardinals
  'Ozzie Smith': 'Busch Stadium',

  // Cubs
  'Ernie Banks': 'Wrigley Field',

  // Padres
  'Tony Gwynn': 'Petco Park',

  // Royals
  'George Brett': 'Kauffman Stadium',

  // Orioles
  'Cal Ripken Jr.': 'Camden Yards',

  // Pirates
  'Roberto Clemente': 'PNC Park',

  // Rockies (played there late career)
  // None currently

  // No home park in game (will not get home bonus):
  // Hank Aaron (Atlanta - no Truist Park)
  // Sandy Koufax (Brooklyn Dodgers era)
  // Ken Griffey Jr. (Seattle - no T-Mobile Park)
  // Rickey Henderson (Oakland - no Coliseum)
  // Nolan Ryan (multiple teams)
  // Walter Johnson (Washington - no park)
};

/**
 * Get the home park for a legend (if one exists in the game)
 */
export function getLegendHomePark(legendName) {
  return LEGEND_HOME_PARKS[legendName] || null;
}

/**
 * Calculate home/away game bonuses for all legends
 * @param {Array} legends - Player's legend cards
 * @param {Array} ballparks - Player's ballpark cards
 * @param {Object} legendInjuries - Current injury state (injured legends don't get bonuses)
 * @returns {Object} - { homeWinners: [], awayWinners: [], totalMultiplier: number }
 */
export function calculateHomeAwayBonuses(legends, ballparks, legendInjuries = {}) {
  const homeWinners = [];
  const awayWinners = [];
  let totalMultiplier = 1;

  const ownedParkNames = ballparks.map(b => b.name);

  for (const legend of legends) {
    // Skip injured legends - they can't earn home/away bonuses
    if (isLegendInjured(legend.name, legendInjuries)) continue;

    // Skip staff members (like Dr. Awesome) - they don't get home/away bonuses
    if (legend.isStaff || legend.noHomeAwayBonus) continue;

    const homePark = getLegendHomePark(legend.name);

    // Check for Home Game Winner (1/4 chance = 25%)
    if (homePark && ownedParkNames.includes(homePark)) {
      if (Math.random() < 0.25) {
        homeWinners.push({
          legend: legend.name,
          park: homePark,
          multiplier: 1.5
        });
        totalMultiplier *= 1.5;
      }
    }

    // Check for Away Game Winner (1/60 chance per non-home park)
    for (const park of ballparks) {
      // Skip if this is the legend's home park
      if (park.name === homePark) continue;

      // 1/60 chance for away win at each non-home park
      if (Math.random() < (1/60)) {
        awayWinners.push({
          legend: legend.name,
          park: park.name,
          multiplier: 5
        });
        totalMultiplier *= 5;
      }
    }
  }

  return {
    homeWinners,
    awayWinners,
    totalMultiplier
  };
}

// ============================================
// INJURY / MEDICAL PACK SYSTEM
// ============================================

// Injury chances by rarity - legendary stars get injured more often (more usage/pressure)
const INJURY_CHANCE_LEGENDARY = 0.04; // 4% for legendary
const INJURY_CHANCE_OTHER = 0.02; // 2% for common, uncommon, rare

/**
 * Get injury chance based on legend rarity
 */
function getInjuryChance(rarity) {
  return rarity === 'legendary' ? INJURY_CHANCE_LEGENDARY : INJURY_CHANCE_OTHER;
}

/**
 * Check if a legend is injured
 */
export function isLegendInjured(legendName, legendInjuries = {}) {
  return (legendInjuries[legendName] || 0) > 0;
}

/**
 * Get the buff multiplier for a legend (1.0 if no buff, 1.2 if buffed)
 */
export function getLegendBuffMultiplier(legendName, legendBuffs = {}) {
  const buff = legendBuffs[legendName];
  if (buff && buff.inningsRemaining > 0) {
    return 1 + (buff.buffPercent / 100); // e.g., 1.2 for 20% buff
  }
  return 1.0;
}

/**
 * Check if player has Dr. Awesome on the team (provides injury immunity)
 */
export function hasDrAwesome(legends) {
  return legends.some(l => l.name === 'Dr. Awesome');
}

/**
 * Roll for injuries after playing a hand
 * @param {Array} legends - Player's legend cards
 * @param {Object} currentInjuries - Current injury state
 * @param {boolean} hasTrainingCamp - Whether player has Training Camp voucher
 * @returns {Object} - { newInjuries: {}, injuredThisHand: [] }
 */
export function rollForInjuries(legends, currentInjuries = {}, hasTrainingCamp = false) {
  const newInjuries = { ...currentInjuries };
  const injuredThisHand = []; // Array of { name, innings } objects

  // Dr. Awesome provides complete injury immunity to the team
  if (hasDrAwesome(legends)) {
    return { newInjuries, injuredThisHand };
  }

  for (const legend of legends) {
    // Skip already injured legends
    if (isLegendInjured(legend.name, currentInjuries)) continue;

    // Get base injury chance based on rarity (4% legendary, 2% others)
    let injuryChance = getInjuryChance(legend.rarity);

    // Training Camp voucher reduces injury chance by 50%
    if (hasTrainingCamp) {
      injuryChance *= 0.5;
    }

    // Roll for injury
    if (Math.random() < injuryChance) {
      // Random injury duration: 2, 3, 4, 5, or 6 innings
      const injuryDuration = Math.floor(Math.random() * 5) + 2;
      newInjuries[legend.name] = injuryDuration;
      injuredThisHand.push({ name: legend.name, innings: injuryDuration });
    }
  }

  return { newInjuries, injuredThisHand };
}

/**
 * Decrement injury/buff counters at end of inning (At-Bat)
 * @param {Object} injuries - Current injuries
 * @param {Object} buffs - Current buffs
 * @returns {Object} - { injuries, buffs, healed: [], buffExpired: [] }
 */
export function decrementInjuryBuffCounters(injuries = {}, buffs = {}) {
  const newInjuries = {};
  const newBuffs = {};
  const healed = [];
  const buffExpired = [];

  // Decrement injuries
  for (const [legendName, inningsLeft] of Object.entries(injuries)) {
    const newCount = inningsLeft - 1;
    if (newCount > 0) {
      newInjuries[legendName] = newCount;
    } else {
      healed.push(legendName);
    }
  }

  // Decrement buffs
  for (const [legendName, buff] of Object.entries(buffs)) {
    const newCount = buff.inningsRemaining - 1;
    if (newCount > 0) {
      newBuffs[legendName] = { ...buff, inningsRemaining: newCount };
    } else {
      buffExpired.push(legendName);
    }
  }

  return { injuries: newInjuries, buffs: newBuffs, healed, buffExpired };
}

/**
 * Apply medical pack effect
 * @param {Array} legends - Player's legend cards
 * @param {Object} injuries - Current injuries
 * @param {Object} buffs - Current buffs
 * @returns {Object} - { injuries, buffs, effect: 'healed'|'buffed', affectedLegend }
 */
export function applyMedicalPack(legends, injuries = {}, buffs = {}) {
  const newInjuries = { ...injuries };
  const newBuffs = { ...buffs };

  // Check if any legend is injured
  const injuredLegends = legends.filter(l => isLegendInjured(l.name, injuries));

  if (injuredLegends.length > 0) {
    // Heal a random injured legend
    const toHeal = injuredLegends[Math.floor(Math.random() * injuredLegends.length)];
    delete newInjuries[toHeal.name];
    return {
      injuries: newInjuries,
      buffs: newBuffs,
      effect: 'healed',
      affectedLegend: toHeal.name
    };
  } else if (legends.length > 0) {
    // No injuries - buff a random legend by 20% for 3 innings
    const toBuff = legends[Math.floor(Math.random() * legends.length)];
    newBuffs[toBuff.name] = {
      inningsRemaining: 3,
      buffPercent: 20
    };
    return {
      injuries: newInjuries,
      buffs: newBuffs,
      effect: 'buffed',
      affectedLegend: toBuff.name
    };
  }

  return { injuries: newInjuries, buffs: newBuffs, effect: 'none', affectedLegend: null };
}

/**
 * Get Medical Pack price based on series
 */
export function getMedicalPackPrice(series) {
  return series * 5;
}

// Boss At-Bat modifiers (debuffs) - these make Boss rounds more challenging
const BOSS_MODIFIERS = [
  // Suit debuffs
  {
    id: 'debuff_hearts',
    name: 'Heartless',
    description: 'Hearts are debuffed (-5 chips each)',
    icon: '💔',
    type: 'suit_debuff',
    suit: 'hearts',
    chipPenalty: 5
  },
  {
    id: 'debuff_diamonds',
    name: 'Diamond in the Rough',
    description: 'Diamonds are debuffed (-5 chips each)',
    icon: '💎',
    type: 'suit_debuff',
    suit: 'diamonds',
    chipPenalty: 5
  },
  {
    id: 'debuff_clubs',
    name: 'Clubbed',
    description: 'Clubs are debuffed (-5 chips each)',
    icon: '♣️',
    type: 'suit_debuff',
    suit: 'clubs',
    chipPenalty: 5
  },
  {
    id: 'debuff_spades',
    name: 'Spade Work',
    description: 'Spades are debuffed (-5 chips each)',
    icon: '♠️',
    type: 'suit_debuff',
    suit: 'spades',
    chipPenalty: 5
  },

  // Color debuffs
  {
    id: 'debuff_red',
    name: 'Seeing Red',
    description: 'Red cards give no chip bonus',
    icon: '🔴',
    type: 'color_debuff',
    color: 'red',
    nullifyChips: true
  },
  {
    id: 'debuff_black',
    name: 'Blackout',
    description: 'Black cards give no chip bonus',
    icon: '⚫',
    type: 'color_debuff',
    color: 'black',
    nullifyChips: true
  },

  // Ballpark debuffs
  {
    id: 'debuff_ballparks',
    name: 'Away Game',
    description: 'All ballpark bonuses are disabled',
    icon: '🚫🏟️',
    type: 'ballpark_debuff',
    disableBallparks: true
  },

  // Legend debuffs by team association
  {
    id: 'debuff_yankees',
    name: 'Bronx Blues',
    description: 'Yankees legends are debuffed (Babe Ruth, Mickey Mantle, Derek Jeter, Mariano Rivera, Yogi Berra, Reggie Jackson)',
    icon: '🗽',
    type: 'legend_debuff',
    affectedLegends: ['Babe Ruth', 'Mickey Mantle', 'Derek Jeter', 'Mariano Rivera', 'Yogi Berra', 'Reggie Jackson']
  },
  {
    id: 'debuff_redsox',
    name: 'Curse of the Bambino',
    description: 'Red Sox legends are debuffed (Ted Williams, Nolan Ryan)',
    icon: '🧦',
    type: 'legend_debuff',
    affectedLegends: ['Ted Williams', 'Nolan Ryan']
  },

  // Hand type debuffs
  {
    id: 'debuff_pairs',
    name: 'Odd One Out',
    description: 'Pairs and Two Pairs give -2 mult',
    icon: '👯',
    type: 'hand_debuff',
    affectedHands: ['PAIR', 'TWO_PAIR'],
    multPenalty: 2
  },
  {
    id: 'debuff_flushes',
    name: 'Color Blind',
    description: 'Flushes give -3 mult',
    icon: '🎨',
    type: 'hand_debuff',
    affectedHands: ['FLUSH', 'STRAIGHT_FLUSH', 'ROYAL_FLUSH'],
    multPenalty: 3
  },

  // Face card debuffs
  {
    id: 'debuff_face',
    name: 'Faceless',
    description: 'Face cards (J, Q, K) give no chip bonus',
    icon: '👤',
    type: 'face_debuff',
    nullifyFaceChips: true
  },

  // Resource debuffs
  {
    id: 'debuff_discards',
    name: 'No Mulligans',
    description: 'Start with -1 discard',
    icon: '🚫🗑️',
    type: 'resource_debuff',
    discardPenalty: 1
  },
  {
    id: 'debuff_hands',
    name: 'Short Inning',
    description: 'Start with -1 hand',
    icon: '⏱️',
    type: 'resource_debuff',
    handPenalty: 1
  },

  // Score multiplier debuffs
  {
    id: 'debuff_mult_cap',
    name: 'Grounded',
    description: 'Max multiplier is capped at 10',
    icon: '📉',
    type: 'mult_cap',
    maxMult: 10
  },

  // Chip threshold
  {
    id: 'debuff_chip_threshold',
    name: 'Chip Away',
    description: 'Chips under 50 are halved',
    icon: '💰',
    type: 'chip_threshold',
    threshold: 50,
    penalty: 0.5
  },

  // Money debuffs
  {
    id: 'debuff_salary_cap',
    name: 'Salary Cap',
    description: 'Lose $5 for each hand played this At-Bat',
    icon: '💸',
    type: 'money_debuff',
    moneyPerHand: -5
  }
];

// Get a random boss modifier for a given series
export function getRandomBossModifier(series) {
  // Higher series can have harder modifiers
  let availableModifiers = [...BOSS_MODIFIERS];

  // Series 1-2: Only suit debuffs and simple ones
  if (series <= 2) {
    availableModifiers = availableModifiers.filter(m =>
      m.type === 'suit_debuff' || m.id === 'debuff_pairs'
    );
  }
  // Series 3-4: Add color and hand debuffs
  else if (series <= 4) {
    availableModifiers = availableModifiers.filter(m =>
      m.type !== 'mult_cap' && m.type !== 'resource_debuff'
    );
  }
  // Series 5+: All modifiers available

  const randomIndex = Math.floor(Math.random() * availableModifiers.length);
  return availableModifiers[randomIndex];
}

// Get boss modifier for a series - always exactly ONE modifier
export function getBossModifiers(series) {
  // Each boss has exactly one challenge effect
  return [getRandomBossModifier(series)];
}
