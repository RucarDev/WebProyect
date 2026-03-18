import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // IMPORTANTE: Añadimos Link
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(10px)",
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export default function Home() {
  const previewProjects = projects.slice(0, 3);

  return (
    <PageTransition>
      <main className="w-full bg-black">
        <Hero />

        <section id="portfolio-preview" className="relative w-full min-h-screen overflow-hidden">
          
          <div className="absolute inset-0 z-0">
            <img
              src="/images/backImage.jpg" 
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-32 text-white">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-50px" }}
              variants={fadeInUp}
              className="mb-16 flex flex-col items-start"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 uppercase">
                Selected Work
              </h2>
              <p className="opacity-60 max-w-2xl uppercase text-[11px] tracking-[0.25em] leading-loose">
                A curated selection of my 3D explorations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {previewProjects.map((project, index) => (
                <motion.article 
                  key={project.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8 
                  }}
                  // Añadimos hover:border-white/30 para dar feedback visual al pasar el ratón
                  className="group bg-neutral-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-white/5 hover:border-white/30 transition-colors duration-500"
                >
                  {/* AQUÍ ESTÁ LA MAGIA: Envolvemos el contenido en un Link hacia el slug del proyecto */}
                  <Link to={`/portfolio/${project.slug}`} className="block w-full h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.cover} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">{project.category}</p>
                      <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}