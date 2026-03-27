import { useState, useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Hero3DBackground from "../components/Hero3DBackground";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";
import Magnetic from "../components/Magnetic";
import Loader from "../components/Loader";
import CircularProjectsGallery from "../components/CircularProjectsGallery";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Tomamos los primeros 5 proyectos para el carrusel circular
  const carouselProjects = projects.slice(0, 5);

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

    lenis.scrollTo(0, { immediate: true });

    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) < 10) return;

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

            {/* 2. SELECTED WORK (ALINEADO A LA IZQUIERDA) */}
            <section id="portfolio-preview" className="snap-section relative w-full py-32 px-0 min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="w-full relative z-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInUp}
                  className="mb-8 md:mb-16 flex flex-col items-start text-left px-8 md:px-16 w-full max-w-7xl mx-auto"
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase text-white">
                    Selected Work
                  </h2>
                  <p className="text-white/60 max-w-2xl uppercase text-[11px] tracking-[0.25em]">
                    Drag to explore my curated 3D pieces.
                  </p>
                </motion.div>

                <div className="w-full">
                  <CircularProjectsGallery projects={carouselProjects} />
                </div>
              </div>
            </section>

            {/* 3. HOW I WORK - FASE 1 (NUEVA SECCIÓN INDEPENDIENTE) */}
            <section className="snap-section relative w-full py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden">
              <div className="w-full relative z-10 max-w-[90rem] mx-auto px-8 md:px-16">

                {/* Cabecera de la sección - Alineada a la derecha */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInUp}
                  className="mb-12 md:mb-20 flex flex-col items-end text-right w-full"
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase text-white">
                    How I Work
                  </h2>
                  <p className="text-white/60 max-w-2xl uppercase text-[11px] tracking-[0.25em]">
                    Behind the scenes: Modeling & Animation.
                  </p>
                </motion.div>

                {/* Fila 1: Vídeo a la izquierda (Gigante), Texto a la derecha */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[60%] relative group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-sm aspect-video shadow-2xl shrink-0"
                  >
                    <div className="absolute top-4 left-4 z-20 px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Phase 01
                    </div>
                    <video
                      src="/animation/TimeLapseCreacionRobot.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[40%] flex flex-col items-start text-left"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-6">
                      3D Modeling
                    </h3>
                    <p className="text-white/50 text-base md:text-lg leading-relaxed uppercase text-[11px] tracking-widest">
                      Every great project starts with a solid foundation. In this phase, raw geometry is sculpted into form. Careful attention to topology and edge flow ensures the model is perfectly optimized for the stages to come.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 4. HOW I WORK - FASE 2 (NUEVA SECCIÓN INDEPENDIENTE) */}
            <section className="snap-section relative w-full py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden">
              <div className="w-full relative z-10 max-w-[90rem] mx-auto px-8 md:px-16">

                {/* Fila 2: Texto a la izquierda, Vídeo a la derecha (Gigante) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[60%] relative group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-sm aspect-video shadow-2xl shrink-0"
                  >
                    <div className="absolute top-4 left-4 z-20 px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Phase 02
                    </div>
                    <video
                      src="/animation/TimeLapseModelando.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[40%] flex flex-col items-start lg:items-end text-left lg:text-right"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-6">
                      Animation
                    </h3>
                    <p className="text-white/50 text-base md:text-lg leading-relaxed uppercase text-[11px] tracking-widest">
                      Breathing life into static pixels. Through physics simulations, precise keyframing, and dynamic camera movements, the scene is transformed into an immersive and captivating visual experience.
                    </p>
                  </motion.div>
                </div>

              </div>
            </section>

            {/* 5. BOTÓN FINAL */}
            <div className="snap-section w-full h-[60vh] flex flex-col justify-end items-center pb-24">
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