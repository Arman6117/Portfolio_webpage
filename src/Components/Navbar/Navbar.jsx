import React from 'react'
import "./Navbar.css"
import { Toogle } from '../Toogle/Toogle'
import { Link } from "react-scroll/modules";
export const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Arman</div>
            <Toogle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle:"none"}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass"> 
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass"> 
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass="activeClass"> 
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass"> 
                    <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}
