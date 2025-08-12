import { useState, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [input, setInput] = useState("");
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (seconds > 0 && !running) {
      setRunning(true);
      setFinished(false);
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current);
            setRunning(false);
            setFinished(true);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setSeconds(0);
    setInput("");
    setFinished(false);
  };

  const handleSet = () => {
    const val = parseInt(input);
    if (!isNaN(val) && val > 0) {
      setSeconds(val);
      setFinished(false);
    }
  };

  // Format MM:SS
  const formatTime = (sec) => {
    const mins = String(Math.floor(sec / 60)).padStart(2, "0");
    const secs = String(sec % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-purple-400 drop-shadow">
        ⏳ Timer
      </h2>

      {/* Time Display */}
      <p className="text-6xl font-mono font-semibold text-white">
        {formatTime(seconds)}
      </p>

      {/* Input for Seconds */}
      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 transition-all w-48"
      />

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={handleSet}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Set
        </button>
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Start
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          Reset
        </button>
      </div>

      {/* Finished Message */}
      {finished && (
        <p className="text-lg font-bold text-red-500 animate-pulse mt-3">
          ⏰ Time's up!
        </p>
      )}
    </div>
  );
}
