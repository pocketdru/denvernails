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
        {/* <div className="row mt-2 mb-2">
            <div className="col-4">
                <a target="_blank" href={img1}>
                    <img src={img1}></img>
                </a>
            </div>
            <div className="col-4">
                <a target="_blank" href={img2}>
                    <img src={img2}></img>
                </a>
            </div>
            <div className="col-4">
                <a target="_blank" href={img3}>
                    <img src={img3}></img>
                </a>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-4">
                <a target="_blank" href={img4}>
                    <img src={img4}></img>
                </a>
            </div>
            <div className="col-4">
                 <a target="_blank" href={img5}>
                    <img src={img5}></img>
                </a>
            </div>
            <div className="col-4">
                <a target="_blank" href={img6}>
                    <img src={img6}></img>
                </a>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-4">
                <a target="_blank" href={img7}>
                    <img src={img7}></img>
                </a>
            </div>
        </div> */}
<div className="card-group mt-3 mb-3">
  <div className="card ml-3">
    <img src={img1} className="card-img-top" alt="haircut"/>
  </div>
  <div className="card ml-3">
    <img src={img2} className="card-img-top" alt="haircut"/>
  </div>
  <div className="card ml-3">
    <img src={img3} className="card-img-top" alt="haircut"/>
  </div>
</div>
<div className="card-group mb-3">
  <div className="card ml-3">
    <img src={img4} className="card-img-top" alt="haircut"/>
  </div>
  <div className="card ml-3">
    <img src={img5} className="card-img-top" alt="haircut"/>
  </div>
  <div className="card ml-3">
    <img src={img6} className="card-img-top" alt="haircut"/>
  </div>
</div>
<div className="card-group mb-3">
  <div className="card ml-3">
    <img src={img7} className="card-img-top" alt="haircut"/>
    </div>
</div>
</div>
    )
}

export default Hair;