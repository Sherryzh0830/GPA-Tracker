import React from "react";

const ReadOnlyRow = ({ val, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{val.courseName}</td>
      <td>{val.component}</td>
      <td>{val.weight}%</td>
      <td>{val.grade}</td>
      <td>
        <button
          type="button"
          onClick={(event) => {
            handleEditClick(event, val);
          }}
        >
          UpdateAll
        </button>
        <button type="button" onClick={() => handleDeleteClick(val.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
