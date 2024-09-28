import React, { useState } from 'react';

const FormularioAnidado = () => {

  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (valorInput) => {
    setMensaje(`¡Gracias por tu mensaje: "${valorInput}"!`);
  };

  return (
    <div>
      <EntradaTexto onSubmit={manejarEnvio} />
      <MostrarMensaje mensaje={mensaje} />
    </div>
  );
}

const EntradaTexto = ({ onSubmit }) => {

  const [valorInput, setValorInput] = useState('');

  const manejarCambio = (evento) => {
    setValorInput(evento.target.value);
  };

  const manejarEnvio = () => {
    onSubmit(valorInput);
    setValorInput('');
  };

  return (
    <div>
      <input type="text" value={valorInput} onChange={manejarCambio} />
      <button onClick={manejarEnvio}>Enviar</button>
    </div>
  );
};


const MostrarMensaje = ({ mensaje }) => {
  return <p>{mensaje}</p>;
}

export default FormularioAnidado;