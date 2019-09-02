import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navs";
import Jumbotron from "../components/Jumbotron";
import Contacts from "../components/Contact";

function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Jumbotron/>
            <Contacts/>
        </div>
    )
}
 
export default Home;