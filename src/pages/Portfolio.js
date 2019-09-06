import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navs";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";

function Portfolio() {
    return (
        <div className="container">
            <Navbar/>
            <PortfolioGrid/>
            <Footer/>
        </div>
    )
}
 
export default Portfolio;