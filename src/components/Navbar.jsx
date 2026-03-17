import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-white"
        : "text-white/80 hover:text-white"
    }`;

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-transparent",
      ].join(" ")}
    >
      <nav
        className={[
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        ].join(" ")}
      >

        {/* LOGO */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <span
            className={[
              "text-white tracking-[0.25em] font-semibold transition-all duration-300",
              scrolled ? "text-sm" : "text-base",
            ].join(" ")}
          >
            RUBEN PADILLA
          </span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">
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
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/80 border-t border-white/10">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/portfolio"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
