import { model, Schema } from 'mongoose';

const CancionSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'El título de la canción es obligatorio'],
    minlength: [2, 'El título debe tener al menos 2 caracteres']
  },
  artista: {
    type: String,
    required: [true, 'El nombre del artista es obligatorio'],
    minlength: [2, 'El nombre del artista debe tener al menos 2 caracteres']
  },
  genero: {
    type: String,
    required: [true, 'El género es obligatorio'],
    enum: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Clásica', 'Reggaeton', 'Indie', 'Otro'], // Si quieres limitar los géneros
  },
  album: {
    type: String,
    minlength: [2, 'El nombre del álbum debe tener al menos 2 caracteres'],
  },
}, { timestamps: true });

// Crear el modelo de Canción
const Cancion = model('Cancion', CancionSchema);

export default Cancion;
