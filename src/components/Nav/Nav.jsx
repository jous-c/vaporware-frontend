import '../Nav/Nav.scss'
import { useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
import axios from 'axios'

const Nav = () => {
    
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
        console.log('yo')
    }


    return (
        <>
            <nav className="Nav"> 
                <h3 className="Nav__title">hoardboard (test)</h3>
                <button onClick={handleClickOpen}> add </button>
            </nav>
        </>
    )
}

export { Nav }