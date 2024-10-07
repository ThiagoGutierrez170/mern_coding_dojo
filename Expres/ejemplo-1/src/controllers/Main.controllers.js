

const saludoMain = (req, res) => {
    res.send('Hola Mundo soy Express');
}
const saludoSaludo = (req, res) => {
    res.send('Hola Mundo desde la ruta /saludo');
}


export default { saludoMain, saludoSaludo };