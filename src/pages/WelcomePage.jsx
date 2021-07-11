import React from "react";
import { Link } from "react-router-dom";
import { banner, logoTwitter } from "../utils/image/index";
import Button from "../components/Button";

import "../styles/WelcomePage.scss";
function WelcomePage() {
  return (
    <div className="container-fluid">
      <div className="banner-section">
        <img src={banner} alt="banner-image" />
      </div>
      <div className="form-login">
        <img src={logoTwitter} alt="twitter-logo" />
        <div className="text">
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
        </div>
        <Link to="/signup">
          <Button textBtn="Sign up" />
        </Link>
        <Link to="login">
          <Button className="login" textBtn="Log in" />
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
