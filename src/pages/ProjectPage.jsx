import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ThreeDViewer from "../components/ThreeDViewer";
import PageTransition from "../components/PageTransition";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  const anim = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  return (
    <PageTransition>
      {/* Fondo blanco obligatorio para que las letras negras se vean */}
      <section className="bg-white min-h-screen text-black pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <motion.div initial="hidden" animate="visible" variants={anim} className="mb-20">
             <p className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-40 mb-2">
               {project.category}
             </p>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
               {project.title}
             </h1>
             <p className="text-xl opacity-70 max-w-2xl leading-relaxed">
               {project.description}
             </p>
          </motion.div>

          <div className="space-y-32">
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim}>
                <p className="text-[10px] uppercase font-bold mb-4 opacity-30">Technical Clay</p>
                <img src={project.clayRender} className="rounded-2xl w-full shadow-lg" alt="Clay" />
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim} transition={{ delay: 0.2 }}>
                <p className="text-[10px] uppercase font-bold mb-4 opacity-30">Technical Wireframe</p>
                <img src={project.wireframe} className="rounded-2xl w-full shadow-lg" alt="Wireframe" />
              </motion.div>
            </div>

            {project.hasViewer && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim}>
                <h2 className="text-[10px] uppercase font-bold opacity-30 text-center mb-8 tracking-[0.3em]">
                  Interactive 3D Preview
                </h2>
                <div className="h-[600px] w-full bg-neutral-50 rounded-[2rem] border border-black/5 shadow-inner overflow-hidden">
                  <ThreeDViewer modelPath={project.modelPath} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}