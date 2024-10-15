import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const NotasDetalle = () => {
    const [nota, setNota] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // Obtener el ID de la nota desde los parámetros de la URL

    useEffect(() => {
        const fetchNota = async () => {
            try {
                const response = await axios.get(`/api/notas/${id}`);
                setNota(response.data);
            } catch (error) {
                console.error(error);
                setError('No se pudo cargar la nota. Puede que no exista.');
            }
        };

        fetchNota();
    }, [id]);

    const handleBack = () => {
        navigate('/notas'); // Redirigir a la lista de notas
    };

    if (error) {
        return (
            <Container sx={{ p: 4 }}>
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    if (!nota) {
        return (
            <Container sx={{ p: 4 }}>
                <Typography variant="h4">Cargando...</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ p: 4 }}>
            <Typography variant="h2">{nota.titulo}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Descripción:</strong> {nota.descripcion}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Estado:</strong> {nota.estado}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Creador:</strong> {nota.creador}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button variant="contained" color="primary" onClick={handleBack}>
                    Volver a la lista
                </Button>
            </Stack>
        </Container>
    );
};

export default NotasDetalle;
