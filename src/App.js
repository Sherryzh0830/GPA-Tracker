import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Main from "./Main";
import InputPage from "./InputPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Welcome to the GPA Tracker!</h1>
        <button>Sign In Here</button>
      </header>
      <h3 className="App-text">
        This Web App is a simple tool that can help students keep track of GPAs
        by calculating the distribution of grades.
      </h3>
      <b>Have fun!</b>
      
      {/*<Route path="/" component={Home} />
      <Route path="/Main" component={Main} />
      <Route path="/InputPage" component={InputPage} />
  */}
    </div>
  );
}

export default App;
