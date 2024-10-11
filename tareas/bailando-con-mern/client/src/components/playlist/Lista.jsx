import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerPlaylists = async () => {
      try {
        const { data } = await axios.get('/api/playlists');
        setPlaylists(data);
      } catch (error) {
        setError('Error al obtener las playlists.');
        console.error('Error al obtener las playlists:', error);
      }
    };

    obtenerPlaylists();
  }, []);

  return (
    <div>
      <h1>Lista de Playlists</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>
            <Link to={`/playlist/${playlist._id}`}>{playlist.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPlaylists;
