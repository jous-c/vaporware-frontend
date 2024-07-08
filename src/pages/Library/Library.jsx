
import CardsGrid from "../../components/CardsGrid/CardsGrid.jsx";
import Nav from '../../components/Nav/Nav.jsx';
import axios from "axios";
import { useEffect, useState } from "react";
import CardMedium from "../../components/CardMedium/CardMedium.jsx"

const LibraryPage = () => {
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
    <main className="main">
    <section className="sidebar"> 
        <h2>Topics: </h2>
        <span>All</span>
        <span>Astronomy</span>
        <span>Recipes</span>
        <span>Gardening</span>
        <span>memes</span>
    </section>
    <section className="library">
       <CardMedium />
    </section>
    </main>
 
    
    </>
  );
};

export default LibraryPage
