import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearCancion = () => {
  const navigate = useNavigate(); // Para navegar después de crear
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [genero, setGenero] = useState('');
  const [album, setAlbum] = useState('');
  const [error, setError] = useState('');

  const validarFormulario = () => {
    setError(''); // Reiniciar el mensaje de error
    if (titulo.length < 1) {
      setError('El título de la canción es obligatorio.');
      return false;
    }
    if (artista.length < 1) {
      setError('El artista es obligatorio.');
      return false;
    }
    if (!genero) {
      setError('El género es obligatorio.');
      return false;
    }
    if (album.length < 1) {
      setError('El álbum es obligatorio.');
      return false;
    }
    return true; // Si todas las validaciones pasan
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar el formulario antes de enviar
    if (!validarFormulario()) {
      return;
    }

    try {
      const nuevaCancion = { titulo, artista, genero, album };
      await axios.post('/api/canciones', nuevaCancion);
      alert('Canción creada exitosamente');
      navigate('/lista-canciones'); // Redirigir a la lista de canciones
    } catch (error) {
      console.error('Error al crear la canción:', error);
      alert('Hubo un problema al crear la canción.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Artista:</label>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Género:</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
          <option value="">Seleccione un género</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Jazz">Jazz</option>
          <option value="Clásica">Clásica</option>
          <option value="Reggaeton">Reggaeton</option>
          <option value="Indie">Indie</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label>Álbum:</label>
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}
      <button type="submit">Crear canción</button>
    </form>
  );
};

export default CrearCancion;
