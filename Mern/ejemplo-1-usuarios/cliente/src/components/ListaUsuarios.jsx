import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const { data } = await axios.get('/api/usuarios'); // Cambia la URL si es necesario
        setUsuarios(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
        setUsuarios([]);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleDelete = async (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmacion) {
      try {
        await axios.delete(`/api/usuarios/${id}`); // Solicitud DELETE a la API
        setUsuarios(usuarios.filter((usuario) => usuario._id !== id)); // Eliminar el usuario de la lista en el estado
        alert('Usuario eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        alert('Hubo un problema al eliminar el usuario.');
      }
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link to="/nuevo-usuario">Agregar Usuario</Link>
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario._id}>
              <Link to={`/usuario/${usuario._id}`}>{usuario.nombreUsuario}</Link>
              {' '}
              <button onClick={() => handleDelete(usuario._id)}>Eliminar</button> {/* Botón para eliminar */}
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
