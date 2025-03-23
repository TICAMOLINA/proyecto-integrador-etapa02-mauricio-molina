import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CarritoContext = createContext()

const CarritoProvider = ( {children} ) => {

    const [agregarAlcarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    const agregarProductoAlCarritoContext = (producto) => {

    }
    const data = {
        agregarProductoAlCarritoContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default  CarritoContext