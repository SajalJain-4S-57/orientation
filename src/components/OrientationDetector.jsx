{/* Desktop Testing Mode Switcher */}
{!isMobile && (
  <div className="mt-8 p-4 rounded-xl bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-lg">
    <p className="text-sm text-gray-300 mb-3 text-center">
      🖥 Desktop Test Mode – Simulate Device Orientation
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
