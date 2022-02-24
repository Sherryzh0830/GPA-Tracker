import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./element/Home";
import Main from "./element/Main";
import InputPage from "./element/InputPage";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/InputPage' element={<InputPage />}></Route>
          </Routes>
    </div>
  );
}

export default App;
