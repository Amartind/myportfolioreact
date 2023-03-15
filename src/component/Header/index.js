import React from "react";
import './style.css'
import Navbar from '../Navbar';

const Header = (props) => {
  return (
    <div className="Header grid grid-rows-1 grid-cols-2 flex-auto Headerbackground">
        <p className="text-7xl bold Headerbackground">Anthony</p>
        <Navbar className="justify-self-end flex-auto Headerbackground"/>
    </div>
  )
}

export default Header