import axios from "axios";
import { useEffect, useState } from "react";
import CsvUploadForm from "../../components/CsvUploadForm/CsvUploadForm";
import CardGrid2 from "../../components/CardGrid2/CardGrid2";
import "../Library/Library.scss"

const LibraryPage = () => {
  const API_URL = "http://localhost:8090/playlist";

  const [playlistData, setPlaylistData] = useState([]);

  const getPlaylist = async () => {
    const response = await axios(API_URL);
    setPlaylistData(response.data);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("Button clicked");
    setModalOpen(true);
    
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  console.log("Modal state:", modalOpen);
  return (
    <>
      <main className="main">
        <section className="main__side-container">
          <h2 className="main__title">Find your old playlists </h2>

          <section className="library-description">
            <p className="library-description__labels">
              Playlist Name: 
            </p>
            <p className="library-description__labels">
            {playlistData[0]?.title}
            </p>
            <p className="library-description__labels">
            Total amount: {playlistData[0]?.file.length}
            </p>
            <button onClick={handleClickOpen} className="submit-button">Find Out</button>
          </section>
        </section>

        <section className="library">
          <CardGrid2 playlistData={playlistData} />
        </section>
      </main>

      {modalOpen && <CsvUploadForm onClose={handleModalClose} getPlaylist={getPlaylist} />}
    </>
  );
};

export default LibraryPage;
