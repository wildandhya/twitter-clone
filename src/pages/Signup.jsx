import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { logoTwitter } from "../utils/image/index";
import Button from '../components/Button'
import "../styles/Signup.scss";
function Signup() {
  return (
    <div className="login-container">
      <div className="wrapper">
        <img src={logoTwitter} alt="twitter-logo" />
        <h1>Sign up for Twitter</h1>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Username"
          />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Password"
          />
        </InputGroup>
        <Button textBtn="Log in"/>
        <p>Log in to Twitter</p>
      </div>
    </div>
  );
}

export default Signup;
