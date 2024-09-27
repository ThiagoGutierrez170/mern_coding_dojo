import React, { useState } from 'react';

import './styles.css'; // Archivo de estilos CSS

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [errorNombre, setErrorNombre] = useState(false);

    const manejarCambioNombre = (evento) => {
        const valor = evento.target.value;
        setNombre(valor);

        // Validamos si el nombre está vacío
        setErrorNombre(valor === "");
    };

    return (
        <div>
            <h2>Formulario</h2>
            <div className="campo">
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={manejarCambioNombre}
                    className={errorNombre ? "error" : ""}
                />
                {errorNombre && <p className="mensaje-error">Por favor, introduce tu nombre.</p>}
            </div>
        </div>
    );
};

export default Formulario;