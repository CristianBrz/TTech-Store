import { useCarrito } from "../hooks/useCarrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, getTotalCarrito, limpiarCarrito, actualizarCantidad } = useCarrito();

  if (carrito.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Carrito de Compras</h1> */}
        <p className="text-gray-600">Tu carrito está vacío</p>
        <Link
          to="/productos"
          className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Carrito de Compras</h1>
        <Link
          to="/productos"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver a productos
        </Link>
      </div>

      <div className="space-y-4">
        {carrito.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-100"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{item.nombre}</h3>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg font-bold transition-colors"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="font-semibold text-gray-800 w-8 text-center">{item.cantidad}</span>
                <button
                  onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg font-bold transition-colors"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <p className="text-orange-600 font-semibold mt-2">
                ${item.precio * item.cantidad}
              </p>
            </div>
            <button
              onClick={() => eliminarDelCarrito(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
              title="Eliminar del carrito"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-orange-600">
            ${getTotalCarrito()}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={limpiarCarrito}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Vaciar Carrito
          </button>
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
