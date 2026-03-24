import { useState, useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
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
  const [isLoading, setIsLoading] = useState(true);
  const previewProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  const lenis = useLenis();
  const isScrolling = useRef(false);

  // --- PREVENIR SCROLL FANTASMA DEL NAVEGADOR ---
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // --- MOTOR DE SALTO DE SECCIÓN ---
  useEffect(() => {
    if (!lenis || isLoading) return;

    // Forzamos a Lenis a ir arriba del todo sin animación justo al cargar
    lenis.scrollTo(0, { immediate: true });

    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      // AUMENTO DE SENSIBILIDAD: Exigimos un scroll más fuerte (antes 15, ahora 45)
      if (Math.abs(e.deltaY) < 15) return;

      const sections = Array.from(document.querySelectorAll('.snap-section'));
      const currentScroll = window.scrollY;
      let targetSection = null;

      if (e.deltaY > 0) {
        targetSection = sections.find(sec => sec.offsetTop > currentScroll + 10);
      } else {
        targetSection = [...sections].reverse().find(sec => sec.offsetTop < currentScroll - 10);
      }

      if (targetSection) {
        e.preventDefault();
        isScrolling.current = true;
        
        lenis.scrollTo(targetSection, {
          duration: 1.2,
          lock: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          onComplete: () => {
            setTimeout(() => {
              isScrolling.current = false;
            }, 150);
          }
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    return () => window.removeEventListener("wheel", handleWheel, { capture: true });
  }, [lenis, isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="main-loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <PageTransition>
        <main className={`w-full relative min-h-screen bg-[#020202] overflow-x-hidden text-white ${isLoading ? "h-screen overflow-hidden" : ""}`}>

          <Hero3DBackground />

          <div className="relative z-10">
            {/* 1. HERO */}
            <div className="snap-section min-h-screen flex items-center justify-center">
              <Hero />
            </div>

            {/* 2. SELECTED WORK */}
            <section id="portfolio-preview" className="snap-section relative w-full py-32 px-8 md:px-16 min-h-screen">
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

            {/* 3. EXPLORE MORE (Ahora dividido por elementos) */}
            <section className="w-full pb-40">
              <div className="max-w-7xl mx-auto px-8 md:px-16">
                
                {/* Parada 3.1: Título de la sección */}
                <div className="snap-section mb-10 text-right min-h-[50vh] flex flex-col justify-end pb-20">
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

                {/* Parada 3.2+: Proyectos individuales (cada uno es una parada) */}
                <div className="flex flex-col items-end">
                  {otherProjects.map((project, idx) => (
                    <motion.div
                      key={`explore-card-${project.slug}-${idx}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      className="snap-section w-full max-w-4xl min-h-[90vh] flex items-center py-10"
                    >
                      <Link to={`/portfolio/${project.slug}`} className="group block w-full">
                        <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                          <div className="p-4 md:p-6">
                            <div className="relative aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-xl bg-black">
                              <img
                                src={project.cover}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
                                <div className="px-8 py-3.5 border border-white/30 group-hover:border-white/80 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] bg-white/5 group-hover:bg-white/20 backdrop-blur-md transition-all duration-300">
                                  Explore Project
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 p-8 rounded-xl bg-white/[0.04] border border-white/5 backdrop-blur-md text-right transition-all duration-500 group-hover:bg-white/[0.07]">
                              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 font-medium">{project.category}</p>
                              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white mb-4">{project.title}</h3>
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

            {/* 4. BOTÓN FINAL */}
            <div className="snap-section py-32 flex justify-center w-full min-h-[60vh] items-center">
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