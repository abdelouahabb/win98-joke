/* ==========================================================================
   WINDOWS 98 BUILT-IN APPLICATIONS SUITE
   ========================================================================== */

const Win98Apps = {
  /* ==========================================================================
     1. VIRUS LAB & LIMEWIRE 98 PRANK CENTER
     ========================================================================== */
  openVirusLab() {
    const winId = window.winOS.createWindow({
      title: "🦠 Virus_Lab_98_Pro.exe - [Totally Legit Payload Center]",
      icon: "☣️",
      width: 500,
      height: 410,
      statusText: "Status: McAfee 98 Trial Expired 9,842 Days Ago | Press ESC anytime to Cure All",
      content: `
        <div style="display:flex; flex-direction:column; gap:8px; height:100%;">
          <div class="bevel-inset" style="background:#000; color:#00ff00; font-family:monospace; padding:8px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:13px; font-weight:bold; color:#ffff00;">☢️ WIN98 CHAOS & VIRUS SIMULATOR v1.98</div>
              <div style="font-size:11px; color:#00ffaa;">100% harmless browser animations! Press [ESC] or Disinfect anytime.</div>
            </div>
            <button id="vlab-cure-btn" class="win-btn" style="background:#00aa00; color:#fff; font-weight:bold; padding:6px 10px;">
              🛡️ Disinfect All
            </button>
          </div>

          <div style="font-weight:bold; color:#000080; margin-top:2px;">Select a Simulated 90s Virus Payload to Execute:</div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px;">
            <button class="win-btn vlab-action" data-action="hydra" style="justify-content:flex-start; padding:7px;">
              🪟 <b>Hydra_Error.exe</b> (Multiplying Popups)
            </button>
            <button class="win-btn vlab-action" data-action="gravity" style="justify-content:flex-start; padding:7px;">
              🍎 <b>Gravity_Bug.dll</b> (Windows Fall Down)
            </button>
            <button class="win-btn vlab-action" data-action="melt" style="justify-content:flex-start; padding:7px;">
              🫠 <b>GDI_Melter.exe</b> (Melting Screen Pixels)
            </button>
            <button class="win-btn vlab-action" data-action="clippy" style="justify-content:flex-start; padding:7px;">
              📎 <b>Rogue_Clippy.exe</b> (Annoying Assistant)
            </button>
            <button class="win-btn vlab-action" data-action="million" style="justify-content:flex-start; padding:7px;">
              🎰 <b>Win_$1,000,000.exe</b> (Dodging Button)
            </button>
            <button class="win-btn vlab-action" data-action="drunk" style="justify-content:flex-start; padding:7px;">
              🥴 <b>Disco_Drunk.vbs</b> (Wobbly + Cursor Trail)
            </button>
            <button class="win-btn vlab-action" data-action="matrix" style="justify-content:flex-start; padding:7px;">
              🕶️ <b>Matrix_1999.com</b> (Cyber Digital Rain)
            </button>
            <button class="win-btn vlab-action" data-action="sys32" style="justify-content:flex-start; padding:7px;">
              💀 <b>Delete_System32.bat</b> (Triggers BSOD)
            </button>
          </div>

          <div class="bevel-inset" style="padding:8px; background:#fff; flex:1; overflow-y:auto;">
            <div style="font-weight:bold; color:#800000; margin-bottom:5px;">🍋 LimeWire 98 P2P - Sketchy Downloads Queue (56k Modem):</div>
            <div style="display:flex; flex-direction:column; gap:4px; font-size:11px;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px dotted #ccc; padding-bottom:3px;">
                <span>🎵 <b>Linkin_Park_In_The_End_FULL.mp3.exe</b> (18 KB)</span>
                <button class="win-btn win-btn-small vlab-action" data-action="hydra">Run .EXE</button>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px dotted #ccc; padding-bottom:3px;">
                <span>🎮 <b>Half_Life_3_Leaked_1998_Beta.zip.vbs</b> (4 KB)</span>
                <button class="win-btn win-btn-small vlab-action" data-action="gravity">Run .VBS</button>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span>⚡ <b>Free_Nvidia_RTX_5090_Driver_For_Win98.bat</b> (2 KB)</span>
                <button class="win-btn win-btn-small vlab-action" data-action="omega" style="background:#ffcccc; font-weight:bold;">☢️ OMEGA Y2K CHAOS</button>
              </div>
            </div>
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    winEl.querySelector("#vlab-cure-btn").addEventListener("click", () => {
      window.virusEngine.cureAll();
    });

    winEl.querySelectorAll(".vlab-action").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.dataset.action;
        if (act === "hydra") window.virusEngine.triggerHydra(2);
        else if (act === "gravity") window.virusEngine.triggerGravity();
        else if (act === "melt") window.virusEngine.triggerScreenMelt();
        else if (act === "clippy") window.virusEngine.summonRogueAssistant();
        else if (act === "million") window.virusEngine.launchElusiveMillionPopup();
        else if (act === "drunk") window.virusEngine.triggerDrunkAndTrail();
        else if (act === "matrix") window.virusEngine.triggerMatrixRain();
        else if (act === "sys32") window.virusEngine.runDeleteSystem32Sequence();
        else if (act === "omega") window.virusEngine.triggerOmegaPayload();
      });
    });
  },

  /* ==========================================================================
     2. MINESWEEPER 98 (Playable + Optional Troll Mode!)
     ========================================================================== */
  openMinesweeper() {
    const winId = window.winOS.createWindow({
      title: "Minesweeper 98",
      icon: "💣",
      width: 266,
      height: 355,
      resizable: false,
      menuItems: ["Game", "Troll-Options", "Help"],
      content: `
        <div class="minesweeper-board-wrap bevel-outset">
          <div class="mine-header bevel-inset">
            <div id="mine-count-led" class="led-counter">010</div>
            <button id="mine-reset-btn" class="win-btn" style="font-size:17px; padding:2px 6px;">🙂</button>
            <div id="mine-timer-led" class="led-counter">000</div>
          </div>
          <div id="mine-grid" class="mine-grid"></div>
          <div style="display:flex; justify-content:space-between; width:100%; align-items:center; font-size:10px; padding-top:2px;">
            <label style="display:flex; align-items:center; gap:4px; cursor:pointer;">
              <input type="checkbox" id="mine-troll-chk" checked />
              <b>😈 Troll Mode (BSOD on Boom)</b>
            </label>
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    const gridEl = winEl.querySelector("#mine-grid");
    const countLed = winEl.querySelector("#mine-count-led");
    const timerLed = winEl.querySelector("#mine-timer-led");
    const resetBtn = winEl.querySelector("#mine-reset-btn");
    const trollChk = winEl.querySelector("#mine-troll-chk");

    const ROWS = 9;
    const COLS = 9;
    const MINES = 10;
    let board = [];
    let gameOver = false;
    let flagsLeft = MINES;
    let seconds = 0;
    let timerInterval = null;
    let revealedCount = 0;

    const numColors = ["", "#0000ff", "#008000", "#ff0000", "#000080", "#800000", "#008080", "#000000", "#808080"];

    const initGame = () => {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      seconds = 0;
      flagsLeft = MINES;
      revealedCount = 0;
      gameOver = false;
      resetBtn.textContent = "🙂";
      countLed.textContent = String(flagsLeft).padStart(3, "0");
      timerLed.textContent = "000";
      gridEl.innerHTML = "";

      board = Array.from({ length: ROWS }, (_, r) =>
        Array.from({ length: COLS }, (_, c) => ({
          r, c, mine: false, revealed: false, flagged: false, count: 0, el: null
        }))
      );

      // Place mines
      let placed = 0;
      while (placed < MINES) {
        const rr = Math.floor(Math.random() * ROWS);
        const cc = Math.floor(Math.random() * COLS);
        if (!board[rr][cc].mine) {
          board[rr][cc].mine = true;
          placed++;
        }
      }

      // Compute neighbor counts
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (board[r][c].mine) continue;
          let cnt = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].mine) {
                cnt++;
              }
            }
          }
          board[r][c].count = cnt;
        }
      }

      // Render cells
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cellEl = document.createElement("div");
          cellEl.className = "mine-cell";
          board[r][c].el = cellEl;

          cellEl.addEventListener("mousedown", (e) => {
            if (!gameOver && e.button === 0) resetBtn.textContent = "😮";
          });
          cellEl.addEventListener("mouseup", () => {
            if (!gameOver) resetBtn.textContent = "🙂";
          });

          cellEl.addEventListener("click", () => {
            if (gameOver) return;
            if (!timerInterval) {
              timerInterval = setInterval(() => {
                seconds = Math.min(999, seconds + 1);
                timerLed.textContent = String(seconds).padStart(3, "0");
              }, 1000);
            }
            revealCell(r, c);
          });

          cellEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            if (gameOver || board[r][c].revealed) return;
            const cell = board[r][c];
            cell.flagged = !cell.flagged;
            cell.el.textContent = cell.flagged ? "🚩" : "";
            flagsLeft += cell.flagged ? -1 : 1;
            countLed.textContent = String(Math.max(0, flagsLeft)).padStart(3, "0");
            window.winAudio.playClick();
          });

          gridEl.appendChild(cellEl);
        }
      }
    };

    const revealCell = (r, c) => {
      const cell = board[r][c];
      if (cell.revealed || cell.flagged) return;
      cell.revealed = true;
      cell.el.classList.add("revealed");

      if (cell.mine) {
        gameOver = true;
        if (timerInterval) clearInterval(timerInterval);
        cell.el.classList.add("exploded");
        cell.el.textContent = "💣";
        resetBtn.textContent = "😵";
        window.winAudio.playError();

        // Show all mines
        for (let rr = 0; rr < ROWS; rr++) {
          for (let cc = 0; cc < COLS; cc++) {
            if (board[rr][cc].mine && !board[rr][cc].revealed) {
              board[rr][cc].el.classList.add("revealed");
              board[rr][cc].el.textContent = "💣";
            }
          }
        }

        if (trollChk && trollChk.checked) {
          setTimeout(() => {
            window.winOS.triggerBSOD({
              title: "MINESWEEPER_EXPLOSION_FAULT",
              code: "0x0000B00M in WINMINE.EXE",
              reason: "You stepped on a 1998 landmine with Troll Mode enabled! Your mouse ball has been ejected into orbit."
            });
          }, 800);
        }
        return;
      }

      revealedCount++;
      window.winAudio.playClick();

      if (cell.count > 0) {
        cell.el.textContent = cell.count;
        cell.el.style.color = numColors[cell.count];
      } else {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
              revealCell(nr, nc);
            }
          }
        }
      }

      if (revealedCount === ROWS * COLS - MINES) {
        gameOver = true;
        if (timerInterval) clearInterval(timerInterval);
        resetBtn.textContent = "😎";
        window.winAudio.playTada();
      }
    };

    resetBtn.addEventListener("click", initGame);
    initGame();
  },

  /* ==========================================================================
     3. MS PAINT 98 (With Stamp Tool & "Set as Desktop Wallpaper"!)
     ========================================================================== */
  openPaint() {
    const winId = window.winOS.createWindow({
      title: "untitled - Paint",
      icon: "🎨",
      width: 550,
      height: 430,
      menuItems: ["File", "Edit", "View", "Image", "Colors", "Help"],
      statusText: "For Help, click Help Topics on the Help Menu. | Click 'Set Wallpaper' to apply to Desktop!",
      content: `
        <div style="display:flex; flex-direction:column; height:100%;">
          <div class="paint-layout">
            <div class="paint-toolbar bevel-outset">
              <button class="win-btn paint-tool-btn active" data-tool="pencil" title="Pencil">✏️</button>
              <button class="win-btn paint-tool-btn" data-tool="brush" title="Thick Brush">🖌️</button>
              <button class="win-btn paint-tool-btn" data-tool="spray" title="90s Airbrush Spray">💨</button>
              <button class="win-btn paint-tool-btn" data-tool="eraser" title="Eraser">🧽</button>
              <button class="win-btn paint-tool-btn" data-tool="stamp-win" title="Stamp Windows Flag">🪟</button>
              <button class="win-btn paint-tool-btn" data-tool="stamp-skull" title="Stamp Virus Skull">💀</button>
              <button class="win-btn paint-tool-btn" data-tool="stamp-clippy" title="Stamp Clippy">📎</button>
              <button class="win-btn paint-tool-btn" data-tool="stamp-alien" title="Stamp Area51 Alien">👽</button>
            </div>
            <div class="paint-canvas-wrap bevel-inset">
              <canvas id="paint-canvas" width="440" height="285"></canvas>
            </div>
          </div>
          <div class="paint-palette bevel-outset">
            <div id="paint-active-color" class="bevel-inset" style="width:28px; height:28px; background:#000000;"></div>
            <div class="paint-swatches" id="paint-swatches"></div>
            <div style="margin-left:auto; display:flex; gap:4px;">
              <button id="paint-clear-btn" class="win-btn win-btn-small">📄 Clear</button>
              <button id="paint-wallpaper-btn" class="win-btn win-btn-small" style="font-weight:bold; color:#000080;">🖼️ Set Wallpaper</button>
            </div>
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;
    const canvas = winEl.querySelector("#paint-canvas");
    const ctx = canvas.getContext("2d");
    const swatchesEl = winEl.querySelector("#paint-swatches");
    const activeColorEl = winEl.querySelector("#paint-active-color");

    // Fill white background and starter doodle
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000080";
    ctx.font = "bold 16px Tahoma, sans-serif";
    ctx.fillText("Welcome to MS Paint 98! Draw & Set as Wallpaper!", 25, 40);

    const colors = [
      "#000000", "#808080", "#800000", "#808000", "#008000", "#008080", "#000080", "#800080", "#808040", "#004040", "#0080ff", "#004080", "#4000ff", "#804000",
      "#ffffff", "#c0c0c0", "#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ffff80", "#00ff80", "#80ffff", "#8080ff", "#ff0080", "#ff8040"
    ];

    let currentColor = "#000000";
    let currentTool = "pencil";
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    colors.forEach((col) => {
      const sw = document.createElement("div");
      sw.className = "color-swatch";
      sw.style.backgroundColor = col;
      sw.addEventListener("click", () => {
        currentColor = col;
        activeColorEl.style.backgroundColor = col;
      });
      swatchesEl.appendChild(sw);
    });

    winEl.querySelectorAll(".paint-tool-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        winEl.querySelectorAll(".paint-tool-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentTool = btn.dataset.tool;
      });
    });

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const drawStep = (e) => {
      const { x, y } = getPos(e);
      if (currentTool.startsWith("stamp-")) {
        const map = {
          "stamp-win": "🪟",
          "stamp-skull": "💀",
          "stamp-clippy": "📎",
          "stamp-alien": "👽"
        };
        ctx.font = "28px sans-serif";
        ctx.fillText(map[currentTool] || "🪟", x - 14, y + 10);
        return;
      }

      if (currentTool === "spray") {
        ctx.fillStyle = currentColor;
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 14;
          ctx.fillRect(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, 1.5, 1.5);
        }
        return;
      }

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : currentColor;
      ctx.lineWidth = currentTool === "brush" ? 7 : currentTool === "eraser" ? 14 : 2;
      ctx.lineCap = "round";
      ctx.stroke();
      lastX = x;
      lastY = y;
    };

    canvas.addEventListener("mousedown", (e) => {
      drawing = true;
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
      drawStep(e);
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!drawing) return;
      if (currentTool.startsWith("stamp-")) return;
      drawStep(e);
    });

    window.addEventListener("mouseup", () => {
      drawing = false;
    });

    winEl.querySelector("#paint-clear-btn").addEventListener("click", () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    winEl.querySelector("#paint-wallpaper-btn").addEventListener("click", () => {
      const dataUrl = canvas.toDataURL("image/png");
      const desk = document.getElementById("desktop-environment");
      if (desk) {
        desk.style.backgroundImage = `url(${dataUrl})`;
        desk.style.backgroundSize = "contain";
        desk.style.backgroundRepeat = "repeat";
      }
      window.winAudio.playTada();
    });
  },

  /* ==========================================================================
     4. INTERNET EXPLORER 4.0 (With 56k Dial-Up & 4 Hilarious 1998 Websites!)
     ========================================================================== */
  openInternetExplorer(initialUrl = "http://www.geocities.com/Area51/1998/") {
    const winId = window.winOS.createWindow({
      title: "Microsoft Internet Explorer 4.0 - [Connected at 52,000 bps]",
      icon: "🌐",
      width: 610,
      height: 450,
      menuItems: ["File", "Edit", "View", "Go", "Favorites", "Help"],
      statusText: "Done | Zone: 1998 World Wide Web (Netscape Navigator Compatible)",
      content: `
        <div style="display:flex; flex-direction:column; gap:4px; height:100%;">
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="win-btn win-btn-small ie-nav" data-url="http://www.geocities.com/Area51/1998/">🏠 GeoCities</button>
            <button class="win-btn win-btn-small ie-nav" data-url="http://www.downloadmoreram1998.com/">💾 Download RAM</button>
            <button class="win-btn win-btn-small ie-nav" data-url="http://www.antigravity98.ai/">🤖 Antigravity 98 AI</button>
            <button class="win-btn win-btn-small" id="ie-dialup-btn" title="Reconnect 56k Modem">☎️ 56k Modem</button>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <span style="font-weight:bold;">Address:</span>
            <input id="ie-address-input" class="bevel-inset" style="flex:1; padding:3px 6px; font-family:var(--font-system); font-size:11px;" value="${initialUrl}" />
            <button id="ie-go-btn" class="win-btn win-btn-small">Go</button>
          </div>
          <div id="ie-viewport" class="bevel-inset" style="flex:1; overflow-y:auto; background:#ffffff; padding:0; position:relative;"></div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    const viewport = winEl.querySelector("#ie-viewport");
    const addrInput = winEl.querySelector("#ie-address-input");
    const goBtn = winEl.querySelector("#ie-go-btn");
    const dialBtn = winEl.querySelector("#ie-dialup-btn");

    const renderPage = (url) => {
      addrInput.value = url;
      window.winAudio.playClick();

      if (url.includes("downloadmoreram")) {
        viewport.innerHTML = `
          <div style="background:#001133; color:#ffffff; min-height:100%; padding:16px; text-align:center; font-family:'Comic Sans MS', Tahoma, sans-serif;">
            <div style="background:#ffcc00; color:#000; font-weight:bold; padding:4px;">⚡ INSTANT HARDWARE UPGRADE OVER 56K MODEM! ⚡</div>
            <h2 style="color:#00ffff; margin:10px 0;">Welcome to DownloadMoreRAM1998.com!</h2>
            <p style="font-size:12px; color:#ccc;">Why buy expensive PC100 SDRAM sticks at CompUSA when you can download extra megabytes for FREE?!</p>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin:16px 0;">
              <div class="bevel-outset" style="color:#000; padding:10px;">
                <div style="font-size:24px;">💾</div>
                <b>64 MB SDRAM</b>
                <div style="font-size:10px; margin:4px 0;">Good for Solitaire & Pinball</div>
                <button class="win-btn ram-dl-btn" data-mb="64">Download 64MB</button>
              </div>
              <div class="bevel-outset" style="color:#000; padding:10px;">
                <div style="font-size:24px;">🚀</div>
                <b>256 MB PRO</b>
                <div style="font-size:10px; margin:4px 0;">Runs Quake II at 800x600!</div>
                <button class="win-btn ram-dl-btn" data-mb="256">Download 256MB</button>
              </div>
              <div class="bevel-outset" style="color:#000; padding:10px; border:2px solid #ff0000;">
                <div style="font-size:24px;">☢️</div>
                <b>16 GB Y2K ULTRA</b>
                <div style="font-size:10px; margin:4px 0; color:#b00;">Warning: Illegal in 1998!</div>
                <button class="win-btn ram-dl-btn" data-mb="16384" style="font-weight:bold;">Download 16GB</button>
              </div>
            </div>
            <div id="ram-status-box" style="display:none; background:#000; border:2px inset #888; padding:10px; margin-top:10px;">
              <div id="ram-status-text" style="color:#00ff00; font-family:monospace; margin-bottom:6px;">Injecting SDRAM into motherboard...</div>
              <div class="bevel-inset" style="height:18px; background:#222;">
                <div id="ram-bar" style="width:10%; height:100%; background:#00ff00;"></div>
              </div>
            </div>
          </div>
        `;

        viewport.querySelectorAll(".ram-dl-btn").forEach((b) => {
          b.addEventListener("click", () => {
            const mb = parseInt(b.dataset.mb, 10);
            const box = viewport.querySelector("#ram-status-box");
            const txt = viewport.querySelector("#ram-status-text");
            const bar = viewport.querySelector("#ram-bar");
            box.style.display = "block";
            let pct = 0;
            const iv = setInterval(() => {
              pct += 20;
              bar.style.width = `${Math.min(100, pct)}%`;
              txt.textContent = `Downloading ${mb} MB SDRAM... (${pct}%)`;
              window.winAudio.playClick();
              if (pct >= 100) {
                clearInterval(iv);
                if (mb > 1000) {
                  window.winOS.triggerBSOD({
                    title: "TOO_MUCH_RAM_DOWNLOADED",
                    code: "0x1998SDRAM in MOTHERBOARD_EXPLODED.VXD",
                    reason: "You tried to cram 16 GB of RAM into an Intel Pentium II 64MB motherboard over a 56k phone line!"
                  });
                } else {
                  window.winAudio.playTada();
                  txt.textContent = `✅ SUCCESS! Your PC now has ${64 + mb} MB of pure imaginary RAM!`;
                }
              }
            }, 300);
          });
        });
        return;
      }

      if (url.includes("antigravity98")) {
        viewport.innerHTML = `
          <div style="background:#f0f4ff; color:#000; min-height:100%; padding:14px; font-family:Tahoma, sans-serif;">
            <div style="background:#000080; color:#fff; padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:15px; font-weight:bold;">🪐 Antigravity AI 98 (Pentium MMX Edition)</span>
              <span style="background:#00aa00; padding:2px 6px; font-size:10px;">166 MHz TURBO ON</span>
            </div>
            <p style="font-size:11px; margin:8px 0;">
              Welcome to <b>Antigravity 1998</b>! Powered by <b>48,000 3½ Floppy Disks</b> chained together in a suburban garage. Ask our 1998 Neural Net anything!
            </p>
            <div id="ag98-chat" class="bevel-inset" style="height:175px; overflow-y:auto; background:#fff; padding:8px; font-family:monospace; font-size:11px; margin-bottom:8px;">
              <div style="color:#000080;"><b>[Antigravity-98]:</b> Greetings, human of 1998! Insert Floppy Disk #14 or type a question below!</div>
            </div>
            <div style="display:flex; gap:6px;">
              <input id="ag98-input" class="bevel-inset" style="flex:1; padding:4px;" placeholder="Ask Antigravity 98 (e.g. 'Will Y2K destroy my toaster?')..." />
              <button id="ag98-send" class="win-btn">Ask 1998 AI</button>
            </div>
          </div>
        `;
        const chat = viewport.querySelector("#ag98-chat");
        const inp = viewport.querySelector("#ag98-input");
        const send = viewport.querySelector("#ag98-send");
        const replies = [
          "Computing on 3dfx Voodoo2... Answer: Buy Apple and Nvidia stock immediately and hold until 2026!",
          "Hold on, swapping Floppy Disk #412... According to Encarta 98, the answer is 42!",
          "Warning: My neural weights are stored in C:\\TEMP and Clippy just tried to eat them!",
          "I just benchmarked myself against the competition: I rendered 100% more authentic 3D beveled borders per second!"
        ];
        const sendQuestion = () => {
          const val = inp.value.trim();
          if (!val) return;
          chat.innerHTML += `<div style="margin-top:4px;"><b>[You]:</b> ${val}</div>`;
          inp.value = "";
          setTimeout(() => {
            window.winAudio.playTada();
            const r = replies[Math.floor(Math.random() * replies.length)];
            chat.innerHTML += `<div style="color:#008000; margin-top:4px;"><b>[Antigravity-98]:</b> ${r}</div>`;
            chat.scrollTop = chat.scrollHeight;
          }, 350);
        };
        send.addEventListener("click", sendQuestion);
        inp.addEventListener("keydown", (e) => { if (e.key === "Enter") sendQuestion(); });
        return;
      }

      // Default: GeoCities Area51 1998 Shrine
      viewport.innerHTML = `
        <div style="background:#000000; color:#00ff00; min-height:100%; padding:14px; text-align:center; font-family:'Comic Sans MS', monospace;">
          <div style="background:repeating-linear-gradient(45deg, #ffff00, #ffff00 10px, #000000 10px, #000000 20px); padding:4px;">
            <span style="background:#000; color:#ffff00; font-weight:bold; padding:2px 8px;">🚧 UNDER CONSTRUCTION SINCE JULY 1998 🚧</span>
          </div>
          <h2 style="color:#ff00ff; margin:10px 0; text-shadow:2px 2px #00ffff;">👽 CYBER-DAVE'S AREA 51 & WINDOWS 98 SECRETS 👽</h2>
          <div style="color:#ffff00; font-size:11px; margin-bottom:10px;">
            ★ Best viewed in Microsoft Internet Explorer 4.0 at 800x600 resolution ★
          </div>
          <div style="display:flex; justify-content:center; gap:12px; margin:10px 0;">
            <div class="bevel-outset" style="background:#222; color:#0f0; padding:6px 10px; font-family:monospace;">
              VISITOR COUNTER: <b>0001337</b>
            </div>
            <button id="geo-prize-btn" class="win-btn" style="background:#ff0055; color:#fff; font-weight:bold;">
              🎁 Click Here: You Won a Free DVD Player!
            </button>
          </div>
          <div style="border:1px dashed #00ffff; padding:8px; margin:10px auto; max-width:460px; color:#ffffff; font-size:11px; text-align:left;">
            <b>🔥 TOP 1998 CHEAT CODES & RUMORS:</b>
            <ul style="margin:5px 0; padding-left:18px;">
              <li>To unlock <b>Luigi in Super Mario 64</b>, run around the courtyard statue 1998 times!</li>
              <li>Type <code>matrix</code> or <code>format c:</code> inside <b>MS-DOS Prompt</b> for secret animations!</li>
              <li>Whatever you do, DO NOT open <code>Delete_System32.bat</code> on the desktop!</li>
            </ul>
          </div>
        </div>
      `;
      const prizeBtn = viewport.querySelector("#geo-prize-btn");
      if (prizeBtn) {
        prizeBtn.addEventListener("click", () => {
          window.virusEngine.launchElusiveMillionPopup();
        });
      }
    };

    winEl.querySelectorAll(".ie-nav").forEach((btn) => {
      btn.addEventListener("click", () => renderPage(btn.dataset.url));
    });

    goBtn.addEventListener("click", () => renderPage(addrInput.value));
    addrInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") renderPage(addrInput.value);
    });

    dialBtn.addEventListener("click", () => {
      window.winAudio.playDialupHandshake();
      alert("☎️ Dialing ISP (555-1998)... Listen to that glorious 56k V.90 modem screech!");
    });

    renderPage(initialUrl);
  },

  /* ==========================================================================
     5. WINAMP 2.11 ("It really whips the llama's ass!")
     ========================================================================== */
  openWinamp() {
    const winId = window.winOS.createWindow({
      title: "WINAMP v2.11",
      icon: "⚡",
      width: 320,
      height: 210,
      resizable: false,
      content: `
        <div class="winamp-skin">
          <div class="winamp-top">
            <canvas id="winamp-vis" class="winamp-visualizer" width="110" height="52"></canvas>
            <div class="winamp-info">
              <div id="winamp-track-title" class="winamp-marquee">1. DJ Llama - Canyon_98_Synthwave.mid</div>
              <div class="winamp-stats">
                <span id="winamp-kbps">128 kbps</span>
                <span id="winamp-khz">44 kHz</span>
                <span style="color:#00ff00;">STEREO</span>
              </div>
              <div style="font-size:10px; color:#aaa;">"It really whips the llama's ass!"</div>
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:4px; margin-top:4px;">
            <button class="win-btn win-btn-small" id="wa-prev">⏮</button>
            <button class="win-btn win-btn-small" id="wa-play" style="font-weight:bold;">▶ Play</button>
            <button class="win-btn win-btn-small" id="wa-stop">⏹ Stop</button>
            <button class="win-btn win-btn-small" id="wa-next">⏭</button>
            <button class="win-btn win-btn-small" id="wa-llama" title="Whip the Llama!">🦙</button>
          </div>
        </div>
      `,
      onClose: () => {
        window.winAudio.stopMusic();
      }
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    const visCanvas = winEl.querySelector("#winamp-vis");
    const vctx = visCanvas.getContext("2d");
    const titleEl = winEl.querySelector("#winamp-track-title");
    const kbpsEl = winEl.querySelector("#winamp-kbps");

    const updateTrackUI = (t) => {
      titleEl.textContent = t.title;
      kbpsEl.textContent = `${t.kbps} kbps`;
    };

    winEl.querySelector("#wa-play").addEventListener("click", () => {
      window.winAudio.startMusic();
    });
    winEl.querySelector("#wa-stop").addEventListener("click", () => {
      window.winAudio.stopMusic();
    });
    winEl.querySelector("#wa-next").addEventListener("click", () => {
      updateTrackUI(window.winAudio.nextTrack());
    });
    winEl.querySelector("#wa-prev").addEventListener("click", () => {
      updateTrackUI(window.winAudio.prevTrack());
    });
    winEl.querySelector("#wa-llama").addEventListener("click", () => {
      window.winAudio.playTada();
      titleEl.textContent = "🦙 BAAAAH! THE LLAMA HAS BEEN WHIPPED! 🦙";
    });

    // Spectrum visualizer loop
    const drawVis = () => {
      if (!document.getElementById(winId)) return;
      vctx.fillStyle = "#000000";
      vctx.fillRect(0, 0, visCanvas.width, visCanvas.height);

      const bars = 16;
      const barW = Math.floor(visCanvas.width / bars) - 1;
      for (let i = 0; i < bars; i++) {
        const h = window.winAudio.musicPlaying
          ? Math.floor(6 + Math.random() * (visCanvas.height - 8))
          : 3;
        const y = visCanvas.height - h;
        const grad = vctx.createLinearGradient(0, 0, 0, visCanvas.height);
        grad.addColorStop(0, "#ff0000");
        grad.addColorStop(0.5, "#ffff00");
        grad.addColorStop(1, "#00ff00");
        vctx.fillStyle = grad;
        vctx.fillRect(i * (barW + 1), y, barW, h);
      }
      requestAnimationFrame(drawVis);
    };
    requestAnimationFrame(drawVis);
  },

  /* ==========================================================================
     6. MS-DOS PROMPT (COMMAND.COM)
     ========================================================================== */
  openDosPrompt() {
    const winId = window.winOS.createWindow({
      title: "MS-DOS Prompt",
      icon: "📟",
      width: 520,
      height: 330,
      content: `
        <div class="dos-terminal bevel-inset" id="dos-term">
          <div>Microsoft(R) Windows 98</div>
          <div>   (C)Copyright Microsoft Corp 1981-1998.</div>
          <br/>
          <div style="color:#ffff55;">Type <b>HELP</b> for commands (try: <b>MATRIX</b>, <b>VIRUS</b>, <b>BSOD</b>, <b>HACK</b>, <b>FORMAT C:</b>)</div>
          <div id="dos-history"></div>
          <div class="dos-input-row">
            <span>C:\\WINDOWS&gt;</span>
            <input type="text" class="dos-input" id="dos-input" autofocus spellcheck="false" />
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;
    const term = winEl.querySelector("#dos-term");
    const hist = winEl.querySelector("#dos-history");
    const inp = winEl.querySelector("#dos-input");

    term.addEventListener("click", () => inp.focus());
    setTimeout(() => inp.focus(), 50);

    const printLine = (html) => {
      const div = document.createElement("div");
      div.innerHTML = html;
      hist.appendChild(div);
      term.scrollTop = term.scrollHeight;
    };

    inp.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const raw = inp.value.trim();
      const cmd = raw.toLowerCase();
      inp.value = "";
      printLine(`C:\\WINDOWS&gt;${raw}`);

      if (!cmd) return;
      if (cmd === "help") {
        printLine(`
          Available MS-DOS 98 Commands:<br/>
          &nbsp;<b>DIR</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List directory files<br/>
          &nbsp;<b>VER</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display Windows 98 version<br/>
          &nbsp;<b>MATRIX</b> &nbsp;&nbsp;&nbsp;- Toggle 1999 Matrix Digital Rain<br/>
          &nbsp;<b>VIRUS</b> &nbsp;&nbsp;&nbsp;&nbsp;- Launch Hydra Error Storm<br/>
          &nbsp;<b>CURE</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Disinfect all active viruses<br/>
          &nbsp;<b>HACK</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Run 90s Hollywood Mainframe Bypass<br/>
          &nbsp;<b>BSOD</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Trigger Blue Screen of Death<br/>
          &nbsp;<b>FORMAT C:</b> - Format Local Disk (C:)<br/>
          &nbsp;<b>CLS</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear screen
        `);
      } else if (cmd === "cls") {
        hist.innerHTML = "";
      } else if (cmd === "ver") {
        printLine("Windows 98 Second Edition [Version 4.10.2222 A - Antigravity Turbo Build]");
      } else if (cmd === "dir") {
        printLine(`
          Volume in drive C is WIN98_SE<br/>
          Directory of C:\\WINDOWS<br/><br/>
          COMMAND &nbsp;&nbsp;COM &nbsp;&nbsp;&nbsp;&nbsp;93,890 &nbsp;05-05-99 &nbsp;2:22p<br/>
          EXPLORER &nbsp;EXE &nbsp;&nbsp;&nbsp;180,224 &nbsp;05-05-99 &nbsp;2:22p<br/>
          WINMINE &nbsp;&nbsp;EXE &nbsp;&nbsp;&nbsp;&nbsp;96,256 &nbsp;05-05-99 &nbsp;2:22p<br/>
          NOT_VIRUS EXE &nbsp;&nbsp;&nbsp;666,666 &nbsp;12-31-99 11:59p<br/>
          SECRET &nbsp;&nbsp;&nbsp;TXT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,337 &nbsp;10-07-98 &nbsp;4:20p<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;5 file(s) &nbsp;&nbsp;&nbsp;1,038,373 bytes
        `);
      } else if (cmd === "matrix") {
        printLine("<span style='color:#00ff00;'>Wake up, Neo... Launching Matrix 1999 overlay...</span>");
        window.virusEngine.triggerMatrixRain();
      } else if (cmd === "virus") {
        printLine("<span style='color:#ff5555;'>Executing HYDRA_POPUP.EXE...</span>");
        window.virusEngine.triggerHydra(3);
      } else if (cmd === "cure") {
        window.virusEngine.cureAll();
        printLine("<span style='color:#00ff00;'>All simulated viruses disinfected!</span>");
      } else if (cmd === "bsod") {
        window.winOS.triggerBSOD({
          title: "MS_DOS_MANUAL_OVERRIDE",
          code: "INT 21h at 0028:C0005341",
          reason: "User typed 'BSOD' directly into MS-DOS Prompt like an absolute legend."
        });
      } else if (cmd === "hack") {
        printLine("<span style='color:#00ff00;'>[BYPASSING 56K FIREWALL... ACCESSING PENTAGON FLOPPY DRIVE... I'M IN!]</span>");
        window.winAudio.playTada();
      } else if (cmd.startsWith("format c")) {
        printLine("<span style='color:#ff5555;'>WARNING, ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!</span>");
        printLine("Formatting 2,147 MB... 25%... 68%... 99%...");
        setTimeout(() => {
          window.winOS.triggerBSOD({
            title: "C_DRIVE_FORMATTED_WHILE_RUNNING",
            code: "0x0000DEAD in FORMAT.COM",
            reason: "You formatted Drive C: while Windows 98 was still standing on it!"
          });
        }, 1100);
      } else {
        printLine(`Bad command or file name: "${raw}". Type HELP for commands.`);
      }
    });
  },

  /* ==========================================================================
     7. NOTEPAD (passwords_do_not_open.txt)
     ========================================================================== */
  openNotepad(title = "passwords_do_not_open.txt - Notepad", initialText = null) {
    const defaultContent = initialText || `=======================================================
TOP SECRET 1998 PASSWORDS & NOTES (DO NOT READ MOM!!)
=======================================================

1. AOL Screen Name: xX_CyberSkater1998_Xx
   Password: password123

2. Half-Life WonCD Key: 1337-1998-4242-9999-0001

3. My Tamagotchi Burial Schedule:
   - Died during 4th period Math class. R.I.P.

4. REMINDER FOR Y2K (Dec 31, 1999):
   - Hoard 400 cans of Chef Boyardee
   - Unplug the toaster before midnight so it doesn't become sentient
   - Test out "Virus_Lab_98_Pro.exe" on the desktop!`;

    window.winOS.createWindow({
      title,
      icon: "📝",
      width: 440,
      height: 310,
      menuItems: ["File", "Edit", "Search", "Help"],
      content: `
        <textarea class="bevel-inset" style="width:100%; height:100%; resize:none; border:none; padding:6px; font-family:var(--font-mono); font-size:12px; outline:none;">${defaultContent}</textarea>
      `
    });
  },

  /* ==========================================================================
     8. DISPLAY PROPERTIES & BSOD CUSTOMIZER
     ========================================================================== */
  openDisplayProperties() {
    const winId = window.winOS.createWindow({
      title: "Display Properties & BSOD Studio",
      icon: "🖥️",
      width: 400,
      height: 350,
      resizable: false,
      content: `
        <div style="display:flex; flex-direction:column; gap:10px; height:100%; padding:4px;">
          <div class="bevel-outset" style="padding:8px;">
            <div style="font-weight:bold; margin-bottom:6px;">🎨 Desktop Color Theme:</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
              <button class="win-btn theme-btn" data-theme="">🪟 Classic 98 Teal</button>
              <button class="win-btn theme-btn" data-theme="theme-hotdog">🌭 Hot Dog Stand</button>
              <button class="win-btn theme-btn" data-theme="theme-vaporwave">🌴 Vaporwave 1998</button>
              <button class="win-btn theme-btn" data-theme="theme-matrix">🕶️ Matrix Hacker</button>
            </div>
            <div style="margin-top:8px;">
              <label style="display:flex; align-items:center; gap:6px; cursor:pointer; font-weight:bold;">
                <input type="checkbox" id="crt-toggle-chk" ${document.body.classList.contains("crt-enabled") ? "checked" : ""} />
                📺 Enable CRT Monitor Scanlines Effect
              </label>
            </div>
          </div>

          <div class="bevel-outset" style="padding:8px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-weight:bold; color:#0000aa;">💙 Custom Blue Screen of Death (BSOD) Generator:</div>
            <div style="font-size:11px;">Write your own funny crash message and trigger an instant BSOD:</div>
            <input id="custom-bsod-reason" class="bevel-inset" style="padding:4px; width:100%;" value="Your PC crashed because your 1998 vibes were too strong for this browser." />
            <button id="trigger-custom-bsod" class="win-btn" style="background:#0000aa; color:#fff; font-weight:bold;">
              💥 Trigger Custom BSOD Now
            </button>
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    winEl.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.classList.remove("theme-hotdog", "theme-vaporwave", "theme-matrix");
        const t = btn.dataset.theme;
        if (t) document.body.classList.add(t);
        const desk = document.getElementById("desktop-environment");
        if (desk) desk.style.backgroundImage = "";
        window.winAudio.playClick();
      });
    });

    const crtChk = winEl.querySelector("#crt-toggle-chk");
    crtChk.addEventListener("change", () => {
      document.body.classList.toggle("crt-enabled", crtChk.checked);
      window.winAudio.playClick();
    });

    winEl.querySelector("#trigger-custom-bsod").addEventListener("click", () => {
      const reason = winEl.querySelector("#custom-bsod-reason").value;
      window.winOS.triggerBSOD({
        title: "CUSTOM_USER_INITIATED_EXCEPTION",
        code: "0E : 0028:C0011998 in VXD FUNNY_CRASH(01)",
        reason
      });
    });
  },

  /* ==========================================================================
     9. MY COMPUTER (File Explorer)
     ========================================================================== */
  openMyComputer() {
    const winId = window.winOS.createWindow({
      title: "My Computer",
      icon: "💻",
      width: 460,
      height: 310,
      menuItems: ["File", "Edit", "View", "Go", "Favorites", "Help"],
      statusText: "6 object(s) | Free Space on C: 1.42 GB",
      content: `
        <div class="explorer-grid bevel-inset">
          <div class="explorer-item" data-act="floppy">
            <div style="font-size:28px;">💾</div>
            <span>3½ Floppy (A:)</span>
          </div>
          <div class="explorer-item" data-act="cdrive">
            <div style="font-size:28px;">🖴</div>
            <span>Local Disk (C:)</span>
          </div>
          <div class="explorer-item" data-act="cdrom">
            <div style="font-size:28px;">💿</div>
            <span>Encarta 98 (D:)</span>
          </div>
          <div class="explorer-item" data-act="display">
            <div style="font-size:28px;">🎨</div>
            <span>Control Panel</span>
          </div>
          <div class="explorer-item" data-act="viruslab">
            <div style="font-size:28px;">☣️</div>
            <span>Quarantine Vault</span>
          </div>
          <div class="explorer-item" data-act="sys32">
            <div style="font-size:28px;">⚠️</div>
            <span>Delete System32</span>
          </div>
        </div>
      `
    });

    const winEl = document.getElementById(winId);
    if (!winEl) return;

    winEl.querySelectorAll(".explorer-item").forEach((item) => {
      item.addEventListener("click", () => {
        const act = item.dataset.act;
        if (act === "floppy") {
          window.winAudio.playError();
          alert("Drive A: is not accessible.\n\nPlease insert a 1.44 MB 3½-inch Floppy Disk and blow on the metal shutter first.");
        } else if (act === "cdrive") {
          this.openDosPrompt();
        } else if (act === "cdrom") {
          this.openWinamp();
        } else if (act === "display") {
          this.openDisplayProperties();
        } else if (act === "viruslab") {
          this.openVirusLab();
        } else if (act === "sys32") {
          window.virusEngine.runDeleteSystem32Sequence();
        }
      });
    });
  }
};

window.Win98Apps = Win98Apps;
