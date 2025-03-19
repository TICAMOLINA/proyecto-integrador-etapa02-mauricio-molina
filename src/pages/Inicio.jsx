
const Inicio = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />
        <nav className="nav-bar">
          <ul className="nav-bar__nav-list">
            <li className="nav-bar__nav-item">
              <a href="index.html" className="nav-bar__nav-link">Inicio</a>
            </li>
            <li className="nav-bar__nav-item">
              <a href="" className="nav-bar__nav-link">Alta</a>
            </li>
            <li className="nav-bar__nav-item">
              <a href="src/pages/about/about.html" className="nav-bar__nav-link">Nosotros</a>
            </li>
            <li className="nav-bar__nav-item">
              <a href="src/pages/contact/contact.html" className="nav-bar__nav-link">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="search-bar">
          <div className="search-bar__logo-container">
            <img className="search-bar__logo-image" src="imgs/logo1.webp" alt="logo de la pagina" />
          </div>
          <form action="#" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
            <input type="search" id="busqueda" className="search-bar__form-search" placeholder="BUSCAR..." />
            <button type="submit" className="search-bar__form-submit"><i className="fa fa-search"></i></button>
          </form>
          <div className="search-bar__carrito-container">
            <img className="search-bar__image-carrito" src="imgs/shopping-bag.webp" alt="" />
          </div>
          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>
        </div>

      </header>

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Te presentamos nuestros últimos ingresos en camisetas retro.</h1>
            <p>Se encontraron X productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos"></section>


      </main>

      <footer className="footer-container">
        <div className="footer-container__footer-logo">
          <div className="footer-container__logo-facebook"><i className="fab fa-facebook" aria-hidden="true"></i></div>
          <div className="footer-container__logo-instagram"><i className="fab fa-instagram" aria-hidden="true"></i></div>
          <div className="footer-container__logo-whatsapp"><i className="fab fa-whatsapp" aria-hidden="true"></i></div>
          <div className="footer-container__logo-twitter"><i className="fab fa-twitter" aria-hidden="true"></i></div>
        </div>
        <div className="footer-container__footer-text">
          <p>® Copyright 2025 - Todos los derechos reservados</p>
        </div>

      </footer>


    </>
  )
}

export default Inicio