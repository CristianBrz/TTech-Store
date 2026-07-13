import { useParams } from "react-router-dom"

import Spinner from '../components/Spinner';
import DetalleItem from '../components/DetalleItem';
// import useFetch from "../hooks/useFetch";
import useDocument from "../hooks/useDocument";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetalleProducto = () => {
  const { id } = useParams()

  // const endpointProductos = "/data/productos.json";

  // const { items: productos, cargando, error } = useFetch(endpointProductos);
  // const producto = productos?.find(p => p.id === parseInt(id)) 
  
  const colleccion = "productos";
  
  const { item: producto, cargando, error } = useDocument(colleccion, id);
  

  if (cargando) {
    return (
      <Spinner mensaje="Cargando información del producto, por favor espere..." />
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-semibold">Error: {error.message}</p>
        </div>
      </section>
    );
  }

  const volverPaginaAnterior = () => {
    window.history.back();
  }

  return (
    <section className="bg-gray-50 p-4 min-h-screen rounded-xl my-3">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center capitalize">
        Detalle del producto
      </h1>

      <button onClick={volverPaginaAnterior} className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg mx-auto w-fit">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Volver</span>
      </button>

      <DetalleItem producto={producto} />

    </section>
  )
}

export default DetalleProducto