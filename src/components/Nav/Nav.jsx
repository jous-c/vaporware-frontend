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

    const lostSnippets = () => {
        const lostCount = 0;
        
    }

    return (
        <>
            <nav className="nav"> 
                <SearchBar />
                <div className="nav__container-right">
                <button onClick={handleClickOpen} className="button"> Add </button>
                    <h2 className="nav__counter"> Total / {snippetsData.length} </h2>
                    <h2 className="nav__counter"> Lost / 5 </h2>
                    
                </div>
               
                {modalOpen && <UploadForm onClose={handleModalClose} getSnippets={getSnippets} />}
            </nav>
        </>
    )
}

export default Nav