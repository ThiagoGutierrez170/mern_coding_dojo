import { useState } from "react";

const Filtro = ({ listaNotas, setNotasFiltradas }) => {
    const [filtro, setFiltro] = useState("todas");

    const actualizarNotas = (valorSeleccionado) => {
        const nuevoFiltro = valorSeleccionado === "todas" 
            ? listaNotas 
            : listaNotas.filter((nota) => nota.prioridad === valorSeleccionado);
        setNotasFiltradas(nuevoFiltro);
    };

    return (
        <form>
            <label htmlFor="filtro">Filtrar por prioridad: </label>
            <select 
                name="filtro" 
                id="filtro" 
                onChange={(e) => {
                    const valorSeleccionado = e.target.value;
                    setFiltro(valorSeleccionado); // Actualiza el estado del filtro
                    actualizarNotas(valorSeleccionado); // Llama a la función para actualizar las notas filtradas
                }}
                value={filtro}
            >
                <option value="todas">Todas</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
        </form>
    );
}

export default Filtro;
