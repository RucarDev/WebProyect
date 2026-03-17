import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import SobrePage from "./pages/AboutPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="bg-background text-primary min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;