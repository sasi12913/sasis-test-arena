# UPSC Civil Services Preliminary Examination Mock Test Platform

A professional, high-fidelity Web Application designed to simulate the real UPSC Civil Services Preliminary Examination (GS Paper-I). Built using Vanilla HTML5, Vanilla CSS3, and ES6 JavaScript.

## Core Features

1. **UPSC Standard Question Engine:** Generates exactly 50 fresh questions per test, drawing 10 questions per subject across:
   - Indian Polity & Governance
   - Indian Economy & Development
   - Geography (Physical & Indian)
   - Environment & Ecology
   - History & Indian Culture
2. **Real Exam Interface:** Features a 2-Hour Timer, candidate profile card, previous/next buttons, "Mark for Review" toggles, and an interactive 50-question palette with visual color coding.
3. **Advanced Performance Analytics:** Real-time marking (+2 for correct, -0.66 for incorrect, 0 for unattempted), overall accuracy metrics, and subject-wise score profiles with visual progress bars.
4. **AI-Powered Diagnostics:**
   - **Weak Area Detection:** Classifies concepts into Strong, Moderate, and Weak based on performance.
   - **UPSC Readiness Score & Stage:** Rates your progress (Beginner, Foundation, Competitive, Serious, or Interview Potential).
   - **AIR Prediction:** Forecasts All India Rank ranges based on cutoff dynamics.
   - **AI Mentor feedback:** Customized qualitative tips on guessing behaviors, speed, and accuracy.
5. **PDF Report Downloader:** Automatically exports a gold-themed, structured report card detailing scores, subject breakdown, and AI Mentor feedback.
6. **Dark & Light Mode:** Toggleable premium interface.

---

## How to Run the Application

Since this is a client-side Single Page Application (SPA), it does not require complex compile steps or server dependencies. You can run it instantly using any static file server.

### Option 1: Python HTTP Server (Recommended)
Open your terminal inside this directory and run:
```bash
python -m http.server 8000
```
Then, open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Live Server (VS Code Extension)
Right-click on `index.html` and choose **"Open with Live Server"**.

### Option 3: Double-click index.html
You can open the `index.html` file directly in your web browser. Note: For full Chart.js and jsPDF functionality, loading via a local web server (Option 1 or 2) is recommended.

---

## Technical Details

- **index.html**: Structural markup, modal views, palette controls, results dashboards, and CDN scripts.
- **styles.css**: UPSC administrative visual theme, responsive grids, color palette rules, and animations.
- **questions.js**: Question database containing 100 high-fidelity statement-based, matching, and conceptual questions.
- **app.js**: Client-side state manager, score evaluator, diagnostic categorizer, and PDF builder.
