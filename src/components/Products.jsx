function Products() {
  return (
    <section
      id="products"
      className="px-6 md:px-10 py-24 bg-background"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Qué puedo hacer por tu marca
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Servicios de diseño gráfico pensados para dar cohesión y personalidad
          a tu proyecto.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">
            Identidad visual
          </h3>
          <p className="text-gray-600 text-sm">
            Logotipo, paleta de color, tipografías y sistema gráfico para que tu
            marca sea reconocible en cualquier soporte.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">
            Piezas para redes
          </h3>
          <p className="text-gray-600 text-sm">
            Plantillas y creatividades para redes sociales, adaptadas a tu tono
            y a las necesidades de tu día a día.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">
            Diseño editorial
          </h3>
          <p className="text-gray-600 text-sm">
            Dossieres, catálogos y piezas impresas donde la maquetación y la
            jerarquía visual son clave.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
