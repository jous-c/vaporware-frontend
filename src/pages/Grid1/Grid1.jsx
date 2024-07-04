import '../Grid1/Grid.scss'
import image1 from '../../assets/images/solar-eclipse.png'
import { Card1 } from '../../components/Card/Card1'
import { useState } from 'react';

const Grid1 = () => {

    const defaultStyle = "default"

    const [style, setStyle] = useState(defaultStyle)
    const [clicked, setClicked] = useState(false)

    const clickToChange = () => {

        if (style === "default") setStyle ("blurred")
        if (style === "blurred") setStyle ("default")
        // state for 
        setClicked(true)
    }

    const hoverHandler = () => {
      if (style === "default") setStyle ("blurred")
      if (style === "blurred") setStyle ("default")
      if (style === "default" && !clicked) {
        setStyle('blurred') 
      }
    }

    const setBlur = () => {
      setStyle("blurred")
    }

    const timedBlur = (card) => {
      setTimeout( (card) => { setStyle }, 500);
    }

  return (
    <>
      <div className="container">
        <div className="a">A</div>
        {/* <div className="c">C Make a promise, but also wait on it</div> */}
        <Card1 />

        <div className={`e ${style}`} onClick={clickToChange} onMouseEnter={hoverHandler}>E Make a promise, but wait on it</div>
        
        {timedBlur(
             <div className="f"> <img className="image" src={image1}/> F </div>
        )}
       
       <div className="f"> <img className="image" src={image1}/> F </div>

        <div className={`g ${style}`} onClick={clickToChange}> <img className="image" src={image1}/> G</div>
        <div className="h blurred"> <img className="image" src={image1}/> H</div>
        {/* <div className="h">1H</div> */}
        <div className="i">I</div>
        <div className="j">J</div>
        <div className="k">K</div>
        <div className="m">m</div>


      </div>
      <div className="container">
        <div className="a">A</div>
        {/* <div className="c">C Make a promise, but also wait on it</div> */}
        <Card1 />

        <div className={`e ${style}`} onClick={clickToChange} onMouseEnter={hoverHandler}>E Make a promise, but wait on it</div>
        
        {timedBlur(
             <div className="f"> <img className="image" src={image1}/> F </div>
        )}
       

        <div className={`g ${style}`} onClick={clickToChange}> <img className="image" src={image1}/> G</div>
        <div className="h blurred"> <img className="image" src={image1}/> H</div>
        {/* <div className="h">1H</div> */}
        <div className="i">I</div>
        <div className="j">J</div>
        <div className="k">K</div>
        <div className="n">N</div>
        <div className="m">M</div>

      </div>
 
    </>
  );
};

export { Grid1 }