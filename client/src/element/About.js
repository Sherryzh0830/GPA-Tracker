import React from "react";
import Course from "./course/Course";

export default function About() {
  return (
    <div>
      <hr />
      <header
        className="App-header"
        style={{
          background: "#1a2a6c",
          background:
            "-webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
        <h1 style={{ marginTop: "20px", fontWeight: "bold" }}>About</h1>
      </header>
    </div>
  );
}
