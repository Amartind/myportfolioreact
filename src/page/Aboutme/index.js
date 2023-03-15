import React from "react";
import './style.css'
import Photo from './Assets/photo.jpg'

const Aboutme = (props) => {
  return (
    <div className="aboutme flex justify-center">
        <img src={Photo} className="aboutmephoto"></img>
        <p>Hello I like making websites!</p>
    </div>
  )
}

export default Aboutme