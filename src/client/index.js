import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "./UserService";

console.log("Rendering");

const userService = new UserService("http://localhost:8081/users");

render(
  <Router>
    <App userService={userService} />
  </Router>,
  document.getElementById("app")
);
