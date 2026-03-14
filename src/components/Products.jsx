import ProductCard from "./ProductCard"
import heroImage from "../assets/hero.jpg"

const products = [
  {
    id: "clásica",
    title: "Clásica",
    description: "La tradicional que nunca falla.",
    image: heroImage
  },
  {
    id: "lotus",
    title: "Lotus",
    description: "Cremosa con galleta caramelizada.",
    image: heroImage
  },
  {
    id: "kinder",
    title: "Kinder",
    description: "Chocolate suave e intenso.",
    image: heroImage
  }
]



function Products() {
  return (
   <section id="products" className="px-6 md:px-10
 py-24 bg-background">


      <div className="text-center mb-16">
        <h2 className="text-4xl font-light mb-4">
          Nuestros Sabores
        </h2>
        <p className="text-gray-600 text-sm">
          Clásicos reinventados. Sabor auténtico.
        </p>
      </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">

  		{products.map((product) => (
   	 <ProductCard key={product.id} {...product} />
  		))}
     </div>


    </section>
  )
}

export default Products
