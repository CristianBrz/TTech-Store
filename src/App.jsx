import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/productos"
            element={<Productos />}
          />
          <Route
            path="/contacto"
            element={
              <h1 className="h-dvh bg-orange-800 text-zinc-300">Contacto</h1>
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito />
            }
          />
          <Route
            path="/producto/:id"
            element={
              <DetalleProducto />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
