import React from "react";
import "./BackendSkills.css";
import Mongo from "../../img/mongodb.png";
import Node from "../../img/node-js.png";
import Java from "../../img/java.png";
import Circle from "../../img/circle.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BackendSkills = () => {

  const [ref,inView] = useInView({threshold:0.5})
   return (
    <div className="backend" id="Skills">
      <div className="aw_txt">
        <span>Backend</span>
        <span>Technologies</span>
        <span>
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
        <motion.div className="b-mainCircle" ref={ref}
           initial={{rotate:45}}
           animate={inView? {rotate:0}:{rotate:45}}
           transition={{duration:3 ,type:"spring"}}
           viewport={{margin:'-40px'}}
        >
          <div className="b-secCircle">
            <img src={Mongo} alt="" />
          </div>

          <div className="b-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="b-secCircle">
            <img src={Node} alt="" />
          </div>

          <div className="b-secCircle">
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
