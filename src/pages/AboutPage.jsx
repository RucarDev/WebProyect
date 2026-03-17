export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src="/profile/avatar.jpg"
          alt="Profile"
          className="rounded-3xl w-full object-cover"
        />

        <div className="space-y-6">
          <p className="text-lg opacity-80">
            I am a graphic designer and 3D artist focused on creating visual projects with strong attention to detail and presentation.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Specialization
            </h2>
            <p>Hard Surface, Environment, Animation, Tracking</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Tools
            </h2>
            <p>
              Blender, Maya, Substance Painter, Photoshop,
              After Effects, Unreal Engine
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Experience
            </h2>
            <p>
              You can describe studies, freelance work or personal projects here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}