import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComponentePublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener publicaciones de la API
  const obtenerPublicaciones = async () => {
    setCargando(true);
    try {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPublicaciones(respuesta.data.slice(0, 5)); // Mostramos solo las primeras 5 publicaciones
      setError(null);
    } catch (error) {
      setError('Error al obtener las publicaciones. Inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  // Usamos useEffect para obtener las publicaciones al montar el componente
  useEffect(() => {
    obtenerPublicaciones();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Publicaciones</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {publicaciones.map((publicacion) => (
            <li key={publicacion.id}>
              <h2>{publicacion.title}</h2>
              <p>{publicacion.body}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={obtenerPublicaciones} disabled={cargando} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {cargando ? 'Cargando...' : 'Actualizar Publicaciones'}
      </button>
    </div>
  );
};

export default ComponentePublicaciones;
