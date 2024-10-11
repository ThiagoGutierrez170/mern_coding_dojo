import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DetalleCancion = () => {
  const { id } = useParams();
  const [cancion, setCancion] = useState(null);
  const navigate = useNavigate(); // Para redirigir después de eliminar

  useEffect(() => {
    const obtenerCancion = async () => {
      try {
        const { data } = await axios.get(`/api/canciones/${id}`);
        setCancion(data);
      } catch (error) {
        console.error('Error al obtener la canción', error);
      }
    };

    obtenerCancion();
  }, [id]);

  const handleDelete = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta canción?');
    if (confirmacion) {
      try {
        await axios.delete(`/api/canciones/${id}`); // Solicitud DELETE a la API
        alert('Canción eliminada correctamente');
        navigate('/lista-canciones'); // Redirigir a la lista de canciones después de eliminar
      } catch (error) {
        console.error('Error al eliminar la canción:', error);
        alert('Hubo un problema al eliminar la canción.');
      }
    }
  };

  if (!cancion) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{cancion.titulo}</h1>
      <p>Artista: {cancion.artista}</p>
      <p>Género: {cancion.genero}</p>
      <p>Álbum: {cancion.album}</p>
      <button onClick={() => navigate(`/editar-cancion/${id}`)}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DetalleCancion;
