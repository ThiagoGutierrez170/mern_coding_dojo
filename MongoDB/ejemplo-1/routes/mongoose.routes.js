import express from 'express';
import { 
    crearLibro, 
    obtenerTodosLosLibros, 
    obtenerLibroPorId, 
    actualizarLibro, 
    eliminarLibro 
} from '../controllers/mongoose.controller.js';

const router = express.Router();

// Rutas para la API de libros
router.post('/libros', crearLibro); // Crear un nuevo libro
router.get('/libros', obtenerTodosLosLibros); // Obtener todos los libros
router.get('/libros/:id', obtenerLibroPorId); // Obtener un libro por ID
router.put('/libros/:id', actualizarLibro); // Actualizar un libro por ID
router.delete('/libros/:id', eliminarLibro); // Eliminar un libro por ID

export default router;
