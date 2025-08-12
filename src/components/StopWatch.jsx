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

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">⏱ Stopwatch</h2>
      <p className="text-5xl font-mono font-semibold">
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
      </p>
      <div className="flex gap-3 justify-center">
        <button onClick={start} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
          Start
        </button>
        <button onClick={stop} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg">
          Stop
        </button>
        <button onClick={reset} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
}
