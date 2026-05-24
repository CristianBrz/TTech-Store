import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const iconButtonClass = "bg-white rounded-full p-2 shadow-md"

  useEffect(() => {
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
        const destacados = data.filter(producto => producto.destacado === true)
        setProductos(destacados)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al cargar productos destacados:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Cargando productos destacados...</div>
  }

  return (
    <div>
      <h2>Productos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-4 border border-green-700">
        {productos.length > 0 ? (
          productos.map(producto => (
            <div key={producto.id} className="border border-gray-200 rounded-lg p-4 w-64 h-auto relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button className={iconButtonClass}><FontAwesomeIcon icon={faHeart} /></button>
                <Link to={`/producto/${producto.id}`} className={iconButtonClass}><FontAwesomeIcon icon={faEye} /></Link>
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