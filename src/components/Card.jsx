// Individual playing card component

import React from 'react';
import { getSuitSymbol, getSuitColor } from '../data/cards.js';
import './Card.css';

export default function Card({
  card,
  selected,
  playOrder,
  onClick,
  disabled,
  // Scoring animation props
  isScoring,        // Currently being scored
  scoringEffect,    // { type: 'chips'|'plusMult'|'timesMult', value: number }
  hasScored         // Already scored (stays highlighted)
}) {
  const suitSymbol = getSuitSymbol(card.suit);
  const suitColor = getSuitColor(card.suit);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(card);
    }
  };

  // Build class list
  const classNames = [
    'card',
    selected ? 'selected' : '',
    disabled ? 'disabled' : '',
    isScoring ? 'scoring' : '',
    hasScored ? 'has-scored' : '',
    scoringEffect?.type === 'chips' ? 'scoring-chips' : '',
    scoringEffect?.type === 'plusMult' ? 'scoring-plus-mult' : '',
    scoringEffect?.type === 'timesMult' ? 'scoring-times-mult' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classNames}
      onClick={handleClick}
      data-suit={card.suit}
    >
      <div className={`card-inner ${suitColor}`}>
        <div className="card-corner top-left">
          <span className="card-rank">{card.rank}</span>
          <span className="card-suit">{suitSymbol}</span>
        </div>

        <div className="card-center">
          <span className="card-suit-large">{suitSymbol}</span>
        </div>

        <div className="card-corner bottom-right">
          <span className="card-rank">{card.rank}</span>
          <span className="card-suit">{suitSymbol}</span>
        </div>

        {/* Enhancement indicator */}
        {card.enhancement && (
          <div
            className="card-enhancement"
            style={{ backgroundColor: card.enhancement.color || '#f39c12' }}
            title={`${card.enhancement.name}: ${card.enhancement.effect}`}
          >
            {card.enhancement.name[0].toUpperCase()}
          </div>
        )}

        {/* Edition glow effect */}
        {card.edition && (
          <div className={`card-edition ${card.edition}`}></div>
        )}

        {/* Seal indicator */}
        {card.seal && (
          <div className={`card-seal ${card.seal}`}></div>
        )}

        {/* Scoring effect pop-up */}
        {isScoring && scoringEffect && (
          <div className={`scoring-popup ${scoringEffect.type}`}>
            {scoringEffect.type === 'chips' && `+${scoringEffect.value}`}
            {scoringEffect.type === 'plusMult' && `+${scoringEffect.value}`}
            {scoringEffect.type === 'timesMult' && `×${scoringEffect.value}`}
          </div>
        )}
      </div>

      {/* Chip value display */}
      <div className="card-chips">
        +{card.chips}
      </div>

      {/* Play order badge for selected cards */}
      {playOrder && (
        <div className="card-play-order">
          {playOrder}
        </div>
      )}
    </div>
  );
}
