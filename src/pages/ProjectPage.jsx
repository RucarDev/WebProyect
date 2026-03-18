import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ThreeDViewer from "../components/ThreeDViewer";
import PageTransition from "../components/PageTransition";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-tighter">Project not found</h1>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-6 py-32">
        {/* HEADER SECTION */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-50 mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 uppercase">
            {project.title}
          </h1>
          <p className="text-xl opacity-80 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-32">
          
          {/* ENVIRONMENT PROCESS SECTION (Rutas corregidas según tu imagen) */}
          <div className="space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-center">Environment Showcase</h2>
            
            {/* Render Principal */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <img 
                src="/models/enviroments/RenderUp10MB.png" 
                alt="Main Environment Render" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Grid de Proceso (Clay y Wireframe de la carpeta enviroments) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[9px] uppercase tracking-widest opacity-30">Technical Clay</p>
                <img 
                  src="/models/enviroments/RenderUpArcilla10MB.png" 
                  className="rounded-xl w-full opacity-80" 
                  alt="Clay"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[9px] uppercase tracking-widest opacity-30">Technical Wireframe</p>
                <img 
                  src="/models/enviroments/RenderUpWireframe10MB.png" 
                  className="rounded-xl w-full opacity-80" 
                  alt="Wireframe"
                />
              </div>
            </div>
          </div>

          {/* FINAL RENDERS DEL PROYECTO (Los que vienen de data/projects.js) */}
          {project.finalRenders && project.finalRenders.length > 0 && (
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 opacity-40 text-center">Additional Shots</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.finalRenders.map((img) => (
                  <img key={img} src={img} alt="Gallery" className="rounded-xl w-full object-cover shadow-xl" />
                ))}
              </div>
            </div>
          )}

          {/* 3D VIEWER */}
          {project.hasViewer && project.modelPath && (
            <div className="pt-12 space-y-10">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-center">3D Interactive Model</h2>
              <div className="h-[600px] w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-inner border border-white/5">
                <ThreeDViewer modelPath={project.modelPath} />
              </div>
            </div>
          )}
          
        </div>
      </section>
    </PageTransition>
  );
}