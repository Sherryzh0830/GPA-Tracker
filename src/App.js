import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./element/Home";
import Main from "./element/Main";
import InputPage from "./element/InputPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      
          <Home />
        
          <Main />
        
          <InputPage />

      </main>
    </div>
  );
}

export default App;
