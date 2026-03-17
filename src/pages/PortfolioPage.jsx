import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Portfolio
      </h1>

      <p className="opacity-70 mb-10 max-w-2xl">
        A selection of projects including hard surface, environments,
        animation and tracking.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}