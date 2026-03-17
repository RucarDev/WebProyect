import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Ruben
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Hire Me
          </Link>
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
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black border-t border-white/10">
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

          <Link
            to="/contact"
            className="mt-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}