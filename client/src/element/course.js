import "./course.css";
import React, { useState } from "react";
import data from "./data.json";
import Axios from "axios";
import "./InputPage.css";

export default function Course() {
  const courseInfo = [
    { id: 1, courseName: "Chemistry", courseNum: "101" },
    { id: 2, courseName: "Physics", courseNum: "102" },
    { id: 3, courseName: "Math", courseNum: "103" },
  ];

  const [ListofCourse, setListofCourse] = useState([]);
  const [ListofEventwithCourseName, setListofEventwithCourseName] = useState([]);


  Axios.get("http://localhost:3001/getCourse").then((response) => {
    setListofCourse(response.data);
  });

  const FindCourse = (courseName) => {
    Axios.get(`http://localhost:3001/getEventbyCourseName${courseName}`)
    .then((response) => {
      setListofEventwithCourseName(response.data);
  });

  return (
    <div>
      {ListofCourse.map((val) => {
        return (
          <div>
            <div>courseName:{val.courseName}</div>
            <div>courseNumber:{val.courseNumber}</div>
            
            <button className="course">
              {val.courseName} {val.courseNumber}
            </button>
            <table className="component">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Weight</th>
                  <th>Grade</th>
                </tr>
              </thead>

            <tbody>
              
              {ListofEventwithCourseName.map((val) => {
                FindCourse(val.courseName)
                return (
                  <tr>
                    <td>{val.component}</td>
                    <td>{val.weight}%</td>
                    <td>{val.grade}</td>
                  </tr>
                  );
                })
      
              }
              
            </tbody>
            </table>
          </div>
        );
      })}

      {/*{courseInfo.map((value) => {
        return (
          <div>
            <button className="course">
              {value.courseName} {value.courseNum}
            </button>
            <table className="component">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Weight</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                {components.map((comp) => (
                  <tr>
                    <td>{comp.component}</td>
                    <td>{comp.weight}</td>
                    <td>{comp.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            
          </div>
        )
      })}*/}
    </div>
  );
}}
