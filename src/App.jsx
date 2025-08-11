import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import OrientationDetector from "./components/OrientationDetector";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar />
      <main className="pt-6">
        <Hero />
        <Features />
        <OrientationDetector />
      </main>
      <Footer />
    </div>
  );
}
