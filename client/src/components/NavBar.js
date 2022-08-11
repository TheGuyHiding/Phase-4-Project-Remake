import React from "react";
import { Link } from "react-router-dom"

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
        <a href="/" className="site-title">Open Flights</a>
        <ul>
            <li><Link to="/airlines" style={linkStyles}activeStyle={{background:"darkblue"}}>Airlines</Link></li>
            <li><Link to="/reviews" style={linkStyles}activeStyle={{background:"darkblue"}}>Reviews</Link></li>
            <li><Link to="/login" style={linkStyles}activeStyle={{background:"darkblue"}}>Login</Link></li>
        </ul>
    </nav>
    );
}

export default NavBar