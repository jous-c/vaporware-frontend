import { motion } from "framer-motion";
import close from "../../assets/close-icon.svg"
import "../InfoModal/InfoModal.scss";
import testimage from '../../assets/images/solar-eclipse.png'

const InfoModal = ({ onClose, chunkData }) => {


  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "-75vh",
      opacity: 1,
      transition: {
        durtion: 0.1,
        type: "spring",
        damping: 28,
        stiffness: 225,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

    return(
        <>
        <section className="infocard-container">
        <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <section className="info-card">
    
                <div className="info-card__container-left">
                    <div>
    
                    <h2 className="info-card__title">solar eclipse viewing 101, coldspring nevada</h2>
                    <p className="info-card__description"> Lorem ipsum dolor sit amet consectetur. Amet bibendum lacus elit ultrices hendrerit pharetra mollis mauris ornare. 
Natoque etiam aliquam hendrerit purus vel ornare eleifend commodo.</p>
                    </div>
                  
                    <div className="info-card__bottom">
                    <p className="info-card__time-label">08/08/2022 10:31PM</p>
                    <button className="secondary-button">URL</button> 
                    </div>
                </div>
                <img className="info-card__image" src={testimage} />
                <img onClick={onClose} className="icon" src={close} />
            </section>
        </motion.div>
        
      </section>
        </>
    )
}

export default InfoModal