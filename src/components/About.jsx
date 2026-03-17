import heroImage from "../assets/hero.jpg"

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 bg-background">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        <div>
          <img
            src={heroImage}
            alt="Retrato del diseñador gráfico"
            className="w-full h-80 md:h-[500px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col space-y-6 max-w-xl">

          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Sobre mí
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Soy Rubén, diseñador gráfico especializado en identidad visual y
            dirección de arte. Me gusta trabajar con marcas que apuestan por
            una comunicación clara, honesta y visualmente potente.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Desarrollo logotipos, sistemas de marca, piezas para redes sociales
            y material editorial, siempre cuidando el detalle y la consistencia
            gráfica en todos los puntos de contacto.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About


