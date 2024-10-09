import Libro from '../models/mongoose.model.js';

// Función para crear un nuevo libro
const crearLibro = async (req, res) => {
    try {
        const nuevoLibro = await Libro.create(req.body);
        res.json(nuevoLibro);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Función para obtener todos los libros
const obtenerTodosLosLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Función para obtener un libro por su ID
const obtenerLibroPorId = async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ mensaje: "Libro no encontrado" });
            return;
        }
        res.json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Función para actualizar un libro por su ID
const actualizarLibro = async (req, res) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!libroActualizado) {
            res.status(404).json({ mensaje: "Libro no encontrado" });
            return;
        }
        res.json(libroActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Función para eliminar un libro por su ID
const eliminarLibro = async (req, res) => {
    try {
        const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
        if (!libroEliminado) {
            res.status(404).json({ mensaje: "Libro no encontrado" });
            return;
        }
        res.json({ mensaje: "Libro eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export {
    crearLibro,
    obtenerTodosLosLibros,
    obtenerLibroPorId,
    actualizarLibro,
    eliminarLibro
};