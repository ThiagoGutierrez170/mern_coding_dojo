import express from 'express';
import { 
    crearCancion, 
    obtenerCanciones, 
    obtenerCancionId, 
    actualizarCancion, 
    eliminarCancion 
} from '../controllers/cancion.controller.js';

const router = express.Router();

// Rutas para la API de Canciones
router.post('/canciones', crearCancion); // Crear un nuevo Cancion
router.get('/canciones', obtenerCanciones); // Obtener todos los Canciones
router.get('/canciones/:id', obtenerCancionId); // Obtener un Cancion por ID
router.put('/canciones/:id', actualizarCancion); // Actualizar un Cancion por ID
router.delete('/canciones/:id', eliminarCancion); // Eliminar un Cancion por ID

export default router;