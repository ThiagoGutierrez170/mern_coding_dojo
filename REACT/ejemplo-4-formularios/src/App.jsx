import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import FormularioViaje from './components/FormularioErrores'
import Formulario from './components/FormularioMarcarError'
function App() {

  return (
    <>
      <FormularioUsuario/>
      <FormularioViaje/>
      <Formulario/>
    </>
  )
}

export default App
