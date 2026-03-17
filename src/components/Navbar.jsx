import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-10 ${
        scrolled
          ? "bg-transparent py-4"
          : "bg-background shadow-sm py-6"
      }`}
    >

      {/* Logo */}
      <img
        src={logo}
        alt="SHCAKES Logo"
        onClick={handleLogoClick}
        className={`cursor-pointer transition-all duration-300 ${
          scrolled ? "h-7" : "h-10"
        } hover:scale-105`}
        translate="no"
      />

      {/* Menú */}
      <div
        className={`hidden md:flex space-x-8 text-sm tracking-wide transition-colors duration-300 ${
          scrolled ? "text-white" : "text-primary"
        }`}
      >

        <button
          onClick={() => scrollToSection("about")}
          className="hover:opacity-70 transition"
        >
          Sobre mí
        </button>

        <button
          onClick={() => scrollToSection("portfolio")}
          className="hover:opacity-70 transition"
        >
          Proyectos
        </button>

        <button
          onClick={() => scrollToSection("contacto")}
          className="hover:opacity-70 transition"
        >
          Contacto
        </button>

      </div>

    </nav>
  )
}

export default Navbar
