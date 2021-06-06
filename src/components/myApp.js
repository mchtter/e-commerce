import React from "react";
import { Component } from "react";
import LogoTitle from "./Logo-title/index";
import Collection from "./Collection/Collection";

class myApp extends Component {
  shouldComponentUpdate() {
    
    return true;
  }
  render() {
    return (
      <div>
        <LogoTitle />
        <Collection />
      </div>
    );
  }
}

export default myApp;
