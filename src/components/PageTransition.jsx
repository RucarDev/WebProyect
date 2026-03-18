import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // Custom cinematic cubic-beizer
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}