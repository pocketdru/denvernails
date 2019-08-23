import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="row">
            <div className="col-3">
                <h3 className="text-center salon-name">Kudri Salon</h3>
            </div>
            <div className="col-9">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;
