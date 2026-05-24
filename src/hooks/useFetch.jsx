import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [items, setItems] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const tiempoDemora = 500;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch(endpoint);

        if (!respuesta.ok) {
          throw new Error(`Error al cargar los datos: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        
        // Simulo delay de 2 segundos en la carga de los datos
        await demorarCargaDatos(tiempoDemora);

        setItems(datos);

      } catch (error) {
        setError(error);

      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { items, cargando, error };
};

const demorarCargaDatos = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default useFetch;
