import { NavLink } from "react-router-dom";

const NavItem = ({ nombre, path, cantidad }) => {
  const estiloBase = "px-4 py-2 rounded transition-all duration-200 ease-in-out hover:text-blue-500";
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
        `} to={path} end>
        {nombre}
        {cantidad !== undefined && cantidad > 0 && (
          <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cantidad}
          </span>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
