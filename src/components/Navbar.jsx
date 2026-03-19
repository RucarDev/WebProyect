import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detectamos si estamos en una página que requiere texto negro en el navbar
  const isBlackTextPage = location.pathname.startsWith("/portfolio") || location.pathname === "/about" || location.pathname === "/contact";

  // Clase dinámica para los links del menú
  const navLinkClass = ({ isActive }) => {
    const baseClass = "transition-all duration-300 uppercase tracking-[0.2em] text-[11px] md:text-xs";
    
    if (isBlackTextPage) {
      return `${baseClass} ${isActive ? "text-black font-bold" : "text-black/40 hover:text-black"}`;
    }
    
    return `${baseClass} ${isActive ? "text-white font-bold" : "text-white/60 hover:text-white"}`;
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        // Fondo dinámico según la página y el scroll
        scrolled 
          ? (isBlackTextPage ? "bg-white/60 backdrop-blur-md" : "bg-black/40 backdrop-blur-sm") 
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className={[
          "w-full px-8 md:px-12 flex items-center justify-between transition-all duration-500",
          scrolled ? "py-3" : "py-7",
        ].join(" ")}
      >
        {/* LOGO */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center"
        >
          <span
            className={[
              "tracking-[0.3em] font-bold transition-all duration-500",
              isBlackTextPage ? "text-black" : "text-white",
              scrolled ? "text-sm" : "text-lg",
            ].join(" ")}
          >
            RUBEN PADILLA
          </span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={["md:hidden transition-colors", isBlackTextPage ? "text-black" : "text-white"].join(" ")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className={[
          "absolute top-full left-0 w-full flex flex-col items-center gap-6 py-10 backdrop-blur-md border-t",
          isBlackTextPage 
            ? "bg-white/95 border-black/5" 
            : "bg-black/90 border-white/5"
        ].join(" ")}>
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/portfolio" className={navLinkClass} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}