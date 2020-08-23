import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Navbar() {
    // Setting the component's initial state



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/"><b>About Me</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Portfolio"><b>Portfolio</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Contact"><b>Contact</b></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;