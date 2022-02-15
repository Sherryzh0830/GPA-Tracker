import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./element/Home";
import Main from "./element/Main";
import InputPage from "./element/InputPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/main" element={Main}></Route>
        <Route path="/inputpage" element={InputPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
