/* ==========================================================================
   WINDOWS 98 CORE OPERATING SYSTEM & WINDOW MANAGER
   ========================================================================== */

class Win98OperatingSystem {
  constructor() {
    this.zIndexCounter = 100;
    this.windowCounter = 0;
    this.windows = new Map();
    this.activeWindowId = null;
    this.dragState = null;
    this.resizeState = null;

    this.desktopShortcuts = [
      { id: "icon-mycomp", label: "My Computer", icon: "💻", action: () => window.Win98Apps.openMyComputer() },
      { id: "icon-viruslab", label: "Virus_Lab_98.exe", icon: "☣️", action: () => window.Win98Apps.openVirusLab() },
      { id: "icon-ie", label: "Internet Explorer 4", icon: "🌐", action: () => window.Win98Apps.openInternetExplorer() },
      { id: "icon-mines", label: "Minesweeper", icon: "💣", action: () => window.Win98Apps.openMinesweeper() },
      { id: "icon-paint", label: "MS Paint 98", icon: "🎨", action: () => window.Win98Apps.openPaint() },
      { id: "icon-winamp", label: "Winamp 2.11", icon: "⚡", action: () => window.Win98Apps.openWinamp() },
      { id: "icon-dos", label: "MS-DOS Prompt", icon: "📟", action: () => window.Win98Apps.openDosPrompt() },
      { id: "icon-notepad", label: "passwords.txt", icon: "📝", action: () => window.Win98Apps.openNotepad() },
      { id: "icon-million", label: "Win_$1,000,000.exe", icon: "🎰", action: () => window.virusEngine.launchElusiveMillionPopup() },
      { id: "icon-sys32", label: "Delete_System32.bat", icon: "💀", action: () => window.virusEngine.runDeleteSystem32Sequence() },
      { id: "icon-display", label: "BSOD & Themes", icon: "🖥️", action: () => window.Win98Apps.openDisplayProperties() }
    ];
  }

  init() {
    this.renderDesktopIcons();
    this.setupGlobalListeners();
    this.setupStartMenu();
    this.setupClock();
    this.runBootSequence();
  }

  /* --------------------------------------------------------------------------
     BIOS POST & WINDOWS 98 SPLASH BOOT SEQUENCE
     -------------------------------------------------------------------------- */
  runBootSequence() {
    const bootEl = document.getElementById("boot-screen");
    const memEl = document.getElementById("bios-mem-counter");
    const splashEl = document.getElementById("win98-splash");
    const skipBtn = document.getElementById("skip-boot-btn");

    if (!bootEl) {
      this.onDesktopReady();
      return;
    }

    let finished = false;
    const finishBoot = () => {
      if (finished) return;
      finished = true;
      bootEl.classList.add("hidden");
      window.winAudio.playStartupChime();
      this.onDesktopReady();
    };

    if (skipBtn) {
      skipBtn.addEventListener("click", finishBoot);
    }

    // Count up 65536 KB RAM quickly
    let mem = 0;
    const memInterval = setInterval(() => {
      mem += 8192;
      if (memEl) memEl.textContent = `${Math.min(65536, mem)}K OK`;
      if (mem >= 65536) {
        clearInterval(memInterval);
        setTimeout(() => {
          if (finished) return;
          if (splashEl) splashEl.style.display = "flex";
          setTimeout(finishBoot, 1100);
        }, 400);
      }
    }, 80);
  }

  onDesktopReady() {
    // Open Virus Lab & Welcome window by default so the user sees the action right away
    if (this.windows.size === 0) {
      window.Win98Apps.openVirusLab();
    }
  }

  /* --------------------------------------------------------------------------
     DESKTOP ICONS & MARQUEE SELECTION
     -------------------------------------------------------------------------- */
  renderDesktopIcons() {
    const container = document.getElementById("desktop-icons");
    if (!container) return;
    container.innerHTML = "";

    this.desktopShortcuts.forEach((sc) => {
      const div = document.createElement("div");
      div.className = "desktop-icon";
      div.id = sc.id;
      div.innerHTML = `
        <div class="desktop-icon-img" style="font-size:28px;">${sc.icon}</div>
        <div class="desktop-icon-label">${sc.label}</div>
      `;

      div.addEventListener("click", (e) => {
        e.stopPropagation();
        window.winAudio.playClick();
        document.querySelectorAll(".desktop-icon").forEach((el) => el.classList.remove("selected"));
        div.classList.add("selected");
      });

      div.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        window.winAudio.playClick();
        sc.action();
      });

      container.appendChild(div);
    });
  }

  /* --------------------------------------------------------------------------
     WINDOW CREATION & MANAGEMENT
     -------------------------------------------------------------------------- */
  createWindow(opts) {
    this.windowCounter++;
    const id = `win-${this.windowCounter}`;
    const width = opts.width || 420;
    const height = opts.height || 300;
    const offset = (this.windowCounter % 7) * 26;
    const x = opts.x !== undefined ? opts.x : Math.max(20, Math.min(window.innerWidth - width - 30, 90 + offset));
    const y = opts.y !== undefined ? opts.y : Math.max(20, Math.min(window.innerHeight - height - 60, 45 + offset));

    const winEl = document.createElement("div");
    winEl.className = "win-window active";
    winEl.id = id;
    winEl.style.width = `${width}px`;
    winEl.style.height = `${height}px`;
    winEl.style.left = `${x}px`;
    winEl.style.top = `${y}px`;
    winEl.style.zIndex = ++this.zIndexCounter;

    const menuHtml = opts.menuItems
      ? `<div class="win-menubar">${opts.menuItems.map((m) => `<div class="win-menu-item"><u>${m[0]}</u>${m.slice(1)}</div>`).join("")}</div>`
      : "";

    const statusHtml = opts.statusText
      ? `<div class="win-statusbar"><div class="win-status-section">${opts.statusText}</div></div>`
      : "";

    const resizeHtml = opts.resizable === false ? "" : `<div class="win-resize-handle"></div>`;

    winEl.innerHTML = `
      <div class="win-titlebar">
        <div class="win-titlebar-left">
          <span class="win-titlebar-icon">${opts.icon || "🪟"}</span>
          <span class="win-titlebar-text">${opts.title || "Windows 98"}</span>
        </div>
        <div class="win-titlebar-controls">
          ${opts.isDialog ? "" : `<button class="win-ctrl-btn win-min-btn" title="Minimize">_</button>`}
          ${opts.isDialog || opts.resizable === false ? "" : `<button class="win-ctrl-btn win-max-btn" title="Maximize">□</button>`}
          <button class="win-ctrl-btn win-close-btn" title="Close">✕</button>
        </div>
      </div>
      ${menuHtml}
      <div class="win-body">${opts.content || ""}</div>
      ${statusHtml}
      ${resizeHtml}
    `;

    const desktop = document.getElementById("desktop-environment");
    desktop.appendChild(winEl);

    this.windows.set(id, {
      id,
      title: opts.title,
      icon: opts.icon || "🪟",
      el: winEl,
      onClose: opts.onClose
    });

    // Wire events
    winEl.addEventListener("mousedown", () => this.focusWindow(id));

    const titlebar = winEl.querySelector(".win-titlebar");
    titlebar.addEventListener("mousedown", (e) => {
      if (e.target.closest(".win-ctrl-btn")) return;
      if (winEl.classList.contains("maximized")) return;
      this.focusWindow(id);
      winEl.classList.add("dragging");
      this.dragState = {
        id,
        el: winEl,
        startX: e.clientX,
        startY: e.clientY,
        origLeft: parseFloat(winEl.style.left) || 0,
        origTop: parseFloat(winEl.style.top) || 0
      };
    });

    titlebar.addEventListener("dblclick", () => {
      if (!opts.isDialog && opts.resizable !== false) {
        this.toggleMaximize(id);
      }
    });

    const minBtn = winEl.querySelector(".win-min-btn");
    if (minBtn) {
      minBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.minimizeWindow(id);
      });
    }

    const maxBtn = winEl.querySelector(".win-max-btn");
    if (maxBtn) {
      maxBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMaximize(id);
      });
    }

    const closeBtn = winEl.querySelector(".win-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeWindow(id, false);
      });
    }

    const resizeHandle = winEl.querySelector(".win-resize-handle");
    if (resizeHandle) {
      resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        this.focusWindow(id);
        this.resizeState = {
          id,
          el: winEl,
          startX: e.clientX,
          startY: e.clientY,
          origW: winEl.offsetWidth,
          origH: winEl.offsetHeight
        };
      });
    }

    this.focusWindow(id);
    this.renderTaskbarTabs();
    return id;
  }

  focusWindow(id) {
    const record = this.windows.get(id);
    if (!record) return;
    this.activeWindowId = id;
    document.querySelectorAll(".win-window").forEach((el) => el.classList.remove("active"));
    record.el.classList.remove("minimized");
    record.el.classList.add("active");
    record.el.style.zIndex = ++this.zIndexCounter;
    this.renderTaskbarTabs();
  }

  minimizeWindow(id) {
    const record = this.windows.get(id);
    if (!record) return;
    window.winAudio.playClick();
    record.el.classList.add("minimized");
    record.el.classList.remove("active");
    if (this.activeWindowId === id) {
      this.activeWindowId = null;
    }
    this.renderTaskbarTabs();
  }

  toggleMaximize(id) {
    const record = this.windows.get(id);
    if (!record) return;
    window.winAudio.playClick();
    record.el.classList.toggle("maximized");
  }

  closeWindow(id, silent = false) {
    const record = this.windows.get(id);
    if (!record) return;
    if (!silent) window.winAudio.playClick();
    if (record.onClose && !silent) {
      record.onClose(id);
    }
    record.el.remove();
    this.windows.delete(id);
    if (this.activeWindowId === id) {
      this.activeWindowId = null;
    }
    this.renderTaskbarTabs();
  }

  renderTaskbarTabs() {
    const container = document.getElementById("taskbar-windows");
    if (!container) return;
    container.innerHTML = "";

    this.windows.forEach((win) => {
      const btn = document.createElement("button");
      const isActive = this.activeWindowId === win.id && !win.el.classList.contains("minimized");
      btn.className = `taskbar-tab ${isActive ? "active" : ""}`;
      btn.innerHTML = `<span>${win.icon}</span><span style="overflow:hidden;text-overflow:ellipsis;">${win.title}</span>`;
      btn.addEventListener("click", () => {
        window.winAudio.playClick();
        if (isActive) {
          this.minimizeWindow(win.id);
        } else {
          this.focusWindow(win.id);
        }
      });
      container.appendChild(btn);
    });
  }

  /* --------------------------------------------------------------------------
     BLUE SCREEN OF DEATH (BSOD) CONTROLLER
     -------------------------------------------------------------------------- */
  triggerBSOD(opts = {}) {
    window.winAudio.playBSODSound();
    const bsod = document.getElementById("bsod-screen");
    const titleEl = document.getElementById("bsod-title-text");
    const codeEl = document.getElementById("bsod-code-text");
    const reasonEl = document.getElementById("bsod-reason-text");

    if (titleEl) titleEl.textContent = opts.title || "Windows";
    if (codeEl) codeEl.textContent = opts.code || "0E : 0028:C0011E36 in VXD VMM(01) + 00010E36";
    if (reasonEl) {
      reasonEl.textContent =
        opts.reason ||
        "A fatal exception 0E has occurred because your 1998 nostalgia levels exceeded the 64MB RAM limit.";
    }

    if (bsod) {
      bsod.classList.add("active");
    }
  }

  dismissBSOD() {
    const bsod = document.getElementById("bsod-screen");
    if (bsod && bsod.classList.contains("active")) {
      bsod.classList.remove("active");
      window.winAudio.playTada();
    }
  }

  /* --------------------------------------------------------------------------
     START MENU, CONTEXT MENU & GLOBAL EVENTS
     -------------------------------------------------------------------------- */
  setupStartMenu() {
    const startBtn = document.getElementById("start-btn");
    const startMenu = document.getElementById("start-menu");

    if (startBtn && startMenu) {
      startBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        window.winAudio.playClick();
        startMenu.classList.toggle("open");
        startBtn.classList.toggle("active", startMenu.classList.contains("open"));
      });
    }

    document.querySelectorAll(".start-item").forEach((item) => {
      item.addEventListener("click", () => {
        const act = item.dataset.start;
        startMenu.classList.remove("open");
        startBtn.classList.remove("active");
        window.winAudio.playClick();

        if (act === "viruslab") window.Win98Apps.openVirusLab();
        else if (act === "ie") window.Win98Apps.openInternetExplorer();
        else if (act === "mines") window.Win98Apps.openMinesweeper();
        else if (act === "paint") window.Win98Apps.openPaint();
        else if (act === "winamp") window.Win98Apps.openWinamp();
        else if (act === "dos") window.Win98Apps.openDosPrompt();
        else if (act === "notepad") window.Win98Apps.openNotepad();
        else if (act === "display") window.Win98Apps.openDisplayProperties();
        else if (act === "bsod") this.triggerBSOD();
        else if (act === "cure") window.virusEngine.cureAll();
        else if (act === "shutdown") {
          this.triggerBSOD({
            title: "IT IS NOW SAFE TO TURN OFF YOUR COMPUTER",
            code: "AT_POWER_SUPPLY_SWITCH_REQUIRED",
            reason: "Windows 98 has parked your hard drive heads. Press any key or click to wake back up!"
          });
        }
      });
    });
  }

  setupClock() {
    const clockEl = document.getElementById("tray-clock");
    const updateClock = () => {
      if (!clockEl) return;
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    updateClock();
    setInterval(updateClock, 15000);
  }

  setupGlobalListeners() {
    const desktop = document.getElementById("desktop-environment");
    const marquee = document.getElementById("selection-marquee");
    const ctxMenu = document.getElementById("context-menu");
    let marqueeStart = null;

    // Window dragging & resizing
    window.addEventListener("mousemove", (e) => {
      if (this.dragState) {
        const dx = e.clientX - this.dragState.startX;
        const dy = e.clientY - this.dragState.startY;
        this.dragState.el.style.left = `${this.dragState.origLeft + dx}px`;
        this.dragState.el.style.top = `${Math.max(0, this.dragState.origTop + dy)}px`;
      } else if (this.resizeState) {
        const dw = e.clientX - this.resizeState.startX;
        const dh = e.clientY - this.resizeState.startY;
        this.resizeState.el.style.width = `${Math.max(220, this.resizeState.origW + dw)}px`;
        this.resizeState.el.style.height = `${Math.max(140, this.resizeState.origH + dh)}px`;
      } else if (marqueeStart && marquee) {
        const x = Math.min(e.clientX, marqueeStart.x);
        const y = Math.min(e.clientY, marqueeStart.y);
        const w = Math.abs(e.clientX - marqueeStart.x);
        const h = Math.abs(e.clientY - marqueeStart.y);
        marquee.style.display = "block";
        marquee.style.left = `${x}px`;
        marquee.style.top = `${y}px`;
        marquee.style.width = `${w}px`;
        marquee.style.height = `${h}px`;
      }
    });

    window.addEventListener("mouseup", () => {
      if (this.dragState) {
        this.dragState.el.classList.remove("dragging");
        this.dragState = null;
      }
      this.resizeState = null;
      if (marqueeStart && marquee) {
        marquee.style.display = "none";
        marqueeStart = null;
      }
    });

    // Desktop background click & marquee start
    desktop.addEventListener("mousedown", (e) => {
      if (e.target === desktop || e.target.id === "desktop-icons") {
        document.querySelectorAll(".desktop-icon").forEach((el) => el.classList.remove("selected"));
        marqueeStart = { x: e.clientX, y: e.clientY };
      }
    });

    // Right-click desktop context menu
    desktop.addEventListener("contextmenu", (e) => {
      if (e.target.closest(".win-window")) return;
      e.preventDefault();
      if (!ctxMenu) return;
      ctxMenu.style.display = "block";
      ctxMenu.style.left = `${Math.min(window.innerWidth - 180, e.clientX)}px`;
      ctxMenu.style.top = `${Math.min(window.innerHeight - 180, e.clientY)}px`;
    });

    window.addEventListener("click", () => {
      if (ctxMenu) ctxMenu.style.display = "none";
      const startMenu = document.getElementById("start-menu");
      const startBtn = document.getElementById("start-btn");
      if (startMenu && startMenu.classList.contains("open")) {
        startMenu.classList.remove("open");
        if (startBtn) startBtn.classList.remove("active");
      }
    });

    // Context menu actions
    document.querySelectorAll(".ctx-item").forEach((item) => {
      item.addEventListener("click", () => {
        const act = item.dataset.ctx;
        if (act === "refresh") window.winAudio.playClick();
        else if (act === "viruslab") window.Win98Apps.openVirusLab();
        else if (act === "clippy") window.virusEngine.summonRogueAssistant();
        else if (act === "cure") window.virusEngine.cureAll();
        else if (act === "bsod") this.triggerBSOD();
        else if (act === "display") window.Win98Apps.openDisplayProperties();
      });
    });

    // Keyboard shortcuts: ESC cures viruses or dismisses BSOD!
    window.addEventListener("keydown", (e) => {
      const bsod = document.getElementById("bsod-screen");
      if (bsod && bsod.classList.contains("active")) {
        e.preventDefault();
        this.dismissBSOD();
        return;
      }
      if (e.key === "Escape") {
        window.virusEngine.cureAll();
      }
    });

    // BSOD click to recover
    const bsod = document.getElementById("bsod-screen");
    if (bsod) {
      bsod.addEventListener("click", () => this.dismissBSOD());
    }

    // Panic bar button
    const panicBtn = document.getElementById("panic-cure-btn");
    if (panicBtn) {
      panicBtn.addEventListener("click", () => window.virusEngine.cureAll());
    }

    // Rogue Assistant buttons
    const jokeBtn = document.getElementById("assistant-joke-btn");
    if (jokeBtn) {
      jokeBtn.addEventListener("click", () => {
        window.winAudio.playClick();
        window.virusEngine.speakRandomQuote();
      });
    }
    const rollBtn = document.getElementById("assistant-roll-btn");
    if (rollBtn) {
      rollBtn.addEventListener("click", () => {
        document.body.classList.remove("virus-spin");
        void document.body.offsetWidth;
        document.body.classList.add("virus-spin");
        window.winAudio.playTada();
      });
    }
    const hideBtn = document.getElementById("assistant-hide-btn");
    if (hideBtn) {
      hideBtn.addEventListener("click", () => {
        const box = document.getElementById("rogue-assistant");
        if (box) box.classList.remove("active");
        window.virusEngine.assistantActive = false;
        window.virusEngine.updatePanicBar();
      });
    }

    // System Tray icons
    const soundTray = document.getElementById("tray-sound");
    if (soundTray) {
      soundTray.addEventListener("click", () => {
        const muted = window.winAudio.toggleMute();
        soundTray.textContent = muted ? "🔇" : "🔊";
      });
    }
    const crtTray = document.getElementById("tray-crt");
    if (crtTray) {
      crtTray.addEventListener("click", () => {
        document.body.classList.toggle("crt-enabled");
        window.winAudio.playClick();
      });
    }
    const shieldTray = document.getElementById("tray-shield");
    if (shieldTray) {
      shieldTray.addEventListener("click", () => {
        window.Win98Apps.openVirusLab();
      });
    }

    // Quick Launch icons
    document.querySelectorAll(".quick-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const q = btn.dataset.quick;
        if (q === "ie") window.Win98Apps.openInternetExplorer();
        else if (q === "virus") window.Win98Apps.openVirusLab();
        else if (q === "paint") window.Win98Apps.openPaint();
        else if (q === "cure") window.virusEngine.cureAll();
      });
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.winOS = new Win98OperatingSystem();
  window.winOS.init();
});
