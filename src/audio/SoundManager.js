/**
 * Sound Manager for Diamond Dynasty
 * Uses Web Audio API for game sound effects
 *
 * For more authentic baseball sounds, you can replace playLegendSound and playCrowdSound
 * with actual audio files from sites like:
 * - Pixabay (https://pixabay.com/sound-effects/) - royalty free, no attribution
 * - Freesound (https://freesound.org) - Creative Commons
 * - Mixkit (https://mixkit.co/free-sound-effects/) - free for commercial use
 */

class SoundManager {
  constructor() {
    this.audioContext = null;
    this.masterVolume = 0.5;
    this.enabled = true;
    this.loadedSounds = {}; // Cache for loaded audio buffers
  }

  // Initialize audio context (must be called after user interaction)
  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume if suspended (browser autoplay policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Create an oscillator-based sound effect
  playTone(frequency, duration, type = 'sine', volume = 1) {
    if (!this.enabled || !this.audioContext) {
      this.init();
    }
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

    // Envelope for smooth sound
    const now = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * volume, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  // Create filtered noise
  createNoiseBuffer(duration) {
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  // Play noise with envelope and filter
  playFilteredNoise(duration, volume, filterFreq, filterType, attack = 0.01, decay = null) {
    if (!this.enabled || !this.audioContext) {
      this.init();
    }
    if (!this.audioContext) return;

    const noise = this.audioContext.createBufferSource();
    noise.buffer = this.createNoiseBuffer(duration + 0.1);

    const filter = this.audioContext.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = filterFreq;
    filter.Q.value = 1;

    const gainNode = this.audioContext.createGain();
    const now = this.audioContext.currentTime;

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Envelope
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.masterVolume * volume, now + attack);
    if (decay !== null) {
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + decay);
    } else {
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
    }

    noise.start(now);
    noise.stop(now + duration + 0.1);
  }

  // Chip sound - coin-like ascending tone
  playChipSound() {
    if (!this.enabled) return;
    this.init();

    // Quick ascending arpeggio for chip collection
    const baseFreq = 800;
    this.playTone(baseFreq, 0.08, 'square', 0.3);
    setTimeout(() => this.playTone(baseFreq * 1.25, 0.08, 'square', 0.25), 30);
    setTimeout(() => this.playTone(baseFreq * 1.5, 0.12, 'square', 0.2), 60);
  }

  // Plus mult sound - power-up ascending
  playPlusMultSound() {
    if (!this.enabled) return;
    this.init();

    // Warm ascending tone for +mult
    const baseFreq = 400;
    this.playTone(baseFreq, 0.1, 'triangle', 0.4);
    setTimeout(() => this.playTone(baseFreq * 1.5, 0.15, 'triangle', 0.35), 50);
  }

  // Times mult sound - dramatic whoosh/power
  playTimesMultSound() {
    if (!this.enabled) return;
    this.init();

    // More dramatic sound for ×mult
    const baseFreq = 300;
    this.playTone(baseFreq, 0.05, 'sawtooth', 0.3);
    setTimeout(() => this.playTone(baseFreq * 2, 0.1, 'sawtooth', 0.4), 40);
    setTimeout(() => this.playTone(baseFreq * 3, 0.2, 'sine', 0.35), 80);
  }

  // Legend sound - bat hitting ball (improved crack sound)
  playLegendSound() {
    if (!this.enabled) return;
    this.init();

    const now = this.audioContext.currentTime;

    // Layer 1: Sharp initial transient (the "crack")
    // High-frequency noise burst with very fast attack and decay
    this.playFilteredNoise(0.06, 0.6, 4000, 'highpass', 0.001, 0.04);

    // Layer 2: Mid-frequency "thock" of the impact
    const osc1 = this.audioContext.createOscillator();
    const gain1 = this.audioContext.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(200, now + 0.1);
    osc1.connect(gain1);
    gain1.connect(this.audioContext.destination);
    gain1.gain.setValueAtTime(this.masterVolume * 0.5, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc1.start(now);
    osc1.stop(now + 0.1);

    // Layer 3: Low "thump" resonance of the bat
    const osc2 = this.audioContext.createOscillator();
    const gain2 = this.audioContext.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(150, now);
    osc2.frequency.exponentialRampToValueAtTime(80, now + 0.15);
    osc2.connect(gain2);
    gain2.connect(this.audioContext.destination);
    gain2.gain.setValueAtTime(this.masterVolume * 0.4, now + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc2.start(now);
    osc2.stop(now + 0.25);

    // Layer 4: Slight "ping" for the ball compression
    setTimeout(() => {
      this.playTone(1200, 0.03, 'sine', 0.2);
    }, 5);
  }

  // Ballpark sound - crowd cheering (improved)
  playCrowdSound() {
    if (!this.enabled) return;
    this.init();

    const now = this.audioContext.currentTime;

    // Layer 1: Base crowd rumble (low frequency noise)
    this.playFilteredNoise(0.6, 0.25, 400, 'lowpass', 0.05, 0.5);

    // Layer 2: Mid-frequency crowd texture
    this.playFilteredNoise(0.55, 0.3, 1200, 'bandpass', 0.08, 0.45);

    // Layer 3: Higher frequency excitement/clapping texture
    setTimeout(() => {
      this.playFilteredNoise(0.4, 0.2, 2500, 'bandpass', 0.05, 0.35);
    }, 50);

    // Layer 4: Rising "wooo" tones to simulate excitement
    const createWoo = (startFreq, endFreq, startTime, duration, vol) => {
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now + startTime);
      osc.frequency.linearRampToValueAtTime(endFreq, now + startTime + duration * 0.6);
      osc.frequency.linearRampToValueAtTime(endFreq * 0.9, now + startTime + duration);
      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      gain.gain.setValueAtTime(0, now + startTime);
      gain.gain.linearRampToValueAtTime(this.masterVolume * vol, now + startTime + 0.05);
      gain.gain.linearRampToValueAtTime(this.masterVolume * vol * 0.8, now + startTime + duration * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.01, now + startTime + duration);
      osc.start(now + startTime);
      osc.stop(now + startTime + duration + 0.1);
    };

    // Multiple overlapping "wooo" sounds at different pitches
    createWoo(250, 400, 0, 0.4, 0.15);
    createWoo(300, 480, 0.05, 0.35, 0.12);
    createWoo(200, 350, 0.1, 0.4, 0.1);
    createWoo(350, 500, 0.15, 0.3, 0.08);
  }

  // Hand type announcement
  playHandTypeSound() {
    if (!this.enabled) return;
    this.init();

    // Fanfare-like intro
    this.playTone(523, 0.1, 'square', 0.3); // C
    setTimeout(() => this.playTone(659, 0.1, 'square', 0.3), 80); // E
    setTimeout(() => this.playTone(784, 0.15, 'square', 0.3), 160); // G
  }

  // Victory sound - target beaten
  playVictorySound() {
    if (!this.enabled) return;
    this.init();

    // Victory fanfare
    const notes = [523, 659, 784, 1047]; // C E G C
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.2, 'square', 0.35), i * 100);
    });
    // Final chord
    setTimeout(() => {
      this.playTone(523, 0.4, 'sine', 0.25);
      this.playTone(659, 0.4, 'sine', 0.25);
      this.playTone(784, 0.4, 'sine', 0.25);
    }, 400);
  }

  // Defeat sound
  playDefeatSound() {
    if (!this.enabled) return;
    this.init();

    // Descending sad tones
    this.playTone(400, 0.2, 'sine', 0.3);
    setTimeout(() => this.playTone(350, 0.2, 'sine', 0.25), 150);
    setTimeout(() => this.playTone(300, 0.3, 'sine', 0.2), 300);
  }

  // Card select sound
  playSelectSound() {
    if (!this.enabled) return;
    this.init();

    this.playTone(600, 0.05, 'sine', 0.2);
  }

  // Card deselect sound
  playDeselectSound() {
    if (!this.enabled) return;
    this.init();

    this.playTone(400, 0.05, 'sine', 0.15);
  }

  // Button click sound
  playClickSound() {
    if (!this.enabled) return;
    this.init();

    this.playTone(500, 0.03, 'square', 0.15);
  }

  // Purchase sound
  playPurchaseSound() {
    if (!this.enabled) return;
    this.init();

    // Ka-ching!
    this.playTone(1200, 0.05, 'square', 0.25);
    setTimeout(() => this.playTone(1500, 0.1, 'square', 0.3), 50);
  }

  // Error/can't do that sound
  playErrorSound() {
    if (!this.enabled) return;
    this.init();

    this.playTone(200, 0.15, 'square', 0.25);
  }

  // Set master volume (0-1)
  setVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  // Toggle sound on/off
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Enable sound
  enable() {
    this.enabled = true;
  }

  // Disable sound
  disable() {
    this.enabled = false;
  }
}

// Singleton instance
const soundManager = new SoundManager();

export default soundManager;
