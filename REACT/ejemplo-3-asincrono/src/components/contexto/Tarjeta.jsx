import React from 'react';
import { usarTarjetas } from './TarjetasContexto';

const Tarjeta = ({ id }) => {
  const { tarjetas, toggleEstadoTarjeta } = usarTarjetas();
  const tarjeta = tarjetas.find((t) => t.id === id);

  if (!tarjeta) {
    return <div>Tarjeta no encontrada</div>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', textAlign: 'center' }}>
      <h2>{tarjeta.titulo}</h2>
      <p>Estado: {tarjeta.activa ? 'Activa' : 'Inactiva'}</p>
      <button onClick={() => toggleEstadoTarjeta(id)}>
        {tarjeta.activa ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
};

export default Tarjeta;
