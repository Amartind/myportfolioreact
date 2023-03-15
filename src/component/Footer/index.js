import React from "react";
import {Link} from 'react-router-dom'

import './style.css'
import github from './Assets/github.png'
import linkedin from "./Assets/linkedin.png"

const Footer = (props) => {
  return (
    <div className="Footer flex flex-row justify-center">
      <a href='https://github.com/Amartind'>
        <img src={github} className="footericon"/>
      </a>
      <a href='https://www.linkedin.com/'>
        <img src={linkedin} className="footericon"/>
      </a>
      <a href=''>
        <img src="" className="footericon"/>
      </a>
    </div>
  )
}

export default Footer