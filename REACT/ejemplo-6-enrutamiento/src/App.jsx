import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/navegacion_1/home';
import About from './components/navegacion_1/about';
import Contact from './components/navegacion_1/Contact';
import Usuario from './components/useParams/Usuario';
import Inicio from './components/useParams/Inicio';
import './App.css';

// Componente de Barra de Navegación integrado directamente en App.js
const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        {/* Barra de navegación con botones */}
        <NavigationBar />

        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />  {/* Inicio se muestra en la ruta raíz */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usuario/:nombreUsuario" element={<Usuario />} />  {/* Ruta para ver detalles de usuario */}
          <Route path="*" element={<Inicio />} />{/* catch all route, en caso de que la ruta no exista, en este caso Inicio, pero se utiliza un NotFountd */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
