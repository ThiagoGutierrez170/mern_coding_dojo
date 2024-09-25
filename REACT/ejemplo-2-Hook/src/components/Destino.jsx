import React, { useState } from 'react'

function Destino({lugar,impuesto}) {
    const [costoActividad, setCostoActividad] = useState(0);

    const calcularCostoFinal = (costo) => {
        let impuestoAplicado = costo * impuesto;
        setCostoActividad(Number(costo) + impuestoAplicado);
    };

  return (
    <div>
        <input type="number" onChange={(e) => calcularCostoFinal(e.target.value)} />
        <p>Costo en {lugar}: ${costoActividad.toFixed(2)}</p>
    </div>
  );
}

export default Destino;