# 📱 Orientation Detector Web App

An AI-first, mobile-friendly web application that detects **how a user is holding their mobile device** and displays different features based on orientation:

- **Portrait Mode (Upright)** → ⏰ Alarm Clock  
- **Landscape Mode (Right-Side Up)** → ⏱ Stopwatch  
- **Portrait Mode (Upside Down)** → ⏳ Timer  
- **Landscape Mode (Left-Side Up)** → 🌤 Weather of the Day  

Built with **React + Vite + Tailwind CSS** and enhanced using **AI-assisted development**.

---

## 🚀 Live Demo
[**View on Vercel**](https://orientation-1kqoxa0ze-jsajal8103-6516s-projects.vercel.app/)

---

## 🛠 Tech Stack
- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap (Free Tier)
- **AI Tools Used:** ChatGPT, Cursor.ai
- **Hosting:** Vercel

---

## 📂 Features
1. **Device Orientation Detection** – Detects device orientation and instantly switches between features.
2. **Alarm Clock** – Set alarms and get alerts when time is reached.
3. **Stopwatch** – Start, pause, and reset timer.
4. **Timer** – Countdown from user input with alert when finished.
5. **Weather Search** – View weather of any city with live search.

---

## ⚡ Quick Start

```bash
# Clone repo
git clone https://github.com/SajalJain-4S-57/orientation
cd orientation

# Install dependencies
npm install

# Create .env file
VITE_OPENWEATHER_API_KEY=your_api_key
VITE_DEFAULT_CITY=your_city_name

# Run development server
npm run dev
