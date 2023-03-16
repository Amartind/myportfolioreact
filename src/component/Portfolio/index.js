import React from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import HeroClash from "./Assets/heroClash.png"
import Wildthorne from "./Assets/wildthorne.png"
import DoggieDates from "./Assets/Doggiedates.png"

const Portfolio = (props) => {
  return (
    <div className="Projects grid gap-1 grid-cols-2">
       <div className='project card flex flex-col flex-auto'>
            <img src={HeroClash} className="projectimg"/>
            <p className='text-xl'>HeroClash</p>
            <a href="https://jhnwoo-dev.github.io/hero-clash/index.html" className='portlink'>Deployed app</a>
            <a href="https://github.com/jhnwoo-dev/hero-clash" className='portlink'>GitHub repository</a>
       </div>
       <div className='project card flex flex-col flex-auto'>
            <img src={Wildthorne} className="projectimg"/>
            <p className='text-xl'>Wild Thorne Apocathery</p>
            <a href="https://wildthornapothecary.herokuapp.com/" className='portlink'>Deployed app</a>
            <a href='https://github.com/blaubachs/wild-thorn-apothecary' className='portlink'>GitHub repository</a>
       </div>
       <div className='project card flex flex-col flex-auto'>
            <img src={DoggieDates} className="projectimg"/>
            <p className='text-xl'>DoggieDates</p>
            <a href="https://doggiedatesfrontend.herokuapp.com/" className='portlink'>Deployed app</a>
            <a href='https://github.com/Amartind/Doggie-daycare-front' className='portlink'>GitHub repository</a>
       </div>
       <div className='project card flex flex-col flex-auto'>
            <img src="" className="projectimg"/>
            <p className='text-xl'>Coming soon</p>
            <a href="" className='portlink'>Deployed app</a>
            <a href='' className='portlink'>GitHub repository</a>
       </div>
       <div className='project card flex flex-col flex-auto'>
            <img src="" className="projectimg"/>
            <p className='text-xl'>Coming soon</p>
            <a href="" className='portlink'>Deployed app</a>
            <a href='' className='portlink'>GitHub repository</a>
       </div>
       <div className='project card flex flex-col flex-auto'>
            <img src="" className="projectimg"/>
            <p className='text-xl'>Coming soon</p>
            <a href="" className='portlink'>Deployed app</a>
            <a href='' className='portlink'>GitHub repository</a>
       </div>
       {/* <h1 className='text-4xl'>More To Come Soon...</h1> */}
    </div>
  )
}

export default Portfolio