import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Code-split pages for smaller initial bundle (Suggestion #6)
const Home = lazy(() => import("./pages/Home"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  // Hook to detect route changes
  const location = useLocation();

  return (
    // Smooth scroll wrapper with Lenis
    <ReactLenis root options={{
      lerp: 0.05, // Lower value for cleaner snap transitions
      duration: 1.5,
      smoothTouch: true,
      syncTouch: false, // Disabled to avoid blocking native touch events on mobile
      wheelMultiplier: 1.0,
      touchInertiaMultiplier: 1.5,
    }}>
      <div className="bg-background text-primary min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />

        <main className="flex-grow">
          {/* Suspense fallback while chunks load */}
          <Suspense fallback={
            <div className="min-h-screen bg-[#020202] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          }>
            {/* AnimatePresence manages component enter/exit animations */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:slug" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* 404 — Catch-all route for unknown paths */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

// Simple 404 page component (Suggestion #3)
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-[20vw] md:text-[15vw] font-black tracking-tighter leading-none opacity-10">404</h1>
      <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] -mt-8 mb-4">Page Not Found</p>
      <p className="text-white/50 text-sm mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="px-10 py-4 border border-white/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
        Back to Home
      </a>
    </div>
  );
}

export default App;