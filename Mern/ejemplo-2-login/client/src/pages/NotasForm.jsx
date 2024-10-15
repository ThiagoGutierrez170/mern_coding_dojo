import { Button, Container, Grid, Stack, TextField, Typography, Select, MenuItem, FormControl, InputLabel, FormHelperText } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CrearNota = () => {
    const [form, setForm] = useState({
        titulo: "",
        descripcion: "",
        estado: "",
    });
    const [errors, setErrors] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Verificar autenticación al cargar la página
    useEffect(() => {
        const verificarAutenticacion = async () => {
            try {
                const response = await axios.get("/api/session"); // Aquí hacemos la petición para validar si el token es válido
                if (response.status === 200) {
                    setIsAuthenticated(true); // Si la autenticación es válida
                }
            } catch (error) {
                // Si no está autenticado, lo redirigimos al login
                navigate("/");
            }
        };

        verificarAutenticacion();
    }, [navigate]);

    // Si no está autenticado, no se renderiza el formulario
    if (!isAuthenticated) {
        return null; // O puedes mostrar un mensaje de carga
    }

    // Función para manejar la creación de la nota
    const handleCreate = async () => {
        try {
            const response = await axios.post("/api/notas", form); // Llamada a la API para crear la nota
            console.log(response.data);
            setErrors({});
            navigate("/lista_notas"); // Redirigir a la lista de notas después de crear
        } catch (error) {
            console.log(error.response?.data?.errors);
            setErrors(error.response?.data?.errors || {});
        }
    };

    return (
        <Container sx={{ p: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">Crear Nota</Typography>
                    <Stack sx={{ width: "100%" }} spacing={2}>
                        {/* Formulario para crear nota */}
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Título"
                            value={form.titulo}
                            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                            error={!!errors.titulo}
                            helperText={errors.titulo ? errors.titulo.message : ""}
                        />
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Descripción"
                            multiline
                            minRows={4}
                            value={form.descripcion}
                            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                            error={!!errors.descripcion}
                            helperText={errors.descripcion ? errors.descripcion.message : ""}
                        />

                        {/* Select para Estado */}
                        <FormControl variant="outlined" error={!!errors.estado}>
                            <InputLabel>Estado</InputLabel>
                            <Select
                                label="Estado"
                                value={form.estado}
                                onChange={(e) => setForm({ ...form, estado: e.target.value })}
                            >
                                <MenuItem value="completar">Completar</MenuItem>
                                <MenuItem value="completando">Completando</MenuItem>
                                <MenuItem value="completado">Completado</MenuItem>
                            </Select>
                            <FormHelperText>{errors.estado ? errors.estado.message : ""}</FormHelperText>
                        </FormControl>

                        <Button variant="contained" color="primary" onClick={handleCreate}>
                            Crear Nota
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CrearNota;
