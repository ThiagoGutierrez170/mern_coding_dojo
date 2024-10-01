// App.jsx
import { useState } from 'react'
import './App.css'
import ComponenteCitas from './components/MiComponente'
import MiComponente from './components/api'
import  Axios  from './components/axios'
import ComponentePublicaciones from './components/axiosFuncional'
import ComponenteImagen from './components/axio-imagen'

function App() {

  return (
    <>
      <ComponenteCitas />
      <MiComponente />
      <Axios/>
      <ComponentePublicaciones/>
      <ComponenteImagen/>
    </>
  )
}

export default App