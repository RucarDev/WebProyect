import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Hero3DBackground from "../components/Hero3DBackground";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";
import Magnetic from "../components/Magnetic";
import ProjectCard from "../components/ProjectCard";
import Loader from "../components/Loader";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Lógica del Loader
  const previewProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <>
      {/* 1. SISTEMA DE LOADER */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="main-loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <PageTransition>
        {/* 2. BLOQUEO DE SCROLL MIENTRAS CARGA */}
        <main className={`w-full relative min-h-screen bg-[#020202] overflow-x-hidden text-white ${isLoading ? "h-screen overflow-hidden" : ""}`}>

          <Hero3DBackground />

          <div className="relative z-10">
            <Hero />

            {/* SECCIÓN: SELECTED WORK (Grid Estándar 3 Columnas) */}
            <section id="portfolio-preview" className="relative w-full py-32 px-8 md:px-16 min-h-screen">
              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInUp}
                  className="mb-16 flex flex-col items-start"
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase text-white">
                    Selected Work
                  </h2>
                  <p className="text-white/60 max-w-2xl uppercase text-[11px] tracking-[0.25em]">
                    A curated selection of my 3D explorations.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                  {previewProjects.map((project) => (
                    <motion.div
                      key={`work-${project.slug}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={fadeInUp}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN: EXPLORE MORE (Estilo Clon ProjectCard: con descripción y botón persistente) */}
            <section className="w-full pb-80">
              <div className="max-w-7xl mx-auto px-8 md:px-16">

                {/* Título alineado a la derecha */}
                <div className="mb-20 text-right">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 uppercase text-white">
                      Explore More Projects
                    </h2>
                    <p className="text-white/70 uppercase text-[11px] tracking-[0.3em]">
                      Exploring different styles and techniques
                    </p>
                  </motion.div>
                </div>

                {/* Contenedor de tarjetas alineadas a la derecha */}
                <div className="flex flex-col items-end space-y-24">
                  {otherProjects.map((project, idx) => (
                    <motion.div
                      key={`explore-card-${project.slug}-${idx}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      className="w-full max-w-4xl"
                    >
                      <Link to={`/portfolio/${project.slug}`} className="group block w-full">

                        {/* 1. CONTENEDOR GLOBAL (Marco con borde y fondo sutil) */}
                        <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">

                          <div className="p-4 md:p-6">

                            {/* 2. CONTENEDOR DE IMAGEN CON BOTÓN SIEMPRE VISIBLE */}
                            <div className="relative aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-xl bg-black">
                              <img
                                src={project.cover}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                              />

                              {/* Botón Central: Siempre visible, se ilumina en hover */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
                                <div className="px-8 py-3.5 border border-white/30 group-hover:border-white/80 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] bg-white/5 group-hover:bg-white/20 backdrop-blur-md transition-all duration-300">
                                  Explore Project
                                </div>
                              </div>
                            </div>

                            {/* 3. BLOQUE DE TEXTO (Fondo traslúcido con Título + Descripción) */}
                            <div className="mt-6 p-8 rounded-xl bg-white/[0.04] border border-white/5 backdrop-blur-md text-right transition-all duration-500 group-hover:bg-white/[0.07]">
                              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 font-medium">
                                {project.category}
                              </p>

                              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white mb-4">
                                {project.title}
                              </h3>

                              {/* DESCRIPCIÓN */}
                              <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl ml-auto uppercase text-[11px] tracking-widest">
                                {project.description || "Exploring the boundaries of 3D design and digital art."}
                              </p>
                            </div>

                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* BOTÓN FINAL */}
            <div className="py-32 flex justify-center w-full">
              <Magnetic>
                <Link
                  to="/portfolio"
                  className="px-12 py-5 border border-white/40 text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all bg-white/5 backdrop-blur-md"
                >
                  View Full Portfolio
                </Link>
              </Magnetic>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  );
}