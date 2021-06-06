import React from "react";
import { Component } from "react";
import Logo from "../../images/logo.png"
import "./index.css";

class LogoTitle extends Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div className="logot-div">
        <img src={Logo} width="10%" alt="Logo"></img>
        <h1 className="logot-logo"> Müco's Shop </h1>
        <h1 className="logot-logo">E-Commerce Clothes</h1>
        <h1>  </h1>
      </div>
    );
  }
}

export default LogoTitle;
