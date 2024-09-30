import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './components/Lista'
import Formulario from './components/Formulario'
import Filtro from './components/Filtro'

function App() {
  const notasBase =[
    {id: 1,nota:"hacer la tarea",prioridad:"Media"},
    {id: 2,nota:"hacer la tarea de robotica",prioridad:"Baja"},
    {id: 3,nota:"hacer la tarea de programancion",prioridad:"Alta"}
  ]
  const [listaNotas,setListaNotas]=useState(notasBase);
  const [notasFiltradas,setNotasFiltradas]=useState(listaNotas);

  const agregarNota = (nota,prioridad)=>{
    const id = listaNotas.length + 1;
    const nuevaNota={
      id,nota,prioridad
    }
    setListaNotas([...listaNotas,nuevaNota]);
    setNotasFiltradas([...listaNotas, nuevaNota]);
  };

  const eliminarNota=(id)=>{
    const nuevaNota=listaNotas.filter(nota => nota.id !== id);
    setListaNotas(nuevaNota);
    setNotasFiltradas(nuevaNota);
  }

  return (
    <>
      <Formulario agregarNota={agregarNota}/>
      <Filtro 
        listaNotas={listaNotas}
        setNotasFiltradas={setNotasFiltradas}
      />
      {notasFiltradas.map((nota) => (
        <Lista
          key={nota.id} // Es recomendable usar id como clave
          id={nota.id}
          nota={nota.nota}
          prioridad={nota.prioridad}
          eliminarNota={eliminarNota}
        />
      ))}
    </>
  )
}

export default App
