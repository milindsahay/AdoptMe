import React from 'react';
import { render } from 'react-dom';
import  pet  from "./pet";

const app = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "Leo",
      animal: "Dog",
      breed: "retriever",
    }),
    React.createElement(pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Coackatiel",
    }),
    React.createElement(pet, { name: "Luna", animal: "Dog", breed: "Pug" })
  );
};

render(React.createElement(app), document.getElementById("root"));
