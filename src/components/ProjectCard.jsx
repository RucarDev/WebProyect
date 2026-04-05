import { Link } from "react-router-dom";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function ProjectCard({ project, theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`group block rounded-2xl overflow-hidden border bg-transparent transition-all duration-500 pb-2 ${
        isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/5 hover:bg-black/5'
      }`}
    >
      <div className="h-[18rem] md:h-[22rem] overflow-hidden rounded-2xl m-2 bg-neutral-100 relative">
        <ImageWithSkeleton
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 absolute inset-0"
        />
      </div>

      <div className={`mx-2 p-4 md:p-6 pt-3 md:pt-4 rounded-2xl border backdrop-blur-sm ${
        isDark ? 'text-white bg-white/10 border-white/10' : 'text-black bg-black/5 border-black/5'
      }`}>
        <p className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-2 ${isDark ? 'opacity-60' : 'opacity-40'}`}>
          {project.category}
        </p>

        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 uppercase leading-none">
          {project.title}
        </h2>

        <p className="opacity-70 text-xs md:text-sm leading-relaxed max-w-sm mb-4">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map(tech => (
              <span key={tech} className={`text-[9px] px-2 py-1 rounded border uppercase tracking-wider font-semibold ${isDark ? 'bg-white/5 border-white/20 text-white/80' : 'bg-black/5 border-black/20 text-black/80'}`}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}