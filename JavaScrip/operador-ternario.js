{
    const mensaje = (2>3)?"verdadero":"falso";
    console.log(mensaje);
}

{
    function obtenerNivelAcceso(edad) {
        return edad < 18 ? 'Acceso Restringido' :
               edad <= 65 ? 'Acceso Completo' : 'Acceso Sénior';
    
    }
    
    console.log(obtenerNivelAcceso(30));  // "Acceso Completo"
    console.log(obtenerNivelAcceso(70));  // "Acceso Sénior"
}

