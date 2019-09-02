import React from "react";
import "./style.css";
import jumbotronMyPh from './jumbotron-my-ph1.png';

function Jumbotron() {
    return (
        <div className="row jumbotron-kudri">
            <div className="col-12">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 className="text-center">My services</h2>
                    <div className="row justify-content-center">
                        <div className="col-4 kudri-list">
                            <ul className="list-group">
                                <li className="list-group-item">Hair and color</li>
                                <li className="list-group-item">Nails</li>
                                <li className="list-group-item">Lashes</li>
                                <li className="list-group-item">Mens haircut</li>
                                <li className="list-group-item">Makeup</li>
                            </ul>
                        </div>
                        <div className="col-6 kudri-list">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <img src={jumbotronMyPh} className="img-fluid mx-auto d-block" alt="Responsive image"/>
                                </li>
                                {/* <li className="list-group-item">Vestibulum at eros</li> */}
                            </ul>
                        </div>
                    </div>
                    
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    <div className="row kudri-button justify-content-center">
                    <div className="col-2 mt-4 mb-2">
                        <button type="button" className="btn btn-secondary btn-lg">View Portfolio</button>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Jumbotron;