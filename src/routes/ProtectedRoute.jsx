import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../pages/Home";
export default function ProtectedRoute() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to={"/login"} />;
  } else {
    return (
      <Route path="/home">
        <Home />
      </Route>
    );
  }
}
