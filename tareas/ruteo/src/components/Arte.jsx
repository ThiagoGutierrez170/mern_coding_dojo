import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Datos de arte para mostrar
const datosArte = {
    1: {titulo: "Laboratorio",imagen:"/img/wallhaven-1.jpg"},
    2: {titulo: "Magma",imagen:"/img/wallhaven-2.jpg"},
    3: {titulo: "Pizzarron",imagen:"/img/wallhaven-3.jpg"},
    4: {titulo: "Torre de Guarda Bosques",imagen:"/img/wallhaven-4.jpg"},
    5: {titulo: "Cuidad Perdida",imagen:"/img/wallhaven-5.jpg"},
    6: {titulo: "Liyue",imagen:"/img/wallhaven-6.jpg"},
    7: {titulo: "Atardecer en la Cuidad",imagen:"/img/wallhaven-7.jpg"}
};

// Componente NavigationBar
const NavigationBar = ({ idActual, totalObras }) => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate(`/arte/${idActual - 1}`)} disabled={idActual <= 1}>Anterior</button>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate(`/arte/${idActual + 1}`)} disabled={idActual >= totalObras}>Siguiente</button>
        </nav>
    );
};

const Arte = () => {
    const { idArte } = useParams();  // se trae el parámetro de la URL
    const arte = datosArte[idArte];  // busco el arte por el id
    const idActual = Number(idArte); // idArte a número
    const totalObras = Object.keys(datosArte).length;

    if (!arte) {
        return <div>Obra de arte no encontrada</div>;
    }

    return (
        <div>
            <h1>{arte.titulo}</h1>
            {/*<img src={`/img/wallhaven-${idActual}.jpg`} alt={arte.titulo} style={{ height: "550px" }} />*/}
            <img src={arte.imagen} alt={arte.titulo} style={{ height: "550px" }} />
            <NavigationBar idActual={idActual} totalObras={totalObras} />
        </div>
    );
};

export default Arte;
