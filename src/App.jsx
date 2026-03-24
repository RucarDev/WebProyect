import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  // Hook para detectar el cambio de ruta
  const location = useLocation();

  return (
    // App.jsx - Solo cambiamos las opciones de ReactLenis
<ReactLenis root options={{
  lerp: 0.05, // Bajamos un poco para que el salto sea más limpio
  duration: 1.5,
  smoothTouch: true,
  syncTouch: false, // Cambiamos a false para que no bloquee eventos nativos en móviles
  wheelMultiplier: 1.0,
  touchInertiaMultiplier: 1.5,
}}>
      <div className="bg-background text-primary min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />

        <main className="flex-grow">
          {/* AnimatePresence gestiona la entrada y salida de componentes */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:slug" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;