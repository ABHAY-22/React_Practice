// const heading=React.createElement("h1",{id:"abhay"},"I am from React world")
// const root=ReactDOM.createRoot(document.getElementById("root"))


// console.log(heading);//object
// console.log(root)
// root.render(heading)



/*
<div id ="parent">
<div id ="child1">
<h1></h1>==sibling
<h2></h2>
</div>

<div id ="child1">
<h1></h1>==sibling
<h2></h2>
</div>

</div>



*/


import React from "react";

import  ReactDOM  from "react-dom/client";

const parent =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"I am lallu frm abhalalajd 🔠 "),
React.createElement("h2",{id:"head"},"I am abhay from Noida")
]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"headi"},"I am abhay from tundla"),
React.createElement("h2",{id:"hea"},"I am abhay from Noida")
])]

)



const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

console.log(parent)

//JSX





