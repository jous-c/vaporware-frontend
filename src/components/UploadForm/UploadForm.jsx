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
      description: e.target.description.value,
    };
    console.log(newSnippet);
    // postNewSnippet(newSnippet)
    await axios.post("http://localhost:8090/snippets", newSnippet);

    // if(getSnippetsData){
    getSnippets();
    navigate("/main");
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
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <>
       
      <section className="form-container">
        <form onSubmit={submitHandler} className="form">
          <img onClick={onClose} className="icon" src={close} />
          {/* <input type="file" name="file" className="input-small" />  */}
          <input type="text" name="title" placeholder="title" />
          <textarea
            type="text"
            name="description"
            placeholder="description"
          ></textarea>
          <button> upload it </button>
        </form>
      </section>
  
    </>
  );
};

export default UploadForm;
