import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./element/Home";
import Main from "./element/Main";
import About from "./element/About";
import InputPage from "./element/InputPage";
import Footer from "./element/Footer/Footer";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="page-container">
      <div className="content-wrap">
      <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/About' element={<About />}/>
            <Route path='/InputPage' element={<InputPage />}/>
          </Routes>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
