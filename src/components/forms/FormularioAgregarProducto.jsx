import { useState } from "react";
import FormularioProductos from "./FormularioProductos";

const FormularioContainer = () => {
  const estadoInicial = {
    nombre: "",
    precio: "",
    categoria: "",
    stock: "",
    descripcionCorta: "",
    imagen: "",
    destacado: false,
    descripcionLarga: "",

  };

  const [datosForm, setDatosForm] = useState({ ...estadoInicial });
  const [imagenFile, setImagenFile] = useState(null);
  const [cargando, setCargando] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target;

    // uso el callback de setDatosForm para actualizar el estado basado en el estado anterior
    // Esto asegura que siempre tengamos la versión más reciente del estado, especialmente si se agrupan actualizaciones.
    setDatosForm((prevDatos) => ({
      ...prevDatos,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const manejarCambioImagen = (evento) => {
    //evento.target.files es un array con los archivos seleccionados, pero como solo permitimos uno, tomamos el primero (índice 0).
    setImagenFile(evento.target.files[0]);
  };

  const vaciarFormulario = () => {
    setDatosForm({ ...estadoInicial });
    setImagenFile(null);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    setCargando(true);

    // Lógica para subir la imagen a Imgbb
    const API_KEY_IMGBB = "6c7bc986f16a21c247f829fd315092b8";
    const formData = new FormData();
    formData.append("image", imagenFile);

    try {
      // console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`, {
        method: 'POST',
        body: formData
      });

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        // console.log("Imagen subida exitosamente:", datosImgbb.data.url);
        const productoCompleto = {
          ...datosForm,
          imagen: datosImgbb.data.url
        };
        console.log("Producto completo:", productoCompleto);

      } else {
        throw new Error('La subida de la imagen a Imgbb falló.');
      }

    } catch (error) {
      console.error("Error en la subida de la imagen:", error);
      alert("Error al subir la imagen. Por favor, intenta nuevamente.");
    } finally {
      setCargando(false);
    }

    vaciarFormulario();
  };

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-2xl font-bold">Agregar Producto</h2>

      <FormularioProductos
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        cargando={cargando}
        imagenFile={imagenFile}
      />
    </section>
  );
};

export default FormularioContainer;
