import Fila from "./Fila"
import './Tabla.scss'

const Tabla = () => {
  return (
    <table className="tabla-alta">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Stock</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <Fila />
        </tbody>
    </table>
  )
}

export default Tabla