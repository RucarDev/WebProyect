import React from 'react';
import ThreeDViewer from './ThreeDViewer';
import heroImage from "../assets/hero.jpg";

const projects = [
  {
    id: 1,
    title: "Identidad visual para marca gourmet",
    description: "Rediseño completo de logotipo, paleta de color y aplicaciones para packaging y redes sociales.",
    image: heroImage
  },
  {
    id: 2,
    title: "Campaña gráfica para redes",
    description: "Piezas adaptadas a diferentes formatos digitales, manteniendo coherencia visual y tono de marca.",
    image: heroImage
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-6 md:px-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
          Selección de proyectos
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Una muestra de trabajos de branding, dirección de arte y diseño para
          marcas que buscan diferenciarse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm flex-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Proyecto 3D</h3>
          <p className="text-gray-700 text-sm mb-4">
            Exploración de formas y materiales en 3D aplicada a branding y
            producto.
          </p>
          <div className="flex-1">
            <ThreeDViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;