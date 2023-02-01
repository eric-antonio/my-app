import React from "react";
import "../index.css"
import"../App.css"
import reactLogo from"../img/react-logo.png"
export default function HeaderEl(){
    return(
       <header className="header-bar">
            <nav className="header-nav">
                <img src={reactLogo} alt="React JS" className="logoHeader"/>
                <h1>ReactFcats</h1>
               
                <h3>React Course - Project 1</h3>
        
            </nav>
       </header>
    )
}