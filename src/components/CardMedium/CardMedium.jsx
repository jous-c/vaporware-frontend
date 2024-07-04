import "../CardMedium/CardMedium.scss"
import image1 from "../../assets/images/solar-eclipse.png"

const CardMedium = ({ cardTitle, cardImage, chunkData}) => {

    console.log(chunkData)
    return (
        <>
             <div className="card-medium"> 
                 <div className="card-medium__description">
                    <img src={`http://localhost:8090/${chunkData.image}`}/>
                     <p>{chunkData.title}</p>
                 
                    
                 </div>
             </div>
        </>
    )
}

export default CardMedium