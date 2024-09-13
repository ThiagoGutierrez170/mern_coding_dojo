// Importar el módulo 'math'
    //const math = require('./libreria');
// Importar estatuto por estatuto
    const {multiplicar, dividir, libro} = require('./libreria');

// Usar las funciones del módulo 'mathOperations'
const result1 = multiplicar(5, 3);
console.log(result1); // Salida: 15

const result2 = dividir(10, 2);
console.log(result2); // Salida: 5
console.log(libro);