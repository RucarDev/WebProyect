import { useNavigate } from "react-router-dom"


function ProductCard({ image, title, description }) {
const navigate = useNavigate()

  return (
   <div
  onClick={() => navigate(`/product/${title.toLowerCase()}`)}
  className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
>


      {/* Imagen arriba */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Parte inferior blanca */}
      <div className="p-6 text-center">

        <h3 className="text-lg font-extrabold tracking-wide mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <button className="text-xs tracking-widest border-b border-primary pb-1 hover:opacity-60 transition">
          ENCARGAR
        </button>

      </div>

    </div>
  )
}

export default ProductCard
