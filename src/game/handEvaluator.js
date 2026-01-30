// Poker hand recognition engine for Diamond Dynasty
// Evaluates a set of cards and determines the best poker hand

import { RANK_VALUES } from '../data/cards.js';
import { isLegendInjured, getLegendBuffMultiplier } from './gameState.js';

/**
 * Evaluate a hand of cards and return the best poker hand
 * @param {Array} cards - Array of card objects (1-5 cards)
 * @returns {Object} - { type: string, scoringCards: Card[], name: string }
 */
export function evaluateHand(cards) {
  if (!cards || cards.length === 0) {
    return { type: 'HIGH_CARD', scoringCards: [], name: 'No Cards' };
  }

  // Sort cards by value (high to low)
  const sorted = [...cards].sort((a, b) => b.value - a.value);

  // Get counts for analysis
  const rankCounts = getRankCounts(cards);
  const suitCounts = getSuitCounts(cards);
  const isFlush = cards.length >= 5 && Object.values(suitCounts).some(count => count >= 5);
  const straightInfo = checkStraight(sorted);
  const isStraight = straightInfo.isStraight;

  // Check hands from best to worst

  // Royal Flush: A-K-Q-J-10 all same suit
  if (isFlush && isStraight && straightInfo.highCard === 14) {
    return {
      type: 'ROYAL_FLUSH',
      scoringCards: straightInfo.cards,
      name: 'Royal Flush'
    };
  }

  // Straight Flush: 5 sequential cards, same suit
  if (isFlush && isStraight) {
    return {
      type: 'STRAIGHT_FLUSH',
      scoringCards: straightInfo.cards,
      name: 'Straight Flush'
    };
  }

  // Four of a Kind
  const fourKind = findNOfAKind(cards, 4);
  if (fourKind) {
    return {
      type: 'FOUR_OF_A_KIND',
      scoringCards: fourKind,
      name: 'Four of a Kind'
    };
  }

  // Full House: Three of a kind + pair
  const threeKind = findNOfAKind(cards, 3);
  const pair = findNOfAKind(cards.filter(c => !threeKind?.includes(c)), 2);
  if (threeKind && pair) {
    return {
      type: 'FULL_HOUSE',
      scoringCards: [...threeKind, ...pair],
      name: 'Full House'
    };
  }

  // Flush: 5 cards same suit
  if (isFlush) {
    const flushSuit = Object.entries(suitCounts).find(([_, count]) => count >= 5)?.[0];
    const flushCards = sorted.filter(c => c.suit === flushSuit).slice(0, 5);
    return {
      type: 'FLUSH',
      scoringCards: flushCards,
      name: 'Flush'
    };
  }

  // Straight: 5 sequential cards
  if (isStraight) {
    return {
      type: 'STRAIGHT',
      scoringCards: straightInfo.cards,
      name: 'Straight'
    };
  }

  // Three of a Kind
  if (threeKind) {
    return {
      type: 'THREE_OF_A_KIND',
      scoringCards: threeKind,
      name: 'Three of a Kind'
    };
  }

  // Two Pair
  const allPairs = findAllPairs(cards);
  if (allPairs.length >= 2) {
    return {
      type: 'TWO_PAIR',
      scoringCards: [...allPairs[0], ...allPairs[1]],
      name: 'Two Pair'
    };
  }

  // Pair
  if (allPairs.length === 1) {
    return {
      type: 'PAIR',
      scoringCards: allPairs[0],
      name: 'Pair'
    };
  }

  // High Card - just the highest card scores
  return {
    type: 'HIGH_CARD',
    scoringCards: [sorted[0]],
    name: 'High Card'
  };
}

/**
 * Count occurrences of each rank
 */
function getRankCounts(cards) {
  const counts = {};
  for (const card of cards) {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
  }
  return counts;
}

/**
 * Count occurrences of each suit
 */
function getSuitCounts(cards) {
  const counts = {};
  for (const card of cards) {
    counts[card.suit] = (counts[card.suit] || 0) + 1;
  }
  return counts;
}

/**
 * Find N cards of the same rank
 */
function findNOfAKind(cards, n) {
  const rankCounts = getRankCounts(cards);
  for (const [rank, count] of Object.entries(rankCounts)) {
    if (count >= n) {
      return cards.filter(c => c.rank === rank).slice(0, n);
    }
  }
  return null;
}

/**
 * Find all pairs in the hand
 */
function findAllPairs(cards) {
  const rankCounts = getRankCounts(cards);
  const pairs = [];

  // Sort by value to get highest pairs first
  const sortedRanks = Object.entries(rankCounts)
    .filter(([_, count]) => count >= 2)
    .sort((a, b) => RANK_VALUES[b[0]] - RANK_VALUES[a[0]]);

  for (const [rank, _] of sortedRanks) {
    const pairCards = cards.filter(c => c.rank === rank).slice(0, 2);
    pairs.push(pairCards);
  }

  return pairs;
}

/**
 * Check if cards contain a straight (5 sequential values)
 * Also handles Ace-low straight (A-2-3-4-5)
 */
function checkStraight(sortedCards) {
  if (sortedCards.length < 5) {
    return { isStraight: false, cards: [], highCard: 0 };
  }

  // Get unique values
  const uniqueCards = [];
  const seenValues = new Set();
  for (const card of sortedCards) {
    if (!seenValues.has(card.value)) {
      seenValues.add(card.value);
      uniqueCards.push(card);
    }
  }

  // Check for regular straight
  for (let i = 0; i <= uniqueCards.length - 5; i++) {
    const slice = uniqueCards.slice(i, i + 5);
    if (isSequential(slice)) {
      return {
        isStraight: true,
        cards: slice,
        highCard: slice[0].value
      };
    }
  }

  // Check for Ace-low straight (A-2-3-4-5)
  // Ace value is 14, we need 14, 5, 4, 3, 2
  const values = uniqueCards.map(c => c.value);
  if (values.includes(14) && values.includes(2) && values.includes(3) &&
      values.includes(4) && values.includes(5)) {
    const aceLowCards = [
      uniqueCards.find(c => c.value === 5),
      uniqueCards.find(c => c.value === 4),
      uniqueCards.find(c => c.value === 3),
      uniqueCards.find(c => c.value === 2),
      uniqueCards.find(c => c.value === 14)  // Ace counts as 1 here
    ];
    return {
      isStraight: true,
      cards: aceLowCards,
      highCard: 5  // 5-high straight
    };
  }

  return { isStraight: false, cards: [], highCard: 0 };
}

/**
 * Check if 5 cards are sequential
 */
function isSequential(cards) {
  if (cards.length !== 5) return false;
  for (let i = 0; i < 4; i++) {
    if (cards[i].value - cards[i + 1].value !== 1) {
      return false;
    }
  }
  return true;
}

/**
 * Generate detailed scoring steps for animation
 * Returns an array of step objects for the ScoringAnimation component
 *
 * @param {Object} handResult - Result from evaluateHand
 * @param {Object} handLevels - Current levels for each hand type
 * @param {Array} legends - Active legend cards
 * @param {Object} gameState - Current game state
 * @param {Array} allSelectedCards - All cards selected for the hand
 * @returns {Array} - Array of scoring step objects
 */
export function generateScoringSteps(handResult, handLevels = {}, legends = [], gameState = {}, allSelectedCards = null) {
  const { type, scoringCards, name } = handResult;
  const level = handLevels[type] || 1;
  const ballparks = gameState?.ballparks || [];
  const bossModifiers = gameState?.bossModifiers || [];
  const legendInjuries = gameState?.legendInjuries || {};
  const legendBuffs = gameState?.legendBuffs || {};

  const steps = [];
  const baseScore = HAND_BASE_SCORES[type] || { chips: 0, mult: 1 };
  const levelBonus = level - 1;

  // Step 1: Base hand chips and mult
  let baseChips = baseScore.chips + (levelBonus * 10);
  let baseMult = baseScore.mult + (levelBonus * 1);

  // Apply hand type debuffs from boss modifiers
  for (const mod of bossModifiers) {
    if (mod.type === 'hand_debuff' && mod.affectedHands?.includes(type)) {
      baseMult = Math.max(1, baseMult - (mod.multPenalty || 0));
    }
  }

  steps.push({
    type: 'base',
    chips: baseChips,
    mult: baseMult,
    handName: name + (level > 1 ? ` Lv.${level}` : ''),
    source: name
  });

  // Get ordered scoring cards
  const scoringCardIds = new Set(scoringCards.map(c => c.id));
  const orderedScoringCards = allSelectedCards
    ? allSelectedCards.filter(c => scoringCardIds.has(c.id))
    : scoringCards;

  // Step 2: Process each scoring card
  let multMultiplier = 1;

  for (const card of orderedScoringCards) {
    const cardChips = applyBossCardDebuffsForSteps(card, bossModifiers);
    const cardName = `${card.rank}${getSuitSymbol(card.suit)}`;

    // Add card chips
    if (cardChips > 0) {
      steps.push({
        type: 'chips',
        value: cardChips,
        source: cardName
      });
    }

    // Apply card enhancements
    if (card.enhancement && card.enhancement.bonus) {
      const bonus = card.enhancement.bonus;

      if (bonus.chips) {
        steps.push({
          type: 'chips',
          value: bonus.chips,
          source: `${cardName} ${card.enhancement.name}`
        });
      }

      if (bonus.mult) {
        steps.push({
          type: 'plusMult',
          value: bonus.mult,
          source: `${cardName} ${card.enhancement.name}`
        });
      }

      if (bonus.clutchMult && bonus.clutchChance) {
        if (Math.random() < bonus.clutchChance) {
          steps.push({
            type: 'plusMult',
            value: bonus.clutchMult,
            source: `${cardName} CLUTCH!`
          });
        }
      }

      if (bonus.multMult) {
        steps.push({
          type: 'timesMult',
          value: bonus.multMult,
          source: `${cardName} ${card.enhancement.name}`
        });
      }
    }
  }

  // Step 3: Ballpark effects
  const ballparksDisabled = bossModifiers.some(mod => mod.type === 'ballpark_debuff' && mod.disableBallparks);

  if (!ballparksDisabled) {
    for (const ballpark of ballparks) {
      const effect = getBallparkEffect(ballpark, type, orderedScoringCards, gameState);
      if (effect) {
        steps.push({
          ...effect,
          source: `🏟️ ${ballpark.name}`
        });
      }
    }
  }

  // Step 4: Legend effects
  for (const legend of legends) {
    // Skip injured legends
    if (isLegendInjured(legend.name, legendInjuries)) continue;

    // Skip debuffed legends
    if (isLegendDebuffedForSteps(legend.name, bossModifiers)) continue;

    const buffMultiplier = getLegendBuffMultiplier(legend.name, legendBuffs);
    const effect = getLegendEffect(legend, orderedScoringCards, allSelectedCards, gameState, buffMultiplier);

    if (effect) {
      steps.push({
        ...effect,
        source: `⭐ ${legend.name}${buffMultiplier > 1 ? ' 💪' : ''}`
      });
    }
  }

  return steps;
}

// Helper: Get suit symbol for display
function getSuitSymbol(suit) {
  const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
  return symbols[suit] || suit[0];
}

// Helper: Apply boss card debuffs (duplicate of internal function for steps)
function applyBossCardDebuffsForSteps(card, bossModifiers) {
  let cardChips = card.chips;

  for (const mod of bossModifiers) {
    if (mod.type === 'suit_debuff' && card.suit === mod.suit) {
      cardChips = Math.max(0, cardChips - mod.chipPenalty);
    }
    if (mod.type === 'color_debuff') {
      const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
      const isBlack = card.suit === 'spades' || card.suit === 'clubs';
      if ((mod.color === 'red' && isRed) || (mod.color === 'black' && isBlack)) {
        if (mod.nullifyChips) cardChips = 0;
      }
    }
    if (mod.type === 'face_debuff' && mod.nullifyFaceChips) {
      if (['J', 'Q', 'K'].includes(card.rank)) {
        cardChips = 0;
      }
    }
  }

  return cardChips;
}

// Helper: Check if legend is debuffed
function isLegendDebuffedForSteps(legendName, bossModifiers) {
  for (const mod of bossModifiers) {
    if (mod.type === 'legend_debuff' && mod.affectedLegends?.includes(legendName)) {
      return true;
    }
  }
  return false;
}

// Helper: Get ballpark effect for a hand
function getBallparkEffect(ballpark, handType, scoringCards, gameState) {
  switch (ballpark.bonus) {
    case 'flush_chips':
      if (handType === 'FLUSH' || handType === 'STRAIGHT_FLUSH' || handType === 'ROYAL_FLUSH') {
        return { type: 'chips', value: 50 };
      }
      break;
    case 'flat_mult':
      return { type: 'plusMult', value: 3 };
    case 'flat_chips':
      return { type: 'chips', value: 30 };
    case 'pair_chips':
      if (['PAIR', 'TWO_PAIR', 'FULL_HOUSE', 'THREE_OF_A_KIND', 'FOUR_OF_A_KIND'].includes(handType)) {
        return { type: 'chips', value: 15 };
      }
      break;
    case 'straight_mult':
      if (handType === 'STRAIGHT' || handType === 'STRAIGHT_FLUSH' || handType === 'ROYAL_FLUSH') {
        return { type: 'plusMult', value: 20 };
      }
      break;
    case 'fullhouse_chips':
      if (handType === 'FULL_HOUSE') {
        return { type: 'chips', value: 40 };
      }
      break;
    case 'trips_mult':
      if (['THREE_OF_A_KIND', 'FULL_HOUSE', 'FOUR_OF_A_KIND'].includes(handType)) {
        return { type: 'plusMult', value: 15 };
      }
      break;
    default:
      return null;
  }
  return null;
}

// Helper: Get legend effect for a hand
function getLegendEffect(legend, scoringCards, allCards, gameState, buffMultiplier) {
  const cardsToCheck = allCards || scoringCards;

  switch (legend.name) {
    case 'Babe Ruth':
      return { type: 'plusMult', value: Math.floor(50 * buffMultiplier) };
    case 'Willie Mays':
      return { type: 'plusMult', value: Math.floor(40 * buffMultiplier) };
    case 'Ted Williams': {
      const faceCards = scoringCards.filter(c => ['J', 'Q', 'K'].includes(c.rank));
      if (faceCards.length > 0) {
        return { type: 'chips', value: Math.floor(faceCards.length * 100 * buffMultiplier) };
      }
      break;
    }
    case 'Shohei Ohtani': {
      const handsPlayed = gameState?.handsPlayed || 0;
      if (handsPlayed > 0) {
        return { type: 'chips', value: Math.floor(handsPlayed * 10 * buffMultiplier) };
      }
      break;
    }
    case 'Walter Johnson':
      return { type: 'plusMult', value: Math.floor(20 * buffMultiplier) };
    case 'Hank Aaron': {
      const faceCards = scoringCards.filter(c => ['J', 'Q', 'K'].includes(c.rank));
      if (faceCards.length > 0) {
        return { type: 'chips', value: Math.floor(faceCards.length * 25 * buffMultiplier) };
      }
      break;
    }
    case 'Sandy Koufax':
      if (gameState?.discardsRemaining === (gameState?.baseDiscards || 3)) {
        return { type: 'plusMult', value: Math.floor(20 * buffMultiplier) };
      }
      break;
    case 'Mickey Mantle': {
      const hasRed = cardsToCheck.some(c => c.suit === 'hearts' || c.suit === 'diamonds');
      const hasBlack = cardsToCheck.some(c => c.suit === 'spades' || c.suit === 'clubs');
      if (hasRed && hasBlack) {
        return { type: 'plusMult', value: Math.floor(15 * buffMultiplier) };
      }
      break;
    }
    case 'Derek Jeter':
      if (gameState?.legends?.length >= 5) {
        return { type: 'plusMult', value: Math.floor(10 * buffMultiplier) };
      }
      break;
    case 'Ken Griffey Jr.': {
      const aces = scoringCards.filter(c => c.rank === 'A');
      if (aces.length > 0) {
        return { type: 'plusMult', value: Math.floor(aces.length * 15 * buffMultiplier) };
      }
      break;
    }
    case 'Mariano Rivera':
      if (gameState?.handsRemaining === 1) {
        return { type: 'plusMult', value: Math.floor(30 * buffMultiplier) };
      }
      break;
    case 'Jackie Robinson':
      return { type: 'plusMult', value: Math.floor(10 * buffMultiplier) };
    case 'Cal Ripken Jr.':
      return { type: 'plusMult', value: Math.floor(8 * buffMultiplier) };
    case 'Tony Gwynn':
      return { type: 'chips', value: Math.floor(20 * buffMultiplier) };
    case 'Reggie Jackson':
      if (gameState?.atBatType === 'BOSS') {
        return { type: 'plusMult', value: Math.floor(25 * buffMultiplier) };
      }
      break;
    case 'Yogi Berra':
      return { type: 'chips', value: Math.floor((10 + Math.random() * 21) * buffMultiplier) };
    case 'Ozzie Smith':
      return { type: 'chips', value: Math.floor(15 * buffMultiplier) };
    case 'Ernie Banks':
      return { type: 'chips', value: Math.floor(15 * buffMultiplier) };
    case 'George Brett':
      if (gameState && gameState.currentScore < gameState.targetScore) {
        return { type: 'timesMult', value: Math.round(3 * buffMultiplier * 10) / 10 };
      }
      break;
    case 'Rickey Henderson':
      return { type: 'chips', value: Math.floor(10 * buffMultiplier) };
    case 'Nolan Ryan':
      return { type: 'chips', value: Math.floor(25 * buffMultiplier) };
    default:
      return null;
  }
  return null;
}

// Base scoring values for each hand type
const HAND_BASE_SCORES = {
  HIGH_CARD:       { chips: 5,   mult: 1 },
  PAIR:            { chips: 10,  mult: 2 },
  TWO_PAIR:        { chips: 20,  mult: 2 },
  THREE_OF_A_KIND: { chips: 30,  mult: 3 },
  STRAIGHT:        { chips: 30,  mult: 4 },
  FLUSH:           { chips: 35,  mult: 4 },
  FULL_HOUSE:      { chips: 40,  mult: 4 },
  FOUR_OF_A_KIND:  { chips: 60,  mult: 7 },
  STRAIGHT_FLUSH:  { chips: 100, mult: 8 },
  ROYAL_FLUSH:     { chips: 100, mult: 8 },
  FIVE_OF_A_KIND:  { chips: 120, mult: 12 },
  FLUSH_HOUSE:     { chips: 140, mult: 14 },
  FLUSH_FIVE:      { chips: 160, mult: 16 }
};

// Export for use in hand reference
export { HAND_BASE_SCORES };

/**
 * Apply Legend effects to scoring
 * @param {Object} context - { chips, mult, handType, scoringCards, allCards, gameState }
 * @param {Array} legends - Active legend cards
 * @param {Array} bossModifiers - Active boss modifiers (for legend debuffs)
 * @returns {Object} - { chips, mult, legendEffects }
 */
function applyLegendEffects(context, legends, bossModifiers = []) {
  let { chips, mult } = context;
  const legendEffects = [];
  const legendInjuries = context.gameState?.legendInjuries || {};
  const legendBuffs = context.gameState?.legendBuffs || {};

  for (const legend of legends) {
    // Check if this legend is injured - skip their effects entirely
    if (isLegendInjured(legend.name, legendInjuries)) {
      legendEffects.push({
        legend: legend.name,
        effect: '🤕 INJURED (No effect)',
        debuffed: true,
        injured: true
      });
      continue; // Skip this legend's effect
    }

    // Check if this legend is debuffed by boss modifiers
    if (isLegendDebuffed(legend.name, bossModifiers)) {
      legendEffects.push({
        legend: legend.name,
        effect: '🚫 DEBUFFED (Boss modifier)',
        debuffed: true
      });
      continue; // Skip this legend's effect
    }

    // Get buff multiplier if active (1.0 if no buff, 1.2 if buffed)
    const buffMultiplier = getLegendBuffMultiplier(legend.name, legendBuffs);
    const isBuffed = buffMultiplier > 1;

    let applied = false;
    let effectDescription = '';

    // Track base values before applying legend effect
    const chipsBefore = chips;
    const multBefore = mult;

    switch (legend.name) {
      // LEGENDARY
      case 'Babe Ruth':
        mult += Math.floor(50 * buffMultiplier);
        effectDescription = `+${Math.floor(50 * buffMultiplier)} Mult`;
        applied = true;
        break;

      case 'Willie Mays':
        mult += Math.floor(40 * buffMultiplier);
        effectDescription = `+${Math.floor(40 * buffMultiplier)} Mult`;
        applied = true;
        break;

      case 'Ted Williams':
        // +100 chips for each face card in scoring cards
        const faceCards = context.scoringCards.filter(c => ['J', 'Q', 'K'].includes(c.rank));
        if (faceCards.length > 0) {
          const bonus = Math.floor(faceCards.length * 100 * buffMultiplier);
          chips += bonus;
          effectDescription = `+${bonus} Chips (${faceCards.length} face cards)`;
          applied = true;
        }
        break;

      case 'Shohei Ohtani':
        // +10 chips and +2 mult for every hand played (tracked in gameState)
        const handsPlayed = context.gameState?.handsPlayed || 0;
        const ohtaniChips = Math.floor(handsPlayed * 10 * buffMultiplier);
        const ohtaniMult = Math.floor(handsPlayed * 2 * buffMultiplier);
        chips += ohtaniChips;
        mult += ohtaniMult;
        effectDescription = `+${ohtaniChips} Chips, +${ohtaniMult} Mult (${handsPlayed} hands played)`;
        applied = true;
        break;

      case 'Walter Johnson':
        // Flat bonus as placeholder (hand level boost would need different implementation)
        mult += Math.floor(20 * buffMultiplier);
        effectDescription = `+${Math.floor(20 * buffMultiplier)} Mult (The Big Train)`;
        applied = true;
        break;

      // RARE
      case 'Hank Aaron':
        // +25 chips per face card
        const hankFaceCards = context.scoringCards.filter(c => ['J', 'Q', 'K'].includes(c.rank));
        if (hankFaceCards.length > 0) {
          const bonus = Math.floor(hankFaceCards.length * 25 * buffMultiplier);
          chips += bonus;
          effectDescription = `+${bonus} Chips`;
          applied = true;
        }
        break;

      case 'Sandy Koufax':
        // +20 mult if no discards used this At-Bat (check gameState)
        if (context.gameState?.discardsRemaining === (context.gameState?.baseDiscards || 3)) {
          const bonus = Math.floor(20 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (Perfect game - no discards)`;
          applied = true;
        }
        break;

      case 'Mickey Mantle':
        // +15 mult if played cards contain both red and black cards
        // Check all cards in hand being playing, not just scoring cards
        const cardsToCheck = context.allCards || context.scoringCards;
        const hasRed = cardsToCheck.some(c => c.suit === 'hearts' || c.suit === 'diamonds');
        const hasBlack = cardsToCheck.some(c => c.suit === 'spades' || c.suit === 'clubs');
        if (hasRed && hasBlack) {
          const bonus = Math.floor(15 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (Switch hitter - red & black cards)`;
          applied = true;
        }
        break;

      // UNCOMMON
      case 'Derek Jeter':
        // +10 mult if you have 5 legends
        if (legends.length >= 5) {
          const bonus = Math.floor(10 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (Full roster)`;
          applied = true;
        }
        break;

      case 'Ken Griffey Jr.':
        // +15 mult for each Ace in scoring cards
        const aces = context.scoringCards.filter(c => c.rank === 'A');
        if (aces.length > 0) {
          const bonus = Math.floor(aces.length * 15 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (${aces.length} Aces)`;
          applied = true;
        }
        break;

      case 'Mariano Rivera':
        // +30 mult on final hand of At-Bat
        if (context.gameState?.handsRemaining === 1) {
          const bonus = Math.floor(30 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (Closing time)`;
          applied = true;
        }
        break;

      case 'Jackie Robinson':
        // Flat +10 mult (full wild suit effect would need card system changes)
        const jackieBonus = Math.floor(10 * buffMultiplier);
        mult += jackieBonus;
        effectDescription = `+${jackieBonus} Mult (Barrier Breaker)`;
        applied = true;
        break;

      case 'Cal Ripken Jr.':
        // Would need consecutive win tracking - for now flat bonus
        const calBonus = Math.floor(8 * buffMultiplier);
        mult += calBonus;
        effectDescription = `+${calBonus} Mult (Iron Man)`;
        applied = true;
        break;

      // COMMON
      case 'Tony Gwynn':
        const tonyBonus = Math.floor(20 * buffMultiplier);
        chips += tonyBonus;
        effectDescription = `+${tonyBonus} Chips`;
        applied = true;
        break;

      case 'Reggie Jackson':
        // +25 mult in Boss At-Bats
        if (context.gameState?.atBatType === 'BOSS') {
          const bonus = Math.floor(25 * buffMultiplier);
          mult += bonus;
          effectDescription = `+${bonus} Mult (Mr. October)`;
          applied = true;
        }
        break;

      case 'Yogi Berra':
        // Random +10-30 chips
        const yogiBase = 10 + Math.floor(Math.random() * 21);
        const yogiBonus = Math.floor(yogiBase * buffMultiplier);
        chips += yogiBonus;
        effectDescription = `+${yogiBonus} Chips (It ain't over...)`;
        applied = true;
        break;

      case 'Ozzie Smith':
        // Bonus noted but +1 hand effect handled elsewhere
        const ozzieBonus = Math.floor(15 * buffMultiplier);
        chips += ozzieBonus;
        effectDescription = `+${ozzieBonus} Chips (The Wizard)`;
        applied = true;
        break;

      case 'Ernie Banks':
        const ernieBonus = Math.floor(15 * buffMultiplier);
        chips += ernieBonus;
        effectDescription = `+${ernieBonus} Chips (Let\'s play two!)`;
        applied = true;
        break;

      case 'George Brett':
        // 3× mult when current score is less than target (Comeback King)
        // Buff increases the multiplier: base 3× becomes 3.6× with 20% buff
        if (context.gameState && context.gameState.currentScore < context.gameState.targetScore) {
          const buffedMult = 3 * buffMultiplier;
          mult = Math.floor(mult * buffedMult);
          effectDescription = `×${buffedMult.toFixed(1)} Mult (Comeback King!)`;
          applied = true;
        }
        break;

      case 'Rickey Henderson':
        // Money effect handled elsewhere, give small chip bonus
        const rickeyBonus = Math.floor(10 * buffMultiplier);
        chips += rickeyBonus;
        effectDescription = `+${rickeyBonus} Chips (Man of Steal)`;
        applied = true;
        break;

      case 'Nolan Ryan':
        // Score reduction handled elsewhere
        const nolanBonus = Math.floor(25 * buffMultiplier);
        chips += nolanBonus;
        effectDescription = `+${nolanBonus} Chips (The Ryan Express)`;
        applied = true;
        break;

      case 'Dr. Awesome':
        // Staff member - provides team injury immunity, no scoring bonus
        effectDescription = '🏥 Team Immunity';
        applied = true;
        break;

      default:
        // Unknown legend - no effect
        break;
    }

    if (applied) {
      // Add buff indicator to effect description if buffed
      if (isBuffed) {
        effectDescription += ' 💪+20%';
      }
      legendEffects.push({
        legend: legend.name,
        effect: effectDescription,
        buffed: isBuffed
      });
    }
  }

  return { chips, mult, legendEffects };
}

/**
 * Apply Ballpark effects to scoring
 * @param {Object} context - { chips, mult, handType, scoringCards, gameState }
 * @param {Array} ballparks - Active ballpark cards
 * @param {Array} bossModifiers - Active boss modifiers (for ballpark debuffs)
 * @returns {Object} - { chips, mult, ballparkEffects }
 */
function applyBallparkEffects(context, ballparks, bossModifiers = []) {
  let { chips, mult } = context;
  const ballparkEffects = [];

  // Check if ballparks are disabled by boss modifier
  const ballparksDisabled = bossModifiers.some(mod => mod.type === 'ballpark_debuff' && mod.disableBallparks);

  if (ballparksDisabled) {
    // Return early with debuff message for all ballparks
    for (const ballpark of ballparks) {
      ballparkEffects.push({
        ballpark: ballpark.name,
        effect: '🚫 DISABLED (Away Game)',
        debuffed: true
      });
    }
    return { chips, mult, ballparkEffects };
  }

  for (const ballpark of ballparks) {
    let applied = false;
    let effectDescription = '';

    switch (ballpark.bonus) {
      case 'flush_chips':
        // Fenway Park: +50 Chips on flushes
        if (context.handType === 'FLUSH' || context.handType === 'STRAIGHT_FLUSH' || context.handType === 'ROYAL_FLUSH') {
          chips += 50;
          effectDescription = '+50 Chips (Flush)';
          applied = true;
        }
        break;

      case 'flat_mult':
        // Yankee Stadium: +3 Mult always
        mult += 3;
        effectDescription = '+3 Mult';
        applied = true;
        break;

      case 'flat_chips':
        // Wrigley Field: +30 Chips always
        chips += 30;
        effectDescription = '+30 Chips';
        applied = true;
        break;

      case 'pair_chips':
        // Dodger Stadium: Pairs give +15 Chips
        if (context.handType === 'PAIR' || context.handType === 'TWO_PAIR' ||
            context.handType === 'FULL_HOUSE' || context.handType === 'THREE_OF_A_KIND' ||
            context.handType === 'FOUR_OF_A_KIND') {
          chips += 15;
          effectDescription = '+15 Chips (Pair bonus)';
          applied = true;
        }
        break;

      case 'straight_mult':
        // Oracle Park: +20 Mult on straights
        if (context.handType === 'STRAIGHT' || context.handType === 'STRAIGHT_FLUSH' || context.handType === 'ROYAL_FLUSH') {
          mult += 20;
          effectDescription = '+20 Mult (Straight)';
          applied = true;
        }
        break;

      case 'money_per_hand':
        // Camden Yards: +$2 per hand played - handled in game state, but show effect
        effectDescription = '+$2 (Hand played)';
        applied = true;
        break;

      case 'fullhouse_chips':
        // Busch Stadium: Full House +40 Chips
        if (context.handType === 'FULL_HOUSE') {
          chips += 40;
          effectDescription = '+40 Chips (Full House)';
          applied = true;
        }
        break;

      case 'extra_discard':
        // PNC Park: +1 Discard per round - handled in game state
        // No scoring effect, but mark as applied
        break;

      case 'hand_size':
        // Petco Park: +1 Hand size - handled in game state
        // No scoring effect, but mark as applied
        break;

      case 'chip_multiplier':
        // Coors Field: All chip bonuses +25%
        const chipBonus = Math.floor(chips * 0.25);
        chips += chipBonus;
        effectDescription = `+${chipBonus} Chips (+25%)`;
        applied = true;
        break;

      case 'trips_mult':
        // Kauffman Stadium: +15 Mult on Three of a Kind (or better containing trips)
        if (context.handType === 'THREE_OF_A_KIND' || context.handType === 'FULL_HOUSE' ||
            context.handType === 'FOUR_OF_A_KIND') {
          mult += 15;
          effectDescription = '+15 Mult (Three of a Kind)';
          applied = true;
        }
        break;

      default:
        break;
    }

    if (applied && effectDescription) {
      ballparkEffects.push({
        ballpark: ballpark.name,
        effect: effectDescription
      });
    }
  }

  return { chips, mult, ballparkEffects };
}

/**
 * Apply Boss modifier debuffs to card chips
 */
function applyBossCardDebuffs(card, bossModifiers) {
  let cardChips = card.chips;

  for (const mod of bossModifiers) {
    // Suit debuff: specific suit loses chips
    if (mod.type === 'suit_debuff' && card.suit === mod.suit) {
      cardChips = Math.max(0, cardChips - mod.chipPenalty);
    }

    // Color debuff: red or black cards nullified
    if (mod.type === 'color_debuff') {
      const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
      const isBlack = card.suit === 'spades' || card.suit === 'clubs';
      if ((mod.color === 'red' && isRed) || (mod.color === 'black' && isBlack)) {
        if (mod.nullifyChips) cardChips = 0;
      }
    }

    // Face card debuff
    if (mod.type === 'face_debuff' && mod.nullifyFaceChips) {
      if (['J', 'Q', 'K'].includes(card.rank)) {
        cardChips = 0;
      }
    }
  }

  return cardChips;
}

/**
 * Check if a legend is debuffed by boss modifiers
 */
function isLegendDebuffed(legendName, bossModifiers) {
  for (const mod of bossModifiers) {
    if (mod.type === 'legend_debuff' && mod.affectedLegends?.includes(legendName)) {
      return true;
    }
  }
  return false;
}

/**
 * Calculate the total score for a played hand
 *
 * SCORING ORDER (important for game balance):
 * 1. Establish hand type, get base chips/mult adjusted for level
 * 2. Process each scoring card LEFT TO RIGHT:
 *    - Add card's chip value (with boss debuffs)
 *    - Apply card's enhancement (chips, mult, clutch, multipliers)
 * 3. Apply Ballpark effects (TOP TO BOTTOM as displayed)
 * 4. Apply Legend effects (TOP TO BOTTOM as displayed)
 * 5. Apply boss modifier caps/thresholds
 * 6. Calculate total (chips × mult)
 * 7. Home/Away bonuses applied separately in App.jsx on winning hand only
 *
 * @param {Object} handResult - Result from evaluateHand
 * @param {Object} handLevels - Current levels for each hand type
 * @param {Array} legends - Active legend cards (for bonuses)
 * @param {Object} gameState - Current game state for context-dependent effects
 * @param {Array} allSelectedCards - All cards selected for the hand (for effects like Mickey Mantle)
 * @returns {Object} - { chips, mult, total, breakdown, legendEffects, ballparkEffects }
 */
export function calculateScore(handResult, handLevels = {}, legends = [], gameState = {}, allSelectedCards = null) {
  const { type, scoringCards } = handResult;
  const level = handLevels[type] || 1;
  const ballparks = gameState?.ballparks || [];
  const bossModifiers = gameState?.bossModifiers || [];

  const baseScore = HAND_BASE_SCORES[type] || { chips: 0, mult: 1 };
  const levelBonus = level - 1;

  // ============================================
  // STEP 1: Hand base + level adjustments
  // ============================================
  let chips = baseScore.chips + (levelBonus * 10);
  let mult = baseScore.mult + (levelBonus * 1);

  // Apply hand type debuffs from boss modifiers
  for (const mod of bossModifiers) {
    if (mod.type === 'hand_debuff' && mod.affectedHands?.includes(type)) {
      mult = Math.max(1, mult - (mod.multPenalty || 0));
    }
  }

  // ============================================
  // STEP 2: Process each card LEFT TO RIGHT
  // Each card: add chips, then apply enhancement
  // Cards are processed in the order they appear in allSelectedCards
  // (player-defined order), but only cards that are in scoringCards
  // ============================================
  const enhancementEffects = [];
  let multMultiplier = 1; // Accumulate mult multipliers (Lucky Cleats 1.5x)

  // Create a set of scoring card IDs for quick lookup
  const scoringCardIds = new Set(scoringCards.map(c => c.id));

  // Process cards in the order from allSelectedCards (player's chosen order)
  // but only include cards that are actually scoring
  const orderedScoringCards = allSelectedCards
    ? allSelectedCards.filter(c => scoringCardIds.has(c.id))
    : scoringCards;

  for (const card of orderedScoringCards) {
    // 2a. Add card's chip value (with boss debuffs applied)
    const cardChips = applyBossCardDebuffs(card, bossModifiers);
    chips += cardChips;

    // 2b. Apply this card's enhancement (if any)
    if (card.enhancement && card.enhancement.bonus) {
      const bonus = card.enhancement.bonus;

      // Flat chip bonus (Batting Practice, Pine Tar Grip)
      if (bonus.chips) {
        chips += bonus.chips;
        enhancementEffects.push({
          card: `${card.rank}${card.suit[0].toUpperCase()}`,
          name: card.enhancement.name,
          effect: `+${bonus.chips} Chips`
        });
      }

      // Flat mult bonus (Film Study, Weighted Bat)
      if (bonus.mult) {
        mult += bonus.mult;
        enhancementEffects.push({
          card: `${card.rank}${card.suit[0].toUpperCase()}`,
          name: card.enhancement.name,
          effect: `+${bonus.mult} Mult`
        });
      }

      // Clutch mult (1 in 4 chance for +10 mult)
      if (bonus.clutchMult && bonus.clutchChance) {
        if (Math.random() < bonus.clutchChance) {
          mult += bonus.clutchMult;
          enhancementEffects.push({
            card: `${card.rank}${card.suit[0].toUpperCase()}`,
            name: card.enhancement.name,
            effect: `+${bonus.clutchMult} Mult (Clutch!)`
          });
        }
      }

      // Mult multiplier (Lucky Cleats 1.5x) - accumulated and applied after all cards
      if (bonus.multMult) {
        multMultiplier *= bonus.multMult;
        enhancementEffects.push({
          card: `${card.rank}${card.suit[0].toUpperCase()}`,
          name: card.enhancement.name,
          effect: `×${bonus.multMult} Mult`
        });
      }
    }
  }

  // Apply accumulated mult multipliers from card enhancements
  mult = Math.floor(mult * multMultiplier);

  // ============================================
  // STEP 3: Apply Ballpark effects (TOP TO BOTTOM)
  // ============================================
  const ballparkContext = {
    chips,
    mult,
    handType: type,
    scoringCards,
    gameState
  };

  const ballparkResult = applyBallparkEffects(ballparkContext, ballparks, bossModifiers);
  chips = ballparkResult.chips;
  mult = ballparkResult.mult;

  // ============================================
  // STEP 4: Apply Legend effects (TOP TO BOTTOM)
  // ============================================
  const legendContext = {
    chips,
    mult,
    handType: type,
    scoringCards,
    allCards: allSelectedCards || scoringCards,
    gameState
  };

  const legendResult = applyLegendEffects(legendContext, legends, bossModifiers);
  chips = legendResult.chips;
  mult = legendResult.mult;

  // ============================================
  // STEP 5: Apply boss modifier caps/thresholds
  // ============================================
  // Chip threshold modifier (chips under threshold are penalized)
  for (const mod of bossModifiers) {
    if (mod.type === 'chip_threshold' && chips < mod.threshold) {
      chips = Math.floor(chips * mod.penalty);
    }
  }

  // Mult cap modifier
  for (const mod of bossModifiers) {
    if (mod.type === 'mult_cap' && mult > mod.maxMult) {
      mult = mod.maxMult;
    }
  }

  // ============================================
  // STEP 6: Calculate total
  // ============================================
  const total = chips * mult;

  // Build boss modifier effects for display
  const bossEffects = [];
  for (const mod of bossModifiers) {
    bossEffects.push({
      name: mod.name,
      description: mod.description,
      icon: mod.icon
    });
  }

  return {
    chips,
    mult,
    total,
    breakdown: {
      baseChips: baseScore.chips,
      baseMult: baseScore.mult,
      levelBonus,
      cardChips: scoringCards.reduce((sum, c) => sum + c.chips, 0),
      scoringCardCount: scoringCards.length
    },
    legendEffects: legendResult.legendEffects,
    ballparkEffects: ballparkResult.ballparkEffects,
    enhancementEffects,
    bossEffects
  };
}
