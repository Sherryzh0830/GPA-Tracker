import "./course.css";
import React, { useState } from "react";
import data from "./data.json";
import { nanoid } from "nanoid";

export default function Course() {
  const courseInfo = [
    { id: 1, courseName: "Chemistry", courseNum: "101" },
    { id: 2, courseName: "Physics", courseNum: "102" },
    { id: 3, courseName: "Math", courseNum: "103" },
  ];

  const [components, setComponents] = useState(data);

  const [addFormData, setAddFormData] = useState({
    component: "",
    weight: 0,
    grade: 0,
  });

  const handleAddFormChange = (event) => {
    event.preventDefult();
    const fieldName = event.target.attribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefult();
    const newComponent = {
      id: nanoid(),
      component: addFormData.component,
      weight: addFormData.weight,
      grade: addFormData.grade,
    };
  const newComponents = [...components, newComponent];
    setComponents(newComponents);
  };

  return (
    <div>
      {courseInfo.map((value) => {
        return (
          <div>
            <h2>
              {value.courseName} {value.courseNum}
            </h2>
            <table className="table">
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

            <form onSubmit={handleAddFormSubmit}>
              <input
                type="text"
                name="component"
                required="required"
                placeholder="Component"
                onChange={handleAddFormChange}
              />
              <input
                type="number"
                name="weight"
                required="required"
                placeholder="Weight of Component"
                onChange={handleAddFormChange}
              />
              <input
                type="number"
                name="grade"
                required="required"
                placeholder="Your grade"
                onChange={handleAddFormChange}
              />
              <button typeof="submit">Submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
