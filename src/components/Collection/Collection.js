import React, { Component } from "react";
import "./Collection.css";
import Items from "./Items/index";

class Collection extends Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div className="collection-wrapper-div">
        <Items />
        <hr className="hr-closing-sec" />
        <h1 className="powered">Copyright © 2021 E-Commerce Inc. All rights reserved.</h1>
      </div>
    );
  }
}

export default Collection;
