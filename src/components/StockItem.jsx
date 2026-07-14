import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const StockItem = ({ producto }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
          <p className="text-sm text-gray-600 mt-1">Stock: <span className="font-bold text-green-600">{producto.stock}</span></p>
        </div>
        <div className="flex gap-2">
          <button
            // onClick={() => ( )}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
            title="Eliminar del carrito"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <Link
            to={`/editar-producto/${producto.id}`}
            className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
            title="Editar Producto"
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
      </div>
    </li>
  )
}

export default StockItem
