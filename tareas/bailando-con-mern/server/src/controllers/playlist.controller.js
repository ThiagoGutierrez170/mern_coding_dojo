import Playlist from "../models/playlist.model.js";
import Cancion from "../models/cancion.model.js";

// Crear una nueva playlist
const crearPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.create(req.body);
        res.status(201).json(playlist);  // Status 201 para indicar que se creó exitosamente
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Error al crear la playlist', detalles: error });
    }
};

// Obtener todas las playlists
const obtenerPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('canciones'); // Poblamos las canciones para mostrar detalles
        res.json(playlists);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las playlists', detalles: error });
    }
};

// Obtener una playlist por ID
const obtenerPlaylistPorId = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('canciones');
        if (!playlist) {
            return res.status(404).json({ mensaje: "Playlist no encontrada" });
        }
        res.json(playlist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener la playlist', detalles: error });
    }
};

// Actualizar una playlist por ID
const actualizarPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!playlist) {
            return res.status(404).json({ mensaje: "Playlist no encontrada" });
        }
        res.json(playlist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar la playlist', detalles: error });
    }
};

// Eliminar una playlist por ID
const eliminarPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndDelete(req.params.id);
        if (!playlist) {
            return res.status(404).json({ mensaje: "Playlist no encontrada" });
        }
        res.json({ mensaje: "Playlist eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar la playlist', detalles: error });
    }
};

// Añadir una canción a una playlist
const agregarCancionAPlaylist = async (req, res) => {
    try {
        const { playlistId, cancionId } = req.params;

        // Verificamos si existen la playlist y la canción
        const playlist = await Playlist.findById(playlistId);
        const cancion = await Cancion.findById(cancionId);

        if (!playlist || !cancion) {
            return res.status(404).json({ mensaje: "Playlist o canción no encontrada" });
        }

        // Añadimos la canción a la playlist si no está ya añadida
        if (!playlist.canciones.includes(cancionId)) {
            playlist.canciones.push(cancionId);
            await playlist.save();
            res.json({ mensaje: "Canción agregada a la playlist", playlist });
        } else {
            res.status(400).json({ mensaje: "La canción ya está en la playlist" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al agregar la canción a la playlist', detalles: error });
    }
};

// Eliminar una canción de una playlist
const eliminarCancionDePlaylist = async (req, res) => {
    try {
        const { playlistId, cancionId } = req.params;

        // Verificamos si la playlist existe
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ mensaje: "Playlist no encontrada" });
        }

        // Filtramos la canción para eliminarla de la playlist
        playlist.canciones = playlist.canciones.filter(cancion => cancion.toString() !== cancionId);
        await playlist.save();

        res.json({ mensaje: "Canción eliminada de la playlist", playlist });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar la canción de la playlist', detalles: error });
    }
};

export { 
    crearPlaylist, 
    obtenerPlaylists, 
    obtenerPlaylistPorId, 
    actualizarPlaylist, 
    eliminarPlaylist,
    agregarCancionAPlaylist,
    eliminarCancionDePlaylist 
};
