import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const contenedor={
    marginLeft: "200px"
  };
  return (
    <>
      <h1>¡Bienvenido a mi aplicación de React!</h1>
      <div style={contenedor}>
        <h2>Lista de cosas por hacer:</h2>
        <ul>
          <li>Aprender React</li>
          <li>Practicar con Vite</li>
          <li>Construir proyectos increibles</li>
        </ul>
      </div>
    </>
  )
}

export default App
