export default function Hero() {
  const scrollToPreview = () => {
    document
      .getElementById("portfolio-preview")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src="/images/backImage.jpg"
        alt="Background portfolio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
          Visual Portfolio
        </h1>
        <p className="max-w-xl mx-auto mb-10 text-sm md:text-base opacity-80">
          Graphic design & 3D projects with a focus on strong composition,
          lighting and presentation.
        </p>

        <button
          type="button"
          onClick={scrollToPreview}
          className="px-10 py-3 border border-white/60 rounded-full text-sm tracking-wide bg-white/5 hover:bg-white/15 transition"
        >
          VIEW PORTFOLIO
        </button>
      </div>
    </section>
  );
}