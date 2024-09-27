import { useState } from 'react';
import './App.css';
import Mensaje from './components/mensaje';
import MiTarjeta from './components/MiTarjeta';
import ListaDeTareas from './components/Tareas';
import FiltrarTarjetas from './components/FiltrarTarjeta';

const App = () => {
  const nombre = 'Juan Pérez';
  const edad = 30;
  const usuario = {
    nombreUsuario: 'juanperez',
    correo: 'juan@ejemplo.com'
  };

  const pasatiempos = ['Leer', 'Jugar videojuegos', 'Senderismo'];

  const tarjetas = [
    { titulo: "Tarjeta 1", contenido: "Esta es la primera tarjeta." },
    { titulo: "Tarjeta 2", contenido: "Aprende React y sus fundamentos." },
    { titulo: "Tarjeta 3", contenido: "Usa hooks para manejar el estado." },
    { titulo: "Tarjeta 4", contenido: "Componentes reutilizables son muy útiles." },
    { titulo: "Tarjeta 5", contenido: "Explora la documentación oficial de React." },
  ];
  const [listaTarjetas, setlistaTarjetas] = useState(tarjetas);
  const [tarjetasFiltradas, setTarjetasFiltradas] = useState(tarjetas);
  

  return (
    <>
      <Mensaje />
      <FiltrarTarjetas 
        listaTarjetas={listaTarjetas} 
        setTarjetasFiltradas={setTarjetasFiltradas} 
      />
      <div className='tarjetas'>
        {tarjetasFiltradas.map((tarjeta, index) => (
          <MiTarjeta 
            titulo={tarjeta.titulo}
            contenido={tarjeta.contenido}
            key={index} 
          />
        ))}
      </div>
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{usuario.nombreUsuario}</p>
      <p>{usuario.correo}</p>
      {pasatiempos.map((pasatiempo, indice) => (
        <p key={indice}>{pasatiempo}</p>
      ))}
      <ListaDeTareas />
    </>
  );
};

export default App;
