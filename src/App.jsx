import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrientationDetector from "./components/OrientationDetector";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <OrientationDetector />
      </main>
      <Footer />
    </div>
  );
}
