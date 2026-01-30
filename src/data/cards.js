// Card data and deck utilities for Diamond Dynasty

export const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
export const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Chip values for each rank
export const RANK_CHIPS = {
  'A': 11,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10
};

// Numeric value for hand comparison (Ace high)
export const RANK_VALUES = {
  'A': 14,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13
};

// Create a single card object
export function createCard(rank, suit) {
  return {
    id: `${rank}-${suit}`,
    rank,
    suit,
    chips: RANK_CHIPS[rank],
    value: RANK_VALUES[rank],
    enhancement: null,  // bonus, mult, wild, glass, steel, stone, gold, lucky
    edition: null,      // foil, holographic, polychrome
    seal: null,         // gold, red, blue, purple
    selected: false
  };
}

// Create a fresh 52-card deck
export function createDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push(createCard(rank, suit));
    }
  }
  return deck;
}

// Fisher-Yates shuffle
export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get display symbol for suit
export function getSuitSymbol(suit) {
  const symbols = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠'
  };
  return symbols[suit] || '?';
}

// Get color for suit
export function getSuitColor(suit) {
  return (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';
}
