import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Portfolio from './components/Portfolio'; 

import ProductDetail from "./pages/ProductDetail"
import Tienda from "./pages/Tienda"
import Sobre from "./pages/Sobre"
import Faq from "./pages/Faq"

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Portfolio /> 
    </>
  )
}

function App() {
  return (
    <div className="bg-background text-primary min-h-screen flex flex-col">

      <Navbar />
     <ScrollToTop />


      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App
