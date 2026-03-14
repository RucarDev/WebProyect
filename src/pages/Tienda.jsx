function Tienda() {
  return (
    <section className="px-6 md:px-10 py-24">

      <h1 className="text-4xl font-bold mb-10">Nuestra Tienda</h1>

      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Mapa SHCAKES"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </section>
  )
}

export default Tienda
