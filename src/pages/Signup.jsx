import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signup } from "../store/Auth/action";
import { logoTwitter } from "../utils/image/index";
import Button from "../components/Button";
import "../styles/Signup.scss";
function Signup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();

  const submitRegister = (event) => {
    event.preventDefault();
    signup(dispatch, { username, email, password }, history, setErr);
  };

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
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputGroup>

        <p className="err-message">{err}</p>

        <Button textBtn="Log in" action={submitRegister} />
        <Link to="/login">
          <p>Log in to Twitter</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
