import React, { Component } from "react";
import "./style.css";

class PortfolioGrid extends Component {
    state =  {
        homeClass: "list-group-item list-group-item-action home",
        progileClass: "list-group-item list-group-item-action profile",
        messagesClass: "list-group-item list-group-item-action message",
        settingsClass: "list-group-item list-group-item-action settings",
        notActive: "list-group-item list-group-item-action",
        homeId: "list-home-list"
    }

    toggleClass(n) {
        console.log(n);
        // console.log(e.target.id);

        console.log(this)
        console.log(this.state.homeClass);
        // // console.log(myId);
        // console.log(myClass);
        if (n === 1) {
            let myClass = this.state.homeClass;
            return myClass === "list-group-item list-group-item-action home" ? 
            this.setState({homeClass: "list-group-item list-group-item-action home active"}) : this.setState({homeClass: "list-group-item list-group-item-action home"}) 
        } else if (n === 2) {
            let myClass = this.state.progileClass;
            return myClass === "list-group-item list-group-item-action profile" ? 
            this.setState({progileClass: "list-group-item list-group-item-action profile active"}) : this.setState({progileClass: "list-group-item list-group-item-action profile"}) 
        } else if (n === 3) {
            let myClass = this.state.messagesClass;
            return myClass === "list-group-item list-group-item-action message" ? 
            this.setState({messagesClass: "list-group-item list-group-item-action message active"}) : this.setState({messagesClass: "list-group-item list-group-item-action message"}) 
        } else if (n === 4) {
            let myClass = this.state.settingsClass;
            return myClass === "list-group-item list-group-item-action settings" ? 
            this.setState({settingsClass: "list-group-item list-group-item-action settings active"}) : this.setState({settingsClass: "list-group-item list-group-item-action settings"}) 
        }
        // return myClass === "list-group-item list-group-item-action" ? 
        // this.setState({notActive: "list-group-item list-group-item-action active"}) : this.setState({notActive: "list-group-item list-group-item-action"})
    }

    render () {
    return (
        <div className="row portfolio-grid">
            <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                <a className={this.state.homeClass} onClick={() => this.toggleClass(1)} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                <a className={this.state.progileClass} onClick={() => this.toggleClass(2)} id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                <a className={this.state.messagesClass} onClick={() => this.toggleClass(3)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                <a className={this.state.settingsClass} onClick={() => this.toggleClass(4)} id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                </div>
            </div>
            <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                </div>
            </div>
        </div>
    )
}
}
export default PortfolioGrid;