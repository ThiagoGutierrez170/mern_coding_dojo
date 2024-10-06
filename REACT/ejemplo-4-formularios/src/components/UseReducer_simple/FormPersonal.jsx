import React, { useReducer } from 'react';
import { reducer, estadoInicial } from './Reducer';

const FormPersonal = () => {

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const manejarCambioNombre = (e) => {
    dispatch({ tipo: 'ESTABLECER_VALOR_NOMBRE', valor: e.target.value });
  };

  const manejarCambioEdad = (e) => {
    dispatch({ tipo: 'ESTABLECER_VALOR_EDAD', valor: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    let valido = true;

    // Validamos el campo "nombre"
    if (estado.nombre.trim() === '') {
      dispatch({ tipo: 'ESTABLECER_ERROR_NOMBRE', valor: 'El nombre es obligatorio' });
      valido = false;
    } 

    // Validamos el campo "edad"
    if (isNaN(estado.edad) || estado.edad.trim() === '') {
      dispatch({ tipo: 'ESTABLECER_ERROR_EDAD', valor: 'La edad debe ser un número válido' });
      valido = false;
    }

    // Si es válido, indicamos que el formulario se ha enviado
    if (valido) {
      dispatch({ tipo: 'ESTABLECER_SE_HA_ENVIADO', valor: true });
    } else {
      dispatch({ tipo: 'ESTABLECER_SE_HA_ENVIADO', valor: false });
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={estado.nombre} 
          onChange={manejarCambioNombre} 
        />
        {estado.errorNombre && <span style={{ color: 'red' }}>{estado.errorNombre}</span>}
      </div>
      <div>
        <label>Edad:</label>
        <input 
          type="text" 
          value={estado.edad} 
          onChange={manejarCambioEdad} 
        />
        {estado.errorEdad && <span style={{ color: 'red' }}>{estado.errorEdad}</span>}
      </div>
      <button type="submit">Enviar</button>
      {estado.seHaEnviado && <p>Formulario enviado con éxito</p>}
    </form>
  );
};

export default FormPersonal;
