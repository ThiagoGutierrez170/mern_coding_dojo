import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
  const { id } = useParams(); // Obtener el ID del usuario desde la URL
  const navigate = useNavigate(); // Para navegar después de editar
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [gmail, setGmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const { data } = await axios.get(`/api/usuarios/${id}`);
        setNombreUsuario(data.nombreUsuario);
        setGmail(data.gmail);
        // No se debe mostrar la contraseña por razones de seguridad
      } catch (error) {
        console.error('Error al obtener el usuario', error);
      }
    };

    obtenerUsuario();
  }, [id]);

  const validarFormulario = () => {
    setError('');
    if (nombreUsuario.length < 4) {
      setError('El nombre de usuario debe tener al menos 4 caracteres.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(gmail)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return false;
    }
    if (contraseña.length > 0 && contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar el formulario antes de enviar
    if (!validarFormulario()) {
      return;
    }

    try {
      const usuarioActualizado = { nombreUsuario, gmail };
      if (contraseña) {
        usuarioActualizado.contraseña = contraseña; // Solo enviar contraseña si se ha proporcionado
      }
      await axios.put(`/api/usuarios/${id}`, usuarioActualizado);
      alert('Usuario actualizado exitosamente');
      navigate('/'); // Redirigir a la lista de usuarios
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      alert('Hubo un problema al actualizar el usuario.');
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
        <label>Contraseña (dejar en blanco si no deseas cambiarla):</label>
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}
      <button type="submit">Actualizar usuario</button>
    </form>
  );
};

export default EditarUsuario;
