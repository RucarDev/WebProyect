import PageHeader from "./PageHeader";

export default function Hero() {
  const scrollToPreview = () => {
    const target = document.getElementById("portfolio-preview");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Duración en milisegundos (más largo = más cine)
    let start = null;

    // Función de "Easing" (Cubic Out): rápido al principio, muy lento al final
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <PageHeader>
      <h1 className="-ml-2 text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85]">
        <span className="block">RUBEN</span>
        <span className="block">PADILLA</span>
      </h1>
      <p className="mt-6 text-[10px] md:text-xs text-white/80 tracking-[0.2em] max-w-lg">
        Visuals: <span className="font-semibold text-white">Ruben Padilla</span>, Dev: <span className="font-semibold text-white">Carlos Padilla</span>, Location: <span className="font-semibold text-white">Jaén</span>, <br className="md:hidden" /> Typology: <span className="font-semibold text-white">Graphic Design & 3D</span>
      </p>
      <div className="mt-10 w-full flex justify-center">
        <button
          onClick={scrollToPreview}
          className="px-10 py-3 border border-white/60 rounded-full text-sm tracking-wide bg-white/5 hover:bg-white/15 transition"
        >
          VIEW SELECTED WORK
        </button>
      </div>
    </PageHeader>
  );
}