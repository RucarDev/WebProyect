import { motion, useScroll, useTransform } from "framer-motion";

export default function PortfolioVideo() {
  const { scrollYProgress } = useScroll();
  // Move from 0% at top to -25% at bottom to create standard parallax and reveal bottom portion
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <motion.div 
      style={{ y }}
      className="fixed top-0 left-0 w-full h-[140vh] z-0 bg-black pointer-events-none"
    >
      <video
        src="/enviroments/LondoPhone/LondonPhoneFinal.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black/50" />
    </motion.div>
  );
}
