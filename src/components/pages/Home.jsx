import Hero from './../Hero';
import ProductosDestacados from './../ProductosDestacados';
import Categorias from './../Categorias';
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