import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Arman</div>
            <span>toggel</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle:"none"}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <button className="button n-button">Contact Us</button>
        </div>
    </div>
  )
}
