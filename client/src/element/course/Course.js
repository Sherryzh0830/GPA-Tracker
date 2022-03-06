import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";

export default function Course() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);

  Axios.get("http://localhost:3001/getCourse").then((response) => {
    setListofCourse(response.data);
  });

  const [Class, setClass] = useState([]);
  const selectedClass = display;

  const GetClassEvent = (selectedClass) => {
    console.log(selectedClass);
    Axios.get(`http://localhost:3001/findCourse/${selectedClass}`).then(
      (response) => {
        console.log(response.data);
        setClass(response.data);
      }
    );
  };
  const distinctQuarter = [...new Set(ListofCourse.map((x) => x.quarter))];
  const tempQuarter = "";

  return (
    <div>
      {distinctQuarter.map((val) => (
        <>
          <input
            type="radio"
            value={val}
            name="radioValues"
            onChange={(e) => {
              tempQuarter = e.target.value;
            }}
          />
          <b>{val}</b>
        </>
      ))}
      <br />
      <button onClick={() => setShow(!show)}>Confirm</button>
      <br />
      {show && (
        <>
          {ListofCourse.map((result) => (
            <>
              <input
                type="radio"
                value={result.courseName}
                name="radioValues2"
                onChange={(e) => setDisplay(e.target.value)}
              />
              <b>{result.courseName}</b>
            </>
          ))}

          <br />
          <button
            onClick={() => {
              GetClassEvent(selectedClass);
            }}
          >
            Get Class Detail
          </button>

          <hr />
          <h3>{display}</h3>

          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Weight</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {Class.map((val) => {
                return (
                  <>
                    <tr>
                      <td>{val.component}</td>
                      <td>{val.weight}%</td>
                      <td>{val.grade}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {/*{ListofCourse.map((val) => {
        return (
          <div>
            <button className="course" value="{val.courseName}"onClick={ShowCourse}>
              {val.courseName}</button>
              <table className="component">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Component</th>
                  <th>Weight</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
              {ListofEvent.map((val)=>{
                return(
                  <tr>
                  <td>{val.courseName}</td>
                  <td>{val.component}</td>
                  <td>{val.weight}%</td>
                  <td>{val.grade}</td>
                  </tr>
                )
              })}
              </tbody>
              </table>
            
          </div>
        );
      })}*/}

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
}
