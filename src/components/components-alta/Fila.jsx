import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Fila = ({ producto }) => {

    const { eliminarProductoContext, setProductoAEditar} = useContext(ProductosContext)

    const handleEliminar = (id) => {
        eliminarProductoContext(id)
    }

    const handleEditar = (producto) => {
        setProductoAEditar(producto)
    }

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
            <td>{producto.envio ? 'Si' : 'No'}</td>
            <td>                    
                <button>Ver</button>
                <button onClick={() => handleEditar(producto)}>Editar</button>
                <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
            </td>
        </tr>
    )
}

export default Fila