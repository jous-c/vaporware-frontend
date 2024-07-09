import { motion } from "framer-motion";
import close from "../../assets/close-icon.svg"
import "../InfoModal/InfoModal.scss";
import testimage from '../../assets/images/solar-eclipse.png'

const InfoModal = ({ onClose, chunkData }) => {

  
 
    return(
        <>
         
        <section className="infocard-container">
      
            <section className="info-card">
    
                <div className="info-card__container-left">
                    <div>
    
                    <h2 className="info-card__title">{chunkData.title}</h2>
                    <p className="info-card__description"> {chunkData.notes}</p>
                    </div>
                  
                    <div className="info-card__bottom">
                    <p className="info-card__time-label">08/08/2022 10:31PM</p>
                    <button className="secondary-button">SAVE TO LIBRARY</button> 
                    </div>
                </div>
                <img className="info-card__image" src={`http://localhost:8090/${chunkData.image}`} />
                <img onClick={onClose} className="icon" src={close} />
            </section>
      
      </section>
 

        </>
    )
}

export default InfoModal