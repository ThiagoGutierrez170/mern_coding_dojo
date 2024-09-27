import React, { useState, useRef, useEffect } from 'react';

const FormularioUsuario = () => {
  // Estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState('');
  const [haSidoEnviado, setHaSidoEnviado] = useState(false); // Estado para controlar si se ha enviado el formulario

  // Ref para enfocar el campo de nombre cuando se monta el componente
  const nombreInputRef = useRef(null);

  // Efecto para enfocar el campo de nombre cuando el componente se monta
  useEffect(() => {
    nombreInputRef.current.focus();
  }, []);

  // Manejador de eventos para actualizar el nombre cuando el usuario escribe
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  // Manejador de eventos para enviar el formulario y limpiar el campo de nombre
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    // Aquí podríamos enviar los datos a un servidor
    setHaSidoEnviado(true); // Actualiza el estado para indicar que el formulario ha sido enviado
    setNombre(''); // Limpia el campo de nombre
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h3>{haSidoEnviado ? "¡Gracias por enviar el formulario!" : "¡Bienvenido, por favor envía el formulario!"}</h3>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          ref={nombreInputRef}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioUsuario;
