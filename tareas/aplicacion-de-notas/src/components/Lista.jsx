const Lista = ({ id, nota, prioridad, eliminarNota }) => {
    return (
      <div className="Notas">
        <p>{nota} - {prioridad}</p>
        <button onClick={() => eliminarNota(id)}>Eliminar</button>
      </div>
    );
  }
  
  export default Lista;
  