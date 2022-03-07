import React from "react";
import Course from "./course/Course";
import Dropdown from "./course/Dropdown";

export default function Main() {
  return (
    <div>
      <Dropdown/>
      <h1>My Courses</h1>
      <Course />
    </div>
  );
}
