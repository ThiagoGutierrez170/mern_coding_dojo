import React, { useState } from 'react';

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Hacer las compras', completada: false },
    { id: 2, texto: 'Limpiar la casa', completada: false },
    { id: 3, texto: 'Hacer ejercicio', completada: false }
  ]);

  // Función para alternar el estado de completada de una tarea
  const alternarCompletada = (id) => {
    setTareas(prevTareas =>
      prevTareas.map(tarea =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map(tarea => (
          <li
            key={tarea.id}
            style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
            onClick={() => alternarCompletada(tarea.id)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;