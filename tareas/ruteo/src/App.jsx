import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Inicio from './components/home';
import Arte from './components/Arte';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />  
          <Route path="/arte/:idArte" element={<Arte />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;