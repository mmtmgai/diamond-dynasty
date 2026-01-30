// Diamond Dynasty - Main App Component

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Hand from './components/Hand.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import SortControls from './components/SortControls.jsx';
import Shop from './components/Shop.jsx';
import HandReference from './components/HandReference.jsx';
import DeckViewer from './components/DeckViewer.jsx';
// ScoringAnimation overlay removed - now using card-based animation
import { createInitialState, calculateTargetScore, calculateReward, getBossModifiers, calculateHomeAwayBonuses, rollForInjuries, decrementInjuryBuffCounters, applyMedicalPack, isLegendInjured, getLegendBuffMultiplier, getSeriesName } from './game/gameState.js';
import { evaluateHand, calculateScore, generateScoringSteps } from './game/handEvaluator.js';
import soundManager from './audio/SoundManager.js';
import { createDeck, shuffleDeck, RANK_VALUES } from './data/cards.js';
import './App.css';

// Suit order for sorting
const SUIT_ORDER = { 'spades': 0, 'hearts': 1, 'clubs': 2, 'diamonds': 3 };

export default function App() {
  const [gameState, setGameState] = useState(null);
  const [handPreview, setHandPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [showingScore, setShowingScore] = useState(false);
  const [sortMode, setSortMode] = useState('rank'); // 'rank' or 'suit'
  const [showHandRef, setShowHandRef] = useState(false);
  const [triggeredLegends, setTriggeredLegends] = useState([]); // Names of legends that triggered
  const [triggeredBallparks, setTriggeredBallparks] = useState([]); // Names of ballparks that triggered
  const [showWelcome, setShowWelcome] = useState(true); // Show welcome screen on first load
  const [deckViewerMode, setDeckViewerMode] = useState(null); // null, 'remaining', or 'full'

  // Dialog states
  const [injuryDialog, setInjuryDialog] = useState(null); // { name, innings } or null
  const [homeAwayDialog, setHomeAwayDialog] = useState(null); // { homeWinners, awayWinners, totalMultiplier } or null
  const [pendingScoreUpdate, setPendingScoreUpdate] = useState(null); // Store score update while showing dialogs

  // Scoring animation state
  const [scoringAnimation, setScoringAnimation] = useState(null); // { steps, targetScore, result, score }
  const [currentScoringStep, setCurrentScoringStep] = useState(-1); // Index of current step being animated
  const [scoringCardId, setScoringCardId] = useState(null); // ID of card currently being scored
  const [scoringEffect, setScoringEffect] = useState(null); // Current effect being shown { type, value }
  const [scoredCardIds, setScoredCardIds] = useState(new Set()); // Cards that have already scored
  const [runningScore, setRunningScore] = useState({ chips: 0, mult: 0 }); // Running chips/mult during animation
  const [scoringBonusName, setScoringBonusName] = useState(null); // Name of ballpark/legend being scored
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Initialize game (but don't auto-start, wait for welcome screen)
  useEffect(() => {
    // Don't auto-start - wait for player to click Play Game
  }, []);

  const startNewGame = () => {
    const state = createInitialState();
    state.targetScore = calculateTargetScore(state.series, state.atBatType);
    // Generate upcoming boss modifiers for Series 1 at game start
    state.upcomingBossModifiers = getBossModifiers(state.series);
    setGameState(state);
    setMessage('Select cards to play a poker hand!');
    setHandPreview(null);
    setShowWelcome(false);
  };

  // Sort hand based on current mode
  const sortedHand = useMemo(() => {
    if (!gameState) return [];

    const hand = [...gameState.hand];

    if (sortMode === 'rank') {
      // Sort by rank (high to low), then by suit
      hand.sort((a, b) => {
        const rankDiff = RANK_VALUES[b.rank] - RANK_VALUES[a.rank];
        if (rankDiff !== 0) return rankDiff;
        return SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
      });
    } else {
      // Sort by suit, then by rank (high to low)
      hand.sort((a, b) => {
        const suitDiff = SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit];
        if (suitDiff !== 0) return suitDiff;
        return RANK_VALUES[b.rank] - RANK_VALUES[a.rank];
      });
    }

    return hand;
  }, [gameState?.hand, sortMode]);

  // Update hand preview when selection changes
  useEffect(() => {
    if (!gameState || gameState.selectedCards.length === 0) {
      setHandPreview(null);
      return;
    }

    const result = evaluateHand(gameState.selectedCards);
    // Pass full gameState and all selected cards for Legend effects
    const score = calculateScore(result, gameState.handLevels, gameState.legends, gameState, gameState.selectedCards);

    setHandPreview({
      name: result.name,
      chips: score.chips,
      mult: score.mult,
      total: score.total,
      legendEffects: score.legendEffects
    });
  }, [gameState?.selectedCards, gameState?.legends, gameState?.handLevels]);

  // Handle card click - toggle selection
  const handleCardClick = useCallback((card) => {
    if (showingScore) return;

    setGameState(prev => {
      const isSelected = prev.selectedCards.some(c => c.id === card.id);

      if (isSelected) {
        // Deselect
        soundManager.playDeselectSound();
        return {
          ...prev,
          selectedCards: prev.selectedCards.filter(c => c.id !== card.id)
        };
      } else if (prev.selectedCards.length < 5) {
        // Select (max 5 cards)
        soundManager.playSelectSound();
        return {
          ...prev,
          selectedCards: [...prev.selectedCards, card]
        };
      }
      return prev;
    });
  }, [showingScore]);

  // Play the selected hand
  const playHand = useCallback(() => {
    if (!gameState || gameState.selectedCards.length === 0 || gameState.handsRemaining <= 0) {
      return;
    }

    // Initialize sound manager on first play
    soundManager.init();

    setShowingScore(true);

    const result = evaluateHand(gameState.selectedCards);
    // Pass full gameState and all selected cards for Legend effects
    const score = calculateScore(result, gameState.handLevels, gameState.legends, gameState, gameState.selectedCards);

    // Generate scoring steps for animation
    const scoringSteps = generateScoringSteps(result, gameState.handLevels, gameState.legends, gameState, gameState.selectedCards);

    // Reset animation state
    setCurrentScoringStep(-1);
    setScoringCardId(null);
    setScoringEffect(null);
    setScoredCardIds(new Set());
    setRunningScore({ chips: 0, mult: 0 });
    setScoringBonusName(null);
    setTriggeredLegends([]);
    setTriggeredBallparks([]);

    // Store scoring data and start animation
    setScoringAnimation({
      steps: scoringSteps,
      targetScore: gameState.targetScore,
      result,
      score,
      selectedCards: gameState.selectedCards
    });
  }, [gameState]);

  // Effect to run the scoring animation step by step
  useEffect(() => {
    if (!scoringAnimation) return;

    const { steps, selectedCards } = scoringAnimation;
    const nextStep = currentScoringStep + 1;

    if (nextStep >= steps.length) {
      // Animation complete - wait a moment then finalize
      const timer = setTimeout(() => {
        handleScoringAnimationComplete();
      }, 600);
      return () => clearTimeout(timer);
    }

    // Determine delay based on step type
    // Ballparks and legends get longer delays for their distinctive sounds
    const step = steps[nextStep];
    let delay;
    if (currentScoringStep === -1) {
      delay = 400; // Initial delay
    } else if (step?.source?.includes('🏟️')) {
      delay = 550; // Longer for ballpark crowd sound
    } else if (step?.source?.includes('⭐')) {
      delay = 500; // Longer for legend bat crack
    } else {
      delay = 350; // Normal delay for cards
    }

    const timer = setTimeout(() => {
      // Determine source type for sound selection
      const isBallpark = step.source?.includes('🏟️');
      const isLegend = step.source?.includes('⭐');

      // Update running score
      setRunningScore(prev => {
        let newChips = prev.chips;
        let newMult = prev.mult;

        if (step.type === 'base') {
          newChips = step.chips;
          newMult = step.mult;
          soundManager.playHandTypeSound();
        } else if (step.type === 'chips') {
          newChips = prev.chips + step.value;
          // Use appropriate sound based on source
          if (isBallpark) {
            soundManager.playCrowdSound();
          } else if (isLegend) {
            soundManager.playLegendSound();
          } else {
            soundManager.playChipSound();
          }
        } else if (step.type === 'plusMult') {
          newMult = prev.mult + step.value;
          // Use appropriate sound based on source
          if (isBallpark) {
            soundManager.playCrowdSound();
          } else if (isLegend) {
            soundManager.playLegendSound();
          } else {
            soundManager.playPlusMultSound();
          }
        } else if (step.type === 'timesMult') {
          newMult = Math.round(prev.mult * step.value * 100) / 100;
          // Use appropriate sound based on source
          if (isBallpark) {
            soundManager.playCrowdSound();
          } else if (isLegend) {
            soundManager.playLegendSound();
          } else {
            soundManager.playTimesMultSound();
          }
        }

        return { chips: newChips, mult: newMult };
      });

      // Determine which card/bonus is scoring
      if (step.source) {
        // Check if it's a card (has suit symbol)
        const suitSymbols = ['♥', '♦', '♣', '♠'];
        const isCard = suitSymbols.some(s => step.source.includes(s));

        if (isCard) {
          // Find the card by matching rank and suit symbol
          const card = selectedCards.find(c => {
            const cardName = `${c.rank}${getSuitSymbolForMatch(c.suit)}`;
            return step.source.startsWith(cardName);
          });

          if (card) {
            setScoringCardId(card.id);
            setScoringEffect({ type: step.type, value: step.value });
            // Add to scored cards after animation
            setTimeout(() => {
              setScoredCardIds(prev => new Set([...prev, card.id]));
            }, 300);
          }
          setScoringBonusName(null);
        } else if (isBallpark) {
          // Ballpark
          const parkName = step.source.replace('🏟️ ', '');
          setScoringBonusName(parkName);
          setScoringCardId(null);
          setScoringEffect({ type: step.type, value: step.value });
          setTriggeredBallparks(prev => [...prev, parkName]);
        } else if (isLegend) {
          // Legend
          const legendName = step.source.replace('⭐ ', '').replace(' 💪', '');
          setScoringBonusName(legendName);
          setScoringCardId(null);
          setScoringEffect({ type: step.type, value: step.value });
          setTriggeredLegends(prev => [...prev, legendName]);
        } else if (step.type === 'base') {
          // Hand type announcement
          setScoringBonusName(step.handName);
          setScoringCardId(null);
          setScoringEffect(null);
        }
      }

      setCurrentScoringStep(nextStep);

      // Clear the current scoring highlight after a moment
      // Longer clear time for ballparks/legends to let sound play
      const clearDelay = (isBallpark || isLegend) ? 450 : 300;
      setTimeout(() => {
        setScoringCardId(null);
        setScoringEffect(null);
      }, clearDelay);

    }, delay);

    return () => clearTimeout(timer);
  }, [scoringAnimation, currentScoringStep]);

  // Helper function for matching suit symbols
  const getSuitSymbolForMatch = (suit) => {
    const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
    return symbols[suit] || suit[0];
  };

  // Handle scoring animation complete
  const handleScoringAnimationComplete = useCallback(() => {
    if (!scoringAnimation) return;

    const { result, score } = scoringAnimation;

    // Clear all animation state
    setScoringAnimation(null);
    setCurrentScoringStep(-1);
    setScoringCardId(null);
    setScoringEffect(null);
    setScoredCardIds(new Set());
    setRunningScore({ chips: 0, mult: 0 });
    setScoringBonusName(null);

    // Now update the game state (previously in the setTimeout)
    setGameState(prev => {
        // First check if this hand would win WITHOUT home/away bonuses
        const baseNewScore = prev.currentScore + score.total;
        const newHandsRemaining = prev.handsRemaining - 1;

        // Remove played cards from hand
        const remainingHand = prev.hand.filter(
          c => !prev.selectedCards.some(sc => sc.id === c.id)
        );

        // Draw new cards
        const cardsToDraw = Math.min(prev.selectedCards.length, prev.deck.length);
        const newCards = prev.deck.slice(0, cardsToDraw);
        const newDeck = prev.deck.slice(cardsToDraw);

        // Check win/loss
        let newPhase = prev.phase;
        let nextAtBat = prev.atBat;
        let nextAtBatType = prev.atBatType;
        let nextSeries = prev.series;
        let nextMoney = prev.money;
        let nextTargetScore = prev.targetScore;
        let moneyBreakdown = null;

        // Build scoring breakdown to store for win screen
        let scoringBreakdown = null;
        let pendingHomeAwayBonus = null;

        // Calculate the actual score for this hand (with potential home/away bonuses if winning)
        let handTotal = score.total;
        let newScore = baseNewScore;

        if (baseNewScore >= prev.targetScore) {
          // This is the winning hand! Calculate Home/Away Game bonuses
          const homeAwayBonuses = calculateHomeAwayBonuses(prev.legends, prev.ballparks || [], prev.legendInjuries || {});

          // Store for dialog if there are any bonuses
          if (homeAwayBonuses.homeWinners.length > 0 || homeAwayBonuses.awayWinners.length > 0) {
            pendingHomeAwayBonus = homeAwayBonuses;
          }
          handTotal = Math.floor(score.total * homeAwayBonuses.totalMultiplier);
          newScore = prev.currentScore + handTotal;

          // Store the winning hand's scoring details (include the target we just beat)
          scoringBreakdown = {
            handName: result.name,
            chips: score.chips,
            mult: score.mult,
            baseTotal: score.total,
            total: handTotal,
            legendEffects: score.legendEffects || [],
            ballparkEffects: score.ballparkEffects || [],
            homeWinners: homeAwayBonuses.homeWinners,
            awayWinners: homeAwayBonuses.awayWinners,
            homeAwayMultiplier: homeAwayBonuses.totalMultiplier,
            targetBeaten: prev.targetScore  // Store the target we just beat for the win screen
          };

          // Build detailed money breakdown
          moneyBreakdown = {
            starting: prev.money,
            reward: calculateReward(prev.series, prev.atBatType),
            handsBonus: 0,
            ballparkBonus: 0,
            salaryCap: 0,
            interest: 0
          };

          // Calculate interest FIRST - based only on starting money + per-hand ballpark bonuses
          // Interest is NOT earned on the at-bat reward or remaining hands bonus
          let interestBase = prev.money;

          // Check for Camden Yards ballpark (+$2 per hand played) - this counts for interest
          const camdenYards = prev.ballparks?.find(b => b.bonus === 'money_per_hand');
          if (camdenYards) {
            const handsPlayedThisAtBat = (prev.baseHands || 4) - newHandsRemaining;
            moneyBreakdown.ballparkBonus = handsPlayedThisAtBat * 2;
            interestBase += moneyBreakdown.ballparkBonus;
          }

          // Calculate interest on starting money + ballpark bonuses only
          moneyBreakdown.interest = Math.min(5, Math.floor(interestBase / 5));

          // Now add all the money together
          nextMoney = prev.money;
          nextMoney += moneyBreakdown.ballparkBonus; // Camden Yards bonus
          nextMoney += moneyBreakdown.interest; // Interest (calculated on starting + ballpark)
          nextMoney += moneyBreakdown.reward; // At-Bat reward (not part of interest calc)

          // +$1 for each remaining hand (not part of interest calc)
          moneyBreakdown.handsBonus = newHandsRemaining;
          nextMoney += moneyBreakdown.handsBonus;

          // Check for Salary Cap boss modifier (-$5 per hand played)
          const salaryCap = prev.bossModifiers?.find(m => m.type === 'money_debuff');
          if (salaryCap) {
            const handsPlayedThisAtBat = (prev.baseHands || 4) - newHandsRemaining;
            moneyBreakdown.salaryCap = handsPlayedThisAtBat * (salaryCap.moneyPerHand || -5);
            nextMoney = Math.max(0, nextMoney + moneyBreakdown.salaryCap);
          }

          // Ensure money never goes below zero
          nextMoney = Math.max(0, nextMoney);

          // Go to AT_BAT_WON phase (player clicks to continue to shop)
          newPhase = 'AT_BAT_WON';

          // Determine next At-Bat (but don't transition yet - that happens when leaving shop)
          if (prev.atBatType === 'FIRST') {
            nextAtBatType = 'SECOND';
            nextAtBat = 2;
          } else if (prev.atBatType === 'SECOND') {
            nextAtBatType = 'BOSS';
            nextAtBat = 3;
          } else {
            // Beat the Boss - move to next Series
            if (prev.series === 9) {
              // Series 9 (World Series) beaten - show victory with endless mode option
              newPhase = 'VICTORY';
            } else {
              // Series 1-8 or Extra Innings (10+) - advance to next series
              nextSeries = prev.series + 1;
              nextAtBat = 1;
              nextAtBatType = 'FIRST';
            }
          }

          // Calculate new target score
          if (newPhase !== 'VICTORY') {
            nextTargetScore = calculateTargetScore(nextSeries, nextAtBatType);
          }
        } else if (newHandsRemaining <= 0) {
          // Lost - out of hands
          newPhase = 'GAME_OVER';
        }

        // Roll for injuries after playing a hand
        const injuryResult = rollForInjuries(prev.legends, prev.legendInjuries || {}, prev.hasTrainingCamp);

        return {
          ...prev,
          currentScore: (newPhase === 'SHOP' || newPhase === 'AT_BAT_WON') ? newScore : newScore, // Keep score visible on win screen
          hand: [...remainingHand, ...newCards],
          deck: newDeck,
          selectedCards: [],
          handsRemaining: newHandsRemaining,
          phase: newPhase,
          series: nextSeries,
          atBat: nextAtBat,
          atBatType: nextAtBatType,
          money: nextMoney,
          targetScore: nextTargetScore,
          handsPlayed: prev.handsPlayed + 1,
          highestScore: Math.max(prev.highestScore, score.total),
          moneyBreakdown,
          scoringBreakdown,
          legendInjuries: injuryResult.newInjuries,
          injuredThisHand: injuryResult.injuredThisHand,
          pendingHomeAwayBonus
        };
      });

      setShowingScore(false);
    setMessage('');
    setTriggeredLegends([]);
    setTriggeredBallparks([]);
  }, [scoringAnimation, gameState]);

  // Effect to show injury dialog when an injury occurs
  useEffect(() => {
    if (gameState?.injuredThisHand?.length > 0 && !injuryDialog) {
      // Show dialog for the first injured legend
      const injured = gameState.injuredThisHand[0];
      setInjuryDialog(injured);
    }
  }, [gameState?.injuredThisHand]);

  // Effect to show home/away bonus dialog when applicable
  useEffect(() => {
    if (gameState?.pendingHomeAwayBonus && !homeAwayDialog && !injuryDialog) {
      setHomeAwayDialog(gameState.pendingHomeAwayBonus);
      // Clear the pending bonus from state
      setGameState(prev => ({ ...prev, pendingHomeAwayBonus: null }));
    }
  }, [gameState?.pendingHomeAwayBonus, injuryDialog]);

  // Handler to dismiss injury dialog
  const handleDismissInjuryDialog = useCallback(() => {
    setInjuryDialog(null);
    // Check if there are more injuries to show
    setGameState(prev => {
      if (prev.injuredThisHand?.length > 1) {
        // Show next injury
        setTimeout(() => setInjuryDialog(prev.injuredThisHand[1]), 100);
        return { ...prev, injuredThisHand: prev.injuredThisHand.slice(1) };
      }
      return { ...prev, injuredThisHand: [] };
    });
  }, []);

  // Handler to dismiss home/away dialog
  const handleDismissHomeAwayDialog = useCallback(() => {
    setHomeAwayDialog(null);
  }, []);

  // Discard selected cards
  const discardCards = useCallback(() => {
    if (!gameState || gameState.selectedCards.length === 0 || gameState.discardsRemaining <= 0) {
      return;
    }

    setGameState(prev => {
      // Remove discarded cards from hand
      const remainingHand = prev.hand.filter(
        c => !prev.selectedCards.some(sc => sc.id === c.id)
      );

      // Draw replacement cards
      const cardsToDraw = Math.min(prev.selectedCards.length, prev.deck.length);
      const newCards = prev.deck.slice(0, cardsToDraw);
      const newDeck = prev.deck.slice(cardsToDraw);

      return {
        ...prev,
        hand: [...remainingHand, ...newCards],
        deck: newDeck,
        discardPile: [...prev.discardPile, ...prev.selectedCards],
        selectedCards: [],
        discardsRemaining: prev.discardsRemaining - 1
      };
    });

    setMessage('Discarded! Drew new cards.');
  }, [gameState]);

  // Shop handlers
  const handleBuyItem = useCallback((item) => {
    setGameState(prev => {
      let newState = {
        ...prev,
        money: Math.max(0, prev.money - item.price) // Never go below zero
      };

      // If it's a pack purchase (isPack flag), just deduct money - pack opening handled in Shop
      if (item.isPack) {
        return newState;
      }

      if (item.type === 'legend') {
        newState.legends = [...prev.legends, {
          name: item.name,
          position: item.position,
          rarity: item.rarity,
          effect: item.effect,
          description: item.description
        }];
      } else if (item.type === 'position') {
        newState.positions = [...(prev.positions || []), {
          name: item.name,
          position: item.position,
          effect: item.effect,
          handType: item.handType,
          description: item.description
        }];
        // Apply position card effect - level up hand type
        if (item.handType && item.handType !== 'ALL') {
          const currentLevel = prev.handLevels?.[item.handType] || 1;
          newState.handLevels = {
            ...prev.handLevels,
            [item.handType]: currentLevel + 1
          };
        }
      } else if (item.type === 'ballpark') {
        newState.ballparks = [...(prev.ballparks || []), {
          name: item.name,
          city: item.city,
          effect: item.effect,
          bonus: item.bonus,
          description: item.description
        }];
        // Apply immediate ballpark effects
        if (item.bonus === 'hand_size') {
          // Petco Park: +1 Hand size
          newState.handSize = (prev.handSize || 8) + 1;
        } else if (item.bonus === 'extra_discard') {
          // PNC Park: +1 Discard per round
          newState.baseDiscards = (prev.baseDiscards || 3) + 1;
        }
      } else if (item.type === 'voucher') {
        // Apply voucher effects
        if (item.effect === 'maxLegends') {
          newState.maxLegends = prev.maxLegends + 1;
        } else if (item.effect === 'handsPerRound') {
          newState.baseHands = (prev.baseHands || 4) + 1;
        } else if (item.effect === 'discardsPerRound') {
          newState.baseDiscards = (prev.baseDiscards || 3) + 1;
        } else if (item.effect === 'handSize') {
          newState.handSize = (prev.handSize || 8) + 1;
        } else if (item.effect === 'trainingCamp') {
          newState.hasTrainingCamp = true;
        } else if (item.effect === 'rerollCost') {
          newState.hasScoutReport = true;
        }
        newState.vouchers = [...(prev.vouchers || []), item];
        newState.voucherBoughtThisSeries = true; // Mark that voucher was bought this series
        // Track purchased voucher effect to prevent it from appearing again
        newState.purchasedVoucherEffects = [...(prev.purchasedVoucherEffects || []), item.effect];
      }

      return newState;
    });
  }, []);

  // Medical Pack handler - applies immediately
  const handleMedicalPack = useCallback((price) => {
    setGameState(prev => {
      const result = applyMedicalPack(prev.legends, prev.legendInjuries || {}, prev.legendBuffs || {});

      // Show message about what happened
      if (result.effect === 'healed') {
        setMessage(`🏥 ${result.affectedLegend} has been healed!`);
      } else if (result.effect === 'buffed') {
        setMessage(`💪 ${result.affectedLegend} buffed +20% for 3 innings!`);
      }

      return {
        ...prev,
        money: Math.max(0, prev.money - price),
        legendInjuries: result.injuries,
        legendBuffs: result.buffs
      };
    });
  }, []);

  const handleSellLegend = useCallback((legend, index) => {
    const sellPrice = Math.floor(
      { common: 4, uncommon: 6, rare: 8, legendary: 12 }[legend.rarity] / 2
    );

    setGameState(prev => ({
      ...prev,
      money: prev.money + sellPrice,
      legends: prev.legends.filter((_, i) => i !== index)
    }));
  }, []);

  const handleSellBallpark = useCallback((ballpark, index) => {
    setGameState(prev => {
      const newState = {
        ...prev,
        money: prev.money + 1, // Ballparks sell for $1
        ballparks: prev.ballparks.filter((_, i) => i !== index)
      };
      // Remove ballpark bonuses when sold
      if (ballpark.bonus === 'hand_size') {
        // Petco Park: remove +1 Hand size
        newState.handSize = Math.max(8, (prev.handSize || 8) - 1);
      } else if (ballpark.bonus === 'extra_discard') {
        // PNC Park: remove +1 Discard per round
        newState.baseDiscards = Math.max(3, (prev.baseDiscards || 3) - 1);
      }
      return newState;
    });
  }, []);

  const handleReroll = useCallback((cost) => {
    setGameState(prev => ({
      ...prev,
      money: Math.max(0, prev.money - cost), // Never go below zero
      rerollsThisShop: (prev.rerollsThisShop || 0) + 1 // Track rerolls for cost increase
    }));
  }, []);

  // Handler for applying enhancement to a card in the deck
  const handleApplyEnhancement = useCallback((cardId, enhancement) => {
    setGameState(prev => {
      // Find the target card
      const targetCard = prev.fullDeck.find(c => c.id === cardId);
      if (!targetCard) return prev;

      // Handle special enhancement types: duplicate (Doubleheader) and remove (Caught Stealing)
      if (enhancement.bonus?.duplicate) {
        // Doubleheader: Duplicate the card (keeps all properties including enhancement)
        const duplicateCard = {
          ...targetCard,
          id: `${targetCard.rank}-${targetCard.suit}-dup-${Date.now()}` // Unique ID for duplicate
          // Enhancement is preserved via spread operator
        };

        const enhText = targetCard.enhancement ? ` (with ${targetCard.enhancement.name})` : '';
        setMessage(`⚾ Doubleheader! Duplicated ${targetCard.rank} of ${targetCard.suit}${enhText}!`);

        return {
          ...prev,
          fullDeck: [...prev.fullDeck, duplicateCard],
          deck: [...prev.deck, duplicateCard] // Also add to current deck
        };
      }

      if (enhancement.bonus?.remove) {
        // Caught Stealing: Remove the card from deck
        setMessage(`🚨 Caught Stealing! Removed ${targetCard.rank} of ${targetCard.suit} from deck!`);

        return {
          ...prev,
          fullDeck: prev.fullDeck.filter(c => c.id !== cardId),
          deck: prev.deck.filter(c => c.id !== cardId),
          hand: prev.hand.filter(c => c.id !== cardId)
        };
      }

      // Standard enhancement: apply to the card
      const updatedFullDeck = prev.fullDeck.map(card => {
        if (card.id === cardId) {
          return { ...card, enhancement: enhancement };
        }
        return card;
      });

      // Also update if the card is in the current hand or deck
      const updatedDeck = prev.deck.map(card => {
        if (card.id === cardId) {
          return { ...card, enhancement: enhancement };
        }
        return card;
      });

      const updatedHand = prev.hand.map(card => {
        if (card.id === cardId) {
          return { ...card, enhancement: enhancement };
        }
        return card;
      });

      setMessage(`🏋️ ${enhancement.name} applied to ${targetCard.rank} of ${targetCard.suit}!`);

      return {
        ...prev,
        fullDeck: updatedFullDeck,
        deck: updatedDeck,
        hand: updatedHand
      };
    });
  }, []);

  // Handler for continuing from win screen to shop
  const handleContinueToShop = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      phase: 'SHOP',
      currentScore: 0,
      rerollsThisShop: 0 // Reset reroll count for new shop visit
    }));
    setMessage('');
  }, []);

  const handleContinueFromShop = useCallback(() => {
    setGameState(prev => {
      // Use the fullDeck (with enhancements) and shuffle it for each new At-Bat
      const deckToUse = prev.fullDeck || createDeck();
      const freshDeck = shuffleDeck([...deckToUse]); // Copy to avoid mutation
      const handSize = prev.handSize || 8;

      // Check if moving to new series - reset voucher flag and generate new boss modifiers
      const isNewSeries = prev.atBatType === 'BOSS' ||
        (prev.atBat === 1 && prev.atBatType === 'FIRST');

      // Use the pre-generated boss modifiers for Boss At-Bat
      let bossModifiers = [];
      let handsRemaining = prev.baseHands || 4;
      let discardsRemaining = prev.baseDiscards || 3;

      if (prev.atBatType === 'BOSS') {
        // Use the upcoming boss modifiers that were generated at series start
        bossModifiers = prev.upcomingBossModifiers || [];

        // Apply resource debuffs immediately
        for (const mod of bossModifiers) {
          if (mod.handPenalty) {
            handsRemaining = Math.max(1, handsRemaining - mod.handPenalty);
          }
          if (mod.discardPenalty) {
            discardsRemaining = Math.max(0, discardsRemaining - mod.discardPenalty);
          }
        }
      }

      // Generate upcoming boss modifiers for the NEXT series if we're entering a new series
      // (This happens after beating the boss, when we start the first at-bat of a new series)
      let upcomingBossModifiers = prev.upcomingBossModifiers;
      if (isNewSeries && prev.atBatType === 'BOSS') {
        // We just beat the boss, generate modifiers for the next series
        upcomingBossModifiers = getBossModifiers(prev.series + 1);
      }

      // Decrement injury/buff counters at end of inning
      const injuryBuffResult = decrementInjuryBuffCounters(
        prev.legendInjuries || {},
        prev.legendBuffs || {}
      );

      return {
        ...prev,
        phase: 'PLAYING',
        hand: freshDeck.slice(0, handSize),
        deck: freshDeck.slice(handSize),
        discardPile: [],
        handsRemaining,
        discardsRemaining,
        currentScore: 0,
        voucherBoughtThisSeries: isNewSeries ? false : prev.voucherBoughtThisSeries,
        bossModifiers,
        upcomingBossModifiers,
        legendInjuries: injuryBuffResult.injuries,
        legendBuffs: injuryBuffResult.buffs,
        injuredThisHand: [] // Clear injury notification
      };
    });

    setMessage('New At-Bat! Fresh deck shuffled. Good luck!');
  }, []);

  // Drag and drop state for reordering
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragType, setDragType] = useState(null); // 'legend', 'ballpark', or 'card'

  // Generic drag handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  }, []);

  const handleDragEnd = useCallback((e) => {
    e.currentTarget.classList.remove('drag-over');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    setDraggedIndex(null);
    setDragType(null);
  }, []);

  // Legend drag handlers
  const handleLegendDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    setDragType('legend');
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('dragging');
  }, []);

  const handleLegendDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (dragType !== 'legend' || draggedIndex === null || draggedIndex === dropIndex) return;

    setGameState(prev => {
      const newLegends = [...prev.legends];
      const [removed] = newLegends.splice(draggedIndex, 1);
      newLegends.splice(dropIndex, 0, removed);
      return { ...prev, legends: newLegends };
    });

    setDraggedIndex(null);
    setDragType(null);
  }, [draggedIndex, dragType]);

  // Ballpark drag handlers
  const handleBallparkDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    setDragType('ballpark');
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('dragging');
  }, []);

  const handleBallparkDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (dragType !== 'ballpark' || draggedIndex === null || draggedIndex === dropIndex) return;

    setGameState(prev => {
      const newBallparks = [...prev.ballparks];
      const [removed] = newBallparks.splice(draggedIndex, 1);
      newBallparks.splice(dropIndex, 0, removed);
      return { ...prev, ballparks: newBallparks };
    });

    setDraggedIndex(null);
    setDragType(null);
  }, [draggedIndex, dragType]);

  // Selected card reorder handlers
  const handleSelectedCardDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    setDragType('card');
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('dragging');
  }, []);

  const handleSelectedCardDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (dragType !== 'card' || draggedIndex === null || draggedIndex === dropIndex) return;

    setGameState(prev => {
      const newSelected = [...prev.selectedCards];
      const [removed] = newSelected.splice(draggedIndex, 1);
      newSelected.splice(dropIndex, 0, removed);
      return { ...prev, selectedCards: newSelected };
    });

    setDraggedIndex(null);
    setDragType(null);
  }, [draggedIndex, dragType]);

  // Welcome Screen
  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <div className="welcome-content">
          <h1>⚾ Diamond Dynasty ⚾</h1>
          <p className="welcome-tagline">Test your skills at Poker, Baseball, and a little Math</p>

          <div className="welcome-instructions">
            <section className="instruction-section">
              <h2>🎯 Objective</h2>
              <p>
                Score enough points each At-Bat to advance through 8 Series and become the ultimate champion!
                Each At-Bat requires you to reach a target score before running out of hands.
              </p>
            </section>

            <section className="instruction-section">
              <h2>🃏 How to Play</h2>
              <p>
                Select up to 5 cards from your hand to form poker hands. Each hand type has a base
                Chips and Multiplier value. Your score is calculated as <strong>Chips × Mult</strong>.
              </p>
              <ul>
                <li><strong>Hands:</strong> You have limited hands per At-Bat. Use them wisely!</li>
                <li><strong>Discards:</strong> Don't like your cards? Discard and draw replacements.</li>
                <li><strong>Card Values:</strong> Each card adds its chip value to your total (Aces = 11, Face cards = 10, etc.)</li>
              </ul>
            </section>

            <section className="instruction-section">
              <h2>🏟️ The Dugout (Shop)</h2>
              <p>
                After winning an At-Bat, visit the Dugout to power up your run:
              </p>
              <ul>
                <li><strong>Legends:</strong> Baseball legends that boost your scoring with unique abilities</li>
                <li><strong>Ballparks:</strong> Stadium bonuses that trigger on specific hand types</li>
                <li><strong>Positions:</strong> Position cards that level up your hand types permanently</li>
                <li><strong>Vouchers:</strong> One-time upgrades for extra hands, discards, or legend slots</li>
              </ul>
            </section>

            <section className="instruction-section">
              <h2>⚾ Series Structure</h2>
              <p>
                Each Series has 3 At-Bats with increasing difficulty:
              </p>
              <ul>
                <li><strong>First At-Bat:</strong> Standard difficulty</li>
                <li><strong>Second At-Bat:</strong> Higher target score</li>
                <li><strong>Boss At-Bat:</strong> Highest target with special debuffs that make scoring harder!</li>
              </ul>
            </section>

            <section className="instruction-section">
              <h2>💰 Economy</h2>
              <p>
                Earn money by winning At-Bats. You'll also earn interest on your savings (1$ per $5, max $5).
                Spend wisely in the Dugout to build your ultimate deck!
              </p>
            </section>

            <section className="instruction-section highlight">
              <h2>🌟 Pro Tips</h2>
              <p>
                Success depends on your <strong>strategy</strong>, <strong>baseball knowledge</strong>, and <strong>a little luck</strong>.
                Build synergies between your Legends and Ballparks. Level up the hand types you play most often.
                Save money for interest, but don't be afraid to invest in powerful Legends!
              </p>
              <p className="home-park-hint">
                🏠 <em>As in baseball, Legends may play better in their home Ballparks!</em>
              </p>
            </section>
          </div>

          <button className="btn-play-game" onClick={startNewGame}>
            ⚾ Play Ball! ⚾
          </button>
        </div>
      </div>
    );
  }

  if (!gameState) {
    return <div className="loading">Loading Diamond Dynasty...</div>;
  }

  const canPlay = gameState.selectedCards.length > 0 &&
                  gameState.handsRemaining > 0 &&
                  gameState.phase === 'PLAYING' &&
                  !showingScore;

  const canDiscard = gameState.selectedCards.length > 0 &&
                     gameState.discardsRemaining > 0 &&
                     gameState.phase === 'PLAYING' &&
                     !showingScore;

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚾ Diamond Dynasty ⚾</h1>
        <button
          className="sound-toggle"
          onClick={() => {
            const enabled = soundManager.toggle();
            setSoundEnabled(enabled);
          }}
          title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
      </header>

      <main className="game-area">
        {/* Left side - Scoreboard */}
        <aside className="sidebar left">
          <ScoreBoard
            currentScore={gameState.currentScore}
            targetScore={gameState.phase === 'AT_BAT_WON' ? (gameState.scoringBreakdown?.targetBeaten || gameState.targetScore) : gameState.targetScore}
            handsRemaining={gameState.handsRemaining}
            discardsRemaining={gameState.discardsRemaining}
            money={gameState.money}
            series={gameState.series}
            atBatType={gameState.atBatType}
            handPreview={handPreview}
          />

          {/* Boss Modifiers display - Active during BOSS at-bat */}
          {gameState.bossModifiers?.length > 0 && (
            <div className="boss-modifiers-area active">
              <h3>⚠️ Boss Debuffs</h3>
              <div className="boss-modifier-list">
                {gameState.bossModifiers.map((mod, i) => (
                  <div key={i} className="boss-modifier">
                    <span className="boss-modifier-icon">{mod.icon}</span>
                    <div className="boss-modifier-info">
                      <div className="boss-modifier-name">{mod.name}</div>
                      <div className="boss-modifier-desc">{mod.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Boss Modifiers preview - Show during FIRST/SECOND at-bats */}
          {(!gameState.bossModifiers || gameState.bossModifiers.length === 0) &&
           gameState.upcomingBossModifiers?.length > 0 &&
           (gameState.atBatType === 'FIRST' || gameState.atBatType === 'SECOND') && (
            <div className="boss-modifiers-area preview">
              <h3>👀 Upcoming Boss</h3>
              <div className="boss-modifier-list">
                {gameState.upcomingBossModifiers.map((mod, i) => (
                  <div key={i} className="boss-modifier preview">
                    <span className="boss-modifier-icon">{mod.icon}</span>
                    <div className="boss-modifier-info">
                      <div className="boss-modifier-name">{mod.name}</div>
                      <div className="boss-modifier-desc">{mod.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Center - Play area */}
        <div className="play-area">
          {/* Message display */}
          {message && !scoringAnimation && (
            <div className={`message ${showingScore ? 'scoring' : ''}`}>
              {message}
            </div>
          )}

          {/* Running score display during animation */}
          {scoringAnimation && (
            <div className="scoring-live-display">
              <div className="scoring-hand-name">{scoringBonusName || 'Scoring...'}</div>
              <div className="scoring-calculation">
                <span className="scoring-chips">{runningScore.chips}</span>
                <span className="scoring-operator">×</span>
                <span className="scoring-mult">{runningScore.mult}</span>
                <span className="scoring-equals">=</span>
                <span className={`scoring-total ${Math.floor(runningScore.chips * runningScore.mult) >= gameState.targetScore ? 'winning' : ''}`}>
                  {Math.floor(runningScore.chips * runningScore.mult).toLocaleString()}
                </span>
              </div>
              <div className="scoring-target">
                Target: {gameState.targetScore.toLocaleString()}
              </div>
            </div>
          )}

          {/* At-Bat Won overlay - click to continue to shop */}
          {gameState.phase === 'AT_BAT_WON' && (
            <div className="at-bat-won-overlay">
              <div className="at-bat-won-content">
                <h2>🎉 At-Bat Won! 🎉</h2>
                <div className="win-stats">
                  <p className="win-score">Final Score: <span>{gameState.currentScore.toLocaleString()}</span></p>
                  <p className="win-target">Target: {(gameState.scoringBreakdown?.targetBeaten || gameState.targetScore).toLocaleString()}</p>
                </div>

                {/* Winning hand scoring breakdown */}
                {gameState.scoringBreakdown && (
                  <div className="scoring-breakdown">
                    <h3>🃏 Winning Hand</h3>
                    <div className="winning-hand-display">
                      <span className="hand-name">{gameState.scoringBreakdown.handName}</span>
                      <span className="hand-calculation">
                        {gameState.scoringBreakdown.chips} × {gameState.scoringBreakdown.mult} = <strong>{gameState.scoringBreakdown.baseTotal?.toLocaleString() || gameState.scoringBreakdown.total.toLocaleString()}</strong>
                      </span>
                    </div>
                    {/* Legend triggers */}
                    {gameState.scoringBreakdown.legendEffects?.length > 0 && (
                      <div className="effect-triggers">
                        <div className="effect-label">🏆 Legends:</div>
                        {gameState.scoringBreakdown.legendEffects.map((effect, i) => (
                          <div key={i} className={`effect-item ${effect.debuffed ? 'debuffed' : ''}`}>
                            <span className="effect-name">{effect.legend}</span>
                            <span className="effect-value">{effect.effect}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Ballpark triggers */}
                    {gameState.scoringBreakdown.ballparkEffects?.length > 0 && (
                      <div className="effect-triggers">
                        <div className="effect-label">🏟️ Ballparks:</div>
                        {gameState.scoringBreakdown.ballparkEffects.map((effect, i) => (
                          <div key={i} className={`effect-item ${effect.debuffed ? 'debuffed' : ''}`}>
                            <span className="effect-name">{effect.ballpark}</span>
                            <span className="effect-value">{effect.effect}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Home Game Winners */}
                    {gameState.scoringBreakdown.homeWinners?.length > 0 && (
                      <div className="effect-triggers home-winners">
                        <div className="effect-label">🏠 Home Game Winners!</div>
                        {gameState.scoringBreakdown.homeWinners.map((winner, i) => (
                          <div key={i} className="effect-item home-win">
                            <span className="effect-name">{winner.legend}</span>
                            <span className="effect-value">×{winner.multiplier} at {winner.park}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Away Game Winners */}
                    {gameState.scoringBreakdown.awayWinners?.length > 0 && (
                      <div className="effect-triggers away-winners">
                        <div className="effect-label">✈️ Away Game Winners!</div>
                        {gameState.scoringBreakdown.awayWinners.map((winner, i) => (
                          <div key={i} className="effect-item away-win">
                            <span className="effect-name">{winner.legend}</span>
                            <span className="effect-value">×{winner.multiplier} at {winner.park}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Show final total if home/away bonuses applied */}
                    {gameState.scoringBreakdown.homeAwayMultiplier > 1 && (
                      <div className="home-away-total">
                        <span>Final Score: {gameState.scoringBreakdown.baseTotal?.toLocaleString()} × {gameState.scoringBreakdown.homeAwayMultiplier.toFixed(2)} = </span>
                        <strong>{gameState.scoringBreakdown.total.toLocaleString()}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Money breakdown */}
                {gameState.moneyBreakdown && (
                  <div className="money-breakdown">
                    <h3>💰 Earnings Breakdown</h3>
                    <div className="breakdown-lines">
                      <div className="breakdown-line">
                        <span>Starting Cash:</span>
                        <span>${gameState.moneyBreakdown.starting}</span>
                      </div>
                      {gameState.moneyBreakdown.ballparkBonus > 0 && (
                        <div className="breakdown-line positive ballpark">
                          <span>🏟️ Camden Yards:</span>
                          <span>+${gameState.moneyBreakdown.ballparkBonus}</span>
                        </div>
                      )}
                      {gameState.moneyBreakdown.interest > 0 && (
                        <div className="breakdown-line positive interest">
                          <span>Interest (${Math.floor((gameState.moneyBreakdown.starting + gameState.moneyBreakdown.ballparkBonus) / 5)} × $1, max $5):</span>
                          <span>+${gameState.moneyBreakdown.interest}</span>
                        </div>
                      )}
                      <div className="breakdown-line positive">
                        <span>At-Bat Reward:</span>
                        <span>+${gameState.moneyBreakdown.reward}</span>
                      </div>
                      {gameState.moneyBreakdown.handsBonus > 0 && (
                        <div className="breakdown-line positive">
                          <span>Remaining Hands Bonus:</span>
                          <span>+${gameState.moneyBreakdown.handsBonus}</span>
                        </div>
                      )}
                      {gameState.moneyBreakdown.salaryCap < 0 && (
                        <div className="breakdown-line negative">
                          <span>💸 Salary Cap:</span>
                          <span>${gameState.moneyBreakdown.salaryCap}</span>
                        </div>
                      )}
                      <div className="breakdown-line total">
                        <span>Total:</span>
                        <span>${gameState.money}</span>
                      </div>
                    </div>
                  </div>
                )}

                <button className="btn-continue-to-shop" onClick={handleContinueToShop}>
                  🏟️ Head to the Dugout
                </button>
              </div>
            </div>
          )}

          {/* Shop overlay */}
          {gameState.phase === 'SHOP' && (
            <Shop
              money={gameState.money}
              series={gameState.series}
              onBuyItem={handleBuyItem}
              onSellLegend={handleSellLegend}
              onSellBallpark={handleSellBallpark}
              onReroll={handleReroll}
              onContinue={handleContinueFromShop}
              onMedicalPack={handleMedicalPack}
              onApplyEnhancement={handleApplyEnhancement}
              legends={gameState.legends}
              maxLegends={gameState.maxLegends}
              positions={gameState.positions || []}
              ballparks={gameState.ballparks || []}
              maxBallparks={gameState.maxBallparks || 5}
              legendInjuries={gameState.legendInjuries || {}}
              legendBuffs={gameState.legendBuffs || {}}
              voucherBoughtThisSeries={gameState.voucherBoughtThisSeries || false}
              rerollsThisShop={gameState.rerollsThisShop || 0}
              hasScoutReport={gameState.hasScoutReport || false}
              deck={gameState.fullDeck || []}
              purchasedVoucherEffects={gameState.purchasedVoucherEffects || []}
            />
          )}

          {/* Game over / Victory screens */}
          {gameState.phase === 'GAME_OVER' && (
            <div className="game-over-overlay">
              <div className="game-over-content">
                <h2>Game Over</h2>
                <p>Series {gameState.series} - {gameState.atBatType.replace('_', ' ')}</p>
                <p>Hands Played: {gameState.handsPlayed}</p>
                <p>Best Hand: {gameState.highestScore.toLocaleString()}</p>
                <button className="btn-primary" onClick={startNewGame}>
                  New Game
                </button>
              </div>
            </div>
          )}

          {gameState.phase === 'VICTORY' && (
            <div className="victory-overlay">
              <div className="victory-content">
                <h2>🏆 WORLD SERIES CHAMPION! 🏆</h2>
                <p>You conquered all 9 Series and won the World Series!</p>
                <p>Hands Played: {gameState.handsPlayed}</p>
                <p>Final Money: ${gameState.money}</p>
                <p>Legends: {gameState.legends.length}</p>
                <div className="victory-buttons">
                  <button className="btn-primary" onClick={() => {
                    // Continue to endless mode (Extra Innings)
                    setGameState(prev => ({
                      ...prev,
                      phase: 'SHOP',
                      series: 10,
                      atBat: 1,
                      atBatType: 'FIRST',
                      targetScore: calculateTargetScore(10, 'FIRST'),
                      currentScore: 0,
                      voucherBoughtThisSeries: false
                    }));
                  }}>
                    ⚾ Continue to Extra Innings
                  </button>
                  <button className="btn-secondary" onClick={startNewGame}>
                    🔄 New Game
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sort controls */}
          <SortControls sortMode={sortMode} onSortChange={setSortMode} />

          {/* Player hand */}
          <Hand
            cards={sortedHand}
            selectedCards={gameState.selectedCards}
            onCardClick={handleCardClick}
            disabled={gameState.phase !== 'PLAYING' || showingScore}
            onReorderSelected={handleSelectedCardDrop}
            onDragStart={handleSelectedCardDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            scoringCardId={scoringCardId}
            scoringEffect={scoringEffect}
            scoredCardIds={scoredCardIds}
          />

          {/* Action buttons */}
          <ActionButtons
            selectedCount={gameState.selectedCards.length}
            canPlay={canPlay}
            canDiscard={canDiscard}
            onPlayHand={playHand}
            onDiscard={discardCards}
            handsRemaining={gameState.handsRemaining}
            discardsRemaining={gameState.discardsRemaining}
          />

          {/* Deck info */}
          <div className="deck-info">
            <button
              className="btn-view-deck-small"
              onClick={() => setDeckViewerMode('remaining')}
              title="View cards remaining in current draw pile"
            >
              🎴 Cards Remaining ({gameState.deck.length})
            </button>
            <button
              className="btn-view-deck-small"
              onClick={() => setDeckViewerMode('full')}
              title="View your complete deck with all cards"
            >
              📋 Full Deck ({gameState.fullDeck?.length || 52})
            </button>
          </div>
        </div>

        {/* Right side - Ballparks and Legends display (Ballparks first since they score first) */}
        <aside className="sidebar right">
          {/* Ballparks display - scores FIRST (top to bottom) */}
          {(gameState.ballparks?.length > 0) && (
            <div className="ballparks-area">
              <h3>🏟️ Ballparks ({gameState.ballparks.length}/{gameState.maxBallparks || 5}) <span className="scoring-hint">↓ scores top to bottom</span></h3>
              <div className="ballpark-slots">
                {gameState.ballparks.map((ballpark, i) => {
                  const isCurrentlyScoring = scoringBonusName === ballpark.name;
                  const hasTriggered = triggeredBallparks.includes(ballpark.name);

                  return (
                    <div
                      key={i}
                      className={`ballpark-slot ${hasTriggered ? 'triggered' : ''} ${isCurrentlyScoring ? 'scoring-now' : ''}`}
                      draggable
                      onDragStart={(e) => handleBallparkDragStart(e, i)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleBallparkDrop(e, i)}
                      onDragEnd={handleDragEnd}
                    >
                      <div className="drag-handle">⋮⋮</div>
                      <div className="ballpark-slot-name">{ballpark.name}</div>
                      <div className="ballpark-slot-effect">{ballpark.effect}</div>
                      {hasTriggered && (
                        <div className="trigger-indicator">✨</div>
                      )}
                      {isCurrentlyScoring && scoringEffect && (
                        <div className={`bonus-scoring-popup ${scoringEffect.type}`}>
                          {scoringEffect.type === 'chips' && `+${scoringEffect.value}`}
                          {scoringEffect.type === 'plusMult' && `+${scoringEffect.value}`}
                          {scoringEffect.type === 'timesMult' && `×${scoringEffect.value}`}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legends display - scores SECOND (top to bottom) */}
          <div className="legends-area">
            <h3>🏆 Legends ({gameState.legends.length}/{gameState.maxLegends}) <span className="scoring-hint">↓ scores top to bottom</span></h3>
            <div className="legend-slots">
              {gameState.legends.map((legend, i) => {
                // Calculate dynamic effect for Shohei Ohtani
                let displayEffect = legend.effect;
                if (legend.name === 'Shohei Ohtani') {
                  const handsPlayed = gameState.handsPlayed || 0;
                  const chipBonus = handsPlayed * 10;
                  const multBonus = handsPlayed * 2;
                  displayEffect = `+${chipBonus} Chips, +${multBonus} Mult (${handsPlayed} hands)`;
                }

                // Check injury/buff status
                const injuryInnings = gameState.legendInjuries?.[legend.name] || 0;
                const isInjured = injuryInnings > 0;
                const buffInfo = gameState.legendBuffs?.[legend.name];
                const isBuffed = buffInfo && buffInfo.inningsRemaining > 0;

                // Scoring animation state
                const isCurrentlyScoring = scoringBonusName === legend.name;
                const hasTriggered = triggeredLegends.includes(legend.name);

                return (
                  <div
                    key={i}
                    className={`legend-slot filled ${legend.rarity} ${hasTriggered ? 'triggered' : ''} ${isInjured ? 'injured' : ''} ${isBuffed ? 'buffed' : ''} ${isCurrentlyScoring ? 'scoring-now' : ''}`}
                    draggable
                    onDragStart={(e) => handleLegendDragStart(e, i)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleLegendDrop(e, i)}
                    onDragEnd={handleDragEnd}
                  >
                    <div className="drag-handle">⋮⋮</div>
                    <div className="legend-slot-name">
                      {legend.name}
                      {isInjured && <span className="injury-badge" title={`Injured for ${injuryInnings} more innings`}>🤕</span>}
                      {isBuffed && <span className="buff-badge" title={`+20% for ${buffInfo.inningsRemaining} more innings`}>💪</span>}
                    </div>
                    <div className="legend-slot-effect">{displayEffect}</div>
                    {isInjured && (
                      <div className="status-indicator injury">{injuryInnings} innings</div>
                    )}
                    {isBuffed && (
                      <div className="status-indicator buff">+20% ({buffInfo.inningsRemaining} inn)</div>
                    )}
                    {hasTriggered && (
                      <div className="trigger-indicator">✨</div>
                    )}
                    {isCurrentlyScoring && scoringEffect && (
                      <div className={`bonus-scoring-popup ${scoringEffect.type}`}>
                        {scoringEffect.type === 'chips' && `+${scoringEffect.value}`}
                        {scoringEffect.type === 'plusMult' && `+${scoringEffect.value}`}
                        {scoringEffect.type === 'timesMult' && `×${scoringEffect.value}`}
                      </div>
                    )}
                  </div>
                );
              })}
              {[...Array(Math.max(0, gameState.maxLegends - gameState.legends.length))].map((_, i) => (
                <div key={`empty-${i}`} className="legend-slot empty">
                  <span>+</span>
                </div>
              ))}
            </div>
          </div>

          {/* Positions display */}
          {(gameState.positions?.length > 0) && (
            <div className="positions-area">
              <h3>⚾ Positions</h3>
              <div className="position-slots">
                {gameState.positions.map((position, i) => (
                  <div key={i} className="position-slot">
                    <div className="position-slot-name">{position.name}</div>
                    <div className="position-slot-effect">{position.effect}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>

      {/* Hand Reference Panel */}
      <HandReference
        handLevels={gameState.handLevels}
        isOpen={showHandRef}
        onToggle={() => setShowHandRef(!showHandRef)}
      />

      {/* Old overlay-based scoring animation removed - now using card-based animation */}

      {/* Injury Dialog */}
      {injuryDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box injury-dialog">
            <div className="dialog-icon">🤕</div>
            <h2>Injury Report!</h2>
            <p className="dialog-legend-name">{injuryDialog.name}</p>
            <p className="dialog-message">has been injured and will be out for</p>
            <p className="dialog-innings">{injuryDialog.innings} innings</p>
            <p className="dialog-hint">Use a Medical Pack to heal injured legends</p>
            <button className="dialog-btn" onClick={handleDismissInjuryDialog}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Home/Away Win Bonus Dialog */}
      {homeAwayDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box home-away-dialog">
            <div className="dialog-icon">🏆</div>
            <h2>Bonus Multiplier!</h2>

            {homeAwayDialog.homeWinners?.length > 0 && (
              <div className="dialog-section home-section">
                <h3>🏠 Home Game Winners</h3>
                {homeAwayDialog.homeWinners.map((winner, i) => (
                  <div key={i} className="winner-item">
                    <span className="winner-legend">{winner.legend}</span>
                    <span className="winner-bonus">×{winner.multiplier} at {winner.park}</span>
                  </div>
                ))}
              </div>
            )}

            {homeAwayDialog.awayWinners?.length > 0 && (
              <div className="dialog-section away-section">
                <h3>✈️ Away Game Winners</h3>
                {homeAwayDialog.awayWinners.map((winner, i) => (
                  <div key={i} className="winner-item">
                    <span className="winner-legend">{winner.legend}</span>
                    <span className="winner-bonus">×{winner.multiplier} at {winner.park}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="total-multiplier">
              Total: ×{homeAwayDialog.totalMultiplier.toFixed(2)}
            </div>

            <button className="dialog-btn" onClick={handleDismissHomeAwayDialog}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Deck Viewer */}
      <DeckViewer
        deck={deckViewerMode === 'remaining' ? gameState.deck : (gameState.fullDeck || [])}
        isOpen={deckViewerMode !== null}
        onClose={() => setDeckViewerMode(null)}
        title={deckViewerMode === 'remaining' ? 'Cards Remaining in Draw Pile' : 'Full Deck'}
      />
    </div>
  );
}
