import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter course name"
          name="courseName"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter component"
          name="component"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter weight"
          name="weight"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter grade"
          name="grade"
        ></input>
      </td>
    </tr>
  );
};

export default EditableRow;
