function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-neutral-900 text-gray-300 px-6 md:px-10 py-20 mt-20"
    >

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Marca */}
        <div>
          <h3 className="font-bold mb-4 tracking-wide text-white">
            SHCAKES
          </h3>
          <p className="text-sm">
            Cheese Cakes caseras elaboradas artesanalmente.
            Sabor auténtico, textura perfecta.
          </p>
        </div>

        {/* Información */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Información Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Términos y condiciones
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Política de cookies
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Política de privacidad
            </li>
          </ul>
        </div>

        {/* Métodos de pago */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Métodos de pago
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Tarjeta</li>
            <li>Bizum</li>
            <li>Efectivo en tienda</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Calle Dulce 24, Jaén</li>
            <li>📞 600 123 456</li>
            <li>✉ contacto@shcakes.es</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 text-center text-xs text-gray-500">
        © 2026 SHCAKES. Todos los derechos reservados.
      </div>

    </footer>
  )
}

export default Footer


