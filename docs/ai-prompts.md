# 🤖 AI Prompt Log

This file records all prompts given to AI tools (ChatGPT, Cursor.ai) during the development of the Orientation Detector Web App.

---

## 📅 Day 1 – Project Setup
**Prompt:**  
*"Generate a mobile-first HTML boilerplate and Tailwind CSS config for React + Vite project"*  
✅ **Outcome:** Used for initial responsive setup.  
❌ **Failures:** First attempt had missing Tailwind directives.

---

## 📅 Day 2 – Orientation Detection
**Prompt:**  
*"Generate orientation detection code for Portrait Up, Portrait Down, Landscape Left, Landscape Right in React"*  
✅ **Outcome:** Successfully implemented using `window.screen.orientation` & `deviceorientation` events.  
❌ **Failures:** Early version only worked on Chrome, fixed with cross-browser handling.

---

## 📅 Day 3 – AI Tools for Development
**Prompt:**  
*"Build UI components for AlarmClock, Stopwatch, Timer, Weather using TailwindCSS"*  
✅ **Outcome:** Fully functional and responsive components.  
❌ **Failures:** Stopwatch formatting issues; Timer countdown glitch on Enter key.

---

## 📅 Day 4 & 5 – Features & Transitions
**Prompt:**  
*"Add smooth fade-in animation in Tailwind when switching features based on orientation"*  
✅ **Outcome:** Used `animate-fadeIn` for smooth transitions.  
❌ **Failures:** Animation re-triggered unnecessarily on minor device tilts (fixed by debouncing orientation updates).