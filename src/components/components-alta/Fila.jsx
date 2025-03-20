
const Fila = ({ producto }) => {

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.categoria}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.stock}</td>
            <td>
                <img src={producto.foto} alt={producto.nombre} width={'80'}/>
            </td>
            <td>{producto.envio}</td>
            <td>                    
                <button>Ver</button>
                <button>Editar</button>
                <button>Borrar</button>
            </td>
        </tr>
    )
}

export default Fila