import { useEffect, useState } from "react";

export default function OrientationDetector() {
  const [mode, setMode] = useState("Unknown");

  useEffect(() => {
    // Function to map orientation type to human-readable mode
    const updateModeFromScreen = () => {
      if (window.screen.orientation) {
        const type = window.screen.orientation.type;
        switch (type) {
          case "portrait-primary":
            setMode("Portrait Up");
            break;
          case "portrait-secondary":
            setMode("Portrait Down");
            break;
          case "landscape-primary":
            setMode("Landscape Left");
            break;
          case "landscape-secondary":
            setMode("Landscape Right");
            break;
          default:
            setMode("Unknown");
        }
      }
    };

    // Function to map deviceorientation angles to modes
    const updateModeFromDevice = (event) => {
      const { beta, gamma } = event; // beta = front/back tilt, gamma = left/right tilt

      if (Math.abs(beta) < 45) {
        setMode(gamma > 0 ? "Landscape Left" : "Landscape Right");
      } else {
        setMode(beta > 0 ? "Portrait Up" : "Portrait Down");
      }
    };

    // Initial check from screen.orientation
    updateModeFromScreen();

    // Listen for orientation changes
    window.addEventListener("orientationchange", updateModeFromScreen);

    // Listen for deviceorientation events (more dynamic)
    window.addEventListener("deviceorientation", updateModeFromDevice);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("orientationchange", updateModeFromScreen);
      window.removeEventListener("deviceorientation", updateModeFromDevice);
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow mt-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Device Orientation
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Current Mode: <span className="font-bold">{mode}</span>
      </p>
    </div>
  );
}
