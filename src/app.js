import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
//import Pet from "./pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import NavBar from "./NavBar";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
