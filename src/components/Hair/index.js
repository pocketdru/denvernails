import React from "react";
import "./style.css";
import img1 from "./hair1.png";
import img2 from "./hair2.png";
import img3 from "./hair3.png";
import img4 from "./hair4.png";
import img5 from "./hair5.png";
import img6 from "./hair6.png";
import img7 from "./hair7.png";

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