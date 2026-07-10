import Empleados from "../components/Empleados";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <Empleados/>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2026 TTech Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
