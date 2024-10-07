// Archivo que contiene las rutas de la aplicación

//Importamos Express
import express from 'express';
import MainController from '../controllers/Main.controllers.js';
import Authenticate from '../middlewares/Authenticate.js';
const router = express.Router();


// Rutas

// Ruta de root
router.get('/', Authenticate.Review, MainController.saludoMain);
// Ruta de saludo
router.get('/saludo', MainController.saludoSaludo);


//Exportamos el router
export default router;