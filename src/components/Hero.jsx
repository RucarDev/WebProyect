import heroImage from "../assets/hero.jpg"

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">

      {/* Imagen */}
      <img
        src={heroImage}
        alt="Cheesecake SHCAKES"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido */}
      <div className="relative text-center text-white px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mb-6">
          Cheese Cakes caseras
        </h2>

        <p className="text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto mb-8">
          Hechas a mano. Ingredientes seleccionados.
          El sabor que se queda.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
          className="bg-white text-black px-8 py-3 text-sm tracking-wide hover:opacity-80 transition"
        >
          Ver sabores
        </button>
      </div>

    </section>
  )
}

export default Hero
