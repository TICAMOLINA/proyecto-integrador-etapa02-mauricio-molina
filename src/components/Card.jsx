import './Card.scss'

const Card = () => {
    return (
        <div className="card">
            <article className="card__article">
                <div className="card__image-container">
                    <img className="card__image" src="/public/imgs/alemania-1990.webp" alt="texto foto"/>
                </div>
                <div className="card__content">
                    <h2 className="card__heading">Camiseta Alemania - Mundial Italia 1990</h2>
                    <div className="card__description">
                        <p>Camiseta Alemania - Mundial Italia 1990</p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card