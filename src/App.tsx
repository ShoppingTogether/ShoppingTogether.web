import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import RoutesTree from "./components/routes-tree";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesTree />
    </div>
  );
}

export default App;
