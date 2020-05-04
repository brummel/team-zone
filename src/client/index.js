"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./components/App"));
require("bootstrap/dist/css/bootstrap.min.css");
var UserService_1 = __importDefault(require("./UserService"));
console.log("Rendering");
var userService = new UserService_1["default"]("http://localhost:8081/users");
react_dom_1.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(App_1["default"], { userService: userService })), document.getElementById("app"));
