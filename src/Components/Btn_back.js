import React from 'react';
import  { NavLink } from 'react-router-dom'

const BtnBack = (props)=>{
    return(
        <NavLink exact to={props.direction}>
            <button className="Btn-Target">
                <i className="fas fa-chevron-left"></i>
                Regresar
            </button>
        </NavLink>
    )
}

export default BtnBack