function Sobre() {
  return (
    <section className="px-6 md:px-10 py-24">

      <h1 className="text-4xl font-bold mb-8">Nuestra Historia</h1>

      <p className="text-gray-600 max-w-3xl mb-8">
        SHCAKES comenzó como un proyecto casero...
      </p>

      <video
        controls
        className="w-full rounded-xl shadow-md"
      >
        <source src="/video-demo.mp4" type="video/mp4" />
      </video>

    </section>
  )
}

export default Sobre
