import PageTransition from "../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
          ABOUT ME
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <img
              src="/images/backImage2.jpg"
              alt="Profile"
              className="rounded-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="space-y-10">
            <p className="text-xl leading-relaxed opacity-90 font-medium">
              I am a graphic designer and 3D artist focused on creating visual projects with strong attention to detail and presentation.
            </p>

            <div className="grid grid-cols-1 gap-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Specialization</h2>
                <p className="text-lg">Hard Surface, Environment, Animation, Tracking</p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Tools</h2>
                <p className="text-lg leading-relaxed">
                  Blender, Maya, Substance Painter, Photoshop, After Effects, Unreal Engine
                </p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-3 opacity-50">Experience</h2>
                <p className="text-lg opacity-70">
                  Desarrollando entornos inmersivos y piezas visuales de alto impacto para proyectos digitales y personales.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}