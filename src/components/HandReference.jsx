// Hand Reference Panel - shows scoring for all poker hands

import React, { useState } from 'react';
import { HAND_BASE_SCORES } from '../game/handEvaluator.js';
import './HandReference.css';

const HAND_ORDER = [
  { type: 'HIGH_CARD', name: 'High Card', example: 'Any single card', minCards: 1 },
  { type: 'PAIR', name: 'Pair', example: '2 cards same rank', minCards: 2 },
  { type: 'TWO_PAIR', name: 'Two Pair', example: '2 different pairs', minCards: 4 },
  { type: 'THREE_OF_A_KIND', name: 'Three of a Kind', example: '3 cards same rank', minCards: 3 },
  { type: 'STRAIGHT', name: 'Straight', example: '5 sequential ranks', minCards: 5 },
  { type: 'FLUSH', name: 'Flush', example: '5 cards same suit', minCards: 5 },
  { type: 'FULL_HOUSE', name: 'Full House', example: '3 of a kind + pair', minCards: 5 },
  { type: 'FOUR_OF_A_KIND', name: 'Four of a Kind', example: '4 cards same rank', minCards: 4 },
  { type: 'STRAIGHT_FLUSH', name: 'Straight Flush', example: 'Straight + Flush', minCards: 5 },
  { type: 'ROYAL_FLUSH', name: 'Royal Flush', example: '10-J-Q-K-A same suit', minCards: 5 },
];

export default function HandReference({ handLevels = {}, isOpen, onToggle }) {
  if (!isOpen) {
    return (
      <button className="hand-ref-toggle" onClick={onToggle}>
        📊 Hands
      </button>
    );
  }

  return (
    <div className="hand-reference">
      <div className="hand-ref-header">
        <h3>📊 Hand Scoring</h3>
        <button className="hand-ref-close" onClick={onToggle}>×</button>
      </div>

      <div className="hand-ref-list">
        {HAND_ORDER.map(({ type, name, example, minCards }) => {
          const base = HAND_BASE_SCORES[type];
          const level = handLevels[type] || 1;
          const levelBonus = level - 1;
          const chips = base.chips + (levelBonus * 10);
          const mult = base.mult + (levelBonus * 1);

          return (
            <div key={type} className="hand-ref-row">
              <div className="hand-ref-info">
                <span className="hand-ref-name">{name}</span>
                <span className="hand-ref-example">{example}</span>
              </div>
              <div className="hand-ref-score">
                <span className="hand-ref-chips">{chips}</span>
                <span className="hand-ref-x">×</span>
                <span className="hand-ref-mult">{mult}</span>
              </div>
              {level > 1 && (
                <span className="hand-ref-level">Lv.{level}</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="hand-ref-footer">
        <div className="scoring-explanation">
          <p className="scoring-formula"><span className="text-chips">Chips</span> × <span className="text-mult">Mult</span> = <span className="text-total">Total Score</span></p>
          <div className="scoring-breakdown">
            <p><span className="text-chips">Chips</span> = Hand Base + Card Values</p>
            <p className="scoring-detail">Card Values: A=11, K/Q/J=10, Others=face value</p>
            <p className="scoring-detail">Legend bonuses can add more chips!</p>
          </div>
          <div className="scoring-breakdown">
            <p><span className="text-mult">Mult</span> = Hand Base + Legend Bonuses</p>
            <p className="scoring-detail">Higher hands have higher base mult</p>
          </div>
        </div>
        <p className="hand-ref-note">Level up hands by playing them to boost chips & mult!</p>
      </div>
    </div>
  );
}
