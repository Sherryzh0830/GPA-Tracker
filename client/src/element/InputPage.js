import React, { useState } from "react";
import Axios from "axios";
import "./InputPage.css";

export default function InputPage() {
  const [ListofEvent, setListofEvent] = useState([]);
  const [courseName, setcourseName] = useState("");
  const [component, setComponent] = useState("");
  const [weight, setWeight] = useState("");
  const [grade, setGrade] = useState("");

  const [show, setShow] = useState(false);

  const AddEvent = () => {
    Axios.post("http://localhost:3001/createEvent", {
      courseName: courseName,
      component: component,
      weight: weight,
      grade: grade,
    }).then(() => {
      setListofEvent([
        ...ListofEvent,
        { courseName: courseName, component: component, weight: weight, grade: grade },
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
      setListofEvent(
        ListofEvent.map((val) => {
          return val.id === id ? { _id: id, component: val.component } : val;
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
      <h1>Edit Mode</h1>
      <div>
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
            {ListofEvent.map((val) => {
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
        <button
          onClick={() => setShow(!show)}
          className="plus-button"
          style={{
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
            fontSize: "2em",
            color: "white",
            background: "#ee964b",
          }}
        >
          {" "}
          +{" "}
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
      </div>
    </div>
  );
}
