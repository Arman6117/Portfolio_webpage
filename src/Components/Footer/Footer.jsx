import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>armanp@gmaiil.com</span>
            <div className="f-icons">
                <Insta color="white" size="3rem" />
                <Git color="white" size="3rem" />
            </div>
        </div>
    </div>
  )
}

export default Footer