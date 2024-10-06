import React from 'react';
import Tarjeta from './Tarjeta';
import { usarTarjetas } from './TarjetasContexto';

const ListaTarjetas = () => {
  const { tarjetas } = usarTarjetas();

  return (
    <div>
      <h1>Lista de Tarjetas</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tarjetas.map((tarjeta) => (
          <Tarjeta key={tarjeta.id} id={tarjeta.id} />
        ))}
      </div>
    </div>
  );
};

export default ListaTarjetas;
