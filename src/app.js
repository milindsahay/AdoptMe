//Destructuring props into {}
const pet = ({name, animal, breed}) => {
    return React.createElement(
        "div",
        {},
        [   React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed)
        ]);
};

const app = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!" ),
        React.createElement(pet,{name:"Leo", animal:"Dog", breed:"retriever"}),
        React.createElement(pet,{name:"Pepper", animal:"Bird", breed:"Coackatiel"}),
        React.createElement(pet,{name:"Luna", animal:"Dog", breed:"Pug"})
    );
};

ReactDOM.render(React.createElement(app), document.getElementById("root"));