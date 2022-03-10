import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick,handleEditFormSubmit}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter course name"
          name="courseName"
          value={editFormData.courseName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter component"
          name="component"
          value={editFormData.component}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter weight"
          name="weight"
          value={editFormData.weight}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter grade"
          name="grade"
          value={editFormData.grade}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={handleEditFormSubmit}>
            Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
