import React from "react";
import "./style.css";
import img1 from "./img/l1.png";
import img2 from "./img/l2.png";
import img3 from "./img/l3.png";
import img4 from "./img/l4.png";
import img5 from "./img/l5.png";
import img6 from "./img/l6.png";
import img7 from "./img/l7.png";
import img8 from "./img/l8.png";
import img9 from "./img/l9.png";

function Lashes() {
    return (
        <div className="row hair">
            <div className="card-group mt-3 mb-3">
                <div className="card ml-3">
                    <img src={img1} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img2} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img3} className="card-img-top" alt="lashes"/>
                </div>
                </div>
                <div className="card-group mb-3">
                <div className="card ml-3">
                    <img src={img4} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img5} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img6} className="card-img-top" alt="lashes"/>
                </div>
                </div>
                <div className="card-group mb-3">
                <div className="card ml-3">
                    <img src={img7} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img8} className="card-img-top" alt="lashes"/>
                </div>
                <div className="card ml-3">
                    <img src={img9} className="card-img-top" alt="lashes"/>
                </div>
            </div>
        </div>
    )
}

export default Lashes;