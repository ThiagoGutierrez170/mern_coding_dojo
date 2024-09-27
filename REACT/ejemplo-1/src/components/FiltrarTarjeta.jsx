import { useState } from "react";

const FiltrarTarjetas = ({ listaTarjetas, setTarjetasFiltradas }) => {
    const [filtro, setFiltro] = useState(""); // Corrigiendo la variable de estado

    const actualizarTarjetas = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        const nuevoFiltro = listaTarjetas.filter((tarjeta) => 
            tarjeta.contenido.toLowerCase().includes(filtro.toLowerCase()) // Filtro ignorando mayúsculas
        );
        setTarjetasFiltradas(nuevoFiltro);
    };

    return (
        <form onSubmit={actualizarTarjetas}>
            <label htmlFor="filtro">Filtrar por título</label>
            <input 
                type="text" 
                id="filtro" 
                name="filtro" 
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)} 
            />
            <button type="submit">Filtrar</button>
        </form>
    );
}

export default FiltrarTarjetas;
