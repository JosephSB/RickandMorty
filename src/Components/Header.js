import React,{useContext, useState } from 'react';
import ThemeContext from "../context/ThemeContext"
import { NavLink } from 'react-router-dom';
import "../SCSS/Header.scss"

const Header = () =>{
    const { theme, handleTheme } = useContext(ThemeContext);
    const [responsive, setResponsive] = useState(false);

    const handleResponsive = () =>{
        if(window.screen.width <=700){
            if(responsive) setResponsive(false)
            else setResponsive(true)
        }
    }

    return(
        <header className="Header center-y">
            <div className="Header-Box-Img">
                <NavLink className="nav-link" exact to="/">
                    <img 
                    className="Header-Img"
                    src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
                    alt="Rick and Morty"
                    ></img>
                </NavLink>
            </div>
            <div className="Barr-Responsive" onClick={handleResponsive}><i className="fas fa-bars fa-3x"></i></div>
            <div onClick={handleResponsive} className={`Header-Box-Link-Pages responsive-${responsive}`} >
                <NavLink className="nav-link" exact to="/Personajes" activeClassName="active"> Personajes</NavLink>
                <NavLink className="nav-link" exact to="/Locaciones" activeClassName="active"> Locaciones</NavLink>
                <NavLink className="nav-link" exact to="/Episodios" activeClassName="active"> Episodios</NavLink>
                <button onClick={handleTheme} className="Btn-DarkMode" value={theme}>
                    <i className={`fas fa-${theme}`}></i>
                </button>
            </div>
        </header>
    )
}

export default Header