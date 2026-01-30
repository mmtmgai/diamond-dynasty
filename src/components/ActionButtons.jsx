// Action buttons - Play Hand and Discard

import React from 'react';
import './ActionButtons.css';

export default function ActionButtons({
  selectedCount,
  canPlay,
  canDiscard,
  onPlayHand,
  onDiscard,
  handsRemaining,
  discardsRemaining
}) {
  return (
    <div className="action-buttons">
      <button
        className="btn-play"
        onClick={onPlayHand}
        disabled={!canPlay}
      >
        <span className="btn-icon">⚾</span>
        <span className="btn-text">Play Hand</span>
        <span className="btn-subtext">
          {selectedCount > 0 ? `${selectedCount} card${selectedCount !== 1 ? 's' : ''}` : 'Select cards'}
        </span>
      </button>

      <button
        className="btn-discard"
        onClick={onDiscard}
        disabled={!canDiscard}
      >
        <span className="btn-icon">🗑️</span>
        <span className="btn-text">Discard</span>
        <span className="btn-subtext">
          {discardsRemaining} left
        </span>
      </button>
    </div>
  );
}
