import React from "react";
import book from "../images/book.jpeg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <hr />

      <header
        className="App-header"
        style={{
          background: "#1e3c72" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #2a5298, #1e3c72)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #2a5298, #1e3c72)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
        <h1 style={{ fontWeight: "bolder" }}>Welcome to the GPA Tracker!</h1>
        <button
          style={{
            fontSize: "0.8em",
            color: "white",
            background: "#7F7FD5" /* fallback for old browsers */,
            background:
              "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
              "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            border: "1px white",
            borderRadius: "5px 5px",
          }}
          
        >
          <Link
            to="/About"
            style={{
              textDecoration: "none",
              color: "white",
              WebkitTextStroke:"0.2px black",
              fontWeight:"bold"
            }}
          >
            About
          </Link>
        </button>
      </header>

      <hr />

      <div
        style={{
          backgroundImage: `url(${book})`,
          height: "400px",
          backgroundRepeat: "no-repeat",
          marginLeft: "28%",
        }}
      >
        <h4 style={{ width: "180px", marginLeft: "7%" }}>
          <br />
          <br />
          This Web App is a simple tool that can help students keep track of
          GPAs by calculating the distribution of grades.
        </h4>
      </div>

      <b>Have fun!</b>
    </div>
  );
}
