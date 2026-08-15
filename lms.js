/* ==========================================================================
   NAMIZONE AMS — SCRIPT & DARK MODE TOGGLE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
});

function applySavedTheme() {
    const savedTheme = localStorage.getItem('namizone_theme');
    const body = document.body;
    const icon = document.getElementById('themeIcon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (icon) {
            icon.style.color = '#38bdf8';
            icon.style.transform = 'rotate(180deg)';
        }
    } else {
        body.classList.remove('dark-mode');
        if (icon) {
            icon.style.color = '';
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    localStorage.setItem('namizone_theme', isDark ? 'dark' : 'light');

    const icon = document.getElementById('themeIcon');
    if (icon) {
        if (isDark) {
            icon.style.color = '#38bdf8';
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.4s ease, color 0.3s ease';
        } else {
            icon.style.color = '';
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'transform 0.4s ease, color 0.3s ease';
        }
    }
}

function toggleBotCard() {
    const card = document.getElementById('amsBotCard');
    if (card) {
        card.classList.toggle('hidden');
    }
}

function sendBotMsg() {
    const input = document.getElementById('botInput');
    if (!input || !input.value.trim()) return;

    const body = document.querySelector('.bot-body');
    const p = document.createElement('p');
    p.innerHTML = `💬 <strong>You:</strong> ${input.value.trim()}`;
    body.appendChild(p);

    input.value = '';

    setTimeout(() => {
        const reply = document.createElement('p');
        reply.innerHTML = `🤖 <strong>AI Guardian:</strong> I've logged your request. Submit pending items using the main dashboard!`;
        body.appendChild(reply);
        body.scrollTop = body.scrollHeight;
    }, 600);
}

function handleBotKey(e) {
    if (e.key === 'Enter') sendBotMsg();
}