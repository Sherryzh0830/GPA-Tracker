import React, { useState } from "react";
import Axios from "axios";
import "./InputPage.css";


export default function InputPage() {
  const [ListofEvent, setListofEvent] = useState([]);
  const [component, setComponent] = useState("");
  const [weight, setWeight] = useState(0);
  const [grade, setGrade] = useState(0);

  const AddEvent = () =>{
    Axios.post("http://localhost:3001/createEvent",{component:component, weight:weight, grade:grade})
    .then(()=>{
      setListofEvent([...ListofEvent,{component:component, weight:weight, grade:grade}])
    })
  }

  const UpdateEvent =(id) =>{
    const newComponent = prompt("Please enter new component")
    Axios.put("http://localhost:3001/updateEvent",{newComponent:newComponent, id:id})
    .then(()=>{
      setListofEvent(ListofEvent.map((val)=>{
        return val.id === id ? {_id:id, component:val.component} : val;
      }))
    })
  }

  const DeleteEvent = (id) => {
    Axios.delete(`http://localhost:3001/deleteEvent/${id}`)
  }

  Axios.get("http://localhost:3001/getEvent").then((response) => {
    setListofEvent(response.data);
  });


  return (
    <div>
      <h1>Input Page Goes Here</h1>

      <div>
      <table className="component">
      <thead>
        <tr>
          <th>Component</th>
          <th>Weight</th>
          <th>Grade</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      {ListofEvent.map((val) => {
        return(
         <tr>
          <td>{val.component}</td>
          <td>{val.weight}%</td>
          <td>{val.grade}</td>
          <div className="buttons">
          <button onClick={()=>UpdateEvent(val._id)}>Update</button>
          <button onClick={()=>DeleteEvent(val._id)}>Delete</button>
          </div>
        </tr>
      )})}
      </tbody>
      </table>
        
      <div>
        <h4>Add more</h4>
        <input type="text" onChange={(event)=>(setComponent(event.target.value))} value={component} placeholder="Please enter component" />
        <input type="number" onChange={(event)=>(setWeight(event.target.value))} value={weight} placeholder="Please enter weight" />
        <input type="number" onChange={(event)=>(setGrade(event.target.value))} value={grade} placeholder="Please enter grade" />
        <button onClick={AddEvent}>Add</button>
      </div>

      </div>

    </div>
  );
}
