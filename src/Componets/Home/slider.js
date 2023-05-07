import React, { useState, useEffect } from 'react'
import { images } from '../helpers/sliderData'

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import '../styles/Slider.scss'

const Slider = () => {

    const [currImg , setCurrenImg] = useState(0)

    useEffect(()=>{
  const Time =    setInterval(()=>{
        if(currImg === 0 || currImg === 1){
          setCurrenImg(currImg + 1)
          
        } else {
          setCurrenImg(0)
        }
      },2000)
      return () =>{
        clearInterval(Time)
      }
    },[currImg])

    

    return (
      <div className="banner-container">
        <div
          className="Banner-ineer"
          style={{ backgroundImage: `url(${images[currImg].im})` }}
        >
          <AiFillCaretLeft
            className="Left"
            onClick={() => currImg > 0 && setCurrenImg(currImg - 1)}
          />
  
          <AiFillCaretRight
            className="right"
            onClick={() =>
              currImg < images.length - 1 && setCurrenImg(currImg + 1)
            }
          />
        </div>
      </div>
    );

   

}

export default Slider