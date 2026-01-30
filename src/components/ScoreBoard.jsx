// Scoreboard component - shows current score, target, and resources

import React from 'react';
import './ScoreBoard.css';
import { getSeriesName } from '../game/gameState.js';

export default function ScoreBoard({
  currentScore,
  targetScore,
  handsRemaining,
  discardsRemaining,
  money,
  series,
  atBatType,
  handPreview
}) {
  const scorePercent = Math.min((currentScore / targetScore) * 100, 100);
  const atBatNames = {
    FIRST: 'First At-Bat',
    SECOND: 'Second At-Bat',
    BOSS: 'Boss At-Bat'
  };

  const seriesName = getSeriesName(series);

  return (
    <div className="scoreboard">
      {/* Series and At-Bat info */}
      <div className="scoreboard-header">
        <div className="series-info">
          <span className="series-label">{seriesName}</span>
          <span className="atbat-label">{atBatNames[atBatType]}</span>
        </div>
      </div>

      {/* Score progress */}
      <div className="score-section">
        <div className="score-display">
          <span className="current-score">{currentScore.toLocaleString()}</span>
          <span className="score-divider">/</span>
          <span className="target-score">{targetScore.toLocaleString()}</span>
        </div>
        <div className="score-bar">
          <div
            className="score-bar-fill"
            style={{ width: `${scorePercent}%` }}
          ></div>
        </div>
      </div>

      {/* Hand preview - only shows hand type, not score */}
      {handPreview && (
        <div className="hand-preview">
          <div className="preview-name">{handPreview.name}</div>
          <div className="preview-hint">Play to see score</div>
        </div>
      )}

      {/* Resources */}
      <div className="resources">
        <div className="resource">
          <span className="resource-icon">🃏</span>
          <span className="resource-value">{handsRemaining}</span>
          <span className="resource-label">Hands</span>
        </div>
        <div className="resource">
          <span className="resource-icon">🗑️</span>
          <span className="resource-value">{discardsRemaining}</span>
          <span className="resource-label">Discards</span>
        </div>
        <div className="resource money">
          <span className="resource-icon">💰</span>
          <span className="resource-value">${money}</span>
        </div>
      </div>
    </div>
  );
}
