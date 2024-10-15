import { model, Schema } from 'mongoose';

//MODELADO DE DATOS DEL ESQUEMA
const NotasShema = new Schema({
    titulo: {
        type: String,
        required: [true, "¡El título es obligatorio!"], // Mensaje adecuado para título
        trim: true,  // Elimina los espacios al principio y al final
        minLength: [3, "El título debe tener al menos 3 caracteres"], // Validación de longitud mínima
    },
    descripcion: {
        type: String,
        required: [true, "¡La descripción es obligatoria!"], // Hacemos la descripción obligatoria
        minLength: [6, "La descripción debe tener al menos 6 caracteres"], // Validación adecuada para descripción
    },
    creador: {
        type: String,
        required: [true, "¡El creador es obligatorio!"],  // Aquí no hace falta validación de longitud, ya que será un ID o nombre
    },
    estado: {
        type: String,
        enum: ["completar", "completando", "completado"], // Lista de valores permitidos
        required: [true, "¡El estado es obligatorio!"],  // Hacemos el estado obligatorio
    }
}, { timestamps: true });

// Crea el modelo de Notas
const Nota = model("Notas", NotasShema);

// Exporta el modelo para usarlo en tu aplicación
export default Nota;
