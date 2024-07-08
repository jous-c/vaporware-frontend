import "../CardSmall/CardSmall.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardSmall = ({ data, chunkData, onClick }) => {
  const defaultStyle = "default";
  const defaultBorder = "";

  const [style, setStyle] = useState(defaultStyle);
  const [blurBorder, setBlurBorder] = useState(defaultBorder);
  const [ImageVanish, setImageVanish] = useState("");

  const clickToChange = () => {
    if (style === "default") setStyle("blurred");
    if (style === "blurred") setStyle("default");
    if (blurBorder === "default-border") setBlurBorder("blurred-border");
  };


  const timedBlur = (card) => {
    // if current timestamp - data.timestamp is greater than X days in unix time

    if (new Date() / 1000 - chunkData.timestamp > 86400) {
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

//   const url = "youtube.com/watch?v=JGwWNGJdvx8";

//   const youtubeIdParser = (url) => {
//     const regExp =
//       /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]{11}).*/;
//     const match = url.match(regExp);
//     return match ? match[1] : false;
//   }

//   const youtubeId = youtubeIdParser(chunkData?.url);

//   const youtubeImage = (id) => {
//     return `https://img.youtube.com/vi/${id}/0.jpg`;
//   };

//   console.log('chunkData.url:', chunkData?.url);
//   console.log('youtubeId:', youtubeId);
//   console.log('youtubeImage:', youtubeImage(youtubeId));

  return (
    <>
      <motion.div
        onClick={clickToChange}
        layout
        transition={spring}
        whileHover={{
          scale: 0.95,
          transition: { duration: 0.8 },
        }}
        className={`card-small ${style}`}
      >
    
        <img
          className={`card-small__image`}
          src={`http://localhost:8090/${chunkData.image}`}
          alt={chunkData.title}
        />
        <div className="card-small__description">
          <p>{chunkData?.title}</p>
          <p className="card-small__date">{chunkData?.timestamp}</p>
        </div>
      
      </motion.div>
    </>
  );
};

export default CardSmall;
