import React from "react";
import Course from "./course/Course";
import GPA from "../images/GPA.png";
import orangeblueBg from "../images/Header background img/orange-blueFuzz.png";

export default function Main() {
  return (
    <div>
      <hr />

      <div style={{backgroundImage:`url(${orangeblueBg})`}}>
      <header className="App-header">

      <h1 style={{minHeight:'5vh', 
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:'20px',
                  marginBottom:'20px',
                  fontWeight:"bolder",
                  WebkitTextStroke:"0.5px #dc2f02"
                }}>My Courses</h1>
      <img src={GPA} alt="GPA-img" style={{height: "200px"}}/>
      </header>
      <hr/>
      </div>
      <br/>
      <Course />
    </div>
  );
}
