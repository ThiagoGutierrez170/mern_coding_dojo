import { useState } from "react";

const Registro = ({ agregarHeroe }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacion, setConfirmacion] = useState("");

    const [errorNombre, setErrorNombre] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorContraseña, setErrorContraseña] = useState("");

    const agregarRegistro = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Limpiar errores previos
        setErrorNombre("");
        setErrorApellido("");
        setErrorCorreo("");
        setErrorContraseña("");

        let validacion = true;

        // Validaciones
        validacion = nombre.length >= 4 ? validacion : (setErrorNombre("El nombre debe tener al menos 4 caracteres"), false);
        validacion = apellido.length >= 4 ? validacion : (setErrorApellido("El apellido debe tener al menos 4 caracteres"), false);
        validacion = correo.length >= 10 ? validacion : (setErrorCorreo("El correo debe tener al menos 10 caracteres"), false);
        
        // Validar el formato del correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validacion = emailPattern.test(correo) ? validacion : (setErrorCorreo("El correo no es válido"), false);
        validacion = contraseña===confirmacion ? validacion : (setErrorContraseña("las contraseñas son incorrectas"), false);

        if (validacion) {
            agregarHeroe(nombre, apellido, correo, contraseña);

            // Limpiar campos después de agregar héroe
            setNombre("");
            setApellido("");
            setCorreo("");
            setContraseña("");
            setConfirmacion("");
        }
    };

    return (
        <form onSubmit={agregarRegistro} className="formulario">
            <h2>Registro de Superhéroes</h2>
            <label htmlFor="nombre">Nombre:</label><br />
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                onChange={(e) => {
                    setNombre(e.target.value);
                }} 
                required
            /><br />
            {errorNombre && (
                <>
                    <span style={{ color: "red" }}>{errorNombre}</span><br />
                </>
            )}

            <label htmlFor="apellido">Apellido:</label><br />
            <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                value={apellido}
                onChange={(e) => {
                    setApellido(e.target.value);
                }} 
                required
            /><br />
            {errorApellido && (
                <>
                    <span style={{ color: "red" }}>{errorApellido}</span><br />
                </>
            )}

            <label htmlFor="correo">Correo:</label><br />
            <input 
                type="email" 
                id="correo" 
                name="correo" 
                value={correo}
                onChange={(e) => {
                    setCorreo(e.target.value);
                }} 
                required
            /><br />
            {errorCorreo && (
                <>
                    <span style={{ color: "red" }}>{errorCorreo}</span><br />
                </>
            )}

            <label htmlFor="contraseña">Contraseña:</label><br />
            <input 
                type="password" 
                id="contraseña" 
                name="contraseña" 
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)} 
                required 
            /><br />
            {errorContraseña && (
                <>
                    <span style={{ color: "red" }}>{errorContraseña}</span><br />
                </>
            )}
            <label htmlFor="confirmacion">Confirmación de Contraseña:</label><br />
            <input 
                type="password" 
                id="confirmacion" 
                name="confirmacion" 
                value={confirmacion}
                onChange={(e) => setConfirmacion(e.target.value)} 
                required
            /><br /><br />

            <button type="submit" className="crear">Crear Superhéroe</button>
        </form>
    );
}

export default Registro;