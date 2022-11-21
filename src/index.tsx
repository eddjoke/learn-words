import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const words = {
  Require: "Reikalauti",
  Communicate: "Bendrauti",
  Solve: "Išspręsti",
  "To improve": "Patobulinti",
  Fluently: "Laisvai",
  "Find out": "Sužinoti",
};

root.render(
  <React.StrictMode>
    <App words={words} />
  </React.StrictMode>
);
