import React, {useContext} from 'react'
import "./Card.css"
import { themeContext } from '../../Context';

const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={props.emoji} alt="" />
        <span>{props.title}</span>
        <span  style={darkMode?{color:"wheat"}:null}>{props.des}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card