import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const Inicio = () => {
  const {productos} = useContext(ProductosContext)

  return (
      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Te presentamos nuestros últimos ingresos en camisetas retro.</h1>
            <p>Se encontraron X productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          {
            productos && productos.map((producto) => (
              <Card producto={producto} key={producto.id}/>

            ))
          }
        </section>
      </main>
  )
}

export default Inicio