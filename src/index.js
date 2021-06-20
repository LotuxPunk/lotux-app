import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import 'remixicon/fonts/remixicon.css'
import '../scss/custom';



var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);