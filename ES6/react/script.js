let estado = ['verde', 'negro', 'blanco', 'rojo', 'oolong'];

const usarEstado = [
    // Índice del array 0; Una función para obtener el estado
    function () {
        return estado;
    },

    // Índice del array 1; Una función para establecer el estado
    function (nuevoValorEstado) {
        estado = nuevoValorEstado;
        return estado;
    }
];

const [obtenerEstado, establecerEstado] = usarEstado;

function actualizar(tiposDeTe, nuevoTe) {
    establecerEstado([...tiposDeTe, nuevoTe]);
    return estado;
}

actualizar(obtenerEstado(), 'matcha');
console.log(estado); // Salida: ['verde', 'negro', 'blanco', 'rojo', 'oolong', 'matcha']