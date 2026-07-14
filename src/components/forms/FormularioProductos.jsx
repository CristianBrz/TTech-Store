import { Link } from 'react-router-dom';

const FormularioProductos = ({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, cargando, imagenFile, esEdicion = false }) => {

  const { nombre,
    precio,
    categoria,
    stock,
    descripcionCorta,
    descripcionLarga,
  } = datosForm;

  const formStyles = {
    input:
      "border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-4 focus:border-blue-500 focus:border-2 focus:ring-3 focus:ring-blue-300",
    label: "block text-gray-700 text-sm font-bold",
    small: "text-gray-500 text-xs italic",
    botonAbilitado:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-500 ease-in-out transform hover:scale-105",
    botonDesabilitado: "bg-gray-400 cursor-not-allowed py-2 px-4 rounded mt-4"
  };

  return (
    <section className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <div className="flex justify-end">
        <Link to="/dashboard" className="bg-gray-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">Volver al Dashboard</Link>
      </div>

      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col gap-4" onSubmit={manejarEnvio}>
        <h3 className="mb-3 font-bold text-lg text-center">{esEdicion ? "Editar producto" : "Agregar nuevo producto"}</h3>

        <div>
          <label className={formStyles.label} htmlFor="nombre">
            Nombre:
          </label>
          <small className={formStyles.small}>(Ej: "Notebook Pro")</small>
          <input
            className={formStyles.input}
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={manejarCambio}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className={formStyles.label} htmlFor="precio">
              Precio ($):
            </label>
            <small className={formStyles.small}>(Ej: 12000)</small>
            <input
              className={formStyles.input}
              type="number"
              id="precio"
              name="precio"
              value={precio}
              onChange={manejarCambio}
            />
          </div>

          <div className="flex-1">
            <label className={formStyles.label} htmlFor="stock">
              Stock:
            </label>
            <small className={formStyles.small}>(Ej: 15)</small>
            <input
              className={formStyles.input}
              type="number"
              id="stock"
              name="stock"
              value={stock}
              onChange={manejarCambio}
            />
          </div>
        </div>

        <div>
          <label className={formStyles.label} htmlFor="categoria">
            Categoría:
          </label>
          <small className={formStyles.small}>(Ej: "Notebooks")</small>
          <input
            className={formStyles.input}
            type="text"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={manejarCambio}
          />
        </div>

        <div>
          <label className={formStyles.label} htmlFor="descripcionCorta">
            Descripción Corta:
          </label>
          <small className={formStyles.small}>(Ej: "Notebook de alto rendimiento")</small>
          <input
            className={formStyles.input}
            type="text"
            id="descripcionCorta"
            name="descripcionCorta"
            value={descripcionCorta}
            onChange={manejarCambio}
          />
        </div>

        <div>
          <label className={formStyles.label} htmlFor="descripcionLarga">
            Descripción Larga:
          </label>
          <small className={formStyles.small}>(Ej: "Especificaciones técnicas detalladas...")</small>
          <textarea
            className={formStyles.input}
            id="descripcionLarga"
            name="descripcionLarga"
            value={descripcionLarga}
            onChange={manejarCambio}
            rows="4"
          />
        </div>

        <div>
          <label className={formStyles.label} htmlFor="imagen">
            Imagen:
          </label>
          <small className={formStyles.small}>(Ej: "Agregue una imagen")</small>
          <input
            key={imagenFile || 'empty'}
            className={formStyles.input}
            type="file"
            id="imagen"
            name="imagen"
            onChange={manejarCambioImagen}
            disabled={cargando}
          />
        </div>

        <button
          className={cargando ? formStyles.botonDesabilitado : formStyles.botonAbilitado}
          type="submit"
          disabled={cargando}
        >
          {cargando ? "Subiendo imagen..." : esEdicion ? "Guardar Cambios" : "Agregar Producto"}
        </button>
      </form>
    </section>
  );
};

export default FormularioProductos;
