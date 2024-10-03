import React from 'react';
import { Link } from 'react-router-dom';

// Datos de obras de arte para el inicio
const artes = [
  {id: 1, titulo: 'Laboratorio' },
  {id: 2, titulo: 'Magma' },
  {id: 3, titulo: 'Pizzarron' },
  {id: 4, titulo: 'Torre de Guarda Bosques' },
  {id: 5, titulo: 'Cuidad Perdida' },
  {id: 6, titulo: 'Liyue' },
  {id: 7, titulo: 'Atardecer en la Cuidad' }
];

const Inicio = () => {
  return (
    <div>
      <h1>Galería de Arte</h1>
      <ul style={{ listStyleType: "none" }}>
        {artes.map((arte) => (
          <li key={arte.id}>
            <Link to={`/arte/${arte.id}`}>{arte.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inicio;
