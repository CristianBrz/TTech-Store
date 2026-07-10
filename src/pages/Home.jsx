import Hero from '../components/Hero';
import ProductosDestacados from '../components/ProductosDestacados';
import Categorias from '../components/Categorias';
const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductosDestacados />
        <Categorias />
      </div>
    </section>
  )
}

export default Home