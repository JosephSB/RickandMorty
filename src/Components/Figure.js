import React from 'react';
import { NavLink } from 'react-router-dom';

const Figure = (props)=>{
    return(
        <figure className="Target center-y flex-column between">
            <img className="Img-Target" src={props.img} alt={props.name}></img>
            <p className="subtitle">
                <strong>Name: </strong>
                {props.name}
            </p>
            <p className="subtitle">
                <strong>Specie: </strong>
                {props.specie}
            </p>
            <p className="subtitle">
                <strong>Location: </strong>
                {props.location}
            </p>
            <NavLink exact to={`/Personajes/${props.id}`}>
                <button className="Btn-Target">Ver mas</button>
            </NavLink>
        </figure>
    )
}

export default Figure