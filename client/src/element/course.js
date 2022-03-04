import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "./InputPage.css";

export default function Course() {

  const [ListofEvent, setListofEvent] = useState([]);
  const [ListofCourse, setListofCourse] = useState([]);
  const [show, setShow] = useState(false);


  Axios.get("http://localhost:3001/getCourse").then((response) => {
    setListofCourse(response.data);
  });

  const ShowCourse = () => {
    Axios.get("http://localhost:3001/getCourseEvent").then((response) => {
      setListofEvent(response.data);
      setShow(!show);
    });  };

  const [mathClass, setMathClass] = useState([]);
  const selectedClass="MAT203";

  const GetClassEvent =(selectedClass)=>{
    console.log(selectedClass);
    Axios.get(`http://localhost:3001/findCourse/${selectedClass}`)
    .then((response) => {
    console.log(response.data);
    setMathClass(response.data)
  });
  }

  return (
    <div>
      {mathClass.map((val)=>{
        return (
          <div>
            MAT203: {val.component}'s grade is {val.grade}, which has a weight of {val.weight}%
          </div>
        )
      })}
      <button onClick={()=>{GetClassEvent(selectedClass)}}>Get Math Class Event</button>
      <hr />

      {ListofCourse.map((val) => {
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
}
