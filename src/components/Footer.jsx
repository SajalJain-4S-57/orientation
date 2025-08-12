export default function Footer() {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-md shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-300 text-sm">
        <p>
          Built with ❤️ using React, Vite, TailwindCSS & AI Assistance
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} Sajal Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
