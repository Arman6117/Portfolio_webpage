import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkden from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import GlassEmoji from "../../img/glassesimoji.png";
import Thumb from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
export const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey!! I Am </span>
          <span>Arman Patel</span>
          <span>
            {/* <img src={Boy} alt="Boy" /> */}
            I'm A Full-Stack Developer With Expertise In Front-End And Back-End
            Development. Let's Bring Your Vision To Life!{" "}
          </span>
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
        <motion.img
          animate={{ left: "-24%" }}
          initial={{ left: "-36%" }}
          transition={{transition}}
          src={GlassEmoji}
          alt=""
        />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv img={Crown} txt1="Web" txt2="Devloper" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv img={Thumb} txt1="Beautifull" txt2="Designs" />
        </div>
        <div
          className="blur"
          style={{ backgroundColor: "rgb(255, 143, 255,0.500" }}
        ></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "18rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};
