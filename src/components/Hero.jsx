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

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-xl mx-auto text-left pl-6 md:pl-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] ml-1 md:ml-2">
            <span className="block">RUBEN</span>
            <span className="block">PADILLA</span>
          </h1>
          <p className="mt-6 text-[11px] md:text-xs text-center text-white/80 uppercase tracking-[0.25em]">
            Visuals:{" "}
            <span className="font-semibold text-white">Ruben Padilla</span>, Dev:{" "}
            <span className="font-semibold text-white">Carlos Padilla</span>, Location:{" "}
            <span className="font-semibold text-white">Jaén</span>, Typology:{" "}
            <span className="font-semibold text-white">Graphic Design &amp; 3D</span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={scrollToPreview}
            className="px-10 py-3 border border-white/60 rounded-full text-sm tracking-wide bg-white/5 hover:bg-white/15 transition"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}