import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import logo from "./images/GPA Trackr Logo/logo.png";

export default function Nav() {
  return (
    <nav>
      
        <img src={logo} alt="logo" className="logo"></img>
      
      <ul className="nav-links">
        <Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link>
        <Link to="/Main" style={{textDecoration:'none', color:'white'}}>Courses</Link>
        <Link to="/InputPage" style={{textDecoration:'none', color:'white'}}>Add New</Link>
      </ul>
    </nav>
  );
}
