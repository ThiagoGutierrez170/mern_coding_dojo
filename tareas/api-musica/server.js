import express from 'express';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

// cargar port desde el archivo .env 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 
// Establecer el puerto por defecto a 3000 si no se encuentra en .env

// transformar los datos a json
app.use(express.json());

// funcion para crear una cancion
const crearCancion = () => ({
    id: faker.string.uuid(),
    titulo: faker.lorem.sentence(3),
    artista: faker.person.fullName(),
    album: faker.lorem.word(),
    duracion: faker.number.int({ min: 120, max: 300 }),
    genero: faker.music.genre(),
    fechaLanzamiento: faker.date.past().toISOString().split('T')[0],
});

// funcion para crear una playlist
const crearPlaylist = (id) => ({
    idPlaylist: id,
    nombre: faker.lorem.words(2),
    descripcion: faker.lorem.sentence(5),
    canciones: Array.from({ length: 5 }, crearCancion),
    creador: faker.person.fullName(),
    fechaCreacion: new Date().toISOString().split('T')[0],
});

// ruta para obtener todas las canciones: http://localhost:8000/api/canciones
app.get('/api/canciones', (req, res) => {
    const canciones = Array.from({ length: 10 }, crearCancion); // crear 10 canciones
    res.json(canciones);
});


// ruta para obtener una playlist: http://localhost:8000/api/playlists/1
app.get('/api/playlists/:id', (req, res) => {
    const { id } = req.params;
    const playlist = crearPlaylist(id);
    res.json(playlist);
});

/*
// ruta para crear una nueva cancion con post
app.post('/api/canciones', (req, res) => {
    const nuevaCancion = req.body; // Procesa la nueva canción que recibes
    res.json(nuevaCancion);
});

// ruta para crear una nueva playlist con post
app.post('/api/playlists', (req, res) => {
    const { id } = req.body; // Puedes recibir un ID o generarlo aquí
    const nuevaPlaylist = crearPlaylist(id);
    res.json(nuevaPlaylist);
});*/

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
