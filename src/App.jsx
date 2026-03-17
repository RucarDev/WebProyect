import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Portfolio from './components/Portfolio'; 

function App() {
  return (
    <div className="bg-background text-primary min-h-screen flex flex-col">

      <Navbar />
      <ScrollToTop />

      <main className="flex-grow">
        <Hero />
        {/* Sección de presentación / servicios destacados */}
        <Products />
        {/* Sobre mí */}
        <About />
        {/* Portfolio de proyectos */}
        <Portfolio />
      </main>

      <Footer />

    </div>
  )
}

export default App
