import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProtectedRoute from "./ProtectedRoute";
import WelcomePage from '../pages/WelcomePage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


export default function MainRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route>
          <ProtectedRoute />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
