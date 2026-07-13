import NavItem from './NavItem';
import { useContext, useState } from 'react';
import { CarritoContext } from '../context/carrito/CarritoContext';

const Nav = () => {
  const { getCantidadCarrito } = useContext(CarritoContext);
  const cantidadCarrito = getCantidadCarrito();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const paginas = [
    { nombre: "Home", path: "/" },
    { nombre: "Productos", path: "/productos" },
    { nombre: "Contacto", path: "/contacto" },
    { nombre: "Carrito", path: "/carrito", cantidad: cantidadCarrito },
  ];

  return (
    <nav className="relative bg-gray-800 text-white p-4">
      <button
        type="button"
        className="flex flex-col gap-1 md:hidden"
        aria-label={menuAbierto ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto((abierto) => !abierto)}
      >
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
      </button>

      <ul
        className={`${menuAbierto ? "flex" : "hidden"} absolute right-0 top-full z-10 w-48 flex-col gap-2 bg-gray-800 p-4 shadow-lg md:static md:flex md:w-auto md:flex-row md:justify-between md:gap-4 md:p-0 md:shadow-none`}
        onClick={() => setMenuAbierto(false)}
      >
        {paginas.map((item) => (
          <NavItem key={item.nombre} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;