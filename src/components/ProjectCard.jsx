import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <p className="text-sm uppercase tracking-widest opacity-60 mb-2">
          {project.category}
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          {project.title}
        </h2>

        <p className="opacity-75 text-sm">
          {project.description}
        </p>
      </div>
    </Link>
  );
}