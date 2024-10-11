import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaCanciones = () => {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    const obtenerCanciones = async () => {
      try {
        const { data } = await axios.get('/api/canciones'); // Cambia la URL si es necesario
        setCanciones(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error al obtener las canciones', error);
        setCanciones([]);
      }
    };

    obtenerCanciones();
  }, []);

  return (
    <div>
      <h1>Lista de Canciones</h1>
      <ul>
        {canciones.length > 0 ? (
          canciones.map((cancion) => (
            <li key={cancion._id}>
              <Link to={`/cancion/${cancion._id}`}>{cancion.titulo}</Link>
              {' '}
            </li>
          ))
        ) : (
          <li>No hay canciones disponibles</li>
        )}
      </ul>
    </div>
  );
};

export default ListaCanciones;
