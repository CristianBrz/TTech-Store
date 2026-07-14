
import StockItem from "./StockItem";

const ListaStock = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1', stock: 10 },
    { id: 2, nombre: 'Producto 2', stock: 20 },
    { id: 3, nombre: 'Producto 3', stock: 30 },
  ];

  return (
    <div className="w-full">
      <ul className="space-y-3">
        {productos.map(producto => (
          <StockItem key={producto.id} producto={producto} />
        ))}
      </ul>
    </div>


  )
}

export default ListaStock