// index.js
import { formatoCompleto, formatoHace, formatoDiaSemana, formatoMMDDYYYY } from './utils/formatearFecha.js';
import chalk from 'chalk'; // Opcional: para añadir colores a la consola

// Ejemplos de uso
const fecha1 = '2023-01-01T12:34:56Z';
const fecha2 = '2022-09-13T08:00:00Z';
const fecha3 = '2021-05-20T15:45:00Z';
const fecha4 = '2020-12-25T00:00:00Z';
const fecha5 = '2024-04-28T18:30:00Z';

// Formato completo
console.log(chalk.blue('Formato completo:'));
console.log(formatoCompleto(fecha1));
console.log(formatoCompleto(fecha2));
console.log(formatoCompleto(fecha3));
console.log(formatoCompleto(fecha4));
console.log(formatoCompleto(fecha5));

// Formato "hace"
console.log(chalk.green('\nFormato "hace":'));
console.log(formatoHace(fecha1));
console.log(formatoHace(fecha2));
console.log(formatoHace(fecha3));
console.log(formatoHace(fecha4));
console.log(formatoHace(fecha5));

// Formato día de la semana
console.log(chalk.yellow('\nFormato día de la semana:'));
console.log(formatoDiaSemana(fecha1));
console.log(formatoDiaSemana(fecha2));
console.log(formatoDiaSemana(fecha3));
console.log(formatoDiaSemana(fecha4));
console.log(formatoDiaSemana(fecha5));

// Formato MM/DD/YYYY
console.log(chalk.magenta('\nFormato MM/DD/YYYY:'));
console.log(formatoMMDDYYYY(fecha1));
console.log(formatoMMDDYYYY(fecha2));
console.log(formatoMMDDYYYY(fecha3));
console.log(formatoMMDDYYYY(fecha4));
console.log(formatoMMDDYYYY(fecha5));
