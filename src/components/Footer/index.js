import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="row navbar-kudri footer-kudri justify-content-end">
            <div className="col-1">
                <h6 className="align-middle">&copy;</h6>
            </div>
            <div className="col-8">
                <div>Icons made by 
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className="align-middle">Freepik</a> 
                    from
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;