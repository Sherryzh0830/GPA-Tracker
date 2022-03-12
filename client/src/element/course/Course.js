import "./course.css";
import React, { useState } from "react";
import Axios from "axios";
import "../InputPage.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import GradeConversion from "./GradeConversion";
import { Grid } from "@material-ui/core";

export default function Course() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [Class, setClass] = useState([]);
  const [Quarter, setQuarter] = useState([]);
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const [courseName, setcourseName] = useState("");
  const [quarter, setquarter] = useState("");
  const [finalgrade, setFinalgrade] = useState("");
  const selectedClass = display;
  const distinctQuarter = [...new Set(ListofCourse.map((x) => x.quarter))];

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");

  const [lettergrade, setLettergrade] = useState("");
  const scale = [
    {
      id: 1,
      min: 90,
      max: 100,
      letter: "A+",
      gpa: "4.0",
    },
    {
      id: 2,
      min: 85,
      max: 89,
      letter: "A",
      gpa: "4.0",
    },
    {
      id: 3,
      min: 80,
      max: 84,
      letter: "A-",
      gpa: 3.7,
    },
    {
      id: 4,
      min: 77,
      max: 79,
      letter: "B+",
      gpa: 3.3,
    },
    {
      id: 5,
      min: 73,
      max: 76,
      letter: "B",
      gpa: "3.0",
    },
    {
      id: 6,
      min: 70,
      max: 72,
      letter: "B-",
      gpa: 2.7,
    },
    {
      id: 7,
      min: 67,
      max: 69,
      letter: "C+",
      gpa: 2.3,
    },
    {
      id: 8,
      min: 63,
      max: 66,
      letter: "C",
      gpa: "2.0",
    },
    {
      id: 9,
      min: 60,
      max: 62,
      letter: "C-",
      gpa: 1.7,
    },
    {
      id: 10,
      min: 57,
      max: 59,
      letter: "D+",
      gpa: 1.3,
    },
    {
      id: 11,
      min: 53,
      max: 56,
      letter: "D",
      gpa: "1.0",
    },
    {
      id: 12,
      min: 50,
      max: 52,
      letter: "D-",
      gpa: 0.7,
    },
    {
      id: 13,
      min: 0,
      max: 49,
      letter: "F",
      gpa: 0,
    },
  ];
  
  const convertLetter = (numGrade) => {
    for (var i = 1; i < scale.length; i++) {
      if (numGrade >= scale[i].min && numGrade <= scale[i].max) {
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

  return (
    <div className="whole-page">
      <Grid lg={12} item container spacing={1}>
        <Grid item lg={3} sm={3} xs={3}>
          <div className="dropdown menu">
            <label for="term-names">Choose a quarter:</label>
            <select
              name="term-names"
              id="term-names"
              onChange={(event) => {
                setSelectedQuarter(event.currentTarget.value);
                GetQuarterObject(event.target.value);
                setFinalgrade("");
                setLettergrade("");
              }}
              placeholder="Term"
              className="term-select"
            >
              {distinctQuarter.map((val) => {
                return <option value={val}>{val}</option>;
              })}
            </select>
            <br />
            <label for="class-names">Choose a course:</label>
            <select
              name="class-names"
              id="class-names"
              onClick={(event) => {
                setSelectedCourse(event.currentTarget.value);
                if (!show) {
                  setShow(!show);
                }
                setFinalgrade("");
                setLettergrade("");
              }}
              onChange={(event) => {
                setSelectedCourse(event.currentTarget.value);
              }}
              className="course-select"
            >
              {Quarter.map((val) => {
                return <option value={val.courseName}>{val.courseName}</option>;
              })}
            </select>

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
                marginTop: "10px",
              }}
            >
              Add Course
            </button>
          </div>
        </Grid>
        <Grid item lg={9} sm={9} xs={9}>
          <div className="content">
            <h6>{selectedQuarter}</h6>
            <h4> {selectedCourse}</h4>

            {show && ( //get class detail
              <>
                <button
                  onClick={() => {
                    GetClassEvent(selectedCourse);
                    document.getElementsByClassName(
                      "edit-button"
                    )[0].style.display = "block";
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
                  document.getElementsByClassName(
                    "Add-Course"
                  )[0].style.display = "none";
                }}
              >
                Submit
              </button>
            </div>

            {show && ( //course table
              <>
                <h3 className="courseName">{display}</h3>
                <table className="courseTable">
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
                        <tr>
                          <td>{val.component}</td>
                          <td>{val.weight}%</td>
                          <td>{val.grade}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <table className="courseTable">
                  <tr>
                    <td />
                    <td>Final Grade</td>
                    <td>
                      <button
                        onClick={() => {
                          CalculateGrade();
                        }}
                        className="calculate"
                      >
                        Calculate
                      </button>
                      <button
                        onClick={() => {
                          convertLetter(finalgrade);
                        }}
                        className="calculate"
                      >
                        Letter Grade
                      </button>
                    </td>
                    <td>
                      {finalgrade} {""} {""}
                      {lettergrade}
                    </td>
                  </tr>
                </table>

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
                      Edit courses
                    </Link>
                  </ul>
                </IconContext.Provider>
                <hr />
              </>
            )}
                <GradeConversion />

          </div>
        </Grid>
      </Grid>

    </div>
  );
}
