import "../CardSmall/CardSmall.scss"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CardSmall = ({data, chunkData, onClick} ) => {
    
    const defaultStyle = "default"
    const defaultBorder = ""

    const [style, setStyle] = useState(defaultStyle)
    const [blurBorder, setBlurBorder] = useState(defaultBorder)
    const [clicked, setClicked] = useState(false)

    const clickToChange = () => {
        if (style === "default") setStyle ("blurred")
        if (style === "blurred") setStyle ("default")
        if (blurBorder === "default-border") setBlurBorder("blurred-border")

    }

    const timedBlur = (card) => {
       // if current timestamp - data.timestamp is greater than X days in unix time

        if ( ((new Date() / 1000) - chunkData.timestamp) > 86400 ){
            setTimeout( (card) => { setStyle("blurred") }, 500); // set blur styling
        }
      }
  
      useEffect(() => {
        timedBlur();
      }, []);


    return (

        <>
       
            <motion.div onClick={clickToChange} initial={{opacity: 0}} animate ={{opacity:1}} className={`card-small ${style}`}> 
            
                <img className="card-small__image" src={`http://localhost:8090/${chunkData?.image}`}/>
                    <div className="card-small__description">
                        <p>{chunkData?.title}</p>
                        <p>08/08/2028</p>
                    </div>
        
            </motion.div>
        </>
    )
}

export default CardSmall