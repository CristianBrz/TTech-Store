import useFetch from '../hooks/useFetch'
import Spinner from './Spinner'

const Categorias = () => {

  const endpointCategorias = "/data/categorias.json";

  const { items: categorias, cargando } = useFetch(endpointCategorias);

  if (cargando) {
    return (
      <Spinner mensaje="Cargando categorías, por favor espere..." />
    );
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Categorías</h2>
      <div className="flex flex-wrap justify-center gap-4 my-2 py-8 border border-green-700">
        
        {categorias.map(categoria => (

          <div key={categoria.id} className="text-center border-2 h-32 w-60 p-4">
            <h3 className="text-lg font-semibold">{categoria.nombre}</h3>
            <p className="text-gray-600 text-sm">{categoria.descripcion}</p>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Categorias