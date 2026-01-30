// Sort controls for organizing cards in hand

import React from 'react';
import './SortControls.css';

export default function SortControls({ sortMode, onSortChange }) {
  return (
    <div className="sort-controls">
      <span className="sort-label">Sort:</span>
      <button
        className={`sort-btn ${sortMode === 'rank' ? 'active' : ''}`}
        onClick={() => onSortChange('rank')}
      >
        By Rank
      </button>
      <button
        className={`sort-btn ${sortMode === 'suit' ? 'active' : ''}`}
        onClick={() => onSortChange('suit')}
      >
        By Suit
      </button>
    </div>
  );
}
