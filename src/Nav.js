import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/Main" >Courses</Link>
        <Link to="/InputPage" >Add New</Link>
      </ul>
    </nav>
  );
}
