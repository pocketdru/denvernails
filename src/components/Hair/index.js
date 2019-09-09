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
        <div className="row mb-2">
            <div className="col-4">
                <a href="./hair1.png">
                    <img src={img1}></img>
                </a>
            </div>
            <div className="col-4">
                <a href="./hair2.png">
                    <img src={img2}></img>
                </a>
            </div>
            <div className="col-4">
                <a href="./hair3.png">
                    <img src={img3}></img>
                </a>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-4">
                <a href="./hair4.png">
                    <img src={img4}></img>
                </a>
            </div>
            <div className="col-4">
                 <a href="./hair5.png">
                    <img src={img5}></img>
                </a>
            </div>
            <div className="col-4">
                <a href="./hair6.png">
                    <img src={img6}></img>
                </a>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-4">
                <a href="./hair7.png">
                    <img src={img7}></img>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Hair;