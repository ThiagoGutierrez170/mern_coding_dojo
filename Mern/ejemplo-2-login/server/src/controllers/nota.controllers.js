import Nota from "../models/notas.model.js";

// Crear una nueva nota
const create = async (req, res) => {
    try {
        const { titulo, descripcion, estado } = req.body;
        const creador = req.user.id;  // Obtenemos el id del usuario logueado desde el token

        // Creamos la nueva nota con el creador asociado
        const newElement = await Nota.create({ titulo, descripcion, estado, creador });
        res.status(201).json(newElement);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Obtener todas las notas del usuario logueado
const findAll = async (req, res) => {
    try {
        const creador = req.user.id; // Obtenemos el id del usuario logueado
        const elements = await Nota.find({ creador }); // Solo mostramos las notas del usuario logueado
        res.status(200).json(elements);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Obtener una nota por su ID, solo si pertenece al usuario logueado
const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const creador = req.user.id;
        const element = await Nota.findOne({ _id: id, creador }); // Buscamos la nota por ID y creador

        if (!element) {
            res.status(404).json("NOT FOUND");
            return;
        }
        res.status(200).json(element);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Actualizar una nota por su ID, solo si pertenece al usuario logueado
const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const creador = req.user.id;
        
        // Verificamos si la nota pertenece al usuario logueado antes de actualizar
        const element = await Nota.findOneAndUpdate({ _id: id, creador }, data, { new: true, runValidators: true });
        if (!element) {
            res.status(404).json("NOT FOUND");
            return;
        }
        res.status(200).json(element);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Eliminar una nota por su ID, solo si pertenece al usuario logueado
const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const creador = req.user.id;

        // Verificamos si la nota pertenece al usuario logueado antes de eliminar
        const element = await Nota.findOneAndDelete({ _id: id, creador });
        if (!element) {
            res.status(404).json("NOT FOUND");
            return;
        }
        res.status(200).json(element);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export default {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
};
