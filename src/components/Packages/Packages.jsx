import React from "react";
import "./Packages.css";
import packagesData from "../../data/packages";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const handleCta = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="purchase_list" onClick={handleCta}>
        <div className="purchase-list-header-wrap">
          <h3>Explore Our Exciting Range Of Tailored Packages</h3>
          <p>
            We offer the perfect packages to supercharge your growth and elevate
            your brand or business to the next level.
          </p>
        </div>
        <div className="purchase-list-container-wrap">
          {packagesData.map((packageData) => (
            <div className="purchase_list_container" key={packageData.id}>
              <div className="purchase_list_header">
                <h2
                  dangerouslySetInnerHTML={{ __html: packageData.title }}
                ></h2>
                <p>{packageData.description}</p>
              </div>
              <div className="purchase_list_line"></div>
              <div className="purchase_lists">
                {packageData.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-circle-check"></i>
                    <p>{feature}</p>
                  </li>
                ))}
              </div>
              <div className="purchase_list_cta">
                <button onClick={handleCta}>Purchase Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Packages;
