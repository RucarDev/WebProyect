// src/components/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto de Diseño Gráfico */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="ruta/a/tu/imagen1.jpg" alt="Proyecto 1" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Diseño Gráfico 1</h3>
            <p className="text-gray-700">Descripción breve del proyecto de diseño gráfico.</p>
          </div>
        </div>

        {/* Proyecto 3D */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="ruta/a/tu/imagen2.jpg" alt="Proyecto 3D 1" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Proyecto 3D 1</h3>
            <p className="text-gray-700">Descripción breve del proyecto 3D.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
