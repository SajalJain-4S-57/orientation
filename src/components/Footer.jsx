export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-gray-800 dark:text-gray-200">&copy; {new Date().getFullYear()} Hackathon Team</p>
      </div>
    </footer>
  );
}
