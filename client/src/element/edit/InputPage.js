import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./InputPage.css";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function InputPage() {
  const [ListofEvent, setListofEvent] = useState([]);
  const [courseName, setcourseName] = useState("");
  const [component, setComponent] = useState("");
  const [weight, setWeight] = useState("");
  const [grade, setGrade] = useState("");

  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const AddEvent = () => {
    Axios.post("http://localhost:3001/createEvent", {
      courseName: courseName,
      component: component,
      weight: weight,
      grade: grade,
    }).then(() => {
      setListofEvent([
        ...ListofEvent,
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
    const newComponent = prompt(
      "Please enter your new component name (If no change, click 'OK')"
    );
    const newWeight = prompt(
      "Please enter your new weight (If no change, click 'OK')"
    );
    const newGrade = prompt(
      "Please enter your new grade (If no change, click 'OK')"
    );
    Axios.put("http://localhost:3001/updateEvent", {
      newComponent: newComponent,
      newWeight: newWeight,
      newGrade: newGrade,
      id: id,
    }).then(() => {
      setListofEvent(
        ListofEvent.map((val) => {
          return (
            val.id === id ? { _id: id, component: val.component } : val,
            val.id === id ? { _id: id, weight: val.weight } : val,
            val.id === id ? { _id: id, grade: val.grade } : val
          );
        })
      );
    });
  };

  const DeleteEvent = (id) => {
    Axios.delete(`http://localhost:3001/deleteEvent/${id}`);
  };

  Axios.get("http://localhost:3001/getEvent").then((response) => {
    setListofEvent(response.data);
  });

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
          placeholder="Search course/component..."
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
              <th>Course</th>
              <th>Component</th>
              <th>Weight</th>
              <th>Grade</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {ListofEvent.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.courseName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.component.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <tr>
                  <td>{val.courseName}</td>
                  <td>{val.component}</td>
                  <td>{val.weight}%</td>
                  <td>{val.grade}</td>
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
          <FaPlus />
        </button>
        {show && (
          <>
            <div className="show-more">
              <h4>Add More Components Here!</h4>
              <input
                type="text"
                onChange={(event) => setcourseName(event.target.value)}
                value={courseName}
                placeholder="Course name..."
                className="input"
              />
              <input
                type="text"
                onChange={(event) => setComponent(event.target.value)}
                value={component}
                placeholder="Component..."
                className="input"
              />
              <input
                type="number"
                onChange={(event) => setWeight(event.target.value)}
                value={weight}
                placeholder="Weight..."
                className="input"
              />
              <input
                type="number"
                onChange={(event) => setGrade(event.target.value)}
                value={grade}
                placeholder="Grade..."
                className="input"
              />
              <button onClick={AddEvent}>Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
