import React, {Component} from "react";

class FavoriteItem extends Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
    return (
        <div className="logot-div">
        <h1 className="logot-logo"> Favorites </h1>
        </div>
    );
    }
}

export default FavoriteItem