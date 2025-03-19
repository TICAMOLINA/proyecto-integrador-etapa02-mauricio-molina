import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import Carrito from "../pages/Carrito"
import Alta from "../pages/Alta"
import NoEncontrado from "../pages/NoEncontrado"

const Rutas = () => {

    const hookRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/carrito',
                element: <Carrito />
            },
            {
                path: '/alta',
                element: <Alta />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )
  
    return hookRutas
}

export default Rutas