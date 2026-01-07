const APPS_DATA = [
    // --- START HERE ---
    { "name": "Join Discord", "type": "web", "url": "https://discord.pizzadao.xyz", "category": "START" },
    { "name": "Join PizzaDAO", "type": "web", "url": "https://pizzadao.xyz/join", "category": "START" },
    { "name": "Global Map", "type": "map", "url": "https://map.pizzadao.xyz", "category": "START" },

    // --- PARTICIPATE ---
    { "name": "Community Call", "type": "web", "url": "https://discord.pizzadao.xyz", "category": "PARTICIPATE" },
    { "name": "Crew Call", "type": "calendar", "url": "https://calendar.pizzadao.xyz", "category": "PARTICIPATE" },
    { "name": "Contribute Code", "type": "web", "url": "https://github.com/pizzadao", "category": "PARTICIPATE" },

    // --- GAMES ---
    { "name": "Pizza Chef", "type": "web", "url": "https://pizzachef.bolt.host", "category": "GAMES" },
    { "name": "Molto Benny", "type": "web", "url": "https://pizzadao.github.io/moltobennydelivery/", "category": "GAMES" },
    { "name": "Pizza Blastoff", "type": "web", "url": "https://c-r-x-s-s.github.io/Bitcoin-Pizza-Blastoff/", "category": "GAMES" },

    // --- TOOLS (Existing) ---
    { "name": "Band", "type": "drive", "url": "https://drive.google.com/drive/folders/1owejIWtX7obut3cX6tOo7EEdVssp6AcE", "category": "TOOLS" },
    { "name": "Budget", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1-3_M00O2v3q7Ap2zu4_dka86pH319WBujVRGwDZnUl0/edit?usp=sharing", "category": "TOOLS" },
    { "name": "Calendar", "type": "calendar", "url": "https://calendar.google.com/calendar/u/0?cid=bG9saWJlYnQwcHY3ZGE5bHYzNWR2aXFhc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ", "category": "TOOLS" },
    { "name": "City Folders", "type": "drive", "url": "https://drive.google.com/drive/folders/1KcdqCdTryi76G1Ol2lVv1hAmcFdGzyr-", "category": "TOOLS" },
    { "name": "Comms", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1PVRjFQjHV8--m3I4ZONvRDt2iV2KHyaDulq4YNOR8TE/edit?usp=sharing", "category": "TOOLS" },
    { "name": "Crew", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/16BBOfasVwz8L6fPMungz_Y0EfF6Z9puskLAix3tCHzM/edit?usp=sharing", "category": "TOOLS" },
    { "name": "Design", "type": "figma", "url": "https://www.figma.com/design/0jbS6Max7RfngR2Ow74YWE/2025-Design-Template?node-id=0-1&t=nuR7E6YzD9ADdkNK-1", "category": "TOOLS" },
    { "name": "Events", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1QiBR-B5mNmSCliSM2-cnekx-X4_1iG3kNUFQnLG6AV8/edit?usp=sharing", "category": "TOOLS" },
    { "name": "Global Pizza Party", "type": "web", "url": "https://globalpizzaparty.xyz/", "category": "START" },
    { "name": "Host Deck", "type": "slide", "url": "https://docs.google.com/presentation/d/1AN4Vdp9_lQ2kfDdqWPGdb5L7t1k6qJSRhCv9fBUQ6ts/edit#slide=id.g23949a0fd7c_7_22", "category": "TOOLS" },
    { "name": "Interviews", "type": "drive", "url": "https://drive.google.com/drive/u/1/folders/1DcZr6Xo8w7QSS5L8dl1VEggvkSZJsON4", "category": "TOOLS" },
    { "name": "Invoice", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1ex3uUi8J_vXSB5WAhnWDWYCG7CT1RokrQlrx3JDSRTI/edit#gid=1", "category": "TOOLS" },
    { "name": "Logos", "type": "drive", "url": "https://drive.google.com/drive/u/0/folders/17lzYKIsMwTgXd5yWfwzJ83PLoooiDVus", "category": "TOOLS" },
    { "name": "Mafia", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1wgGZ5ZJNZ0j6qj7af6HQHTljJpbytlEgq3i71rcODvg/edit#gid=1404542152", "category": "TOOLS" },
    { "name": "Manual", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/1KDAzz8qQubCaFiplWaUFBgCZlHR_mIA0IJHKNqgK5hg/edit?gid=0#gid=0", "category": "TOOLS" },
    { "name": "Map", "type": "map", "url": "https://www.google.com/maps/d/viewer?mid=1cCIycAq5BAA0UNXA9DsSwGgZnUEHtw0&usp=sharing", "category": "TOOLS" },
    { "name": "Menu", "type": "slide", "url": "https://docs.google.com/presentation/d/1Oycsq4YBOmyursmVCkr-6auI5bMnXOnb-KumDjWBWiU/edit#slide=id.p", "category": "TOOLS" },
    { "name": "Mix", "type": "audio", "url": "https://soundcloud.com/pizzadao", "category": "TOOLS" },
    { "name": "Mixtape", "type": "drive", "url": "https://drive.google.com/drive/folders/1abOgFNq7dvH4gmJeAZM1j4YNqsjuxWd5?usp=sharing", "category": "TOOLS" },
    { "name": "Parties", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/16T3_iXywToXQqxTyDIniWIA4SUI8Wj0a5LKHSAJL_9Q/edit#gid=67592696", "category": "TOOLS" },
    { "name": "Payment", "type": "form", "url": "https://forms.gle/rp3h5wg7FQ2keyaZ9", "category": "TOOLS" },
    { "name": "Playbook", "type": "slide", "url": "https://docs.google.com/presentation/d/1AN4Vdp9_lQ2kfDdqWPGdb5L7t1k6qJSRhCv9fBUQ6ts/edit#slide=id.g23949a0fd7c_7_22", "category": "TOOLS" },
    { "name": "Print Assets", "type": "drive", "url": "https://drive.google.com/drive/folders/17ZgmHXdlvLRsyeuY_3saW1G67AECYPCX?usp=sharing", "category": "TOOLS" },
    { "name": "Propose", "type": "web", "url": "https://scrimmageproductions.github.io/ProposalRecipe2/", "category": "TOOLS" },
    { "name": "Queue", "type": "sheet", "url": "https://docs.google.com/spreadsheets/d/13EWDauZWVUAKBp82CRk-gd9YjsO8XiG6QSjYDMQX-sU/edit?resourcekey#gid=0", "category": "TOOLS" },
    { "name": "Treasury", "type": "web", "url": "https://shorturl.at/5eloh", "category": "TOOLS" },
    { "name": "Unlock", "type": "web", "url": "https://unlockprotocol.notion.site/Setting-up-your-Global-Pizza-Party-event-page-7a8d97783b8e49aca62b7b8bd336435b", "category": "TOOLS" },
    { "name": "Zoom", "type": "video", "url": "https://us06web.zoom.us/j/82680270014?pwd=eZbuF41ZGfQH0jnGZdCJUtCU1r4jd4.1#success", "category": "TOOLS" }
];

const ICONS = {
    drive: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>',
    sheet: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>',
    figma: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>',
    web: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>',
    slide: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',
    audio: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19.953v-5.008a12.776 12.776 0 005.455-2.04v5.008A2.96 2.96 0 119 19.953z" /><path stroke-linecap="round" stroke-linejoin="round" d="M14.455 12.905a9.75 9.75 0 01-5.455 2.04" /><path stroke-linecap="round" stroke-linejoin="round" d="M14.455 12.905V5.5a2.5 2.5 0 00-.5-4.875 2.5 2.5 0 00-.5 4.875v7.405z" /></svg>',
    form: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',
    video: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>',
    default: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>'
};

// Current active category
let currentCategory = 'ALL';

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initCountdown();
    renderIcons();
    initVideoBackground();
});

/* --- Video Background Control --- */
function initVideoBackground() {
    const toggleBtn = document.getElementById('sound-toggle');
    const iconMute = document.getElementById('icon-mute');
    const iconUnmute = document.getElementById('icon-unmute');
    const videoBg = document.getElementById('video-bg');

    if (!videoBg) return;

    toggleBtn.addEventListener('click', () => {
        // Toggle muted state
        videoBg.muted = !videoBg.muted;
        const isMuted = videoBg.muted;

        // Toggle Icons
        if (isMuted) {
            iconMute.classList.remove('hidden');
            iconUnmute.classList.add('hidden');
        } else {
            iconMute.classList.add('hidden');
            iconUnmute.classList.remove('hidden');
        }
    });
}

/* --- Clock & Countdown --- */
function initClock() {
    const clockEl = document.getElementById('clock');
    setInterval(() => {
        clockEl.textContent = new Date().toLocaleTimeString();
    }, 1000);
}

function initCountdown() {
    const targetDate = new Date('May 22, 2026 00:00:00').getTime();
    const countdownEl = document.getElementById('countdown');

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownEl.textContent = "PARTY TIME!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Pad numbers with leading zeros for consistent width
        const h = hours.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');

        countdownEl.textContent = `${days}d ${h}h ${m}m ${s}s`;
    }

    update();
    setInterval(update, 1000); // Update every second so it looks active
}

/* --- App Rendering --- */
function renderIcons() {
    // 1. Render Category Buttons
    renderCategoryButtons();

    // 2. Render Grid
    const desktop = document.getElementById('desktop');
    desktop.innerHTML = ''; // clear existing items (but keep filters if they were inside? No, separate container is better)

    // Filter apps
    let visibleApps = APPS_DATA;
    if (currentCategory !== 'ALL') {
        visibleApps = APPS_DATA.filter(app => app.category === currentCategory);
    }

    // Sort apps alphabetically by name
    visibleApps.sort((a, b) => a.name.localeCompare(b.name));

    // Render sorted & filtered apps
    visibleApps.forEach(app => {
        const iconEl = document.createElement('a');
        iconEl.className = 'app-icon group';
        iconEl.href = app.url;
        iconEl.target = "_blank";

        const svg = ICONS[app.type] || ICONS.default;

        iconEl.innerHTML = `
            <div class="icon-container">
                ${svg}
            </div>
            <span class="icon-label">
                ${app.name}
            </span>
        `;
        desktop.appendChild(iconEl);
    });
}

function renderCategoryButtons() {
    const filterContainer = document.getElementById('category-filters');
    if (!filterContainer) return;

    filterContainer.innerHTML = '';

    const categories = ['START', 'PARTICIPATE', 'GAMES', 'TOOLS', 'ALL'];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.className = `px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 border border-transparent ${currentCategory === cat
            ? 'bg-primary text-white shadow-[0_0_10px_rgba(0,85,255,0.6)] border-primary'
            : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border-white/10'
            }`;
        // Add minimal styling inline or utility matching your system. 
        // Using dynamic class logic here for active state.

        btn.onclick = () => {
            currentCategory = cat;
            renderIcons();
        };

        filterContainer.appendChild(btn);
    });
}

/* --- Window Manager --- */
let zIndexCounter = 100;
const windowContainer = document.getElementById('window-container');
const HEADER_HEIGHT = 40; // Approx px height of window title bar

function openWindow(app) {
    if (!app.url) return;

    const winId = `win-${Date.now()}`;
    const win = document.createElement('div');
    win.className = 'os-window';
    win.id = winId;

    // Initial Position (randomized slightly)
    const randX = 50 + Math.random() * 100;
    const randY = 50 + Math.random() * 100;
    win.style.left = `${randX}px`;
    win.style.top = `${randY}px`;
    win.style.width = '600px';
    win.style.height = '400px';
    win.style.zIndex = ++zIndexCounter;

    win.innerHTML = `
        <div class="window-header" id="${winId}-header">
            <div class="window-title">
                <span>${ICONS[app.type] || ICONS.default}</span>
                ${app.name}
            </div>
            <div class="window-controls">
                <button class="control-btn btn-min" title="Minimize"></button>
                <button class="control-btn btn-max" title="Maximize"></button>
                <button class="control-btn btn-close" onclick="closeWindow('${winId}')" title="Close"></button>
            </div>
        </div>
        <div class="window-content relative">
             <iframe src="${app.url}" title="${app.name}" sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-downloads"></iframe>
             
             <!-- Fallback Overlay (Always visible initially, hidden if iframe loads successfully? 
                  Hard to detect iframe success due to cross-origin. 
                  Better approach: A floating action button overlaid on the content) -->
             
             <div class="absolute bottom-4 right-4 z-50">
                <a href="${app.url}" target="_blank" class="bg-primary hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow-lg flex items-center gap-2 text-sm transition-colors" style="background-color: var(--primary-color);">
                    <span>↗</span> Open in New Tab
                </a>
             </div>
        </div>
    `;

    // Bring to front on click
    win.addEventListener('mousedown', () => {
        win.style.zIndex = ++zIndexCounter;
    });

    windowContainer.appendChild(win);
    makeDraggable(document.getElementById(winId));
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) win.remove();
}

/* --- Drag Logic --- */
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById(element.id + "-header");

    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;

        // Bring to front
        element.style.zIndex = ++zIndexCounter;
    }

    function elementDrag(e) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
