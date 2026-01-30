---
description: Baseball-themed roguelike deckbuilder inspired by Balatro
status: active
started: 2026-01-20
---

# Diamond Dynasty

A roguelike deckbuilder where you build poker hands using baseball-themed cards to score runs and win games.

## Concept

Inspired by **Balatro** — take the addictive hand-building mechanics and apply them to baseball. Each card is a player, and you build hands (lineup combinations) to score runs against increasingly difficult opponents.

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Custom CSS with animations
- **State:** React hooks + game state module
- **Audio:** Web Audio API via SoundManager

## Key Components

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Main game loop and state |
| `Card.jsx` | Individual player cards |
| `Hand.jsx` | Current hand display |
| `Shop.jsx` | Between-round upgrades |
| `DeckViewer.jsx` | See your full deck |
| `ScoringAnimation.jsx` | Visual feedback on plays |

## Game Mechanics

- **Hand Evaluation:** `src/game/handEvaluator.js` — scoring logic for baseball-themed hands
- **Game State:** `src/game/gameState.js` — progression, shop, deck management

## Running Locally

```bash
cd diamond-dynasty
npm install
npm run dev
```

## Docs

- `Diamond_Dynasty_PRD_v1.1.docx` — Full product requirements
- `Product_Requirements_Document.docx` — Original PRD

## What's Next

- [ ] More card types and synergies
- [ ] Boss battles
- [ ] Sound effects and music
- [ ] Mobile-friendly UI
- [ ] Deployment to GitHub Pages

---

*Last updated: 2026-01-28*
