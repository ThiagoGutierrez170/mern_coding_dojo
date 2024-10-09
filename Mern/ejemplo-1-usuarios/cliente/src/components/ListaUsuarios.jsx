import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const { data } = await axios.get('/api/usuarios'); // Cambia la URL si es necesario
        console.log('Datos de usuarios:', data); // Para depuración
        setUsuarios(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
        setUsuarios([]);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link to="/nuevo-usuario">Agregar Usuario</Link>
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario._id}>
              <Link to={`/usuario/${usuario._id}`}>{usuario.nombreUsuario}</Link> {/* Usa nombreUsuario aquí */}
            </li>
          ))
        ) : (
          <li>No hay usuarios disponibles</li>
        )}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
