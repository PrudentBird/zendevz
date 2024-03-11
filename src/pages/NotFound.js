import React from "react";
import { Link } from "react-router-dom";
import "../components/NotFound/NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="notfound-wrap">
        <div className="notfound-content">
          <h2>404</h2>
          <p>Page Not Found</p>
          <Link to="/">
            <button>Take Me Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
