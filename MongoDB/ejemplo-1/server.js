import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import bookRoutes from './routes/mongoose.routes.js'; // Importar las rutas de libros

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

dbConnect();

// Usar las rutas de libros
app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`¡Escuchando en el puerto: ${PORT}!`);
});
