import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Hero3DBackground from "../components/Hero3DBackground";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";
import ParallaxBanner from "../components/ParallaxBanner";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  const previewProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <PageTransition>
      {/* Añadimos 'relative' para solucionar el warning de framer-motion */}
      <main className="w-full relative min-h-screen bg-[#020202]">

        {/* Capa del logo (Blanco Mate ahora mismo) */}
        <Hero3DBackground />

        <div className="relative z-10">
          <Hero />

          <section id="portfolio-preview" className="relative w-full py-32 px-8 md:px-16 text-white min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                className="mb-16 flex flex-col items-start"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase">
                  Selected Work
                </h2>
                <p className="opacity-60 max-w-2xl uppercase text-[11px] tracking-[0.25em]">
                  A curated selection of my 3D explorations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-10">
                {previewProjects.map((project, idx) => (
                  /* KEY ÚNICA corregida para evitar el error 'animations' */
                  <Link key={`work-${project.slug}-${idx}`} to={`/portfolio/${project.slug}`} className="group block h-full">
                    <div className="aspect-video overflow-hidden rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500 shadow-2xl">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-6">
                      <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">{project.category}</p>
                      <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full pb-80">
            <div className="max-w-7xl mx-auto px-8 md:px-16 mb-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-end text-right"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 uppercase text-white/90">
                  Explore More Projects
                </h2>
                <p className="text-white/60 uppercase text-[11px] tracking-[0.3em]">
                  Exploring different styles and techniques
                </p>
              </motion.div>
            </div>

            {otherProjects.map((project, idx) => (
              /* KEY ÚNICA corregida aquí también */
              <ParallaxBanner key={`banner-${project.slug}-${idx}`} project={project} />
            ))}
          </section>

          <div className="py-32 flex justify-center w-full">
            <Link
              to="/portfolio"
              className="px-12 py-4 border border-white/60 text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}