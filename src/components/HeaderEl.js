import React from "react";
import "../index.css"
import"../App.css"
export default function HeaderEl(){
    return(
       <header>
            <nav className="header-nav">
                <img src="../img/react-logo.svg" alt="React JS" className="logoHeader"/>
                <h1>ReactFcats</h1>
                <ul className="nav-items">
                    <li>React Course - Project 1</li>

                </ul>
            </nav>
       </header>
    )
}