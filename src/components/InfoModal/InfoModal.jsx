import { motion } from "framer-motion";
import close from "../../assets/close-icon.svg"
import "../InfoModal/InfoModal.scss";

const InfoModal = ({ onClose }) => {


  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "-50vh",
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
            <img onClick={onClose} className="icon" src={close} />
            
            <div>
                <div className="info-card__container-top">
                    <h2 className="info-card__title">title of snippet</h2>
                    <p> notes about this snippet that I saved</p>
                </div>

                <div>
                    <button>URL</button>
                    <p>timestamp 123456</p>
                </div>
            </div>
            </section>
        </motion.div>
        
      </section>
        </>
    )
}

export default InfoModal