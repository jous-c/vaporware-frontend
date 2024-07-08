import "../CardMedium/CardMedium.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoModal from "../InfoModal/InfoModal"

const CardMedium = ({ chunkData, snippetsData }) => {
  const defaultStyle = "default";
  const defaultBorder = "";

  const [style, setStyle] = useState(defaultStyle);
  const [blurBorder, setBlurBorder] = useState(defaultBorder);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const clickToChange = () => {
    if (style === "default") setInfoModalOpen(true);
    if (style === "blurred") setStyle("default");
    // if (blurBorder === "default-border") setBlurBorder("blurred-border");
  };


const handleInfoModalClose = () => {
    setInfoModalOpen(false);
}


  const timedBlur = (card) => {
    // if current timestamp - data.timestamp is greater than X days in unix time

    if (new Date() / 1000 - chunkData.timestamp > 86400) {
      setTimeout((card) => {
        setStyle("blurred");
      }, 500);
    }
  };

  useEffect(() => {
    timedBlur();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };

  return (
    <>
      <motion.div
        onClick={clickToChange}
        layout
        transition={spring}
        className={`card-medium ${style}`}
        whileHover={{
          scale: 0.95,
          transition: { duration: 0.8 },
        }}
      >
        <img
          className="card-medium__image"
          src={`http://localhost:8090/${chunkData.image}`}
        />
        <div className="card-medium__description">
          <p>{chunkData.title}</p>
        </div>
      </motion.div>

      {infoModalOpen && <InfoModal onClose={handleInfoModalClose}
        chunkData = { chunkData } />}
    </>
  );
};

export default CardMedium;
