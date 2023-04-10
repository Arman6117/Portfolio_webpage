import React from "react";
import "./Intro.css"
import Github from "../../img/github.png"
import Linkden from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import GlassEmoji from "../../img/glassesimoji.png"
import Thumb from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey!! I Am </span>
          <span>Arman Patel</span>
          <span> I'm A Full-Stack Developer With Expertise In Front-End And Back-End Development. Let's Bring Your Vision To Life! </span>
        </div>
        <button className="button i-button">Hire Me</button>

        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={Linkden} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <div>
            <FloatingDiv
               img = {Crown}
               txt1= "Web"
               txt2= "Devloper"
            />
        </div>
      </div>
    </div>
  );
};
