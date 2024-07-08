import "../UploadForm/UploadForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import close from "../../assets/close-icon.svg";
import { motion } from "framer-motion";

const UploadForm = ({ onClose, getSnippets }) => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newSnippet = {
      title: e.target.title.value,
      url: e.target.url.value,
      description: e.target.description.value,
      image: e.target.image.value
    };
    console.log(newSnippet);
    // postNewSnippet(newSnippet)
    await axios.post("http://localhost:8090/snippets", newSnippet);

    // if(getSnippetsData){
    getSnippets();
    navigate("/");
    // }
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        durtion: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <>
       
      <section className="form-container">
        <motion.div
            // onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <form onSubmit={submitHandler} className="form">
            <img onClick={onClose} className="icon" src={close} />
            <input type="file" name="image" /> 
            <input className="input-small" type="text" name="title" placeholder="Title" />
            <input className="input-small" type="text" name="url" placeholder="URL" />
            <textarea
                className="input-large"
                type="text"
                name="description"
                placeholder="Notes"
            ></textarea>
            <button className="upload-button"> Add to library </button>
            </form>
        </motion.div>
        
      </section>
  
    </>
  );
};

export default UploadForm;
