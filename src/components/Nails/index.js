import React from "react";
import "./style.css";
import img1 from "./img/nail1.png";
import img2 from "./img/nail1.png";
import img3 from "./img/nail1.png";
import img4 from "./img/nail1.png";
import img5 from "./img/nail1.png";
import img6 from "./img/nail1.png";
import img7 from "./img/nail1.png";

function Nails() {
    return (
        <div className="row hair">

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

export default Nails;