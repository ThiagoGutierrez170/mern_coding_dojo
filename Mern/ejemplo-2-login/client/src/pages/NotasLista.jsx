import { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, ListItemText, Button, Stack } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const NotasLista = () => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener las notas del usuario actual
    const fetchNotas = async () => {
        try {
            const response = await axios.get("/api/notas"); // Llamada a la API para obtener las notas del usuario actual
            setNotas(response.data); // Almacenar las notas en el estado
            setLoading(false);
        } catch (err) {
            setError("Hubo un problema al cargar las notas.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotas(); // Ejecutamos la llamada a la API cuando el componente se monta
    }, []);

    if (loading) {
        return (
            <Container sx={{ p: 4 }}>
                <Typography variant="h4">Cargando notas...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ p: 4 }}>
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ p: 4 }}>
            <Typography variant="h2">Mis Notas</Typography>
            {notas.length === 0 ? (
                <Typography variant="body1">No tienes notas creadas.</Typography>
            ) : (
                <List>
                    {notas.map((nota) => (
                        <ListItem key={nota._id} sx={{ mb: 2, border: "1px solid #ccc", borderRadius: "8px", p: 2 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                                <ListItemText
                                    primary={nota.titulo}
                                    secondary={nota.estado}
                                    primaryTypographyProps={{ variant: "h6" }}
                                    secondaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={`/notas/${nota._id}`} // Enlace al detalle de la nota
                                >
                                    Ver Detalle
                                </Button>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default NotasLista;
