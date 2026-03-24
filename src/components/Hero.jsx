import PageHeader from "./PageHeader";
import { useLenis } from "@studio-freight/react-lenis";

export default function Hero() {
  const lenis = useLenis();

  const scrollToPreview = () => {
    const target = document.getElementById("portfolio-preview");
    if (!target || !lenis) return;

    // Dejamos que Lenis maneje el scroll para no romper el fondo 3D
    lenis.scrollTo(target, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3) // Tu "Cubic Out" original
    });
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