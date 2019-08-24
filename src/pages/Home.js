import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navs";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Jumbotron/>
        </div>
    )
}
 
export default Home;