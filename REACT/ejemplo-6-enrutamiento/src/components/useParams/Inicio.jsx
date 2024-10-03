import React from 'react';
import { Link } from 'react-router-dom';

const usuarios = [
  { nombre: 'Juan', ruta: 'juan' },
  { nombre: 'Maria', ruta: 'maria' },
  { nombre: 'Pedro', ruta: 'pedro' },
];

const Inicio = () => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.ruta}>
            <Link to={`/usuario/${usuario.ruta}`}>{usuario.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inicio;
