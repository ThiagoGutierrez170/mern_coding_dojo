// src/ContextoAuth.jsx
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para autenticación
const ContextoAuth = createContext();

// Proveedor del contexto que envuelve los componentes
export const ProveedorAuth = ({ children }) => {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  // Función para iniciar sesión
  const iniciarSesion = () => setEstaAutenticado(true);
  
  // Función para cerrar sesión
  const cerrarSesion = () => setEstaAutenticado(false);

  // Proveemos el estado y las funciones necesarias
  return (
    <ContextoAuth.Provider value={{ estaAutenticado, iniciarSesion, cerrarSesion }}>
      {children}
    </ContextoAuth.Provider>
  );
};

// Hook personalizado para usar el contexto en otros componentes
export const usarAuth = () => useContext(ContextoAuth);
