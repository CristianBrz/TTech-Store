import { useState, useContext, createContext } from "react";
// import { CarritoContext } from "./CarritoContext";

export const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);

  if (!context) {
    throw new Error("useCarrito debe ser usado dentro de un CarritoProvider");
  }

  return context;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const intemsCarrito = carrito.find((item) => item.id === producto.id);

    if (intemsCarrito) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item,
      );

      setCarrito(carritoActualizado);
    } else {
      setCarrito((carritoPrevio) => [...carritoPrevio, { ...producto, cantidad }]);
    }
  };

  const limpiarCarrito = () => setCarrito([]);

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter((item) => item.id !== id);
    setCarrito(carritoActualizado);
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    const carritoActualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    );
    setCarrito(carritoActualizado);
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
