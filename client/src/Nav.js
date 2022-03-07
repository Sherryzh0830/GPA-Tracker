import React,{useState} from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./images/GPA Trackr Logo/logo.png";
import Dropdown from "./Dropdown";
import {FaBook, FaTimes} from "react-icons/fa";

export default function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav>
      <img src={logo} alt="logo" className="logo"></img>

      <ul className="nav-links">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
        <Link to="/Main" style={{ textDecoration: "none", color: "white" }}>
          Courses
        </Link>

        
      </ul>
    </nav>
  );
}
