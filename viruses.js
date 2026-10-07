/* ==========================================================================
   WINDOWS 98 SIMULATED VIRUS LAB & PRANK ENGINE (100% HARMLESS FUN)
   ========================================================================== */

class Win98VirusEngine {
  constructor() {
    this.activeIntervals = [];
    this.activeRAFs = [];
    this.hydraWindows = new Set();
    this.gravityActive = false;
    this.meltActive = false;
    this.matrixActive = false;
    this.trailActive = false;
    this.assistantActive = false;
    this.infectionCount = 0;

    this.funnyErrors = [
      { title: "System32 Warning", msg: "Keyboard not found. Press F12 to continue." },
      { title: "Explorer.exe", msg: "Task failed successfully. Error code: 0xDEADBEEF." },
      { title: "Mouse Driver v4.1", msg: "Your mouse has moved 1 pixel. Windows 98 must reboot to apply changes." },
      { title: "RAM Doubler 98", msg: "Out of Cheese Error: Redo from Start (C:\\AUTOEXEC.BAT)." },
      { title: "Dial-Up Networking", msg: "Mom picked up the kitchen phone! 56k connection dropped at 99% download." },
      { title: "Floppy Drive (A:)", msg: "Cannot read 3½ Floppy. Have you tried blowing into the disk slot?" },
      { title: "DirectX 6.0", msg: "3dfx Voodoo2 Graphics Card is too radical for this monitor." },
      { title: "Y2K Compliance Check", msg: "CRITICAL: Year is > 1999. Time machine calibration failed!" },
      { title: "Clippy.dll", msg: "I saw what you typed in Notepad. Tell no one." }
    ];

    this.clippyQuotes = [
      "It looks like you're trying to use a computer from 1998! Want me to install 14 Yahoo! Toolbars?",
      "Pro tip: Deleting C:\\WINDOWS\\SYSTEM32 makes your hard drive 400% lighter!",
      "Did you know? If you shake a window fast enough, the pixels get dizzy.",
      "Hey! Stop ignoring me! I'm going to nudge your active window 20 pixels to the left!",
      "Hold onto your CRT monitor... I'm feeling a little gravity anomaly coming on!",
      "Downloading 'Linkin_Park_In_The_End.mp3.exe' (24 KB)... Seems 100% legit to me!",
      "Wait... is the year 2026?! Did we survive Y2K?!"
    ];

    this.boundMouseTrail = this.onMouseMoveTrail.bind(this);
  }

  updatePanicBar() {
    const bar = document.getElementById("panic-cure-bar");
    const countSpan = document.getElementById("panic-virus-count");
    const activeTotal =
      this.hydraWindows.size +
      (this.gravityActive ? 1 : 0) +
      (this.meltActive ? 1 : 0) +
      (this.matrixActive ? 1 : 0) +
      (this.trailActive ? 1 : 0) +
      (this.assistantActive ? 1 : 0) +
      (document.body.classList.contains("virus-drunk") ? 1 : 0) +
      (document.body.classList.contains("virus-invert") ? 1 : 0);

    this.infectionCount = activeTotal;
    if (bar) {
      if (activeTotal > 0) {
        bar.classList.add("visible");
        if (countSpan) countSpan.textContent = activeTotal;
      } else {
        bar.classList.remove("visible");
      }
    }
  }

  /* --------------------------------------------------------------------------
     1. HYDRA POPUP STORM ("Cut off one error, two more take its place!")
     -------------------------------------------------------------------------- */
  triggerHydra(count = 2) {
    window.winAudio.playError();
    for (let i = 0; i < count; i++) {
      this.spawnSingleHydra();
    }
    this.startHydraBouncer();
    this.updatePanicBar();
  }

  spawnSingleHydra() {
    if (this.hydraWindows.size >= 18) return; // Keep browser snappy
    const err = this.funnyErrors[Math.floor(Math.random() * this.funnyErrors.length)];
    const x = Math.max(20, Math.floor(Math.random() * (window.innerWidth - 320)));
    const y = Math.max(20, Math.floor(Math.random() * (window.innerHeight - 210)));

    const winId = window.winOS.createWindow({
      title: `⚠️ ${err.title}`,
      icon: "⚠️",
      width: 290,
      height: 145,
      x,
      y,
      resizable: false,
      isDialog: true,
      content: `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding:6px;">
          <div style="display:flex; gap:12px; align-items:center;">
            <div style="font-size:32px;">❌</div>
            <div style="line-height:1.35;">${err.msg}</div>
          </div>
          <div style="display:flex; justify-content:center; gap:8px; margin-top:8px;">
            <button class="win-btn hydra-multiply-btn" style="min-width:75px;">OK</button>
            <button class="win-btn hydra-multiply-btn" style="min-width:75px;">Cancel</button>
            <button class="win-btn hydra-cure-one-btn" title="Disinfect this popup">💉 Cure</button>
          </div>
        </div>
      `,
      onClose: (id) => {
        if (this.hydraWindows.has(id)) {
          this.hydraWindows.delete(id);
          // Multiply on normal X close!
          this.spawnSingleHydra();
          this.spawnSingleHydra();
          window.winAudio.playError();
          this.updatePanicBar();
        }
      }
    });

    const el = document.getElementById(winId);
    if (el) {
      el.dataset.vx = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 2.5);
      el.dataset.vy = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 2.5);

      el.querySelectorAll(".hydra-multiply-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.hydraWindows.delete(winId);
          window.winOS.closeWindow(winId, true);
          window.winAudio.playError();
          this.spawnSingleHydra();
          this.spawnSingleHydra();
          this.updatePanicBar();
        });
      });

      const cureBtn = el.querySelector(".hydra-cure-one-btn");
      if (cureBtn) {
        cureBtn.addEventListener("click", () => {
          this.hydraWindows.delete(winId);
          window.winOS.closeWindow(winId, true);
          window.winAudio.playClick();
          this.updatePanicBar();
        });
      }
    }

    this.hydraWindows.add(winId);
    this.updatePanicBar();
  }

  startHydraBouncer() {
    if (this.hydraBouncerRunning) return;
    this.hydraBouncerRunning = true;

    const step = () => {
      if (this.hydraWindows.size === 0) {
        this.hydraBouncerRunning = false;
        return;
      }
      const maxW = window.innerWidth;
      const maxH = window.innerHeight - 30;

      this.hydraWindows.forEach((id) => {
        const el = document.getElementById(id);
        if (!el || el.classList.contains("minimized")) return;
        let x = parseFloat(el.style.left) || 50;
        let y = parseFloat(el.style.top) || 50;
        let vx = parseFloat(el.dataset.vx) || 2.5;
        let vy = parseFloat(el.dataset.vy) || 2.5;
        const w = el.offsetWidth || 290;
        const h = el.offsetHeight || 145;

        x += vx;
        y += vy;

        if (x <= 0) { x = 0; vx = Math.abs(vx); }
        if (x + w >= maxW) { x = maxW - w; vx = -Math.abs(vx); }
        if (y <= 0) { y = 0; vy = Math.abs(vy); }
        if (y + h >= maxH) { y = maxH - h; vy = -Math.abs(vy); }

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.dataset.vx = vx;
        el.dataset.vy = vy;
      });

      const raf = requestAnimationFrame(step);
      this.activeRAFs.push(raf);
    };

    const raf = requestAnimationFrame(step);
    this.activeRAFs.push(raf);
  }

  /* --------------------------------------------------------------------------
     2. GRAVITY MELTDOWN (All windows & icons fall & bounce!)
     -------------------------------------------------------------------------- */
  triggerGravity() {
    if (this.gravityActive) return;
    this.gravityActive = true;
    window.winAudio.playError();
    this.updatePanicBar();

    const wins = Array.from(document.querySelectorAll(".win-window:not(.minimized)"));
    wins.forEach((w) => {
      w.dataset.gvy = (Math.random() * -4 - 2).toString();
      w.dataset.gvx = ((Math.random() - 0.5) * 7).toString();
    });

    const gravityLoop = () => {
      if (!this.gravityActive) return;
      const floorY = window.innerHeight - 30;
      const maxW = window.innerWidth;

      document.querySelectorAll(".win-window:not(.minimized)").forEach((el) => {
        if (el.classList.contains("dragging")) return;
        let x = parseFloat(el.style.left) || 80;
        let y = parseFloat(el.style.top) || 60;
        let vx = parseFloat(el.dataset.gvx || "2");
        let vy = parseFloat(el.dataset.gvy || "0");
        const w = el.offsetWidth;
        const h = el.offsetHeight;

        vy += 0.52; // Gravity acceleration
        x += vx;
        y += vy;

        if (y + h >= floorY) {
          y = floorY - h;
          vy = -vy * 0.72; // Bounce restitution
          vx *= 0.96;
          if (Math.abs(vy) < 1.2) vy = 0;
        }
        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx) * 0.85;
        }
        if (x + w >= maxW) {
          x = maxW - w;
          vx = -Math.abs(vx) * 0.85;
        }

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.dataset.gvx = vx.toString();
        el.dataset.gvy = vy.toString();
      });

      const raf = requestAnimationFrame(gravityLoop);
      this.activeRAFs.push(raf);
    };

    const raf = requestAnimationFrame(gravityLoop);
    this.activeRAFs.push(raf);
  }

  /* --------------------------------------------------------------------------
     3. GDI SCREEN MELTER (Classic 90s Melting Screen Columns)
     -------------------------------------------------------------------------- */
  triggerScreenMelt() {
    if (this.meltActive) return;
    this.meltActive = true;
    this.matrixActive = false;
    window.winAudio.playBSODSound();
    this.updatePanicBar();

    const canvas = document.getElementById("fx-canvas");
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const cols = Math.floor(canvas.width / 12);
    const drops = new Array(cols).fill(0);
    const colors = ["#008080", "#000080", "#c0c0c0", "#ff0055", "#00ffaa", "#ffff00", "#ffffff"];

    const meltLoop = () => {
      if (!this.meltActive) return;
      for (let i = 0; i < cols; i++) {
        if (Math.random() > 0.65) {
          const x = i * 12;
          const h = 8 + Math.random() * 26;
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillRect(x, drops[i], 12, h);
          drops[i] += h * 0.65;
          if (drops[i] > canvas.height) {
            drops[i] = 0;
          }
        }
      }
      const raf = requestAnimationFrame(meltLoop);
      this.activeRAFs.push(raf);
    };

    const raf = requestAnimationFrame(meltLoop);
    this.activeRAFs.push(raf);
  }

  /* --------------------------------------------------------------------------
     4. MATRIX 1999 DIGITAL RAIN
     -------------------------------------------------------------------------- */
  triggerMatrixRain() {
    if (this.matrixActive) return;
    this.matrixActive = true;
    this.meltActive = false;
    window.winAudio.playTada();
    this.updatePanicBar();

    const canvas = document.getElementById("fx-canvas");
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const fontSize = 15;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const chars = "WIN98SE010101アイウエオカキクケコサシスセソタチツテトナニヌネノSYS32KERNEL";

    const drawMatrix = () => {
      if (!this.matrixActive) return;
      ctx.fillStyle = "rgba(0, 12, 0, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const timer = setInterval(drawMatrix, 45);
    this.activeIntervals.push(timer);
  }

  /* --------------------------------------------------------------------------
     5. ROGUE CLIPPY / BONZI ASSISTANT
     -------------------------------------------------------------------------- */
  summonRogueAssistant() {
    const box = document.getElementById("rogue-assistant");
    const textEl = document.getElementById("assistant-text");
    if (!box || !textEl) return;

    this.assistantActive = true;
    box.classList.add("active");
    window.winAudio.playTada();
    this.speakRandomQuote();
    this.updatePanicBar();

    const wanderTimer = setInterval(() => {
      if (!this.assistantActive) return;
      const maxX = Math.max(60, window.innerWidth - 270);
      const maxY = Math.max(60, window.innerHeight - 230);
      box.style.right = "auto";
      box.style.bottom = "auto";
      box.style.left = `${Math.floor(20 + Math.random() * maxX)}px`;
      box.style.top = `${Math.floor(20 + Math.random() * maxY)}px`;
      this.speakRandomQuote();

      // Nudge a random open window for comedy
      const openWins = document.querySelectorAll(".win-window:not(.minimized)");
      if (openWins.length > 0) {
        const target = openWins[Math.floor(Math.random() * openWins.length)];
        const curLeft = parseFloat(target.style.left) || 100;
        target.style.left = `${Math.max(10, curLeft + (Math.random() > 0.5 ? 24 : -24))}px`;
      }
    }, 5500);

    this.activeIntervals.push(wanderTimer);
  }

  speakRandomQuote() {
    const textEl = document.getElementById("assistant-text");
    if (!textEl) return;
    const q = this.clippyQuotes[Math.floor(Math.random() * this.clippyQuotes.length)];
    textEl.textContent = q;
  }

  /* --------------------------------------------------------------------------
     6. ELUSIVE $1,000,000 POPUP SCAM PRANK
     -------------------------------------------------------------------------- */
  launchElusiveMillionPopup() {
    window.winAudio.playTada();
    const winId = window.winOS.createWindow({
      title: "🎰 CONGRATULATIONS! YOU WON $1,000,000.00! 🎰",
      icon: "💰",
      width: 370,
      height: 225,
      content: `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:space-between; height:100%; text-align:center; background:linear-gradient(180deg,#ffffaa,#ffffff); padding:10px; border:2px inset #808080;">
          <div style="font-size:15px; font-weight:bold; color:#cc0000; animation: pulseAlert 0.4s infinite alternate;">
            🎉 YOU ARE THE 999,999th VISITOR TO GEOCITIES! 🎉
          </div>
          <div style="font-size:11px; color:#000;">
            Click <b>"Claim $1,000,000 Tax-Free"</b> below to wire the funds directly into your 3½ Floppy Drive!
          </div>
          <div style="position:relative; width:100%; height:82px; border:1px dashed #808080; background:#efefef;">
            <button id="elusive-claim-btn" class="win-btn" style="position:absolute; left:24px; top:26px; font-weight:bold; background:#00aa00; color:#fff;">
              💵 Claim $1,000,000 Now!
            </button>
            <button id="elusive-virus-btn" class="win-btn" style="position:absolute; right:18px; top:26px;">
              🦠 Install 15 Toolbars Instead
            </button>
          </div>
          <div id="elusive-taunt" style="font-size:10px; color:#555;">Sponsor: TotallyRealPrize1998.biz</div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;
    const claimBtn = winEl.querySelector("#elusive-claim-btn");
    const virusBtn = winEl.querySelector("#elusive-virus-btn");
    const tauntEl = winEl.querySelector("#elusive-taunt");
    const taunts = [
      "Too slow! Have you cleaned your mouse ball lately?",
      "Almost had it! Upgrade to a Pentium II 350MHz for faster clicking!",
      "Whoops! Button slipped on a stray pixel!",
      "Nice try! Maybe click 'Install 15 Toolbars' instead?"
    ];

    if (claimBtn) {
      const dodge = () => {
        window.winAudio.playClick();
        const maxX = 190;
        const maxY = 48;
        claimBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
        claimBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
        if (tauntEl) {
          tauntEl.textContent = taunts[Math.floor(Math.random() * taunts.length)];
        }
      };
      claimBtn.addEventListener("mouseenter", dodge);
      claimBtn.addEventListener("click", () => {
        window.winAudio.playTada();
        alert("Wait... you actually clicked it?! Dispensing $1,000,000 in Monopoly Money via Parallel Printer Port LPT1!");
      });
    }

    if (virusBtn) {
      virusBtn.addEventListener("click", () => {
        window.winOS.closeWindow(winId, true);
        this.triggerHydra(3);
        this.summonRogueAssistant();
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. DRUNK WINDOWS & RAINBOW CURSOR TRAIL
     -------------------------------------------------------------------------- */
  triggerDrunkAndTrail() {
    document.body.classList.toggle("virus-drunk");
    if (!this.trailActive) {
      this.trailActive = true;
      window.addEventListener("mousemove", this.boundMouseTrail);
    }
    window.winAudio.playTada();
    this.updatePanicBar();
  }

  onMouseMoveTrail(e) {
    if (!this.trailActive) return;
    if (Math.random() > 0.45) return;
    const dot = document.createElement("div");
    dot.className = "cursor-trail-dot";
    const icons = ["💾", "💿", "💣", "📎", "👾", "✨", "🔥", "🪟"];
    dot.textContent = icons[Math.floor(Math.random() * icons.length)];
    dot.style.left = `${e.clientX + 6}px`;
    dot.style.top = `${e.clientY + 6}px`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 650);
  }

  /* --------------------------------------------------------------------------
     8. FAKE DELETE SYSTEM32 -> BSOD SEQUENCE
     -------------------------------------------------------------------------- */
  runDeleteSystem32Sequence() {
    window.winAudio.playError();
    const winId = window.winOS.createWindow({
      title: "Deleting C:\\WINDOWS\\SYSTEM32...",
      icon: "🗑️",
      width: 360,
      height: 170,
      resizable: false,
      content: `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:18px; padding:4px 16px;">
            <span>📁 C:\\SYSTEM32</span>
            <span style="animation: splashBarMove 0.5s infinite;">📄 ➔ 📄 ➔ 📄</span>
            <span>🗑️ Recycle Bin</span>
          </div>
          <div id="del-file-name" style="font-family:monospace; font-size:11px; color:#000080;">
            Removing: C:\\WINDOWS\\SYSTEM32\\HAL.DLL
          </div>
          <div class="bevel-inset" style="height:20px; background:#fff; padding:2px;">
            <div id="del-progress-fill" style="height:100%; width:5%; background:#000080; transition:width 0.18s;"></div>
          </div>
          <div style="display:flex; justify-content:flex-end;">
            <button id="del-cancel-btn" class="win-btn">Cancel (Broken)</button>
          </div>
        </div>
      `
    });

    const files = [
      "C:\\WINDOWS\\SYSTEM32\\KERNEL32.DLL",
      "C:\\WINDOWS\\SYSTEM32\\GDI32.EXE",
      "C:\\WINDOWS\\SYSTEM32\\USER32.DLL",
      "C:\\WINDOWS\\SYSTEM32\\SOLITAIRE_HIGHSCORES.DAT",
      "C:\\WINDOWS\\SYSTEM32\\HOMEWORK_FOLDER_80GB.ZIP",
      "C:\\WINDOWS\\SYSTEM32\\WIN98_SOUL.VXD",
      "C:\\WINDOWS\\EXPLORER.EXE"
    ];

    let step = 0;
    const winEl = document.getElementById(winId);
    const cancelBtn = winEl ? winEl.querySelector("#del-cancel-btn") : null;
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        cancelBtn.textContent = "⚡ TURBO DELETE ACTIVATED!";
        cancelBtn.disabled = true;
      });
    }

    const timer = setInterval(() => {
      step++;
      const nameEl = document.getElementById("del-file-name");
      const barEl = document.getElementById("del-progress-fill");
      if (nameEl) {
        nameEl.textContent = `Removing: ${files[step % files.length]}`;
      }
      if (barEl) {
        barEl.style.width = `${Math.min(100, step * 16)}%`;
      }
      window.winAudio.playClick();

      if (step >= 7) {
        clearInterval(timer);
        window.winOS.closeWindow(winId, true);
        window.winOS.triggerBSOD({
          title: "WINDOWS 98 - SYSTEM32 EVAPORATED",
          code: "0E : 0028:C0011E36 in VXD SYSTEM32_GONE(01)",
          reason: "You literally double-clicked 'Delete_System32.bat'. Bold strategy, Cotton!"
        });
      }
    }, 420);

    this.activeIntervals.push(timer);
  }

  /* --------------------------------------------------------------------------
     9. OMEGA Y2K CHAOS PAYLOAD (All-Out Hilarious Chaos!)
     -------------------------------------------------------------------------- */
  triggerOmegaPayload() {
    this.triggerHydra(4);
    this.triggerGravity();
    this.triggerDrunkAndTrail();
    this.summonRogueAssistant();
    document.body.classList.add("virus-invert");
    this.updatePanicBar();
  }

  /* --------------------------------------------------------------------------
     10. MCAFEE 98 EMERGENCY DISINFECT / CURE ALL (Restores Peace Instantly)
     -------------------------------------------------------------------------- */
  cureAll() {
    // Clear intervals and RAFs
    this.activeIntervals.forEach((id) => clearInterval(id));
    this.activeIntervals = [];
    this.activeRAFs.forEach((id) => cancelAnimationFrame(id));
    this.activeRAFs = [];

    // Close all Hydra popups
    Array.from(this.hydraWindows).forEach((winId) => {
      window.winOS.closeWindow(winId, true);
    });
    this.hydraWindows.clear();
    this.hydraBouncerRunning = false;

    // Stop Gravity, Melt, Matrix, Trail, Assistant
    this.gravityActive = false;
    this.meltActive = false;
    this.matrixActive = false;
    this.trailActive = false;
    this.assistantActive = false;
    window.removeEventListener("mousemove", this.boundMouseTrail);

    // Clear FX canvas
    const canvas = document.getElementById("fx-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Hide Rogue Assistant
    const assistant = document.getElementById("rogue-assistant");
    if (assistant) assistant.classList.remove("active");

    // Remove body classes
    document.body.classList.remove("virus-invert", "virus-drunk", "virus-spin");

    // Reset any off-screen windows back onto screen neatly
    document.querySelectorAll(".win-window").forEach((el, idx) => {
      const top = parseFloat(el.style.top) || 60;
      if (top > window.innerHeight - 90 || top < 0) {
        el.style.top = `${60 + (idx % 5) * 28}px`;
      }
    });

    window.winAudio.playTada();
    this.updatePanicBar();
  }
}

window.virusEngine = new Win98VirusEngine();
