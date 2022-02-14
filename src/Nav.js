import React from "react";
import "./App.css";

export default function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <li>Home</li>
            <li>Courses</li> 
            <li>Add New</li>
        </ul>
    </nav>
  );
}
