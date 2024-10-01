import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  // useEffect para llamar a la API cuando el componente se monta
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Solicitud a la API real
      .then((response) => response.json()) // Parseamos la respuesta a JSON
      .then((data) => {
        setDatos(data);    // Guardamos los datos obtenidos en el estado
        setCargando(false); // Indicamos que la carga ha terminado
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error); // Manejamos el error
        setCargando(false); // Indicamos que ya no estamos cargando aunque haya error
      });
  }, []); // El array vacío [] significa que se ejecuta una vez al montar el componente

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios:</h1>
      <ul>
        {/* Iteramos sobre los datos y mostramos cada usuario */}
        {datos.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiComponente;
