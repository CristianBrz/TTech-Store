import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Contador({ cantidadInicial = 1, onCantidadChange, stock }) {
  const [contador, setContador] = useState(cantidadInicial);

  const incrementarContador = () => {
    if (stock && contador >= stock) {
      return;
    }
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
    if (onCantidadChange) {
      onCantidadChange(nuevoContador);
    }
  }

  const decrementarContador = () => {
    if (contador <= 1) {
      return;
    }
    const nuevoContador = contador - 1;
    setContador(nuevoContador);
    if (onCantidadChange) {
      onCantidadChange(nuevoContador);
    }
  }

  return (
    <div className="flex items-center gap-4 bg-orange-50 p-2 rounded-lg justify-around">
      <button className='bg-orange-200 text-sm px-2 py-1 rounded-lg' onClick={() => decrementarContador()}>
        <FontAwesomeIcon className='text-orange-700' icon={faMinus} />
      </button>

      <p className="text-xl font-bold text-orange-900 text-center border-orange-300 w-8">{contador}</p>

      <button className='bg-orange-200 text-sm px-2 py-1 rounded-lg' onClick={() => incrementarContador()}>
        <FontAwesomeIcon className='text-orange-700' icon={faPlus} />
      </button>
    </div>
  );
}
export default Contador;