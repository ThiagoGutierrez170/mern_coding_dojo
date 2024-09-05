// Problema X: ¿Cuál crees que es la salida de este código?
//la lida sera: 'eje', 'mp', 'lo', ya que la variable que se iprime en consola es el array
// ¿La salida del código fue la misma que creíste en un principio?
//si, ya que se imprimio el array y no la variable que contiene la palabra entera y unida

// ¿Por qué se produjo la diferencia?

const variableEjemplo = "ejemplo";

const arregloEjemplo = ["eje", "mp", "lo"];

console.log(arregloEjemplo);

// 1. Anota la salida que piensas que va a dar el código

// 2. Anota la salida que muestra el código

// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio
{
    //1. Examina la desestructuración en objetos anidados con un enfoque en propiedades que podrían no existir.
    //la primera salida dara 30 y la segunda dara undefined, ya que no existe ese parametro es el objeto detalles
    //la salida salio como esperaba
    const info = {
        personal: {
            nombre: 'Carlos',
            apellido: 'Vega',
            detalles: {
                edad: 30,
                ocupacion: 'Ingeniero'
            }
        }
    };

    const { personal: { detalles: { edad, salario } } } = info;

    console.log(edad);

    console.log(salario);
}
{
    //2. Evalúa el uso del operador spread para fusionar objetos con propiedades repetidas.
    //el resultado sera un nuevo objeto, y el contenido sera la union de los objetos A y B
    //el resultado si fue como esperaba
    const objetoA = { a: 1, b: 2, c: 3 };

    const objetoB = { b: 4, c: 5, d: 6 };

    const resultado = { ...objetoA, ...objetoB };

    console.log(resultado);
}


{
    //3. Analiza el alcance de las variables dentro de bloques y funciones.
    //el resultado fue diferente a lo que esperaba
    //fue diferente ya que const y let estan en el bloque if y no salen de alli al ser variable bloque 
    //y no se retorna del bloque, en cambio var si ya que es una variable blobal 
    function verificar() {
        if (true) {
            const a = 2;
            let b = 3;
            var c = 4;
        }

        console.log(c);
        console.log(a);
        console.log(b);
    }

    //verificar();
}
{
    //4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.
    //el resultado sera 29
    //ya que object.freeze bloquea el contenido para que no se pueda realizar cambios
    //el resultado si fue como esperaba
    const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
    datos.edad = 30;
    console.log(datos.edad);
}
{
    //5. Comprende la manipulación de arrays con métodos que no modifican el array original.
    //creo que dara el original 1,2,3 y el nuevo 1,2,3,4
    //si fue lo esperado
    //concat crea un nuevo array sin modificar el array original, en este caso tambien agrega un nuevo elemento
    const original = [1, 2, 3];
    const nuevo = original.concat(4);
    console.log(original);
    console.log(nuevo);
}
{
    //6. ¿Por qué el código produjo esa salida? ¿Cómo obtendrías el valor del tercer índice?
    //dio esa salida ya que se esta declarando las dos primeros elementos del array con [primera, segunda]
    //en el caso de que sea [a,,b] se selecionaria: manzana pera
    const frutas = ['manzana', 'naranja', 'pera', 'mango'];
    const [primera, segunda] = frutas;
    console.log(primera);
    console.log(segunda);
}
{
    //7. Examina el comportamiento del ámbito de `let` en bucles, especialmente en bucles anidados.
    //aqui se esta re-igualando el valor de al empezar los bucles, el for padre dara 3 ciclos y el for anidado hara 2 ciclos 
    //en el caso de que fuera var daria conflicto y iteraria el for padre una vez 
    //y si fuera con const no permitiria re-igualar la misma variable
    for (let i = 0; i < 3; i++) { 
        for (let i = 0; i < 2; i++) {
            console.log(i);
        }
    }
}
{
    //8. Operador Spread en Objetos ¿Por qué el código produjo esa salida? 
        //dio esa salida ya que primero agrego b:2 y luego sobreescribio a b:3, 
        //porque fue el ultimo valor añadido del una misma variable
    //¿Cómo solucionarías un problema si quisieras evitar sobrescribir la propiedad ‘b’?
        //una forma seria invertir el orden de los objetos {...objeto2, ...objeto1}
        //otra forma seira añadir un nuevo atributo d {...objeto1,d: objeto2.b,...objeto2}

    const objeto1 = { a: 1, b: 2 };
    const objeto2 = { b: 3, c: 4 };
    const combinado = { ...objeto1, ...objeto2 };
    console.log(combinado);
}
{
    //9. Uso del operador Spread para combinar arrays. 
    //Analiza cómo se combinan los arrays y qué sucede con los elementos duplicados.
    //spread descomprime los dos arrays para unirlos en un nuevo array
    const numeros1 = [1, 2, 3];
    const numeros2 = [3, 4, 5];
    const combinados = [...numeros1, ...numeros2];
    
    console.log(combinados);
}
{
    //10. Alcance y captura de variables en una función. 
    //Explora el ámbito de las variables dentro de una función y cómo esto afecta su visibilidad.
    //creo que dara luis, 25
    //acerte el resultado
    //ya que var es una variable global y let es de bloque, 
    //en este caso la modificacion de edad a 30 no se realiza ya que esta dentro de un bloque y no se retorna
    function demostracion() {
        var nombre = 'Ana';
        let edad = 25;
        if (true) {
            var nombre = 'Luis';
            let edad = 30;
        }

        console.log(nombre);
        console.log(edad);

    }

    demostracion();
}