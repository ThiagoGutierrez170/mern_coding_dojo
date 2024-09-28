
const ListaDeHeroes = ({nombre,apellido,correo,contraseña}) => {
    return (
        <tr className="heroe">
            <td>{nombre}</td> 
            <td>{apellido}</td>
            <td>{correo}</td>
            <td>{contraseña}</td>
        </tr>
    );
}

export default ListaDeHeroes;