// Sin desestructurar
const auto1 = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};
const carros=auto1;//redirecciona y no copia 
const autoCopia={...auto1};//se copia a un nuevo espacio de menoria
const autoNewCopia={...auto1,marca:"camaro"};
console.log('edit auto:',autoNewCopia);

console.log(auto1.marca); // "Toyota"
console.log(auto1.modelo); // "Corolla"
console.log(auto1.año); // 2022

const gato ={
    nombre: "canela",
    raza: "siames",
    dueño: "dani",
    ciudad:[{
        nombre: "encar",
        pais: "paraguay"
    },
    {
        nombre: "asuncion",
        pais: "Paraguay"
    }
    ]
};
const {nombre,raza,dueño:vari}=gato;
console.log('uno:',vari);
const {ciudad}=gato;
console.log(ciudad);
const [uno, dos]=ciudad;
console.log(uno);
const {nombre:namer}=uno;
console.log(namer);

{
const {nombre,dueño, ...rest}=gato;
console.log("restp: ",rest);
}

let dueño="jose";
console.log('dos:',dueño);
console.log(nombre,raza,vari);


const lista =["w","sd","fd","fg","dsf"];
const [,,a]=lista;
console.log(a);

function calcularArea(largo, ancho, alto) {
    return largo * ancho * alto;
}

const dimensiones = [5, 3, 2];
const volumen = calcularArea(...dimensiones);
const volumen2 = calcularArea(dimensiones);
console.log(volumen);
console.log("dos:",volumen2);
// Definimos el objeto original utilizando 'const'
const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    propietario: 'Alicia Estevez',
    detalles: [
      {
        vin: '123456789ABCDEF',
        color: 'azul',
        kilometraje: 45000,
        puertas: 5,
        combustible: 'gasolina'
      }
    ],
    registradoEn: 1583945177623
  };

  // Usamos el operador Spread para hacer una copia independiente del objeto 'auto' y también una copia del objeto dentro de 'detalles'
  const autoCopia1 = {
    ...auto,
    detalles: [
      { ...auto.detalles[0] }
    ]
  };

  // Modificamos la copia
  autoCopia1.propietario = 'Roberto Gomez';  // Cambio de propietario
  autoCopia1.detalles[0].combustible = 'diesel';  // Cambio del combustible en el último detalle
  autoCopia1.detalles[0].color = 'rojo';  // Cambio del color en el primer detalle

  // Le damos más pinta a nuestra salida con template strings
  console.log('Copia modificada: ${JSON.stringify(autoCopia1, null, 2)}');
  console.log('Objeto original: ${JSON.stringify(auto, null, 2)}');