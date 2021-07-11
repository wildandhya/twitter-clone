import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {getTweet} from '../../store/Home/action'
import "../../styles/MainContent.scss";
import Button from "../Button";
import { banner } from "../../utils/image/index";

function MainContent() {
  const dispatch = useDispatch()

  useEffect(() => {
    getTweet(dispatch)
  }, [])
  return (
    <div className="mainContent-container">
      <div className="header">
        <h1>Home</h1>
      </div>

      <div className="form-tweet">
        <img src={banner} alt="profile" className="profile-img" />
        <div className="input-group">
          <input
            type="text"
            placeholder="What's happening?"
            className="input-tweet"
          />
          <div className="bottom-input">
            <div className="icons">
              <i class="bi bi-image"></i>
              <i class="bi bi-emoji-smile"></i>
              <i class="bi bi-bar-chart-line"></i>
              <i class="bi bi-calendar-week"></i>
            </div>
            <div className="btn-wrapper">
              <Button textBtn="Tweet" />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <img src={banner} alt="profile" className="profile-img" />
        <div className="section-card">
          <div className="header-section">
            
            <h4>wiildan</h4>
            <h5>@willdan</h5>
            <h6>2hr</h6>
            <span>
              <i class="bi bi-three-dots"></i>
            </span>
          </div>
          <div className="content-section">
            <p>Aku Galau</p>
          </div>
          <div className="icons-section">
            <i class="bi bi-chat"></i>
            <i class="bi bi-arrow-down-up"></i>
            <i class="bi bi-heart"></i>
            <i class="bi bi-box-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
