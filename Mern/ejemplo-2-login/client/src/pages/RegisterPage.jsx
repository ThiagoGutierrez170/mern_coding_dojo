import { Button, Container, Grid2, Stack, TextField, Typography } from "@mui/material";
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
            const response = await axios.post("/api/users", form);//REALIZAR LA PETICIÓN DE CREACIÓN AL BACKEND
            const data = response.data; //CONVIERTE LA RESPUESTA
            const status = response.status; //OBTENEMOS EL ESTADO DE LA RESPUESTA
            console.log(data, status);  //VEMOS EN CONSOLA LA RESPUESTA
            setErrors({}); //LIMPIAMOS LOS ERRORES
        } catch (error) {
            console.log(error.response.data.errors); //SI HAY ERROR LO MOSTRAMOS EN CONSOLA
            setErrors(error.response?.data?.errors); //GUARDAMOS LOS ERRORES EN EL ESTADO
        }


    }

    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/session", loginForm);//REALIZAR LA PETICIÓN DE LOGIN AL BACKEND
            const data = response.data; //CONVIERTE LA RESPUESTA
            const status = response.status; //OBTENEMOS EL ESTADO DE LA RESPUESTA
            console.log(data, status);  //VEMOS EN CONSOLA LA RESPUESTA
            setLoginErrors({}); //LIMPIAMOS LOS ERRORES
        } catch (error) {
            console.log(error.response.data.errors); //SI HAY ERROR LO MOSTRAMOS EN CONSOLA
            setLoginErrors(error.response?.data?.errors); //GUARDAMOS LOS ERRORES EN EL ESTADO
        }
    }


    return (
        <>
            <Container sx={{ p: 4 }}>
                <Grid2 container spacing={4}>
                    <Grid2 item size={6}>
                        <Typography variant="h2" >
                            Register
                        </Typography>

                        <Stack sx={{ width: "100%" }} spacing={2}>
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
                                label="Password"
                                value={form.confirmPassword || ""}
                                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                error={errors.confirmPassword ? true : false}
                                helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                            />
                            <Button variant="contained" color="primary" onClick={handleRegister} >Register</Button>

                        </Stack>
                    </Grid2>
                    <Grid2 item size={6}>
                        <Typography variant="h2" >
                            Login
                        </Typography>

                        <Stack sx={{ width: "100%" }} spacing={2}>
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
                            <Button variant="contained" color="primary" onClick={handleLogin} >Login</Button>

                        </Stack>
                    </Grid2>
                </Grid2>
                <Button variant="contained" color="warning" sx={{ mt: 4, color: "white" }}>
                    <Link to="/users">VIEW USERS</Link>
                </Button>
            </Container>
        </>
    );
}


export default Register;

