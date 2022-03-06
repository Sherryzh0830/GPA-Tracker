import React from "react";
import "./FooterStyles.css";
import {FaFacebook,
        FaInstagram,
        FaGithub,
        FaSnapchat,
        FaHome,
        FaLaughWink,
        FaBook} from "react-icons/fa";
import { IconContext } from "react-icons";


export default function Footer() {
  return (
    <div className="main-footer">
         <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
         </div>


        <div className="container">
        <IconContext.Provider value={{color:"white", size:"1.7em"}}>
            <div className="row">
                {/*column 1*/}
                <div className="col">
                    <h5 style={{fontWeight:"bold"}}>GPA Trackr</h5>
                    <ul className="list-unstyled">
                        <li>778-899-0830</li>
                        <li>221B Baker Street </li>
                        <li>London, UK</li>
                    </ul>
                </div>
                {/*column 2*/}
                <div className="col">
                <b><h5>Menu</h5></b>
                    <ul className="list-unstyled">
                        <li><a href ="#" style={{textDecoration:'none', color:'white'}}>Home</a></li>
                        <li><a href ="#" style={{textDecoration:'none', color:'white'}}>About</a></li>
                        <li><a href ="#" style={{textDecoration:'none', color:'white'}}>Courses</a></li>
                    </ul>
                </div>
                {/*column 3*/}
                {/*<div className="col">
                    <h5>MOREStuff</h5>
                    <ul className="list-unstyled">
                        <li>XXXXXXXX</li>
                        <li>XXXX</li>
                        <li>XXXXXXXXXXXXXXXX</li>
                    </ul>
                </div>*/}
            </div>

            <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaSnapchat /></a>
                <a href="#"><FaGithub /></a>

            </div>

            <hr />
            <div className="row">
                <p className="row-sm">
                    &copy;{new Date().getFullYear()} GPA Trackr | All rights reserved | Terms Of Service | Privacy
                </p>
            </div>

        </IconContext.Provider>
        </div>
    </div>
  );
}
