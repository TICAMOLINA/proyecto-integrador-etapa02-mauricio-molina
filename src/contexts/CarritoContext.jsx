import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CarritoContext = createContext()

const CarritoProvider = ( {children} ) => {

    const [agregarAlcarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto) {
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    function obtenerProductodeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }


    const agregarProductoAlCarritoContext = (producto) => {
        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlcarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductodeCarrito(producto)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const eliminarProductoDelCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const data = {
        agregarProductoAlCarritoContext,
        carrito,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default  CarritoContext