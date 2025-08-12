import { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-blue-400 drop-shadow">
        ⏱ Stopwatch
      </h2>

      {/* Time Display */}
      <p className="text-6xl font-mono font-semibold text-white">
        {formatTime(time)}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Pause
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
