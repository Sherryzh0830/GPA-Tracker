import React from "react";

const ReadOnlyRow = ({ val, handleEditClick }) => {
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
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
