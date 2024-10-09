import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/usuario.config.js'; // Cambia esto a la nueva configuración
import usuariosRoutes from './src/routes/usuario.routes.js'; // Importar las rutas de usuarios

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

dbConnect();

// Usar las rutas de usuarios
app.use('/api', usuariosRoutes); // Ajustamos a las rutas de usuarios

app.listen(PORT, () => {
    console.log(`¡Escuchando en el puerto: ${PORT}!`);
    console.log(`API disponible en: http://localhost:${PORT}/api`);
});
