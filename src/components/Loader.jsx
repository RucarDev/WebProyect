import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinished }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Reducimos el delay al mínimo (200ms) para que el salto al Home sea casi inmediato
                    setTimeout(() => onFinished(), 200);
                    return 100;
                }
                // Saltos más grandes (de 2 a 6) para que llegue al 100% en menos de 1 segundo
                const next = prev + Math.floor(Math.random() * 5) + 2;
                return next > 100 ? 100 : next;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [onFinished]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "-100vh",
                transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center text-white font-mono"
        >
            <div className="relative">
                <motion.h1
                    className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none"
                >
                    {progress}%
                </motion.h1>
                <div className="w-full h-[2px] bg-white/5 mt-2 overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
}