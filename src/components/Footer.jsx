function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-neutral-900 text-gray-300 px-6 md:px-10 py-20 mt-20"
    >

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h3 className="font-bold mb-4 tracking-wide text-white">
            Rubén · Diseño Gráfico
          </h3>
          <p className="text-sm">
            Identidad visual, branding y piezas gráficas para marcas que quieren
            comunicar con claridad y coherencia.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Identidad visual y logotipos</li>
            <li>Redes sociales y contenido digital</li>
            <li>Diseño editorial y piezas impresas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Redes
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Behance
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Instagram
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Dribbble
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Jaén, España</li>
            <li>📞 600 123 456</li>
            <li>✉ hola@rubendesign.es</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 text-center text-xs text-gray-500">
        © 2026 Rubén · Portfolio de diseño gráfico.
      </div>

    </footer>
  )
}

export default Footer


