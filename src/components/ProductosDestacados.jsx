import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductosDestacados = () => {
  const endpointProductos = "/data/productos.json";
  const { items: productos, cargando, error } = useFetch(endpointProductos);

  if (cargando) return <p>Cargando empleados...</p>;
  if (error) return <p>Error al cargar empleados</p>;

  const productosDestacados = productos.filter(producto => producto.destacado === true);


  return (
    <div>
      <h2>Productos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-4 border border-green-700">
        {productosDestacados.length > 0 ? (
          productosDestacados.map(producto => (
            <div key={producto.id} className="border border-gray-200 rounded-lg p-4 w-64 h-auto relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className="bg-white rounded-full p-2 size-9 shadow-md"><FontAwesomeIcon icon={faHeart} /></button>
                <Link to={`/producto/${producto.id}`} className="bg-white rounded-full p-2 size-9 shadow-md"><FontAwesomeIcon icon={faEye} /></Link>
              </div>
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
              <h3>{producto.nombre}</h3>
            </div>
          ))
        ) : (
          <p>No hay productos destacados disponibles</p>
        )}
      </div>
    </div>
  )
}

export default ProductosDestacados