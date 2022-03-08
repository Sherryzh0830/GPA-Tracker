import React from "react";
import Course from "./course/Course";

export default function Main() {
  return (
    <div>
      <h1 style={{minHeight:'5vh', 
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:'20px',
                }}>My Courses</h1>
      <Course />
    </div>
  );
}
