import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function CircularProjectsGallery({ projects }) {
    // Nuestro valor maestro que controla la rotación. Ya no tiene un "spring" 
    // constante para que la interacción manual sea 1:1 con el ratón.
    const dragX = useMotionValue(0);

    const [gap, setGap] = useState(350);
    const [cardWidth, setCardWidth] = useState(320);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGap(280);
                setCardWidth(260);
            } else {
                setGap(400);
                setCardWidth(350);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalWidth = projects.length * gap;

    // 1. Escuchamos el arrastre SIN mover el contenedor principal
    const handlePan = (e, info) => {
        dragX.set(dragX.get() + info.delta.x);
    };

    // 2. Al soltar, aplicamos un "momentum" (inercia) para que el giro se sienta natural
    const handlePanEnd = (e, info) => {
        const velocity = info.velocity.x;
        animate(dragX, dragX.get() + velocity * 0.2, {
            type: "spring",
            damping: 40,
            stiffness: 200,
            mass: 0.5,
        });
    };

    return (
        <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden">

            {/* Contenedor Fijo: Usamos onPan en vez de drag="x" para que no salga volando de la pantalla */}
            <motion.div
                onPan={handlePan}
                onPanEnd={handlePanEnd}
                className="absolute flex items-center justify-center w-full h-full z-10 cursor-grab active:cursor-grabbing"
            >
                {projects.map((project, index) => {
                    const baseX = index * gap;

                    // Bucle infinito perfecto
                    const xPos = useTransform(dragX, (latestX) => {
                        const pos = baseX + latestX;
                        const half = totalWidth / 2;
                        return ((pos + half) % totalWidth + totalWidth) % totalWidth - half;
                    });

                    // RADIO GIGANTE (CURVA PLANA)
                    const y = useTransform(
                        xPos,
                        [-gap * 2, -gap, 0, gap, gap * 2],
                        [80, 20, 0, 20, 80]
                    );

                    const rotateZ = useTransform(
                        xPos,
                        [-gap * 2, -gap, 0, gap, gap * 2],
                        [-10, -4, 0, 4, 10]
                    );

                    const scale = useTransform(
                        xPos,
                        [-gap * 2, -gap, 0, gap, gap * 2],
                        [0.8, 0.95, 1, 0.95, 0.8]
                    );

                    const opacity = useTransform(
                        xPos,
                        [-gap * 2, -gap, 0, gap, gap * 2],
                        [0, 0.6, 1, 0.6, 0]
                    );

                    const zIndex = useTransform(
                        xPos,
                        [-gap, 0, gap],
                        [0, 10, 0]
                    );

                    return (
                        <motion.div
                            key={project.slug}
                            className="absolute origin-bottom select-none" // select-none previene bugs visuales al arrastrar
                            style={{
                                width: cardWidth,
                                marginLeft: -cardWidth / 2,
                                x: xPos,
                                y,
                                rotateZ,
                                scale,
                                opacity,
                                zIndex
                            }}
                        >
                            {/* Desactivamos el arrastre de imágenes fantasma nativo del navegador */}
                            <div className="w-full pointer-events-auto shadow-2xl" draggable="false">
                                <ProjectCard project={project} />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}