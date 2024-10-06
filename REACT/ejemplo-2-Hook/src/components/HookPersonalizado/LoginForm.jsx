import React from 'react';
import useLoginForm from './UseLoginForm'; // Asegúrate de que la ruta sea correcta

function FormularioInicioSesion() {
  const [valores, errores, handleChange, handleSubmit] = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            name="username"
            value={valores.username}
            onChange={handleChange}
          />
        </label>
        {errores.username && <p>{errores.username}</p>}
      </div>
      <div>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={valores.password}
            onChange={handleChange}
          />
        </label>
        {errores.password && <p>{errores.password}</p>}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default FormularioInicioSesion;
