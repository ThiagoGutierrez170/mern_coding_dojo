import React, { useState } from 'react'



function useStateEjemplo() {
  // Declarar una variable de estado llamada "clicks" e inicializarla en 0
  const [clicks, setClicks] = useState(0);
 
  // Función para incrementar el contador de clicks
  const incrementarClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <p>Has hecho clic {clicks} veces</p>
      <button onClick={incrementarClicks}>Haz clic aquí</button>
    </div>
  );
}

export default useStateEjemplo
