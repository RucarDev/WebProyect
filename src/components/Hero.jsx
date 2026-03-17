import heroImage from "../assets/hero.jpg"

function Hero() {
  const handleScrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center">

      <img
        src={heroImage}
        alt="Portfolio de diseño gráfico"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-6 tracking-wide">
          Portafolio de Diseño Gráfico
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto mb-8 text-gray-100">
          Identidad visual, branding y piezas gráficas pensadas para marcas que
          quieren comunicar con personalidad.
        </p>

        <button
          onClick={handleScrollToPortfolio}
          className="bg-white text-black px-8 py-3 text-sm tracking-wide hover:opacity-80 transition"
        >
          Ver proyectos
        </button>
      </div>

    </section>
  )
}

export default Hero
