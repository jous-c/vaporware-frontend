import "../CardMedium/CardMedium.scss"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';


const CardMedium = ({ chunkData}) => {

    const defaultStyle = "default"
    const defaultBorder = ""

    const [style, setStyle] = useState(defaultStyle)
    const [blurBorder, setBlurBorder] = useState(defaultBorder)

    const clickToChange = () => {
        if (style === "default") setStyle ("blurred")
        if (style === "blurred") setStyle ("default")
        if (blurBorder === "default-border") setBlurBorder("blurred-border")

    }

    const timedBlur = (card) => {
       // if current timestamp - data.timestamp is greater than X days in unix time

        if ( ((new Date() / 1000) - chunkData.timestamp) > 86400 ){
            setTimeout( (card) => { setStyle("blurred") }, 500);
        }
      }
  
      useEffect(() => {
        timedBlur();
      }, []);

    return (
        <>
             <div onClick={clickToChange} className={`card-medium ${style}`}> 
             <img className="card-medium__image" src={`http://localhost:8090/${chunkData.image}`}/>
                 <div className="card-medium__description">
                     <p>{chunkData.title}</p>
                 </div>
             </div>
        </>
    )
}

export default CardMedium