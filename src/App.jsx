import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Dashboard from "./pages/Dashboard";
import FormularioAgregarProducto from "./components/forms/FormularioAgregarProducto";
import FormularioEditarProducto from "./components/forms/FormularioEditarProducto";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agregar-producto" element={<FormularioAgregarProducto />} />
          <Route path="/editar-producto/:id" element={<FormularioEditarProducto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
