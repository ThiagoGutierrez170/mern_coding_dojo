import React, { useState } from 'react';

const ContadorDeClics = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>¡Haz clic!</button>
      <p>Has hecho clic {contador} veces</p>
    </div>
  );
}

export default ContadorDeClics;