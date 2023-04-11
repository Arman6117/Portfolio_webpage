import React from "react";
import "./Service.css";
import Glass from "../../img/glasses.png";
import Heart from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="aw_txt">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur
          <br />
          Lorem ipsum dolor sit.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left:"14rem"}}>
          <Card
             emoji={Heart}
             title= "Design"
             des = " Lorem ipsum dolor sit amet consectetur"
          />
        </div>
        <div style={{left:"-4rem",top:"12rem"}}>
          <Card
             emoji={Glass}
             title= "Developer"
             des = " Lorem ipsum dolor sit amet consectetur"
          />
        </div>
       <div style={{left:"12rem",top:"20rem"}} >
          <Card
             emoji={Humble}
             title= "UI/UX"
             des = " Lorem ipsum dolor sit amet consectetur"
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
