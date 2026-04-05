import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function CircularProjectsGallery({ projects }) {
    // Master motion value that controls the rotation.
    // No constant spring so manual interaction is 1:1 with the mouse.
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

    // 1. Listen to pan gestures WITHOUT moving the main container
    const handlePan = (e, info) => {
        dragX.set(dragX.get() + info.delta.x);
    };

    // 2. On release, apply momentum (inertia) for a natural feel
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
        <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">

            {/* Fixed container: uses onPan instead of drag="x" to prevent flying off screen */}
            <motion.div
                onPan={handlePan}
                onPanEnd={handlePanEnd}
                className="absolute flex items-center justify-center w-full h-full z-10 cursor-grab active:cursor-grabbing"
            >
                {projects.map((project, index) => {
                    const baseX = index * gap;

                    // Perfect infinite loop
                    const xPos = useTransform(dragX, (latestX) => {
                        const pos = baseX + latestX;
                        const half = totalWidth / 2;
                        return ((pos + half) % totalWidth + totalWidth) % totalWidth - half;
                    });

                    // Large radius (flat curve)
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
                            className="absolute origin-bottom select-none" // select-none prevents visual bugs while dragging
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
                            {/* Disable native browser ghost-image dragging */}
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