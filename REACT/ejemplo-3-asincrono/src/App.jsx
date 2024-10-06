import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiComponente from './components/MiComponente'
import ListaDeTareas from './components/ListaDeTareas'
import PerfilUsuario from './components/contexto/PerfillUsuario'
import ListaTarjetas from './components/contexto/ListaTarjetas'

function App() {

  return (
    <>
      <MiComponente/>
      <ListaDeTareas/>
      <h1>Aplicación con Contexto de Autenticación</h1>
      <PerfilUsuario />
      <p>ejemplo de tarjetas usando contexto</p>
      <ListaTarjetas />
    </>
  )
}

export default App
