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
              src="/profile/avatar.jpg"
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
          </div>
        </div>
      </section>
    </PageTransition>
  );
}