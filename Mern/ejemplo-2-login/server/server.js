// IMPORTACIONES
import dotenv from "dotenv";
import express from "express";
import dbConnect from './config/mongoose.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//IMPORTACION DE ROUTES
import userRoutes from './src/routes/user.routes.js'
import sessionRoutes from './src/routes/session.routes.js'

dotenv.config();    // Nos permite leer variables de entorno
const app = express();// Creamos nuestra instancia del servidor
const PORT = process.env.PORT;

//CONFIGURACIONES

app.use(express.json());//SOPORTE PARA FORMATO JSON
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
    }
)); //CONFIGURACION DE POLITICAS DE ORIGEN CRUZADO

app.use(cookieParser());//CONFIGURACION DE COOKIES


//USO DE RUTAS
app.use("/api/users", userRoutes);
app.use("/api/session", sessionRoutes);

// Crear la conexión con LA BD
dbConnect();

//Iniciamos el servidor
app.listen(PORT, () => {
    //Mostramos mensaje en consola
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});