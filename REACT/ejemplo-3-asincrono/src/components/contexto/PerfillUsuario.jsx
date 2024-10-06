// src/PerfilUsuario.jsx
import React from 'react';
import { usarAuth } from './ContextoAuth'; // Accedemos al contexto

const PerfilUsuario = () => {
  const { estaAutenticado, iniciarSesion, cerrarSesion } = usarAuth(); // Usamos los valores del contexto

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {/* Mostramos el estado de autenticación */}
      <p>Estado: {estaAutenticado ? 'Conectado' : 'Desconectado'}</p>

      {/* Botones para cambiar el estado de autenticación */}
      <button onClick={iniciarSesion} disabled={estaAutenticado}>Iniciar Sesión</button>
      <button onClick={cerrarSesion} disabled={!estaAutenticado}>Cerrar Sesión</button>
    </div>
  );
};

export default PerfilUsuario;
