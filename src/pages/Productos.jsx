// import useFetch from "../hooks/useFetch";
import useColecciones from "../hooks/useCollections";

import Producto from "../components/TarjetaProducto";
import Spinner from "../components/Spinner";

const Productos = () => {
  /*
  const endpointProductos = '/data/productos.json'
  const { items: productos, cargando, error } = useFetch(endpointProductos);
  */

  const coleccion = "productos";
  const { items: productos, cargando, error } = useColecciones(coleccion);

  console.table(productos);

  if (cargando) {
    return <Spinner mensaje="Cargando productos, por favor espere..." />;
  }

  if (error) {
    return (
      <section className="flex items-center justify-center min-h-screen w-full">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-semibold">Error: {error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-8 px-4 min-h-screen rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center capitalize">
          todos nuestros productos
        </h1>

        {/* TODO: Agregar barr a de busqueda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
