import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const producto = ({ id, nombre, precio, imagen, categoria, descripcionCorta }) => {
  return (
    <article
      className="capitalize bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
    >
      {/* Imagen */}
      <figure className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>

      {/* Contenido */}
      <div className="p-5">
        {/* Categoría */}
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-md mb-3">
          {categoria}
        </span>

        {/* Nombre */}
        <h2 className="text-lg font-bold text-gray-800 mb-2  group-hover:text-orange-600 transition-colors">
          {nombre}
        </h2>

        {/* Descripción corta */}
        <p className="text-gray-600 text-sm mb-4 ">
          {descripcionCorta}
        </p>

        {/* Precio y botones */}
        <div className="flex items-center justify-between mt-auto gap-2">

          <p className="text-2xl font-bold text-gray-900 grow">
            ${precio}
          </p>

          {/* TODO componentizar botones */}
          <Link to={`/producto/${id}`} title="Ver más detalles" className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faEye} />
          </Link>

          <button title="Agregar al carrito" className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </button>

        </div>
      </div>
    </article>
  )
}

export default producto