import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav3DLogo from "./Nav3DLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect if current page requires dark (black) text on navbar
  const isBlackTextPage =
    (location.pathname.startsWith("/portfolio/") && location.pathname !== "/portfolio") ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

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

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? (isBlackTextPage ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-black/60 backdrop-blur-md")
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className={[
          "w-full px-8 md:px-12 flex items-center justify-between transition-all duration-500",
          scrolled ? "py-2" : "py-6",
        ].join(" ")}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          className="flex items-center gap-3 group outline-none cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <Nav3DLogo isHovered={logoHover} isDark={isBlackTextPage} />
          </div>

          <span
            className={[
              "tracking-[0.3em] font-bold transition-all duration-500 mb-0.5",
              isBlackTextPage ? "text-black" : "text-white",
              scrolled ? "text-sm" : "text-lg",
              logoHover ? "opacity-100" : "opacity-90"
            ].join(" ")}
          >
            RUBEN PADILLA
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={["md:hidden transition-colors text-xl", isBlackTextPage ? "text-black" : "text-white"].join(" ")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={[
          "absolute top-full left-0 w-full flex flex-col items-center gap-6 py-10 backdrop-blur-xl border-t transition-all",
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