import React from "react";
import ReactDOM from "react-dom/";


const heading=React.createElement(
    "h1",
    {class:"Title"},
    "This is a h1"
);


const heading2=React.createElement(
    "h2",
    {class:"Title"},
    "This is a h2"
);


const heading3=React.createElement(
    "h3",
    {class:"Title"},
    "This is a h3"
);

const container=React.createElement(
    "div",
    {Title:"container"},
    [heading,heading2,heading3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering the react Element

root.render(container);


///Create the same element using JSX

const nestedHeader=React.createElement(
    <div className="Title">
         <h1 >this is h1</h1>
         <h2 >this is h2</h2>
         <h3 >this is h2</h3>
    </div>
    
);