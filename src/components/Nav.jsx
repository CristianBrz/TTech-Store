import NavItem from './NavItem';

const Nav = () => {
  const paginas = [
    { name: "Home", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Contacto", path: "/contacto" },
    { name: "Carrito", path: "/carrito" },
  ];
  // TODO: Hacer responsive con hamburger menu

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between gap-4">
        {paginas.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
