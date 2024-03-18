import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  const bounceTransition = {
    y: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Revolutionizing Global Businesses with Digital Solutions</h1>
          <p>
            At ZenDevs, we streamline the path to online success, harnessing
            digital experiences to elevate businesses to new heights, with a
            blend of creativity and unwavering commitment.
          </p>
          <button className="hero-cta">Get Started</button>
        </div>
        <motion.div
          className="hero-img"
          transition={bounceTransition}
          animate={{ y: [10, -10, 10] }}
        >
          <img src={heroImg} alt="" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
