import React from "react";
import "./style.css";
import f from "./1.png";

function Review() {
    return (
        <div className="row review-kudri">
            <div className="col-12">
            <ul className="list-group list-group-horizontal text-center justify-content-around">
                <li className="list-group-item">
                    <img src={f} className="img-fluid" alt="Responsive image"/>
                </li>
                <li className="list-group-item">
                    <img src={f} className="img-fluid" alt="Responsive image"/>
                </li>
                <li className="list-group-item">
                    <img src={f} className="img-fluid" alt="Responsive image"/>
                </li>
                <li className="list-group-item">
                    <img src={f} className="img-fluid" alt="Responsive image"/>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Review;