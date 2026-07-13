import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
