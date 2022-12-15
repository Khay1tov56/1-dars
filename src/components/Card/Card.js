import "./card.css";
// import Germany from "../../assets/images/germany.png"
// import Data from "../../data"
const Card = ({img, name, population, region, capital})=> {
    
    return (
        <>
        <li className="card-item list-unstyled my-4">
            <img className="card-img img-fluid" src={img}
            width="300"
            height="160"
            alt="Template img" />
            <div className="cards">
            <h3 className="card-title">{name}</h3>
            <p className="card-pop">Population: <span className="card-span">{population}</span></p>
            <p className="card-pop">Region: <span className="card-span">{region}</span></p>
            <p className="card-pop">Capital: <span className="card-span">{capital}</span></p>
            </div>
        </li>
        </>
    )
}

export default Card;