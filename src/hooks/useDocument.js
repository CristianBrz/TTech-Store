import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const useDocument = (nombreColeccion, documentoId) => {
  const [item, setItem] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!documentoId) return;

    const referenciaDocumento = doc(db, nombreColeccion, documentoId);

    const desvincular = onSnapshot(
      referenciaDocumento,
      (documento) => {
        if (!documento.exists()) {
          setError({
            mensaje: "El documento no existe.",
            detalle: `No se encontró el documento con id ${documentoId}`,
          });
          setItem(null);
          setCargando(false);
          return;
        }

        setItem({
          id: documento.id,
          ...documento.data(),
        });
        setCargando(false);
      },
      (err) => {
        setError({
          mensaje: "No fue posible obtener el documento.",
          detalle: err.message,
        });
        setCargando(false);
      },
    );

    return () => desvincular();
  }, [nombreColeccion, documentoId]);

  return {
    item: documentoId ? item : null,
    cargando: documentoId ? cargando : false,
    error: documentoId ? error : null,
  };
};

export default useDocument;
