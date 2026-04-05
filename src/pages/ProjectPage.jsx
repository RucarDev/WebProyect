import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import ThreeDViewer from "../components/ThreeDViewer";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // State to control which image/video is shown fullscreen
  const [fullscreenMedia, setFullscreenMedia] = useState(null);

  // Memoize suggested projects to avoid re-shuffling on every render
  const suggestedProjects = useMemo(() => {
    return projects
      .filter(p => p.slug !== slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [slug]);

  const anim = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  return (
  <PageTransition>
    {/* --- SEO Dynamic Tags --- */}
    <Helmet>
      <title>{project.title} - Rubén Padilla</title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={`${project.title} - Rubén Padilla`} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.cover} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="article" />
    </Helmet>

    {/* --- LIGHTBOX MODAL --- */}
    <AnimatePresence>
      {fullscreenMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setFullscreenMedia(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
        >
          {fullscreenMedia.type === "video" ? (
            <video
              src={fullscreenMedia.src}
              autoPlay loop muted playsInline
              className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
            />
          ) : (
            <img
              src={fullscreenMedia.src}
              alt="Fullscreen Preview"
              className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
            />
          )}

          {/* Close button for clarity */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 text-xs tracking-widest uppercase font-bold">
            Click anywhere to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Off-white natural background */}
    <section className="bg-[#F8F6F3] min-h-screen text-black pt-24 md:pt-32 pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div initial="hidden" animate="visible" variants={anim} className="mb-12 md:mb-20">
          <p className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-40 mb-2">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6 md:mb-8">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="text-[10px] md:text-xs px-3 py-1.5 rounded-md border border-black/20 bg-black/5 uppercase tracking-widest font-bold">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {(project.clayRender || project.clayVideo || project.wireframe) && (
            <div className={`grid ${project.wireframe && (project.clayRender || project.clayVideo) ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 md:gap-10`}>

              {/* Clay Render / Video */}
              {(project.clayRender || project.clayVideo) && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim}>
                  <p className="text-[10px] uppercase font-bold mb-4 opacity-30">
                    {project.clayVideo ? "Technical Clay Video" : "Technical Clay"}
                  </p>
                  <div className="relative w-full bg-black/5 rounded-2xl shadow-lg border border-black/5 overflow-hidden flex items-center justify-center h-[40vh] md:h-[60vh]">
                    {project.clayVideo ? (
                      <video
                        src={project.clayVideo}
                        autoPlay loop muted playsInline
                        onClick={() => setFullscreenMedia({ type: "video", src: project.clayVideo })}
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                      />
                    ) : (
                      <ImageWithSkeleton
                        src={project.clayRender}
                        alt="Clay render"
                        onClick={() => setFullscreenMedia({ type: "image", src: project.clayRender })}
                        className="absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                      />
                    )}
                  </div>
                </motion.div>
              )}

              {/* Wireframe */}
              {project.wireframe && (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim} transition={{ delay: 0.2 }}>
                  <p className="text-[10px] uppercase font-bold mb-4 opacity-30">Technical Wireframe</p>
                  <div className="relative w-full bg-black/5 rounded-2xl shadow-lg border border-black/5 overflow-hidden flex items-center justify-center h-[40vh] md:h-[60vh]">
                    <ImageWithSkeleton
                      src={project.wireframe}
                      alt="Wireframe render"
                      onClick={() => setFullscreenMedia({ type: "image", src: project.wireframe })}
                      className="absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Final Renders */}
          {project.finalRenders && project.finalRenders.length > 0 && (
            <div className="space-y-10 md:space-y-16 mt-10 md:mt-16">
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
                    <h2 className="text-[10px] uppercase font-bold opacity-30 text-center mb-4 md:mb-6 tracking-[0.3em]">
                      {isVideo ? "Final Render Video" : "Final Render"}
                    </h2>
                    <div className="relative w-full bg-black/5 rounded-xl md:rounded-[2rem] border border-black/5 shadow-inner overflow-hidden flex items-center justify-center h-[50vh] md:h-[70vh]">
                      {isVideo ? (
                        <video
                          src={file}
                          autoPlay loop muted playsInline
                          onClick={() => setFullscreenMedia({ type: "video", src: file })}
                          className="w-full h-full object-cover cursor-zoom-in transition-opacity hover:opacity-90"
                        />
                      ) : (
                        <ImageWithSkeleton
                          src={file}
                          alt={`Final Render ${index + 1}`}
                          onClick={() => setFullscreenMedia({ type: "image", src: file })}
                          className="absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity hover:opacity-90"
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {project.hasViewer && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim} className="mt-10 md:mt-16">
              <h2 className="text-[10px] uppercase font-bold opacity-30 text-center mb-6 md:mb-8 tracking-[0.3em]">
                Interactive 3D Preview
              </h2>
              <div className="h-[400px] md:h-[600px] w-full bg-neutral-50 rounded-xl md:rounded-[2rem] border border-black/5 shadow-inner overflow-hidden flex items-center justify-center cursor-move">
                <ThreeDViewer modelPath={project.modelPath} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Back to Portfolio button */}
        <div className="mt-20 md:mt-32 flex justify-center">
          <Link
            to="/portfolio"
            className="px-10 md:px-12 py-4 md:py-5 border border-black/20 text-black rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            Back to Portfolio
          </Link>
        </div>

      </div>

      {/* Suggested Projects Navigation */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-20 md:mt-32 border-t border-black/10 pt-14 md:pt-20 pb-14 md:pb-20">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mb-8 md:mb-10">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {suggestedProjects.map(p => (
            <ProjectCard key={p.slug} project={p} theme="light" />
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);
}