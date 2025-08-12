import { useState, useEffect } from "react";

export default function AlarmClock() {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (alarmTime && !alarmTriggered) {
      const current = time.toTimeString().slice(0, 5);
      if (current === alarmTime) {
        setAlarmTriggered(true);
        alert("⏰ Alarm ringing!");
      }
    }
  }, [time, alarmTime, alarmTriggered]);

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">⏰ Alarm Clock</h2>
      <p className="text-5xl font-mono font-semibold">
        {time.toLocaleTimeString()}
      </p>
      <input
        type="time"
        className="bg-gray-900 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
        value={alarmTime}
        onChange={(e) => {
          setAlarmTime(e.target.value);
          setAlarmTriggered(false);
        }}
      />
    </div>
  );
}
