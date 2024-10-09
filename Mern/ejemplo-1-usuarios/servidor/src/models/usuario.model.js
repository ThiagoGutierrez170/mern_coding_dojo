import { model, Schema } from 'mongoose';

const UsuarioSchema = new Schema({
    gmail: {
        type: String,
        required: [true, '¡El correo electrónico es obligatorio!'],
        unique: true, // Asegura que el gmail sea único
        match: [/.+\@.+\..+/, 'Por favor, ingrese un correo electrónico válido'] // Expresión regular para correos válidos
    },
    contraseña: {
        type: String,
        required: [true, '¡La contraseña es obligatoria!'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres.']
    },
    nombreUsuario: {
        type: String,
        required: [true, '¡El nombre de usuario es obligatorio!'],
        minlength: [4, 'El nombre de usuario debe tener al menos 4 caracteres.'],
        maxlength: [50, 'El nombre de usuario no puede tener más de 50 caracteres.']
    }
}, { timestamps: true });

// Crea el modelo
const Usuario = model("Usuario", UsuarioSchema);

// Exporta el modelo para usarlo en la aplicación
export default Usuario;
