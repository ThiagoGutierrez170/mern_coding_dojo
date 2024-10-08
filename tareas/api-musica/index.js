import { faker } from '@faker-js/faker';

// funcion para crear una cancion
const crearCancion = () => ({
    id: faker.string.uuid(), // Cambiar a faker.string.uuid()
    titulo: faker.lorem.sentence(3), // Título aleatorio
    artista: faker.person.fullName(),   // Usar faker.person.fullName() para el artista
    album: faker.lorem.word(),         // Álbum aleatorio
    duracion: faker.number.int({ min: 120, max: 300 }), // Duración en segundos
    genero: faker.music.genre(),       // Género musical aleatorio
    fechaLanzamiento: faker.date.past().toISOString().split('T')[0], // Fecha aleatoria
});

// funcion para crear una playlist
const crearPlaylist = (id) => ({
    idPlaylist: id,
    nombre: faker.lorem.words(2),
    descripcion: faker.lorem.sentence(5),
    canciones: Array.from({ length: 5 }, crearCancion), // Generar 5 canciones aleatorias
    creador: faker.person.fullName(), // Usar faker.person.fullName() para el creador
    fechaCreacion: new Date().toISOString().split('T')[0], // Fecha actual
});

const playlist = crearPlaylist(faker.string.uuid());

console.log(playlist);
