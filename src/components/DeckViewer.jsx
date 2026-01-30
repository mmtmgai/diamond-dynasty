// DeckViewer component - shows full deck with card counts, suits, and enhancements

import React, { useState, useMemo } from 'react';
import './DeckViewer.css';

export default function DeckViewer({ deck, isOpen, onClose, title = 'Your Deck' }) {
  const [sortBy, setSortBy] = useState('suit'); // 'suit', 'rank', or 'enhancement'
  const [filterSuit, setFilterSuit] = useState('all');

  // Get suit symbol for card display
  const getSuitSymbol = (suit) => {
    const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
    return symbols[suit] || '?';
  };

  const getSuitColor = (suit) => {
    return (suit === 'hearts' || suit === 'diamonds') ? '#e74c3c' : '#2c3e50';
  };

  const RANK_ORDER = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, '10': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2 };
  const SUIT_ORDER = { 'spades': 0, 'hearts': 1, 'clubs': 2, 'diamonds': 3 };

  // Calculate deck statistics
  const deckStats = useMemo(() => {
    const stats = {
      total: deck.length,
      bySuit: { hearts: 0, diamonds: 0, clubs: 0, spades: 0 },
      byRank: {},
      enhanced: 0,
      enhancements: {}
    };

    for (const card of deck) {
      stats.bySuit[card.suit] = (stats.bySuit[card.suit] || 0) + 1;
      stats.byRank[card.rank] = (stats.byRank[card.rank] || 0) + 1;
      if (card.enhancement) {
        stats.enhanced++;
        const enhName = card.enhancement.name;
        stats.enhancements[enhName] = (stats.enhancements[enhName] || 0) + 1;
      }
    }

    return stats;
  }, [deck]);

  // Sort and filter deck
  const sortedDeck = useMemo(() => {
    let filtered = [...deck];

    // Apply suit filter
    if (filterSuit !== 'all') {
      filtered = filtered.filter(c => c.suit === filterSuit);
    }

    // Sort
    if (sortBy === 'suit') {
      filtered.sort((a, b) => {
        const suitDiff = SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
        if (suitDiff !== 0) return suitDiff;
        return RANK_ORDER[b.rank] - RANK_ORDER[a.rank];
      });
    } else if (sortBy === 'rank') {
      filtered.sort((a, b) => {
        const rankDiff = RANK_ORDER[b.rank] - RANK_ORDER[a.rank];
        if (rankDiff !== 0) return rankDiff;
        return SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
      });
    } else if (sortBy === 'enhancement') {
      filtered.sort((a, b) => {
        // Enhanced cards first
        if (a.enhancement && !b.enhancement) return -1;
        if (!a.enhancement && b.enhancement) return 1;
        // Then by enhancement name
        if (a.enhancement && b.enhancement) {
          const nameComp = a.enhancement.name.localeCompare(b.enhancement.name);
          if (nameComp !== 0) return nameComp;
        }
        // Then by suit and rank
        const suitDiff = SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
        if (suitDiff !== 0) return suitDiff;
        return RANK_ORDER[b.rank] - RANK_ORDER[a.rank];
      });
    }

    return filtered;
  }, [deck, sortBy, filterSuit]);

  if (!isOpen) return null;

  return (
    <div className="deck-viewer-overlay" onClick={onClose}>
      <div className="deck-viewer-container" onClick={e => e.stopPropagation()}>
        <header className="deck-viewer-header">
          <h2>🎴 {title} ({deckStats.total} cards)</h2>
          <button className="deck-viewer-close" onClick={onClose}>×</button>
        </header>

        {/* Statistics Section */}
        <div className="deck-stats">
          <div className="stat-group suits">
            <span className="stat-label">Suits:</span>
            <span className="stat-item" style={{ color: '#e74c3c' }}>♥ {deckStats.bySuit.hearts}</span>
            <span className="stat-item" style={{ color: '#e74c3c' }}>♦ {deckStats.bySuit.diamonds}</span>
            <span className="stat-item" style={{ color: '#2c3e50' }}>♣ {deckStats.bySuit.clubs}</span>
            <span className="stat-item" style={{ color: '#2c3e50' }}>♠ {deckStats.bySuit.spades}</span>
          </div>
          {deckStats.enhanced > 0 && (
            <div className="stat-group enhanced">
              <span className="stat-label">Enhanced:</span>
              <span className="stat-value">{deckStats.enhanced} cards</span>
              {Object.entries(deckStats.enhancements).map(([name, count]) => (
                <span key={name} className="enhancement-stat">{name}: {count}</span>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="deck-viewer-controls">
          <div className="control-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="suit">Suit</option>
              <option value="rank">Rank</option>
              <option value="enhancement">Enhancement</option>
            </select>
          </div>
          <div className="control-group">
            <label>Filter:</label>
            <select value={filterSuit} onChange={e => setFilterSuit(e.target.value)}>
              <option value="all">All Suits</option>
              <option value="hearts">♥ Hearts</option>
              <option value="diamonds">♦ Diamonds</option>
              <option value="clubs">♣ Clubs</option>
              <option value="spades">♠ Spades</option>
            </select>
          </div>
        </div>

        {/* Card Grid */}
        <div className="deck-viewer-cards">
          {sortedDeck.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className={`viewer-card ${card.enhancement ? 'has-enhancement' : ''}`}
              style={{ color: getSuitColor(card.suit) }}
            >
              <div className="viewer-card-rank">{card.rank}</div>
              <div className="viewer-card-suit">{getSuitSymbol(card.suit)}</div>
              {card.enhancement && (
                <div
                  className="viewer-card-enhancement"
                  style={{ backgroundColor: card.enhancement.color }}
                  title={`${card.enhancement.name}: ${card.enhancement.effect}`}
                >
                  {card.enhancement.name.charAt(0)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rank Counts - helpful for strategy */}
        <div className="rank-counts">
          <span className="rank-label">Card Counts:</span>
          {['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'].map(rank => (
            <span key={rank} className={`rank-count ${(deckStats.byRank[rank] || 0) > 4 ? 'extra' : (deckStats.byRank[rank] || 0) < 4 ? 'missing' : ''}`}>
              {rank}: {deckStats.byRank[rank] || 0}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
