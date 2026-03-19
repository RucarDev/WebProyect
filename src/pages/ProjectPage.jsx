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
      {/* Fondo off-white natural */}
      <section className="bg-[#F8F6F3] min-h-screen text-black pt-32 pb-20 px-6">
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
            {(project.clayRender || project.clayVideo || project.wireframe) && (
              <div className={`grid ${project.wireframe && (project.clayRender || project.clayVideo) ? 'md:grid-cols-2' : 'grid-cols-1'} gap-10`}>
                {(project.clayRender || project.clayVideo) && (
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim}>
                    <p className="text-[10px] uppercase font-bold mb-4 opacity-30">
                      {project.clayVideo ? "Technical Clay Video" : "Technical Clay"}
                    </p>
                    {project.clayVideo ? (
                      <video src={project.clayVideo} autoPlay loop muted playsInline className="rounded-2xl w-full shadow-lg" />
                    ) : (
                      <img src={project.clayRender} className="rounded-2xl w-full shadow-lg" alt="Clay" />
                    )}
                  </motion.div>
                )}
                
                {project.wireframe && (
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim} transition={{ delay: 0.2 }}>
                    <p className="text-[10px] uppercase font-bold mb-4 opacity-30">Technical Wireframe</p>
                    <img src={project.wireframe} className="rounded-2xl w-full shadow-lg" alt="Wireframe" />
                  </motion.div>
                )}
              </div>
            )}

            {project.finalRenders && project.finalRenders.length > 0 && (
              <div className="space-y-16 mt-16">
                {project.finalRenders.map((file, index) => {
                  const isVideo = file.match(/\.(mp4|webm|ogg|mov)$/i);
                  return (
                    <motion.div 
                      key={index} 
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{ once: true, margin: "-100px" }} 
                      variants={anim}
                    >
                      <h2 className="text-[10px] uppercase font-bold opacity-30 text-center mb-6 tracking-[0.3em]">
                        {isVideo ? "Final Render Video" : "Final Render"}
                      </h2>
                      <div className="w-full bg-black/5 rounded-[2rem] border border-black/5 shadow-inner overflow-hidden flex items-center justify-center">
                        {isVideo ? (
                          <video src={file} autoPlay loop muted playsInline className="w-full h-auto object-cover max-h-[80vh]" />
                        ) : (
                          <img src={file} alt={`Final Render ${index + 1}`} className="w-full h-auto object-cover max-h-[80vh]" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
            
            {project.hasViewer && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim} className="mt-16">
                <h2 className="text-[10px] uppercase font-bold opacity-30 text-center mb-8 tracking-[0.3em]">
                  Interactive 3D Preview
                </h2>
                <div className="h-[600px] w-full bg-neutral-50 rounded-[2rem] border border-black/5 shadow-inner overflow-hidden flex items-center justify-center">
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