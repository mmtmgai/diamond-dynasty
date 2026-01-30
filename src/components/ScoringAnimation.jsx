import React, { useState, useEffect, useCallback } from 'react';
import soundManager from '../audio/SoundManager';
import './ScoringAnimation.css';

/**
 * ScoringAnimation - Displays step-by-step animated scoring breakdown
 *
 * Props:
 * - scoringSteps: Array of scoring events to animate
 * - onComplete: Callback when animation finishes
 * - targetScore: The score needed to win (for victory detection)
 */
export default function ScoringAnimation({ scoringSteps, onComplete, targetScore }) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [displayedChips, setDisplayedChips] = useState(0);
  const [displayedMult, setDisplayedMult] = useState(0);
  const [popEffects, setPopEffects] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  // Generate unique ID for pop effects
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Add a pop effect
  const addPopEffect = useCallback((type, value, source) => {
    const id = generateId();
    setPopEffects(prev => [...prev, { id, type, value, source }]);
    // Remove after animation
    setTimeout(() => {
      setPopEffects(prev => prev.filter(p => p.id !== id));
    }, 800);
  }, []);

  // Process scoring steps with animation timing
  useEffect(() => {
    if (!scoringSteps || scoringSteps.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    // Initialize audio
    soundManager.init();

    // Start with base hand values
    setCurrentStep(-1);
    setDisplayedChips(0);
    setDisplayedMult(0);

    let stepIndex = 0;
    let runningChips = 0;
    let runningMult = 0;

    const processNextStep = () => {
      if (stepIndex >= scoringSteps.length) {
        // Animation complete
        const score = Math.floor(runningChips * runningMult);
        setFinalScore(score);
        setIsComplete(true);

        // Play victory or defeat sound
        setTimeout(() => {
          if (score >= targetScore) {
            soundManager.playVictorySound();
          }
          if (onComplete) {
            setTimeout(onComplete, 800);
          }
        }, 300);
        return;
      }

      const step = scoringSteps[stepIndex];
      setCurrentStep(stepIndex);

      // Process the step based on type
      switch (step.type) {
        case 'base':
          // Base hand chips and mult
          runningChips = step.chips;
          runningMult = step.mult;
          setDisplayedChips(runningChips);
          setDisplayedMult(runningMult);
          soundManager.playHandTypeSound();
          addPopEffect('hand', step.handName, 'Hand');
          break;

        case 'chips':
          // Adding chips
          runningChips += step.value;
          setDisplayedChips(runningChips);
          soundManager.playChipSound();
          addPopEffect('chips', `+${step.value}`, step.source);
          break;

        case 'plusMult':
          // Adding to mult
          runningMult += step.value;
          setDisplayedMult(runningMult);
          soundManager.playPlusMultSound();
          addPopEffect('plusMult', `+${step.value}`, step.source);
          break;

        case 'timesMult':
          // Multiplying mult
          runningMult = Math.round(runningMult * step.value * 100) / 100;
          setDisplayedMult(runningMult);
          soundManager.playTimesMultSound();
          addPopEffect('timesMult', `×${step.value}`, step.source);
          break;

        default:
          break;
      }

      stepIndex++;

      // Delay before next step (faster for chips, slower for mult)
      const delay = step.type === 'base' ? 600 :
                    step.type === 'chips' ? 250 :
                    step.type === 'timesMult' ? 400 : 300;

      setTimeout(processNextStep, delay);
    };

    // Start animation after brief delay
    const startTimer = setTimeout(processNextStep, 400);

    return () => {
      clearTimeout(startTimer);
    };
  }, [scoringSteps, targetScore, onComplete, addPopEffect]);

  // Calculate current score
  const currentScore = Math.floor(displayedChips * displayedMult);
  const scoreReached = targetScore && currentScore >= targetScore;

  return (
    <div className="scoring-animation-overlay">
      <div className="scoring-animation-container">
        {/* Current step indicator */}
        {scoringSteps && scoringSteps[currentStep] && (
          <div className="scoring-source">
            {scoringSteps[currentStep].source || 'Scoring...'}
          </div>
        )}

        {/* Main scoring display */}
        <div className="scoring-display">
          <div className={`score-component chips ${displayedChips > 0 ? 'active' : ''}`}>
            <span className="score-label">Chips</span>
            <span className="score-value">{displayedChips}</span>
          </div>

          <div className="score-multiply">×</div>

          <div className={`score-component mult ${displayedMult > 0 ? 'active' : ''}`}>
            <span className="score-label">Mult</span>
            <span className="score-value">{displayedMult}</span>
          </div>

          <div className="score-equals">=</div>

          <div className={`score-component total ${scoreReached ? 'victory' : ''}`}>
            <span className="score-label">Score</span>
            <span className="score-value">{currentScore.toLocaleString()}</span>
          </div>
        </div>

        {/* Pop effects container */}
        <div className="pop-effects-container">
          {popEffects.map(effect => (
            <div
              key={effect.id}
              className={`pop-effect ${effect.type}`}
            >
              <span className="pop-value">{effect.value}</span>
              {effect.source && <span className="pop-source">{effect.source}</span>}
            </div>
          ))}
        </div>

        {/* Target score comparison */}
        {targetScore && (
          <div className="target-comparison">
            <span className="target-label">Target:</span>
            <span className={`target-value ${scoreReached ? 'beaten' : ''}`}>
              {targetScore.toLocaleString()}
            </span>
            {isComplete && (
              <span className={`result-badge ${scoreReached ? 'win' : 'lose'}`}>
                {scoreReached ? '✓ WIN!' : '✗ LOSE'}
              </span>
            )}
          </div>
        )}

        {/* Skip button */}
        {!isComplete && (
          <button
            className="skip-animation-btn"
            onClick={() => {
              if (onComplete) onComplete();
            }}
          >
            Skip →
          </button>
        )}
      </div>
    </div>
  );
}
