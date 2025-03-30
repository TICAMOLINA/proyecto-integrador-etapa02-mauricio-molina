import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../utils/Spinner"
import Slider from "../components/Slider"

const ProductosDetalle = () => {

    const { id } = useParams()

    const [productoDetalle, setProductoDetalle] = useState(null)
    
    useEffect(() => {
      getOne(id)
    }, [])
   
    const getOne = async (id) => {
        const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

        try {
            const res = await fetch(urlGetOne)

            if (!res.ok) {
                throw new Error('No se pudo obtener producto')
            }
            const data = await res.json()
            setProductoDetalle(data)

        } catch (error) {
            console.error('[getOne]', error)
        }
    }
  return (
    <>
    <h1>Producto detalle</h1>

    {
      productoDetalle ?
      (
        <> 
        <Slider data={productoDetalle}/>
        <h2>El nombre del producto: {productoDetalle.nombre}</h2>
        <p>La categoría del producto es: {productoDetalle.categoria}</p>
        <p>El precio: {productoDetalle.precio}</p>

        </>

      ) :
      (
       <Spinner />
      )
    }

    </>

  )
}

export default ProductosDetalle