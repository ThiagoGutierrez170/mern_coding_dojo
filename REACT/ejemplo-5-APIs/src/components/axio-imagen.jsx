import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComponenteImagen = () => {
  const [imagen, setImagen] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const obtenerImagen = async () => {
    setCargando(true);
    try {
      // Solicitud a la API de Picsum para obtener una imagen aleatoria
      const respuesta = await axios.get('https://picsum.photos/800/600', {
        responseType: 'blob' // Necesario para manejar la imagen como blob
      });
      setImagen(URL.createObjectURL(respuesta.data)); // Crear una URL de objeto para la imagen blob
      setError(null);
    } catch (error) {
      setError('Error al obtener la imagen. Inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerImagen();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Imagen Aleatoria de Picsum</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img src={imagen} alt="Imagen aleatoria" style={{ width: '800px', height: '600px', objectFit: 'cover' }} />
      )}
      <br />
      <button onClick={obtenerImagen} disabled={cargando} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        {cargando ? 'Cargando...' : 'Obtener Nueva Imagen'}
      </button>
    </div>
  );
};

export default ComponenteImagen;
