import "./App.css";
import React from "react";
import Card from "./components/Card/Card";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Card price="300" speed="10" />
        <Card price="450" speed="50" />
        <Card price="550" speed="100" />
        <Card price="1000" speed="200" />
      </div>
    </React.Fragment>
  );
}

export default App;
