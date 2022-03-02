import "./course.css";
import React, { useState } from "react";
import data from "./data.json";

export default function Course() {
  const courseInfo = [
    { id: 1, courseName: "Chemistry", courseNum: "101" },
    { id: 2, courseName: "Physics", courseNum: "102" },
    { id: 3, courseName: "Math", courseNum: "103" },
  ];

  const [components, setComponents] = useState(data);



  

  return (
    <div>
      {courseInfo.map((value) => {
        return (
          <div>
            <h2>
              {value.courseName} {value.courseNum}
            </h2>
            <table className="table">
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
      })}
    </div>
  );
    }
