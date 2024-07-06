import "../CardLarge/CardLarge.scss"
import image1 from "../../assets/images/solar-eclipse.png"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CardLarge = ({ chunkData }) => {

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

      const spring = {
        type: "spring",
        stiffness: 400,
        damping: 30
      };

    return (
        <>
             <motion.div onClick={clickToChange} layout transition={spring} className={`card-large ${style}`}> 
                 <img className="card-large__image" src={`http://localhost:8090/${chunkData.image}`}/>
                 <div className="card-small__description">
                        <p>{chunkData?.title}</p>
                        <p className="card-small__date">{chunkData?.timestamp}</p>
                    </div>
        
             </motion.div>
        </>
    )
}

export default CardLarge