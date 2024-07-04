import '../UploadForm/UploadForm.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const UploadForm = ({ data, getSnippets }) => {

    const navigate = useNavigate()
    const postNewSnippet = async(newSnippet) => {
        await axios.post('http://localhost:8090/snippets', newSnippet)
    }
    console.log(getSnippets)


    const submitHandler = async (e) => {
        e.preventDefault()
        const newSnippet = {
            title: e.target.title.value,
            description: e.target.description.value,
            file: e.target.file.value,
        }
        console.log(newSnippet)
        // postNewSnippet(newSnippet)
        await axios.post('http://localhost:8090/snippets', newSnippet)

        // if(getSnippetsData){
            getSnippets()
            navigate('/grid4')
        // }

    }

    return(
        <>  
        <section className="form-container">
            <form onSubmit={submitHandler} className="form"> 
                <input type="file" name="file"/> 
                <input type="text" name="title" placeholder="title"/> 
                <textarea type="text" name="description" placeholder="description"></textarea>
                <button> upload it </button>
            </form>
        </section>
        </>
    )
}

export default UploadForm 