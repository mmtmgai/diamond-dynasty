// Hand component - displays player's current cards

import React from 'react';
import Card from './Card.jsx';
import './Hand.css';

export default function Hand({
  cards,
  selectedCards,
  onCardClick,
  disabled,
  onReorderSelected,
  onDragStart,
  onDragOver,
  onDragEnd,
  // Scoring animation props
  scoringCardId,
  scoringEffect,
  scoredCardIds
}) {
  const isSelected = (card) => {
    return selectedCards.some(c => c.id === card.id);
  };

  // Get the play order position for a selected card (1-based)
  const getPlayOrder = (card) => {
    const index = selectedCards.findIndex(c => c.id === card.id);
    return index >= 0 ? index + 1 : null;
  };

  return (
    <div className="hand-container">
      <div className="hand">
        {cards.map((card, index) => {
          const selected = isSelected(card);
          const playOrder = selected ? getPlayOrder(card) : null;
          const isScoring = scoringCardId === card.id;
          const hasScored = scoredCardIds?.has(card.id);

          return (
            <Card
              key={card.id}
              card={card}
              selected={selected}
              playOrder={playOrder}
              onClick={onCardClick}
              disabled={disabled}
              isScoring={isScoring}
              scoringEffect={isScoring ? scoringEffect : null}
              hasScored={hasScored}
            />
          );
        })}
      </div>

      {/* Play order reorder bar - appears when 2+ cards selected */}
      {selectedCards.length >= 2 && !disabled && (
        <div className="play-order-bar">
          <span className="play-order-label">Scoring Order:</span>
          <div className="play-order-chips">
            {selectedCards.map((card, i) => (
              <div
                key={card.id}
                className="play-order-chip"
                draggable
                onDragStart={(e) => onDragStart && onDragStart(e, i)}
                onDragOver={(e) => onDragOver && onDragOver(e)}
                onDrop={(e) => onReorderSelected && onReorderSelected(e, i)}
                onDragEnd={(e) => onDragEnd && onDragEnd(e)}
                style={{
                  color: (card.suit === 'hearts' || card.suit === 'diamonds') ? '#e74c3c' : '#2c3e50',
                  backgroundColor: 'white'
                }}
              >
                <span className="chip-order">{i + 1}</span>
                <span className="chip-rank">{card.rank}</span>
                <span className="chip-suit">
                  {card.suit === 'hearts' ? '♥' : card.suit === 'diamonds' ? '♦' : card.suit === 'clubs' ? '♣' : '♠'}
                </span>
              </div>
            ))}
          </div>
          <span className="play-order-hint">drag to reorder →</span>
        </div>
      )}

      {cards.length === 0 && (
        <div className="hand-empty">No cards in hand</div>
      )}
    </div>
  );
}
