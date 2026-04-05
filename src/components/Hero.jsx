import PageHeader from "./PageHeader";
import { useLenis } from "@studio-freight/react-lenis";

export default function Hero() {
  const lenis = useLenis();

  const scrollToPreview = () => {
    const target = document.getElementById("portfolio-preview");
    if (!target || !lenis) return;

    // Let Lenis handle the scroll to preserve the 3D background
    lenis.scrollTo(target, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3) // Cubic Out easing
    });
  };

  return (
    <PageHeader>
      <div className="relative w-full h-[90vh] md:h-screen flex flex-col justify-center">

        {/* Title, description and CTA */}
        <div>
          <h1 className="-ml-2 text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85]">
            <span className="block">RUBEN</span>
            <span className="block">PADILLA</span>
          </h1>

          <p className="mt-6 text-[10px] md:text-xs text-white/80 tracking-[0.2em] max-w-lg uppercase">
            A PORTFOLIO OF A GRAPHIC DESIGNER
          </p>

          <div className="mt-10 w-full flex justify-center">
            <button
              onClick={scrollToPreview}
              className="px-10 py-3 border border-white/60 rounded-full text-sm tracking-wide bg-white/5 hover:bg-white/15 transition"
            >
              VIEW SELECTED WORK
            </button>
          </div>
        </div>

        {/* Credits bar — spans full width at the bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full md:w-screen px-6 md:px-12 flex flex-row justify-between items-center text-[7px] md:text-[8px] lg:text-[10px] text-white tracking-[0.2em] uppercase whitespace-nowrap opacity-90">
          <span>Visuals: <span className="font-semibold text-white">Ruben Padilla</span></span>
          <span>Dev: <span className="font-semibold text-white">Carlos Padilla</span></span>
          <span className="hidden sm:inline">Location: <span className="font-semibold text-white">Jaén</span></span>
          <span className="hidden sm:inline">Typology: <span className="font-semibold text-white">Graphic Design & 3D</span></span>
        </div>

      </div>
    </PageHeader>
  );
}