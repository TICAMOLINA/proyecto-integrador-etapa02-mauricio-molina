import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from './ItemCarrito'
import './ListadoCarrito.scss'

const ListadoCarrito = (producto) => {

    const { carrito, 
        limpiarCarritoContext, 
        guardarCarritoBackendContext } = useContext(CarritoContext)

    const handleComprar = () => {
        guardarCarritoBackendContext()
    }

    const handleLimpiarCarrito = () => {
        limpiarCarritoContext()
    }

    const totalAPagar = carrito.reduce((acumulado, producto) =>
    acumulado + producto.precio * producto.cantidad, 0)

  return (
    <>
    <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
    </table>
    <hr />
            <div><p>Total a pagar: <span>{totalAPagar}</span></p></div>
    { !carrito.length <= 0 && (
            <>
                <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button onClick={handleComprar}>Comprar</button>
            </>
        )
    }
</>
  )
}

export default ListadoCarrito