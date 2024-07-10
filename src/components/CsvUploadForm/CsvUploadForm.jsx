import "../CsvUploadForm/CsvUploadForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import close from "../../assets/close-icon.svg";
import { motion } from "framer-motion";
import Papa from 'papaparse';

const CsvUploadForm = ({ onClose, getPlaylist }) => {

    const navigate = useNavigate();
    
    const handleParse = (file) => {
      const reader = new FileReader();
      reader.onload = async ({ target }) => {
        console.log(target);
      };
    
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
        console.log('im clicked')
      const reader = new FileReader();
    
      reader.onload = async ({ target }) => {
        console.log('file reader onload triggered')

        const data = Papa.parse(target.result, { skipEmptyLines: true, header: true });

        const newPlaylist = {
            title: e.target.title.value,
            file: data.data,
          };
        
        handleParse(newPlaylist.file)
         
        console.log(newPlaylist)
  
        await axios.post("http://localhost:8090/playlist", newPlaylist);
        console.log(newPlaylist);
  
        getPlaylist();
        navigate("/library");
      };
  
      reader.readAsText(e.target.file.files[0]);

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
          duration: 0.1,
          type: "spring",
          damping: 22,
          stiffness: 200,
        },
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

        <form onSubmit={submitHandler} className="form2">
            <img onClick={onClose} className="icon" src={close} />
            <input className="input-small" type="text" name="title" placeholder="Title" />
            <input type="file" name="file"/> 
            <button type="submit" className="upload-button" > Find out </button>
        </form>
        </motion.div>
    
      </section>
  
    </>
  );
};

export default CsvUploadForm;
