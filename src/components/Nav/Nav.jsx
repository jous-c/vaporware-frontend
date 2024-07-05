import '../Nav/Nav.scss'
import { useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'

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
                <button onClick={handleClickOpen} className="button"> add </button>
                {modalOpen && <UploadForm onClose={handleModalClose} getSnippets={getSnippets} />}
            </nav>
        </>
    )
}

export default Nav