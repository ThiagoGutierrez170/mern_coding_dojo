import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDeHeroes from './components/ListaDeHeroes'
import Registro from './components/Registro'
import heroeImg from './img/Heroe.png';

function App() {
  const ListaHeroeBase = [
    {
      nombre: 'roberto',
      apellido: 'gimenez',
      correo: 'roberto@gmail.com',
      contraseña: '12345678'
    },
    {
      nombre: 'María',
      apellido: 'Pérez',
      correo: 'maria@gmail.com',
      contraseña: '87654321'
    }
  ];

  const [direccion,setDireccion]=useState(false);
  const [ListaHeroe,setListaHeroe]=useState(ListaHeroeBase);
  
  const agregarHeroe = (nombre,apellido,correo,contraseña)=>{
    const nuevoHeroe={
      nombre,apellido,correo,contraseña
    }
    setListaHeroe([...ListaHeroe,nuevoHeroe]);
  };

  return (
    <>
      <div>
        <div className='nav'>
          <button onClick={()=>setDireccion(!direccion)} className='registro'>{direccion?"Ir al Registro":"Ver Lista"}</button>
          <h1 id='titulo'>{direccion?"Superhéroes de la Liga":"Bienvenido a la Liga de Superhéroes"}</h1>
          <img src={heroeImg} alt="Heroe" style={{height:"200px"}}/>
        </div>
        {direccion
          ?
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Contraseña</th>
              </tr>
            </thead>
              {ListaHeroe.map((heroe,index) => (
              <ListaDeHeroes 
                key={index}
                nombre={heroe.nombre}
                apellido={heroe.apellido}
                correo={heroe.correo}
                contraseña={heroe.contraseña}
              />
            ))}
          </table>
          :<Registro agregarHeroe={agregarHeroe}/>
        }
      </div>
    </>
  )
}

export default App
