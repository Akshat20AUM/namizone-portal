# ⚡ NAMIZONE  —  Intelligent Academic & Learning Management Portal

A modern, responsive University Academic & Assignment Management Ecosystem designed to resolve connectivity drops, streamline faculty-student communication, and provide client-side intelligence.

---

## 🚀 Key Features

- **🛡️ AI Guardian Telemetry Diagnostics:** Real-time client-side network latency (ping), RSSI estimation, and adaptive connection status monitoring.
- **🧠 TensorFlow.js Adaptive QoS Compression:** In-browser machine learning model that dynamically predicts and compresses assignments (PDFs and images) to ensure reliable submissions during low-bandwidth conditions.
- **⚡ Real-Time Faculty Broadcasts:** Instant cross-tab notification system for live class status (`Started` / `Concluded`), pop quizzes, and new assignment releases using browser synchronization.
- **📚 AMS (Academics & Syllabus Directory):** Detailed course catalog with unit-wise demo syllabus breakdowns, progress tracking, and scheduled internal assessment timelines.
- **👥 Faculty Gateway & Attendance Portal:** Dedicated interface for faculty to manage live sessions, take student attendance rosters, publish coursework, and verify cryptographic submission proof tokens.
- **🌓 Persistent Dark/Night Mode:** Complete dark theme toggle integrated across the student dashboard, LMS, and faculty gateway.
- **🤖 Built-in AI Assistant Chatbot:** Floating student assistant tracking pending assignments, submission deadlines, and portal tools.

---

## 📂 Project Architecture

```text
├── dashboard.html          # Student Dashboard (Telemetry, widgets, TensorFlow gateway)
├── dashboard-style.css     # Main Dashboard styling & Dark Mode themes
├── dashboard.js            # Telemetry diagnostics, TF.js model & real-time sync listeners
├── faculty-dashboard.html  # Faculty Gateway (Live classes, attendance roster, publisher)
├── faculty.css             # Faculty interface styling & Night Mode rules
├── faculty.js              # Faculty broadcast dispatcher & token validator
├── lms.html                # Academics & LMS (Course catalog & syllabus breakdown)
├── lms.css                 # LMS styling & responsive layout
├── lms.js                  # LMS script & theme persistence
└── README.md               # Project documentation
