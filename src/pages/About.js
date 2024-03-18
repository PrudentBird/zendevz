import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../components/About/About.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ContactCard from "../components/ContactCard/ContactCard";
import Packages from "../components/Packages/Packages";
import aboutImg from "../assets/about.jpg";

const About = () => {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="about-wrap">
        <div className="about-header-wrap">
          <div className="about-header">
            <h3>About Us</h3>
            <p>
              With Zendevz, finding the right software solution for your
              business is easy. Today's businesses face countless software
              challenges. Whether you're streamlining operations, building a
              cutting-edge customer experience, or migrating to industry
              standards, the right partner makes all the difference.
              <br />
              <br />
              Zendevz understands your goals and creates tailored solutions to
              help your business thrive. We offer a wide range of software
              services, from custom web development to innovative social media
              integrations. Let our team become an extension of yours - Zendevz
              crafts software as unique as your business, delivering the
              features you need with excellence.
            </p>
          </div>
          <div className="about-header-img-wrap">
            <img src={aboutImg} alt="" loading="lazy" />
          </div>
        </div>
        <ContactCard />
        <div className="scroll-indicator">
          <motion.i
            className={`fa-solid ${isScrolled ? "fa-chevron-up" : "fa-chevron-down"}`}
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          ></motion.i>
        </div>
        <Packages />
      </div>
      <Footer />
    </div>
  );
};

export default About;
