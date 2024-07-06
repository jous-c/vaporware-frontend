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
        <section className="form-container">
        <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <form className="form">
            <img onClick={onClose} className="icon" src={close} />
            
    

            <button className="upload-button"> Add to library </button>
            </form>
        </motion.div>
        
      </section>
        </>
    )
}

export default InfoModal