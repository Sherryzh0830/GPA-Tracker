import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";

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

  const CalculateGrade = () => {
    var result = 0;
    Class.map((val) => {
      result = result + val.weight * val.grade * 0.01;
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
              }
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
                onChange={(e) => setDisplay(e.target.value)}
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
          >
            Get Class Detail
          </button>
          <button
            onClick={() => {
              document.getElementsByClassName("Add-Course")[0].style.display =
                "block";
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
              "block";
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
                <td>---------</td>
                <td>{finalgrade} <button onClick={()=>{
                  CalculateGrade();
                  document.getElementsByClassName("calculate")[0].style.display =
                "none";
                  }} className="calculate">Calculate</button></td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => {
              var allEditColElements =
                document.getElementsByClassName("show-more");
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
              <div className="show-more">
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

      <br />
    </div>
  );
}
