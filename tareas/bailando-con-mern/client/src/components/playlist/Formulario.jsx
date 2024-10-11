import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormularioPlaylist = () => {
  const [nombre, setNombre] = useState('');
  const [canciones, setCanciones] = useState([]); // Para almacenar las canciones disponibles
  const [cancionesSeleccionadas, setCancionesSeleccionadas] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCanciones = async () => {
      try {
        const { data } = await axios.get('/api/canciones');
        setCanciones(data);
      } catch (error) {
        console.error('Error al obtener las canciones:', error);
        setError('Error al obtener las canciones.');
      }
    };

    obtenerCanciones();
  }, []);

  const validarFormulario = () => {
    setError('');
    if (nombre.length < 3) {
      setError('El nombre de la playlist debe tener al menos 3 caracteres.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    try {
      const nuevaPlaylist = {
        nombre,
        canciones: cancionesSeleccionadas,
      };
      await axios.post('/api/playlists', nuevaPlaylist); 
      alert('Playlist creada exitosamente');
      navigate('/playlists');
    } catch (error) {
      console.error('Error al crear la playlist:', error);
      alert('Hubo un problema al crear la playlist.');
    }
  };

  const manejarCambioCheckbox = (id) => {
    setCancionesSeleccionadas((prev) => {
      if (prev.includes(id)) {
        return prev.filter((cancionId) => cancionId !== id); // Eliminar si ya está seleccionado
      }
      return [...prev, id]; // Agregar si no está seleccionado
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de la Playlist:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Canciones:</label>
        {canciones.map((cancion) => (
          <div key={cancion._id}>
            <input
              type="checkbox"
              id={cancion._id}
              checked={cancionesSeleccionadas.includes(cancion._id)}
              onChange={() => manejarCambioCheckbox(cancion._id)}
            />
            <label htmlFor={cancion._id}>{cancion.titulo}</label>
          </div>
        ))}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Crear Playlist</button>
    </form>
  );
};

export default FormularioPlaylist;
