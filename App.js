{/* 
<div id="parent">
  
   <div id="child">
   <h1>I'm h1 tag</h1>
   </div>

</div> 
*/}

{/* 
<div id="parent">
  
   <div id="child">
   <h1>I'm h1 tag</h1>
   <h2>I'm h1 tag</h2>
   </div>

</div> 
*/}


//creating neasted HTML using react
// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "I'm h1 tag")));


import React from "react";
import ReactDOM from "react-dom/client";

//To create sibling in HTML, we have to use [] in 3rd parameter

const h1=React.createElement("h1", {}, "I'm h1 taggggg...")
const h2=React.createElement("h2", {}, "I'm h2 tag")

const child = React.createElement("div", { id: "child" },
    [h1, h2])

const parent = React.createElement("div", { id: "parent" },
    child);

console.log(parent)//JS Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);