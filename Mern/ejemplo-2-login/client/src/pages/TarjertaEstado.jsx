import { Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TarjetaEstado = () => {
  const [estado, setEstado] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Para redirigir

  // Verificar autenticación al cargar la página
  useEffect(() => {
    const verificarAutenticacion = async () => {
      try {
        // Verificamos si el usuario está autenticado
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
  }, [navigate]); // Correcto: pasamos el array con 'navigate' como dependencia

  const cambiarEstado = () => {
    setEstado(!estado);
  };

  if (!isAuthenticated) {
    return null; // O muestra un mensaje de carga
  }

  return (
    <Container sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Botón</Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ mt: 4, color: "white" }}
            onClick={cambiarEstado}
          >
            {estado ? "Activo" : "Inactivo"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TarjetaEstado;
