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

  return (
    <PageTransition>
      <PageHeader backgroundImage="/images/backImage.jpg">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.85]">
          PORTFOLIO
        </h1>
        <p className="mt-6 text-[11px] md:text-xs text-white/70 tracking-[0.25em] max-w-2xl leading-loose">
          A curated selection of projects including hard surface, environments, animation and tracking.
        </p>
      </PageHeader>

      <section className="w-full px-8 md:px-16 py-24">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}