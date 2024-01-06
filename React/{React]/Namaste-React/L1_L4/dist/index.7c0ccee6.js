// import React from 'react';
// import ReactDOM from 'react-dom';
const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = document.getElementById("root");
ReactDOM.render(container, root);

//# sourceMappingURL=index.7c0ccee6.js.map
