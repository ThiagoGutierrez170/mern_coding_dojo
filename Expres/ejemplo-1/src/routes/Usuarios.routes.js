

import express from 'express';
const router = express.Router();



// Rutas
router.get('/', (req, res) => {
    res.json('Obtener Usuarios');
});
router.post('/', (req, res) => {
    res.json('Crear Usuario');
});
router.put('/', (req, res) => {
    res.json('Actualizar Usuario');
});
router.delete('/', (req, res) => {
    res.json('Eliminar Usuario');
});

export default router;