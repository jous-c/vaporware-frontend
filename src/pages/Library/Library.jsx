
import axios from "axios";
import { useEffect, useState } from "react";
import CsvUploadForm from "../../components/CsvUploadForm/CsvUploadForm"

const LibraryPage = () => {
  const API_URL = "http://localhost:8090/playlist";

  const [playlistData, setPlaylistData] = useState([]);

  const getPlaylist = async () => {
    const response = await axios("http://localhost:8090/playlist");
    setPlaylistData(response.data);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  const [modalOpen, setModalOpen] = useState(false)

  const handleClickOpen = () => {
      console.log("Button clicked");
      setModalOpen(true);
  }

  const handleModalClose = () => {
      setModalOpen(false);
  }
  

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
     
        <button onClick={handleClickOpen}>find out</button>
   
    </section>
    </main>
 
      {modalOpen && <CsvUploadForm onClose={handleModalClose} getPlaylist = {getPlaylist} />}
    </>
  );
};

export default LibraryPage
