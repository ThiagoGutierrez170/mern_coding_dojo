import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import axios from 'axios';
import RegisterPage from "./pages/RegisterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserDetailPage from "./pages/UserDetailPage.jsx";
import TarjetaEstado from "./pages/TarjertaEstado.jsx";
import RouteError from "./pages/RouteError.jsx";
import CrearNota from "./pages/NotasForm.jsx";
import NotasLista from "./pages/NotasLista.jsx";
import NotasDetalle from "./pages/NotasDetalle.jsx";

const NavigationBar = () => {
  const navigate = useNavigate(); // Hook para la navegación programática

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
        await axios.delete("/api/session"); // Llama a la ruta de logout
        // Opcional: redirigir o actualizar el estado del usuario
        console.log("Logout exitoso");
        navigate("/");
    } catch (error) {
        console.error("Error al cerrar sesión", error);
    }
};

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => navigate('/estado')}>
            Estado
          </Button>
          <Button color="inherit" onClick={() => navigate('/crear_nota')}>
            Crear Nota
          </Button>
          <Button color="inherit" onClick={() => navigate('/lista_notas')}>
            Lista de Notas
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" Component={RegisterPage} />
        <Route path="/users" Component={UserPage} />
        <Route path="/users/:id" Component={UserDetailPage} />
        <Route path="/estado" Component={TarjetaEstado} />
        <Route path="/crear_nota" Component={CrearNota} />
        <Route path="/lista_notas" Component={NotasLista} />
        <Route path="/notas/:id" Component={NotasDetalle} />
        <Route path="*" Component={RouteError} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
