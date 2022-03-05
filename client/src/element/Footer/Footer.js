import React from "react";

export default function Footer() {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/*column 1*/}
                <div className="col">
                    <h4>GPA Trackr</h4>
                    <ul className="list-unstyled">
                        <li>xxx-xxx-xxxx</li>
                        <li>city, country</li>
                        <li>the address is here POSTCODE</li>
                    </ul>
                </div>
                {/*column 2*/}
                <div className="col">
                    <h4>someStuff</h4>
                    <ul className="list-unstyled">
                        <li>XXXXXXXX</li>
                        <li>XXXX</li>
                        <li>XXXXXXXXXXXXXXXX</li>
                    </ul>
                </div>
                {/*column 3*/}
                <div className="col">
                    <h4>MOREStuff</h4>
                    <ul className="list-unstyled">
                        <li>XXXXXXXX</li>
                        <li>XXXX</li>
                        <li>XXXXXXXXXXXXXXXX</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="row-sm">
                    &copy;{new Date().getFullYear()} GPA Trackr | All rights reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  );
}
