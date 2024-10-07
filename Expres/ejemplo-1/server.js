// Permitir que el servidor pueda leer las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Importamos Express y otras dependencias
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// Creamos instancia de Express
const app = express();

// Definimos el puerto
const PORT = process.env.PORT || 3001;

// Middleware para manejar JSON
app.use(express.json()); // Necesario para manejar solicitudes POST con datos JSON

// Helmet para seguridad y Morgan para registro
app.use(helmet());
app.use(morgan('tiny'));

// Servir archivos estáticos
app.use(express.static('public'));

// Array de personajes (simulando una base de datos)
const personajes = [
    { nombre: "Luke", apellido: "Skywalker", id: 1001 },
    { nombre: "Leia", apellido: "Organa", id: 1002 },
    { nombre: "Han", apellido: "Solo", id: 1003 },
    { nombre: "Chewbacca", apellido: "Wookiee", id: 1004 },
    { nombre: "Darth", apellido: "Vader", id: 1005 }
];

// Rutas

// Obtener todos los personajes (GET)
app.get('/api/personajes', (req, res) => {
    res.json(personajes);
});

// Añadir un nuevo personaje (POST)
app.post('/api/personajes', (req, res) => {
    // Imprimir el cuerpo de la solicitud en la consola
    console.log(req.body);

    // Añadir el nuevo personaje al array
    personajes.push(req.body);

    // Responder con el array actualizado
    res.json(personajes);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//http://localhost:8000/personajes