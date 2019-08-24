import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="row navbar-kudri">
            <div className="col-3">
                <a href="#" className="salon-name">
                    <h1 className="text-center">Kudri Salon</h1>
                </a>
            </div>
            <div className="col-9">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Porfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;
