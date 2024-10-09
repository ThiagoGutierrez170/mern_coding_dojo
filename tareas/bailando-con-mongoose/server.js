import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/cancion.config.js';
import cancionesRoutes from './src/routes/cancion.routes.js'; // Importar las rutas de canciones

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

dbConnect();

// Usar las rutas de canciones
app.use('/api', cancionesRoutes);

app.listen(PORT, () => {
    console.log(`¡Escuchando en el puerto: ${PORT}!`);
    console.log(`API disponible en: http://localhost:${PORT}/api`);
});
