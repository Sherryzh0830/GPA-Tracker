import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";


export default function Course() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [Class, setClass] = useState([]);
  const [Quarter, setQuarter] = useState([]);
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const [courseName, setcourseName] = useState("");
  const [quarter, setquarter] = useState("");
  const selectedClass = display;
  const distinctQuarter = [...new Set(ListofCourse.map((x) => x.quarter))];
  const tempQuarter = "";

  Axios.get("http://localhost:3001/getCourse").then((response) => {
    setListofCourse(response.data);
  });

  const AddCourse = () => {
    Axios.post("http://localhost:3001/createCourse", {
      quarter: quarter,
      courseName: courseName,
    }).then(() => {
      setListofCourse([
        ...ListofCourse,
        { quarter: quarter, courseName: courseName},
      ]);
    });
    setShow(!show);
  };

  const GetClassEvent = (selectedClass) => {
    console.log(selectedClass);
    Axios.get(`http://localhost:3001/findCourse/${selectedClass}`).then(
      (response) => {
        console.log(response.data);
        setClass(response.data);
      }
    );
  };
  const GetQuarterObject = (selectedQuarter) => {
    console.log(selectedQuarter);
    Axios.get(`http://localhost:3001/findQuarter/${selectedQuarter}`).then(
      (response) => {
        console.log(response.data);
        setQuarter(response.data);
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
              GetQuarterObject(e.target.value);
              if(!show){
                setShow(!show);
              }
              
            }}
          />
          <b>{val}</b>
        </>
      ))}
     
      <br />
      {show && (
        <>
          {Quarter.map((result) => (
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
          <button
            onClick={() => {
              document.getElementsByClassName("Add-Course")[0].style.display = "block";
            }}
          >
            Add Course
          </button>
          <br/>
        </>)}
      <br/>

      <div className="Add-Course">
        <h5>Add More Courses Here!</h5>
        <input
          type="text"
          onChange={(course) => setquarter(course.target.value)}
          value={quarter}
          placeholder="Please enter quarter"
        />
        <input
          type="text"
          onChange={(course) => setcourseName(course.target.value)}
          value={courseName}
          placeholder="Please enter course name"
        />
        
        <button onClick={AddCourse}>Submit</button>
      </div>


      {show && (
        <>
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
          <ul className="">
          <Link to='/InputPage' style={{textDecoration:'none', color:'0d3b66'}}><FaEdit/>Edit</Link>
          </ul>
        </>
      )}

      <br/>

    </div>
  );
}
