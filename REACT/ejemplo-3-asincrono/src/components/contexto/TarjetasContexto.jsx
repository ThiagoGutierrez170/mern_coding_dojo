import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const TarjetasContexto = createContext();

// Creamos un proveedor del contexto
export const ProveedorTarjetas = ({ children }) => {
  const [tarjetas, setTarjetas] = useState([
    { id: 1, titulo: 'Tarjeta 1', activa: true },
    { id: 2, titulo: 'Tarjeta 2', activa: false },
    { id: 3, titulo: 'Tarjeta 3', activa: true },
  ]);

  // Función para cambiar el estado de una tarjeta
  const toggleEstadoTarjeta = (id) => {
    setTarjetas((prevTarjetas) =>
      prevTarjetas.map((tarjeta) =>
        tarjeta.id === id ? { ...tarjeta, activa: !tarjeta.activa } : tarjeta
      )
    );
  };

  return (
    <TarjetasContexto.Provider value={{ tarjetas, toggleEstadoTarjeta }}>
      {children}
    </TarjetasContexto.Provider>
  );
};

// Hook para acceder al contexto
export const usarTarjetas = () => {
  return useContext(TarjetasContexto);
};
