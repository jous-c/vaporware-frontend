import '../Nav/Nav.scss'
import { useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
import SearchBar from '../SearchBar/SearchBar'

const Nav = ({ getSnippets, snippetsData}) => {
    
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
            <nav className="nav"> 
                <SearchBar />

                <div className="nav__container-right">
                    <h2 className="nav__counter"> Saved / {snippetsData.length} </h2>
                    <h2 className="nav__counter"> Lost / 5 </h2>
                    <button onClick={handleClickOpen} className="button"> add </button>
                </div>
               
                {modalOpen && <UploadForm onClose={handleModalClose} getSnippets={getSnippets} />}
            </nav>
        </>
    )
}

export default Nav