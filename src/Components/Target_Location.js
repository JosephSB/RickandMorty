import React from 'react';
import { NavLink } from 'react-router-dom';

const TargetLocation = (props) =>{
    return(
        <div className="Target-Episodio">
            <p className="subtitle aling-start">
                <strong>Dimension: </strong>
                {props.dimension}
            </p>
            <p className="subtitle aling-start">
                <strong>Tipo: </strong>
                {props.type}
            </p>
            <p className="subtitle aling-start">
                <strong>Nombre: </strong>
                {props.name}
            </p>
            <NavLink exact to={`/Locaciones/${props.id}`}>
                <button className="Btn-Target">Ver mas</button>
            </NavLink>
        </div>
    )
}

export default TargetLocation