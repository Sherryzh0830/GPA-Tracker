import './App.css';
import React, {useState} from 'react';
import Course from './course'

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);

  function getData(val)
  {
    setData(val.target.value);
    setPrint(false)
  };
  return (
    <div className="App">
      {
        print?
        <h2>{data}</h2>
        :null
      }
      <header className="App-header">
        <h1>
          Welcome to my React project!
        </h1>
        <button>Sign In Here</button>
        </header>
        <Course/>
        <p>Enter course name here:</p>
        <input type="text" onChange={getData} style={
          {borderWidth: 1,
            borderColor: 'white',
            padding:6,
            width:200}
        }>
        </input>
        <button onClick={()=>setPrint(true)}style={{margin:10}}>
          Confirm</button>

        <p>Enter course number here:</p>
        <input type="text" onChange={getData} style={
          {borderWidth: 1,
            borderColor: 'white',
            padding:6,
            width:200}
        }>
        </input>
        <button onClick={()=>setPrint(true)}style={{margin:10}}>
          Confirm</button>
      
    </div>
  );
}

export default App;
