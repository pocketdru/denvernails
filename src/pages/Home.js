import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navs";
import Jumbotron from "../components/Jumbotron";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Jumbotron/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
 
export default Home;