import NavItem from './NavItem';
import { useContext } from 'react';
import { CarritoContext } from '../context/carrito/CarritoContext';

const Nav = () => {
  const { getCantidadCarrito } = useContext(CarritoContext);
  const cantidadCarrito = getCantidadCarrito();

  const paginas = [
    { nombre: "Home", path: "/" },
    { nombre: "Productos", path: "/productos" },
    { nombre: "Contacto", path: "/contacto" },
    { nombre: "Carrito", path: "/carrito", cantidad: cantidadCarrito },
  ];
  // TODO: Hacer responsive con hamburger menu

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between gap-4">
        {paginas.map((item) => (
          <NavItem key={item.nombre} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
