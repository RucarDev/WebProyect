import { useParams } from "react-router-dom"
import heroImage from "../assets/hero.jpg"

function ProductDetail() {
  const { id } = useParams()

  const productInfo = {
    clásica: {
      name: "Cheese Cake Clásica",
      description:
        "Base crujiente artesanal con crema suave horneada lentamente para lograr una textura cremosa y equilibrada.",
      allergens: ["Leche 🥛", "Huevo 🥚", "Gluten 🌾"],
      nutrition: {
        kcal: 420,
        grasas: "22g",
        carbohidratos: "35g",
        proteinas: "8g",
        azucares: "24g"
      }
    },
    lotus: {
      name: "Cheese Cake Lotus",
      description:
        "Crema suave combinada con galleta caramelizada Lotus y topping crujiente que aporta contraste y dulzor equilibrado.",
      allergens: ["Leche 🥛", "Huevo 🥚", "Gluten 🌾"],
      nutrition: {
        kcal: 450,
        grasas: "25g",
        carbohidratos: "38g",
        proteinas: "7g",
        azucares: "28g"
      }
    },
    kinder: {
      name: "Cheese Cake Kinder",
      description:
        "Chocolate cremoso con toque de avellana y textura intensa, ideal para los amantes del cacao.",
      allergens: ["Leche 🥛", "Huevo 🥚", "Frutos secos 🌰"],
      nutrition: {
        kcal: 480,
        grasas: "28g",
        carbohidratos: "40g",
        proteinas: "9g",
        azucares: "30g"
      }
    }
  }

  const product = productInfo[id]

  if (!product)
    return <div className="p-20">Producto no encontrado</div>

  return (
    <section className="px-10 py-24 bg-background">

      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* Imagen */}
        <img
          src={heroImage}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        {/* Info */}
        <div>

          <h1 className="text-4xl font-extrabold mb-6">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Alérgenos */}
          <div className="mb-8">
            <h3 className="font-bold mb-3 tracking-wide">
              Alérgenos
            </h3>

            <div className="flex gap-4 flex-wrap">
              {product.allergens.map((item, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tabla nutricional */}
          <div>
            <h3 className="font-bold mb-3 tracking-wide">
              Valores nutricionales (por porción)
            </h3>

            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <tbody>

                <tr className="border-b">
                  <td className="p-4 text-gray-600">Energía</td>
                  <td className="p-4 text-right font-medium">
                    {product.nutrition.kcal} kcal
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 text-gray-600">Grasas</td>
                  <td className="p-4 text-right font-medium">
                    {product.nutrition.grasas}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 text-gray-600">Carbohidratos</td>
                  <td className="p-4 text-right font-medium">
                    {product.nutrition.carbohidratos}
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-4 text-gray-600">Proteínas</td>
                  <td className="p-4 text-right font-medium">
                    {product.nutrition.proteinas}
                  </td>
                </tr>

                <tr>
                  <td className="p-4 text-gray-600">Azúcares</td>
                  <td className="p-4 text-right font-medium">
                    {product.nutrition.azucares}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ProductDetail

