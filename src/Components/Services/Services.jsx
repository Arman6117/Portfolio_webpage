import React from "react";
import "./Service.css";
import Glass from "../../img/glasses.png";
import Heart from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const transition = { duration: "2", type: "spring" };
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <div className="services" id="Services">
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
      <div className="cards" ref={ref}>
        <motion.div //style={{left:"14rem"}}
          initial={{ left: "24rem" }}
          animate={inView ? { left: "14rem" } : { left: "24rem" }}
          transition={inView ? transition : null}
        >
          <Card
            emoji={Heart}
            title="Design"
            des=" Lorem ipsum dolor sit amet consectetur"
          />
        </motion.div>

        <motion.div
          style={{ top: "12rem" }}
          initial={{ left: "-13rem" }}
          animate={inView ? { left: "-4rem" } : { left: "-13rem" }}
          transition={inView ? transition : null}
        >
          <Card
            emoji={Glass}
            title="Developer"
            des=" Lorem ipsum dolor sit amet consectetur"
          />
        </motion.div>

        <motion.div
          style={{ top: "20rem" }}
          initial={{ left: "22rem" }}
          animate={inView ? { left: "12rem" } : { left: "22rem" }}
          transition={inView ? transition : null}
        >
          <Card
            emoji={Humble}
            title="UI/UX"
            des=" Lorem ipsum dolor sit amet consectetur"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
