import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ThreeDViewer from "../components/ThreeDViewer";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="uppercase tracking-widest opacity-60 mb-3">
        {project.category}
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {project.title}
      </h1>

      <p className="text-lg opacity-80 mb-12 max-w-3xl">
        {project.description}
      </p>

      {/* FINAL RENDER */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          Final Render
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.finalRenders.map((img) => (
            <img
              key={img}
              src={img}
              alt={project.title}
              className="rounded-2xl w-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* WIREFRAME + CLAY */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Wireframe
          </h2>
          <img
            src={project.wireframe}
            alt="Wireframe"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Clay Render
          </h2>
          <img
            src={project.clayRender}
            alt="Clay Render"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* 3D VIEWER (OPTIONAL) */}
      {project.hasViewer && project.modelPath && (
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            3D Viewer
          </h2>
          <ThreeDViewer modelPath={project.modelPath} />
        </div>
      )}
    </section>
  );
}