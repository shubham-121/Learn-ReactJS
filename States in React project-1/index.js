import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./Counter";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {<App />} */}
    <Counter />
  </React.StrictMode>
);