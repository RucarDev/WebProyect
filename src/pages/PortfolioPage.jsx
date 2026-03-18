import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PageHeader backgroundImage="/images/backImage2.jpg">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.85]">
          PORTFOLIO
        </h1>
        <p className="mt-6 text-[11px] md:text-xs text-white/70 tracking-[0.25em] max-w-2xl leading-loose">
          A curated selection of projects including hard surface, environments, animation and tracking.
        </p>
      </PageHeader>

      <section className="w-full px-8 md:px-16 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}