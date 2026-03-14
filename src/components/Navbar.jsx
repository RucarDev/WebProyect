import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
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
          onClick={() => navigate("/tienda")}
          className="hover:opacity-70 transition"
        >
          Tienda
        </button>

        <button
          onClick={() => navigate("/sobre")}
          className="hover:opacity-70 transition"
        >
          Sobre Nosotros
        </button>

        <button
          onClick={() => navigate("/faq")}
          className="hover:opacity-70 transition"
        >
          Preguntas Frecuentes
        </button>

        <button
          onClick={() => {
            navigate("/")
            setTimeout(() => {
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }, 100)
          }}
          className="hover:opacity-70 transition"
        >
          Contacto
        </button>

      </div>

    </nav>
  )
}

export default Navbar
