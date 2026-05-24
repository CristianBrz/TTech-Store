import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li>
      <Link
        className="hover:text-gray-300 transition-colors"
        to={item.path}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default NavItem;