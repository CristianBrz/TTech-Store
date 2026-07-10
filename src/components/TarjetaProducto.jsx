import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useCarrito } from "../hooks/useCarrito";

const Producto = ({
  id,
  nombre,
  precio,
  imagen,
  categoria,
  descripcionCorta,
  stock,
}) => {

  const datosProducto = {
    id,
    nombre,
    precio,
    imagen,
    categoria,
    descripcionCorta,
    stock,
  }

  const { agregarAlCarrito } = useCarrito();

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(datosProducto, 1);
    alert(`Agregaste 1 unidad de ${nombre} al carrito.`);
  };



  return (
    <article className="capitalize bg-white rounded-xl flex flex-col shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <Link to={`/producto/${id}`} title="Ver más detalles">
        {/* Imagen */}
        <figure className="relative overflow-hidden h-48 bg-gray-100">
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

        </figure>

        {/* Contenido */}
        <div className="flex flex-col gap-1 p-3">
          {/* Categoría */}
          <span className="bg-orange-100 w-fit text-orange-700 text-xs font-semibold px-2 py-1 rounded-md">
            {categoria}
          </span>

          {/* Nombre */}
          <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">
            {nombre}
          </h2>

          {/* Descripción corta */}
          <p className="text-gray-600 text-sm min-h-10">{descripcionCorta}</p>

          {/* Precio y stock */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">${precio}</p>
            <p className="text-gray-900">Stock: {stock}</p>
          </div>

        </div>
      </Link>

      {/* boton agregar al carrito */}
      <button
        onClick={handleAgregarAlCarrito}
        title="Agregar al carrito"
        className="bg-linear-to-r from-orange-500 to-orange-600 text-white m-2 mt-0 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span className="px-2">Agregar al carrito</span>
      </button>
    </article>
  );
};

export default Producto;
