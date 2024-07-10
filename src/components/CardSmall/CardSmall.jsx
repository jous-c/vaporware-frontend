import "../CardSmall/CardSmall.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoModal from "../InfoModal/InfoModal"

const CardSmall = ({ data, chunkData, onClick }) => {


    const youtubeImage = (url) => {

      const youtubeIdParser = (url) => {
        const regExp =
          /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]{11}).*/;
        const match = url.match(regExp);
        return match ? match[1] : false;
      }

      const youtubeId = youtubeIdParser(chunkData.url);
      return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;

    };

  const defaultStyle = "default";
  const defaultBorder = "";

  const [style, setStyle] = useState(defaultStyle);
  const [blurBorder, setBlurBorder] = useState(defaultBorder);
  const [infoModalOpen, setInfoModalOpen] = useState(false);


  const clickToChange = () => {
    if (style === "default") setInfoModalOpen(true);
    if (style === "blurred") setStyle("default");
    if (blurBorder === "default-border") setBlurBorder("blurred-border");
  };


const handleInfoModalClose = () => {
  setInfoModalOpen(false);
}

const timedBlur = (card) => {
    // if current timestamp - data.timestamp is greater than X days in unix time

    if (new Date() / 1000 - chunkData.timestamp > 86400) {
      setTimeout((card) => {
        setStyle("blurred");
      }, 500); // set blur styling
    }
  };

  if (new Date() / 1000 - chunkData.timestamp > 864000) {
    setTimeout((card) => {
      setStyle("blurred25");
    }, 500); // set blur styling
  }

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
        whileHover={{
          scale: 0.97,
          transition: { duration: 0.8 },
        }}
        className={`card-small ${style}`}
      >
    
        <img
          className={`card-small__image`}
          src={chunkData.image ? `http://localhost:8090/${chunkData.image}` : chunkData.url ? youtubeImage(chunkData.url) : chunkData.file}
          alt={chunkData.title}
        />
        <div className="card-small__description">
          <p>{chunkData?.title}</p>
          <p className="card-small__date">{chunkData?.timestamp}</p>
        </div>
      
      </motion.div>


      {infoModalOpen && <InfoModal onClose={handleInfoModalClose}
        chunkData = { chunkData } />}
    </>
  );
};

export default CardSmall;
