import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/carrito/CarritoProvider";

const BotonCarrito = () => {
  const { getCantidadCarrito } = useCarrito();
  const cantidad = getCantidadCarrito();

  return (
    <Link to="/carrito" className="mr-4 relative">
      <FontAwesomeIcon icon={faCartShopping} />
      {cantidad > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {cantidad}
        </span>
      )}
    </Link>
  )
}

export default BotonCarrito
