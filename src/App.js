import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Main from "./Main";
import InputPage from "./InputPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Nav />
        <Home />
        <Main />
        <InputPage />

      </div>
  );
}

export default App;
