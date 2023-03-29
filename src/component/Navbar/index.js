import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"

const Navbar = (props) => {
  return (
    <div className="Navbar Headerbackground flex">
        <Link to="/aboutme" className="p-4 flex-auto Headerbackground Navlink">Aboutme</Link>
        <Link to="/portfolio" className="p-4 flex-auto Headerbackground Navlink">Portfolio</Link>
        <Link to="/contact" className="p-4 flex-auto Headerbackground Navlink">Contact</Link>
        <Link to="/resume" className="p-4 flex-auto Headerbackground Navlink">Resume</Link>
        
    </div>
  )
}

export default Navbar