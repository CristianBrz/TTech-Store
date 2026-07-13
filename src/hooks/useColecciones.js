import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const useCollection = (nombreColeccion) => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const obtenerDatos = async () => {
      setCargando(true);
      setError(null);

      try {
        const datosDB = collection(db, nombreColeccion);
        const resultado = await getDocs(datosDB);

        const datos = resultado.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (isMounted) {
          setItems(datos);
        }
      } catch (err) {
        console.error(err);

        if (isMounted) {
          setError({
            mensaje: "No fue posible obtener los datos.",
            detalle: err.message,
          });
        }
      } finally {
        if (isMounted) {
          setCargando(false);
        }
      }
    };

    obtenerDatos();

    return () => {
      isMounted = false;
    };
  }, [nombreColeccion]);

  return {
    items,
    cargando,
    error,
  };
};

export default useCollection;
