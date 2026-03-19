import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const uniqueCategories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const scrollToGrid = () => {
    const target = document.getElementById("projects-grid");
    if (!target) return;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    const duration = 1500;
    let start = null;
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startPos + distance * easeProgress);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  return (
    <PageTransition>
      <PageHeader 
        backgroundImage="/images/backImage.jpg"
        bottomContent={
          <button 
            onClick={scrollToGrid}
            className="animate-bounce w-14 h-14 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </button>
        }
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.85]">
          PORTFOLIO
        </h1>
        <p className="mt-6 text-[11px] md:text-xs text-white/70 tracking-[0.25em] max-w-2xl leading-loose">
          A curated selection of projects including hard surface, environments, animation and tracking.
        </p>
      </PageHeader>

      <section id="projects-grid" className="w-full px-8 md:px-16 py-24 min-h-screen">
        {/* Tabs de Filtro Animados */}
        <div className="flex flex-wrap gap-2 mb-16 justify-center bg-black/5 p-2 rounded-full border border-black/5 mx-auto w-fit">
          {uniqueCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors z-10"
            >
              <span className={`relative z-20 transition-colors duration-300 ${activeTab === cat ? 'text-white' : 'text-black/60 hover:text-black'}`}>
                {cat}
              </span>
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab} // <-- ESTO REINICIA LA ANIMACIÓN AL CAMBIAR DE PESTAÑA
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}