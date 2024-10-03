import React from 'react';
import { useParams } from 'react-router-dom';

const datosUsuarios = {
  juan: {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero',
  },
  maria: {
    nombre: 'Maria',
    edad: 30,
    profesion: 'Doctora',
  },
  pedro: {
    nombre: 'Pedro',
    edad: 28,
    profesion: 'Profesor',
  },
};

const Usuario = () => {
  const { nombreUsuario } = useParams();  // Capturamos el parámetro de la URL
  const usuario = datosUsuarios[nombreUsuario];  // Buscamos los datos según el nombre

  if (!usuario) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <p>Edad: {usuario.edad}</p>
      <p>Profesión: {usuario.profesion}</p>
    </div>
  );
};

export default Usuario;