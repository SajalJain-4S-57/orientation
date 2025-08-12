import { useState, useEffect } from "react";
import AlarmClock from "./AlarmClock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Weather from "./Weather";

export default function OrientationDetector() {
  const [orientation, setOrientation] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    function detectOrientation() {
      if (window.screen.orientation) {
        const type = window.screen.orientation.type;
        updateMode(type);
      }
    }

    function handleDeviceOrientation(event) {
      // Fallback for iOS Safari
      if (event.beta !== null && event.gamma !== null) {
        if (Math.abs(event.gamma) < 10) {
          setMode("Portrait Up");
        } else if (event.gamma > 80) {
          setMode("Landscape Right");
        } else if (event.gamma < -80) {
          setMode("Landscape Left");
        }
      }
    }

    function updateMode(type) {
      if (type.includes("portrait-primary")) setMode("Portrait Up");
      else if (type.includes("portrait-secondary")) setMode("Portrait Down");
      else if (type.includes("landscape-primary")) setMode("Landscape Right");
      else if (type.includes("landscape-secondary")) setMode("Landscape Left");
    }

    detectOrientation();

    window.addEventListener("orientationchange", detectOrientation);
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("orientationchange", detectOrientation);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const renderModeComponent = () => {
    switch (mode) {
      case "Portrait Up":
        return <AlarmClock />;
      case "Landscape Left":
        return <Stopwatch />;
      case "Portrait Down":
        return <Timer />;
      case "Landscape Right":
        return <Weather />;
      default:
        return (
          <p className="text-center mt-6 text-gray-300">
            📱 Rotate your device to see different features.
          </p>
        );
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 to-black transition-all duration-500">
      <p className="text-gray-400 mb-8">
        Current Mode:{" "}
        <span className="text-green-400 font-semibold">{mode || "Detecting..."}</span>
      </p>
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg animate-fadeIn">
        {renderModeComponent()}
      </div>
    </div>
  );
}
