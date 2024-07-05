import '../Nav/Nav.scss'
import { useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
import SearchBar from '../SearchBar/SearchBar'

const Nav = ({ getSnippets}) => {
    
    const [modalOpen, setModalOpen] = useState(false)

    const handleClickOpen = () => {
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }


    return (
        <>
            <nav className="Nav"> 
                <SearchBar />
                <button onClick={handleClickOpen} className="button"> add </button>
                {modalOpen && <UploadForm onClose={handleModalClose} getSnippets={getSnippets} />}
            </nav>
        </>
    )
}

export default Nav