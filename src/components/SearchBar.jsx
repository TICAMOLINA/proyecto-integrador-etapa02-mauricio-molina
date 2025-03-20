import './SearchBar.scss'

const Searchbar = () => {
    return (
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
    )
}

export default Searchbar