import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import Swal from 'sweetalert2'
import ARSConvert from '../utils/ARSConvert'


const ItemCarrito = ({producto}) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (id) => {
                Swal.fire({
                    title: "¿Seguro que desea descartar este producto del carrito?",
                    text: "Elija una respuesta",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, no quiero comprar esto",
                    cancelButtonText: "Cancelar"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarProductoDelCarritoContext(id)
                      Swal.fire({
                        title: "Borrado con éxito!",
                        text: "El producto fue quitado de su carrito.",
                        icon: "success"
                      });
                    } 
                  });
    }


  return (
    <>
    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
        </td>
        <td>{producto.nombre}</td>
        <td>{ARSConvert(producto.precio)}</td>
        <td>{producto.cantidad}</td>
        <td>{ARSConvert(producto.precio * producto.cantidad)}</td>
        <td>
            <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr>

    </>
  )
}

export default ItemCarrito