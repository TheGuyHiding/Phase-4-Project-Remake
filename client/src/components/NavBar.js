import React from "react";
import { NavLink } from "react-router-dom"
import "../App.css"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
  };

function NavBar() {
    return (
    <nav className="nav">
        <a href="/" >Open Flights</a>
        <ul>
            <li><NavLink to="/airlines" style={linkStyles}>Airlines</NavLink></li>
            <li><NavLink to="/reviews" style={linkStyles}>Reviews</NavLink></li>
            <li><NavLink to="/login" style={linkStyles}>Login</NavLink></li>
        </ul>
    </nav>
    );
}

export default NavBar