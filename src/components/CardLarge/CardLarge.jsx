import "../CardLarge/CardLarge.scss"
import image1 from "../../assets/images/solar-eclipse.png"

const CardLarge = () => {
    return (
        <>
             <div className="card-large"> 
                 <img className="card-large__image" src={image1}/>
                 <div className="card-large__description">
                    <p>pioneer works solar eclipse</p>
                    <p>08/08/2028</p>
                 </div>
             </div>
        </>
    )
}

export default CardLarge