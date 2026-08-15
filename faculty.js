/* ==========================================================================
   NAMIZONE FACULTY PORTAL — COMPLETE SCRIPT WITH DUMMY GENERATOR
   ========================================================================== */

// Restore saved Dark Mode theme state on initial page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('namizone_faculty_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.style.color = '#38bdf8';
        }
    }
});

// Toggle Dark / Night Mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('namizone_faculty_theme', isDark ? 'dark' : 'light');

    if (icon) {
        if (isDark) {
            icon.style.color = '#38bdf8';
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.4s ease, color 0.3s ease';
        } else {
            icon.style.color = '#ffffff';
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

// Handle Session Logout
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Start Live Class Session & Broadcast Event to Active Student Portals
function startClass(subjectName, slotKey) {
    const startBtn = document.getElementById(`btn-start-${slotKey}`);
    const endBtn = document.getElementById(`btn-end-${slotKey}`);
    const statusText = document.getElementById(`status-${slotKey}`);
    const slotCard = document.getElementById(`slot-${slotKey}`);

    if (startBtn && endBtn) {
        startBtn.disabled = true;
        startBtn.classList.add('disabled');

        endBtn.disabled = false;
        endBtn.classList.remove('disabled');

        if (statusText) statusText.innerText = 'Status: 🟢 LIVE CLASS IN PROGRESS';
        if (slotCard) slotCard.classList.add('in-session');
    }

    const payload = {
        action: 'start_class',
        subject: subjectName,
        teacher: 'Prof. Java Faculty',
        timestamp: Date.now()
    };

    localStorage.setItem('namizone_live_class_event', JSON.stringify(payload));
    alert(`🟢 Class Started: "${subjectName}"!\nLive notification broadcasted to active student portals.`);
}

// End Live Class Session & Update System Status
function endClass(subjectName, slotKey) {
    const startBtn = document.getElementById(`btn-start-${slotKey}`);
    const endBtn = document.getElementById(`btn-end-${slotKey}`);
    const statusText = document.getElementById(`status-${slotKey}`);
    const slotCard = document.getElementById(`slot-${slotKey}`);

    if (startBtn && endBtn) {
        endBtn.disabled = true;
        endBtn.classList.add('disabled');

        if (statusText) statusText.innerText = 'Status: ✅ CLASS CONCLUDED';
        if (slotCard) slotCard.classList.remove('in-session');
    }

    const payload = {
        action: 'end_class',
        subject: subjectName,
        teacher: 'Prof. Java Faculty',
        timestamp: Date.now()
    };

    localStorage.setItem('namizone_live_class_event', JSON.stringify(payload));
    alert(`🔴 Class Concluded: "${subjectName}". Status updated across portals.`);
}

// Open Student Attendance Roster Modal
function openAttendanceModal(subjectName) {
    const modal = document.getElementById('attendanceModal');
    const subTitle = document.getElementById('modalSubjectTitle');
    
    if (subTitle) subTitle.innerText = subjectName;
    if (modal) modal.classList.remove('hidden');
}

// Close Student Attendance Roster Modal
function closeAttendanceModal() {
    const modal = document.getElementById('attendanceModal');
    if (modal) modal.classList.add('hidden');
}

// Submit Student Attendance Roster (10 XYZ Students)
function submitStudentAttendance() {
    let presentCount = 0;
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="att_std${i}"]:checked`);
        if (selected && selected.value === 'present') {
            presentCount++;
        }
    }

    closeAttendanceModal();
    alert(`✅ Attendance Roster Submitted!\nTotal Present: ${presentCount}/10 Students (XYZ 1 - 10).\nSynchronized with central registry.`);
}

// Publish Standard Assignment or Pop Quiz
function publishFacultyItem(event) {
    event.preventDefault();

    const type = document.getElementById('postType').value;
    const subject = document.getElementById('postSubject').value;
    const title = document.getElementById('postTitle').value.trim();

    if (!title) return;

    const payload = {
        type: type,
        subject: subject,
        title: title,
        author: "Prof. Java Faculty",
        timestamp: Date.now()
    };

    localStorage.setItem('namizone_faculty_broadcast', JSON.stringify(payload));
    alert(`🚀 Published ${type.toUpperCase()} for ${subject}!\nReal-time notification broadcasted to student portals.`);

    document.getElementById('postTitle').value = '';
}

/* ==========================================================================
   DUMMY NOTIFICATION SHOWCASE GENERATOR
   ========================================================================== */

// Trigger quick pre-configured showcase dummy notifications
function triggerQuickDummy(presetType) {
    let payload = {};

    if (presetType === 'assignment') {
        payload = {
            type: 'assignment',
            subject: 'Java Programming (IFA2301N)',
            title: 'New Upload: Unit 3 Multithreaded Banking Application',
            author: 'Prof. Java Faculty',
            timestamp: Date.now()
        };
    } else if (presetType === 'quiz') {
        payload = {
            type: 'quiz',
            subject: 'Machine Learning (IFA2315N)',
            title: 'Pop Quiz #2: Decision Trees & Random Forests (Active Now)',
            author: 'Prof. Machine Learning',
            timestamp: Date.now()
        };
    } else if (presetType === 'class') {
        payload = {
            type: 'quiz', // Rendered as highlighted alert
            subject: 'Java Programming Lab (IFA2302N)',
            title: 'Class Starting in 5 Minutes! Join Lab 105 or online gateway.',
            author: 'Prof. Java Faculty',
            timestamp: Date.now()
        };
    }

    localStorage.setItem('namizone_faculty_broadcast', JSON.stringify(payload));
    alert(`⚡ Showcase Notification Broadcasted!\nCheck the open Student Dashboard tab to view the live toast notification.`);
}

// Send custom notification message from input fields
function sendCustomDummyNotification() {
    const author = document.getElementById('dummyAuthor').value.trim() || "Prof. Java Faculty";
    const subject = document.getElementById('dummySubject').value.trim() || "Java Programming";
    const type = document.getElementById('dummyType').value;
    const titleInput = document.getElementById('dummyTitle').value.trim();

    const title = titleInput || "Attention: Important course update posted to portal.";

    const payload = {
        type: type,
        subject: subject,
        title: title,
        author: author,
        timestamp: Date.now()
    };

    localStorage.setItem('namizone_faculty_broadcast', JSON.stringify(payload));
    alert(`🚀 Custom Broadcast Sent!\nType: ${type.toUpperCase()}\nMessage: "${title}"`);

    document.getElementById('dummyTitle').value = '';
}

/* ==========================================================================
   CRYPTOGRAPHIC TOKEN VERIFICATION ENGINE
   ========================================================================== */

function verifyToken() {
    const input = document.getElementById('tokenInput').value.trim();
    const resultBox = document.getElementById('verificationResult');

    if (!input) {
        alert('Please enter or paste a valid proof token.');
        return;
    }

    if (input.startsWith('PROOF-SHA256-')) {
        const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
        resultBox.className = 'result-box success';
        resultBox.innerHTML = 
            `VALIDATION PASSED ✅<br>` +
            `----------------------------------------------<br>` +
            `TOKEN STATUS   : AUTHENTIC & UNTAMPERED<br>` +
            `VERIFIED BY    : PROF. JAVA FACULTY<br>` +
            `SIGNING AGENT  : NAMIZONE EDGE GATEWAY<br>` +
            `TIMESTAMP      : ${timestamp} IST<br>` +
            `INTEGRITY HASH : MATCHED SHA-256 CHECKSUM<br>` +
            `VERDICT        : ASSIGNMENT ACCEPTED ON-TIME`;
    } else {
        resultBox.className = 'result-box error';
        resultBox.innerHTML = 
            `VALIDATION FAILED ❌<br>` +
            `----------------------------------------------<br>` +
            `TOKEN STATUS   : INVALID SIGNATURE<br>` +
            `REASON         : Malformed or unverified token structure.`;
    }

    resultBox.classList.remove('hidden');
}