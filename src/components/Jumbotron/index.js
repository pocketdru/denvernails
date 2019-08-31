import React from "react";
import "./style.css";
import './jumbotron-my-ph.png'

function Jumbotron() {
    return (
        <div className="row jumbotron-kudri">
            <div className="col-12">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 className="text-center">My services</h2>
                    <div className="row">
                        <div className="col-6 kudri-list">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                {/* <li className="list-group-item">Vestibulum at eros</li> */}
                            </ul>
                        </div>
                        <div className="col-6 kudri-list">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {/* <img src="" class="img-fluid" alt="Responsive image"/> */}
                                </li>
                                {/* <li className="list-group-item">Vestibulum at eros</li> */}
                            </ul>
                        </div>
                    </div>
                    
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
                <div className="row kudri-button justify-content-center">
                    <div className="col-2 align-items-end mt-4">
                        <button type="button" className="btn btn-secondary btn-lg">View Portfolio</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Jumbotron;