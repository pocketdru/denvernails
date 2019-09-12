import React, { Component } from "react";
import "./style.css";
import Hair from "../Hair";
import Nails from "../Nails";
import Lashes from "../Lashes";

class PortfolioGrid extends Component {
    state =  {

        //side bar class states
        hairClass: "list-group-item list-group-item-action hair",
        nailsClass: "list-group-item list-group-item-action nails",
        lashesClass: "list-group-item list-group-item-action lashes",
        makeupClass: "list-group-item list-group-item-action makeup",

        //selected side's bar data states
        dataHair: "tab-pane fade hair",
        dataNails: "tab-pane fade nails",
        dataLashes: "tab-pane fade lashes",
        dataMakeup: "tab-pane fade makeup"

    }

    toggleClass(n) {
        this.setState({
            hairClass: "list-group-item list-group-item-action hair",
            nailsClass: "list-group-item list-group-item-action nails",
            lashesClass: "list-group-item list-group-item-action lashes",
            makeupClass: "list-group-item list-group-item-action makeup",
    
            dataHair: "tab-pane fade hair",
            dataNails: "tab-pane fade nails",
            dataLashes: "tab-pane fade lashes",
            dataMakeup: "tab-pane fade makeup"      
        })

        if (n === 1) {
            let myClass = this.state.hairClass;
            return myClass === "list-group-item list-group-item-action hair" ? 
            this.setState({
                hairClass: "list-group-item list-group-item-action hair active",
                dataHair: "tab-pane fade hair show active"

            }) : 
            this.setState({
                hairClass: "list-group-item list-group-item-action hair",
                dataHair: "tab-pane fade hair"
            }) 
        } else if (n === 2) {
            let myClass = this.state.nailsClass;
            return myClass === "list-group-item list-group-item-action nails" ? 
            this.setState({
                nailsClass: "list-group-item list-group-item-action nails active",
                dataNails: "tab-pane fade nails show active"
            }) : 
            this.setState({
                nailsClass: "list-group-item list-group-item-action nails",
                dataNails: "tab-pane fade nails"
            }) 
        } else if (n === 3) {
            let myClass = this.state.lashesClass;
            return myClass === "list-group-item list-group-item-action lashes" ? 
            this.setState({
                lashesClass: "list-group-item list-group-item-action lashes active",
                dataLashes: "tab-pane fade lashes show active"
            }) : 
            this.setState({
                lashesClass: "list-group-item list-group-item-action lashes",
                dataLashes: "tab-pane fade lashes"
            }) 
        } else if (n === 4) {
            let myClass = this.state.makeupClass;
            return myClass === "list-group-item list-group-item-action makeup" ? 
            this.setState({
                makeupClass: "list-group-item list-group-item-action makeup active",
                dataMakeup: "tab-pane fade makeup show active"
            }) : 
            this.setState({
                makeupClass: "list-group-item list-group-item-action makeup",
                dataMakeup: "tab-pane fade makeup"
            }) 
        }
        // return myClass === "list-group-item list-group-item-action" ? 
        // this.setState({notActive: "list-group-item list-group-item-action active"}) : this.setState({notActive: "list-group-item list-group-item-action"})
    }

    render () {
    return (
        <div className="row portfolio-grid">
            <div className="col-2">
                <div className="list-group" id="list-tab" role="tablist">
                <ul className="list-unstyled">
                    <li>
                        <a className={this.state.hairClass} onClick={() => this.toggleClass(1)} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                            Hair
                        </a>
                    </li>
                    <li>
                        <a className={this.state.nailsClass} onClick={() => this.toggleClass(2)} id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                            Nails
                        </a>
                    </li>
                    <li>
                        <a className={this.state.lashesClass} onClick={() => this.toggleClass(3)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
                            Lashes
                        </a>
                    </li>
                    <li>
                        <a className={this.state.makeupClass} onClick={() => this.toggleClass(4)} id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">
                            Makeup
                        </a>
                    </li>
                </ul>
                {/* <li className="list-group-item">Vestibulum at eros</li>
                <a className={this.state.hairClass} onClick={() => this.toggleClass(1)} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Hair</a>
                <a className={this.state.nailsClass} onClick={() => this.toggleClass(2)} id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Nails</a>
                <a className={this.state.lashesClass} onClick={() => this.toggleClass(3)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Lashes</a>
                <a className={this.state.makeupClass} onClick={() => this.toggleClass(4)} id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Makeup</a> */}
                </div>
            </div>
            <div className="col-10">
                <div className="tab-content" id="nav-tabContent">
                <div className={this.state.dataHair} id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <Hair/>
                </div>
                <div className={this.state.dataNails} id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <Nails/>
                </div>
                <div className={this.state.dataLashes} id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <Lashes/>
                </div>
                <div className={this.state.dataMakeup} id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">4</div>
                </div>
            </div>
        </div>
    )
}
}
export default PortfolioGrid;