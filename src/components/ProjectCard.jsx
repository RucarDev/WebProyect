import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-black/5 bg-transparent hover:bg-black/5 transition-all duration-500 pb-2"
    >
      <div className="h-[22rem] overflow-hidden rounded-2xl m-2 bg-neutral-100">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      <div className="p-6 pt-4 text-black">
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">
          {project.category}
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-2 uppercase leading-none">
          {project.title}
        </h2>

        <p className="opacity-70 text-xs md:text-sm leading-relaxed max-w-sm">
          {project.description}
        </p>
      </div>
    </Link>
  );
}