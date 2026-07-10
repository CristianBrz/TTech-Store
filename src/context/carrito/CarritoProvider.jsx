import { useState } from "react";
import { CarritoContext } from "./CarritoContext";

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const itemCarrito = carrito.find((item) => item.id === producto.id);

    if (itemCarrito) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item,
      );

      setCarrito(carritoActualizado);
    } else {
      setCarrito((carritoPrevio) => [
        ...carritoPrevio,
        { ...producto, cantidad },
      ]);
    }
  };

  const limpiarCarrito = () => setCarrito([]);

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item,
      ),
    );
  };

  const getCantidadCarrito = () =>
    carrito.reduce((acum, item) => acum + item.cantidad, 0);

  const getTotalCarrito = () =>
    carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        limpiarCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        getCantidadCarrito,
        getTotalCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
