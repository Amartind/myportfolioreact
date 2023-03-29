import React from "react";
import './style.css'
import Photo from './Assets/photo.jpg'

const Aboutme = (props) => {
  return (
    <div className="aboutme flex justify-center flex-col">
        <img src={Photo} className="aboutmephoto flex justify-self-center" alt="photoofmewithmydeceaseddog"></img>
        <p>Hello I recently graduated a coding bootcamp and starting my career in Software Development. Going through the coursework we prioritized RESTful patterns in our programming and learned how to use npm packages and APIs. Also getting familiar with CSS frameworks such as Tailwind and Bootstrap and some other ones as well. We learned things such as</p>
        <b>Technical Skills:</b> SDLC, Front-end Development, Server-side Development, Databases (ERD, Modeling, Coding)<br />
        <b>Languages:</b> HTML, CSS, Javascript<br />
        <b>Frameworks:</b> Express.js, Node.js, React, jQuery<br />
        <b>DBs:</b> MySQL, MongoDB<br />
        <p>I switched careers because construction was taking a toll on my body and I still wanted to full the creative urge of making things and I thought this would be a good fit. It was tough but I made it through the schooling.</p>
        <p>Things outside of Coding that I enjoy are 3D Printing. I have 3 printers all with different attributes to them that I enjoy.</p>
        <p>I also enjoy hydroponic gardening. It lets me have fresh produce all year long without having to dig in the ground.</p>
    </div>
  )
}

export default Aboutme