// Poker hand definitions and base scoring for Diamond Dynasty

// Hand types in order of rank (worst to best)
export const HAND_TYPES = [
  'HIGH_CARD',
  'PAIR',
  'TWO_PAIR',
  'THREE_OF_A_KIND',
  'STRAIGHT',
  'FLUSH',
  'FULL_HOUSE',
  'FOUR_OF_A_KIND',
  'STRAIGHT_FLUSH',
  'ROYAL_FLUSH',
  'FIVE_OF_A_KIND',      // Requires wild cards
  'FLUSH_HOUSE',         // Full house + flush
  'FLUSH_FIVE'           // Five of a kind + flush
];

// Base scoring values for each hand type
// { chips: base chip value, mult: base multiplier }
export const HAND_BASE_SCORES = {
  HIGH_CARD:       { chips: 5,   mult: 1, name: 'High Card' },
  PAIR:            { chips: 10,  mult: 2, name: 'Pair' },
  TWO_PAIR:        { chips: 20,  mult: 2, name: 'Two Pair' },
  THREE_OF_A_KIND: { chips: 30,  mult: 3, name: 'Three of a Kind' },
  STRAIGHT:        { chips: 30,  mult: 4, name: 'Straight' },
  FLUSH:           { chips: 35,  mult: 4, name: 'Flush' },
  FULL_HOUSE:      { chips: 40,  mult: 4, name: 'Full House' },
  FOUR_OF_A_KIND:  { chips: 60,  mult: 7, name: 'Four of a Kind' },
  STRAIGHT_FLUSH:  { chips: 100, mult: 8, name: 'Straight Flush' },
  ROYAL_FLUSH:     { chips: 100, mult: 8, name: 'Royal Flush' },
  FIVE_OF_A_KIND:  { chips: 120, mult: 12, name: 'Five of a Kind' },
  FLUSH_HOUSE:     { chips: 140, mult: 14, name: 'Flush House' },
  FLUSH_FIVE:      { chips: 160, mult: 16, name: 'Flush Five' }
};

// Level-up bonuses per level (chips and mult added per level above 1)
export const LEVEL_BONUS = {
  chips: 10,
  mult: 1
};

// Get scoring for a hand type at a given level
export function getHandScore(handType, level = 1) {
  const base = HAND_BASE_SCORES[handType];
  if (!base) return { chips: 0, mult: 1, name: 'Unknown' };

  const levelBonus = level - 1;
  return {
    chips: base.chips + (levelBonus * LEVEL_BONUS.chips),
    mult: base.mult + (levelBonus * LEVEL_BONUS.mult),
    name: base.name,
    level
  };
}

// Position cards that level up each hand (baseball themed)
export const POSITION_CARDS = {
  PITCHER:        { hand: 'HIGH_CARD',       name: 'Pitcher' },
  CATCHER:        { hand: 'PAIR',            name: 'Catcher' },
  FIRST_BASE:     { hand: 'TWO_PAIR',        name: 'First Base' },
  SECOND_BASE:    { hand: 'THREE_OF_A_KIND', name: 'Second Base' },
  SHORTSTOP:      { hand: 'STRAIGHT',        name: 'Shortstop' },
  THIRD_BASE:     { hand: 'FLUSH',           name: 'Third Base' },
  LEFT_FIELD:     { hand: 'FULL_HOUSE',      name: 'Left Field' },
  CENTER_FIELD:   { hand: 'FOUR_OF_A_KIND',  name: 'Center Field' },
  RIGHT_FIELD:    { hand: 'STRAIGHT_FLUSH',  name: 'Right Field' },
  DH:             { hand: 'ROYAL_FLUSH',     name: 'Designated Hitter' },
  PINCH_HITTER:   { hand: 'FIVE_OF_A_KIND',  name: 'Pinch Hitter' },
  RELIEF_PITCHER: { hand: 'FLUSH_HOUSE',     name: 'Relief Pitcher' },
  MANAGER:        { hand: 'FLUSH_FIVE',      name: 'Manager' }
};
