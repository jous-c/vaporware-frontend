import '../Grid1/Grid.scss'
import image1 from '../../assets/images/solar-eclipse.png'
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
     
 
    </>
  );
};

export default Grid1