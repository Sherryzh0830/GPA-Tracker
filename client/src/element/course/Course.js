import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";

export default function Course() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [ListofEvent, setListofEvent] = useState([]);
  const [Class, setClass] = useState([]);
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const selectedClass = display;
  const distinctQuarter = [...new Set(ListofCourse.map((x) => x.quarter))];
  const tempQuarter = "";

  Axios.get("http://localhost:3001/getCourse").then((response) => {
    setListofCourse(response.data);
  });
  Axios.get("http://localhost:3001/getEvent").then((response) => {
    setListofEvent(response.data);
  });

  const GetClassEvent = (selectedClass) => {
    console.log(selectedClass);
    Axios.get(`http://localhost:3001/findCourse/${selectedClass}`).then(
      (response) => {
        console.log(response.data);
        setClass(response.data);
      }
    );
  };

  
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
          {ListofCourse.filter(o1 => ListofEvent.some(o2 => o1.quarter === tempQuarter && o1.courseName === o2.courseName)).map((result) => (
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
    </div>
  );
}
