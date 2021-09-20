import React from 'react';
import "../SCSS/Pages.scss"
import bg from "../Assets/Background.png"

const Home = () =>{
    return(
        <div className="Content-Bg flex-wrap">
            <div className="Box-Title-Home center flex-column">
                <h1 className="Title">Rick and Morty</h1>
            </div>
            <div className="Box-Img-Home center">
                <img className="Img-Home" src={bg} alt="Rick y morty"></img>
            </div>
        </div>
    )
}

export default Home