import React from "react";
import "./style.css";
import JumbotronMyPh from './jumbotron-my-ph1.png';
import Comb from "./comb.png";
import EyeShadow from "./eye-shadow.png";
import EyeLashes from "./eyelashes.png";
import HairDye from "./hair-dye.png";
import NailPolish from "./nail-polish.png";


function Jumbotron() {
    return (
        <div className="row jumbotron-kudri">
            <div className="col-12">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 className="text-center">My services</h2>
                    <div className="row justify-content-center">
                        <div className="col-4 kudri-list">
                            {/* <ul className="list-group">
                                <li className="list-group-item">Hair and color</li>
                                <li className="list-group-item">Nails</li>
                                <li className="list-group-item">Lashes</li>
                                <li className="list-group-item">Mens haircut</li>
                                <li className="list-group-item">Makeup</li>
                            </ul> */}
                            <ul className="list-unstyled align-middle">
                            <li className="media mb-2">
                                <img src={HairDye} className="mr-4" alt="hair dye"/>
                                <div className="media-body">
                                <h5 className="mt-0 mb-1">Hair and color</h5>
                                </div>
                            </li>
                            <li className="media mb-2">
                                <img src={NailPolish} className="mr-4" alt="nail polish"/>
                                <div className="media-body">
                                <h5 className="mt-0 mb-1">Nails</h5>
                                </div>
                            </li>
                            <li className="media mb-2">
                                <img src={EyeLashes} className="mr-4" alt="eye lashes"/>
                                <div className="media-body">
                                <h5 className="mt-0 mb-1">Lashes</h5>
                                </div>
                            </li>
                            <li className="media mb-2">
                                <img src={Comb} className="mr-4" alt="comb"/>
                                <div className="media-body">
                                <h5 className="mt-0 mb-1">Mens haircut</h5>
                                </div>
                            </li>
                            <li className="media mb-2">
                                <img src={EyeShadow} className="mr-4" alt="eye shadow"/>
                                <div className="media-body">
                                <h5 className="mt-0 mb-1">Makeup</h5>
                                </div>
                            </li>
                            </ul>
                    <div className="row kudri-button">
                        <div className="col-6 mt-4 mb-2 p1">
                            <a href="/portfolio">
                                <button type="button" className="btn btn-secondary btn-sm pl-3 pr-3 pt-2 pb-2">View Portfolio</button>
                            </a>
                        </div>
                    </div>
                        </div>
                        <div className="col-6 kudri-list">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img src={JumbotronMyPh} className="img-fluid mx-auto d-block" alt="Responsive image"/>
                                </li>
                                {/* <li className="list-group-item">Vestibulum at eros</li> */}
                            </ul>
                        </div>
                    </div>
                    
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    {/* <div className="row kudri-button justify-content-center">
                        <div className="col-2 mt-4 mb-2">
                            <button type="button" className="btn btn-secondary btn-lg">View Portfolio</button>
                        </div>
                    </div> */}
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Jumbotron;