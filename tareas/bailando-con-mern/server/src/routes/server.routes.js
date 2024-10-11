import express from 'express';
import { 
    crearCancion, 
    obtenerCanciones, 
    obtenerCancionPorId, 
    actualizarCancion, 
    eliminarCancion 
} from '../controllers/cancion.controller.js';

import { 
    crearPlaylist, 
    obtenerPlaylists, 
    obtenerPlaylistPorId, 
    actualizarPlaylist, 
    eliminarPlaylist, 
    agregarCancionAPlaylist, 
    eliminarCancionDePlaylist 
} from '../controllers/playlist.controller.js';

const router = express.Router();

// Rutas para la API de Canciones
router.post('/canciones', crearCancion); // Crear una nueva canción
router.get('/canciones', obtenerCanciones); // Obtener todas las canciones
router.get('/canciones/:id', obtenerCancionPorId); // Obtener una canción por ID
router.put('/canciones/:id', actualizarCancion); // Actualizar una canción por ID
router.delete('/canciones/:id', eliminarCancion); // Eliminar una canción por ID

// Rutas para la API de Playlists
router.post('/playlists', crearPlaylist); // Crear una nueva playlist
router.get('/playlists', obtenerPlaylists); // Obtener todas las playlists
router.get('/playlists/:id', obtenerPlaylistPorId); // Obtener una playlist por ID
router.put('/playlists/:id', actualizarPlaylist); // Actualizar una playlist por ID
router.delete('/playlists/:id', eliminarPlaylist); // Eliminar una playlist por ID

// Rutas para manejar canciones dentro de una playlist
router.post('/playlists/:playlistId/canciones/:cancionId', agregarCancionAPlaylist); // Agregar canción a playlist
router.delete('/playlists/:playlistId/canciones/:cancionId', eliminarCancionDePlaylist); // Eliminar canción de playlist

export default router;
