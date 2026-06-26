import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  const estiloBase = "px-4 py-2 rounded transition-all duration-300 ease-in-out hover:text-blue-500";
  const estiloActivo = "text-blue-600 border-b-4 border-blue-600 bg-blue-50";
  const estiloInactivo = "text-gray-200";

  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `${estiloBase}
          ${isActive
            ? estiloActivo
            : estiloInactivo
          }
        `} to={item.path} end>
        {item.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
