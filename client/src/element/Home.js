import React, { useState } from "react";
import Axios from "axios";
import "./home.css";


export default function Home() {
  const [ListofEvent, setListofEvent] = useState([]);
  Axios.get("http://localhost:3001/getEvent").then((response) => {
    setListofEvent(response.data);
  });

  return (
    <div>
      <h1>Home Page Goes Here</h1>

      <header className="App-header">
        <h1>Welcome to the GPA Tracker!</h1>
        <button>Sign In Here</button>
      </header>

      <h3 className="App-text">
        This Web App is a simple tool that can help students keep track of GPAs
        by calculating the distribution of grades.
      </h3>
      <b>Have fun!</b>
      
      <div>
      <table className="component">
      <thead>
        <tr>
          <th>Component</th>
          <th>Weight</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
      {ListofEvent.map((val) => {
        return(
          <tr>
          <td>{val.component}</td>
          <td>{val.weight}</td>
          <td>{val.grade}</td>
        </tr>
      )})}
      </tbody>
      </table>
      </div>

      <div>
        
        {ListofEvent.map((val) => {
        return(
          <>
          <h2>{val.courseName} {val.courseNumber}</h2>
          <table className="component">
          <thead>
            <tr>
              <th>Component</th>
              <th>Weight</th>
              <th>Grade</th>
            </tr>
          </thead><tr>
              <td>{val.component}</td>
              <td>{val.weight}</td>
              <td>{val.grade}</td>
            </tr>
            </table>
            </>
            
      )})}
        
      </div>

      <footer>
        <div className="footer">
          <h2>GPA Tracker</h2>
          <p>The tool to your academic success!</p>
          <p>Sherry Zhang -- Spring of 2022</p>
        </div>
      </footer>
    </div>
  );
}
