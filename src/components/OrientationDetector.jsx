import React, { useEffect, useState } from "react";
import AlarmClock from "./AlarmClock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Weather from "./Weather";

const OrientationDetector = () => {
  const [mode, setMode] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect orientation changes
  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    const handleOrientationChange = () => {
      const angle = window.screen.orientation?.angle ?? window.orientation ?? 0;

      if (angle === 0) setMode("portrait-up");
      else if (angle === 180) setMode("portrait-down");
      else if (angle === 90) setMode("landscape-right");
      else if (angle === 270 || angle === -90) setMode("landscape-left");
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange(); // Initial check

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  // Render based on orientation
  const renderContent = () => {
    switch (mode) {
      case "portrait-up":
        return <AlarmClock />;
      case "portrait-down":
        return <Timer />;
      case "landscape-left":
        return <Stopwatch />;
      case "landscape-right":
        return <Weather />;
      default:
        return (
          <div className="text-center text-gray-300 p-4 rounded bg-gray-800/50">
            📱 Rotate your device to explore features.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {renderContent()}

      {/* Desktop Testing Mode Switcher */}
      {!isMobile && (
        <div className="mt-8 p-4 rounded-xl bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-lg max-w-sm">
          <p className="text-sm text-gray-300 mb-3 text-center">
            🖥 Desktop Test Mode – Simulate Orientation
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMode("portrait-up")}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
            >
              📱 Portrait Up
              <span className="block text-xs text-gray-200">Alarm</span>
            </button>
            <button
              onClick={() => setMode("portrait-down")}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all shadow-md"
            >
              🔄 Portrait Down
              <span className="block text-xs text-gray-200">Timer</span>
            </button>
            <button
              onClick={() => setMode("landscape-left")}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-md"
            >
              📺 Landscape Left
              <span className="block text-xs text-gray-200">Stopwatch</span>
            </button>
            <button
              onClick={() => setMode("landscape-right")}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all shadow-md"
            >
              🌤 Landscape Right
              <span className="block text-xs text-gray-200">Weather</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrientationDetector;
