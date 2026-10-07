/* ==========================================================================
   WINDOWS 98 WEB AUDIO SYNTHESIZER & WINAMP CHIPTUNE ENGINE
   ========================================================================== */

class Win98AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicPlaying = false;
    this.musicTimer = null;
    this.currentTrackIndex = 0;
    this.analyser = null;
    this.musicVolume = 0.25;

    this.tracks = [
      {
        title: "1. DJ Llama - Canyon_98_Synthwave.mid",
        kbps: 128,
        khz: 44,
        tempo: 135,
        notes: [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 293.66, 349.23, 440.00, 587.33, 440.00, 349.23, 220.00, 261.63, 329.63, 440.00]
      },
      {
        title: "2. KeyGen_Cracker_2000_Pro_ost.xm",
        kbps: 192,
        khz: 44,
        tempo: 165,
        notes: [329.63, 329.63, 659.25, 493.88, 440.00, 392.00, 329.63, 261.63, 293.66, 329.63, 392.00, 493.88, 587.33, 523.25, 493.88, 392.00]
      },
      {
        title: "3. Darude - Sandstorm_56k_Rip.mp3.exe",
        kbps: 64,
        khz: 22,
        tempo: 185,
        notes: [493.88, 493.88, 493.88, 493.88, 493.88, 659.25, 659.25, 659.25, 587.33, 587.33, 587.33, 440.00, 493.88, 493.88, 587.33, 493.88]
      }
    ];
    this.stepIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 64;
        this.analyser.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted && this.musicPlaying) {
      this.stopMusic();
    }
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1100, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.018);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.018);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.02);
  }

  playStartupChime() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Lush FM-like pad chord reminiscent of the Win95/98 startup sound
    const chord = [
      { freq: 311.13, delay: 0.0, dur: 3.2 }, // Eb4
      { freq: 233.08, delay: 0.14, dur: 3.1 }, // Bb3
      { freq: 466.16, delay: 0.28, dur: 3.0 }, // Bb4
      { freq: 622.25, delay: 0.45, dur: 3.4 }, // Eb5
      { freq: 415.30, delay: 0.75, dur: 3.6 }, // Ab4
      { freq: 830.61, delay: 0.85, dur: 3.6 }  // Ab5
    ];

    chord.forEach((n) => {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc2.type = "triangle";
      osc.frequency.setValueAtTime(n.freq, now + n.delay);
      osc2.frequency.setValueAtTime(n.freq * 1.003, now + n.delay);

      gain.gain.setValueAtTime(0.0001, now + n.delay);
      gain.gain.linearRampToValueAtTime(0.08, now + n.delay + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.delay + n.dur);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + n.delay);
      osc2.start(now + n.delay);
      osc.stop(now + n.delay + n.dur + 0.05);
      osc2.stop(now + n.delay + n.dur + 0.05);
    });
  }

  playError() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Classic Windows 98 "Chord" / Error bonk
    [220, 277.18, 329.63, 440].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    });
  }

  playTada() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [
      { f: 392.00, t: 0.0, d: 0.14 },
      { f: 523.25, t: 0.13, d: 0.65 },
      { f: 659.25, t: 0.13, d: 0.65 },
      { f: 783.99, t: 0.13, d: 0.65 }
    ];
    notes.forEach((n) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n.f, now + n.t);
      gain.gain.setValueAtTime(0.09, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + n.t);
      osc.stop(now + n.t + n.d);
    });
  }

  playBSODSound() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.setValueAtTime(95, now + 0.15);
    gain.gain.setValueAtTime(0.11, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.56);
  }

  playDialupHandshake() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // 1. DTMF Dialing digits
    const digits = [697, 770, 852, 941, 770, 852, 697];
    digits.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now + idx * 0.11);
      gain.gain.setValueAtTime(0.07, now + idx * 0.11);
      gain.gain.setValueAtTime(0.001, now + idx * 0.11 + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.11);
      osc.stop(now + idx * 0.11 + 0.09);
    });

    // 2. 2100Hz Answer tone + warble screech
    const oscScreech = this.ctx.createOscillator();
    const screechGain = this.ctx.createGain();
    oscScreech.type = "sawtooth";
    oscScreech.frequency.setValueAtTime(2100, now + 0.9);
    oscScreech.frequency.linearRampToValueAtTime(1200, now + 1.4);
    oscScreech.frequency.linearRampToValueAtTime(2400, now + 1.8);
    oscScreech.frequency.linearRampToValueAtTime(1650, now + 2.3);
    screechGain.gain.setValueAtTime(0.06, now + 0.9);
    screechGain.gain.exponentialRampToValueAtTime(0.001, now + 2.4);
    oscScreech.connect(screechGain);
    screechGain.connect(this.ctx.destination);
    oscScreech.start(now + 0.9);
    oscScreech.stop(now + 2.45);
  }

  startMusic() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.stopMusic();
    this.musicPlaying = true;
    const track = this.tracks[this.currentTrackIndex];
    const intervalMs = Math.floor((60 / track.tempo) * 500);

    this.musicTimer = setInterval(() => {
      if (!this.musicPlaying || this.muted) return;
      const t = this.tracks[this.currentTrackIndex];
      const freq = t.notes[this.stepIndex % t.notes.length];
      this.stepIndex++;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = this.stepIndex % 4 === 0 ? "square" : "sawtooth";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(this.musicVolume * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (intervalMs / 1000) * 0.9);

      osc.connect(gain);
      if (this.analyser) {
        gain.connect(this.analyser);
      } else {
        gain.connect(this.ctx.destination);
      }

      osc.start(now);
      osc.stop(now + (intervalMs / 1000));
    }, intervalMs);
  }

  stopMusic() {
    this.musicPlaying = false;
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    this.stepIndex = 0;
    if (this.musicPlaying) {
      this.startMusic();
    }
    return this.tracks[this.currentTrackIndex];
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    this.stepIndex = 0;
    if (this.musicPlaying) {
      this.startMusic();
    }
    return this.tracks[this.currentTrackIndex];
  }
}

window.winAudio = new Win98AudioEngine();
