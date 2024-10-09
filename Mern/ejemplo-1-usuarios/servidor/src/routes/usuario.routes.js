import express from 'express';
import { 
    crearUsuario, 
    obtenerUsuarios, 
    obtenerUsuarioPorId, 
    actualizarUsuario, 
    eliminarUsuario 
} from '../controllers/usuario.controller.js';

const router = express.Router();

// Rutas para la API de Usuarios
router.post('/usuarios', crearUsuario); // Crear un nuevo usuario
router.get('/usuarios', obtenerUsuarios); // Obtener todos los usuarios
router.get('/usuarios/:id', obtenerUsuarioPorId); // Obtener un usuario por ID
router.put('/usuarios/:id', actualizarUsuario); // Actualizar un usuario por ID
router.delete('/usuarios/:id', eliminarUsuario); // Eliminar un usuario por ID

export default router;
