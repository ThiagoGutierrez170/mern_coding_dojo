// Importa dayjs y el plugin relativeTime
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js'; //plugin relativeTime

// Activa el plugin relativeTime
dayjs.extend(relativeTime);

// Función para formato "28 de diciembre de 2020, 12:34:56 PM UTC"
const formatoCompleto = (fechaISO) => dayjs(fechaISO).format('DD [de] MMMM [de] YYYY, h:mm:ss A [UTC]');

// Función para formato "hace 1 año"
const formatoHace = (fechaISO) => dayjs(fechaISO).fromNow();

// Función para formato "domingo, 28 de abril de 2024"
const formatoDiaSemana = (fechaISO) => dayjs(fechaISO).format('dddd, DD [de] MMMM [de] YYYY');

// Función para formato "04/28/2024"
const formatoMMDDYYYY = (fechaISO) => dayjs(fechaISO).format('MM/DD/YYYY');

// Exportar las funciones
export {
    formatoCompleto,
    formatoHace,
    formatoDiaSemana,
    formatoMMDDYYYY
};
