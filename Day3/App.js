
import React from "react";
import  ReactDOM  from "react-dom/client";





import React from "react";

import  ReactDOM  from "react-dom/client";

const parent =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"I am abhi frm tdl 🔠 "),
React.createElement("h2",{id:"head"},"I am Abhay from Noida")
]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"headi"},"I am abhay from tundla"),
React.createElement("h2",{id:"hea"},"I am abhay from Noida")
])]

)



const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

console.log(parent)