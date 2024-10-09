import React, { useState } from 'react';
import axios from 'axios';

const FormularioUsuario = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [gmail, setGmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const validarFormulario = () => {
    // Reiniciar el error antes de validar
    setError('');

    // Validar el nombre de usuario
    if (nombreUsuario.length < 4) {
      setError('El nombre de usuario debe tener al menos 3 caracteres.');
      return false;
    }

    // Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(gmail)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return false;
    }

    // Validar la contraseña
    if (contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviar
    if (!validarFormulario()) {
      return; // Si la validación falla, no se envía el formulario
    }

    try {
      const usuario = { nombreUsuario, gmail, contraseña };
      await axios.post('/api/usuarios', usuario);
      alert('Usuario creado exitosamente');
      // Reiniciar el formulario
      setNombreUsuario('');
      setGmail('');
      setContraseña('');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      alert('Hubo un problema al crear el usuario.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de usuario:</label>
        <input
          type="text"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Gmail:</label>
        <input
          type="email"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}
      <button type="submit">Crear usuario</button>
    </form>
  );
};

export default FormularioUsuario;
