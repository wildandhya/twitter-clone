import React from "react";

import "../../styles/LeftContent.scss";
import { logoTwitter, home } from "../../utils/image/index";
import Button from "../Button";
function LeftContent() {
  return (
    <div className="leftContent-container">
      <img src={logoTwitter} alt="twitter-logo" />
      <div className="list-bar">
        <div className="bar-group">
          <img src={home} alt="home" className="home-icon" />
          <h1>Home</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-hash"></i>
          <h1>Explore</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-bell"></i>
          <h1>Notifications</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-envelope"></i>
          <h1>Messages</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-bookmark"></i>
          <h1>Bookmarks</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-card-list"></i>
          <h1>Lists</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-person"></i>
          <h1>Profile</h1>
        </div>
        <div className="bar-group">
          <i class="bi bi-three-dots"></i>
          <h1>More</h1>
        </div>
      </div>
      <div className="btn">
        <Button textBtn="Tweet" />
      </div>
    </div>
  );
}

export default LeftContent;
