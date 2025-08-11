export default function Hero() {
  return (
    <section
      id="home"
      className="py-16 bg-blue-100 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Build Fast. Impress Judges.
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl">
            Your hackathon MVP starts here. Mobile-first design, scales to laptop and desktop.
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Illustration placeholder on wider screens */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-full max-w-sm">
            {/* simple SVG so no external requests break dev server */}
            <svg viewBox="0 0 200 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" rx="12" fill="#ffffff" opacity="0.06"></rect>
              <g fill="#3b82f6" opacity="0.9">
                <circle cx="60" cy="60" r="35"></circle>
                <rect x="110" y="30" width="60" height="60" rx="10"></rect>
                <rect x="40" y="120" width="120" height="40" rx="8"></rect>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
