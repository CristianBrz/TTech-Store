import ListaStock from '../components/ListaStock';
import { Link } from 'react-router-dom';  

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        
        <h1 className="text-gray-600 text-3xl flex-1 font-bold">Panel de administración</h1>

        <Link to="/agregar-producto" className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">Agregar Producto</Link>

        {/* <Link to="/agregar-categoria" className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">Agregar Categoría</Link> */}
      
      </div>

      {/* <article className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Productos</h3>
            <p className="text-2xl font-bold text-gray-800">10</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Categorías</h3>
            <p className="text-2xl font-bold text-gray-800">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Usuarios</h3>
            <p className="text-2xl font-bold text-gray-800">3</p>
          </div>
        </div>
      </article> */}

      <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Productos en stock</h2>
        <ListaStock />
      </article>

    </section>
  )
}

export default Dashboard