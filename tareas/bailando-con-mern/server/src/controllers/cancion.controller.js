import Cancion from "../models/cancion.model.js";

// Crear una nueva canción
const crearCancion = async (req, res) => {
    try {
        const cancion = await Cancion.create(req.body);
        res.status(201).json(cancion);  // Status 201 para indicar que se creó exitosamente
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error al crear la canción', detalles: error });
    }
};

// Obtener todas las canciones
const obtenerCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();
        res.json(canciones);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las canciones', detalles: error });
    }
};

// Obtener una canción por ID
const obtenerCancionPorId = async (req, res) => {
    try {
        const cancion = await Cancion.findById(req.params.id);
        if (!cancion) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }
        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener la canción', detalles: error });
    }
};

// Actualizar una canción por ID
const actualizarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cancion) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }
        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar la canción', detalles: error });
    }
};

// Eliminar una canción por ID
const eliminarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id);
        if (!cancion) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }
        res.json({ mensaje: "Canción eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar la canción', detalles: error });
    }
};

export { 
    crearCancion, 
    obtenerCanciones, 
    obtenerCancionPorId, 
    actualizarCancion, 
    eliminarCancion 
};
