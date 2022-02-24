import React, {useState} from "react";
import Axios from "axios";

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

      {ListofEvent.map((val) => {
        return (
          <div>
            <div>Component:{val.component}</div>
            <div>Weight:{val.weight}</div>
            <div>Grade:{val.grade}</div>
          </div>
        );
      })}
    </div>
  );
}
