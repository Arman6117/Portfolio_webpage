import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="sm-left">
            <span>Get In Touch</span>
            <span>Contact Me</span>
            <div className="blur sm-blur1" style={{ background: "#ABF1FF94" }}></div>

        </div>

       
        <div className="sm-right">
          <form action="" className="sm-right">
             <input style={{height:"2rem",width:"22rem"}} type="text" placeholder='Name' className='sm-inputs' />
             <input style={{height:"2rem",width:"22rem"}} type="email" placeholder='Email'className='sm-inputs' />
             <textarea name="message" cols="40" rows="5" placeholder='Message'className='sm-inputs'/>
             <input type ="submit" value="Send"className="button sm-button"/>
             </form>
        </div>
        <div className="blur sm-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  )
}

export default Contact