import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <hr />

      <header className="App-header">
        <h1>Welcome to the GPA Tracker!</h1>
      </header>
      <hr />

      <h3 className="App-text">
        This Web App is a simple tool that can help students keep track of GPAs
        by calculating the distribution of grades.
      </h3>
      <b>Have fun!</b>
    </div>
  );
}
