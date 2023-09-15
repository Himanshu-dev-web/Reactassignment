import React, { useState } from 'react'
import "./Contact.css"
import {Getin,Send } from "../App"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic email validation
    const { email, message } = formData;
    let newErrors = {
      email: '',
      message: '',
    };

    if (!email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (message.trim() === '') {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.message) {
      // Form is valid, you can proceed with submission
      console.log('Form data:', formData);
    }
  };
  return (
    <>
        <div className='contact-container' id='contact'>
        <div className='contact-container-upperdiv' >
        <div className='container-text'>
                  <p>News Letter</p>
                  <p>Get news about articles and updates in your inbox.</p>
              </div>
              

              <div className="contact-form">
                          <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.email}</span>
                  </div>
                  <div className="input-container">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.message}</span>

                  </div>
                  <p className='send-text'> Send</p>
                  <input className='send-btn' type="image" src={Send} alt="Submit" />

                
                </form>
              </div>
        </div> 
              

             <div className='btns'>
              <img className='get-in' src={Getin} alt="" />
             </div>
             
        </div>
    </>
  )
}

export default Contact