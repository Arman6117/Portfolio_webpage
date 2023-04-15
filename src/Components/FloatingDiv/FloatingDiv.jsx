import React,{useContext} from 'react'
import "./FloatingDiv.css"
import { themeContext } from '../../Context';
const FloatingDiv = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div style={darkMode?{background:"var(--black)",color:"white"}:null} className="floatingDiv">
    <img src={props.img} alt="" />
    <span >
        {props.txt1}
        <br />
        {props.txt2}
    </span>
   </div>
  )
}

export default FloatingDiv