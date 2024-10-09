import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalleUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const { data } = await axios.get(`/api/usuarios/${id}`);
        setUsuario(data);
      } catch (error) {
        console.error('Error al obtener el usuario', error);
      }
    };

    obtenerUsuario();
  }, [id]);

  if (!usuario) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{usuario.nombreUsuario}</h1> {/* Cambié nombre a nombreUsuario */}
      <p>Email: {usuario.gmail}</p> {/* Cambié email a gmail */}
    </div>
  );
};

export default DetalleUsuario;
