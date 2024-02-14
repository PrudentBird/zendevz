import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-start">
          <div className="footer-logo-wrap">
            <Link to="/" className="footer-logo">
              ZenDevz
            </Link>
            <p>Offering a carefully curated suite of services and solutions.</p>
          </div>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <NavLink to="/about" className="footer-navlink">
                About
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink to="/contact" className="footer-navlink">
                Contact
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink to="/services" className="footer-navlink">
                Services
              </NavLink>
            </li>
            <li className="footer-nav-item">
              <NavLink to="/reviews" className="footer-navlink">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-end">
          <span>Copyright 2024 - ZenDevz</span>
          <span className="socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
