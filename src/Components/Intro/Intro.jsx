import React ,{useContext}from "react";
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
import { useInView } from "react-intersection-observer";
import { themeContext } from "../../Context";

export const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode?{color:"white"}:null}>Hey!! I Am </span>
          <span>Arman Patel</span>
          <span>
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
      <div className="i-right" ref={ref}>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassEmoji}
          alt=""
        />

        <motion.div
          style={{ top: "-4%", left: "68%" }}
          initial={{ left: "98%" }}
          animate={inView ? { left: "68%" } : { left: "98%" }}
          transition={inView ? transition : null}
          className="floating-div"
        >
          <FloatingDiv img={Crown} txt1="Web" txt2="Developer" />
        </motion.div>


        <motion.div
          style={{ top: "18rem", left: "0rem" }}
          initial={{ left: "77%" }}
          animate={inView? { left: "0%" }:{left:"77%"}}
          transition={inView ? transition:null}
          className="floating-div"
        >
          <FloatingDiv img={Thumb} txt1="Beautiful" txt2="Designs" />
        </motion.div>


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
