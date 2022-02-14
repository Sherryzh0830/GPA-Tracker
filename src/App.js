import "./App.css";
import React from "react";
import Home from "./Home";
import Main from "./Main";
import InputPage from "./InputPage";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my React project!</h1>
        <button>Sign In Here</button>
      </header>

      //<Route exact path="/" component={Home} />
      //<Route exact path="/Main" component={Main} />
      //<Route exact path="/InputPage" component={InputPage} />

    </div>
  );
}

export default App;
