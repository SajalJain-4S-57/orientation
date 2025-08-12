import { useState, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [input, setInput] = useState("");
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (seconds > 0 && !running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current);
            setRunning(false);
            alert("⏳ Time's up!");
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
  };

  const handleSet = () => {
    const val = parseInt(input);
    if (!isNaN(val) && val > 0) setSeconds(val);
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">⏳ Timer</h2>
      <p className="text-5xl font-mono font-semibold">
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
      </p>
      <input
        type="number"
        placeholder="Seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex gap-3 justify-center">
        <button onClick={handleSet} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
          Set
        </button>
        <button onClick={start} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
          Start
        </button>
        <button onClick={reset} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
}
