import React, {useState} from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { logoTwitter } from "../utils/image/index";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import {login} from '../store/Auth/action'
import Button from '../components/Button'
import "../styles/Login.scss";

function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const history = useHistory()
  console.log(err)
  const submitLogin = (event)=>{
    event.preventDefault()
    login(dispatch, { email: email, password: password }, history, setErr)
  }

  return (
    <div className="login-container">
      <div className="wrapper">
        <img src={logoTwitter} alt="twitter-logo" />
        <h1>Log in to Twitter</h1>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Email"
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
          />
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Password"
            onChange={(event)=>{
              setPassword(event.target.value)
            }}
          />
        </InputGroup>
        <p className="err-message">{err}</p>
        <Button textBtn="Log in" action={submitLogin}/>
        <p>Sign up for Twitter</p>
      </div>
    </div>
  );
}

export default Login;
