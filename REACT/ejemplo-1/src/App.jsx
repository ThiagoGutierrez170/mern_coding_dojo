import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Saludo from './components/saludo';
import Mensaje from './components/mensaje';
import MiTarjeta from './components/MiTarjeta';

const App = () => {
  const nombre = 'Juan Pérez';
  const edad = 30;
  const usuario = {
    nombreUsuario: 'juanperez',
    correo: 'juan@ejemplo.com'
  };

  const pasatiempos = ['Leer', 'Jugar videojuegos', 'Senderismo'];

  return (
    <>
      <Mensaje />
      <MiTarjeta />
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{usuario.nombreUsuario}</p>
      <p>{usuario.correo}</p>
      {pasatiempos.map((pasatiempo, indice) => (
        <p key={indice}>{pasatiempo}</p>
      ))}
    </>
  );
};

export default App;