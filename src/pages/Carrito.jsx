import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from '../components/ListadoCarrito'
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"

const Carrito = (producto) => {

  useTitulo('Carrito')

  const { carrito } = useContext(CarritoContext)

  const productosTotalesCarrito = carrito.length

  return (
    <>
      <h1>Productos dentro del carrito:
        {
          carrito.length <= 0 ? (
            <p></p>
          ) : (
            <span> {productosTotalesCarrito}</span>
          )
        }
      </h1>
      <hr />
      <ListadoCarrito />


    </>
  )
}

export default Carrito