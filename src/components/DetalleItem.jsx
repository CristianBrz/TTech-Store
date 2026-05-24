import Contador from "./Contador"


const DetalleItem = ({ producto }) => {
  return (

    <section className="bg-white rounded-2xl shadow-lg my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="p-8">
          <img
            className="w-full h-auto object-cover rounded-2xl"
            src={producto.imagen}
            alt={producto.nombre}
          />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{producto.nombre}</h2>
          <p className="text-gray-600 mb-4">{producto.descripcionLarga}</p>

          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-md mb-3">
            {producto.categoria}
          </span>

          <p className="text-2xl font-bold text-orange-600 mb-4">${producto.precio}</p>

          <div className="flex items-center gap-4">
            <Contador />
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default DetalleItem