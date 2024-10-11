import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './App.css';
import RouteError from './components/RutaError';
import DetalleCancion from './components/canciones/DetalleCancion';
import ListaCanciones from './components/canciones/lista';
import FormularioCancion from './components/canciones/formulario';
import EditarCancion from './components/canciones/edicion';
import ListaPlaylists from './components/playlist/lista';
import FormularioPlaylist from './components/playlist/formulario';
import DetallePlaylist from './components/playlist/DetallePlaylist';
import EditarPlaylist from './components/playlist/edicion';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='navegacion'>
      <button onClick={() => navigate('/')}>Canciones</button>
      <button onClick={() => navigate('/playlists')}>Playlist</button>
      <button onClick={() => navigate('/add-cancion')}>Añadir Canción</button> {/* Corregido aquí */}
      <button onClick={() => navigate('/add-playlist')}>Añadir Playlist</button>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className='cuerpo'>
        <Routes>
          <Route path="/" element={<ListaCanciones />} />  
          <Route path="/lista-canciones" element={<ListaCanciones />} />
          <Route path="/cancion/:id" element={<DetalleCancion />} />
          <Route path="/editar-cancion/:id" element={<EditarCancion />} />
          <Route path="/add-cancion" element={<FormularioCancion />} /> 

          <Route path="/playlists" element={<ListaPlaylists />} />
          <Route path="/playlist/:id" element={<DetallePlaylist />} />
          <Route path="/editar-playlist/:id" element={<EditarPlaylist />} />
          <Route path="/add-playlist" element={<FormularioPlaylist />} /> 

          <Route path="*" element={<RouteError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
