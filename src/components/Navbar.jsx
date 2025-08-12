export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          📱 Orientation Detector
        </h1>

        {/* GitHub Link or Any Call-to-Action */}
        <a
          href="https://github.com/yourusername/yourrepo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white text-sm transition"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
