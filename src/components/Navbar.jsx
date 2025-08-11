import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Close mobile menu automatically if viewport becomes >= md
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Hackathon
            </h1>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Home
            </a>
            <a href="#features" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Features
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded text-gray-700 dark:text-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((s) => !s)}
            >
              <span className="sr-only">Toggle menu</span>
              {/* simple icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div className="md:hidden">
        <ul
          id="mobile-menu"
          className={`absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-md mx-4 rounded-b-lg overflow-hidden menu-transition z-40
            ${menuOpen ? "max-h-60" : "max-h-0"}`}
        >
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
