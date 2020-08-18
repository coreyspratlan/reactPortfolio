import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Navbar() {
    // Setting the component's initial state

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky>
        <div className= "collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="index.html"><b>About Me</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="portfolio.html"><b>Portfolio</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html"><b>Contact</b></a>
                </li>
            </ul>
        </div>
    </nav >
   </div >
    );
}


export default Navbar;