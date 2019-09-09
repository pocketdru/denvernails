import React from "react";
import "./style.css";
import img1 from "./hair1.png";

function Hair() {
    return (
        <div className="row hair">
            <div className="col-4">
                <a href="./hair1.png">
                    <img src={img1}></img>
                </a>
            </div>
        </div>
    )
}

export default Hair;