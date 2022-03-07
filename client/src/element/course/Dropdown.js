import {React,useState} from "react";
import Course from "./Course";
import {FaBook} from "react-icons/fa";
import "./course.css"

export default function Dropdown(props) {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <li className="items">
        <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>
            <FaBook />
        </a>

        {open && props.children}
        </li>
    </div>
  );
}
