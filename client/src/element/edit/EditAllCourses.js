import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./InputPage.css";

export default function EditAllCourses() {
  const [ListofCourse, setListofCourse] = useState([]);
  const [courseName, setcourseName] = useState("");
  const [quarter, setQuarter] = useState("");


  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const UpdateCourse = (id) => {
    const newQuarter = prompt(
        "Please enter your new quarter (If no change, click 'OK')"
      );
    const newCoursename = prompt(
      "Please enter your new course name (If no change, click 'OK')"
    );

    Axios.put("http://localhost:3001/updateCourse", {
      newQuarter: newQuarter,
      newCoursename: newCoursename,
      id: id,
    }).then(() => {
        setListofCourse(
        ListofCourse.map((val) => {
          return (
            val.id === id ? { _id: id, quarter: val.quarter } : val,
            val.id === id ? { _id: id, courseName: val.courseName } : val
          );
        })
      );
    });
  };

  const DeleteCourse = (id) => {
    Axios.delete(`http://localhost:3001/deleteCourse/${id}`);
  };

 

  return (
    <div>
      <div>
        <button className="back">
          <Link
            to="/Main"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Back
          </Link>
        </button>
        <h1 style={{ marginTop: "20px" }}>Edit Mode</h1>
      </div>

      <div>
        
        <input
          type="text"
          placeholder="Search quarter/course..."
          className="search-form"
          style={{
            float: "right",
            marginRight: "100px",
            width: "250px",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <br />
        <table className="component">
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Course</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {ListofCourse.filter((val) => {
              if ((searchTerm === "")
              &&(val.courseName!="...")) {
                return val;
              } else if (
                (val.courseName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.quarter.toLowerCase().includes(searchTerm.toLowerCase()))
                &&(val.courseName!="...")
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <tr>
                  <td>{val.quarter}</td>
                  <td>{val.courseName}</td>
                  <div className="edit-buttons">
                    <button
                      onClick={() => UpdateCourse(val._id)}
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
                      onClick={() => DeleteCourse(val._id)}
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <button
          onClick={() => setShow(!show)}
          className="plus-button"
          style={{
            borderWidth: 0,
            alignItems: "center",
            justifyContent: "center",
            width: 65,
            height: 65,
            borderRadius: 45,
            fontSize: "2em",
            color: "white",
            background: "#ee964b",
          }}
        >
          <b>+</b>
        </button>
        {show && (
          <>
            <div className="show-more">
              <h4>Add More Courses Here!</h4>
              <input
                type="text"
                onChange={(event) => setQuarter(event.target.value)}
                value={quarter}
                placeholder="Quarter..."
                className="input"
              />
              <input
                type="text"
                onChange={(event) => setcourseName(event.target.value)}
                value={courseName}
                placeholder="Course name..."
                className="input"
              />
              <button onClick={AddCourse}>Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
