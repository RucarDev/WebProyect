import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-sm opacity-60 mb-4">
            Graphic Designer & 3D Artist
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Visual portfolio focused on design and 3D.
          </h1>

          <p className="text-lg opacity-80 max-w-xl mb-8">
            Hard surface, environments, animation and tracking projects with a professional presentation approach.
          </p>

          <div className="flex gap-4">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold"
            >
              View Portfolio
            </Link>

            <Link
              to="/contacto"
              className="px-6 py-3 rounded-full border border-white/20"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <img
            src="/profile/avatar.jpg"
            alt="Portfolio preview"
            className="w-full rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}