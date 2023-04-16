import React, { useContext } from "react";
import "./BackendSkills.css";
import Mongo from "../../img/mongodb.png";
import Node from "../../img/node-js.png";
import Java from "../../img/java.png";
import Circle from "../../img/circle.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { themeContext } from "../../Context";

const BackendSkills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="backend" id="Skills">
      <div className="aw_txt">
        <span
          style={
            darkMode ? { background: "var(--dark)", color: "white" } : null
          }
        >
          Backend
        </span>
        <span>Technologies</span>
        <span
          style={
            darkMode ? { background: "var(--dark)", color: "wheat" } : null
          }
        >
          Lorem ipsum dolor sit amet consectetur
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eaque
          ipsam ducimus incidunt eum aperiam,
          <br /> natus ab quia nobis iusto, sit deserunt, fuga exercitationem!.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="b-right">
        <motion.div
          className="b-mainCircle"
          ref={ref}
          initial={{ rotate: 45 }}
          animate={inView ? { rotate: 0 } : { rotate: 45 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ margin: "-40px" }}
          style={darkMode?{background:"var(--black)",color:"white"}:null}
        >
          <div className="b-secCircle" style={darkMode?{background:"var(--black)",color:"white"}:null}>
            <img src={Mongo} alt="" />
          </div>

          <div className="b-secCircle"  style={darkMode?{background:"var(--black)",color:"white"}:null}>
            <img src={Java} alt="" />
          </div>
          <div className="b-secCircle"  style={darkMode?{background:"var(--black)",color:"white"}:null}>
            <img src={Node} alt="" />
          </div>

          <div className="b-secCircle"  style={darkMode?{background:"var(--black)",color:"white"}:null}>
            <img src={Circle} alt="" />
          </div>
        </motion.div>
        {/* background Circle */}
        <div className="b-backCircle greenCircle"></div>
        <div className="b-backCircle blueCircle"></div>
      </div>
    </div>
  );
};

export default BackendSkills;
