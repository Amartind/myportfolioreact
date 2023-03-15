import React , { useState } from "react";
import './style.css'


const Contactme = (props) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    
    if (name === 'Name'){
      return setName(value)
  } else if (name === 'Email'){
      return setEmail(value)
  } else if (name === 'Message'){
      return setMessage(value)
  };
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    alert("Thank you! I will get back to you as soon as I can")
    setName('');
    setEmail('');
    setMessage("")
  };
  return (
    <div className="Contactme">
        <p className="text-4xl">Contact me</p>
      <div className="flex justify-center">
        <form className="contactform grid gap-4 grid-cols-1 grid-rows-2">
          Name:
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            className="inputfield"
          />
          Email:
          <input
            value={Email}
            name="Email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
            className="inputfield"
          />
          Message:
          <input
            value={Message}
            name="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            className="inputfield"
          />
          <button type="button buttonbg" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contactme