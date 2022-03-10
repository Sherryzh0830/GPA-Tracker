import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import GradeConversion from "./GradeConversion";

export default function Course() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [Class, setClass] = useState([]);
  const [Quarter, setQuarter] = useState([]);
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const [courseName, setcourseName] = useState("");
  const [component, setComponent] = useState("");
  const [weight, setWeight] = useState("");
  const [grade, setGrade] = useState("");
  const [quarter, setquarter] = useState("");
  const [finalgrade, setFinalgrade] = useState("");
  const selectedClass = display;
  const distinctQuarter = [...new Set(ListofCourse.map((x) => x.quarter))];

  const [lettergrade, setLettergrade] = useState("");
    const scale =[
        {
            "id":1,
            "min":90,
            "max":100,
            "letter":"A+",
            "gpa":"4.0"
        },
        {
            "id":2,
            "min":85,
            "max":89,
            "letter":"A",
            "gpa":"4.0"
        },
        {
            "id":3,
            "min":80,
            "max":84,
            "letter":"A-",
            "gpa":3.7
        },
        {
            "id":4,
            "min":77,
            "max":79,
            "letter":"B+",
            "gpa":3.3
        },
        {
            "id":5,
            "min":73,
            "max":76,
            "letter":"B",
            "gpa":"3.0"
        },
        {
            "id":6,
            "min":70,
            "max":72,
            "letter":"B-",
            "gpa":2.7
        },
        {
            "id":7,
            "min":67,
            "max":69,
            "letter":"C+",
            "gpa":2.3
        },
        {
            "id":8,
            "min":63,
            "max":66,
            "letter":"C",
            "gpa":"2.0"
        },
        {
            "id":9,
            "min":60,
            "max":62,
            "letter":"C-",
            "gpa":1.7
        },
        {
            "id":10,
            "min":57,
            "max":59,
            "letter":"D+",
            "gpa":1.3
        },
        {
            "id":11,
            "min":53,
            "max":56,
            "letter":"D",
            "gpa":"1.0"
        },
        {
            "id":12,
            "min":50,
            "max":52,
            "letter":"D-",
            "gpa":0.7
        },
        {
            "id":13,
            "min":0,
            "max":49,
            "letter":"F",
            "gpa":0
        }
    ];
    const convertLetter = (numGrade) => {
          for (var i = 1; i < scale.length; i++) {
            if((numGrade>=scale[i].min) && (numGrade<=scale[i].max)){
                setLettergrade(scale[i].letter);
            }
          }
      };

  const CalculateGrade = () => {
    var result = 0;
    Class.map((val) => {
      result = Math.round(result + val.weight * val.grade * 0.01);
    });
    setFinalgrade(result);
  };


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
        { quarter: quarter, courseName: courseName },
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

  const AddEvent = () => {
    Axios.post("http://localhost:3001/createEvent", {
      courseName: courseName,
      component: component,
      weight: weight,
      grade: grade,
    }).then(() => {
      setClass([
        ...Class,
        {
          courseName: courseName,
          component: component,
          weight: weight,
          grade: grade,
        },
      ]);
    });
    setShow(!show);
  };

  const UpdateEvent = (id) => {
    const newComponent = prompt("Please enter your new component name");
    Axios.put("http://localhost:3001/updateEvent", {
      newComponent: newComponent,
      id: id,
    }).then(() => {
      setClass(
        Class.map((val) => {
          return val.id === id ? { _id: id, component: val.component } : val;
        })
      );
    });
  };

  const DeleteEvent = (id) => {
    Axios.delete(`http://localhost:3001/deleteEvent/${id}`);
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
              if (!show) {
                setShow(!show);
              };
              setFinalgrade("");
              setLettergrade("");
            }}
          />
          {val}
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
                onChange={(e) => {
                  setDisplay(e.target.value);
                  setFinalgrade("");
                  setLettergrade("");
                }}
              />
              {result.courseName}
            </>
          ))}

          <br />
          <button
            onClick={() => {
              GetClassEvent(selectedClass);
              document.getElementsByClassName("edit-button")[0].style.display =
                "block";
            }}
            style={{
              backgroundColor: "#f4d35e",
              borderColor: "#faf0ca",
              padding: "0.4rem",
              color: "#0d3b66",
            }}
          >
            Get Class Detail
          </button>
          <button
            onClick={() => {
              document.getElementsByClassName("Add-Course")[0].style.display =
                "block";
            }}
            style={{
              backgroundColor: "#f4d35e",
              borderColor: "#faf0ca",
              padding: "0.4rem",
              color: "#0d3b66",
            }}
          >
            Add Course
          </button>
          <br />
        </>
      )}
      <br />

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

        <button
          onClick={() => {
            AddCourse();
            document.getElementsByClassName("Add-Course")[0].style.display =
              "none";
          }}
        >
          Submit
        </button>
      </div>

      {show && (
        <>
          <hr />
          <h3 className="courseName">{display}</h3>

          <table className="courseTable">
            <thead>
              <tr>
                <th>Component</th>
                <th>Weight</th>
                <th>Grade</th>
                <th className="edit-col">Edit</th>
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
                      <td className="edit-col">
                        <div className="edit-buttons">
                          <button
                            onClick={() => UpdateEvent(val._id)}
                            style={{
                              backgroundColor: "#f4d35e",
                              borderColor: "#faf0ca",
                              padding: "0.4rem",
                              fontWeight: "bold",
                              color: "#0d3b66",
                            }}
                          >
                            Update
                          </button>
                          <button
                            onClick={() => DeleteEvent(val._id)}
                            style={{
                              backgroundColor: "#f4d35e",
                              borderColor: "#faf0ca",
                              padding: "0.4rem",
                              fontWeight: "bold",
                              color: "#0d3b66",
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td>Final Grade</td>
                <td><button onClick={()=>{
                  CalculateGrade();
                  }} className="calculate">Calculate</button>
                  <button onClick={()=>{
                  convertLetter(finalgrade);
                  }} className="calculate">Letter Grade</button>
                  </td>
                <td>{finalgrade} {""} {""}
                {lettergrade}
                </td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => {
              var allEditColElements =
                document.getElementsByClassName("showmore");
              for (var i = 0; i < allEditColElements.length; i++) {
                allEditColElements[i].style.display = "block";
              }
            }}
            className="plus"
            style={{
              borderWidth: 0,
              alignItems: "center",
              justifyContent:"center",
              width: 50,
              height: 50,
              borderRadius: 45,
              fontSize: "2em",
              color: "white",
              background: "#f12711",
              background: "-webkit-linear-gradient(to right, #f5af19, #f12711)",
              background: "linear-gradient(to right, #f5af19, #f12711)",
            }}
          >
            <b
              style={{
                alignItems: "center",
                justifyContent:"center",
                display:"flex"
              }}
            >
              +
            </b>
          </button>
          {show && (
            <>
              <div className="showmore">
                <h4>Add More Components Here!</h4>
                <input
                  type="text"
                  onChange={(event) => setcourseName(event.target.value)}
                  value={courseName}
                  placeholder="Please enter course name"
                />
                <input
                  type="text"
                  onChange={(event) => setComponent(event.target.value)}
                  value={component}
                  placeholder="Please enter component"
                />
                <input
                  type="number"
                  onChange={(event) => setWeight(event.target.value)}
                  value={weight}
                  placeholder="Please enter weight"
                />
                <input
                  type="number"
                  onChange={(event) => setGrade(event.target.value)}
                  value={grade}
                  placeholder="Please enter grade"
                />
                <button onClick={AddEvent}>Submit</button>
              </div>
            </>
          )}

          <br />

          <button
            className="edit-button"
            onClick={() => {
              var allEditColElements =
                document.getElementsByClassName("edit-col");
              for (var i = 0; i < allEditColElements.length; i++) {
                allEditColElements[i].style.display = "block";
              }
              document.getElementsByClassName("plus")[0].style.display =
                "block";
            }}
          >
            Edit
          </button>
          <hr />
          <IconContext.Provider value={{ color: "#0d3b66", size: "1em" }}>
            <ul className="editbutton">
              <Link
                to="/InputPage"
                style={{
                  textDecoration: "none",
                  fontSize: "1em",
                  color: "#0d3b66",
                }}
              >
                <FaEdit />
                Edit all courses
              </Link>
            </ul>
          </IconContext.Provider>
        </>
      )}

      <hr/>
      <GradeConversion/>
    </div>
  );
}
