import { useState } from 'react';

const MiComponente = () => {
  const [texto, setTexto] = useState('');

  const manejarCambio = (evento) => {
    setTexto(evento.target.value);
  };

  const manejarClick = () => {
    console.log("Antes de actualizar el estado:", texto); // Registro del estado actual antes de actualizarlo

    setTexto(''); // Actualización asíncrona del estado para limpiar el campo de entrada

    console.log("Después de actualizar el estado:", texto); // Registro del estado inmediatamente después de actualizarlo
  };

  return (
    <div>
      <input type="text" value={texto} onChange={manejarCambio} placeholder="Escribe algo..." />
      <button onClick={manejarClick}>Mostrar y Limpiar</button>
      <p>Valor del campo: {texto}</p>
    </div>
  );
};

export default MiComponente;