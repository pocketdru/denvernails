import React from "react";
import "./style.css";
import f from "./1.png";

function Review() {
    return (
        <div className="row review-kudri">
            <div className="col-12">
            <ul className="list-group list-group-horizontal text-center justify-content-around mt-4 mb-4">
                <li className="list-group-item ml-5 mr-5">
                    <img src={f} className="img-fluid" alt="Responsive"/>    
                    <h6>Mari, 20</h6>
                    <p className="pl-2 pr-2">Awesome nails! Olga did a really great job!</p>
                </li>
                <li className="list-group-item ml-5 mr-5">
                    <img src={f} className="img-fluid" alt="Responsive"/>
                    <h6>Mari, 20</h6>
                    <p className="pl-2 pr-2">Awesome nails! Olga did a really great job!</p>
                </li>
                <li className="list-group-item ml-5 mr-5">
                    <img src={f} className="img-fluid" alt="Responsive"/>
                    <h6>Mari, 20</h6>
                    <p className="pl-2 pr-2">Awesome nails! Olga did a really great job!</p>
                </li>
                <li className="list-group-item ml-5 mr-5">
                    <img src={f} className="img-fluid" alt="Responsive"/>
                    <h6>Mari, 20</h6>
                    <p className="pl-2 pr-2">Awesome nails! Olga did a really great job!</p>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Review;