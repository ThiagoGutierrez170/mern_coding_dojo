import { Button, Card, Container, Divider, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";








const UserDetailPage = () => {

    const { id } = useParams(); //OBTENEMOS EL ID DE LA URL
    const navigate = useNavigate(); //HOOK PARA NAVEGAR ENTRE PÁGINAS}

    const [user, setUser] = useState({});

    const [editMode, setEditMode] = useState(false);

    const handleBack = () => {
        navigate(-1); //VOLVER A LA PÁGINA ANTERIOR
    }

    const getUser = async () => {
        //PETICIÓN PARA OBTENER UN USUARIO POR ID
        const response = await axios.get(`/api/users/${id}`);
        const data = response.data;
        setUser(data);
    }


    const handleUpdateUser = async () => {
        //PETICIÓN PARA ACTUALIZAR UN USUARIO POR ID
        const response = await axios.put(`/api/users/${id}`, user);
        const data = response.data;
        setUser(data);
    }

    const handleDeleteUser = async () => {
        //PETICIÓN PARA ELIMINAR UN USUARIO POR ID
        const response = await axios.delete(`/api/users/${id}`);
        const data = response.data;
        console.log(data);
        navigate("/users"); //REDIRECCIONAMOS A LA PÁGINA DE US
    }

    //EJECUTAMOS LA FUNCIÓN AL CARGAR LA PÁGINA
    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Container>

                <Typography variant="h2">
                    User Detail Page
                </Typography>

                <Card sx={{ p: 2 }} elevation={2} >
                    <FormControlLabel control={
                        <Switch
                            checked={editMode}
                            onChange={(e) => setEditMode(e.target.checked)}
                            color="primary"
                        />
                    } label="Edit Mode" />
                    <Divider />
                    <Stack sx={{ width: 300 }} spacing={2}>
                        <TextField
                            type="email"
                            variant="outlined"
                            placeholder="example@email.com"
                            label="Email"
                            value={user.email || ""}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            disabled={!editMode} //SI NO ESTÁ EN MODO EDICIÓN, DESHABILITAMOS EL CAMPO
                        />
                        <TextField
                            type={!editMode ? "text" : "password"}
                            variant="outlined"
                            label="Password"
                            value={user.password || ""}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            disabled={!editMode} //SI NO ESTÁ EN MODO EDICIÓN, DESHABILITAMOS EL CAMPO
                        />
                        {
                            editMode ?
                                <Button variant="contained" color="primary" onClick={handleUpdateUser} >Editar</Button>
                                :
                                <Button variant="contained" color="error" onClick={handleDeleteUser} >ELIMINAR</Button>
                        }

                    </Stack>
                </Card>

                <Button onClick={handleBack}>Volver</Button>
            </Container>
        </>
    );
};


export default UserDetailPage;