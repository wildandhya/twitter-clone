import React from "react";

import "../../styles/RightContent.scss";
import SearchBar from "../SearchBar";
function RightContent() {
  return (
    <div className="rightContent-container">
      <SearchBar />
      <div className="card-trending-topic">
        <div className="trending-topic-header">
          <h1>Trends for you</h1>
          <i class="bi bi-gear"></i>
        </div>
        {/* dummy */}
        <div className="trending-topic-content">
          <div className="left-content">
            <p>Trending in Indonesia</p>
            <h6>#Timnas</h6>
            <p>2000k Tweets</p>
          </div>
          <div className="right-content">
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
        <div className="trending-topic-content">
          <div className="left-content">
            <p>Trending in Indonesia</p>
            <h6>#Euro2021</h6>
            <p>2000k Tweets</p>
          </div>
          <div className="right-content">
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
        <div className="trending-topic-content">
          <div className="left-content">
            <p>Trending in Indonesia</p>
            <h6>#Sinovac</h6>
            <p>2000k Tweets</p>
          </div>
          <div className="right-content">
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
        <div className="trending-topic-content">
          <div className="left-content">
            <p>Trending in Indonesia</p>
            <h6>#yukVaksin</h6>
            <p>2000k Tweets</p>
          </div>
          <div className="right-content">
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
        <div className="trending-topic-content">
          <div className="left-content">
            <p>Trending in Jakarta</p>
            <h6>#Jaksel</h6>
            <p>2000k Tweets</p>
          </div>
          <div className="right-content">
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
        {/* dummy */}
        <div className="trending-topic-footer">
            <h6>Show more</h6>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
