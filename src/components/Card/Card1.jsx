import image1 from '../../assets/images/solar-eclipse.png'
import '../Card/Card.scss'

const Card1 = () => {

    return(
        <> 
            <div className="d">
                <img className="image" src={image1}/>
                 <p>Solar Eclipse </p>
                 <p> Date: XX/XX/XXXX</p>
            </div>
                
            
        </>
    )
}

export { Card1 }