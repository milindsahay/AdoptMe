import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
//import Pet from "./pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import NavBar from "./NavBar";
const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
