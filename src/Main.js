import React, { useState } from "react";
import Course from "./course";

export default function Main() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <h1>Main Page Goes Here</h1>

      <Course />
      {print ? <h2>{data}</h2> : null}
      <p>Enter course name here:</p>
      <input
        type="text"
        onChange={getData}
        style={{ borderWidth: 1, borderColor: "white", padding: 6, width: 200 }}
      ></input>
      <button onClick={() => setPrint(true)} style={{ margin: 10 }}>
        Confirm
      </button>

      <p>Enter course number here:</p>
      <input
        type="text"
        onChange={getData}
        style={{ borderWidth: 1, borderColor: "white", padding: 6, width: 200 }}
      ></input>
      <button onClick={() => setPrint(true)} style={{ margin: 10 }}>
        Confirm
      </button>
    </div>
  );
}
