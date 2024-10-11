// components/playlists/EditarPlaylist.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarPlaylist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [cancionesSeleccionadas, setCancionesSeleccionadas] = useState([]); // Array de IDs de canciones seleccionadas
  const [listaCanciones, setListaCanciones] = useState([]); // Todas las canciones disponibles
  const [error, setError] = useState('');

  // Función para obtener la playlist y las canciones disponibles
  useEffect(() => {
    const obtenerPlaylist = async () => {
      try {
        const { data } = await axios.get(`/api/playlists/${id}`);
        setNombre(data.nombre);
        // Extraer solo los IDs de las canciones seleccionadas
        setCancionesSeleccionadas(data.canciones.map(cancion => cancion._id)); 
      } catch (error) {
        console.error('Error al obtener la playlist', error);
        setError('Error al obtener la playlist.');
      }
    };

    const obtenerCanciones = async () => {
      try {
        const { data } = await axios.get('/api/canciones'); // Ruta para obtener todas las canciones
        setListaCanciones(data);
      } catch (error) {
        console.error('Error al obtener canciones', error);
        setError('Error al obtener canciones.');
      }
    };

    obtenerPlaylist();
    obtenerCanciones();
  }, [id]);

  // Función para manejar el envío del formulario
  const manejarSubmit = async (e) => {
    e.preventDefault();

    try {
      const playlistActualizada = { nombre, canciones: cancionesSeleccionadas }; // Enviar solo IDs de las canciones seleccionadas
      await axios.put(`/api/playlists/${id}`, playlistActualizada);
      alert('Playlist actualizada exitosamente');
      navigate(`/playlist/${id}`); // Redirigir a la vista de detalle de la playlist
    } catch (error) {
      console.error('Error al actualizar la playlist:', error);
      alert('Hubo un problema al actualizar la playlist.');
    }
  };

  // Función para manejar el cambio en los checkboxes
  const manejarCheckboxChange = (cancionId) => {
    if (cancionesSeleccionadas.includes(cancionId)) {
      // Si la canción ya está seleccionada, la eliminamos
      setCancionesSeleccionadas(cancionesSeleccionadas.filter((id) => id !== cancionId));
    } else {
      // Si no está seleccionada, la agregamos
      setCancionesSeleccionadas([...cancionesSeleccionadas, cancionId]);
    }
  };

  if (error) {
    return <p>{error}</p>; // Mostrar error si existe
  }

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>Nombre de la Playlist:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <h3>Seleccionar Canciones:</h3>
      <div>
        {listaCanciones.map((cancion) => (
          <div key={cancion._id}> {/* Asegúrate de que _id sea único */}
            <input
              type="checkbox"
              checked={cancionesSeleccionadas.includes(cancion._id)} // Marca si la canción está seleccionada
              onChange={() => manejarCheckboxChange(cancion._id)} // Manejar cambio en el checkbox
            />
            <label>{cancion.titulo}</label>
          </div>
        ))}
      </div>
      <button type="submit">Actualizar Playlist</button>
      <button type="button" onClick={() => navigate(`/playlist/${id}`)}>Cancelar</button>
    </form>
  );
};

export default EditarPlaylist;
