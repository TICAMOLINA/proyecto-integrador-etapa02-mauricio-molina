import Card from "../components/Card"

const Inicio = () => {
  return (
      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Te presentamos nuestros últimos ingresos en camisetas retro.</h1>
            <p>Se encontraron X productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          <Card />
        </section>
      </main>
  )
}

export default Inicio