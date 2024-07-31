// src/App.js
import React from "react";
import Checkbox from "./Checkbox";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Checkbox Demo</h1>
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </div>
  );
};

export default App;
