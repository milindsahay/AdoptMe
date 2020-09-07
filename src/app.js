import React from "react";
import { render } from "react-dom";
//import Pet from "./pet";
import SearchParams from "./SearchParams";
const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Leo",
  //     animal: "Dog",
  //     breed: "retriever",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Coackatiel",
  //   }),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Pug" })
  // );
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
