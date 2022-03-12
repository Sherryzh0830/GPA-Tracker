import React, { useState } from "react";
import "./course.css";

export default function GradeConversion() {
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
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="grade-button" onClick={() => setShow(!show)}>
        Show/Hide Grade Conversion Table
      </button>
      {show && (
        <>
          <p style={{ fontSize: "13px" }}>
            This grading scheme table (undergraduate) is used by the University
            of Toronto.
          </p>

          <div className="grade-table">
            <table>
              <thead>
                <tr>
                  <th>Numerical Scale of Mark</th>
                  <th>Letter Grade</th>
                  <th>4.0 Scale GPA</th>
                </tr>
              </thead>
              <tbody>
                {scale.map((val) => {
                  return (
                    <tr>
                      <td>
                        {val.min}-{val.max}
                      </td>
                      <td>{val.letter}</td>
                      <td>{val.gpa}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
