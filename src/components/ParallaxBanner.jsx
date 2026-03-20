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
        <div ref={ref} className="relative w-full py-12 px-8 md:px-16 container-parallax">
            <div className="relative w-full max-w-5xl ml-auto h-[45vh] md:h-[60vh] overflow-hidden group cursor-pointer block bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl">
                <Link to={`/portfolio/${project.slug}`} className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white outline-none">
                    <motion.div 
                        className="flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-center px-4 mix-blend-difference drop-shadow-2xl"
                        >
                            {project.title}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: 0.2 }}
                            className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black text-white">
                                Explore Project
                            </p>
                        </motion.div>
                    </motion.div>
                </Link>
                <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-700 group-hover:bg-black/10" />
                <motion.img
                    style={{ y }}
                    src={project.cover}
                    alt={project.title}
                    className="absolute inset-0 w-full h-[140%] top-[-20%] object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-80"
                />
            </div>
        </div>
    );
}