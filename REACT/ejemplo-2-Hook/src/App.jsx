import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateEjemplo from './components/useStateEjemplo'
import UseEffectsEjemplo from './components/UseEffectsEjemplo'
import ContadorDeClics from './components/ContadorDeClicks'
import Destino from './components/Destino'
function App() {

  return (
    <>
        <UseStateEjemplo/><br />
        <UseEffectsEjemplo/> <br />
        <ContadorDeClics/> <br />
        <Destino lugar="París" impuesto={0.1} />
        <Destino lugar="Tokio" impuesto={0.08} />
        <Destino lugar="Nueva York" impuesto={0.0925} />
    </>
  )
}

export default App;