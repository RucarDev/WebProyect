function Faq() {
  return (
    <section className="px-6 md:px-10 py-24">

      <h1 className="text-4xl font-bold mb-10">
        Preguntas Frecuentes
      </h1>

      <div className="space-y-8 max-w-3xl">

        <div>
          <h3 className="font-semibold mb-2">
            ¿Cuánto duran las tartas?
          </h3>
          <p className="text-gray-600">
            Se conservan 3-4 días en refrigeración.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            ¿Hacéis envíos?
          </h3>
          <p className="text-gray-600">
            Sí, envíos locales en 24h.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Faq
