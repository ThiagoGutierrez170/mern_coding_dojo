//"use strict";
{function sumar(a,b){
    return a+b;
}
console.log(sumar(3,5));

const sumar_flecha=(a,b)=>a+b;
console.log(sumar_flecha(3,5));}

{const nombres = ["Ana", "Beto", "Carlos"];
console.log(nombres);
const nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresEnMayusculas);}

{class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        // Usando una función flecha, 'this' se refiere correctamente al objeto Persona
        this.decirNombre = () => console.log(this.nombre);
    }
}
const persona = new Persona("Elena");
persona.decirNombre();} // La salida es "Elena"}

{const sumar = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4));} // Imprime 10

{"use strict";

numeroMagico = 123; //error
console.log(numeroMagico);}
{
    var miObjeto = Object.freeze({ clave: 42 });
    miObjeto.clave = 101; //error
    console.log(miObjeto);
}

