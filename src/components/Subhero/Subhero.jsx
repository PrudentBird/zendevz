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
            <div className="overlay">
              <div className="overlay-text">
                Maximize Your Social Media Impact with Zen Developers. We
                deliver customized social media management designed to increase
                brand awareness, generate leads, and elevate your online
                presence.
              </div>
            </div>
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
            <div className="overlay">
              <div className="overlay-text">
                Zen Developers' comprehensive SEO services will optimize your
                website for search engine success. Our experts conduct in-depth
                keyword research, enhance technical SEO, build high-quality
                backlinks, and craft compelling content to drive visibility and
                organic traffic.
              </div>
            </div>
            <div className="conteimg-wrap">
              <img src={seo} alt="" />
            </div>
          </div>
        </div>
        <div className="subhero-content-wrap reverse">
          <div className="subhero-content conten">
            <h3>
              Digital
              <br />
              Marketing
            </h3>
            <div className="overlay">
              <div className="overlay-text">
                Zen Developers understands that your business is unique. We'll
                work closely with you to understand your target audience,
                business goals, and competitive landscape. This allows us to
                tailor a digital marketing plan that's custom-designed to
                deliver maximum results and a strong return on investment.
              </div>
            </div>
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
            <div className="overlay">
              <div className="overlay-text">
                Zen Developers partners with you to craft a website that
                perfectly aligns with your brand and business objectives.
                Whether you need a lead-generating website, a robust e-commerce
                platform, or a custom web application, our team delivers
                tailored solutions that empower your online success.
              </div>
            </div>
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
