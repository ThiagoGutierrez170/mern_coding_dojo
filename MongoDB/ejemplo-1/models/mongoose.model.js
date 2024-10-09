import { model, Schema } from 'mongoose';

// Define el esquema de un libro
const LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "¡El título es obligatorio!"]
    },
    autor: {
        type: String,
        required: [true, "¡El autor es obligatorio!"]
    },
    genero: String,
    año: Number
}, { timestamps: true });

// Crea el modelo de libro
const Libro = model("Libro", LibroSchema);

// Exporta el modelo para usarlo en tu aplicación
export default Libro;