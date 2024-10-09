import { model, Schema } from 'mongoose';


const CancionShena = new Schema({
    titulo: {
        type: String,
        required: [true, '¡El título es obligatorio!'],
        minlength: [6, 'El título debe tener al menos 6 caracteres.'],
        maxlength: [255, 'El título no puede tener más de 255 caracteres.'],
    },
    artista: {
        type: String,
        required: [true, '¡El Artista es obligatorio!'],
        minlength: [10, 'El Artista debe tener al menos 10 caracteres.'],
        maxlength: [255, 'El Artista no puede tener más de 255 caracteres.'],
    },
    añoLanzamiento:{
        type: Number,
        required: [true, '¡El año de lanzamiento es obligatorio!'],
        minlength: [4, 'El año de lanzamiento debe tener exactamente 4 dígitos.'],
        maxlength: [4, 'El año de lanzamiento debe tener exactamente 4 dígitos.'],
        validate: {
            validator: function(value) {
                const currentYear = new Date().getFullYear();
                return value >= 1900 && value <= currentYear; //se verifica una fecha de partida con el año axtual
            },
            message: '¡El año de lanzamiento debe ser un año válido!'
        }
    },
    genero: {
        type: String,
        required: [true, '¡El Genero es obligatorio!'],
    }
}, { timestamps: true });

// Crea el modelo
const Cancion = model("Cancion", CancionShena);

// Exporta el modelo para usarlo en la aplicación
export default Cancion;