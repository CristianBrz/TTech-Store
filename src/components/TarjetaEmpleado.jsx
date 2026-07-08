
const TarjetaEmpleado = ({ imagen, nombre, cargo }) => {
  // console.log(imagen)
  // console.log(nombre)
  // console.log(cargo)

  return (



    <article
      className="flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100"
    >
      <img
        className="size-28 rounded-full object-cover mb-4 border-4 border-blue-500"
        src={imagen}
        alt={nombre}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{nombre}</h3>
      <p className="text-sm text-blue-600 font-medium">{cargo}</p>
    </article>


  )
}

export default TarjetaEmpleado