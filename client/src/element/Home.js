import React, { useState } from "react";
import Axios from "axios";
import "./course.css";


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
      <table className="table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Weight</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
      {ListofEvent.map((val) => (
          <div>
          <tr>
          <td>{val.component}</td>
          <td>{val.weight}</td>
          <td>{val.grade}</td>
        </tr>
        </div>
      ))}
      </tbody>
      </table>
      </div>

      {ListofEvent.map((val) => {
        return (
          <div>
            <div>Component:{val.component}</div>
            <div>Weight:{val.weight}</div>
            <div>Grade:{val.grade}</div>

            <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Weight</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>{val.component}</td>
                    <td>{val.weight}</td>
                    <td>{val.grade}</td>
                  </tr>
                
              </tbody>
        </table>
          </div>
        );
      })}
    </div>
  );
}
