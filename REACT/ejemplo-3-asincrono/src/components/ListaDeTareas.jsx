import { useState, useEffect } from 'react';

const ListaDeTareas = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (evento) => {
    setTarea(evento.target.value);
  };

  const agregarTarea = () => {
    if (tarea.trim() === '') return;

    // Agregamos la tarea al estado actual
    setTareas(prevTareas => [...prevTareas, tarea]);

    // Limpiar el campo de entrada
    setTarea('');
  };

  // Usar useEffect para manejar efectos secundarios después de actualizar tareas
  useEffect(() => {
    if (tareas.length > 0) {
      console.log("Estado de tareas actualizado:", tareas);
      setMensaje('Tarea añadida correctamente');
    }
  }, [tareas]); // Este efecto se ejecuta cada vez que 'tareas' cambie

  return (
    <div>
      <input type="text" value={tarea} onChange={manejarCambio} placeholder="Escribe una tarea..." />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <p>{mensaje}</p>
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas;
