import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const BotonCarrito = () => {
  return (
    <Link to="/carrito" className="mr-4">
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  )
}

export default BotonCarrito