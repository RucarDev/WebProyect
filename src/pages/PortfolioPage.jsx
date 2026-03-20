import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const PortfolioVideo = lazy(() => import("../components/PortfolioVideo"));

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const uniqueCategories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const scrollToGrid = () => {
    const target = document.getElementById("projects-grid");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      {/* 1. CONTENEDOR RAIZ: Fondo negro puro para evitar destellos blancos */}
      <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

        {/* 2. FONDO FIJO: El video y el overlay son una sola pieza que NO se mueve */}
        <div className="fixed inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
            <PortfolioVideo />
          </Suspense>

          {/* OVERLAY UNIFORME: Oscurece el video por igual en toda la pantalla para eliminar cortes */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 3. CONTENIDO SCROLLEABLE */}
        <div className="relative z-10">

          {/* HEADER TRANSPARENTE: Asegúrate que PageHeader.jsx no tenga "bg-black" o similares */}
          <PageHeader
            className="bg-transparent shadow-none border-none"
            bottomContent={
              <button
                onClick={scrollToGrid}
                className="animate-bounce w-14 h-14 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            }
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              PORTFOLIO
            </h1>
            <p className="mt-6 text-[11px] md:text-xs text-white/60 tracking-[0.25em] max-w-2xl leading-loose uppercase">
              A curated selection of projects including hard surface, environments, animation and tracking.
            </p>
          </PageHeader>

          {/* GRID DE PROYECTOS: Sin fondos adicionales para que el video fluya */}
          <section id="projects-grid" className="w-full px-8 md:px-16 py-32 bg-transparent">

            {/* TABS */}
            <div className="flex flex-wrap gap-2 mb-24 justify-center bg-white/5 p-1.5 rounded-full border border-white/10 mx-auto w-fit backdrop-blur-md">
              {uniqueCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="relative px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors z-10"
                >
                  <span className={`relative z-20 transition-colors duration-300 ${activeTab === cat ? 'text-black' : 'text-white/50 hover:text-white'}`}>
                    {cat}
                  </span>
                  {activeTab === cat && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* GRID */}
            <motion.div
              key={activeTab}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}