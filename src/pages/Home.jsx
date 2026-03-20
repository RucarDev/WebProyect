import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import Hero3DBackground from "../components/Hero3DBackground";

import PageTransition from "../components/PageTransition";

import { projects } from "../data/projects";

import ParallaxBanner from "../components/ParallaxBanner";

import Magnetic from "../components/Magnetic";

import ProjectCard from "../components/ProjectCard";



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



              {/* GRID UNIFICADO: Mismo gap y columnas que en PortfolioPage */}

              <motion.div

                className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"

                initial="hidden"

                whileInView="visible"

                viewport={{ once: true, amount: 0.1 }}

                variants={{

                  hidden: { opacity: 0 },

                  visible: {

                    opacity: 1,

                    transition: { staggerChildren: 0.15 }

                  }

                }}

              >

                {previewProjects.map((project) => (

                  <motion.div

                    key={`work-${project.slug}`}

                    variants={{

                      hidden: { opacity: 0, y: 30 },

                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }

                    }}

                  >

                    {/* Usamos el componente oficial para mantener la consistencia visual */}

                    <ProjectCard project={project} />

                  </motion.div>

                ))}

              </motion.div>

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



            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true, amount: 0.1 }}

              variants={{

                hidden: { opacity: 0 },

                visible: {

                  opacity: 1,

                  transition: { staggerChildren: 0.2 }

                }

              }}

            >

              {otherProjects.map((project, idx) => (

                <motion.div

                  key={`banner-wrapper-${project.slug}-${idx}`}

                  variants={fadeInUp}

                >

                  <ParallaxBanner project={project} />

                </motion.div>

              ))}

            </motion.div>

          </section>



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

  );

}