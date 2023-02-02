import React from "react";
import reactlogo from "../img/react-logo.png"
export default function NavBar(){
    return(
        <nav>
            <img src={reactlogo}  className="nav--icon" />
            <h3  className="nav--logoName">React Facts</h3>
            <h4  className="nav--projectName">React Course - Project 1</h4>
        </nav>
    )
} 