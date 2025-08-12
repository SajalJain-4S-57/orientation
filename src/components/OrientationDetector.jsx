import { useState, useEffect } from "react";
import AlarmClock from "./AlarmClock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Weather from "./Weather";

export default function OrientationDetector() {
  const [mode, setMode] = useState("");
  const [fadeKey, setFadeKey] = useState(0); // Trigger fade animation

  useEffect(() => {
    const updateOrientation = () => {
      const orientation = window.screen.orientation || {};
      const angle = orientation.angle ?? window.orientation ?? 0;
      const type = orientation.type ?? "";

      let newMode = "";
      if (type.includes("portrait") && angle === 0) newMode = "portrait-up";
      else if (type.includes("portrait") && angle === 180) newMode = "portrait-down";
      else if (type.includes("landscape") && (angle === 90 || angle === -270))
        newMode = "landscape-right";
      else if (type.includes("landscape") && (angle === -90 || angle === 270))
        newMode = "landscape-left";

      if (newMode !== mode) {
        setFadeKey((prev) => prev + 1); // Refresh fade animation
        setMode(newMode);
      }
    };

    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);
    return () => window.removeEventListener("orientationchange", updateOrientation);
  }, [mode]);

  // Background colors for each mode
  const modeColors = {
    "portrait-up": "bg-gradient-to-br from-green-500 via-emerald-600 to-green-800",
    "landscape-left": "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700",
    "portrait-down": "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
    "landscape-right": "bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-600",
  };

  return (
    <div
      key={fadeKey}
      className={`w-full max-w-md mx-auto p-4 rounded-lg shadow-lg text-white transition-opacity duration-500 ease-in-out ${modeColors[mode] || "bg-gray-800"}`}
    >
      {mode === "portrait-up" && <AlarmClock />}
      {mode === "landscape-left" && <Stopwatch />}
      {mode === "portrait-down" && <Timer />}
      {mode === "landscape-right" && <Weather />}

      {mode === "" && (
        <p className="text-center text-gray-200">
          📱 Rotate your device to explore features.
        </p>
      )}
    </div>
  );
}
