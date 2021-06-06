import React from "react";

import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import myApp from "./components/myApp";
import FavoriteItem from "./components/FavoriteItem/index"

const App = props => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={myApp} />
      <Route exact path="/favorites" component={FavoriteItem} />
    </BrowserRouter>
  );
};

export default App;
