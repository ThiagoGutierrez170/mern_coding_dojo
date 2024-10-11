import { model, Schema } from 'mongoose';
import Cancion from './cancion.model.js'; // Importar el modelo de Canción

const PlaylistSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la playlist es obligatorio'],
    minlength: [3, 'El nombre de la playlist debe tener al menos 3 caracteres']
  },
  canciones: [{
    type: Schema.Types.ObjectId,
    ref: 'Cancion', // Referencia al modelo de Canción
    validate: {
      validator: function(value) {
        return Cancion.findById(value); // Verificar que la canción referenciada existe
      },
      message: 'La canción referenciada no existe'
    }
  }],
}, { timestamps: true });

// Crear el modelo de Playlist
const Playlist = model('Playlist', PlaylistSchema);

export default Playlist;
