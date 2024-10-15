import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({});
    const [loginForm, setLoginForm] = useState({});
    const [errors, setErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({});

    const handleRegister = async () => {
        try {
            const response = await axios.post("/api/users", form); 
            const data = response.data; 
            const status = response.status; 
            console.log(data, status);  
            setErrors({});  
        } catch (error) {
            console.log(error.response.data.errors);  
            setErrors(error.response?.data?.errors);  
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/session", loginForm); 
            const data = response.data; 
            const status = response.status; 
            console.log(data, status);  
            setLoginErrors({});  
        } catch (error) {
            console.log(error.response.data.errors);  
            setLoginErrors(error.response?.data?.errors);  
        }
    };

    // Función para manejar el logout
    const handleLogout = async () => {
        try {
            await axios.delete("/api/session"); // Llama a la ruta de logout
            // Opcional: redirigir o actualizar el estado del usuario
            console.log("Logout exitoso");
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }
    };

    return (
        <Container sx={{ p: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">Register</Typography>
                    <Stack sx={{ width: "100%" }} spacing={2}>
                        {/* Registro de formulario */}
                        <TextField
                            type="email"
                            variant="outlined"
                            placeholder="example@email.com"
                            label="Email"
                            value={form.email || ""}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            error={errors.email ? true : false}
                            helperText={errors.email ? errors.email.message : ""}
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            label="Password"
                            value={form.password || ""}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            error={errors.password ? true : false}
                            helperText={errors.password ? errors.password.message : ""}
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            label="Confirm Password"
                            value={form.confirmPassword || ""}
                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            error={errors.confirmPassword ? true : false}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                        />
                        <Button variant="contained" color="primary" onClick={handleRegister}>
                            Register
                        </Button>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h2">Login</Typography>
                    <Stack sx={{ width: "100%" }} spacing={2}>
                        {/* Login de formulario */}
                        <TextField
                            type="email"
                            variant="outlined"
                            placeholder="example@email.com"
                            label="Email"
                            value={loginForm.email || ""}
                            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                            error={loginErrors.email ? true : false}
                            helperText={loginErrors.email ? loginErrors.email.message : ""}
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            label="Password"
                            value={loginForm.password || ""}
                            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                            error={loginErrors.password ? true : false}
                            helperText={loginErrors.password ? loginErrors.password.message : ""}
                        />
                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Stack>
                </Grid>
            </Grid>

            {/* Botón para cerrar sesión */}
            <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 4 }}>
                Logout
            </Button>

            <Link to="/users" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="warning" sx={{ mt: 4, color: "white" }}>
                    VIEW USERS
                </Button>
            </Link>
        </Container>
    );
};

export default Register;
