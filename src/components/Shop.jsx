// Shop/Dugout component - appears between At-Bats

import React, { useState, useEffect } from 'react';
import './Shop.css';
import DeckViewer from './DeckViewer.jsx';

// Generate random shop items - now takes ownedLegends to filter duplicates
function generateShopItems(series, money, ownedLegends = [], voucherBoughtThisSeries = false, purchasedVoucherEffects = []) {
  const items = [];

  // Generate 2 Legend cards (excluding already owned)
  const ownedNames = ownedLegends.map(l => l.name);
  const availableLegends = getAvailableLegends().filter(l => !ownedNames.includes(l.name));

  // Shuffle and pick 2
  const shuffled = [...availableLegends].sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(2, shuffled.length); i++) {
    const legend = shuffled[i];
    items.push({
      id: `legend-${i}-${Date.now()}`,
      type: 'legend',
      ...legend,
      price: getLegendPrice(legend.rarity)
    });
  }

  // Generate 2 booster packs (including training packs)
  // Training packs appear more frequently to help with late-game scaling
  const packTypes = ['standard', 'position', 'ballpark', 'training', 'training'];
  for (let i = 0; i < 2; i++) {
    const packType = packTypes[Math.floor(Math.random() * packTypes.length)];
    items.push({
      id: `pack-${i}-${Date.now()}`,
      type: 'pack',
      packType,
      ...getPackInfo(packType)
    });
  }

  // Generate 1 voucher ONLY if one hasn't been bought this series AND there are vouchers left
  if (!voucherBoughtThisSeries) {
    const voucher = getRandomVoucher(purchasedVoucherEffects);
    if (voucher) {
      items.push({
        id: `voucher-${Date.now()}`,
        type: 'voucher',
        ...voucher
      });
    }
  }

  // Always include Medical Pack (price scales with series)
  items.push({
    id: `medical-${Date.now()}`,
    type: 'medical',
    name: 'Medical Pack',
    description: 'Heals injured legend OR buffs random legend +20% for 3 innings',
    price: series * 5, // $5 × series
    effect: 'medical'
  });

  return items;
}

function getLegendPrice(rarity) {
  const prices = {
    common: 4,
    uncommon: 6,
    rare: 8,
    legendary: 12
  };
  return prices[rarity] || 5;
}

function getPackInfo(packType) {
  const packs = {
    standard: {
      name: 'Trading Card Pack',
      description: 'Choose 1 of 5 random Legends',
      price: 4,
      icon: '🎴',
      legendCount: 5
    },
    position: {
      name: 'Position Pack',
      description: 'Choose 1 of 3 Position cards',
      price: 4,
      icon: '⚾',
      cardCount: 3
    },
    ballpark: {
      name: 'Ballpark Pack',
      description: 'Choose 1 of 3 Ballpark cards',
      price: 6,
      icon: '🏟️',
      cardCount: 3
    },
    training: {
      name: 'Training Pack',
      description: 'Choose 1 of 3 card enhancements',
      price: 5,
      icon: '🏋️',
      cardCount: 3
    }
  };
  return packs[packType];
}

// Card enhancements - permanently modify cards in your deck
function getAvailableEnhancements() {
  return [
    // Training enhancements (permanent stat boosts)
    { name: 'Batting Practice', type: 'training', effect: '+30 Chips', bonus: { chips: 30 }, description: 'Perfecting your swing', color: '#4a90d9' },
    { name: 'Film Study', type: 'training', effect: '+4 Mult', bonus: { mult: 4 }, description: 'Know the pitcher\'s tendencies', color: '#9b59b6' },
    { name: 'Clutch Training', type: 'training', effect: '1 in 4: +10 Mult', bonus: { clutchMult: 10, clutchChance: 0.25 }, description: 'Perform under pressure', color: '#e74c3c' },

    // Equipment enhancements (stronger effects)
    { name: 'Pine Tar Grip', type: 'equipment', effect: '+50 Chips', bonus: { chips: 50 }, description: 'Better bat control', color: '#8b4513' },
    { name: 'Weighted Bat', type: 'equipment', effect: '+10 Mult', bonus: { mult: 10 }, description: 'Power hitting', color: '#e67e22' },
    { name: 'Lucky Cleats', type: 'equipment', effect: '1.5× Mult', bonus: { multMult: 1.5 }, description: 'Superstition pays off', color: '#f39c12' },

    // Deck manipulation
    { name: 'Doubleheader', type: 'special', effect: 'Duplicate card', bonus: { duplicate: true }, description: 'Play it twice', color: '#27ae60' },
    { name: 'Caught Stealing', type: 'special', effect: 'Remove card', bonus: { remove: true }, description: 'Trim the fat', color: '#c0392b' }
  ];
}

function getRandomVoucher(purchasedVoucherEffects = []) {
  // All vouchers cost $10 (fixed price throughout the game)
  const allVouchers = [
    { name: 'Expanded Roster', description: '+1 Legend slot', effect: 'maxLegends' },
    { name: 'Extra Innings', description: '+1 hand per round', effect: 'handsPerRound' },
    { name: 'Bullpen Depth', description: '+1 discard per round', effect: 'discardsPerRound' },
    { name: 'Farm System', description: 'Earn interest on up to $50', effect: 'interestCap' },
    { name: 'Scout Report', description: 'Rerolls cost $2 less', effect: 'rerollCost' },
    { name: 'Paint the Corner', description: '+1 hand size', effect: 'handSize' },
    { name: 'Training Camp', description: 'Reduce injury chance by 50%', effect: 'trainingCamp' }
  ];

  // Filter out already purchased vouchers
  const availableVouchers = allVouchers.filter(v => !purchasedVoucherEffects.includes(v.effect));

  // If no vouchers left, return null
  if (availableVouchers.length === 0) {
    return null;
  }

  const voucher = availableVouchers[Math.floor(Math.random() * availableVouchers.length)];
  return { ...voucher, price: 10 }; // Fixed $10 price for all vouchers
}

// Position cards - level up specific hand types
function getAvailablePositions() {
  return [
    { name: 'First Base', position: '1B', effect: 'Pair +1 Level', handType: 'PAIR', description: 'Power hitter\'s corner' },
    { name: 'Second Base', position: '2B', effect: 'Two Pair +1 Level', handType: 'TWO_PAIR', description: 'Turn two specialist' },
    { name: 'Shortstop', position: 'SS', effect: 'Straight +1 Level', handType: 'STRAIGHT', description: 'Field general' },
    { name: 'Third Base', position: '3B', effect: 'Three of a Kind +1 Level', handType: 'THREE_OF_A_KIND', description: 'Hot corner' },
    { name: 'Catcher', position: 'C', effect: 'Full House +1 Level', handType: 'FULL_HOUSE', description: 'Field commander' },
    { name: 'Pitcher', position: 'P', effect: 'Flush +1 Level', handType: 'FLUSH', description: 'Ace of the staff' },
    { name: 'Left Field', position: 'LF', effect: 'High Card +2 Levels', handType: 'HIGH_CARD', description: 'Green monster patrol' },
    { name: 'Center Field', position: 'CF', effect: 'Four of a Kind +1 Level', handType: 'FOUR_OF_A_KIND', description: 'Range for days' },
    { name: 'Right Field', position: 'RF', effect: 'Straight Flush +1 Level', handType: 'STRAIGHT_FLUSH', description: 'Cannon arm' },
    { name: 'Designated Hitter', position: 'DH', effect: '+5 Mult to all hands', handType: 'ALL', description: 'Pure offense' }
  ];
}

// Ballpark cards - special modifiers
function getAvailableBallparks() {
  return [
    { name: 'Fenway Park', city: 'Boston', effect: '+50 Chips on flushes', bonus: 'flush_chips', description: 'The Green Monster' },
    { name: 'Yankee Stadium', city: 'New York', effect: '+3 Mult always', bonus: 'flat_mult', description: 'The House That Ruth Built' },
    { name: 'Wrigley Field', city: 'Chicago', effect: '+30 Chips always', bonus: 'flat_chips', description: 'The Friendly Confines' },
    { name: 'Dodger Stadium', city: 'Los Angeles', effect: 'Pairs give +15 Chips', bonus: 'pair_chips', description: 'Blue Heaven on Earth' },
    { name: 'Oracle Park', city: 'San Francisco', effect: '+20 Mult on straights', bonus: 'straight_mult', description: 'McCovey Cove' },
    { name: 'Camden Yards', city: 'Baltimore', effect: '+$2 per hand played', bonus: 'money_per_hand', description: 'Retro classic' },
    { name: 'Busch Stadium', city: 'St. Louis', effect: 'Full House +40 Chips', bonus: 'fullhouse_chips', description: 'Gateway to the West' },
    { name: 'PNC Park', city: 'Pittsburgh', effect: '+1 Discard per round', bonus: 'extra_discard', description: 'Best view in baseball' },
    { name: 'Petco Park', city: 'San Diego', effect: '+1 Hand size', bonus: 'hand_size', description: 'Pitcher\'s paradise' },
    { name: 'Coors Field', city: 'Denver', effect: 'All chip bonuses +25%', bonus: 'chip_multiplier', description: 'Mile high magic' },
    { name: 'Kauffman Stadium', city: 'Kansas City', effect: '+15 Mult if hand contains Three of a Kind', bonus: 'trips_mult', description: 'The K - Triples Alley' }
  ];
}

function getAvailableLegends() {
  // Full roster of legends
  return [
    // Legendary
    { name: 'Babe Ruth', position: 'RF/P', rarity: 'legendary', effect: '+50 Mult', description: 'The Sultan of Swat' },
    { name: 'Willie Mays', position: 'CF', rarity: 'legendary', effect: '+40 Mult', description: 'The Say Hey Kid' },
    { name: 'Ted Williams', position: 'LF', rarity: 'legendary', effect: '+100 Chips per face card', description: 'The Splendid Splinter' },
    { name: 'Shohei Ohtani', position: 'DH/P', rarity: 'legendary', effect: '+10 Chips, +2 Mult per hand played', description: 'The Two-Way Star' },
    { name: 'Walter Johnson', position: 'P', rarity: 'legendary', effect: '+20 Mult', description: 'The Big Train' },
    { name: 'Dr. Awesome', position: 'STAFF', rarity: 'legendary', effect: 'Team immunity to injuries', description: 'The Miracle Worker', isStaff: true, noHomeAwayBonus: true },

    // Rare
    { name: 'Hank Aaron', position: 'RF', rarity: 'rare', effect: '+25 Chips per face card', description: 'Hammerin\' Hank' },
    { name: 'Sandy Koufax', position: 'P', rarity: 'rare', effect: '+20 Mult if no discards used', description: 'Perfect game artist' },
    { name: 'Mickey Mantle', position: 'CF', rarity: 'rare', effect: '+15 Mult if hand has both red & black cards', description: 'The Commerce Comet (Switch Hitter)' },

    // Uncommon
    { name: 'Derek Jeter', position: 'SS', rarity: 'uncommon', effect: '+10 Mult if 5 Legends', description: 'The Captain' },
    { name: 'Ken Griffey Jr.', position: 'CF', rarity: 'uncommon', effect: '+15 Mult for Aces', description: 'The Kid' },
    { name: 'Mariano Rivera', position: 'RP', rarity: 'uncommon', effect: '+30 Mult on final hand', description: 'Enter Sandman' },
    { name: 'Jackie Robinson', position: '2B', rarity: 'uncommon', effect: '+10 Mult (Barrier Breaker)', description: '42' },
    { name: 'Cal Ripken Jr.', position: 'SS', rarity: 'uncommon', effect: '+8 Mult', description: 'Iron Man' },

    // Common
    { name: 'Tony Gwynn', position: 'RF', rarity: 'common', effect: '+20 Chips always', description: 'Mr. Padre' },
    { name: 'Reggie Jackson', position: 'RF', rarity: 'common', effect: '+25 Mult in Boss At-Bats', description: 'Mr. October' },
    { name: 'Yogi Berra', position: 'C', rarity: 'common', effect: 'Random +10-30 Chips', description: 'It ain\'t over til it\'s over' },
    { name: 'Ozzie Smith', position: 'SS', rarity: 'common', effect: '+15 Chips', description: 'The Wizard' },
    { name: 'Ernie Banks', position: 'SS', rarity: 'common', effect: '+15 Chips', description: 'Let\'s play two!' },
    { name: 'George Brett', position: '3B', rarity: 'legendary', effect: '3× Mult when score < target', description: 'Pine Tar Game - Comeback King' },
    { name: 'Rickey Henderson', position: 'LF', rarity: 'common', effect: '+10 Chips', description: 'Man of Steal' },
    { name: 'Nolan Ryan', position: 'P', rarity: 'common', effect: '+25 Chips', description: 'The Ryan Express' }
  ];
}

// Generate pack contents based on pack type
function generatePackContents(packType, ownedLegends = [], ownedPositions = [], ownedBallparks = []) {
  const packInfo = getPackInfo(packType);

  if (packType === 'standard') {
    // Generate random legends for selection
    const ownedNames = ownedLegends.map(l => l.name);
    const availableLegends = getAvailableLegends().filter(l => !ownedNames.includes(l.name));
    const shuffled = [...availableLegends].sort(() => Math.random() - 0.5);

    // Weighted selection by rarity
    const weighted = [];
    for (const legend of shuffled) {
      let copies = 1;
      if (legend.rarity === 'common') copies = 4;
      else if (legend.rarity === 'uncommon') copies = 3;
      else if (legend.rarity === 'rare') copies = 2;
      // legendary stays at 1
      for (let i = 0; i < copies; i++) {
        weighted.push(legend);
      }
    }

    // Shuffle weighted array and pick 3-5 unique legends to show
    const shuffledWeighted = [...weighted].sort(() => Math.random() - 0.5);
    const selected = [];
    const seenNames = new Set();

    for (const legend of shuffledWeighted) {
      if (!seenNames.has(legend.name) && selected.length < 5) {
        selected.push({ ...legend, id: `pack-legend-${legend.name}-${Date.now()}`, cardType: 'legend' });
        seenNames.add(legend.name);
      }
    }

    return {
      type: 'legend_selection',
      cards: selected,
      pickCount: Math.min(1, selected.length)
    };
  }

  if (packType === 'position') {
    // Generate random position cards for selection
    const ownedNames = ownedPositions.map(p => p.name);
    const availablePositions = getAvailablePositions().filter(p => !ownedNames.includes(p.name));
    const shuffled = [...availablePositions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3).map(pos => ({
      ...pos,
      id: `pack-position-${pos.name}-${Date.now()}`,
      cardType: 'position'
    }));

    return {
      type: 'position_selection',
      cards: selected,
      pickCount: Math.min(1, selected.length)
    };
  }

  if (packType === 'ballpark') {
    // Generate random ballpark cards for selection
    const ownedNames = ownedBallparks.map(b => b.name);
    const availableBallparks = getAvailableBallparks().filter(b => !ownedNames.includes(b.name));
    const shuffled = [...availableBallparks].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3).map(park => ({
      ...park,
      id: `pack-ballpark-${park.name}-${Date.now()}`,
      cardType: 'ballpark'
    }));

    return {
      type: 'ballpark_selection',
      cards: selected,
      pickCount: Math.min(1, selected.length)
    };
  }

  if (packType === 'training') {
    // Generate random enhancement cards for selection
    const allEnhancements = getAvailableEnhancements();
    const shuffled = [...allEnhancements].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3).map(enh => ({
      ...enh,
      id: `pack-enhancement-${enh.name}-${Date.now()}`,
      cardType: 'enhancement'
    }));

    return {
      type: 'enhancement_selection',
      cards: selected,
      pickCount: Math.min(1, selected.length)
    };
  }

  return {
    type: 'coming_soon',
    cards: [],
    pickCount: 0
  };
}

export default function Shop({
  money,
  series,
  onBuyItem,
  onSellLegend,
  onSellBallpark,
  onReroll,
  onContinue,
  onMedicalPack,
  onApplyEnhancement,
  legends,
  maxLegends,
  positions = [],
  ballparks = [],
  maxBallparks = 5,
  legendInjuries = {},
  legendBuffs = {},
  voucherBoughtThisSeries = false,
  rerollsThisShop = 0,
  hasScoutReport = false,
  deck = [],
  purchasedVoucherEffects = []
}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [packOpen, setPackOpen] = useState(null); // Currently opened pack
  const [packContents, setPackContents] = useState(null);
  const [selectedPackCards, setSelectedPackCards] = useState([]);
  const [pendingEnhancement, setPendingEnhancement] = useState(null); // Enhancement waiting for card selection
  const [selectedDeckCard, setSelectedDeckCard] = useState(null); // Card selected for enhancement
  const [randomDeckCards, setRandomDeckCards] = useState([]); // 8 random cards shown for enhancement
  const [enhancementOptions, setEnhancementOptions] = useState([]); // 3 enhancement options to show after seeing cards
  const [showCardsFirst, setShowCardsFirst] = useState(false); // Show cards before picking enhancement
  const [showDeckViewer, setShowDeckViewer] = useState(false); // Toggle deck viewer

  // Calculate current reroll cost: base $5 (or $3 with Scout Report) + $1 per reroll this shop
  const baseRerollCost = hasScoutReport ? 3 : 5;
  const currentRerollCost = baseRerollCost + rerollsThisShop;

  // Generate shop items ONLY on first mount or when series changes
  // Do NOT regenerate when voucher is bought - that would refresh packs incorrectly
  // The voucherBoughtThisSeries flag is passed to generateShopItems to determine
  // whether to include a voucher in the initial generation
  useEffect(() => {
    setItems(generateShopItems(series, money, legends, voucherBoughtThisSeries, purchasedVoucherEffects));
  }, [series]); // Only depend on series, not voucherBoughtThisSeries

  const handleReroll = () => {
    if (money >= currentRerollCost) {
      onReroll(currentRerollCost);
      setItems(generateShopItems(series, money - currentRerollCost, legends, voucherBoughtThisSeries, purchasedVoucherEffects));
      setSelectedItem(null);
    }
  };

  const handleBuy = (item) => {
    if (money >= item.price) {
      // Check Legend slot limit
      if (item.type === 'legend' && legends.length >= maxLegends) {
        alert('Legend roster is full! Sell a Legend first or buy an Expanded Roster voucher.');
        return;
      }

      // Handle Medical Pack purchase - applies immediately
      if (item.type === 'medical') {
        if (legends.length === 0) {
          alert('You need at least one Legend to use a Medical Pack!');
          return;
        }
        // Call the medical pack handler in App.jsx
        onMedicalPack(item.price);
        setItems(items.filter(i => i.id !== item.id));
        setSelectedItem(null);
        return;
      }

      // Handle booster pack purchase - open it instead of adding to inventory
      if (item.type === 'pack') {
        const contents = generatePackContents(item.packType, legends, positions, ballparks);
        if (contents.type === 'coming_soon' || contents.cards.length === 0) {
          alert(`No more cards available in ${item.name}! You may own them all.`);
          return;
        }

        // For training packs, show the 8 random cards FIRST, then let player pick enhancement
        if (item.packType === 'training') {
          const shuffled = [...deck].sort(() => Math.random() - 0.5);
          const randomCards = shuffled.slice(0, 8);
          setRandomDeckCards(randomCards);
          setEnhancementOptions(contents.cards); // Store the 3 enhancement options
          setShowCardsFirst(true); // Flag to show cards-first UI
          setPendingEnhancement(null);
          setSelectedDeckCard(null);
          // Deduct money
          onBuyItem({ ...item, isPack: true });
          setItems(items.filter(i => i.id !== item.id));
          setSelectedItem(null);
          return;
        }

        setPackOpen(item);
        setPackContents(contents);
        setSelectedPackCards([]);
        // Deduct money
        onBuyItem({ ...item, isPack: true }); // Mark as pack so App.jsx doesn't add as legend
        setItems(items.filter(i => i.id !== item.id));
        setSelectedItem(null);
        return;
      }

      onBuyItem(item);
      setItems(items.filter(i => i.id !== item.id));
      setSelectedItem(null);
    }
  };

  const handlePackCardSelect = (card) => {
    if (!packContents) return;

    const isSelected = selectedPackCards.some(c => c.id === card.id);

    if (isSelected) {
      // Deselect
      setSelectedPackCards(selectedPackCards.filter(c => c.id !== card.id));
    } else {
      // Select (up to pickCount)
      if (selectedPackCards.length < packContents.pickCount) {
        setSelectedPackCards([...selectedPackCards, card]);
      } else {
        // Replace selection
        setSelectedPackCards([card]);
      }
    }
  };

  const handleConfirmPackSelection = () => {
    if (selectedPackCards.length > 0) {
      for (const card of selectedPackCards) {
        const cardType = card.cardType || 'legend';

        // Check roster space for legends
        if (cardType === 'legend' && legends.length >= maxLegends) {
          alert('Legend roster is full! Sell a Legend first.');
          return;
        }

        // Check roster space for ballparks
        if (cardType === 'ballpark' && ballparks.length >= maxBallparks) {
          alert('Ballpark collection is full! Maximum of 5 ballparks.');
          return;
        }

        // For enhancements, we need to show deck selection with 8 random cards
        if (cardType === 'enhancement') {
          // Shuffle deck and pick 8 random cards
          const shuffled = [...deck].sort(() => Math.random() - 0.5);
          const randomCards = shuffled.slice(0, 8);
          setRandomDeckCards(randomCards);
          setPendingEnhancement(card);
          setShowCardsFirst(false); // Coming from pack selection, go straight to card selection
          setPackOpen(null);
          setPackContents(null);
          setSelectedPackCards([]);
          return;
        }

        // Add selected card to appropriate roster
        onBuyItem({ type: cardType, ...card, price: 0 }); // Free since already paid for pack
      }
    }

    // Close pack
    setPackOpen(null);
    setPackContents(null);
    setSelectedPackCards([]);
  };

  const handleApplyEnhancement = () => {
    if (pendingEnhancement && selectedDeckCard && onApplyEnhancement) {
      onApplyEnhancement(selectedDeckCard.id, pendingEnhancement);
      setPendingEnhancement(null);
      setSelectedDeckCard(null);
      setRandomDeckCards([]);
    }
  };

  const handleCancelEnhancement = () => {
    setPendingEnhancement(null);
    setSelectedDeckCard(null);
    setRandomDeckCards([]);
    setEnhancementOptions([]);
    setShowCardsFirst(false);
  };

  // Handle selecting an enhancement from the cards-first view
  const handleSelectEnhancementFromCardsFirst = (enhancement) => {
    setPendingEnhancement(enhancement);
    setShowCardsFirst(false);
  };

  const getRarityColor = (rarity) => {
    const colors = {
      common: '#aaa',
      uncommon: '#4a90d9',
      rare: '#9b59b6',
      legendary: '#ffd700'
    };
    return colors[rarity] || '#aaa';
  };

  // Get card type label for pack opening
  const getCardTypeLabel = (type) => {
    if (type === 'position_selection') return 'Position';
    if (type === 'ballpark_selection') return 'Ballpark';
    if (type === 'enhancement_selection') return 'Enhancement';
    return 'Legend';
  };

  // Get border color based on card type
  const getPackCardColor = (card) => {
    if (card.cardType === 'position') return '#4a90d9'; // Blue for positions
    if (card.cardType === 'ballpark') return '#27ae60'; // Green for ballparks
    if (card.cardType === 'enhancement') return card.color || '#f39c12'; // Enhancement color
    return getRarityColor(card.rarity);
  };

  // Get suit symbol for card display
  const getSuitSymbol = (suit) => {
    const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
    return symbols[suit] || '?';
  };

  const getSuitColor = (suit) => {
    return (suit === 'hearts' || suit === 'diamonds') ? '#e74c3c' : '#2c3e50';
  };

  // Handle edge case: packOpen is set but packContents is missing
  // This can happen if there's an error generating pack contents
  if (packOpen && !packContents) {
    return (
      <div className="shop-overlay">
        <div className="pack-opening-container">
          <header className="pack-header">
            <h2>{packOpen.icon || '📦'} {packOpen.name || 'Pack'}</h2>
            <p className="pack-instruction">Unable to open pack. Please try again.</p>
          </header>
          <footer className="pack-footer">
            <button
              className="btn-confirm-pack"
              onClick={() => {
                setPackOpen(null);
                setPackContents(null);
              }}
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    );
  }

  // Pack opening overlay
  if (packOpen && packContents) {
    const cardTypeLabel = getCardTypeLabel(packContents.type);

    // Safety check - if no cards available, close the pack
    if (!packContents.cards || packContents.cards.length === 0) {
      return (
        <div className="shop-overlay">
          <div className="pack-opening-container">
            <header className="pack-header">
              <h2>{packOpen.icon} {packOpen.name}</h2>
              <p className="pack-instruction">No cards available in this pack!</p>
            </header>
            <footer className="pack-footer">
              <button
                className="btn-confirm-pack"
                onClick={() => {
                  setPackOpen(null);
                  setPackContents(null);
                }}
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      );
    }

    return (
      <div className="shop-overlay">
        <div className="pack-opening-container">
          <header className="pack-header">
            <h2>{packOpen.icon} {packOpen.name}</h2>
            <p className="pack-instruction">
              {packContents.pickCount > 0
                ? `Choose ${packContents.pickCount} ${cardTypeLabel} card to add!`
                : 'No cards available'}
            </p>
          </header>

          <div className="pack-cards">
            {packContents.cards.map(card => (
              <div
                key={card.id}
                className={`pack-legend-card ${card.cardType || 'legend'}-card ${selectedPackCards.some(c => c.id === card.id) ? 'selected' : ''}`}
                onClick={() => handlePackCardSelect(card)}
                style={{ borderColor: getPackCardColor(card) }}
              >
                {card.cardType === 'legend' || !card.cardType ? (
                  <>
                    <div className="legend-rarity" style={{ color: getRarityColor(card.rarity) }}>
                      {card.rarity?.toUpperCase() || 'LEGEND'}
                    </div>
                    <div className="legend-name">{card.name}</div>
                    <div className="legend-position">{card.position}</div>
                    <div className="legend-effect">{card.effect}</div>
                    <div className="legend-description">{card.description}</div>
                  </>
                ) : card.cardType === 'position' ? (
                  <>
                    <div className="card-type-label position-label">POSITION</div>
                    <div className="legend-name">{card.name}</div>
                    <div className="legend-position">{card.position}</div>
                    <div className="legend-effect">{card.effect}</div>
                    <div className="legend-description">{card.description}</div>
                  </>
                ) : card.cardType === 'ballpark' ? (
                  <>
                    <div className="card-type-label ballpark-label">BALLPARK</div>
                    <div className="legend-name">{card.name}</div>
                    <div className="legend-position">{card.city}</div>
                    <div className="legend-effect">{card.effect}</div>
                    <div className="legend-description">{card.description}</div>
                  </>
                ) : card.cardType === 'enhancement' ? (
                  <>
                    <div className="card-type-label enhancement-label" style={{ color: card.color }}>{card.type?.toUpperCase()}</div>
                    <div className="legend-name">{card.name}</div>
                    <div className="legend-effect" style={{ color: card.color }}>{card.effect}</div>
                    <div className="legend-description">{card.description}</div>
                  </>
                ) : null}
              </div>
            ))}
          </div>

          <footer className="pack-footer">
            <button
              className="btn-confirm-pack"
              onClick={handleConfirmPackSelection}
            >
              {selectedPackCards.length > 0
                ? `Add ${selectedPackCards[0].name}`
                : 'Skip (No Selection)'}
            </button>
          </footer>
        </div>
      </div>
    );
  }

  // Cards-first overlay - show 8 random cards, then pick enhancement
  // Safety check: if showCardsFirst is true but arrays are empty, reset state
  if (showCardsFirst && (randomDeckCards.length === 0 || enhancementOptions.length === 0)) {
    // Reset stuck state
    setShowCardsFirst(false);
    setRandomDeckCards([]);
    setEnhancementOptions([]);
  }

  if (showCardsFirst && randomDeckCards.length > 0 && enhancementOptions.length > 0) {
    return (
      <div className="shop-overlay">
        <div className="enhancement-container cards-first">
          <header className="pack-header">
            <h2>🏋️ Training Pack</h2>
            <p className="pack-instruction">
              Here are your 8 random cards. Now choose which training to apply:
            </p>
          </header>

          {/* Show the 8 random cards */}
          <div className="deck-preview-section">
            <h3>Available Cards to Enhance:</h3>
            <div className="deck-selection preview">
              {randomDeckCards.map(card => (
                <div
                  key={card.id}
                  className={`deck-card ${card.enhancement ? 'has-enhancement' : ''}`}
                  style={{ color: getSuitColor(card.suit) }}
                >
                  <div className="deck-card-rank">{card.rank}</div>
                  <div className="deck-card-suit">{getSuitSymbol(card.suit)}</div>
                  {card.enhancement && (
                    <div className="deck-card-enhancement" style={{ backgroundColor: card.enhancement.color }}>
                      {card.enhancement.name.charAt(0)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhancement options */}
          <div className="enhancement-options-section">
            <h3>Choose Enhancement:</h3>
            <div className="enhancement-options">
              {enhancementOptions.map(enh => (
                <div
                  key={enh.id}
                  className="enhancement-option-card"
                  onClick={() => handleSelectEnhancementFromCardsFirst(enh)}
                  style={{ borderColor: enh.color }}
                >
                  <div className="enhancement-type" style={{ color: enh.color }}>{enh.type?.toUpperCase()}</div>
                  <div className="enhancement-name">{enh.name}</div>
                  <div className="enhancement-effect" style={{ color: enh.color }}>{enh.effect}</div>
                  <div className="enhancement-desc">{enh.description}</div>
                </div>
              ))}
            </div>
          </div>

          <footer className="pack-footer">
            <button
              className="btn-cancel"
              onClick={handleCancelEnhancement}
            >
              Skip Enhancement
            </button>
          </footer>
        </div>
      </div>
    );
  }

  // Enhancement application overlay - select a card from 8 random deck cards
  // Safety check: if pendingEnhancement is set but no random cards, reset state
  if (pendingEnhancement && randomDeckCards.length === 0) {
    // Reset stuck state
    setPendingEnhancement(null);
    setSelectedDeckCard(null);
  }

  if (pendingEnhancement && randomDeckCards.length > 0) {
    const isRemoveCard = pendingEnhancement.bonus?.remove;
    const isDuplicateCard = pendingEnhancement.bonus?.duplicate;
    const actionLabel = isRemoveCard ? 'Remove' : isDuplicateCard ? 'Duplicate' : 'Enhance';
    const headerIcon = isRemoveCard ? '🚫' : isDuplicateCard ? '👯' : '🏋️';

    return (
      <div className="shop-overlay">
        <div className="enhancement-container">
          <header className="pack-header">
            <h2>{headerIcon} {pendingEnhancement.name}</h2>
            <div className="enhancement-info" style={{ borderColor: pendingEnhancement.color }}>
              <div className="enhancement-name" style={{ color: pendingEnhancement.color }}>{pendingEnhancement.name}</div>
              <div className="enhancement-effect">{pendingEnhancement.effect}</div>
            </div>
            <p className="pack-instruction">
              {isRemoveCard
                ? 'Select a card to REMOVE from your deck:'
                : isDuplicateCard
                ? 'Select a card to DUPLICATE in your deck:'
                : 'Select a card to enhance:'}
            </p>
          </header>

          <div className="deck-selection">
            {randomDeckCards.map(card => (
              <div
                key={card.id}
                className={`deck-card ${selectedDeckCard?.id === card.id ? 'selected' : ''} ${card.enhancement ? 'has-enhancement' : ''}`}
                onClick={() => setSelectedDeckCard(card)}
                style={{ color: getSuitColor(card.suit) }}
              >
                <div className="deck-card-rank">{card.rank}</div>
                <div className="deck-card-suit">{getSuitSymbol(card.suit)}</div>
                {card.enhancement && (
                  <div className="deck-card-enhancement" style={{ backgroundColor: card.enhancement.color }}>
                    {card.enhancement.name.charAt(0)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <footer className="pack-footer">
            <button
              className="btn-cancel"
              onClick={handleCancelEnhancement}
            >
              Cancel
            </button>
            <button
              className="btn-confirm-pack"
              onClick={handleApplyEnhancement}
              disabled={!selectedDeckCard}
              style={isRemoveCard ? { backgroundColor: '#c0392b' } : isDuplicateCard ? { backgroundColor: '#27ae60' } : {}}
            >
              {selectedDeckCard
                ? `${actionLabel} ${selectedDeckCard.rank}${getSuitSymbol(selectedDeckCard.suit)}`
                : 'Select a card'}
            </button>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-overlay">
      <div className="shop-container">
        <header className="shop-header">
          <h2>🏟️ The Dugout</h2>
          <div className="shop-money">
            <span className="money-icon">💰</span>
            <span className="money-amount">${money}</span>
          </div>
        </header>

        <div className="shop-content">
          {/* Legends for sale */}
          <section className="shop-section">
            <h3>⭐ Legends</h3>
            <div className="shop-items legends-row">
              {items.filter(i => i.type === 'legend').length === 0 && (
                <div className="no-items-message">You own all available Legends!</div>
              )}
              {items.filter(i => i.type === 'legend').map(item => (
                <div
                  key={item.id}
                  className={`shop-item legend-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                  style={{ borderColor: getRarityColor(item.rarity) }}
                >
                  <div className="legend-rarity" style={{ color: getRarityColor(item.rarity) }}>
                    {item.rarity.toUpperCase()}
                  </div>
                  <div className="legend-name">{item.name}</div>
                  <div className="legend-position">{item.position}</div>
                  <div className="legend-effect">{item.effect}</div>
                  <div className="legend-description">{item.description}</div>
                  <div className="item-price">${item.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Booster packs */}
          <section className="shop-section">
            <h3>📦 Booster Packs</h3>
            {/* Inventory full warnings */}
            {legends.length >= maxLegends && (
              <div className="inventory-warning">
                ⚠️ Legend roster is full! Sell a Legend or buy "Expanded Roster" voucher to open Trading Card Packs.
              </div>
            )}
            {ballparks.length >= maxBallparks && (
              <div className="inventory-warning">
                ⚠️ Ballpark collection is full (5/5)! Sell a Ballpark to open Ballpark Packs.
              </div>
            )}
            <div className="shop-items packs-row">
              {items.filter(i => i.type === 'pack').map(item => {
                // Check if pack would be blocked by full inventory
                const isLegendPackBlocked = item.packType === 'standard' && legends.length >= maxLegends;
                const isBallparkPackBlocked = item.packType === 'ballpark' && ballparks.length >= maxBallparks;
                const isBlocked = isLegendPackBlocked || isBallparkPackBlocked;

                return (
                  <div
                    key={item.id}
                    className={`shop-item pack-card ${selectedItem?.id === item.id ? 'selected' : ''} ${isBlocked ? 'blocked' : ''}`}
                    onClick={() => !isBlocked && setSelectedItem(item)}
                    title={isBlocked ? (isLegendPackBlocked ? 'Legend roster full!' : 'Ballpark collection full!') : ''}
                  >
                    <div className="pack-icon">{item.icon}</div>
                    <div className="pack-name">{item.name}</div>
                    <div className="pack-description">{item.description}</div>
                    <div className="item-price">${item.price}</div>
                    {isBlocked && <div className="blocked-overlay">🚫 FULL</div>}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Vouchers */}
          <section className="shop-section">
            <h3>🎫 Vouchers</h3>
            <div className="shop-items vouchers-row">
              {items.filter(i => i.type === 'voucher').map(item => (
                <div
                  key={item.id}
                  className={`shop-item voucher-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="voucher-name">{item.name}</div>
                  <div className="voucher-description">{item.description}</div>
                  <div className="item-price">${item.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Medical Pack */}
          <section className="shop-section">
            <h3>🏥 Medical</h3>
            <div className="shop-items medical-row">
              {items.filter(i => i.type === 'medical').map(item => (
                <div
                  key={item.id}
                  className={`shop-item medical-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="medical-icon">🏥</div>
                  <div className="medical-name">{item.name}</div>
                  <div className="medical-description">{item.description}</div>
                  <div className="item-price">${item.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Legends roster */}
          <section className="shop-section roster-section">
            <h3>🏆 Your Legends ({legends.length}/{maxLegends})</h3>
            <div className="roster-row">
              {legends.map((legend, idx) => {
                const injuryInnings = legendInjuries[legend.name] || 0;
                const isInjured = injuryInnings > 0;
                const buffInfo = legendBuffs[legend.name];
                const isBuffed = buffInfo && buffInfo.inningsRemaining > 0;

                return (
                  <div
                    key={idx}
                    className={`roster-legend ${isInjured ? 'injured' : ''} ${isBuffed ? 'buffed' : ''}`}
                    style={{ borderColor: isInjured ? '#8b0000' : isBuffed ? '#4caf50' : getRarityColor(legend.rarity) }}
                  >
                    <div className="legend-name">
                      {legend.name}
                      {isInjured && <span className="status-badge injury" title={`Injured for ${injuryInnings} more innings`}>🤕 {injuryInnings}</span>}
                      {isBuffed && <span className="status-badge buff" title={`+20% for ${buffInfo.inningsRemaining} more innings`}>💪 {buffInfo.inningsRemaining}</span>}
                    </div>
                    <div className={`legend-effect ${isInjured ? 'strikethrough' : ''}`}>{legend.effect}</div>
                    {isInjured ? (
                      <div className="sell-btn disabled" title="Cannot sell injured legends">
                        🤕 Injured
                      </div>
                    ) : (
                      <button
                        className="sell-btn"
                        onClick={() => onSellLegend(legend, idx)}
                      >
                        Sell ${Math.floor(getLegendPrice(legend.rarity) / 2)}
                      </button>
                    )}
                  </div>
                );
              })}
              {legends.length === 0 && (
                <div className="roster-empty">No Legends yet - buy some above!</div>
              )}
            </div>
          </section>

          {/* Current Ballparks roster */}
          <section className="shop-section roster-section ballparks-roster">
            <h3>🏟️ Your Ballparks ({ballparks.length}/{maxBallparks})</h3>
            <div className="roster-row">
              {ballparks.map((ballpark, idx) => (
                <div
                  key={idx}
                  className="roster-ballpark"
                >
                  <div className="ballpark-name">{ballpark.name}</div>
                  <div className="ballpark-effect">{ballpark.effect}</div>
                  <button
                    className="sell-btn"
                    onClick={() => onSellBallpark(ballpark, idx)}
                  >
                    Sell $1
                  </button>
                </div>
              ))}
              {ballparks.length === 0 && (
                <div className="roster-empty">No Ballparks yet - buy packs above!</div>
              )}
            </div>
          </section>
        </div>

        <footer className="shop-footer">
          <button
            className="btn-view-deck"
            onClick={() => setShowDeckViewer(true)}
          >
            🎴 View Deck ({deck.length})
          </button>

          <button
            className="btn-reroll"
            onClick={handleReroll}
            disabled={money < currentRerollCost}
          >
            🔄 Reroll (${currentRerollCost})
          </button>

          <button
            className="btn-buy"
            onClick={() => selectedItem && handleBuy(selectedItem)}
            disabled={!selectedItem || money < selectedItem?.price}
          >
            {selectedItem ? `Buy ${selectedItem.name} - $${selectedItem.price}` : 'Select an item'}
          </button>

          <button className="btn-continue" onClick={onContinue}>
            Next At-Bat ➡️
          </button>
        </footer>
      </div>

      {/* Deck Viewer */}
      <DeckViewer
        deck={deck}
        isOpen={showDeckViewer}
        onClose={() => setShowDeckViewer(false)}
      />
    </div>
  );
}
