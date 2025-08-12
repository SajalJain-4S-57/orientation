import { useState, useEffect } from "react";

export default function AlarmClock() {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Check alarm match
  useEffect(() => {
    if (alarmTime && !alarmTriggered) {
      const current = time.toTimeString().slice(0, 5);
      if (current === alarmTime) {
        setAlarmTriggered(true);
        // Play a simple beep
        const beep = new Audio(
          "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        );
        beep.play().catch(() => {});
      }
    }
  }, [time, alarmTime, alarmTriggered]);

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <h2 className="text-3xl font-bold text-green-400 drop-shadow">
        ⏰ Alarm Clock
      </h2>

      {/* Current Time */}
      <p className="text-6xl font-mono font-semibold text-white">
        {time.toLocaleTimeString()}
      </p>

      {/* Alarm Input */}
      <div className="flex flex-col items-center space-y-3">
        <input
          type="time"
          className="bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 transition-all"
          value={alarmTime}
          onChange={(e) => {
            setAlarmTime(e.target.value);
            setAlarmTriggered(false);
          }}
        />
        {alarmTime && !alarmTriggered && (
          <p className="text-sm text-gray-300">
            Alarm set for <span className="font-bold">{alarmTime}</span>
          </p>
        )}
        {alarmTriggered && (
          <p className="text-lg font-bold text-red-500 animate-pulse">
            🚨 Alarm Ringing!
          </p>
        )}
      </div>
    </div>
  );
}
