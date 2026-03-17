import heroImage from "../assets/hero.jpg"

function About() {
  return (
    <section className="px-6 md:px-10 py-24 bg-background">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Imagen */}
        <div>
          <img
            src={heroImage}
            alt="Sobre SHCAKES"
            className="w-full h-80 md:h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col space-y-6 max-w-xl">

          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            Sobre SHCAKES
          </h2>

          <p className="text-gray-600 leading-relaxed">
            SHCAKES nace con la idea de reinventar la clásica cheese cake.
            Cada tarta es elaborada de forma casera, con ingredientes
            seleccionados y cuidando cada detalle.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Nuestro objetivo es ofrecer un producto sencillo,
            elegante y lleno de sabor, pensado para quienes
            disfrutan de lo auténtico.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About


