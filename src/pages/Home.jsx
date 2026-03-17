import Hero from "../components/Hero";
import { projects } from "../data/projects";

export default function Home() {
  const previewProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Preview section with 3 designs */}
      <section
        id="portfolio-preview"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Selected Work
        </h2>
        <p className="opacity-70 mb-10 max-w-2xl">
          A quick look at some recent projects. Visit the portfolio section to
          see more details.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <article
              key={project.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide opacity-60 mb-1">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}