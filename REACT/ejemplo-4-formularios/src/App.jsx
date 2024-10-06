import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioUsuario from './components/FormularioUsuario'
import FormularioViaje from './components/FormularioErrores'
import Formulario from './components/FormularioMarcarError'
import FormularioAnidado from './components/FormularioAnidado'
import FormularioUseReducer from './components/UseReducer/FormularioUseReducre'
import FormPersonal from './components/UseReducer_simple/FormPersonal'

function App() {

  return (
    <>
      <FormularioUsuario/>
      <FormularioViaje/>
      <Formulario/>
      <h2>formulario anidado</h2>
      <FormularioAnidado/>
      <h2>formulario con useReducer</h2>
      <FormularioUseReducer/>
      <h2>formulario con useReducer con objetos</h2>
      <FormPersonal/>
    </>
  )
}

export default App
