import React from 'react'
import './BackendSkills.css'
import Mongo from "../../img/mongodb.png"
import Node from "../../img/node-js.png"
import Java from "../../img/java.png"
import Circle from "../../img/circle.png"
const BackendSkills = () => {
  return (
    <div className="backend">
      <div className="aw_txt">
        <span>Backend</span>
        <span>Technologies</span>
        <span>
          Lorem ipsum dolor sit amet consectetur
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eaque ipsam ducimus incidunt eum aperiam,
          <br /> natus ab quia nobis iusto, sit deserunt, fuga exercitationem!.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="b-right">
        <div className="b-mainCircle">
          <div className="b-secCircle">
            <img src={Mongo} alt="" />
          </div>
          <div className="b-secCircle">
            <img src={Circle} alt="" />
          </div>
         
          <div className="b-secCircle">
            <img src={Circle} alt="" />
          </div>
          <div className="b-secCircle">
            <img src={Java} alt="" />
          </div> 
          <div className="b-secCircle">
            <img src={Node} alt="" />
          </div>
          
          
        </div>
        {/* background Circle */}
        <div className="b-backCircle greenCircle"></div>
        <div className="b-backCircle blueCircle"></div>
      </div>
    </div>
  )
}

export default BackendSkills