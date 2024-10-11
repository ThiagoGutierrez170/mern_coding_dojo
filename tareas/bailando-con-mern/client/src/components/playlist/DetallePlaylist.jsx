import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DetallePlaylist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerPlaylist = async () => {
      try {
        const { data } = await axios.get(`/api/playlists/${id}`);
        setPlaylist(data);
      } catch (error) {
        console.error('Error al obtener la playlist', error);
        setError('Error al obtener la playlist.');
      }
    };

    obtenerPlaylist();
  }, [id]);

  const manejarEliminar = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar esta playlist?');
    if (confirmacion) {
      try {
        await axios.delete(`/api/playlists/${id}`);
        alert('Playlist eliminada exitosamente');
        navigate('/playlists'); // Redirigir a la lista de playlists después de eliminar
      } catch (error) {
        console.error('Error al eliminar la playlist', error);
        alert('Hubo un problema al eliminar la playlist.');
      }
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!playlist) {
    return <p>Cargando...</p>; // Puedes personalizar este mensaje
  }

  return (
    <div>
      <h2>{playlist.nombre}</h2>
      <h3>Canciones:</h3>
      <ul>
        {playlist.canciones.map((cancion) => (
          <li key={cancion._id}>{cancion.titulo}</li>
        ))}
      </ul>
      <button onClick={() => navigate(`/editar-playlist/${id}`)}>Editar Playlist</button>
      <button onClick={manejarEliminar}>Eliminar Playlist</button>
    </div>
  );
};

export default DetallePlaylist;
