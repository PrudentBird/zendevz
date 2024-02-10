import React from "react";
import "./Subhero.css";
import posts from "../../assets/posts.png";
import web from "../../assets/web.png";
import seo from "../../assets/seo.png";
import market from "../../assets/market.png";

const Subhero = () => {
  return (
    <div>
      <div className="subhero-container">
        <div className="subhero-content-wrap">
          <div className="subhero-content cont">
            <h3>Social Media Management</h3>
            <div className="contimg-wrap">
              <img src={posts} alt="" />
            </div>
          </div>
          <div className="subhero-content conte">
            <h3>
              Search Engine
              <br />
              Optimization
            </h3>
            <div className="conteimg-wrap">
              <img src={seo} alt="" />
            </div>
          </div>
        </div>
        <div className="subhero-content-wrap">
          <div className="subhero-content conten">
            <h3>
              Digital
              <br />
              Marketing
            </h3>
            <div className="contenimg-wrap">
              <img src={market} alt="" />
            </div>
          </div>
          <div className="subhero-content content">
            <h3>
              Website
              <br />
              Development
            </h3>
            <div className="contentimg-wrap">
              <img src={web} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subhero;
