import { useState } from "react";

const Formulario = ({agregarNota}) => {
    const [nota,setNota]=useState("");
    const [prioridad,setPrioridad]=useState("Baja");

    
    const enviar = (e) => {
        e.preventDefault();
        agregarNota(nota,prioridad);
        setNota(""); // Limpiar campo después de agregar
        setPrioridad("Baja"); // Resetear prioridad
    }

    return (
        <form onSubmit={enviar} className="formulario">
            <label htmlFor="nombre">Notas</label><br />
            <input 
                type="text" 
                id="nota" 
                name="nota" 
                value={nota}
                onChange={(e) => {
                    setNota(e.target.value);
                }} 
                required
            /><br />
            <select name="prioridad" id="prioridad" 
                    onChange={(e) => {
                        setPrioridad(e.target.value);
                    }}
                    value={prioridad}
                    required>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
            <button type="submit" className="crear">Añadir Nota</button>
        </form>
    );
}

export default Formulario;