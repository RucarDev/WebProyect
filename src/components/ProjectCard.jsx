import { Link } from "react-router-dom";

export default function ProjectCard({ project, theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`group block rounded-2xl overflow-hidden border bg-transparent transition-all duration-500 pb-2 ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/5 hover:bg-black/5'
        }`}
    >
      <div className="h-[22rem] overflow-hidden rounded-2xl m-2 bg-neutral-100">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      <div className={`mx-2 p-6 pt-4 rounded-2xl border backdrop-blur-sm ${isDark ? 'text-white bg-white/10 border-white/10' : 'text-black bg-black/5 border-black/5'
        }`}>
        <p className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-2 ${isDark ? 'opacity-60' : 'opacity-40'}`}>
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