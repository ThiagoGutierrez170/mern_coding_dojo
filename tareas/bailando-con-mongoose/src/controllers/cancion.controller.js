import Cancion from "../models/cancion.model.js";

const crearCancion = async (req,res) => {
    try {
        const nuevaCancion = await Cancion.create(req.body);
        res.json(nuevaCancion);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const obtenerCanciones = async (req, res) => {
    try {
        const cancion = await Cancion.find();
        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const obtenerCancionId = async (req, res) => {
    try {
        const cancion = await Cancion.findById(req.params.id);
        if (!cancion) {
            res.status(404).json({ mensaje: "Cancion no encontrada" });
            return;
        }
        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const actualizarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cancion) {
            res.status(404).json({ mensaje: "Cancio no encontrada" });
            return;
        }
        res.json(cancion);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const eliminarCancion = async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id);
        if (!cancion) {
            res.status(404).json({ mensaje: "Cancion no encontrada" });
            return;
        }
        res.json({ mensaje: "Cancion eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export { 
    crearCancion, 
    obtenerCanciones, 
    obtenerCancionId, 
    actualizarCancion, 
    eliminarCancion 
};