import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBanner({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden group cursor-pointer block bg-black">
      <Link to={`/portfolio/${project.slug}`} className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white outline-none">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true }} 
           className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-center px-4 mix-blend-difference group-hover:scale-105 transition-transform duration-700"
         >
           {project.title}
         </motion.h2>
         <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="mt-6 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-difference"
         >
           Explore Project
         </motion.p>
      </Link>
      <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-700 group-hover:bg-black/10" />
      <motion.img 
        style={{ y }}
        src={project.cover} 
        alt={project.title}
        className="absolute inset-0 w-full h-[140%] top-[-20%] object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
      />
    </div>
  );
}
