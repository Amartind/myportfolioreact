import React from "react";
import './style.css'
import resume from "./assets/Resume-1.pdf"


const Resume = (props) => {
  return (
    <div className="Resume">
        <a href={resume} className="resume flex justify-center" download> Click to download my resume</a>
    </div>
  )
}

export default Resume