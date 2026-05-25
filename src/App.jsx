import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Productos from "./components/pages/Productos";
import DetalleProducto from "./components/pages/DetalleProducto";
import Home from "./components/pages/Home";

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
              <h1 className="h-dvh bg-orange-800 text-zinc-300">Carrito</h1>
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
