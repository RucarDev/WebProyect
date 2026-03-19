import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PageHeader({ backgroundImage, children, bottomContent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Mueve la imagen de fondo lentamente hacia abajo mientras la página baja
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.img
        style={{ y }}
        src={backgroundImage}
        alt="Background"
        className="absolute w-full h-[120%] top-[-10%] object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full px-8 md:px-16 text-white flex flex-col items-center">
        <div className="text-left uppercase">
          {children}
        </div>
      </div>
      {bottomContent && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white">
          {bottomContent}
        </div>
      )}
    </section>
  );
}