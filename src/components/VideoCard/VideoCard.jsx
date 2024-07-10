import '../VideoCard/VideoCard.scss'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoModal from "../InfoModal/InfoModal"

const VideoCard = ({ data, playlistChunk, onClick }) => {

  console.log(playlistChunk)
  console.log(playlistChunk["Video ID"])


  const youtubeImageURL = (id) => {
    return `https://img.youtube.com/vi/${id}/0.jpg`
  }

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

    if (new Date() / 1000 - playlistChunk.timestamp > 86400) {
      setTimeout((card) => {
        setStyle("blurred");
      }, 500); // set blur styling
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
        whileHover={{
          scale: 0.97,
          transition: { duration: 0.8 },
        }}
        className={`video-card ${style}`}
      >
    
        <img
          className={`video-card__image`}
          src={youtubeImageURL(playlistChunk["Video ID"])}
        />
        <div className="video-card__description">
          <p className="video-card__date">{playlistChunk["Playlist Video Creation Timestamp"]}</p>
        </div>
      
      </motion.div>

      {infoModalOpen && <InfoModal onClose={handleInfoModalClose}
        playlistChunk = { playlistChunk } />}
    </>
  );
};

export default VideoCard;
