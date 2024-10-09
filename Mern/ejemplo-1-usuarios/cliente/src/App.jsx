import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios';
import FormularioUsuario from './components/FormularioUsuario';
import DetalleUsuario from './components/DetalleUsuario';
import EditarUsuario from './components/EditarUsuario'; // Asegúrate de importar el componente

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/usuario/:id" element={<DetalleUsuario />} />
        <Route path="/nuevo-usuario" element={<FormularioUsuario />} />
        <Route path="/editar-usuario/:id" element={<EditarUsuario />} /> {/* Ruta para editar usuario */}
      </Routes>
    </Router>
  );
};

export default App;
