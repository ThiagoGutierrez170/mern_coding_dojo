import React, { useReducer, useState } from 'react';
import { estadoInicial, reductorTareas } from './Reducer'; // Usamos los nombres en español

const FormularioUseReducer = () => {
  const [state, dispatch] = useReducer(reductorTareas, estadoInicial);
  const [nuevaTarea, setNuevaTarea] = useState(''); // Manejamos el input de la nueva tarea

  // Función para manejar la adición de una nueva tarea
  const manejarAgregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      dispatch({ type: 'AGREGAR_TAREA', payload: nuevaTarea });
      setNuevaTarea(''); // Limpiar el input después de agregar
    } else {
      // Validación en caso de tarea vacía
      alert('¡La tarea no puede estar vacía!');
    }
  };

  // Función para alternar el estado de completada/no completada de una tarea
  const manejarAlternarCompletada = (idTarea) => {
    dispatch({ type: 'TOGGLE_COMPLETADA', payload: idTarea });
  };

  // Función para eliminar una tarea
  const manejarEliminarTarea = (idTarea) => {
    dispatch({ type: 'ELIMINAR_TAREA', payload: idTarea });
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      
      {/* Formulario para agregar nueva tarea */}
      <form onSubmit={manejarAgregarTarea}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      {/* Lista de tareas */}
      <ul>
        {state.tareas.length > 0 ? (
          state.tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
            >
              {tarea.texto} {/* id: {tarea.id} */}

              {/* Botón para marcar como completada/desmarcar */}
              <button onClick={() => manejarAlternarCompletada(tarea.id)}>
                {tarea.completada ? 'Desmarcar' : 'Completar'}
              </button>

              {/* Botón para eliminar tarea */}
              <button onClick={() => manejarEliminarTarea(tarea.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay tareas disponibles</p> // Mensaje si no hay tareas
        )}
      </ul>
    </div>
  );
};

export default FormularioUseReducer;
