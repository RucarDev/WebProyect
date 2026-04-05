import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const fadeIn = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-12"
        >
          ABOUT ME
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <img
              src="/images/me.jpeg"
              alt="Rubén Padilla — 3D Artist & Graphic Designer"
              loading="lazy"
              className="rounded-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <div className="space-y-8 md:space-y-10">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-lg md:text-xl leading-relaxed opacity-90 font-medium"
            >
              I am a graphic designer and 3D artist focused on creating visual projects with strong attention to detail and presentation.
            </motion.p>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Specialization</h2>
                <p className="text-base md:text-lg">Hard Surface, Environment, Animation, Tracking</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }}>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Tools</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Blender, Maya, Substance Painter, Photoshop, After Effects, Unreal Engine
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Experience</h2>
                <p className="text-base md:text-lg opacity-70">
                  Developing immersive environments and high-impact visual pieces for digital and personal projects.
                </p>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.3 }} className="pt-4 md:pt-6">
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}