import useFetch from "../hooks/useFetch";
// import TarjetaEmpleado from "./tarjetaEmpleado";
import TarjetaEmpleado from './TarjetaEmpleado';

const Empleados = () => {
  const endpointEmpleados = "/data/empleados.json";

  const { items: empleados, cargando, error } = useFetch(endpointEmpleados);

  if (cargando) return <p>Cargando empleados...</p>;
  if (error) return <p>Error al cargar empleados</p>;


  return (
    <section className="py-12 px-6 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {empleados.map(empleado => {
            return <TarjetaEmpleado key={empleado.id} {...empleado} />

          })}
        </div>

      </div>
    </section>
  )
}

export default Empleados