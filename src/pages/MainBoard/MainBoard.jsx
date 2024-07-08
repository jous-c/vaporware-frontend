import "./MainBoard.scss";
import CardsGrid from "../../components/CardsGrid/CardsGrid.jsx";
import Nav from '../../components/Nav/Nav.jsx';
import axios from "axios";
import { useEffect, useState } from "react";
import UploadForm from "../../components/UploadForm/UploadForm.jsx";

const MainBoard = () => {
  const API_URL = "http://localhost:8090/snippets";

  const [snippetsData, setSnippetsData] = useState([]);

  const getSnippets = async () => {
    const response = await axios("http://localhost:8090/snippets");
    setSnippetsData(response.data);
  };

  useEffect(() => {
    getSnippets();
  }, []);

  

  return (
    <>
     <Nav 
          getSnippets = {getSnippets}
          snippetsData = {snippetsData}
           />
    <section className="background">
      <CardsGrid 
        snippetsData = {snippetsData}/>
    </section>
    
    </>
  );
};

export { MainBoard  };
