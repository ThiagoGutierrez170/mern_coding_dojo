import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaUsuarios from './components/ListaUsuarios';
import FormularioUsuario from './components/FormularioUsuario';
import DetalleUsuario from './components/DetalleUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/usuario/:id" element={<DetalleUsuario />} />
        <Route path="/nuevo-usuario" element={<FormularioUsuario />} />
      </Routes>
    </Router>
  );
};

export default App;
